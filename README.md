<div align="center">

# 🧠 My AI Agents Docs

**Mis agentes, skills, MCPs, templates y setup para Claude Code, Codex y cualquier agente de AI.**

Lo más agnóstico posible del modelo y de la tecnología.

</div>

---

## 🗺️ Qué hay acá

| | Sección | Qué encontrás | Empezar por |
|:---:|---|---|---|
| 🤖 | [Agents](agents/) | Definiciones de agentes AI personalizados | [agent-template.md](agents/agent-template.md) |
| 🔌 | [MCPs](mcps/) | Integraciones con herramientas externas | [engram.md](mcps/engram.md) · [context7.md](mcps/context7.md) |
| 🧩 | [Skills](skills/) | Skills para Claude Code, Codex y otros agentes | [skill-template.md](skills/skill-template.md) |
| ⚙️ | [Setup](setup/) | Instrucciones base de comportamiento y seguridad | [global-agent-instructions.md](setup/global-agent-instructions.md) |
| 🧱 | [Templates](templates/) | Plantillas reutilizables | [prompt-template.md](templates/prompt-template.md) |

## 📁 Estructura

```
my-ai-docs/
├── agents/      # 🤖 Configuraciones de agentes AI
├── mcps/        # 🔌 Configuraciones de Model Context Protocol
├── skills/      # 🧩 Documentación de skills
├── setup/       # ⚙️ Instrucciones base de comportamiento y seguridad
└── templates/   # 🧱 Templates reutilizables
```

## 🤖 Agents

Cada agente se define en un archivo markdown con su nombre, capacidades y limitaciones, instrucciones de comportamiento y ejemplos de uso.

→ Plantilla: [`agents/agent-template.md`](agents/agent-template.md)

## 🔌 MCPs (Model Context Protocol)

Configuraciones para extender las capacidades de los agentes con herramientas externas, bases de datos, APIs y contexto propio.

- 🧠 **[Engram](mcps/engram.md)** · 📚 **[Context7](mcps/context7.md)**: memoria entre sesiones y documentación de librerías.
- ☁️ **[Google Workspace](mcps/google-workspace.md)** · 📓 **[Notion](mcps/notion.md)** · 📄 **[Claude Docs](mcps/claude-docs.md)** · 🎵 **[Spotify](mcps/spotify.md)**: conectores de claude.ai.
- 🔑 Con autenticación en `/mcp`: **[Slack](mcps/slack.md)**, **[Linear](mcps/linear.md)**, **[Atlassian](mcps/atlassian.md)**, **[GitHub](mcps/github.md)**, **[Asana](mcps/asana.md)**, **[PagerDuty](mcps/pagerduty.md)** y **[Datadog](mcps/datadog.md)**.
- 🎭 **[Playwright](mcps/playwright.md)**: control de navegador local.

→ Índice completo: [`mcps/README.md`](mcps/README.md) · Plantilla: [`mcps/mcp-template.md`](mcps/mcp-template.md)

## 🧩 Skills

Paquetes de instrucciones que los agentes cargan bajo demanda:

- 🐾 **[Caveman](skills/caveman.md)**: respuestas comprimidas, con 22 skills.
- 🧘 **[Ponytail](skills/ponytail.md)**: el mínimo cambio que resuelve la tarea.
- 🦸 **[Superpowers](skills/superpowers.md)**: flujo de trabajo y proceso.
- 🛠️ **[Engineering](skills/engineering.md)**: revisión, depuración, arquitectura e incidentes.
- 🕸️ **[Graphify](skills/graphify.md)**: convierte un proyecto en un grafo de conocimiento consultable.

→ Índice: [`skills/README.md`](skills/README.md) · Plantilla: [`skills/skill-template.md`](skills/skill-template.md)

## ⚙️ Setup de Agentes

Instrucciones base que cualquier agente debería cargar por defecto:

- 📄 **[`setup/global-agent-instructions.md`](setup/global-agent-instructions.md)**: plantilla común para `CLAUDE.md` (Claude Code) y `AGENTS.md` (Codex).
- 🔗 **[`CLAUDE.md`](CLAUDE.md)** importa **[`AGENTS.md`](AGENTS.md)**, así Claude Code usa las mismas reglas del repo.

→ Cómo instalarlo en cada agente: [`setup/README.md`](setup/README.md)

## 🚀 Inicio rápido

```bash
# 🤖 Nuevo agente
cp agents/agent-template.md agents/mi-nuevo-agente.md

# 🔌 Nueva configuración MCP
cp mcps/mcp-template.md mcps/mi-nuevo-mcp.md

# 🧩 Nuevo skill
cp skills/skill-template.md skills/mi-nuevo-skill.md
```

## 🧱 Templates

| Template | Para qué sirve |
|---|---|
| [`prompt-template.md`](templates/prompt-template.md) | 📝 Prompts |
| [`agent-template.md`](agents/agent-template.md) | 🤖 Agentes |
| [`mcp-template.md`](mcps/mcp-template.md) | 🔌 MCPs |
| [`skill-template.md`](skills/skill-template.md) | 🧩 Skills |

## 🤝 Contribuir

Es un repositorio personal, pero las sugerencias son bienvenidas. Si encontrás algo útil, adaptalo a tus necesidades.

## 📄 Licencia

Uso personal. Adaptá y modificá según tus necesidades.

---

<div align="center">

**Última actualización:** 2026-11-07

</div>
