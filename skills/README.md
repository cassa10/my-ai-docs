# Skills

Documentación de skills para agentes AI (Claude Code, Codex u otros). Un skill es un paquete de instrucciones que el agente carga cuando la tarea lo requiere.

Los plugins que traen varios skills se documentan en un solo archivo, con una tabla por skill. Para skills sueltos, usar el template.

## 📂 Templates Disponibles

- **[skill-template.md](./skill-template.md)**: estructura base para documentar un skill suelto, incluyendo su `SKILL.md`, instalación y ejemplos.

## 🧩 Skills Instalados

| Paquete | Origen | Versión | Skills | Documentación |
|---|---|---|---|---|
| Caveman | GitHub: JuliusBrussee/caveman | 4.0.1 | 22 | [caveman.md](./caveman.md) |
| Ponytail | GitHub: DietrichGebert/ponytail | 5.3.2 | 6 | [ponytail.md](./ponytail.md) |
| Engram (memoria) | GitHub: Gentleman-Programming/engram | 0.1.22 | 1 (`engram-memory`) | [engram.md](../mcps/engram.md) |
| Superpowers | Sincronizado desde claude.ai | 6.4.2 | 15 | [superpowers.md](./superpowers.md) |
| Engineering | Sincronizado desde claude.ai | 1.2.0 | 10 | [engineering.md](./engineering.md) |
| Graphify | PyPI `graphifyy` (GitHub: Graphify-Labs/graphify) | 0.9.103 | 1 (`/graphify`) + CLI | [graphify.md](./graphify.md) |
| i-have-adhd | GitHub: ayghri/i-have-adhd | 0.4.1 | 1 (`/i-have-adhd`) | [i-have-adhd.md](./i-have-adhd.md) |
| Modern Web Guidance | GitHub: GoogleChrome/modern-web-guidance | 1.0.1 | 1 (`modern-web-guidance`) + CLI | [modern-web-guidance.md](./modern-web-guidance.md) |
| Frontend Design | GitHub: anthropics/claude-plugins-official | 1.1.1 | 1 (`frontend-design`) | [frontend-design.md](./frontend-design.md) |
| TypeScript LSP | GitHub: anthropics/claude-plugins-official | 1.0.0 | 0 (servidor LSP) | [typescript-lsp.md](./typescript-lsp.md) |
| Security Guidance | GitHub: anthropics/claude-plugins-official | 2.0.21 | 0 (hooks) | [security-guidance.md](./security-guidance.md) |
| Code Review | GitHub: anthropics/claude-plugins-official | 1.0.1 | 1 (`/code-review`) | [code-review.md](./code-review.md) |
| Commit Commands | GitHub: anthropics/claude-plugins-official | 1.0.1 | 3 (comandos) | [commit-commands.md](./commit-commands.md) |
| Code Simplifier | GitHub: anthropics/claude-plugins-official | 1.0.0 | 1 (agente) | [code-simplifier.md](./code-simplifier.md) |
| CLAUDE.md Management | GitHub: anthropics/claude-plugins-official | 1.0.0 | 1 (skill) + 1 (comando) | [claude-md-management.md](./claude-md-management.md) |
| PR Review Toolkit | GitHub: anthropics/claude-plugins-official | 1.0.1 | 6 (agentes) + 1 (comando) | [pr-review-toolkit.md](./pr-review-toolkit.md) |

Skills integrados en la app (docx, pdf, pptx, xlsx, skill-creator y otros) no están en esta carpeta porque no los instalás vos.

## 📝 Cómo agregar uno

```bash
cp skills/skill-template.md skills/mi-skill.md
```
