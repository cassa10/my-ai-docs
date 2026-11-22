# Code Review

## 📋 Información General

- **Nombre:** Code Review (plugin `code-review@claude-plugins-official`, comando `/code-review`)
- **Versión:** 1.0.1 (la del marketplace oficial en esta PC; no está instalado todavía)
- **Autor:** Anthropic
- **Repositorio:** https://github.com/anthropics/claude-plugins-official (carpeta `plugins/code-review`)
- **Agentes compatibles:** Claude Code
- **Última revisión:** 2026-11-21

## 🎯 Propósito

Revisión automática de un pull request con varios agentes en paralelo. Cada hallazgo recibe una confianza de 0 a 100 y se descartan los menores de 80, para reducir falsos positivos. Es una confianza por hallazgo, no una puntuación de calidad del código.

## 🔧 Instalación

```bash
claude plugin install code-review@claude-plugins-official
```

Verificar:

```bash
claude plugin list
```

Reiniciar Claude Code después de instalar.

## 🚀 Uso

- `/code-review` sobre un pull request. Lanza 4 agentes en paralelo:
  - 2 verifican el cumplimiento de los CLAUDE.md.
  - 1 busca bugs obvios en los cambios.
  - 1 analiza el historial de git blame para problemas que dependen del contexto.
- Omite PRs cerrados, borradores, triviales o ya revisados.
- Por defecto, la revisión sale en la terminal. Con `--comment`, se publica como comentario en el PR.

## 🗑️ Desinstalación

```bash
claude plugin uninstall code-review@claude-plugins-official
```

## ⚠️ Limitaciones

- Pensado para pull requests. No revisa cambios sueltos.
- Se solapa con [PR Review Toolkit](./pr-review-toolkit.md). Ambos revisan PRs con agentes: elegir uno para el flujo.
- En esta sesión, la skill `code-review` de la app tiene otros flags (`--max-findings`, `--fix`). No se verificó si es la misma versión que el marketplace: revisar con `claude plugin list`.

## 📖 Referencias

- [Plugin en el repo oficial](https://github.com/anthropics/claude-plugins-official/tree/main/plugins/code-review)

---

**Tags:** #skill #plugin #claude-code #code-review #pull-request
