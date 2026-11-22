# Code Simplifier

## 📋 Información General

- **Nombre:** Code Simplifier (plugin `code-simplifier@claude-plugins-official`, agente `code-simplifier`)
- **Versión:** 1.0.0 (la del marketplace oficial en esta PC; no está instalado todavía)
- **Autor:** Anthropic
- **Modelo del agente:** `opus` (fijado en su definición)
- **Repositorio:** https://github.com/anthropics/claude-plugins-official (carpeta `plugins/code-simplifier`)
- **Agentes compatibles:** Claude Code
- **Última revisión:** 2026-11-21

## 🎯 Propósito

Agente que simplifica y refina código para mejorar claridad, consistencia y mantenibilidad, sin cambiar su funcionalidad. Por defecto trabaja sobre el código modificado recientemente.

Es una revisión por criterio. No mide complejidad ciclomática ni marca funciones por tamaño.

## 🔧 Instalación

```bash
claude plugin install code-simplifier@claude-plugins-official
```

Verificar:

```bash
claude plugin list
```

Reiniciar Claude Code después de instalar.

## 🚀 Uso

- Pedir el agente por nombre al terminar un cambio, por ejemplo: "usá el agente code-simplifier sobre los archivos que modifiqué".

## 🗑️ Desinstalación

```bash
claude plugin uninstall code-simplifier@claude-plugins-official
```

## ⚠️ Limitaciones

- Usa Opus, así que cuesta más que un agente con modelo menor.
- Su agente se llama igual que el de [PR Review Toolkit](./pr-review-toolkit.md). No se verificó cómo Claude Code resuelve el conflicto: instalar uno de los dos.
- Reescribe código. Revisar el diff antes de aceptarlo.

## 📖 Referencias

- [Plugin en el repo oficial](https://github.com/anthropics/claude-plugins-official/tree/main/plugins/code-simplifier)

---

**Tags:** #skill #plugin #claude-code #refactor #code-quality
