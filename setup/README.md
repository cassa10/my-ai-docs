# Setup de Agentes

**Objetivo:** documentar y poder replicar la instalación de todo en Claude Code o Codex sin problemas a futuro.

## 📂 Archivos

| Ruta | Qué es |
|---|---|
| [claude/CLAUDE.md](claude/CLAUDE.md) | Instrucciones globales de Claude Code. Copia exacta del archivo real del usuario. Antes de commitear, verificar desde la raíz del repo que no haya diferencias: `git diff --no-index ~/.claude/CLAUDE.md setup/claude/CLAUDE.md`. |
| [claude/settings.template.json](claude/settings.template.json) | Configuración de Claude Code: permisos, plugins, marketplaces y modelo. La ruta de la status line va como placeholder. |
| [claude/statusline.ps1](claude/statusline.ps1) | Script de la status line. |
| [claude/plugins.md](claude/plugins.md) | Marketplaces y plugins, con los comandos para instalarlos. |
| [agents/claude/](../agents/claude/) | Los cuatro agentes personalizados de Claude Code. |
| [global-agent-instructions.md](global-agent-instructions.md) | Plantilla por defecto para el `AGENTS.md` global de Codex. |
| [codex/README.md](codex/README.md) | Cómo replicar la configuración en Codex. |

## 🧩 Qué lee cada agente

| Agente | Archivo global (todas las sesiones) | Windows | macOS / Linux |
|---|---|---|---|
| Claude Code | `CLAUDE.md` | `%USERPROFILE%\.claude\CLAUDE.md` | `~/.claude/CLAUDE.md` |
| Codex | `AGENTS.md` | `%USERPROFILE%\.codex\AGENTS.md` (o `%CODEX_HOME%\AGENTS.md`) | `~/.codex/AGENTS.md` (o `$CODEX_HOME/AGENTS.md`) |

Dentro del repo, [CLAUDE.md](../CLAUDE.md) de la raíz contiene solo `@AGENTS.md`. Sirve para que Claude Code use las reglas de este repo. No es el mismo archivo que [claude/CLAUDE.md](claude/CLAUDE.md), que es la configuración global.

## 🔁 Replicar Claude Code en otra máquina

1. Instalar Claude Code e iniciar sesión.
2. Si ya existen, hacer copia de respaldo de `~/.claude/CLAUDE.md` y `~/.claude/settings.json`.
3. Copiar las reglas globales (Git Bash):

   ```bash
   cp setup/claude/CLAUDE.md ~/.claude/CLAUDE.md
   ```

4. Copiar los agentes:

   ```bash
   mkdir -p ~/.claude/agents
   cp agents/claude/explorer.md agents/claude/implementer.md agents/claude/researcher.md agents/claude/reviewer.md ~/.claude/agents/
   ```

5. Configuración. Revisar [claude/settings.template.json](claude/settings.template.json) y combinarla con `~/.claude/settings.json`. Antes, reemplazar `<RUTA_HOME>` por tu carpeta de usuario con barras `/`, por ejemplo `C:/Users/tu-usuario`. Después copiar la status line:

   ```bash
   cp setup/claude/statusline.ps1 ~/.claude/statusline.ps1
   ```

6. Plugins y marketplaces: seguir [claude/plugins.md](claude/plugins.md).
7. Conectores de claude.ai y skills sincronizados: se configuran desde tu cuenta de claude.ai, no desde el repo.
8. Reiniciar Claude Code y verificar: `claude plugin list`, `/memory` para ver qué `CLAUDE.md` se cargó, y `/agents` para ver los agentes.

## ❌ Qué no se replica, y por qué

- `~/.claude/.credentials.json`: credenciales. Nunca copiar.
- `history.jsonl`, `projects/`, `sessions/`, `session-env/`, `file-history/`, `backups/`, `plans/`, `tasks/`, `teams/`, `spares/`: historial y datos de uso. Pueden tener información personal o rutas de tu máquina.
- `plugins/`: caché local con rutas de tu máquina. Se reinstala con [claude/plugins.md](claude/plugins.md).
- `mcp-needs-auth-cache.json` y los archivos `.last-*`: estado temporal.
- `skills/synced/`: lo sincroniza claude.ai.

## 🔗 Relacionados

- [AGENTS.md](../AGENTS.md): reglas de este repo (revisar los README de cada carpeta al hacer cambios).
- [codex/README.md](codex/README.md): replicación en Codex.
