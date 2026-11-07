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

Skills integrados en la app (docx, pdf, pptx, xlsx, skill-creator y otros) no están en esta carpeta porque no los instalás vos.

## 📝 Cómo agregar uno

```bash
cp skills/skill-template.md skills/mi-skill.md
```
