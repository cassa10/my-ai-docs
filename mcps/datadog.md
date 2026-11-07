# Datadog

## 📋 Información General

- **Nombre:** Datadog
- **Tipo:** Remoto (HTTP) con OAuth, declarado por el plugin de ingeniería
- **Endpoint:** `https://mcp.datadoghq.com/api/unstable/mcp-server/mcp` (la ruta dice `unstable`, puede cambiar)
- **Estado en esta máquina:** ⚠️ requiere autenticación con `/mcp`
- **Última revisión:** 2026-11-07

## 🎯 Propósito

Consultar métricas, logs, trazas y monitores de Datadog durante el diagnóstico de un problema.

## 🔧 Configuración

Viene declarado en el plugin de ingeniería (ver [skills/engineering.md](../skills/engineering.md)). Para habilitarlo, ejecutar `/mcp` y autorizar Datadog en el navegador.

## 🔌 Recursos Disponibles

Las tools se listan después de autorizar. Esta guía no las documenta todavía.

## 🔐 Autenticación y Seguridad

- OAuth con la cuenta de Datadog. Revisar qué organización y permisos concede.
- Los logs pueden contener datos personales. No copiarlos al repo ni a documentos compartidos sin revisar.

## ⚠️ Limitaciones

- No funciona hasta autorizar `/mcp`.
- El endpoint está marcado como `unstable`.

## 📖 Referencias

- [Datadog MCP Server](https://docs.datadoghq.com/bits_ai/mcp_server/)

---

**Tags:** #mcp #datadog #observabilidad #oauth
