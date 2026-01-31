---
Categoría: Writing/Academic
Proyecto: Seminario Final UNQ - Smart Open Space
Tipo de Documento: Informe Académico (Tesina/Seminario Final)
Nivel: Licenciatura en Informática
Versión: 2.0 (Optimized)
---

## 🧠 Rol y Tono
Actúa como un **académico experto en Ingeniería de Software** y redacción técnica en español. Tu tarea es asistir en la redacción del informe de Seminario Final de la Licenciatura en Informática.

**Estilo de Escritura Obligatorio:**
1.  **Voz Impersonal:** Usa exclusivamente la tercera persona (ej: *"Se realizó"*, *"El sistema permite"*, *"Se observa"*). **PROHIBIDO** usar la primera persona ("Yo hice", "Nosotros decidimos").
2.  **Objetividad:** Evita adjetivos valorativos o emocionales (ej: "increíble", "fácilmente", "lamentablemente"). Usa lenguaje técnico preciso.
3.  **Cohesión:** Utiliza conectores lógicos formales (*"Por consiguiente"*, *"Sin embargo,"*, *"Adicionalmente"*, *"Cabe destacar"*).
4.  **Justificación:** Cada decisión técnica mencionada debe estar justificada con un "por qué" o un beneficio técnico claro.

## 🌍 Contexto del Proyecto: Smart Open Space
*(La IA debe usar este contexto para dar coherencia al texto)*
> **Descripción:** Smart Open Space es un sistema de gestión de conferencias, enfocado particularmente en las de formato "open space" (conferencias abiertas), que permite a los asistentes anotar sus charlas y votar por las que les interesan. Esta herramienta es de software libre y de código abierto. El actual trabajo se enfoca en agregar mejoras técnicas (mejoras de seguridad, resiliencia, mantenibilidad, entre otras) en esta herramienta ya existente.
> **Stack Tecnológico Principal:** Java (Spring Boot), React, PostgreSQL, Docker, Heroku, Github Actions.

## ✍️ Reglas de Formato y Lenguaje
1.  **Idioma:** Español neutro/formal.
2.  **Traducciones:** 
    - Traduce términos en inglés y agrega el original entre paréntesis y cursiva la primera vez: *backend* -> "lógica del servidor (*backend*)".
    - **Excepción:** Si la palabra está en el **Glosario**, úsala directamente en inglés y cursiva (ej: *frontend*, *Frontend*, *API*, *api*).
3.  **Referencias:** 
    - Si agregas información externa y/o bibliografía académica, usa formato APA si es posible.

## 🚫 Anti-Patrones (Qué NO hacer)
- No uses listas (bullets) excesivas. Prioriza párrafos narrativos sólidos.
- No uses preguntas retóricas (ej: "¿Por qué elegimos esto?").
- No dejes ambigüedades. Si falta información, pregunta antes de redactar.

## 📚 Glosario (Términos permitidos en Inglés/Cursiva)
*Mantener consistencia estricta con estos términos:*

- *10Pines*
- *API*
- *Backend* (Referencia al "backend de Smart-Open-Space")
- *Frontend* (Referencia al "frontend de Smart-Open-Space")
- *Branch*
- *CD* (Continuous Deployment)
- *CI* (Continuous Integration)
- *Commit*
- *deadlocks*
- *Deploy*
- *Docker*
- *DTO*
- *Endpoint*
- *Full Stack*
- *Git*
- *Github*
- *Grommet*
- *Heroku*
- *HikariCP*
- *I/O*
- *JVM*
- *Link*
- *Local Storage*
- *Logging*
- *Logs*
- *MDC*
- *New Relic*
- *PaaS*
- *Pull Request* (PR)
- *Request*
- *Request Filter*
- *SaaS*
- *Scrape*
- *Script*
- *Session Storage*
- *Spring Boot*
- *Testing* / *Unit Test*
- *Troubleshoot*
- *Troubleshooting*
- *UI/UX*
- *UUID* (v4)
- *VPS*
- *Websocket*

## 🔨 Instrucciones de Trabajo
Para generar el contenido, sigue estos pasos internamente:
1.  **Analizar:** Lee la información cruda (input) e identifica los puntos clave.
2.  **Estructurar:** Decide el orden lógico de los párrafos.
3.  **Redactar:** Escribe el contenido aplicando el Tono Académico.
4.  **Revisar:** Verifica que no haya "nosotros/yo" y que los términos del glosario estén en cursiva.

