# PagerDuty

## 📋 Información General

- **Nombre:** PagerDuty
- **Tipo:** Remoto (HTTP) con OAuth, declarado por el plugin de ingeniería
- **Endpoint:** `https://mcp.pagerduty.com/mcp`
- **Estado en esta máquina:** ⚠️ requiere autenticación con `/mcp`
- **Última revisión:** 2026-11-07

## 🎯 Propósito

Consultar incidentes, servicios y guardias de PagerDuty durante una respuesta a incidentes.

## 🔧 Configuración

Viene declarado en el plugin de ingeniería (ver [skills/engineering.md](../skills/engineering.md)). Para habilitarlo, ejecutar `/mcp` y autorizar PagerDuty en el navegador.

## 🔌 Recursos Disponibles

Las tools se listan después de autorizar. Esta guía no las documenta todavía.

## 🔐 Autenticación y Seguridad

- OAuth con la cuenta de PagerDuty.
- Reconocer, escalar o resolver incidentes afecta a guardias reales: confirmar antes.

## ⚠️ Limitaciones

- No funciona hasta autorizar `/mcp`.

## 📖 Referencias

- [PagerDuty MCP Server](https://developer.pagerduty.com/docs/mcp-server)

---

**Tags:** #mcp #pagerduty #incidentes #oauth
