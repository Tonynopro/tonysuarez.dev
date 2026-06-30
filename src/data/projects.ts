export type Platform = "web" | "mobile" | "desktop" | "web+mobile";
export type ProjectType = "app" | "game";

export type ContentBlock =
  | { type: "text"; content: string }
  | { type: "image"; src: string; caption?: string }
  | { type: "images"; srcs: string[]; caption?: string }
  | { type: "video"; url: string; caption?: string }
  | { type: "heading"; content: string }
  | { type: "list"; items: string[] }
  | { type: "highlight"; label: string; value: string };

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  platform: Platform;
  type: ProjectType;
  year: string;
  tags: string[];
  link?: string;
  color: string;
  importance?: 1 | 2 | 3 | "ACT";
  image?: string;
  images?: { web?: string; mobile?: string };

  detail?: {
    tagline?: string;
    content: ContentBlock[];
    links?: ProjectLink[];
  };
}

export const projects: Project[] = [
  
  {
    id: "cinemar",
    title: "Cinemar",
    description:
      "Sistema web de gestión de cine. Arquitectura de roles múltiples, cartelera dinámica y transacciones con Stripe.",
    platform: "web",
    type: "app",
    year: "2024",
    tags: ["HTML/JS", "Node.js", "MySQL", "Stripe API"],
    color: "#FFF3E0",
    importance: 3,
    image: "/projects/cinemar/cover.png",
    detail: {
      tagline: "Arquitectura Full-Stack para flujos transaccionales reales",
      content: [
        {
          type: "highlight",
          label: "Arquitectura",
          value: "Cliente-Servidor con API REST",
        },
        { type: "heading", content: "El Ecosistema Cinemar" },
        {
          type: "text",
          content:
            "Desarrollado en equipo como un proyecto escolar, Cinemar fue diseñado para imitar la complejidad técnica de una cadena de cines real. El objetivo principal fue construir un sistema robusto que manejara con éxito la separación entre una interfaz amigable para el cliente final y un panel de control complejo para la administración.",
        },
        { type: "heading", content: "Ingeniería de Accesos y Roles" },
        {
          type: "list",
          items: [
            "Administrador: Cuenta con control total sobre el ABM (Altas, Bajas, Modificaciones) de la cartelera, horarios, salas y permisos del sistema.",
            "Empleado: Interfaz optimizada para la validación de tickets y gestión operativa rápida.",
            "Cliente: Experiencia fluida para consultar la cartelera, seleccionar asientos (bloqueo en tiempo real) y aplicar cupones de descuento.",
          ],
        },
        {
          type: "image",
          src: "/projects/cinemar/ui-principal.png",
          caption: "Menu principal del sistema",
        },
        
        {
          type: "image",
          src: "/projects/cinemar/ui-trabajador.png",
          caption: "Panel de control para empleados",
        },
        {
          type: "image",
          src: "/projects/cinemar/ui-admin.png",
          caption: "Panel de control para administradores",
        },
        { type: "heading", content: "Gestión de Cartelera Dinámica" },
        {
          type: "text",
          content:
            "La cartelera se gestiona mediante un panel de administración que permite agregar, modificar o eliminar películas y horarios. Cada película puede tener múltiples funciones en diferentes salas, y el sistema asegura que no haya conflictos de horarios.",
        },
        {
          type: "image",
          src: "/projects/cinemar/ui-cartelera.png",
          caption: "Vista de la cartelera dinámica en el panel de trabajador",
        },
        { type: "heading", content: "Integración de Pagos con Stripe" },
        {
          type: "text",
          content:
            "Para darle una capa de viabilidad comercial real al prototipo, implementé la API de Stripe en el entorno de Node.js. Esto permitió procesar pagos reales simulados de forma segura, garantizando que los datos sensibles de las tarjetas nunca tocaran nuestra base de datos relacional (MySQL), manejando la comunicación exclusivamente a través de tokens.",
        },
        {
          type: "image",
          src: "/projects/cinemar/ui-pago.png",
          caption: "Interfaz de pago con Stripe",
        },
      ],
      links: [
        { label: "Ver repositorio", url: "https://github.com/usuario/cinemar" },
        { label: "Probar demo", url: "https://cinemar.demo.com" },
      ],
    },
  },

  
  {
    id: "sistema-inventario",
    title: "Sistema Integral de Inventario",
    description:
      "Plataforma de trazabilidad logística para el ciclo completo de vida de productos, desarrollada en Next.js.",
    platform: "web",
    type: "app",
    year: "2026",
    tags: ["Next.js", "MySQL", "Logística"],
    color: "#A020F0",
    importance: 1,
    image: "/projects/inventario/cover.png",
    detail: {
      tagline: "Trazabilidad desde el almacén hasta el uso final",
      content: [
        {
          type: "highlight",
          label: "Despliegue",
          value: "MVP entregado en ~1 semana",
        },
        { type: "heading", content: "Visión del Sistema Completo" },
        {
          type: "text",
          content:
            "Un sistema de inventario efectivo no solo suma y resta cajas; es un registro financiero y operativo crítico. Desarrollé esta plataforma de manera individual para un cliente en un tiempo récord de una semana, garantizando la trazabilidad total de los materiales a través de los distintos departamentos de la organización.",
        },
        {
          type: "images",
          srcs: [
            "/projects/inventario/ui1.png",
            "/projects/inventario/ui2.png",
          ],
          caption:
            "Panel de solicitudes de empleados y reporte histórico de movimientos",
        },
        { type: "heading", content: "Flujo de Vida del Producto" },
        {
          type: "text",
          content:
            "El sistema modela el ciclo continuo de los activos físicos, centralizando la información:",
        },
        {
          type: "list",
          items: [
            "Ingreso y Clasificación: Alta de productos organizados por departamentos y categorías.",
            "Solicitud: Interfaz para que los empleados requieran material justificando su destino.",
            "Salida y Devolución: Autorización por parte del administrador que descuenta el stock, y un módulo especial de devoluciones que reingresa el material de forma auditable.",
          ],
        },
        { type: "heading", content: "Resolviendo la Concurrencia" },
        {
          type: "text",
          content:
            "El reto técnico más grande fue prevenir el stock negativo. Implementé validaciones estrictas en la base de datos (MySQL) y en la capa de negocio (Next.js) para asegurar que múltiples solicitudes simultáneas sobre el mismo artículo no sobreasignaran los recursos disponibles.",
        },
      ],
    },
  },

  
  



























































  
  {
    id: "comparador-horarios",
    title: "Comparador de Horarios",
    description:
      "Web app que cruza datasets de múltiples usuarios para mapear gráficamente conexiones sociales y tiempos libres en común.",
    platform: "web+mobile",
    type: "app",
    year: "2026",
    tags: ["Next.js", "SQLite", "Data Viz"],
    color: "#B3E5FC",
    importance: 2,
    image: "/projects/comparador/cover.png",
    images: {
      web: "/projects/comparador/ui-zoom.png",
      mobile: "/projects/comparador/ui-mobile.png",
    },
    detail: {
      tagline: "De un simple horario a un mapa de relaciones sociales",
      content: [
        { type: "heading", content: "Más Allá de la Productividad" },
        {
          type: "text",
          content:
            "Si el 'Generador de Horarios' resolvía la productividad, el Comparador resuelve la sociabilidad. Me di cuenta de que un horario contiene información relacional valiosa. Este proyecto convierte datos estáticos en una red dinámica que responde a: ¿Quién tiene huecos libres cuando yo también los tengo?",
        },
        {
          type: "image",
          src: "/projects/comparador/ui-zoom.png",
          caption:
            "Interfaz gráfica mostrando solapamientos de tiempo entre varios usuarios mediante indicadores visuales",
        },
        { type: "heading", content: "Motor de Búsqueda de Coincidencias" },
        {
          type: "text",
          content:
            "El procesamiento debía ser rápido y soportar comparaciones múltiples. La arquitectura consta de:",
        },
        {
          type: "list",
          items: [
            "Ingesta de datos: Los alumnos suben sus archivos (.csv o el formato propio .fdo) los cuales son parseados y guardados en una base de datos ligera (SQLite).",
            "Motor de cruce: Consultas SQL optimizadas que buscan intersecciones exactas (clases compartidas) y espacios vacíos concurrentes (tiempo libre en común).",
            "Análisis relacional: Un algoritmo matemático secundario que calcula un porcentaje de compatibilidad de horarios entre estudiantes.",
          ],
        },
        { type: "heading", content: "El Reto de la Interfaz" },
        {
          type: "text",
          content:
            "El desafío técnico de frontend fue la visualización de la información. Mostrar las coincidencias de tres o cuatro personas en una sola tabla de 5 días sin saturar la pantalla requirió un diseño de UI limpio, utilizando mapeo por colores e identificadores visuales (bolitas) en lugar de bloques densos de texto.",
        },
      ],
    },
  },

  
  {
    id: "test-psicologicos",
    title: "Sistema de Test Psicológicos",
    description:
      "Plataforma clínica para evaluar estrés y ansiedad. Delega la lógica de diagnóstico a la base de datos y grafica evolución temporal.",
    platform: "web",
    type: "app",
    year: "2025",
    tags: ["React", "Node.js", "MySQL"],
    color: "#E1BEE7",
    importance: 1,
    image: "/projects/psico/cover.gif",
    detail: {
      tagline: "Visualizando la evolución de la salud mental con datos",
      content: [
        {
          type: "highlight",
          label: "Innovación Técnica",
          value: "Cálculos mediante Stored Procedures",
        },
        { type: "heading", content: "Automatización Diagnóstica" },
        {
          type: "text",
          content:
            "Para un psicólogo, tabular respuestas a mano quita tiempo de análisis clínico real. Este proyecto, desarrollado para un cliente, automatiza la recolección de respuestas de pruebas de ansiedad y estrés, transformando cuestionarios en datos estructurados.",
        },
        {
          type: "image",
          src: "/projects/psico/grafica-evolucion.png",
          caption:
            "Gráfica interactiva mostrando la reducción de estrés a lo largo de varias sesiones",
        },
        { type: "heading", content: "Arquitectura Segura y Eficiente" },
        {
          type: "text",
          content:
            "El manejo de información clínica requiere exactitud. Para garantizar que la evaluación fuera inmediata y segura, tomé decisiones arquitectónicas específicas:",
        },
        {
          type: "list",
          items: [
            "Lógica en la DB: Los umbrales de diagnóstico y la sumatoria de puntajes no se hacen en Node.js, sino que están programados directamente en MySQL mediante Stored Procedures, blindando la lógica de negocio.",
            "Ventana temporal de evaluación: El backend cuenta con un validador que bloquea estrictamente la aplicación de un nuevo test si no han pasado 15 días desde el último.",
            "Data Visualization: Implementación de librerías en React para leer el historial y pintar gráficas longitudinales de fácil interpretación para el terapeuta.",
          ],
        },
      ],
    },
  },

  
  {
    id: "fansdeomar",
    title: "Fans de Omar",
    description:
      "Aplicación web comunitaria viva. Su diseño muta automáticamente mediante Next.js según eventos mensuales y cumpleaños.",
    platform: "web",
    type: "app",
    year: "2025",
    tags: ["Next.js", "MySQL", "Zoho Mail"],
    color: "#E8F0FE",
    importance: "ACT",
    link: "https://fansdeomar.com",
    image: "/projects/fdo/cover.png",
    detail: {
      tagline: "Un ecosistema digital diseñado para evolucionar mes a mes",
      content: [
        {
          type: "highlight",
          label: "Despliegue",
          value: "En Producción Activa",
        },
        { type: "heading", content: "Una Red Social Autónoma" },
        {
          type: "text",
          content:
            "Las redes sociales tradicionales diluyen la conexión en grupos pequeños. Este proyecto nació como un espacio digital exclusivo para un grupo de amigos. Más que un sitio estático, es una plataforma viva que genera sentido de pertenencia.",
        },
        {
          type: "images",
          srcs: [
            "/projects/fdo/mes-enero.png",
            "/projects/fdo/mes-febrero.png",
            "/projects/fdo/mes-marzo.png",
            "/projects/fdo/mes-abril.png",
          ],
          caption:
            "Transformación radical de la interfaz dependiendo del tema del mes en curso",
        },
        { type: "heading", content: "Ingeniería detrás de la Comunidad" },
        {
          type: "text",
          content:
            "El desarrollo de esta plataforma en Next.js incluye características poco convencionales para sitios personales:",
        },
        {
          type: "list",
          items: [
            "Tematización Dinámica: El código evalúa la fecha y eventos activos para aplicar renderizado condicional en la UI, cambiando variables CSS, fondos y componentes para celebrar al cumpleañero del mes.",
            "Seguridad Perimetral Corporativa: Se configuró un dominio en Zoho Mail para que solo usuarios con una cuenta oficial (@fansdeomar.com) puedan traspasar el middleware de autenticación.",
            "Interacción Histórica: Desarrollo de un muro de felicitaciones persistente, galerías fotográficas compartidas y un sistema de 'Cápsula del tiempo' para documentar la memoria del grupo.",
          ],
        },
      ],
      links: [{ label: "Visitar Comunidad", url: "https://fansdeomar.com" }],
    },
  },

  
  {
    id: "gemuku",
    title: "Gemuku",
    description:
      "Plataforma educativa offline desarrollada en Unity. Genera y lee archivos CSV para operar sin conexión a internet.",
    platform: "desktop",
    type: "game",
    year: "2021",
    tags: ["Unity", "C#", "CSV"],
    color: "#4FC3F7",
    importance: 2,
    image: "/projects/gemuku/cover.png",
    detail: {
      tagline: "Democratizando el software educativo gamificado",
      content: [
        {
          type: "highlight",
          label: "XXIV Concurso Nacional de Prototipos (DGETI)",
          value: "1er Lugar Local, 2do Lugar Regional y Pase Nacional",
        },
        { type: "heading", content: "El Obstáculo de la Conectividad" },
        {
          type: "text",
          content:
            "En 2021, la dependencia al internet limitaba el software educativo en muchas escuelas públicas. El reto del concurso de prototipos DGETI era construir una solución de alto impacto que operara en entornos de nula conectividad. Gemuku fue la respuesta.",
        },
        {
          type: "image",
          src: "/projects/gemuku/editor.png",
          caption: "Editor in-game: creación de cuestionarios",
        },
        { type: "heading", content: "El Motor CSV (Offline-First)" },
        {
          type: "text",
          content:
            "En lugar de requerir servidores o bases de datos externas, Gemuku utiliza archivos CSV como único medio de persistencia: simples, portables y editables por profesores sin conocimientos técnicos.",
        },
        {
          type: "image",
          src: "/projects/gemuku/export-csv.png",
          caption: "Ejemplo de archivo CSV exportado",
        },
        { type: "heading", content: "Características Técnicas" },
        {
          type: "list",
          items: [
            "Formato CSV estandarizado para preguntas, opciones y respuestas correctas.",
            "Modo Creador: editor in-game para crear/editar cuestionarios y exportar .csv.",
            "Modo Juego: importación local del .csv, mezcla aleatoria de preguntas y sistema de puntaje con cronómetro.",
            "Persistencia local: guardado de progresos y resultados en archivos locales dentro del dispositivo.",
            "Diseñado en Unity para builds multiplataforma (Windows/Android standalone).",
          ],
        },
        { type: "heading", content: "Impacto y Uso Pedagógico" },
        {
          type: "text",
          content:
            "El proyecto demostró que herramientas educativas potentes pueden funcionar completamente offline, facilitando su adopción en escuelas con limitaciones de conectividad. Los profesores valoraron la facilidad para crear y reutilizar cuestionarios.",
        },
        {
          type: "list",
          items: [
            "Apto para entornos con baja o nula conectividad.",
            "Fácil distribución de contenido: un .csv por materia o aula.",
            "Evaluaciones rápidas con feedback inmediato para el alumno.",
          ],
        },
        {
          type: "images",
          srcs: [
            "/projects/gemuku/gameplay-normal.png",
            "/projects/gemuku/gameplay-focus.png",
          ],
          caption:
            "Pantalla de juego: experiencia del alumno en modo normal y modo concentración",
        },
      ],
    },
  },

  
  {
    id: "uni-lab",
    title: "Uni Lab",
    description:
      "Prototipo inicial en Unity que evolucionó hacia una propuesta web más sólida para gestión de laboratorios y control de recursos.",
    platform: "web",
    type: "app",
    year: "2024",
    tags: ["Unity", "Web", "UI/UX"],
    color: "#E8F5E9",
    image: "/projects/unilab/cover.png",
    importance: 2,
    detail: {
      tagline: "Proyecto destacado en Infomatrix 2024",
      content: [
        {
          type: "highlight",
          label: "Reconocimiento",
          value:
            "Infomatrix 2024 Tuxpan: Plata - Etapa nacional en Guadalajara",
        },
        { type: "heading", content: "Propósito Institucional" },
        {
          type: "text",
          content:
            "En los laboratorios escolares, el control manual en bitácoras de papel genera pérdida de equipos y choques de horarios. El proyecto fue desarrollado como una propuesta para mejorar la gestión de recursos, y destacó con fuerza en Infomatrix 2024 en Tuxpan, logrando el pase a la etapa nacional en Guadalajara, Jalisco.",
        },
        {
          type: "images",
          srcs: [
            "/projects/unilab/solicitud.png",
            "/projects/unilab/aprobacion.png",
          ],
          caption:
            "Pantalla de solicitud de herramientas y panel de aprobación del técnico",
        },
        {
          type: "heading",
          content: "Reconocimiento",
        },
        {
          type: "text",
          content:
            "El proyecto recibió un reconocimiento destacado en Infomatrix 2024 en Tuxpan y luego avanzó a la etapa nacional en Guadalajara, Jalisco, consolidando su impacto como una propuesta innovadora para la mejora de procesos institucionales.",
        },
      ],
    },
  },

  
  {
    id: "pinol-the-game",
    title: "Pinol The Game",
    description:
      "Laboratorio personal de físicas 2D en Unity. De un recolector básico a una experiencia modular estilo metroidvania (v4.0).",
    platform: "desktop",
    type: "game",
    year: "En desarrollo",
    tags: ["Unity", "C#", "Game Dev"],
    color: "#93C572",
    importance: 1,
    image: "/projects/pinol/cover.png",
    detail: {
      tagline: "La anatomía de una refactorización constante",
      content: [
        {
          type: "highlight",
          label: "Iteración",
          value: "Evolución activa desde v1.0 a v4.0",
        },
        {
          type: "heading",
          content: "De Proyecto Principiante a Laboratorio Técnico",
        },
        {
          type: "text",
          content:
            "Todo desarrollador necesita un entorno libre de reglas comerciales para experimentar. Pinol nació exactamente para eso. Lo que en sus inicios fue un ejercicio rudimentario de mover un sprite bidimensional para recolectar botellas, se ha convertido en el proyecto donde pongo a prueba mis conocimientos matemáticos y lógicos aplicados al motor de Unity.",
        },
        {
          type: "images",
          srcs: ["/projects/pinol/v1.png", "/projects/pinol/v4.png"],
          caption:
            "Comparativa visual: La recolección plana de la versión 1 (izq) frente a la estructura metroidvania de la versión 4.0 (der)",
        },
        {
          type: "video",
          url: "/projects/pinol/gameplay2.mp4",
          caption: "Gameplay diferente entre la versión 1.0 y la versión 4.0",
        },
        { type: "heading", content: "Sistemas Programados desde Cero" },
        {
          type: "text",
          content:
            "Alcanzar la versión 4.0 implicó reescribir gran parte de la base de código antigua para soportar arquitecturas y mecánicas mucho más complejas:",
        },
        {
          type: "video",
          url: "/projects/pinol/gameplay.mp4",
          caption:
            "Diferencias entre la versión 1.0 y la versión 4.0 en términos de jugabilidad y mecánicas",
        },
        {
          type: "list",
          items: [
            "Físicas 2D: Ajustes profundos en la manipulación de la gravedad, detección precisa de colisiones pixel a pixel y sensación responsiva del salto.",
            "IA y Sistemas de Seguimiento: Programación de cámaras con movimiento y suavizado dinámico (damping), además de rutinas de inteligencia artificial básica para patrullaje y persecución de enemigos.",
            "Escalabilidad Modular: Transición de niveles monolíticos dibujados a mano hacia la creación sistemática de Prefabs, permitiendo diseñar niveles enormes con tiempos de carga optimizados.",
          ],
        },
      ],
    },
  },
  
  {
    id: "crezcamos-juntos",
    title: "Crezcamos Juntos",
    description:
      "Aplicación móvil Android para la gestión escolar y el seguimiento ambiental del cuidado de árboles.",
    platform: "mobile",
    type: "app",
    year: "2026",
    tags: ["Android", "Kotlin", "Mobile"],
    color: "#81C784",
    importance: 1,
    image: "/projects/crezcamos/cover.png",
    detail: {
      tagline: "Fomentando la responsabilidad ambiental en las escuelas",
      content: [
        {
          type: "highlight",
          label: "Arquitectura",
          value: "App nativa Android (Kotlin + MVVM) + API REST en Node.js",
        },
        { type: "heading", content: "El propósito del proyecto" },
        {
          type: "text",
          content:
            "Crezcamos Juntos nació de la idea de que la educación ambiental se aprende mejor con responsabilidad directa, no solo con teoría. En lugar de que un árbol plantado en la escuela termine olvidado a los pocos meses, la app le asigna ese árbol a un usuario específico (alumno o maestro) y lo convierte en su responsabilidad personal dentro de un sistema de seguimiento. La meta fue construir una herramienta simple que conecte el gesto de plantar un árbol con el hábito de cuidarlo a largo plazo, dándole a cada escuela visibilidad sobre cuántos árboles tiene, su estado y quién está a cargo de cada uno.",
        },
        {
          type: "image",
          src: "/projects/crezcamos/app-flow.png",
          caption: "Flujo principal: registro de árbol y asignación al usuario",
        },
        { type: "heading", content: "Flujo de Gestión" },
        {
          type: "text",
          content:
            "La aplicación fue diseñada para que los estudiantes o maestros se sientan responsables del árbol asignado, facilitando el registro y la organización de tareas:",
        },
        {
          type: "list",
          items: [
            "Registro y Asociación: Permite dar de alta árboles nuevos, vincularlos a una escuela específica y asignarlos al usuario que los registró, para que cada quien vea únicamente sus propios árboles.",
            "Registro fotográfico: Cada árbol puede tener fotos de su evolución, almacenadas en la nube mediante Cloudinary, para documentar visualmente su crecimiento con el tiempo.",
            "Bitácora de cuidados: Espacio para detallar qué necesita cada árbol (riego, fertilizante, poda) y registrar cuándo se aplicó cada servicio.",
            "Calendario de seguimiento: Vista mensual donde se marcan visualmente los días en los que se registró algún cuidado, dando una idea rápida de la constancia del mantenimiento.",
          ],
        },
        {
          type: "images",
          srcs: [
            "/projects/crezcamos/ui-arboles.png",
            "/projects/crezcamos/ui-calendario.png",
          ],
          caption:
            "Listado de árboles asignados al usuario y calendario de cuidados",
        },
        { type: "heading", content: "Aprendizajes técnicos" },
        {
          type: "text",
          content:
            "Este proyecto fue mi primer acercamiento serio a una arquitectura cliente-servidor completa en Android nativo: construí una API REST en Node.js con MySQL (usando procedimientos almacenados para la lógica de negocio) y consumí esa API desde la app con Retrofit, siguiendo el patrón MVVM con un ViewModel central manejando el estado de la UI mediante StateFlow. Uno de los retos más interesantes fue diseñar correctamente las relaciones entre usuario, árbol y escuela: al inicio todos los usuarios podían ver todos los árboles, así que tuve que repensar tanto el modelo de datos como los endpoints para filtrar la información por usuario autenticado. También aprendí a manejar subida de imágenes multipart desde Android hacia un servicio externo de almacenamiento (Cloudinary), y a sincronizar correctamente fechas entre el backend y los componentes de calendario en Jetpack Compose para reflejar el historial real de cuidados.",
        },
      ],
    },
  },
];
