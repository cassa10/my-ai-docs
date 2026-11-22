<div align="center">

# 🧠 My AI Agents Docs

**Mis agentes, skills, MCPs, templates y setup para Claude Code, Codex y cualquier agente de AI.**

Lo más agnóstico posible del modelo y de la tecnología.

🎯 **Objetivo:** documentar y poder replicar la instalación de todo en Claude Code o Codex sin problemas a futuro.

</div>

---

## 🗺️ Qué hay acá

| | Sección | Qué encontrás | Empezar por |
|:---:|---|---|---|
| 🤖 | [Agents](agents/) | Los 4 agentes personalizados de Claude Code | [explorer.md](agents/claude/explorer.md) |
| 🔌 | [MCPs](mcps/) | Integraciones con herramientas externas | [engram.md](mcps/engram.md) · [context7.md](mcps/context7.md) |
| 🧩 | [Skills](skills/) | Skills para Claude Code, Codex y otros agentes | [skill-template.md](skills/skill-template.md) |
| 🖥️ | [Apps](apps/) | Aplicaciones que orquestan agentes | [orca.md](apps/orca.md) |
| ⚙️ | [Setup](setup/) | Replicación de Claude Code y Codex | [setup/README.md](setup/README.md) |
| 🧱 | [Templates](templates/) | Plantillas reutilizables | [prompt-template.md](templates/prompt-template.md) |

## 📁 Estructura

```
my-ai-docs/
├── agents/      # 🤖 Configuraciones de agentes AI
├── apps/        # 🖥️ Aplicaciones que orquestan agentes
├── mcps/        # 🔌 Configuraciones de Model Context Protocol
├── skills/      # 🧩 Documentación de skills
├── setup/       # ⚙️ Replicación de Claude Code y Codex
└── templates/   # 🧱 Templates reutilizables
```

## 🤖 Agents

Agentes personalizados para Claude Code, listos para copiar a `~/.claude/agents/`:

- 🔎 **explorer**: localiza código y mapea directorios (solo lectura).
- 🛠️ **implementer**: cambios acotados y tests.
- 📚 **researcher**: docs y versiones LTS con soporte (solo lectura).
- 🔍 **reviewer**: busca bugs, riesgos de seguridad y datos sensibles antes de un commit o PR (solo lectura).

→ Índice: [`agents/README.md`](agents/README.md) · Plantilla: [`agents/claude/agent-template.md`](agents/claude/agent-template.md)

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
- 🧠 **[i-have-adhd](skills/i-have-adhd.md)**: formato de respuestas pensado para lectura con TDAH.
- 🌐 **[Modern Web Guidance](skills/modern-web-guidance.md)**: prácticas web actuales de Google Chrome para HTML, CSS y JS de cliente.
- 🎨 **[Frontend Design](skills/frontend-design.md)**: diseño visual distintivo para interfaces.
- 🔷 **[TypeScript LSP](skills/typescript-lsp.md)**: ir a definiciones y ver errores de tipos reales en TypeScript y JavaScript.
- 🛡️ **[Security Guidance](skills/security-guidance.md)**: revisión de seguridad del código que escribe Claude, al editar y al cerrar cada turno.
- 🔍 **[Code Review](skills/code-review.md)**: revisión automática de pull requests con agentes y confianza por hallazgo.
- 📝 **[Commit Commands](skills/commit-commands.md)**: comandos para commit, commit con PR y limpieza de ramas.
- ✂️ **[Code Simplifier](skills/code-simplifier.md)**: agente que simplifica código sin cambiar su funcionalidad.
- 📒 **[CLAUDE.md Management](skills/claude-md-management.md)**: auditoría y actualización de archivos CLAUDE.md.
- 🧪 **[PR Review Toolkit](skills/pr-review-toolkit.md)**: seis agentes que revisan comentarios, tests, errores, tipos y simplificación de un PR.

→ Índice: [`skills/README.md`](skills/README.md) · Plantilla: [`skills/skill-template.md`](skills/skill-template.md)

## 🖥️ Apps

Aplicaciones que coordinan agentes CLI desde una interfaz:

- 🪐 **[Orca](apps/orca.md)**: ejecuta varios agentes (Claude Code, Codex, entre otros) en paralelo, cada uno en su worktree, desde escritorio y móvil.

→ Índice: [`apps/README.md`](apps/README.md)

## ⚙️ Setup de Agentes

Instrucciones base que cualquier agente debería cargar por defecto:

- 🧰 **[`setup/claude/`](setup/claude/)**: configuración de Claude Code (reglas globales, settings, status line y plugins).
- 🧭 **[`setup/codex/`](setup/codex/README.md)**: cómo replicar la configuración en Codex, con la plantilla por defecto [`global-agent-instructions.md`](setup/global-agent-instructions.md).
- 🔗 **[`CLAUDE.md`](CLAUDE.md)** importa **[`AGENTS.md`](AGENTS.md)**, así Claude Code usa las mismas reglas del repo.

→ Cómo instalarlo en cada agente: [`setup/README.md`](setup/README.md)

## 🚀 Inicio rápido

```bash
# 🤖 Nuevo agente
cp agents/claude/agent-template.md agents/claude/mi-nuevo-agente.md

# 🔌 Nueva configuración MCP
cp mcps/mcp-template.md mcps/mi-nuevo-mcp.md

# 🧩 Nuevo skill
cp skills/skill-template.md skills/mi-nuevo-skill.md
```

## 🧱 Templates

| Template | Para qué sirve |
|---|---|
| [`prompt-template.md`](templates/prompt-template.md) | 📝 Prompts |
| [`agent-template.md`](agents/claude/agent-template.md) | 🤖 Agentes |
| [`mcp-template.md`](mcps/mcp-template.md) | 🔌 MCPs |
| [`skill-template.md`](skills/skill-template.md) | 🧩 Skills |

## 🤝 Contribuir

Es un repositorio personal, pero las sugerencias son bienvenidas. Si encontrás algo útil, adaptalo a tus necesidades.

## 📄 Licencia

Uso personal. Adaptá y modificá según tus necesidades.

---

<div align="center">

**Última actualización:** 2026-11-21

</div>
