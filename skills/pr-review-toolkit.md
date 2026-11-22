# PR Review Toolkit

## 📋 Información General

- **Nombre:** PR Review Toolkit (plugin `pr-review-toolkit@claude-plugins-official`, comando `/review-pr`)
- **Versión:** 1.0.1 (la del marketplace oficial en esta PC; no está instalado todavía)
- **Autor:** Anthropic
- **Repositorio:** https://github.com/anthropics/claude-plugins-official (carpeta `plugins/pr-review-toolkit`)
- **Agentes compatibles:** Claude Code
- **Última revisión:** 2026-11-21

## 🎯 Propósito

Seis agentes especializados para revisar un PR, cada uno en un aspecto:

| Agente | Revisa | Modelo |
|---|---|---|
| `code-reviewer` | Cumplimiento de las guías del proyecto, estilo y buenas prácticas | `opus` |
| `comment-analyzer` | Exactitud y mantenibilidad de comentarios y docstrings | heredado |
| `pr-test-analyzer` | Cobertura de tests de lo nuevo y casos borde | heredado |
| `silent-failure-hunter` | Errores silenciosos, manejo de errores y fallbacks inadecuados | heredado |
| `type-design-analyzer` | Diseño de tipos: encapsulación e invariantes | heredado |
| `code-simplifier` | Simplificación del código modificado | `opus` |

"Heredado" significa que usa el modelo de la sesión.

## 🔧 Instalación

```bash
claude plugin install pr-review-toolkit@claude-plugins-official
```

Verificar:

```bash
claude plugin list
```

Reiniciar Claude Code después de instalar.

## 🚀 Uso

- `/review-pr [aspectos]`: revisión completa con los agentes. El argumento acota los aspectos a revisar.
- Los agentes también se pueden pedir de a uno para una revisión puntual.

## 🗑️ Desinstalación

```bash
claude plugin uninstall pr-review-toolkit@claude-plugins-official
```

## ⚠️ Limitaciones

- Se solapa con [Code Review](./code-review.md) y con [Code Simplifier](./code-simplifier.md). Su agente `code-simplifier` tiene el mismo nombre que el del plugin Code Simplifier.
- Dos agentes fijan Opus (`code-reviewer` y `code-simplifier`), así que una revisión completa cuesta más.
- Cada agente consume tokens. Para cambios chicos, alcanza con uno.

## 📖 Referencias

- [Plugin en el repo oficial](https://github.com/anthropics/claude-plugins-official/tree/main/plugins/pr-review-toolkit)

---

**Tags:** #skill #plugin #claude-code #pull-request #review
