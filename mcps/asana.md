# Asana

## 📋 Información General

- **Nombre:** Asana
- **Tipo:** Remoto (HTTP) con OAuth, declarado por el plugin de ingeniería
- **Endpoint:** `https://mcp.asana.com/v2/mcp`
- **Estado en esta máquina:** ⚠️ requiere autenticación con `/mcp`
- **Última revisión:** 2026-11-07

## 🎯 Propósito

Consultar y actualizar tareas y proyectos de Asana desde el agente.

## 🔧 Configuración

Viene declarado en el plugin de ingeniería (ver [skills/engineering.md](../skills/engineering.md)). Para habilitarlo, ejecutar `/mcp` y autorizar Asana en el navegador.

## 🔌 Recursos Disponibles

Las tools se listan después de autorizar. Esta guía no las documenta todavía.

## 🔐 Autenticación y Seguridad

- OAuth con la cuenta de Asana.
- Crear o cerrar tareas afecta al equipo: confirmar antes.

## ⚠️ Limitaciones

- No funciona hasta autorizar `/mcp`.

## 📖 Referencias

- [Asana MCP](https://developers.asana.com/docs/mcp-server)

---

**Tags:** #mcp #asana #tareas #oauth
