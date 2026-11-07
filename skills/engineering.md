# Engineering

## 📋 Información General

- **Nombre:** Engineering (plugin `engineering@synced`)
- **Versión:** 1.2.0
- **Origen:** sincronizado desde claude.ai. No está en un marketplace de GitHub, así que el repositorio de origen no está verificado en esta guía.
- **Tipo:** plugin de usuario
- **Última revisión:** 2026-11-07

## 🎯 Propósito

Skills de trabajo de ingeniería: revisión de código, depuración, diseño de sistemas, decisiones de arquitectura, despliegues, incidentes, documentación, deuda técnica y estrategia de tests.

El plugin también trae configuraciones de MCP (Slack, Linear, Asana, Atlassian, Notion, GitHub, PagerDuty, Datadog y Gmail). Ver la documentación de cada uno en [mcps/](../mcps/README.md).

## 📁 Skills Incluidos

| Skill | Cuándo se usa |
|---|---|
| `architecture` | Crear o evaluar un ADR (registro de decisión de arquitectura), por ejemplo elegir entre tecnologías. |
| `system-design` | Diseñar sistemas, servicios o arquitecturas: APIs, modelado de datos, límites entre servicios. |
| `code-review` | Revisar cambios por seguridad, rendimiento y corrección, antes de mergear. |
| `debug` | Sesión estructurada de depuración: reproducir, aislar, diagnosticar y corregir. |
| `testing-strategy` | Diseñar estrategias y planes de tests. |
| `tech-debt` | Identificar, categorizar y priorizar deuda técnica. |
| `deploy-checklist` | Verificación previa a un despliegue: migraciones, feature flags, CI y aprobaciones. |
| `incident-response` | Flujo de incidentes: triage, comunicación y postmortem sin culpables. |
| `documentation` | Escribir o mantener documentación técnica: READMEs, runbooks, guías de onboarding. |
| `standup` | Generar un resumen para el standup a partir de la actividad reciente. |

## ⚠️ Limitaciones

- Al venir sincronizado desde claude.ai, las actualizaciones las gestiona esa sincronización.
- Las configuraciones de MCP del plugin que requieren autenticación no funcionan hasta autorizarlas con `/mcp`.

## 📖 Referencias

- [Slack](../mcps/slack.md) · [Linear](../mcps/linear.md) · [Asana](../mcps/asana.md) · [Atlassian](../mcps/atlassian.md) · [Notion](../mcps/notion.md) · [GitHub](../mcps/github.md) · [PagerDuty](../mcps/pagerduty.md) · [Datadog](../mcps/datadog.md)

---

**Tags:** #skill #plugin #engineering #devops
