# Plugins y marketplaces de Claude Code

Versiones de referencia al 2026-11-07. Para reproducir la instalación, seguir los comandos en orden y verificar con `claude plugin list`.

## 🏪 Marketplaces desde GitHub

| Marketplace | Repositorio |
|---|---|
| ponytail | DietrichGebert/ponytail |
| caveman | JuliusBrussee/caveman |
| engram | Gentleman-Programming/engram |
| i-have-adhd | ayghri/i-have-adhd |
| googlechrome | GoogleChrome/modern-web-guidance |
| claude-plugins-official | anthropics/claude-plugins-official |

## 🧩 Plugins

| Plugin | Versión | Cómo se instala | Documentación | Notas |
|---|---|---|---|---|
| `ponytail@ponytail` | 5.3.2 | Comando de abajo | [ponytail.md](../../skills/ponytail.md) | Escribe un registro local por tarea (`ledger`). No envía nada si no configurás un webhook. |
| `caveman@caveman` | 4.0.1 | Comando de abajo | [caveman.md](../../skills/caveman.md) | Su CLI envía telemetría por defecto. Revisar antes de instalar el CLI. |
| `engram@engram` | 0.1.22 | Comando de abajo, o `engram setup claude-code` | [engram.md](../../mcps/engram.md) | Requiere el binario `engram` en el PATH. |
| `i-have-adhd@i-have-adhd` | 0.4.1 | Comando de abajo | [i-have-adhd.md](../../skills/i-have-adhd.md) | El modo siempre activo queda apagado hasta crear su archivo bandera. |
| `modern-web-guidance@googlechrome` | 1.0.1 | Comando de abajo | [modern-web-guidance.md](../../skills/modern-web-guidance.md) | Telemetría anónima de Google; se apaga con `DISABLE_TELEMETRY=1`. Necesita Node.js. |
| `frontend-design@claude-plugins-official` | 1.1.1 | Comando de abajo, o desde la UI de Claude | [frontend-design.md](../../skills/frontend-design.md) | Solo criterio de diseño visual. |
| `typescript-lsp@claude-plugins-official` | 1.0.0 | Comando de abajo | [typescript-lsp.md](../../skills/typescript-lsp.md) | Requiere `typescript-language-server` instalado con npm. |
| `security-guidance@claude-plugins-official` | 2.0.21 | Comando de abajo | [security-guidance.md](../../skills/security-guidance.md) | Envía el diff a un LLM en cada turno y commit. Requiere Python 3.8+. |
| `code-review@claude-plugins-official` | 1.0.1 | Comando de abajo | [code-review.md](../../skills/code-review.md) | Se solapa con `pr-review-toolkit`. |
| `commit-commands@claude-plugins-official` | 1.0.1 | Comando de abajo | [commit-commands.md](../../skills/commit-commands.md) | `/clean_gone` borra ramas locales y worktrees. |
| `code-simplifier@claude-plugins-official` | 1.0.0 | Comando de abajo | [code-simplifier.md](../../skills/code-simplifier.md) | Su agente tiene el mismo nombre que el de `pr-review-toolkit`. |
| `claude-md-management@claude-plugins-official` | 1.0.0 | Comando de abajo | [claude-md-management.md](../../skills/claude-md-management.md) | Se ejecuta solo a pedido. |
| `pr-review-toolkit@claude-plugins-official` | 1.0.1 | Comando de abajo | [pr-review-toolkit.md](../../skills/pr-review-toolkit.md) | Seis agentes. Se solapa con `code-review`. |
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

claude plugin marketplace add GoogleChrome/modern-web-guidance --scope user
claude plugin install modern-web-guidance@googlechrome --scope user

claude plugin marketplace add anthropics/claude-plugins-official
claude plugin install frontend-design@claude-plugins-official

claude plugin install typescript-lsp@claude-plugins-official
claude plugin install security-guidance@claude-plugins-official
claude plugin install code-review@claude-plugins-official
claude plugin install commit-commands@claude-plugins-official
claude plugin install code-simplifier@claude-plugins-official
claude plugin install claude-md-management@claude-plugins-official
claude plugin install pr-review-toolkit@claude-plugins-official
```

Verificar:

```bash
claude plugin list
```

Reiniciar Claude Code después de instalar.

## 🔗 Conectores y MCPs

Los conectores de claude.ai (Google Workspace, Notion, Spotify, Claude Docs) se configuran desde tu cuenta de claude.ai. No están en este repo. Los servidores de los plugins de ingeniería necesitan autorizarse con `/mcp`. Ver la carpeta [mcps/](../../mcps/README.md).
