# Modern Web Guidance

## 📋 Información General

- **Nombre:** Modern Web Guidance (plugin `modern-web-guidance@googlechrome`)
- **Versión:** 1.0.1
- **Autor:** Google Chrome
- **Repositorio:** https://github.com/GoogleChrome/modern-web-guidance (paquete npm: `modern-web-guidance`, código en `GoogleChrome/modern-web-guidance-src`)
- **Agentes compatibles:** Claude Code, Codex, Cursor, Cline, Amp y otros (el instalador `npx` los detecta)
- **Última revisión:** 2026-11-21

## 🎯 Propósito

Mantiene al agente al día con las prácticas web actuales (diálogos, popovers, container queries, view transitions, formularios, accesibilidad, Core Web Vitals, etc.). Antes de escribir HTML, CSS o JS de cliente, el skill busca casos de uso con el CLI `modern-web-guidance` y usa esas guías en vez de patrones obsoletos.

No aplica a backend, infraestructura ni tooling (SQL, Docker, CI, Vite, tests).

## 🔧 Instalación

### Plugin de Claude Code (nivel usuario)

```bash
claude plugin marketplace add GoogleChrome/modern-web-guidance --scope user
claude plugin install modern-web-guidance@googlechrome --scope user
```

Verificar:

```bash
claude plugin list
```

Reiniciar Claude Code después de instalar.

### Instalador `npx` (opcional, otros agentes)

```bash
npx modern-web-guidance@latest install
```

Instala el skill en el **proyecto donde lo corrés** (`.agents/skills/modern-web-guidance`, con enlace simbólico en `.claude/skills/` y un `skills-lock.json`). No es global. Para Claude Code a nivel usuario alcanza con el plugin. Correrlo dentro de este repo ensucia el árbol con esos archivos: no lo hagas acá.

## 🚀 Uso

### En un proyecto web

- **Automático:** abrir Claude Code en el proyecto y pedir la tarea de UI normal (por ejemplo, "agregá un modal de confirmación"). El skill corre primero ante tareas de HTML, CSS y JS de cliente.
- **Manual:** escribir `/modern-web-guidance:modern-web-guidance`, o pedirlo en la frase ("usá modern-web-guidance para...").
- Las búsquedas son de 2 a 5 palabras en inglés, sobre una sola capacidad (por ejemplo `responsive data table`).
- No se activa en backend, infra ni tooling (SQL, Docker, CI, Vite, tests).

### CLI directo (requiere Node.js)

El CLI también sirve sin pasar por Claude:

```bash
npx modern-web-guidance search "light dismiss dialog"
npx modern-web-guidance list
npx modern-web-guidance retrieve <id>
npx modern-web-guidance legacy-scan [ruta]
```

`legacy-scan` analiza un código existente en busca de patrones web obsoletos.

## 🗑️ Desinstalación

```bash
claude plugin uninstall modern-web-guidance@googlechrome
claude plugin marketplace remove googlechrome
```

## ⚠️ Limitaciones

- **Telemetría:** Google recolecta uso anónimo. Para desactivarla, definir `DISABLE_TELEMETRY=1` en el perfil del shell.
- El skill ejecuta `npx modern-web-guidance` en cada búsqueda, así que necesita Node.js y red.
- Evaluaciones de seguridad que mostró el instalador (skills.sh): Gen "Safe", Socket "1 alert", Snyk "Low Risk". Los skills corren con los permisos completos del agente: revisar antes de usar.
- Las opciones `set-allow-origin-trials` y `set-allow-volatile-features` activan guías experimentales. Quedan apagadas por defecto.

## 📖 Referencias

- [Documentación oficial](https://developer.chrome.com/docs/modern-web-guidance?hl=es-419)
- [Repositorio del plugin](https://github.com/GoogleChrome/modern-web-guidance)
- [Detalle de seguridad en skills.sh](https://skills.sh/GoogleChrome/modern-web-guidance)

---

**Tags:** #skill #plugin #claude-code #web #frontend
