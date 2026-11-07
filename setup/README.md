# Setup de Agentes

Instrucciones base para que Claude Code y Codex arranquen con las mismas reglas de comportamiento y seguridad.

## 📂 Archivos

- **[global-agent-instructions.md](global-agent-instructions.md)**: plantilla con comunicación, forma de trabajar, seguridad, borrado, Git y versiones. Es la única fuente: si la cambiás, aplica a los dos agentes.

## 🧩 Qué lee cada agente

| Agente | Archivo global (todas las sesiones) | Windows | macOS / Linux |
|---|---|---|---|
| Claude Code | `CLAUDE.md` | `%USERPROFILE%\.claude\CLAUDE.md` | `~/.claude/CLAUDE.md` |
| Codex | `AGENTS.md` | `%USERPROFILE%\.codex\AGENTS.md` (o `%CODEX_HOME%\AGENTS.md` si está definida) | `~/.codex/AGENTS.md` (o `$CODEX_HOME/AGENTS.md`) |

Dentro de este repo:

- [CLAUDE.md](../CLAUDE.md) contiene solo `@AGENTS.md`. Así Claude Code importa las mismas reglas de [AGENTS.md](../AGENTS.md).
- Codex lee [AGENTS.md](../AGENTS.md) directamente. No lee `CLAUDE.md`.

## 🔧 Instalación

El archivo global de Claude Code ya existe en esta máquina (`C:\Users\cassa\.claude\CLAUDE.md`). Para no perder reglas propias, agregar la plantilla al final en vez de reemplazar el archivo. Después revisar si hay reglas duplicadas.

Claude Code (Git Bash):

```bash
cat setup/global-agent-instructions.md >> ~/.claude/CLAUDE.md
```

Codex, si todavía no tiene archivo global (PowerShell):

```powershell
New-Item -ItemType Directory -Force "$env:USERPROFILE\.codex" | Out-Null
Copy-Item setup\global-agent-instructions.md "$env:USERPROFILE\.codex\AGENTS.md"
```

Reiniciar la sesión del agente después de instalar: Claude Code y Codex leen estos archivos al iniciar.

## ✅ Verificar

- **Claude Code:** ejecutar `/memory` para ver qué archivos `CLAUDE.md` se cargaron.
- **Codex:** abrir una sesión nueva y pedirle que resuma sus reglas de seguridad.

## 🔗 Relacionados

- [AGENTS.md](../AGENTS.md): reglas de este repo (revisar los README de cada carpeta al hacer cambios).
- [rules/](../rules/README.md): reglas específicas que puedas reutilizar en proyectos.

---

**Tags:** #setup #claude-code #codex #seguridad
