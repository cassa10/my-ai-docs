# Agentes

Agentes personalizados, separados por herramienta:

| Carpeta | Para | Contenido |
|---|---|---|
| [claude/](./claude/) | Claude Code | 4 agentes y la plantilla |
| [codex/](./codex/README.md) | Codex | Todavía vacía |

## 🤖 Claude Code

Los agentes de [claude/](./claude/) son copia exacta de `~/.claude/agents/` del usuario, tomada el 2026-11-07.

| Agente | Modelo | Esfuerzo | Tipo | Para qué sirve |
|---|---|---|---|---|
| [explorer](./claude/explorer.md) | `haiku` | `high` | Solo lectura | Localiza código y mapea directorios |
| [implementer](./claude/implementer.md) | `haiku` | `max` | Escritura | Cambios acotados, tests y scripts |
| [researcher](./claude/researcher.md) | `haiku` | `max` | Solo lectura | Docs, web y versiones LTS con soporte |
| [reviewer](./claude/reviewer.md) | `haiku` | `max` | Solo lectura | Busca bugs, riesgos de seguridad y datos sensibles antes de un commit o PR |

### 📥 Instalar en Claude Code

```bash
mkdir -p ~/.claude/agents
cp agents/claude/explorer.md agents/claude/implementer.md agents/claude/researcher.md agents/claude/reviewer.md ~/.claude/agents/
```

### 📋 Plantilla

- **[agent-template.md](./claude/agent-template.md)**: estructura base para crear un agente nuevo de Claude Code.
