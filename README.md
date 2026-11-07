<div align="center">

# 🧠 My AI Agents Docs

**Mis prompts, agentes, skills, MCPs, reglas y setup para Claude Code, Codex y cualquier agente de AI.**

Lo más agnóstico posible del modelo y de la tecnología.

</div>

---

## 🗺️ Qué hay acá

| | Sección | Qué encontrás | Empezar por |
|:---:|---|---|---|
| 📝 | [Prompts](prompts/) | Prompts por categoría: coding, writing, analysis y general | [prompts/](prompts/) |
| 🤖 | [Agents](agents/) | Definiciones de agentes AI personalizados | [agent-template.md](agents/agent-template.md) |
| 📋 | [Rules](rules/) | Reglas de estilo, comunicación y límites | [rules-template.md](rules/rules-template.md) |
| 🔌 | [MCPs](mcps/) | Integraciones con herramientas externas | [engram.md](mcps/engram.md) · [context7.md](mcps/context7.md) |
| 🧩 | [Skills](skills/) | Skills para Claude Code, Codex y otros agentes | [skill-template.md](skills/skill-template.md) |
| ⚙️ | [Setup](setup/) | Instrucciones base de comportamiento y seguridad | [global-agent-instructions.md](setup/global-agent-instructions.md) |
| 🧱 | [Templates](templates/) | Plantillas reutilizables | [prompt-template.md](templates/prompt-template.md) |

## 📁 Estructura

```
my-ai-docs/
├── prompts/     # 📝 Prompts organizados por categoría
├── agents/      # 🤖 Configuraciones de agentes AI
├── rules/       # 📋 Reglas personalizadas para agentes
├── mcps/        # 🔌 Configuraciones de Model Context Protocol
├── skills/      # 🧩 Documentación de skills
├── setup/       # ⚙️ Instrucciones base de comportamiento y seguridad
└── templates/   # 🧱 Templates reutilizables
```

## 📝 Prompts

- 💻 **[`prompts/coding/`](prompts/coding/)**: programación y desarrollo
- ✍️ **[`prompts/writing/`](prompts/writing/)**: escritura creativa y técnica
- 📊 **[`prompts/analysis/`](prompts/analysis/)**: análisis de datos y código
- 💡 **[`prompts/general/`](prompts/general/)**: uso general

**Cómo usarlos:** entrá a la categoría, abrí el `.md` que necesites, copiá y adaptá el contenido.

## 🤖 Agents

Cada agente se define en un archivo markdown con su nombre, capacidades y limitaciones, instrucciones de comportamiento y ejemplos de uso.

→ Plantilla: [`agents/agent-template.md`](agents/agent-template.md)

## 📋 Rules

Reglas que definen comportamientos específicos para agentes AI: estilo de código, preferencias de comunicación, restricciones y configuraciones por proyecto.

→ Plantilla: [`rules/rules-template.md`](rules/rules-template.md)

## 🔌 MCPs (Model Context Protocol)

Configuraciones para extender las capacidades de los agentes con herramientas externas, bases de datos, APIs y contexto propio.

- 🧠 **[Engram](mcps/engram.md)**: memoria persistente entre sesiones.
- 📚 **[Context7](mcps/context7.md)**: documentación de librerías actualizada.

→ Plantilla: [`mcps/mcp-template.md`](mcps/mcp-template.md)

## 🧩 Skills

Paquetes de instrucciones que los agentes cargan bajo demanda. Cada skill documenta su instalación, ejemplos y limitaciones.

→ Plantilla: [`skills/skill-template.md`](skills/skill-template.md)

## ⚙️ Setup de Agentes

Instrucciones base que cualquier agente debería cargar por defecto:

- 📄 **[`setup/global-agent-instructions.md`](setup/global-agent-instructions.md)**: plantilla común para `CLAUDE.md` (Claude Code) y `AGENTS.md` (Codex).
- 🔗 **[`CLAUDE.md`](CLAUDE.md)** importa **[`AGENTS.md`](AGENTS.md)**, así Claude Code usa las mismas reglas del repo.

→ Cómo instalarlo en cada agente: [`setup/README.md`](setup/README.md)

## 🚀 Inicio rápido

```bash
# 📝 Nuevo prompt
cp templates/prompt-template.md prompts/[categoria]/mi-nuevo-prompt.md

# 🤖 Nuevo agente
cp agents/agent-template.md agents/mi-nuevo-agente.md

# 📋 Nueva regla
cp rules/rules-template.md rules/mi-nueva-regla.md

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
| [`rules-template.md`](rules/rules-template.md) | 📋 Reglas |
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
