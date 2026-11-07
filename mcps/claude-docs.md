# Claude Docs

## 📋 Información General

- **Nombre:** Claude Docs
- **Tipo:** Conector remoto de claude.ai (HTTP)
- **Endpoint:** `https://api.anthropic.com/v1/pages/mcp`
- **Acceso:** conector de claude.ai
- **Última revisión:** 2026-11-07

## 🎯 Propósito

Crear, leer, editar y compartir documentos vivos desde el agente. Sirve para documentos que la gente va a seguir editando o comentando, no para archivos del código.

## 🔧 Configuración

No requiere configuración local. Se conecta desde los conectores de claude.ai y aplica a todas las sesiones de esa cuenta.

## 🔌 Recursos Disponibles

### Tools

1. **`guide`**: devuelve la guía de uso de Claude Docs. Conviene cargarla antes de otras llamadas.
2. **`create`**: crea un documento.
3. **`read`**: lee un documento.
4. **`update`**: edita un documento o cambia su contenido.
5. **`query`**: busca dentro de documentos.
6. **`export`**: exporta un documento.
7. **`delete`**: borra un documento.
8. **`batch`**: aplica varias operaciones sobre un documento en una sola llamada.

## 🔐 Autenticación y Seguridad

- Autenticación con la cuenta de claude.ai.
- `delete` y `export` cambian o sacan contenido de la cuenta: confirmar antes de usarlos.

## ⚠️ Limitaciones

- Pensado para documentos. Para archivos de un proyecto, usar el repositorio.

## 📖 Referencias

- [Conectores de claude.ai](https://claude.ai)

---

**Tags:** #mcp #docs #claude-ai #conector
