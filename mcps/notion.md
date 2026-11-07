# Notion

## 📋 Información General

- **Nombre:** Notion
- **Tipo:** Conector remoto (HTTP)
- **Endpoint:** `https://mcp.notion.com/mcp`
- **Acceso:** conector de claude.ai, o plugin de ingeniería (requiere autenticación con `/mcp`).
- **Última revisión:** 2026-11-07

## 🎯 Propósito

Buscar, leer y editar páginas, bases de datos y comentarios de Notion desde el agente.

## 🔧 Configuración

Hay dos formas de conectarlo, las dos al mismo endpoint:

1. **Conector de claude.ai:** sin configuración local.
2. **Plugin de ingeniería:** declara el mismo endpoint y necesita autenticarse con `/mcp`.

Tener las dos activas suma tools duplicadas. Conviene dejar solo una.

## 🔌 Recursos Disponibles

### Tools (principales)

- `notion-search`: busca en el workspace.
- `notion-fetch`: lee una página o base.
- `notion-create-pages`, `notion-create-database`: crean páginas y bases.
- `notion-update-page`, `notion-move-pages`, `notion-duplicate-page`: editan, mueven o duplican páginas.
- `notion-query-data-sources`: consulta bases de datos.
- `notion-create-comment`, `notion-get-comments`: manejan comentarios.

## 🔐 Autenticación y Seguridad

- Autenticación con la cuenta de Notion.
- Confirmar antes de crear, mover, duplicar o editar páginas de equipo.

## ⚠️ Limitaciones

- Las tools de Notion pueden variar entre el conector y el plugin.

## 📖 Referencias

- [Notion MCP](https://developers.notion.com/docs/mcp)

---

**Tags:** #mcp #notion #docs #conector
