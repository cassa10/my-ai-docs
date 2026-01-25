# Context7

## 📋 Información General

- **Nombre:** Context7 MCP Server
- **Versión:** 1.0.0
- **Tipo:** Hybrid (Local/Remote)

## 🎯 Propósito

Context7 MCP obtiene documentación y ejemplos de código actualizados y específicos de la versión directamente de la fuente y los coloca en el contexto de tu LLM. Esto ayuda a evitar alucinaciones, código obsoleto y respuestas genéricas.

## 🔧 Configuración

### Instalación

Se recomienda obtener una API Key gratuita en [context7.com/dashboard](https://context7.com/dashboard) para límites más altos.

### Configuración JSON

#### Ejecución Local (Recomendado para uso personal)
```json
{
  "mcpServers": {
    "context7": {
      "command": "npx",
      "args": [
        "-y",
        "@upstash/context7-mcp",
        "--api-key",
        "YOUR_API_KEY"
      ]
    }
  }
}
```

#### Ejecución Remota (HTTP)
```json
{
  "mcpServers": {
    "context7": {
      "url": "https://mcp.context7.com/mcp",
      "headers": {
        "CONTEXT7_API_KEY": "YOUR_API_KEY"
      }
    }
  }
}
```

## 🔌 Recursos Disponibles

### Tools

Lista de herramientas que este MCP proporciona:

1. **resolve-library-id**
   - **Descripción:** Resuelve un nombre de librería general en un ID de librería compatible con Context7.
   - **Parámetros:**
     - `query` (string): La pregunta o tarea del usuario (usada para ordenar resultados por relevancia).
     - `libraryName` (string): El nombre de la librería a buscar.
   - **Retorna:** ID de la librería (ej. `/vercel/next.js`).

2. **query-docs**
   - **Descripción:** Recupera documentación para una librería usando un ID de librería compatible con Context7.
   - **Parámetros:**
     - `libraryId` (string): ID exacto de la librería compatible con Context7 (ej. `/mongodb/docs`).
     - `query` (string): La pregunta o tarea para obtener documentación relevante.
   - **Retorna:** Documentación relevante y ejemplos de código.

## 📚 Ejemplos de Uso

### Ejemplo 1: Prompt Directo

```
Create a Next.js middleware that checks for a valid JWT in cookies. use context7
```

### Ejemplo 2: Especificar Librería

```
Implement basic authentication with Supabase. use library /supabase/supabase for API and docs.
```

## 🔐 Autenticación y Seguridad

### Variables de Entorno / Flags

Se requiere una API Key que se pasa como argumento `--api-key` (local) o header `CONTEXT7_API_KEY` (remoto).

## 🤖 Reglas Sugeridas

Para usar Context7 automáticamente, puedes agregar la siguiente regla a tu configuración de Cursor o `.cursorrules` (o `CLAUDE.md`):

```markdown
Always use Context7 MCP when I need library/API documentation, code generation, setup or configuration steps without me having to explicitly ask.
```

## 📌 Notas Adicionales

- Si conoces el ID de la librería, puedes usarlo directamente para saltar el paso de búsqueda.
- Puedes especificar versiones en tu prompt (ej. "Next.js 14") y Context7 buscará la documentación adecuada.
