## Rol y Objetivo
Sos un experto en redacción de informes academicas formales en español. Este informe es para un Seminario Final de una Licenciatura en Informatica. Siempre que adiciones algun información adicional, agrega la fuente de donde se extrae. Trata de no usar palabras en ingles y traducilas en español y agrega entre parentesis "(" y ")" su equivalencia en ingles en cursiva.

Ayudame a desarrollar esta subsección "Metricas, monitores y alarmas" de la sección principal "Observabilidad, monitoreo y alarmas". 

Describi como solucione los problemas planteados en la sección principal con respecto a este sub-eje "Metricas, monitores y alarmas". 

## Contenido 
Para implementar esto se siguieron las siguientes guías: 
 - https://www.baeldung.com/spring-boot-prometheus 
 - https://github.com/stefanprodan/dockprom (esto se utilizo para el setup del ecosistema local y reproducible en cualquier ambiente con docker-compose)

### Integración de metricas en Spring Boot (backend)

Menciona que para esto, se realizo una integración inicial con Micrometer y Spring Boot Actuator (en este punto se expusieron los endpoints requeridos para esto) en el backend. Esta integración se baso en crear una clase base de configuración que herede de la clase "DefaultServerRequestObservationConvention" de micrometer. Esta clase se llamó "CustomServerRequestObservationConvention" y habilitó la observacion de todos los request del backend, agregando contadores y tiempo de respuesta sumado a etiquetas (tags) personalizables por el contexto de la aplicación dependiendo del contenido del request (headers, etc). Esto sumado a tener tags de errores en caso de fallos en la ejecución de los request. Ademas, se sumo una biblioteca de micrometer para realizar pruebas de integración con las metricas que sirvió para verificar toda la funcionalidad agregada (no desarrollar mucho de esto que se va a desarrollar en una futura sección, pero si agregaría una breve mención). Para realizar pruebas locales o en producción se pudo verificar usando el endpoint del actuator "GET /actuator/metrics" que permite realizar queries simples y segmentar por tags. A esta metrica se la llamo "metricas técnicas" y se las agrupo con el prefijo "server_request". Son metricas tecnicas ya que son dan información acerca de los requests de la aplicación del backend pero no aportaban algun valor puntual de negocio.

 Luego, se creo una clase utilitaria "ObservationMetricHelper" que sirvió para adicionar tags durante la ejecución de un request y adicionar etiquetas (tags) a la metricas en cualquier momento de la ejecucion mientras siga ejecutando la observación de micrometer. Tambien, se agrego en esta clase un metodo para crear observaciones custom de cualquier metodo dentro de la aplicación, esto con el objetivo de poder crear metricas de negocio con sus tags mas orientadas a esto. Relacionado a esto ultimo, se creo una guía con un ejemplo de metrica de negocio usando aspectos, el ejemplo es el aspecto "@UserRegisterMetric" que es usado en el AuthService y posee dos metodos @Around y @AfterThrowing para obtener todos los tags necesarios para entender si la operación salio exitosamente o no. Se realizó con aspectos para desacoplar la lógica de metricas de la lógica de negocio. Esta metodologia la vuelve mas compleja, pero abre la puerta de poder extenderse a un modelo mas abstracto (usando interfaces para extraer tags) y reutilizable para cualquier metrica de negocio que se requiera en un futuro.

Adicionalmente se crearon funciones utilitarias y constantes reutilziables para todo el backend para utilizar las mismas claves de tags, recorte de valores largos y valores defaults (ante caso de nulls, strings vacios y errores).


## Ecosistema de observabilidad (Docker) 
Una vez teniendo todo este sistema de metricas integrados al backend, se agrego el proveedor del registro de metricas (metric registry) Prometheus usando la biblioteca recomendada (usando la guía https://www.baeldung.com/spring-boot-prometheus). Con ello, se pudo empezar a realizar una integración local con Docker para poder exportar las metricas y visualizarlas en alguna aplicación que visualice metricas como Grafana. Para realizar esto, se requirio que la aplicación este hecha con contenedores Docker. Para realizar la integración del ecosistema se siguió la guía "https://github.com/stefanprodan/dockprom" que ofrecia una integración facil entre Prometheus y Grafana, y adicionalmente agregaba otras herramientas indispensables para una correcta observabilidad del sistema completo. Estas herramientas son:
- [**Prometheus**](https://prometheus.io/): Software para monitorear y alertar eventos. Persiste métricas en una time serie database (TSDB) alimentándose por llamadas HTTP. Posee queries flexibles y alertas en tiempo real. Este recopila dichas métricas utilizando la técnica “scrape”.
- [**Grafana**](https://grafana.com/): Aplicación web para visualizar analíticas, trazas, diagramas y gráficos. También, puede manejar alertas relacionados con los diagramas. Posee una fácil integración con Prometheus, Loki y Tempo.
- [**Node-exporter**](https://github.com/prometheus/node_exporter): Es una library de Prometheus que sirve para recolectar y exportar datos de infraestructura del host de docker.
- [**Blackbox (health-checker)**](https://github.com/prometheus/blackbox_exporter): Es una herramienta de Prometheus que en general permite sondear servicios utilizando HTTP, HTTPS, DNS; TCP y ICMP. Utilizado para obtener Liveness probe de los servicios.
- [**Postgres-exporter**](https://github.com/prometheus-community/postgres_exporter)
- [**Cadvisor**](https://github.com/google/cadvisor): Recolecta métricas de infraestructura de los contenedores que están corriendo de Docker. Es una library provista por google.
- [**Alertmanager**](https://github.com/prometheus/alertmanager): Es una herramienta de Prometheus. Recibe alertas de Prometheus, las gestiona y las envía a distintos canales (Slack, email, Discord, Webhooks, Telegram, etc).
- [**Promtail**](https://grafana.com/docs/loki/latest/send-data/promtail/): Servicio que se encarga de extraer logs de los contenedores que posean un label arbitrario y establecido por el equipo (en nuestro caso, el label es “logging: promtail”). Es un agente que le provee los logs a la instancia privada de Loki Grafana. Se deja pendiente la migración a Grafana Alloy.
- [**Loki**](https://grafana.com/docs/loki/latest/): Sistema de log aggregation provisto por Grafana y permite realizar queries a los logs.

Para el setup e integración, se creo una guía detallada con imagenes en la carpeta de documentación del repositorio. Ademas, se agregaron templates de dashboards y alarmas default de la aplicación de Grafana y Prometheus.

Observaciones de la integración:
La visualización correcta de las metricas no fue trivial y requirió de muchos ajustes e iteraciones en el código como en las configuraciones de las herramietnas. Se realizaron ajustes en el nombre de las metricas donde poseían "." en el nombre lo que no permitia exportarlos correctamente en Prometheus, por ejemplo "server.request" se lo cambio a "server_request". Tambien, algunos tags (etiqutas) no se cargaban correctamente porque requerían de un valor default y no permitian que se creará la metrica con tags ausentes.


