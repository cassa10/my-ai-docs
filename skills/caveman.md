# Caveman

## 📋 Información General

- **Nombre:** Caveman (plugin `caveman@caveman`)
- **Versión:** 4.0.1
- **Autor:** Julius Brussee
- **Repositorio:** https://github.com/JuliusBrussee/caveman (licencia Apache-2.0)
- **Agentes compatibles:** Claude Code, OpenCode y Codex, según el README del proyecto
- **Instalación:** como plugin de usuario (ver abajo)
- **Última revisión:** 2026-11-07

## 🎯 Propósito

Reduce los tokens de respuesta: el agente habla en "modo caveman", con frases cortas, sin relleno y con los términos técnicos, código y errores intactos. Además trae skills para revisar código, escribir commits, hacer cambios acotados y medir gasto de tokens.

El autor reporta hasta un 65% menos de tokens en el README del proyecto. Es una cifra suya, no verificada acá.

## 🔧 Instalación

```bash
claude plugin marketplace add JuliusBrussee/caveman
claude plugin install caveman@caveman
```

Verificar:

```bash
claude plugin list
```

## 🪝 Hooks

El plugin registra un hook `SessionStart` que activa el modo caveman al iniciar la sesión, y un hook `SubagentStart`. Ambos ejecutan Node.js. Si Node.js no está en el PATH, el hook sale sin error y no activa el modo.

## 📁 Skills Incluidos

### Modo de voz

| Skill | Para qué sirve |
|---|---|
| `caveman` | Modo principal de respuestas comprimidas. Se apaga con "stop caveman" o "normal mode". |
| `megacave` | Variante en chino clásico (文言文). Solo con `/megacave` o `/caveman wenyan`. |
| `ultracave` | Máxima compresión: fragmentos y una palabra cuando alcanza. Solo con `/ultracave` o `/caveman ultra`. |
| `caveman-help` | Tarjeta de referencia de los skills y comandos de caveman. |

### Código y revisión

| Skill | Para qué sirve |
|---|---|
| `caveman-review` | Revisión de código compacta: una línea por hallazgo con ubicación, problema y solución. |
| `caveman-commit` | Mensaje de commit en Conventional Commits, comprimido a la intención. |
| `cavecrew` | Cuándo delegar en `cavecrew-investigator`, `cavecrew-builder` o `cavecrew-reviewer`, cuyas salidas son compactas. |
| `caveman-explore` | Exploración de solo lectura del repo, con citas `ruta:línea`. |
| `investigate-first` | Diagnóstico de fallas ambiguas antes de editar. |
| `surgical-patch` | Corrige bugs y cambios chicos en la capa más acotada posible. |
| `safe-refactor` | Refactor que conserva el comportamiento, con verificación antes y después. |
| `migration` | Migraciones reversibles y compatibles: esquema, datos, API, configuración o dependencias. |
| `lean-build` | Trabajo de features con riesgo de sobreingeniería: alcance estricto y condición de parada explícita. |
| `verify-and-stop` | Verifica que el trabajo cumple criterios de aceptación, sin ampliar el alcance. |

### Ahorro de tokens y observación local

| Skill | Para qué sirve |
|---|---|
| `caveman-compress` | Comprime un archivo de memoria (por ejemplo `CLAUDE.md`) a formato caveman, con respaldo legible. ⚠️ Envía el texto del archivo al proveedor de modelo configurado. |
| `caveman-stats` | Muestra el uso de tokens y la atribución de modo de la sesión actual. |
| `caveman-learn` | Aplica mejoras de costo sobre un reporte de `caveman learn`, pidiendo consentimiento por cada cambio. |

### Caveman Cloud (opcional)

Estos skills son para instrumentar aplicaciones que construís con LLMs. No hacen falta para el uso local del plugin.

| Skill | Para qué sirve |
|---|---|
| `caveman-setup` | Conecta un repo al gateway de Caveman Cloud para medir cada request LLM, sin cambiar su comportamiento. |
| `caveman-discover` | Encuentra y etiqueta los flujos LLM del repo para agrupar el gasto por flujo. |
| `caveman-evidence-review` | Revisión de solo lectura de costos, trazas, latencia y errores en Caveman Cloud. |
| `caveman-manage` | Inspecciona el ciclo de vida de experimentos y bloquea ejecuciones inseguras. |
| `caveman-optimize` | Convierte una observación de optimización en un candidato con evaluación contra línea base. Requiere aprobación explícita. |

## 🔐 Privacidad y datos

Leer antes de usar. Los datos de esta sección salen del README y de SECURITY.md del proyecto.

- **La skill** corre en tu máquina y no envía nada, salvo `/caveman-compress`, que envía el archivo que comprimís al proveedor de modelo configurado.
- **El CLI** envía estadísticas de uso por defecto: comandos ejecutados, conteo de tokens, uso de los comandos de blocks, un ID aleatorio de instalación, sistema operativo e IP. No envía prompts, código, rutas ni scripts. Para desactivarlo: `caveman telemetry off` o la variable `DO_NOT_TRACK=1`.
- **Modo Auto:** solo si iniciás sesión y lo activás. Envía a Caveman Cloud tus últimas consultas, la anterior, el final de la última respuesta del agente y metadatos de cada request. Para cortarlo: `caveman off routing`.
- **Destino de las requests:** van a tu proveedor o a otro que agregues con `caveman providers add`, con tu propia clave. Solo pasan por Caveman Cloud las requests enrutadas a un modelo de Caveman Cloud.

Para borrar telemetría ya enviada, ver SECURITY.md del proyecto.

## 📚 Ejemplos de Uso

```
/caveman
```
Activa el modo para la sesión.

```
/caveman-review
```
Revisa el diff actual con una línea por hallazgo.

```
/caveman-commit
```
Genera el mensaje de commit a partir de los cambios.

## ⚠️ Limitaciones

- Los skills de Caveman Cloud y la telemetría del CLI envían datos fuera de la máquina. Revisarlos antes de habilitarlos en un repo con datos sensibles.
- El modo comprimido puede omitir explicaciones. Para decisiones delicadas, pedir la versión normal con "normal mode".
- La lista de skills corresponde a la versión 4.0.1; puede cambiar en versiones nuevas.

## 📖 Referencias

- [Repositorio](https://github.com/JuliusBrussee/caveman)
- [Privacidad y seguridad](https://github.com/JuliusBrussee/caveman/blob/main/SECURITY.md)
- [Licencia Apache-2.0](https://github.com/JuliusBrussee/caveman/blob/main/LICENSE)

---

**Tags:** #skill #plugin #claude-code #tokens #compresion
