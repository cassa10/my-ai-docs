# Codex: cómo replicar la configuración

> ⚠️ Codex no está instalado en la máquina de referencia de este repo. Los pasos de abajo vienen de la documentación de cada herramienta y **no se probaron acá**. Verificarlos antes de usarlos.

## 1. Instrucciones globales

Codex lee `AGENTS.md` de su carpeta de configuración (`%USERPROFILE%\.codex\` en Windows, `~/.codex/` en macOS y Linux, o `$CODEX_HOME` si está definida).

Plantilla por defecto, en PowerShell:

```powershell
New-Item -ItemType Directory -Force "$env:USERPROFILE\.codex" | Out-Null
Copy-Item setup\global-agent-instructions.md "$env:USERPROFILE\.codex\AGENTS.md"
```

Si el archivo ya existe, agregar la plantilla al final en vez de reemplazarlo.

## 2. Agentes

Los cuatro agentes de [agents/claude/](../../agents/claude/) están escritos con el formato de Claude Code. Todavía no hay agentes para Codex en [agents/codex/](../../agents/codex/README.md) (frontmatter con `tools` y `model`). Codex no los carga tal cual. Para replicar su comportamiento en Codex, pasar sus reglas al `AGENTS.md` o adaptarlos al formato de agentes de Codex, según su documentación.

## 3. Herramientas

| Herramienta | Comando | Notas |
|---|---|---|
| Engram | `engram setup codex` | Ver [mcps/engram.md](../../mcps/engram.md). |
| Graphify | `graphify install --platform codex` | Para extracción en paralelo, agregar `multi_agent = true` bajo `[features]` en `~/.codex/config.toml`. Se invoca con `$graphify`. Ver [skills/graphify.md](../../skills/graphify.md). |
| i-have-adhd | `codex plugin marketplace add ayghri/i-have-adhd --ref main` y luego `codex plugin add i-have-adhd@i-have-adhd` | Se invoca con `$i-have-adhd`. Ver [skills/i-have-adhd.md](../../skills/i-have-adhd.md). |
| caveman | Ver su `INSTALL.md` | El README del proyecto dice que funciona en Codex. No verificado acá. |
| ponytail | Ver su `INSTALL.md` | Trae `.codex-plugin`. No verificado acá. |

Verificar el plugin de i-have-adhd con `codex plugin list`.

## 🔗 Relacionados

- [setup/README.md](../README.md): visión general de la replicación.
- [global-agent-instructions.md](../global-agent-instructions.md): plantilla por defecto para `AGENTS.md`.
