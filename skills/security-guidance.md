# Security Guidance

## 📋 Información General

- **Nombre:** Security Guidance (plugin `security-guidance@claude-plugins-official`)
- **Versión:** 2.0.21 (la del marketplace oficial en esta PC; no está instalado todavía)
- **Autor:** David Dworken (Anthropic)
- **Repositorio:** https://github.com/anthropics/claude-plugins-official (carpeta `plugins/security-guidance`)
- **Agentes compatibles:** Claude Code
- **Última revisión:** 2026-11-21

## 🎯 Propósito

Revisión de seguridad del código que escribe Claude, en tres capas:

1. **Advertencias por patrón:** al usar `Edit` o `Write`, busca unos 25 patrones peligrosos con regex (por ejemplo secretos hardcodeados, `yaml.load`, `pickle.load` sobre datos no confiables, `innerHTML` sin escapar). No usa red ni credenciales.
2. **Revisión LLM del diff:** al terminar cada turno (hook `Stop`), envía el diff a un modelo y devuelve a Claude los hallazgos de severidad alta para que los corrija antes de responder.
3. **Revisión agéntica de commits:** en `git commit`, un revisor lee archivos relacionados para seguir el flujo de datos entre archivos.

Cubre, entre otras, inyección, XSS, SSRF, secretos hardcodeados, IDOR, auth bypass, deserialización insegura y path traversal.

## 🔧 Instalación

Requisitos:

- Claude Code 2.1.144 o superior.
- Python 3.8 o superior en el PATH (`python3`, `python` o `py -3`).
- Credenciales para las revisiones LLM: sesión con `/login`, `ANTHROPIC_API_KEY` o proveedor cloud. Las advertencias por patrón no las necesitan.

```bash
claude plugin install security-guidance@claude-plugins-official
```

Verificar:

```bash
claude plugin list
```

Reiniciar Claude Code después de instalar.

## ⚙️ Configuración

Todo por variables de entorno. Ninguna es obligatoria:

- `SECURITY_REVIEW_MODEL`: modelo de la revisión del diff. Por defecto, el Opus más nuevo que sirva el endpoint.
- `SG_AGENTIC_MODEL`: modelo de la revisión de commits. Mismo formato.

## 🚀 Uso

- Automático: corre mientras Claude escribe código. No tiene comandos.
- Las advertencias por patrón aparecen al editar. Los hallazgos del diff llegan a Claude al cerrar cada turno.

## 🗑️ Desinstalación

```bash
claude plugin uninstall security-guidance@claude-plugins-official
```

## ⚠️ Limitaciones

- **Envía el diff a un LLM** en cada turno y en cada commit. Un secreto o dato personal que esté en el diff sale hacia la API. Revisar antes de usarlo en repos con datos sensibles.
- Cada revisión LLM consume tokens.
- Las advertencias por patrón son regex: dan falsos positivos y no cubren todo. No reemplaza una revisión humana.

## 📖 Referencias

- [Plugin en el repo oficial](https://github.com/anthropics/claude-plugins-official/tree/main/plugins/security-guidance)

---

**Tags:** #skill #plugin #claude-code #security
