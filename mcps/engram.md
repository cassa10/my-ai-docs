# Engram

## 📋 Información General

- **Nombre:** Engram (memoria persistente para agentes de código)
- **Versión:** 3.7.0 (última release publicada el 2026-11-07)
- **Tipo:** Server (MCP por stdio) + CLI + API HTTP + TUI
- **Repositorio:** https://github.com/Gentleman-Programming/engram
- **Proyecto:** Gentleman Programming (tercero, no oficial de Anthropic)

## 🎯 Propósito

Engram guarda decisiones, descubrimientos y resúmenes de sesión en una base SQLite local (con búsqueda full-text FTS5) y los devuelve al agente en sesiones futuras. Es agnóstico del agente: cualquier cliente MCP puede usarlo (Claude Code, Codex, OpenCode, Gemini CLI, Cursor, VS Code, etc.).

## 🔧 Configuración

### Instalación

Requisitos: ninguno en runtime (el binario incluye SQLite). Go 1.26+ solo si se compila desde fuente.

**Estado en esta máquina (Windows 11):** ya instalado con `go install`, en `C:\Users\cassa\go\bin\engram.exe`, versión `v3.7.0`.

Opciones de instalación en Windows (según [docs/INSTALLATION.md](https://github.com/Gentleman-Programming/engram/blob/main/docs/INSTALLATION.md#windows)):

```powershell
# Opción A: go install (recomendada para usuarios técnicos)
go install github.com/Gentleman-Programming/engram/v3/cmd/engram@latest

# Opción C: binario precompilado
# Descargar engram_<version>_windows_amd64.zip desde GitHub Releases
# y extraer engram.exe en una carpeta del PATH
```

> `go install` compila el binario con versión `dev`. Para una versión real, ver la sección "Want a real version string instead of `dev`?" de la guía de instalación.

Verificar la instalación:

```powershell
engram version
engram doctor
```

### Configuración JSON (cualquier cliente MCP)

```json
{
  "mcpServers": {
    "engram": {
      "command": "engram",
      "args": ["mcp", "--tools=agent"]
    }
  }
}
```

Perfiles de herramientas (`--tools`):

- `agent` → 23 herramientas (recomendado para agentes).
- `admin` → 6 herramientas.
- Sin flag → todas (27).

### Setup automático por agente

En lugar de editar la configuración a mano, el CLI escribe la integración de cada agente:

```bash
engram setup claude-code
engram setup codex
engram setup opencode
```

Lista completa de agentes soportados en [docs/AGENT-SETUP.md](https://github.com/Gentleman-Programming/engram/blob/main/docs/AGENT-SETUP.md).

> **Claude Code:** `engram setup claude-code` instala/actualiza el plugin `engram@engram` a nivel usuario y puede pedir confirmación para las herramientas de escritura. La opción `--allow-memory-writes` las pre-aprueba sin preguntar: no usarla sin revisar antes qué implica.

## 🔌 Recursos Disponibles

### Tools

Herramientas principales (lista completa en [DOCS.md](https://github.com/Gentleman-Programming/engram/blob/main/DOCS.md)):

1. **`mem_current_project`**: Devuelve el proyecto detectado para el directorio actual.
2. **`mem_context`**: Contexto reciente de sesiones anteriores.
3. **`mem_search`**: Búsqueda full-text de memorias.
4. **`mem_timeline`** / **`mem_get_observation`**: Contexto cronológico y detalle de una observación.
5. **`mem_save`** / **`mem_update`** / **`mem_suggest_topic_key`**: Guardar y actualizar memorias.
6. **`mem_save_prompt`**: Guarda el pedido original del usuario.
7. **`mem_session_start`** / **`mem_session_end`** / **`mem_session_summary`** / **`mem_session_finalize`**: Ciclo de vida de la sesión.
8. **`mem_review`** / **`mem_judge`** / **`mem_compare`** / **`mem_judge_many`**: Revisión de conflictos y relaciones entre memorias.
9. **`mem_consolidate`**: Consolida observaciones; requiere preview y confirmación explícita.
10. **`mem_list_projects`**: Lista los proyectos conocidos con sus conteos.
11. **`mem_doctor`**: Diagnóstico de estado del store.

Herramientas destructivas (por ejemplo `mem_delete` y `mem_merge_projects`) existen también; revisarlas antes de habilitarlas en un agente.

### Resources

No documentados en la guía de instalación. Engram se usa como conjunto de tools.

### Prompts

No aplica.

## 📚 Ejemplos de Uso

### Ejemplo 1: Buscar memoria desde la CLI

```bash
engram search "autenticación"
engram context
```

### Ejemplo 2: Guardar una decisión desde la CLI

```bash
engram save "Usar SQLite para el store" "Decidido por simplicidad: un solo archivo, sin servidor"
```

### Ejemplo 3: Pedirle al agente

```
Usa engram para buscar cómo resolvimos el manejo de errores en este proyecto antes de proponer algo nuevo.
```

## 🔐 Autenticación y Seguridad

### Variables de Entorno

| Variable | Descripción | Default |
|---|---|---|
| `ENGRAM_DATA_DIR` | Directorio de datos (ruta absoluta) | `%USERPROFILE%\.engram` |
| `ENGRAM_PORT` | Puerto del servidor HTTP | `7437` |
| `ENGRAM_PROJECT` | Proyecto por defecto (equivale a `--project`) | Detección por cwd |

### Permisos y datos

- [ ] El servidor MCP por stdio no requiere autenticación; corre con los permisos del usuario.
- [ ] La base `engram.db` puede contener decisiones, rutas y fragmentos de código: no subirla a repositorios públicos (esta carpeta `%USERPROFILE%\.engram\` está fuera del repo).
- [ ] Usar disco local para `ENGRAM_DATA_DIR`; Engram rechaza directorios NFS y SMB/CIFS.

## 🤖 Agentes Compatibles

- **Claude Code**: `engram setup claude-code`
- **Codex**: `engram setup codex`
- **OpenCode, Gemini CLI, Cursor, Windsurf, VS Code (Copilot), Antigravity, Kiro, Qwen Code, Kilo Code, Kimi Code, CommandCode**: ver la tabla en [docs/AGENT-SETUP.md](https://github.com/Gentleman-Programming/engram/blob/main/docs/AGENT-SETUP.md).
- **Pi**: usa herramientas nativas, no registra el MCP.

## 🔗 Dependencias

### Paquetes Requeridos

- Binario `engram` v3.x (probado con v3.7.0).

### MCPs Relacionados

- [Context7](./context7.md): documentación de librerías. Complementario: Engram recuerda lo que decidiste; Context7 trae documentación actualizada.

## ⚠️ Limitaciones

- En Windows, binarios sin firma pueden ser bloqueados por Smart App Control o por antivirus (ver Troubleshooting).
- `ENGRAM_DATA_DIR` debe ser una ruta absoluta y local.
- Los binarios de `go install` reportan versión `dev` salvo que se compilen con `-ldflags`.

## 🐛 Troubleshooting

### Problema 1: El cliente no encuentra `engram`

**Solución:**
```powershell
where.exe engram
```
Si no aparece, agregar `%USERPROFILE%\go\bin` al PATH.

### Problema 2: Windows bloquea `engram.exe` antes de que arranque el MCP

**Solución:**
- Distinguir si el archivo no existe en la ruta configurada (problema de rutas) o si Windows reporta explícitamente un bloqueo de política (Smart App Control / antivirus).
- Revisar la sección "Windows troubleshooting" de [INSTALLATION.md](https://github.com/Gentleman-Programming/engram/blob/main/docs/INSTALLATION.md#windows-troubleshooting-executable-blocked-before-mcp-starts).
- No desactivar Smart App Control ni el antivirus para resolverlo. En un equipo administrado, pedir la revisión al administrador de seguridad.

### Problema 3: La versión del servidor HTTP no coincide con el binario instalado

**Solución:**
```powershell
engram version
curl --fail --silent --show-error http://127.0.0.1:7437/health
```
Reiniciar el servidor desde su supervisor (`engram restart` solo controla el demonio con pidfile).

### Problema 4: Dudas sobre el estado del store

**Solución:**
```powershell
engram doctor
```
`doctor` es de solo lectura. Cualquier `repair` debe correrse primero con `--plan` o `--dry-run`.

## 📖 Referencias

- [Guía de instalación](https://github.com/Gentleman-Programming/engram/blob/main/docs/INSTALLATION.md)
- [Setup por agente](https://github.com/Gentleman-Programming/engram/blob/main/docs/AGENT-SETUP.md)
- [Documentación completa](https://github.com/Gentleman-Programming/engram/blob/main/DOCS.md)
- [Releases](https://github.com/Gentleman-Programming/engram/releases)
- [Especificación MCP](https://modelcontextprotocol.io)

## 📌 Notas Adicionales

- Esta guía se basó en `docs/INSTALLATION.md` del repositorio de Engram, revisado el 2026-11-07. Si cambian los comandos, revisar la fuente antes de actualizar.
- Tras cambiar de versión del binario, verificar con `engram version` y `engram doctor`.

---

**Tags:** #mcp #memory #persistence #sqlite #claude-code #codex
