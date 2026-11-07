# Slack

## 📋 Información General

- **Nombre:** Slack
- **Tipo:** Remoto (HTTP) con OAuth, declarado por el plugin de ingeniería
- **Endpoint:** `https://mcp.slack.com/mcp`
- **Estado en esta máquina:** ⚠️ requiere autenticación con `/mcp`
- **Última revisión:** 2026-11-07

## 🎯 Propósito

Buscar y leer conversaciones de Slack, y enviar mensajes desde el agente.

## 🔧 Configuración

Viene declarado en el plugin de ingeniería (ver [skills/engineering.md](../skills/engineering.md)). Para habilitarlo, ejecutar `/mcp` y completar la autorización de Slack en el navegador.

## 🔌 Recursos Disponibles

Las tools se listan después de autorizar. Esta guía no las documenta todavía.

## 🔐 Autenticación y Seguridad

- OAuth con la cuenta de Slack. El agente no debe pedir ni guardar tokens en el repo.
- Enviar mensajes sale del equipo: confirmar el texto y el destinatario antes.

## ⚠️ Limitaciones

- No funciona hasta autorizar `/mcp`.

## 📖 Referencias

- [Slack MCP](https://mcp.slack.com)

---

**Tags:** #mcp #slack #chat #oauth
