# Commit Commands

## 📋 Información General

- **Nombre:** Commit Commands (plugin `commit-commands@claude-plugins-official`)
- **Versión:** 1.0.1 (la del marketplace oficial en esta PC; no está instalado todavía)
- **Autor:** Anthropic
- **Repositorio:** https://github.com/anthropics/claude-plugins-official (carpeta `plugins/commit-commands`)
- **Agentes compatibles:** Claude Code
- **Última revisión:** 2026-11-21

## 🎯 Propósito

Comandos para el flujo de git: commit, commit con push y PR, y limpieza de ramas borradas en el remoto. El mensaje se redacta según el estilo de commits del repo y las convenciones de commit convencional. El plugin no valida el formato: no trae hooks.

## 🔧 Instalación

```bash
claude plugin install commit-commands@claude-plugins-official
```

Verificar:

```bash
claude plugin list
```

Reiniciar Claude Code después de instalar.

## 🚀 Uso

| Comando | Qué hace |
|---|---|
| `/commit` | Crea un commit con mensaje redactado a partir de los cambios. |
| `/commit-push-pr` | Commit, push y apertura de un PR. |
| `/clean_gone` | Elimina las ramas marcadas `[gone]` (borradas en el remoto) y sus worktrees. |

## 🗑️ Desinstalación

```bash
claude plugin uninstall commit-commands@claude-plugins-official
```

## ⚠️ Limitaciones

- Evita commitear `.env` y `credentials.json`, pero es una heurística. Revisar `git diff --staged` antes de confirmar.
- Agrega la atribución de Claude Code al mensaje.
- `/clean_gone` borra ramas locales y worktrees asociados. No se verificó si pide confirmación: revisar antes de usarlo.

## 📖 Referencias

- [Plugin en el repo oficial](https://github.com/anthropics/claude-plugins-official/tree/main/plugins/commit-commands)

---

**Tags:** #skill #plugin #claude-code #git #commits
