# Personal Prompts Repository

Repositorio personal para organizar y gestionar prompts, agentes, reglas y configuraciones de Model Context Protocol (MCP), lo mas agnostico del modelo y tecnología.

## 📁 Estructura del Repositorio

```
my-ai-docs/
├── prompts/          # Colección de prompts organizados por categoría
├── agents/           # Configuraciones de agentes AI
├── rules/            # Reglas personalizadas para agentes
├── mcps/             # Configuraciones de Model Context Protocol
├── skills/           # Documentación de skills para agentes AI
├── setup/            # Instrucciones base de comportamiento y seguridad para agentes
└── templates/        # Templates reutilizables
```

## 📝 Prompts

Directorio organizado de prompts para diferentes propósitos:

- **`prompts/coding/`** - Prompts relacionados con programación y desarrollo
- **`prompts/writing/`** - Prompts para escritura creativa y técnica
- **`prompts/analysis/`** - Prompts para análisis de datos y código
- **`prompts/general/`** - Prompts de uso general

### Cómo usar los prompts

1. Navega al directorio de la categoría deseada
2. Abre el archivo `.md` del prompt que necesites
3. Copia y adapta el contenido según tus necesidades

## 🤖 Agents

Configuraciones de agentes AI personalizados. Cada agente está definido en un archivo markdown con:

- Nombre y descripción del agente
- Capacidades y limitaciones
- Instrucciones de comportamiento
- Ejemplos de uso

Ver `agents/agent-template.md` para crear nuevos agentes.

## 📋 Rules

Reglas personalizadas que definen comportamientos específicos para agentes AI:

- Reglas de estilo de código
- Preferencias de comunicación
- Restricciones y límites
- Configuraciones específicas de proyecto

Ver `rules/rules-template.md` para crear nuevas reglas.

## 🔌 MCPs (Model Context Protocol)

Configuraciones de Model Context Protocol para extender las capacidades de los agentes:

- Integraciones con herramientas externas
- Acceso a bases de datos y APIs
- Configuraciones de contexto personalizado

Ver `mcps/mcp-template.md` para configurar nuevos MCPs.

- **[context7.md](mcps/context7.md)**: documentación de librerías actualizada.
- **[engram.md](mcps/engram.md)**: memoria persistente entre sesiones.

## 🧩 Skills

Documentación de skills (paquetes de instrucciones que los agentes cargan bajo demanda) para Claude Code, Codex u otros agentes:

- Cada skill tiene su propio archivo en `skills/` con instalación, ejemplos y limitaciones.

Ver `skills/skill-template.md` para documentar nuevos skills.

## ⚙️ Setup de Agentes

Instrucciones base que cualquier agente debería cargar por defecto (comportamiento y seguridad):

- **[setup/global-agent-instructions.md](setup/global-agent-instructions.md)**: plantilla común para `CLAUDE.md` (Claude Code) y `AGENTS.md` (Codex).
- **[CLAUDE.md](CLAUDE.md)** importa **[AGENTS.md](AGENTS.md)**, así Claude Code usa las mismas reglas del repo.

Ver [setup/README.md](setup/README.md) para instalar la plantilla en cada agente.

## 🚀 Inicio Rápido

### Crear un nuevo prompt

```bash
cp templates/prompt-template.md prompts/[categoria]/mi-nuevo-prompt.md
```

### Crear un nuevo agente

```bash
cp agents/agent-template.md agents/mi-nuevo-agente.md
```

### Crear una nueva regla

```bash
cp rules/rules-template.md rules/mi-nueva-regla.md
```

### Crear una nueva configuración MCP

```bash
cp mcps/mcp-template.md mcps/mi-nuevo-mcp.md
```

### Crear un nuevo skill

```bash
cp skills/skill-template.md skills/mi-nuevo-skill.md
```

## 📚 Templates

Los templates proporcionan una estructura base para crear nuevos elementos:

- **`prompt-template.md`** - Template para prompts
- **`agent-template.md`** - Template para agentes
- **`rules-template.md`** - Template para reglas
- **`mcp-template.md`** - Template para MCPs
- **`skill-template.md`** - Template para skills

## 🤝 Contribuir

Este es un repositorio personal, pero las sugerencias son bienvenidas. Si encontrás algo útil, sentite libre de adaptarlo a tus necesidades.

## 📄 Licencia

Uso personal. Adaptá y modificá según tus necesidades.

---

**Última actualización:** 2026-11-07
