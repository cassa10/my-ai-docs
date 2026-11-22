# CLAUDE.md Management

## 📋 Información General

- **Nombre:** CLAUDE.md Management (plugin `claude-md-management@claude-plugins-official`)
- **Versión:** 1.0.0 (la del marketplace oficial en esta PC; no está instalado todavía)
- **Autor:** Anthropic
- **Componentes:** skill `claude-md-improver` y comando `/revise-claude-md`
- **Repositorio:** https://github.com/anthropics/claude-plugins-official (carpeta `plugins/claude-md-management`)
- **Agentes compatibles:** Claude Code
- **Última revisión:** 2026-11-21

## 🎯 Propósito

Mantiene los archivos CLAUDE.md. Son dos herramientas con usos distintos:

| | `claude-md-improver` (skill) | `/revise-claude-md` (comando) |
|---|---|---|
| **Propósito** | Alinear CLAUDE.md con el estado actual del código | Capturar aprendizajes de la sesión |
| **Cuándo** | Mantenimiento periódico | Al final de una sesión que mostró contexto faltante |
| **Cómo** | Pedirlo en lenguaje natural: "auditá mis CLAUDE.md" | `/revise-claude-md` |

El skill escanea todos los CLAUDE.md del proyecto, evalúa su calidad contra plantillas, muestra un informe y después aplica cambios puntuales.

## 🔧 Instalación

```bash
claude plugin install claude-md-management@claude-plugins-official
```

Verificar:

```bash
claude plugin list
```

Reiniciar Claude Code después de instalar.

## 🚀 Uso

- Skill: pedir la auditoría en la frase, por ejemplo "revisá si mi CLAUDE.md está al día".
- Comando: `/revise-claude-md` al cerrar una sesión.

## 🗑️ Desinstalación

```bash
claude plugin uninstall claude-md-management@claude-plugins-official
```

## ⚠️ Limitaciones

- No corre solo. Se ejecuta cuando se lo pedís.
- Modifica archivos CLAUDE.md. Revisar el diff antes de aceptarlo.

## 📖 Referencias

- [Plugin en el repo oficial](https://github.com/anthropics/claude-plugins-official/tree/main/plugins/claude-md-management)

---

**Tags:** #skill #plugin #claude-code #claude-md #memoria
