# Graphify

## 📋 Información General

- **Nombre:** Graphify (paquete PyPI `graphifyy`, comando `graphify`, skill `/graphify`)
- **Versión de referencia:** 0.9.103 (release del 2026-11-05)
- **Repositorio:** https://github.com/Graphify-Labs/graphify (licencia Apache-2.0)
- **Tipo:** skill para agentes + CLI. Incluye además un servidor MCP opcional (`graphify-mcp`).
- **Agentes compatibles:** Claude Code, Cursor, Codex, Gemini CLI, GitHub Copilot y otros (lista completa en su documentación)
- **Última revisión:** 2026-11-07

## 🎯 Propósito

Convierte un proyecto (código, docs, PDFs, imágenes, video y audio) en un grafo de conocimiento que se consulta en vez de hacer `grep` en todos los archivos. Genera tres archivos en `graphify-out/`:

- `graph.html`: visualización interactiva en el navegador.
- `GRAPH_REPORT.md`: conceptos clave, conexiones inesperadas y preguntas sugeridas.
- `graph.json`: el grafo completo, para consultarlo sin volver a leer los archivos.

Cada arista se etiqueta como `EXTRACTED` (explícita en el origen) o `INFERRED` (deducida por graphify), así se distingue lo leído de lo inferido.

## 🔧 Instalación

Requisitos: Python 3.10+ y [uv](https://docs.astral.sh/uv/) (o pipx).

```bash
uv tool install graphifyy
graphify install
```

> El paquete oficial es `graphifyy` (con doble `y`). El proyecto avisa que otros paquetes `graphify*` en PyPI no están afiliados. Verificar el nombre antes de instalar.

Después, en el asistente de IA:

```
/graphify .
```

### Qué escribe `graphify install` en Claude Code

- Copia el skill a `~/.claude/skills/graphify/SKILL.md` (o a `CLAUDE_CONFIG_DIR`, si está definida).
- Agrega un bloque de registro a tu `~/.claude/CLAUDE.md` global. Si ya tenés reglas propias ahí, hacé una copia de respaldo antes de instalar.
- `graphify uninstall` intenta revertir estos cambios. Si quitás el skill a mano, revisá también el bloque de `CLAUDE.md`.

### Pasos opcionales

- **Hooks de Claude Code:** `graphify claude install` agrega hooks `PreToolUse` y `SessionStart` en `.claude/settings.json`. Quitarlos con `graphify claude uninstall`. Para instalar solo en el proyecto, usar `graphify claude install --project`.
- **Hooks de git:** `graphify hook install` reconstruye el grafo al hacer commit y al cambiar de rama.

## 🔌 Uso

| Comando | Para qué sirve |
|---|---|
| `/graphify .` | Construye el grafo desde el asistente de IA |
| `graphify query "<pregunta>"` | Devuelve el subgrafo relevante para una pregunta en lenguaje natural |
| `graphify path A B` | Muestra el camino más corto entre dos conceptos |
| `graphify explain "<concepto>"` | Describe un nodo y sus conexiones |
| `graphify update .` | Actualiza el grafo después de cambios |
| `graphify extract . --backend claude` | Extracción sin asistente, con un proveedor de modelo configurado |
| `graphify uninstall` | Quita el skill y los registros de todas las plataformas. Con `--purge`, también borra `graphify-out/` |

Ejemplo de salida de `graphify explain` (sobre el código de FastAPI, según el README del proyecto):

```text
Node: APIRouter
  Source:    routing.py L2210
  Community: 2
  Degree:    47
```

## 🧩 Servidor MCP (opcional)

El paquete incluye el comando `graphify-mcp`, que sirve el grafo a otros agentes por MCP:

- **stdio** (por defecto): cada cliente lo lanza como proceso local.
- **HTTP** (`--transport http`): escucha en `127.0.0.1:8080` por defecto. Cambiar `--host` y `--port` según tu caso.
- Si exponés el transporte HTTP, activar autenticación con `--api-key` o la variable `GRAPHIFY_API_KEY`. Sin clave, cualquiera en la red que alcance el puerto puede consultar el grafo.

## 🔐 Privacidad y datos

Según el README del proyecto:

- **Código:** se parsea localmente con tree-sitter. No sale de la máquina y no requiere API key.
- **Video y audio:** se transcriben localmente con faster-whisper.
- **Docs, PDFs e imágenes:** se envían al modelo de tu asistente para la extracción semántica. Con `graphify extract` headless, se envían al proveedor cuya clave de API esté configurada.
- **Telemetría:** el proyecto declara que no tiene telemetría ni analítica.
- **Log de consultas:** está apagado por defecto. Se activa con `GRAPHIFY_QUERY_LOG_ENABLE=1`, y en ese caso guarda las preguntas en `~/.cache/graphify-queries.log`.

> ⚠️ **`graphify-out/` contiene información del código:** rutas de archivos, nombres de funciones y fragmentos de comentarios. Agregarlo a `.gitignore` y no subirlo a repositorios públicos.

Las claves de API de los proveedores se pasan por variables de entorno. No las escribas en archivos del repo.

## ⚠️ Limitaciones

- El proyecto ofrece también Graphify Cloud, un servicio pago con prueba gratuita. No está cubierto por esta guía.
- Los benchmarks publicados por el proyecto son suyos. No los verificamos acá.
- La calidad de la extracción de docs e imágenes depende del modelo que uses.
- Algunas funciones de `install` modifican archivos globales de configuración. Hacer respaldo antes de instalar.

## 📖 Referencias

- [Repositorio](https://github.com/Graphify-Labs/graphify)
- [Documentación](https://docs.graphify.com)
- [Paquete en PyPI](https://pypi.org/project/graphifyy/)
- [Seguridad](https://github.com/Graphify-Labs/graphify/blob/v8/SECURITY.md)

---

**Tags:** #skill #cli #knowledge-graph #claude-code #mcp
