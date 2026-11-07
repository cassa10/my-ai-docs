# Superpowers

## 📋 Información General

- **Nombre:** Superpowers (plugin `superpowers@synced`)
- **Versión:** 6.4.2
- **Origen:** sincronizado desde claude.ai. No está en un marketplace de GitHub, así que el repositorio de origen no está verificado en esta guía.
- **Tipo:** plugin de usuario
- **Última revisión:** 2026-11-07

## 🎯 Propósito

Conjunto de skills de proceso para el flujo de trabajo: explorar intención antes de construir, planear, ejecutar planes, depurar sistemáticamente, verificar antes de dar algo por terminado y escribir nuevos skills.

Un skill de este plugin (`using-superpowers`) se inyecta al inicio de la sesión. Le indica al agente que revise si aplica algún skill antes de responder.

## 📁 Skills Incluidos

| Skill | Cuándo se usa |
|---|---|
| `using-superpowers` | Al empezar cualquier conversación: cómo encontrar y usar skills. |
| `brainstorming` | Antes de cualquier trabajo creativo: features, componentes o cambios de comportamiento. |
| `writing-plans` | Hay una especificación o requisitos de una tarea de varios pasos, antes de tocar código. |
| `executing-plans` | Ejecutar un plan en la sesión actual, como implementador. |
| `subagent-driven-development` | Ejecutar planes con tareas independientes en la sesión actual. |
| `dispatching-parallel-agents` | Hay 2 o más tareas independientes sin estado compartido. |
| `using-git-worktrees` | Trabajo que necesita aislamiento respecto del espacio de trabajo actual. |
| `test-driven-development` | Antes de escribir código de una feature o bugfix. |
| `systematic-debugging` | Ante un bug, un test que falla o un comportamiento inesperado, antes de proponer arreglos. |
| `requesting-code-review` | Al terminar tareas o features grandes, antes de mergear. |
| `receiving-code-review` | Al recibir feedback de revisión, antes de implementarlo. |
| `verification-before-completion` | Antes de decir que algo está terminado, arreglado o pasando. |
| `finishing-a-development-branch` | La implementación está completa y hay que decidir cómo integrar el trabajo. |
| `diagnosing-superpowers` | Cuando una sesión con superpowers salió mal y se quiere saber por qué. |
| `writing-skills` | Crear, editar o verificar skills antes de desplegarlos. |

## ⚠️ Limitaciones

- Al venir sincronizado desde claude.ai, las actualizaciones las gestiona esa sincronización, no un comando local.
- El skill `using-superpowers` pide revisar skills antes de responder. Eso suma pasos a tareas simples.

## 📖 Referencias

- Documentación de Claude Code sobre plugins y skills (sincronizados desde claude.ai, no hay repositorio público verificado).

---

**Tags:** #skill #plugin #workflow #process