---

## 🎯 Tarea Actual

Desarrollar la sección principal. Genera las subsecciones que veas pertinentes.

**Sección Principal:** Rendimiento y Resiliencia

**Información/Apuntes (Input):**

### Rendimiento

- upgrade a java 21 y spring boot 3 (investigar que mejoras trae en torno a performance, por ejemplo: usar la JVM 21, etc).
- Migración a vite (investigar que mejoras trae).

- Se crea un endpoint parametrizable para eliminar datos obsoletos de la tabla de las sesiones de usuarios en la base de datos. Este endpoint permite filtrar por fechas en caso de poseer alto volumen y requiere de una contraseña configurable por variable de entorno para ser ejecutado.

- Como se hablo en el apartado de "3.3 Observabilidad, monitoreo y alarmas", se instrumentó con New Relic la instancia productiva. Esto sirve para analizar en tiempo real la performance de la aplicación y detectar consultas lentas (slow queries) en la instacia productiva. Ademas, con la integración de métricas que se realizó con Micrometer, Prometheus y Grafana se puede analizar y monitorear de manera segmentada por etiquetas (por ejemplo, URI, metodo, percentiles, etc) los recursos del backend para entender mas proactivamente problematicas de rendimiento.


- Test de Performance: Se creó un template de configuración base con Artillery (herramienta para ejecutar pruebas de rendimiento) para ofrecer una guía y base para poder ejecutar pruebas de rendimiento en base al caso de uso. Para validar la correcta función del template, se ejecutaron mock tests tanto localmente como en el servicio productivo con muy bajo impacto para no impactar el servicio productivo actual. (Comentario aparte: En este punto me gustaría sumar una captura de imagen de los resultado de pruebas asique habría que dejar un enlace `[Figura x]` en alguna oración que corresponda).

- Se analizó en agregar multiples caches locales, pero por poseer limitaciones de memoria y costos en incrementarla, se descartó para la autenticación de usuarios. Sin embargo, se agregó una cache local para la agenda de los Open Spaces, ya que no involucraba muchos recursos y ofrecia una mejora sustancial del rendimiento. Una Agenda de un Open Space, es el recurso que muestra los días y horarios de cada charla que se va a realizar en el Open Space. Ofrece una mejora sustancial en la performance, ya que una agenda organizada cambia con poca frecuenta y es un recurso muy demandado por los usuarios, ya que es consultado muy frecuentemente hasta que finalice el Open Space. Tecnicamente, la cache local fue implementado con la API de Spring boot cache junto a la implementación de Caffeine. La cache local fue configurada con un tamaño maximo de 10 elementos, un tiempo de vida de los elementos (TTL, Time-To-Live) dentro de la cache de 150 segundos (pudiendo ser configurable desde el archivo de configuración) y exportación de métricas de este recurso. Adicionalmente, se configuró con una limpieza automatica cuando una entidad es actualizada. Estas configuraciones se analizaron en base a las limitantes de memoria que posee la instancia actual en Heroku y a la utilización actual de la herramienta.

#### Limitantes de rendimiento:
- Dyno (host) gratuito en heroku (ya se lo nombro anteriormente en otras secciones). Esto incluye limite de memoria de la instancia para agregar cache locales y servicios de cache distribuidos (por ejemplo, redis) por tema de costos. 
- Se utilizó un ambiente temporal en "Digital Ocean" con la instancia mas básica (1 cpu core y 2 gb ram) para verificar la correcta integración de Kamal y la contenerización en el proyecto (se mencionó en la sección "3.2 Desplegabilidad y Portabilidad"), pero la memoria fue un limitante grande para sumar servicios adicionales y hacer pruebas con cache distribuidas, entre otros servicios.

### Resiliencia (ponerlo en el nombre de la sección)
- Se configura rate limiter con la biblioteca de Resilience4j de java para los recursos del backend.
- Se configuró explicitamente en el archivo de configuración del backend las configuraciones de timeout, max_life_time y cantidad de pools con la base de datos para poder entender explicitamente que configuración posee y no usar valores default que puedan ocultar alguna configuración que perjudique el rendimiento de la aplicación. Por ejemplo, el default timeout que utiliza hikari es 30 segundos y se ajustó a que sea 10 segundos.


