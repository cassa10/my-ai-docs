# Playwright

## 📋 Información General

- **Nombre:** Playwright
- **Tipo:** Local (stdio), lanzado con `npx`
- **Paquete:** `@playwright/mcp@latest`
- **Origen:** plugin oficial de Playwright (marketplace `claude-plugins-official`)
- **Acceso:** local, con `npx`. Si no conecta, ver Troubleshooting.
- **Última revisión:** 2026-11-07

## 🎯 Propósito

Controlar un navegador desde el agente: abrir páginas, leer su contenido, llenar formularios y tomar capturas. Sirve para probar aplicaciones web y revisar páginas reales.

## 🔧 Configuración

Config del plugin (`.mcp.json`):

```json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": ["@playwright/mcp@latest"]
    }
  }
}
```

Requisitos: Node.js con `npx` en el PATH.

## 🔌 Recursos Disponibles

Las tools las expone el paquete `@playwright/mcp`. Esta guía no las documenta todavía.

## 🔐 Autenticación y Seguridad

- No requiere credenciales propias. Sí puede usar sesiones guardadas en el navegador que controla: cuidado con páginas donde ya hay sesión iniciada.
- No llenar formularios que envían datos ni hacer clic en acciones irreversibles sin confirmación.

## ⚠️ Limitaciones

- `@latest` no fija una versión. Para algo reproducible, fijar la versión exacta en `args`.

## 🐛 Troubleshooting

### Problema 1: Falla al conectar

**Solución:**
1. Verificar que `npx` funciona: `npx --version`.
2. Ejecutar `claude mcp list` para ver el estado actual.
3. Esperar unos 15 minutos o reiniciar Claude Code para forzar el reintento.

## 📖 Referencias

- [Playwright MCP](https://github.com/microsoft/playwright-mcp)

---

**Tags:** #mcp #playwright #navegador #testing
