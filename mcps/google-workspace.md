# Google Workspace

Agrupa los cinco conectores de Google disponibles en claude.ai: Docs, Sheets, Drive, Gmail y Calendar. Cada uno es un servidor MCP separado con sus propias tools.

## 📋 Información General

- **Nombre:** Google Docs, Google Sheets, Google Drive, Gmail y Google Calendar
- **Tipo:** Conectores remotos de claude.ai (HTTP)
- **Endpoints:**
  - Docs: `https://docsmcp.googleapis.com/mcp/v1`
  - Sheets: `https://sheetsmcp.googleapis.com/mcp/v1`
  - Drive: `https://drivemcp.googleapis.com/mcp/v1`
  - Gmail: `https://gmailmcp.googleapis.com/mcp/v1`
  - Calendar: `https://calendarmcp.googleapis.com/mcp/v1`
- **Acceso:** conectores de claude.ai
- **Última revisión:** 2026-11-07

## 🎯 Propósito

Leer y editar documentos, hojas de cálculo y archivos de Drive, y consultar y enviar correos y eventos de calendario, desde el agente.

## 🔧 Configuración

No requiere configuración local. Se conectan desde los conectores de claude.ai con la cuenta de Google.

## 🔌 Recursos Disponibles

### Google Docs

- `read_doc`: lee un documento.
- `update_doc`: edita un documento.

### Google Sheets

- `get_spreadsheet`, `get_values`: leen una hoja y sus valores.
- `update_values`, `append_values`, `update_formulas`, `update_spreadsheet`, `insert_dimension`, `batch_clear_values`: modifican la hoja.
- `copy_sheet_to_another_spreadsheet`: copia una hoja a otra planilla.

### Google Drive

- `search_files`, `list_recent_files`, `get_file_metadata`, `read_file_content`, `download_file_content`: buscan y leen archivos.
- `create_file`, `update_file`, `copy_file`, `trash_file`: crean, cambian, copian o envían a la papelera.
- `share_file`, `get_file_permissions`, `request_access`: comparten y revisan permisos.
- `add_comment_reply`, `resolve_comment_thread`: responden y resuelven comentarios.
- `list_shared_drives`, `get_shared_drive_metadata`: consultan unidades compartidas.

### Gmail

- `search_threads`, `get_thread`, `get_message`, `list_drafts`: buscan y leen correos.
- `create_draft`, `update_draft`, `delete_draft`: manejan borradores.
- `send_message`, `reply`, `forward`: envían correos.
- `label_message`, `label_thread`, `unlabel_message`, `unlabel_thread`, `create_label`, `update_label`, `delete_label`, `list_labels`: manejan etiquetas.
- `trash_message`, `trash_thread`, `untrash_message`, `untrash_thread`, `mark_message_spam`, `mark_thread_spam`: mueven a papelera o spam.

### Google Calendar

- `list_calendars`, `list_events`, `get_event`, `search_events`, `suggest_time`: consultan calendarios y eventos.
- `create_event`, `update_event`, `delete_event`, `respond_to_event`: crean, cambian, borran o responden eventos.

## 🔐 Autenticación y Seguridad

- Autenticación con la cuenta de Google en claude.ai. Revocar el acceso desde la configuración de la cuenta de Google.
- **Acciones que salen de la máquina o cambian lo compartido:** `send_message`, `reply`, `forward`, `share_file`, `delete_event`, `trash_file` y `trash_thread`. Confirmar cada una antes de ejecutarla.

## ⚠️ Limitaciones

- Cada servicio tiene sus propios permisos de Google. Si una tool falla, revisar los permisos de esa cuenta.

## 📖 Referencias

- [Conectores de claude.ai](https://claude.ai)

---

**Tags:** #mcp #google #workspace #claude-ai #conector
