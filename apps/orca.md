# Orca

## 📋 Información General

- **Nombre:** Orca (repo `stablyai/orca`)
- **Versión:** 1.4.269 (última release al 2026-11-21; ver [releases](https://github.com/stablyai/orca/releases))
- **Tipo:** aplicación de escritorio, con app móvil y servidor remoto. No es un skill ni un plugin.
- **Licencia:** MIT. Lenguaje principal: TypeScript.
- **Plataformas:** macOS, Windows y Linux (escritorio); iOS y Android (móvil).
- **Sitio:** https://orca.dev
- **Repositorio:** https://github.com/stablyai/orca
- **Agentes compatibles:** cualquier agente CLI que corra en una terminal (Claude Code, Codex, Grok, GitHub Copilot CLI, Amp, Rovo Dev, entre otros)
- **Última revisión:** 2026-11-21

## 🎯 Propósito

Orquesta varios agentes CLI desde una sola app. Cada agente corre en su propio worktree y terminal. Un agente coordinador puede repartir una tarea entre agentes worker y devolverte sus resultados. Lo que se hace en Orca también lo puede hacer un agente mediante `orca` CLI (crear worktrees, arrancar workers, programar automatizaciones).

Funciones principales según el README:

- **Orchestrate Agents:** un agente grande reparte el trabajo en workers, cada uno en su workspace.
- **Chat or Terminal:** el mismo agente en interfaz de chat o en la terminal, sin perder el contexto al cambiar.
- **Run Anywhere:** Remote Orca Server, hosts SSH o una VM en la nube por worktree.
- **Review AI Output:** revisar diffs y dejar notas en líneas exactas para devolverlas al agente.
- **Orca Bots:** pedir una tarea desde Slack, Linear o GitHub, con el agente corriendo en tu propia suscripción.
- **App móvil:** avisos cuando un agente necesita una respuesta.

## 🔧 Instalación

### Escritorio

- Descargar desde https://orca.dev/download o desde las [releases de GitHub](https://github.com/stablyai/orca/releases/latest).
- macOS con Homebrew (usar siempre el nombre completo; `orca` solo es otro cask):

```bash
brew install --cask stablyai/orca/orca
```

- Arch Linux (AUR):

```bash
yay -S stably-orca-bin
```

### Móvil

- iOS: [App Store](https://apps.apple.com/us/app/orca-ide/id6766130217)
- Android: [Google Play](https://play.google.com/store/apps/details?id=dev.orca.app) o [APK](https://orca.dev/download/android)

## 🚀 Uso

- Instalar y tener logueado cada agente CLI que vayas a usar (por ejemplo `claude` o `codex`). Orca no reemplaza su login.
- Los bots corren con tu propia suscripción de Claude Code o Codex. Revisar su consumo.
- Documentación oficial: https://orca.dev/docs

## ⚠️ Limitaciones

- **Bots con entrada externa:** un bot puede recibir pedidos desde Slack, Linear o GitHub y abrir pull requests. Antes de habilitarlo, revisar la [seguridad de los bots](https://orca.dev/docs/bots/security).
- **Telemetría:** Orca recolecta datos anónimos de uso. Ver [privacidad y telemetría](https://orca.dev/docs/telemetry) para desactivarla. No se verificó el método de opt-out.
- **Versión:** el proyecto publica releases casi a diario. El número de este doc puede quedar viejo.
- **Release candidates:** `brew install --cask stablyai/orca/orca@rc` choca con el cask estable. Desinstalar uno antes de instalar el otro.

## 📖 Referencias

- [Sitio oficial](https://orca.dev)
- [Documentación](https://orca.dev/docs)
- [Repositorio](https://github.com/stablyai/orca)
- [Releases](https://github.com/stablyai/orca/releases)

---

**Tags:** #app #orchestration #claude-code #codex #terminal
