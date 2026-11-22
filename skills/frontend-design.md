# Frontend Design

## 📋 Información General

- **Nombre:** Frontend Design (plugin `frontend-design@claude-plugins-official`, skill `frontend-design:frontend-design`)
- **Versión:** 1.1.1 (la del marketplace oficial en esta PC; la instalada desde la UI no se verificó)
- **Autor:** Anthropic
- **Repositorio:** https://github.com/anthropics/claude-plugins-official (carpeta `plugins/frontend-design`)
- **Agentes compatibles:** Claude Code
- **Última revisión:** 2026-11-21

## 🎯 Propósito

Guía para diseño visual distintivo al construir una UI nueva o rehacer una existente: dirección estética, tipografía y decisiones que no parezcan plantillas genéricas. Parte del tema real del proyecto (audiencia, objetivo) y evita los tratamientos por defecto de las páginas generadas.

Complementa a [Modern Web Guidance](./modern-web-guidance.md): ese skill cubre cómo implementar con APIs web actuales; este cubre cómo se ve y se siente.

## 🔧 Instalación

Se instaló desde la UI de Claude. Por CLI, el equivalente es:

```bash
claude plugin marketplace add anthropics/claude-plugins-official
claude plugin install frontend-design@claude-plugins-official
```

El marketplace `claude-plugins-official` suele venir ya agregado. Verificar:

```bash
claude plugin list
```

Si lo instalaste desde la UI, puede no aparecer en `claude plugin list` de una terminal con la sincronización apagada, pero el skill queda disponible en las sesiones de la app.

## 🚀 Uso

Se invoca solo cuando la tarea es de diseño de UI, o a mano con `/frontend-design`.

## 🗑️ Desinstalación

```bash
claude plugin uninstall frontend-design@claude-plugins-official
```

## ⚠️ Limitaciones

- Solo da criterio de diseño. No agrega herramientas ni accede a archivos.
- Sus resultados son opinados y de riesgo estético: si necesitás respetar un sistema de diseño existente, decilo en el pedido.

## 📖 Referencias

- [Marketplace oficial](https://github.com/anthropics/claude-plugins-official)

---

**Tags:** #skill #plugin #claude-code #frontend #diseño
