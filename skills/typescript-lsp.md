# TypeScript LSP

## 📋 Información General

- **Nombre:** TypeScript LSP (plugin `typescript-lsp@claude-plugins-official`)
- **Versión:** 1.0.0 (la del marketplace oficial en esta PC; no está instalado todavía)
- **Autor:** Anthropic
- **Tipo:** servidor de lenguaje (LSP). No es un skill ni un agente.
- **Repositorio:** https://github.com/anthropics/claude-plugins-official (carpeta `plugins/typescript-lsp`)
- **Agentes compatibles:** Claude Code
- **Última revisión:** 2026-11-21

## 🎯 Propósito

Le da a Claude el servidor de lenguaje de TypeScript: ir a la definición, buscar referencias y ver errores de tipos reales, en lugar de inferirlos del texto. Aplica a `.ts`, `.tsx`, `.js`, `.jsx`, `.mts`, `.cts`, `.mjs` y `.cjs`.

## 🔧 Instalación

Requisito: Node.js y el servidor instalado globalmente:

```bash
npm install -g typescript-language-server typescript
```

Plugin:

```bash
claude plugin install typescript-lsp@claude-plugins-official
```

Verificar:

```bash
claude plugin list
```

Reiniciar Claude Code después de instalar.

## 🚀 Uso

- No tiene comandos propios. Al trabajar con archivos TypeScript o JavaScript, Claude usa la herramienta LSP para navegar el código y ver errores.
- Requiere que `typescript-language-server` esté en el PATH.

## 🗑️ Desinstalación

```bash
claude plugin uninstall typescript-lsp@claude-plugins-official
```

## ⚠️ Limitaciones

- Solo aporta en proyectos TypeScript o JavaScript. Este repo no tiene código de ese tipo.
- Sin el servidor en el PATH, el plugin no arranca.

## 📖 Referencias

- [Plugin en el repo oficial](https://github.com/anthropics/claude-plugins-official/tree/main/plugins/typescript-lsp)
- [typescript-language-server en npm](https://www.npmjs.com/package/typescript-language-server)

---

**Tags:** #skill #plugin #claude-code #typescript #lsp
