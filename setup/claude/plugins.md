# Plugins y marketplaces de Claude Code

Versiones de referencia al 2026-11-07. Para reproducir la instalación, seguir los comandos en orden y verificar con `claude plugin list`.

## 🏪 Marketplaces desde GitHub

| Marketplace | Repositorio |
|---|---|
| ponytail | DietrichGebert/ponytail |
| caveman | JuliusBrussee/caveman |
| engram | Gentleman-Programming/engram |
| i-have-adhd | ayghri/i-have-adhd |

## 🧩 Plugins

| Plugin | Versión | Cómo se instala | Documentación | Notas |
|---|---|---|---|---|
| `ponytail@ponytail` | 5.3.2 | Comando de abajo | [ponytail.md](../../skills/ponytail.md) | Escribe un registro local por tarea (`ledger`). No envía nada si no configurás un webhook. |
| `caveman@caveman` | 4.0.1 | Comando de abajo | [caveman.md](../../skills/caveman.md) | Su CLI envía telemetría por defecto. Revisar antes de instalar el CLI. |
| `engram@engram` | 0.1.22 | Comando de abajo, o `engram setup claude-code` | [engram.md](../../mcps/engram.md) | Requiere el binario `engram` en el PATH. |
| `i-have-adhd@i-have-adhd` | 0.4.1 | Comando de abajo | [i-have-adhd.md](../../skills/i-have-adhd.md) | El modo siempre activo queda apagado hasta crear su archivo bandera. |
| `superpowers@synced` | 6.4.2 | No hay comando: viene sincronizado desde claude.ai | [superpowers.md](../../skills/superpowers.md) | Se gestiona desde la cuenta de claude.ai. |
| `engineering@synced` | 1.2.0 | No hay comando: viene sincronizado desde claude.ai | [engineering.md](../../skills/engineering.md) | Se gestiona desde la cuenta de claude.ai. |

## ⚙️ Comandos

```bash
claude plugin marketplace add DietrichGebert/ponytail
claude plugin install ponytail@ponytail

claude plugin marketplace add JuliusBrussee/caveman
claude plugin install caveman@caveman

claude plugin marketplace add Gentleman-Programming/engram
claude plugin install engram@engram

claude plugin marketplace add ayghri/i-have-adhd
claude plugin install i-have-adhd@i-have-adhd
```

Verificar:

```bash
claude plugin list
```

Reiniciar Claude Code después de instalar.

## 🔗 Conectores y MCPs

Los conectores de claude.ai (Google Workspace, Notion, Spotify, Claude Docs) se configuran desde tu cuenta de claude.ai. No están en este repo. Los servidores de los plugins de ingeniería necesitan autorizarse con `/mcp`. Ver la carpeta [mcps/](../../mcps/README.md).
