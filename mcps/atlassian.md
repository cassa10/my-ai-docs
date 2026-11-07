# Atlassian

## 📋 Información General

- **Nombre:** Atlassian (Jira y Confluence)
- **Tipo:** Remoto (HTTP) con OAuth, declarado por el plugin de ingeniería
- **Endpoint:** `https://mcp.atlassian.com/v1/mcp`
- **Estado en esta máquina:** ⚠️ requiere autenticación con `/mcp`
- **Última revisión:** 2026-11-07

## 🎯 Propósito

Buscar y actualizar tickets de Jira y páginas de Confluence desde el agente.

## 🔧 Configuración

Viene declarado en el plugin de ingeniería (ver [skills/engineering.md](../skills/engineering.md)). Para habilitarlo, ejecutar `/mcp` y autorizar Atlassian en el navegador.

## 🔌 Recursos Disponibles

Las tools se listan después de autorizar. Esta guía no las documenta todavía.

## 🔐 Autenticación y Seguridad

- OAuth con la cuenta de Atlassian. El agente no debe guardar tokens en el repo.
- Crear, cambiar o cerrar tickets y páginas afecta al equipo: confirmar antes.

## ⚠️ Limitaciones

- No funciona hasta autorizar `/mcp`.

## 📖 Referencias

- [Atlassian Remote MCP](https://www.atlassian.com/platform/remote-mcp-server)

---

**Tags:** #mcp #atlassian #jira #confluence #oauth
