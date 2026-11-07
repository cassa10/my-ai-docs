# Model Context Protocol (MCP)

Configuraciones para extender las capacidades de los agentes mediante herramientas y contextos externos.

## 📂 Templates Disponibles

- **[mcp-template.md](./mcp-template.md)**: template para configurar nuevos servidores MCP, herramientas y recursos.

## 🧠 Locales y de documentación

| Servidor | Tipo | Documentación |
|---|---|---|
| Engram | Local (stdio) + plugin | [engram.md](./engram.md) |
| Context7 | Remoto | [context7.md](./context7.md) |
| Playwright | Local (stdio) | [playwright.md](./playwright.md) |

## ☁️ Conectores de claude.ai

| Servidor | Documentación |
|---|---|
| Claude Docs | [claude-docs.md](./claude-docs.md) |
| Spotify | [spotify.md](./spotify.md) |
| Google Workspace (Docs, Sheets, Drive, Gmail, Calendar) | [google-workspace.md](./google-workspace.md) |
| Notion | [notion.md](./notion.md) |

## 🔑 Remotos que requieren autenticación con `/mcp`

| Servidor | Declarado por | Documentación |
|---|---|---|
| Slack | Plugin de ingeniería | [slack.md](./slack.md) |
| Linear | Plugin de ingeniería | [linear.md](./linear.md) |
| Atlassian (Jira y Confluence) | Plugin de ingeniería | [atlassian.md](./atlassian.md) |
| GitHub | Plugin de ingeniería | [github.md](./github.md) |
| Asana | Plugin de ingeniería | [asana.md](./asana.md) |
| PagerDuty | Plugin de ingeniería | [pagerduty.md](./pagerduty.md) |
| Datadog | Plugin de ingeniería | [datadog.md](./datadog.md) |

Context7 también está declarado por un plugin oficial. Su documentación ([context7.md](./context7.md)) cubre las dos formas de conexión.

## 📝 Ejemplos

Los ejemplos de configuración se pueden encontrar dentro del template o en archivos específicos de cada MCP.
