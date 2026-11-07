# i-have-adhd

## 📋 Información General

- **Nombre:** i-have-adhd (plugin `i-have-adhd@i-have-adhd`)
- **Versión:** 0.4.1
- **Autor:** Ayoub G. ([ayghri](https://github.com/ayghri))
- **Repositorio:** https://github.com/ayghri/i-have-adhd (licencia MIT)
- **Agentes compatibles:** Claude Code, Codex, Cursor, Copilot, OpenCode, Gemini, Pi, Qwen, Kimi y Antigravity (según su `INSTALL.md`)
- **Última revisión:** 2026-11-07

## 🎯 Propósito

Ajusta el formato de las respuestas para una persona con TDAH: primero la próxima acción, pasos numerados, sin desvíos, estado de la tarea repetido entre turnos, estimaciones de tiempo concretas y avances visibles.

Es una skill de estilo de salida. No agrega herramientas ni accede a archivos.

## 🔧 Instalación

Para Claude Code, según su `INSTALL.md`:

```bash
claude plugin marketplace add ayghri/i-have-adhd
claude plugin install i-have-adhd@i-have-adhd
```

Verificar:

```bash
claude plugin list
```

Reiniciar Claude Code después de instalar o actualizar.

## 🚀 Uso

- Activar: `/i-have-adhd`. Queda activa durante el resto de la sesión.
- Desactivar: decir "stop adhd mode" o "normal mode".

### Siempre activa (opcional)

Un hook `SessionStart` carga las reglas al inicio de cada sesión, sin escribir `/i-have-adhd`. Se activa solo si existe un archivo bandera:

```bash
touch ~/.claude/.i-have-adhd-always
```

Si usás un directorio de configuración propio, crear el archivo ahí (`$CLAUDE_CONFIG_DIR/.i-have-adhd-always`). Para volver al modo bajo demanda:

```bash
rm ~/.claude/.i-have-adhd-always
```

Instalar el plugin no activa el modo siempre activo por sí solo.

## 🗑️ Desinstalación

```bash
claude plugin uninstall i-have-adhd
claude plugin marketplace remove i-have-adhd
```

O dejarla instalada y apagada: `claude plugin disable i-have-adhd`.

## ⚠️ Limitaciones

- El modo siempre activo usa un hook que ejecuta `node`. Si Node.js no está instalado, el hook no hace nada.
- Mientras está activa, cambia el estilo de todas las respuestas de la sesión. Si no te sirve para una tarea, desactivarla.
- Solo cambia el formato. No verifica que la información sea correcta.

## 📖 Referencias

- [Repositorio](https://github.com/ayghri/i-have-adhd)
- [Instalación en todas las plataformas](https://github.com/ayghri/i-have-adhd/blob/main/INSTALL.md)
- [Licencia MIT](https://github.com/ayghri/i-have-adhd/blob/main/LICENSE)

---

**Tags:** #skill #plugin #claude-code #accesibilidad #adhd
