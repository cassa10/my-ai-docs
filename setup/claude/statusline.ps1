# Status line de Claude Code: directorio | rama git | contexto | tokens de sesion | costo USD
$ErrorActionPreference = 'SilentlyContinue'
$inv = [Globalization.CultureInfo]::InvariantCulture
$esc = [char]27

function Paint($code, $text) { "$esc[${code}m$text$esc[0m" }

function Fmt($n) {
    if ($n -ge 1000000) { return ($n / 1000000).ToString('0.0', $inv) + 'M' }
    if ($n -ge 1000) { return ($n / 1000).ToString('0.0', $inv) + 'k' }
    return [string][long]$n
}

function Num($text, $name) {
    $m = [regex]::Match($text, '"' + $name + '":(\d+)')
    if ($m.Success) { [long]$m.Groups[1].Value } else { 0 }
}

$data = [Console]::In.ReadToEnd() | ConvertFrom-Json

# Directorio (con ~ para el home)
$dir = $data.workspace.current_dir
if (-not $dir) { $dir = $data.cwd }
if (-not $dir) { $dir = (Get-Location).Path }
$dir = $dir -replace '/', '\'
$shown = $dir
if ($shown.StartsWith($HOME, [StringComparison]::OrdinalIgnoreCase)) {
    $shown = '~' + $shown.Substring($HOME.Length)
}

# Rama git (vacia si no es un repo)
$branch = ''
if (Get-Command git) {
    $branch = "$(git -C $dir symbolic-ref --short -q HEAD 2>$null)".Trim()
    if (-not $branch) { $branch = "$(git -C $dir rev-parse --short HEAD 2>$null)".Trim() }
}

# Contexto: % usado y tokens usados / tamano de la ventana
$ctx = $data.context_window
$size = [double]$ctx.context_window_size
$ctxTok = [double]$ctx.total_input_tokens
$pct = $ctx.used_percentage
if ($null -eq $pct) { $pct = if ($size -gt 0) { $ctxTok / $size * 100 } else { 0 } }
$pct = [math]::Round([double]$pct)
$pctColor = if ($pct -ge 80) { 31 } elseif ($pct -ge 50) { 33 } else { 32 }
$ctxText = "ctx $pct%"
if ($size -gt 0) { $ctxText += " $(Fmt $ctxTok)/$(Fmt $size)" }

# Tokens de la sesion: suma del transcript, un mensaje por id (input + output + cache creado, sin lecturas de cache)
$sessionTok = 0
$path = $data.transcript_path
if ($path -and (Test-Path -LiteralPath $path)) {
    $seen = @{}
    $fs = $null
    try {
        $fs = [IO.File]::Open($path, 'Open', 'Read', 'ReadWrite')
        $sr = New-Object IO.StreamReader($fs)
        while ($null -ne ($line = $sr.ReadLine())) {
            $i = $line.IndexOf('"usage":{')
            if ($i -lt 0) { continue }
            $id = [regex]::Match($line, '"id":"(msg_[^"]+)"')
            if (-not $id.Success) { continue }
            $usage = $line.Substring($i)
            $seen[$id.Groups[1].Value] = (Num $usage 'input_tokens') + (Num $usage 'output_tokens') + (Num $usage 'cache_creation_input_tokens')
        }
    } finally {
        if ($fs) { $fs.Dispose() }
    }
    foreach ($v in $seen.Values) { $sessionTok += $v }
}

# Costo de la sesion en USD
$cost = [double]$data.cost.total_cost_usd
$costText = '$' + $cost.ToString($(if ($cost -gt 0 -and $cost -lt 0.01) { '0.0000' } else { '0.00' }), $inv)

# Modelo y nivel de thinking (effort); "think off" si el thinking esta desactivado
$modelText = "$($data.model.display_name)"
if (-not $modelText) { $modelText = "$($data.model.id)" }
$effort = "$($data.effort.level)"
if ($data.thinking.enabled -eq $false) { $modelText += ' (think off)' }
elseif ($effort) { $modelText += " ($effort)" }

$parts = @((Paint 97 $modelText), (Paint 36 $shown))
if ($branch) { $parts += (Paint 35 "git:$branch") }
$parts += (Paint $pctColor $ctxText)
$parts += (Paint 34 "tokens $(Fmt $sessionTok)")
$parts += (Paint 33 $costText)

# Limites de uso (solo si Claude Code los envia): ventana de 5h, semanal y limite de gasto
$limits = @()
foreach ($w in @(@('5h', $data.rate_limits.five_hour), @('7d', $data.rate_limits.seven_day), @('gasto', $data.rate_limits.spend_limit))) {
    if ($null -ne $w[1].used_percentage) {
        $p = [math]::Round([double]$w[1].used_percentage)
        $limits += "$($w[0]) $p%"
    }
}
if ($limits) {
    $maxP = ($limits | ForEach-Object { [int]([regex]::Match($_, '(\d+)%').Groups[1].Value) } | Measure-Object -Maximum).Maximum
    $parts += (Paint $(if ($maxP -ge 80) { 31 } elseif ($maxP -ge 50) { 33 } else { 32 }) ("uso " + ($limits -join ' ')))
}

[Console]::Out.Write(($parts -join (Paint 90 ' | ')))
