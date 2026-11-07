# GitHub (MCP)

Este archivo documenta el servidor MCP de GitHub. No confundir con el CLI `gh`, que se usa desde la terminal.

## 📋 Información General

- **Nombre:** GitHub
- **Tipo:** Remoto (HTTP) con OAuth
- **Endpoint:** `https://api.githubcopilot.com/mcp/`
- **Declarado por:** plugin de ingeniería y plugin oficial de GitHub
- **Estado en esta máquina:** ⚠️ requiere autenticación con `/mcp`
- **Última revisión:** 2026-11-07

## 🎯 Propósito

Consultar y gestionar repositorios, issues y pull requests de GitHub desde el agente, sin usar la terminal.

## 🔧 Configuración

Para habilitarlo, ejecutar `/mcp` y autorizar GitHub en el navegador.

## 🔌 Recursos Disponibles

Las tools se listan después de autorizar. Esta guía no las documenta todavía.

## 🔐 Autenticación y Seguridad

- OAuth con la cuenta de GitHub. Revisar los permisos que pide antes de aceptar.
- Crear PRs, comentar o cambiar issues: confirmar antes.

## ⚠️ Limitaciones

- No funciona hasta autorizar `/mcp`.
- Para operaciones en el repo local (commits, push), el CLI `gh` o `git` siguen siendo la vía habitual.

## 📖 Referencias

- [GitHub MCP Server](https://github.com/github/github-mcp-server)

---

**Tags:** #mcp #github #oauth #git
