# Ponytail

## 📋 Información General

- **Nombre:** Ponytail (plugin `ponytail@ponytail`)
- **Versión:** 5.3.2
- **Repositorio:** https://github.com/DietrichGebert/ponytail (licencia MIT)
- **Agentes compatibles:** Claude Code y otros agentes que el proyecto soporta (tiene carpetas de plugin para varios)
- **Instalación:** como plugin de usuario (ver abajo)
- **Última revisión:** 2026-11-07

## 🎯 Propósito

Hace que el agente piense como un senior perezoso: la cantidad mínima de código que resuelve la tarea por completo, y respuestas que una persona ocupada entiende en una sola lectura. Sirve para escribir, arreglar, refactorizar y revisar código, y para elegir dependencias.

Niveles: `lite`, `full` (por defecto) y `ultra`.

## 🔧 Instalación

```bash
claude plugin marketplace add DietrichGebert/ponytail
claude plugin install ponytail@ponytail
```

## 📁 Skills Incluidos

| Skill | Para qué sirve | ¿Cambia algo? |
|---|---|---|
| `ponytail` | Modo principal: la solución más chica que resuelve la tarea. Se activa con "ponytail", "be lazy", "yagni" o ante exceso de ingeniería. | Sí, cambia el código que escribe |
| `ponytail-review` | Revisa un cambio: lógica, seguridad, comportamiento bajo carga, código de riesgo sin tests y líneas que sobran. | No indicado en la descripción |
| `ponytail-audit` | Auditoría de todo el repo: bugs, huecos de seguridad, rutas lentas y qué borrar, unir o dividir. | No, es un reporte de una pasada |
| `ponytail-debt` | Lista los comentarios `shortcut:` (y los `ponytail:` anteriores) como registro de deuda técnica. | No, es un reporte de una pasada |
| `ponytail-gain` | Muestra los ahorros medidos en código, costo y velocidad según el benchmark. | No, es un reporte de una pasada |
| `ponytail-help` | Referencia rápida de niveles, skills y comandos. | No |

## 📚 Ejemplos de Uso

```
/ponytail-review
```
Revisa el último cambio y explica cada hallazgo en lenguaje simple.

```
/ponytail-debt
```
Lista las postergaciones que dejó el agente en el código.

## ⚠️ Limitaciones

- El modo `ponytail` busca la solución mínima. Si la tarea requiere más alcance, pedirlo explícitamente.
- Los reportes (`audit`, `debt`, `gain`) no modifican archivos. Las correcciones hay que pedirlas aparte.

## 📖 Referencias

- [Repositorio](https://github.com/DietrichGebert/ponytail)
- [Licencia MIT](https://github.com/DietrichGebert/ponytail/blob/main/LICENSE)

---

**Tags:** #skill #plugin #claude-code #calidad #yagni
