# Spotify

## 📋 Información General

- **Nombre:** Spotify
- **Tipo:** Conector remoto de claude.ai (HTTP)
- **Endpoint:** lo administra claude.ai, no hace falta configurarlo
- **Acceso:** conector de claude.ai
- **Última revisión:** 2026-11-07

## 🎯 Propósito

Buscar música, ver qué se está reproduciendo, guardar o quitar canciones de la biblioteca y generar playlists.

## 🔧 Configuración

No requiere configuración local. Se conecta desde los conectores de claude.ai.

## 🔌 Recursos Disponibles

### Tools

1. **`search`**: busca canciones, álbumes, artistas o playlists.
2. **`get_currently_playing`**: devuelve lo que se está reproduciendo.
3. **`save_to_library`**: guarda elementos en la biblioteca.
4. **`remove_from_library`**: quita elementos de la biblioteca.
5. **`generate_playlist`**: genera una playlist a partir de un pedido.

## 🔐 Autenticación y Seguridad

- Autenticación con la cuenta de Spotify vinculada en claude.ai.
- `save_to_library` y `remove_from_library` modifican la biblioteca: confirmar antes de usarlos.

## ⚠️ Limitaciones

- El conector puede cambiar sin aviso.

## 📖 Referencias

- [Conectores de claude.ai](https://claude.ai)

---

**Tags:** #mcp #musica #claude-ai #conector
