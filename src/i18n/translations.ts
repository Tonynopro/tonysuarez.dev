import type { ContentBlock, Project, ProjectLink } from "@/data/projects";

export type Language = "es" | "en";

export const translations = {
  es: {
    nav: {
      projects: "proyectos",
      about: "sobre-mi",
      contact: "contacto",
    },
    hero: {
      role: "./desarrollador-full-stack",
      hello: "Hola, soy",
      description:
        "Construyo aplicaciones pensadas para usarse, mantenerse y crecer.",
      viewProjects: "Ver proyectos",
      terminalLabel: "tony@portafolio — zsh",
      highlights: {
        applications: "Aplicaciones completas",
        technologies: "Tecnologías principales",
        awards: "Reconocimientos",
      },
      coreTech: {
        fullStack: "Full Stack Web",
        software: "Software & Juegos",
        databases: "Bases de Datos",
      },
      introLine1: "$ whoami ",
      introLine2: '> Ricardo "Tony" Suarez — Desarrollador FullStack ',
      introLine3: "$ cat mision.txt ",
      introLine4: "> Construyo cosas reales para problemas reales. ",
    },
    about: {
      eyebrow: "Quien soy",
      title: "Sobre mí",
      intro1:
        'Soy Ricardo Suarez "Tony", desarrollador Full Stack con experiencia en aplicaciones web, móviles y de escritorio. Me especializo en construir soluciones escalables — desde el frontend hasta la base de datos — y tengo especial interés en el desarrollo de videojuegos con Unity.',
      intro2:
        "Me mueve resolver problemas reales. Prefiero el código que funciona a la teoría que impresiona.",
      highlights: {
        education: "Educación",
        recognition: "Reconocimiento",
        languages: "Idiomas",
        educationValue: "TecNM Ciudad Madero",
        educationSub: "Ing. Sistemas Computacionales — Egreso 2027",
        recognitionValue: "Infomatrix 2024",
        recognitionSub:
          "Medalla de plata, fase regional — clasificación nacional",
        languagesValue: "Español & Inglés",
        languagesSub: "Nativo — B1 intermedio",
        secondRecognitionValue:
          "Concurso Nacional de Prototipos y Proyectos de Emprendimiento 2022",
        secondRecognitionSub:
          "Primer lugar fase local — Segundo lugar fase regional — pase a la fase nacional",
      },
    },
    projects: {
      eyebrow: "Lo que he hecho",
      title: "Proyectos",
      featured: "Destacado",
      working: "Actualmente trabajando",
      fullDescription: "Descripción completa",
      viewProject: "Ver proyecto",
      application: "Aplicación",
      game: "Juego",
    },
    footer: {
      eyebrow: "Trabajemos juntos",
      title: "¿Tienes una idea?",
      subtitle: "Construyamos",
      highlight: "algo real",
      email: "tony.suarez1002@gmail.com",
    },
    projectDetail: {
      projects: "Proyectos",
      working:
        "Este proyecto se está trabajando actualmente, así que tendrá mejoras.",
      platform: {
        web: "Web",
        mobile: "Móvil",
        desktop: "Escritorio",
        "web+mobile": "Web & Móvil",
      },
    },
    languageToggle: {
      label: "Cambiar idioma",
    },
  },
  en: {
    nav: {
      projects: "projects",
      about: "about",
      contact: "contact",
    },
    hero: {
      role: "./full-stack-developer",
      hello: "Hi, I'm",
      description:
        "I build applications designed to be used, maintained, and grow.",
      viewProjects: "View projects",
      terminalLabel: "tony@portfolio — zsh",
      highlights: {
        applications: "Completed applications",
        technologies: "Core technologies",
        awards: "Recognitions",
      },
      coreTech: {
        fullStack: "Full Stack Web",
        software: "Software & Games",
        databases: "Databases",
      },
      introLine1: "$ whoami ",
      introLine2: '> Ricardo "Tony" Suarez — FullStack Developer ',
      introLine3: "$ cat mission.txt ",
      introLine4: "> I build real things for real problems. ",
    },
    about: {
      eyebrow: "Who I am",
      title: "About me",
      intro1:
        'I\'m Ricardo Suarez "Tony", a Full Stack developer with experience in web, mobile, and desktop applications. I specialize in building scalable solutions — from frontend to database — and I have a special interest in game development with Unity.',
      intro2:
        "What drives me is solving real problems. I prefer code that works over theory that impresses.",
      highlights: {
        education: "Education",
        recognition: "Recognition",
        languages: "Languages",
        educationValue: "TecNM Ciudad Madero",
        educationSub: "Computer Systems Engineering — Graduated 2027",
        recognitionValue: "Infomatrix 2024",
        recognitionSub:
          "Silver medal, regional phase — national classification",
        languagesValue: "Spanish & English",
        languagesSub: "Native — B1 intermediate",
        secondRecognitionValue:
          "National Contest of Prototypes and Entrepreneurship Projects 2022",
        secondRecognitionSub:
          "First place local phase — Second place regional phase — advanced to national phase",
      },
    },
    projects: {
      eyebrow: "What I've done",
      title: "Projects",
      featured: "Featured",
      working: "Currently working",
      fullDescription: "Full description",
      viewProject: "View project",
      application: "Application",
      game: "Game",
    },
    footer: {
      eyebrow: "Let’s work together",
      title: "Do you have an idea?",
      subtitle: "Let’s build",
      highlight: "something real",
      email: "tony.suarez1002@gmail.com",
    },
    projectDetail: {
      projects: "Projects",
      working:
        "This project is currently being worked on, so it will receive improvements.",
      platform: {
        web: "Web",
        mobile: "Mobile",
        desktop: "Desktop",
        "web+mobile": "Web & Mobile",
      },
    },
    languageToggle: {
      label: "Switch language",
    },
  },
} as const;

const projectTranslations: Record<
  string,
  Record<
    Language,
    {
      title?: string;
      description: string;
      detail?: {
        tagline?: string;
        content: ContentBlock[];
        links?: ProjectLink[];
      };
    }
  >
> = {
  cinemar: {
    es: {
      title: "Cinemar",
      description:
        "Sistema web de gestión de cine. Arquitectura de roles múltiples, cartelera dinámica y transacciones con Stripe.",
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
            caption: "Menú principal del sistema",
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
          {
            label: "Ver repositorio",
            url: "https://github.com/usuario/cinemar",
          },
          { label: "Probar demo", url: "https://cinemar.demo.com" },
        ],
      },
    },
    en: {
      title: "Cinemar",
      description:
        "Web cinema management system. Multi-role architecture, dynamic billboard, and Stripe transactions.",
      detail: {
        tagline: "Full-Stack architecture for real transactional flows",
        content: [
          {
            type: "highlight",
            label: "Architecture",
            value: "Client-Server with REST API",
          },
          { type: "heading", content: "The Cinemar Ecosystem" },
          {
            type: "text",
            content:
              "Developed as a team school project, Cinemar was designed to mimic the technical complexity of a real cinema chain. The main goal was to build a robust system that successfully separated a friendly interface for the end user from a complex admin control panel.",
          },
          { type: "heading", content: "Access and Role Engineering" },
          {
            type: "list",
            items: [
              "Administrator: Full control over CRUD operations for the schedule, times, rooms, and system permissions.",
              "Employee: Optimized interface for ticket validation and fast operational management.",
              "Client: Smooth experience to view the schedule, select seats (real-time locking), and apply discount coupons.",
            ],
          },
          {
            type: "image",
            src: "/projects/cinemar/ui-principal.png",
            caption: "Main system menu",
          },
          {
            type: "image",
            src: "/projects/cinemar/ui-trabajador.png",
            caption: "Control panel for employees",
          },
          {
            type: "image",
            src: "/projects/cinemar/ui-admin.png",
            caption: "Control panel for administrators",
          },
          { type: "heading", content: "Dynamic Schedule Management" },
          {
            type: "text",
            content:
              "The schedule is managed through an admin panel that allows adding, editing, or removing movies and showtimes. Each movie can have multiple screenings in different rooms, and the system ensures there are no scheduling conflicts.",
          },
          {
            type: "image",
            src: "/projects/cinemar/ui-cartelera.png",
            caption: "Dynamic schedule view in the employee panel",
          },
          { type: "heading", content: "Stripe Payment Integration" },
          {
            type: "text",
            content:
              "To give the prototype a realistic commercial layer, I implemented the Stripe API in the Node.js environment. This allowed processing simulated real payments securely, ensuring that sensitive card data never touched our relational database (MySQL) and communication was handled exclusively through tokens.",
          },
          {
            type: "image",
            src: "/projects/cinemar/ui-pago.png",
            caption: "Payment interface with Stripe",
          },
        ],
        links: [
          {
            label: "View repository",
            url: "https://github.com/usuario/cinemar",
          },
          { label: "Try demo", url: "https://cinemar.demo.com" },
        ],
      },
    },
  },
  "sistema-inventario": {
    es: {
      title: "Sistema Integral de Inventario",
      description:
        "Plataforma de trazabilidad logística para el ciclo completo de vida de productos, desarrollada en Next.js.",
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
    en: {
      title: "Comprehensive Inventory System",
      description:
        "Logistics traceability platform for the full product lifecycle, built with Next.js.",
      detail: {
        tagline: "Traceability from the warehouse to the final use",
        content: [
          {
            type: "highlight",
            label: "Deployment",
            value: "MVP delivered in ~1 week",
          },
          { type: "heading", content: "Vision of the Complete System" },
          {
            type: "text",
            content:
              "An effective inventory system does more than add and subtract boxes; it is a critical financial and operational record. I developed this platform individually for a client in a record time of one week, guaranteeing full traceability of materials across the organization's departments.",
          },
          {
            type: "images",
            srcs: [
              "/projects/inventario/ui1.png",
              "/projects/inventario/ui2.png",
            ],
            caption: "Employee request panel and historical movement report",
          },
          { type: "heading", content: "Product Lifecycle Flow" },
          {
            type: "text",
            content:
              "The system models the continuous lifecycle of physical assets, centralizing information:",
          },
          {
            type: "list",
            items: [
              "Entry and Classification: Registration of products organized by departments and categories.",
              "Request: Interface for employees to request material and justify its destination.",
              "Exit and Return: Approval by the administrator that deducts stock, plus a special returns module that re-enters the material in an auditable way.",
            ],
          },
          { type: "heading", content: "Solving Concurrency" },
          {
            type: "text",
            content:
              "The biggest technical challenge was preventing negative stock. I implemented strict validations in the database (MySQL) and business layer (Next.js) to ensure multiple simultaneous requests on the same item did not over-allocate available resources.",
          },
        ],
      },
    },
  },
  "comparador-horarios": {
    es: {
      title: "Comparador de Horarios",
      description:
        "Web app que cruza datasets de múltiples usuarios para mapear gráficamente conexiones sociales y tiempos libres en común.",
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
    en: {
      title: "Schedule Comparator",
      description:
        "Web app that cross-references datasets from multiple users to graphically map social connections and shared free time.",
      detail: {
        tagline: "From a simple schedule to a map of social relationships",
        content: [
          { type: "heading", content: "Beyond Productivity" },
          {
            type: "text",
            content:
              "If the 'Schedule Generator' solved productivity, the Comparator solves sociability. I realized that a schedule contains valuable relational information. This project turns static data into a dynamic network that answers: Who has free time when I do too?",
          },
          {
            type: "image",
            src: "/projects/comparador/ui-zoom.png",
            caption:
              "Graphical interface showing time overlaps between several users through visual indicators",
          },
          { type: "heading", content: "Matching Search Engine" },
          {
            type: "text",
            content:
              "Processing had to be fast and support multiple comparisons. The architecture consists of:",
          },
          {
            type: "list",
            items: [
              "Data ingestion: Students upload their files (.csv or the custom .fdo format), which are parsed and stored in a lightweight database (SQLite).",
              "Crossing engine: Optimized SQL queries that look for exact intersections (shared classes) and concurrent empty spaces (common free time).",
              "Relational analysis: A secondary mathematical algorithm that calculates a compatibility percentage between students' schedules.",
            ],
          },
          { type: "heading", content: "The Interface Challenge" },
          {
            type: "text",
            content:
              "The frontend technical challenge was information visualization. Showing matches for three or four people in a single 5-day table without overcrowding the screen required a clean UI design, using color mapping and visual identifiers (dots) instead of dense blocks of text.",
          },
        ],
      },
    },
  },
  "test-psicologicos": {
    es: {
      title: "Sistema de Test Psicológicos",
      description:
        "Plataforma clínica para evaluar estrés y ansiedad. Delega la lógica de diagnóstico a la base de datos y grafica evolución temporal.",
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
    en: {
      title: "Psychological Test System",
      description:
        "Clinical platform to assess stress and anxiety. Delegates diagnostic logic to the database and plots temporal evolution.",
      detail: {
        tagline: "Visualizing the evolution of mental health through data",
        content: [
          {
            type: "highlight",
            label: "Technical Innovation",
            value: "Calculations through Stored Procedures",
          },
          { type: "heading", content: "Diagnostic Automation" },
          {
            type: "text",
            content:
              "For a psychologist, tabulating responses by hand takes time away from real clinical analysis. This project, developed for a client, automates the collection of responses to anxiety and stress tests, turning questionnaires into structured data.",
          },
          {
            type: "image",
            src: "/projects/psico/grafica-evolucion.png",
            caption:
              "Interactive graph showing the reduction of stress across several sessions",
          },
          { type: "heading", content: "Secure and Efficient Architecture" },
          {
            type: "text",
            content:
              "Handling clinical information requires precision. To ensure the evaluation was immediate and secure, I made specific architectural decisions:",
          },
          {
            type: "list",
            items: [
              "DB logic: Diagnosis thresholds and score summations are not done in Node.js, but are programmed directly in MySQL using Stored Procedures, hardening the business logic.",
              "Evaluation time window: The backend includes a validator that strictly blocks a new test if 15 days have not passed since the last one.",
              "Data Visualization: Implementation of React libraries to read the history and draw longitudinal graphs that are easy for the therapist to interpret.",
            ],
          },
        ],
      },
    },
  },
  fansdeomar: {
    es: {
      title: "Fans de Omar",
      description:
        "Aplicación web comunitaria viva. Su diseño muta automáticamente mediante Next.js según eventos mensuales y cumpleaños.",
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
    en: {
      title: "Fans de Omar",
      description:
        "A living community web app. Its design mutates automatically with Next.js based on monthly events and birthdays.",
      detail: {
        tagline: "A digital ecosystem designed to evolve month after month",
        content: [
          {
            type: "highlight",
            label: "Deployment",
            value: "In Active Production",
          },
          { type: "heading", content: "An Autonomous Social Network" },
          {
            type: "text",
            content:
              "Traditional social networks dilute connection in small groups. This project was born as an exclusive digital space for a group of friends. More than a static site, it is a living platform that creates a sense of belonging.",
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
              "Radical transformation of the interface depending on the theme of the current month",
          },
          { type: "heading", content: "Engineering Behind the Community" },
          {
            type: "text",
            content:
              "The development of this platform in Next.js includes unconventional features for personal sites:",
          },
          {
            type: "list",
            items: [
              "Dynamic theming: The code evaluates the date and active events to apply conditional rendering in the UI, changing CSS variables, backgrounds, and components to celebrate the month’s birthday person.",
              "Corporate perimeter security: A Zoho Mail domain was configured so only users with an official account (@fansdeomar.com) can pass the authentication middleware.",
              "Historical interaction: Development of a persistent congratulations wall, shared photo galleries, and a 'time capsule' system to document the group’s memory.",
            ],
          },
        ],
        links: [{ label: "Visit Community", url: "https://fansdeomar.com" }],
      },
    },
  },
  gemuku: {
    es: {
      title: "Gemuku",
      description:
        "Plataforma educativa offline desarrollada en Unity. Genera y lee archivos CSV para operar sin conexión a internet.",
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
    en: {
      title: "Gemuku",
      description:
        "Offline educational platform built in Unity. It generates and reads CSV files to operate without internet access.",
      detail: {
        tagline: "Democratizing gamified educational software",
        content: [
          {
            type: "highlight",
            label: "XXIV National Prototype Contest (DGETI)",
            value: "1st Place Local, 2nd Place Regional and National Pass",
          },
          { type: "heading", content: "The Connectivity Obstacle" },
          {
            type: "text",
            content:
              "In 2021, dependence on internet limited educational software in many public schools. The DGETI prototype contest challenge was to build a high-impact solution that worked in zero-connectivity environments. Gemuku was the answer.",
          },
          {
            type: "image",
            src: "/projects/gemuku/editor.png",
            caption: "In-game editor: quiz creation",
          },
          { type: "heading", content: "The CSV Engine (Offline-First)" },
          {
            type: "text",
            content:
              "Instead of requiring servers or external databases, Gemuku uses CSV files as its sole persistence medium: simple, portable, and editable by teachers without technical knowledge.",
          },
          {
            type: "image",
            src: "/projects/gemuku/export-csv.png",
            caption: "Example of an exported CSV file",
          },
          { type: "heading", content: "Technical Features" },
          {
            type: "list",
            items: [
              "Standardized CSV format for questions, options, and correct answers.",
              "Creator Mode: in-game editor to create/edit quizzes and export .csv.",
              "Game Mode: local import of .csv, random question mixing, and score system with timer.",
              "Local persistence: saving progress and results in local files within the device.",
              "Designed in Unity for multiplatform builds (Windows/Android standalone).",
            ],
          },
          { type: "heading", content: "Impact and Pedagogical Use" },
          {
            type: "text",
            content:
              "The project proved that powerful educational tools can work completely offline, facilitating adoption in schools with connectivity limitations. Teachers valued the ease of creating and reusing quizzes.",
          },
          {
            type: "list",
            items: [
              "Suitable for low or no connectivity environments.",
              "Easy content distribution: one .csv per subject or classroom.",
              "Fast assessments with immediate feedback for the student.",
            ],
          },
          {
            type: "images",
            srcs: [
              "/projects/gemuku/gameplay-normal.png",
              "/projects/gemuku/gameplay-focus.png",
            ],
            caption:
              "Game screen: student experience in normal mode and focus mode",
          },
        ],
      },
    },
  },
  "uni-lab": {
    es: {
      title: "Uni Lab",
      description:
        "Prototipo inicial en Unity que evolucionó hacia una propuesta web más sólida para gestión de laboratorios y control de recursos.",
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
          { type: "heading", content: "Reconocimiento" },
          {
            type: "text",
            content:
              "El proyecto recibió un reconocimiento destacado en Infomatrix 2024 en Tuxpan y luego avanzó a la etapa nacional en Guadalajara, Jalisco, consolidando su impacto como una propuesta innovadora para la mejora de procesos institucionales.",
          },
        ],
      },
    },
    en: {
      title: "Uni Lab",
      description:
        "Initial Unity prototype that evolved into a more robust web proposal for laboratory management and resource control.",
      detail: {
        tagline: "Featured project at Infomatrix 2024",
        content: [
          {
            type: "highlight",
            label: "Recognition",
            value:
              "Infomatrix 2024 Tuxpan: Silver - national stage in Guadalajara",
          },
          { type: "heading", content: "Institutional Purpose" },
          {
            type: "text",
            content:
              "In school laboratories, manual control in paper logs creates loss of equipment and scheduling conflicts. The project was developed as a proposal to improve resource management and stood out strongly at Infomatrix 2024 in Tuxpan, advancing to the national stage in Guadalajara, Jalisco.",
          },
          {
            type: "images",
            srcs: [
              "/projects/unilab/solicitud.png",
              "/projects/unilab/aprobacion.png",
            ],
            caption: "Tool request screen and technician approval panel",
          },
          { type: "heading", content: "Recognition" },
          {
            type: "text",
            content:
              "The project received notable recognition at Infomatrix 2024 in Tuxpan and then advanced to the national stage in Guadalajara, Jalisco, consolidating its impact as an innovative proposal for improving institutional processes.",
          },
        ],
      },
    },
  },
  "pinol-the-game": {
    es: {
      title: "Pinol The Game",
      description:
        "Laboratorio personal de físicas 2D en Unity. De un recolector básico a una experiencia modular estilo metroidvania (v4.0).",
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
    en: {
      title: "Pinol The Game",
      description:
        "Personal 2D physics lab in Unity. From a basic collector to a modular metroidvania-style experience (v4.0).",
      detail: {
        tagline: "The anatomy of constant refactoring",
        content: [
          {
            type: "highlight",
            label: "Iteration",
            value: "Active evolution from v1.0 to v4.0",
          },
          {
            type: "heading",
            content: "From Beginner Project to Technical Lab",
          },
          {
            type: "text",
            content:
              "Every developer needs a space free of commercial rules to experiment. Pinol was created exactly for that. What began as a rudimentary exercise of moving a 2D sprite to collect bottles evolved into the project where I test my mathematical and logical knowledge applied to the Unity engine.",
          },
          {
            type: "images",
            srcs: ["/projects/pinol/v1.png", "/projects/pinol/v4.png"],
            caption:
              "Visual comparison: flat collection of version 1 (left) versus the metroidvania structure of version 4.0 (right)",
          },
          {
            type: "video",
            url: "/projects/pinol/gameplay2.mp4",
            caption: "Different gameplay between version 1.0 and version 4.0",
          },
          { type: "heading", content: "Systems Programmed from Scratch" },
          {
            type: "text",
            content:
              "Reaching version 4.0 meant rewriting much of the old codebase to support far more complex architectures and mechanics:",
          },
          {
            type: "video",
            url: "/projects/pinol/gameplay.mp4",
            caption:
              "Differences between version 1.0 and 4.0 in terms of gameplay and mechanics",
          },
          {
            type: "list",
            items: [
              "2D Physics: Deep adjustments to gravity manipulation, precise pixel-to-pixel collision detection, and responsive jump feel.",
              "AI and Tracking Systems: Programming cameras with movement and dynamic smoothing (damping), plus basic AI routines for patrol and enemy pursuit.",
              "Modular Scalability: Transition from hand-drawn monolithic levels to systematic creation of Prefabs, allowing enormous levels to be designed with optimized load times.",
            ],
          },
        ],
      },
    },
  },
  "crezcamos-juntos": {
    es: {
      title: "Crezcamos Juntos",
      description:
        "Aplicación móvil Android para la gestión escolar y el seguimiento ambiental del cuidado de árboles.",
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
            caption:
              "Flujo principal: registro de árbol y asignación al usuario",
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
    en: {
      title: "Crezcamos Juntos",
      description:
        "Android mobile app for school management and environmental tracking of tree care.",
      detail: {
        tagline: "Promoting environmental responsibility in schools",
        content: [
          {
            type: "highlight",
            label: "Architecture",
            value: "Native Android app (Kotlin + MVVM) + REST API in Node.js",
          },
          { type: "heading", content: "The purpose of the project" },
          {
            type: "text",
            content:
              "Crezcamos Juntos was born from the idea that environmental education is learned better through direct responsibility, not just theory. Instead of a tree planted at school being forgotten a few months later, the app assigns that tree to a specific user (student or teacher) and makes it their personal responsibility within a tracking system. The goal was to build a simple tool that connects the act of planting a tree with the habit of caring for it over the long term, giving each school visibility into how many trees it has, their status, and who is responsible for each one.",
          },
          {
            type: "image",
            src: "/projects/crezcamos/app-flow.png",
            caption: "Main flow: tree registration and assignment to the user",
          },
          { type: "heading", content: "Management Flow" },
          {
            type: "text",
            content:
              "The application was designed so that students or teachers feel responsible for the assigned tree, making it easier to log and organize tasks:",
          },
          {
            type: "list",
            items: [
              "Registration and Association: Allows registering new trees, linking them to a specific school, and assigning them to the user who registered them, so each person only sees their own trees.",
              "Photographic registration: Each tree can have photos of its evolution, stored in the cloud via Cloudinary, to visually document its growth over time.",
              "Care log: Space to detail what each tree needs (watering, fertilizer, pruning) and record when each service was applied.",
              "Tracking calendar: Monthly view where care days are visually marked, giving a quick idea of maintenance consistency.",
            ],
          },
          {
            type: "images",
            srcs: [
              "/projects/crezcamos/ui-arboles.png",
              "/projects/crezcamos/ui-calendario.png",
            ],
            caption: "List of trees assigned to the user and care calendar",
          },
          { type: "heading", content: "Technical learnings" },
          {
            type: "text",
            content:
              "This project was my first serious approach to a complete client-server architecture in native Android: I built a REST API in Node.js with MySQL (using stored procedures for business logic) and consumed that API from the app with Retrofit, following the MVVM pattern with a central ViewModel managing UI state through StateFlow. One of the most interesting challenges was properly designing the relationships between user, tree, and school: at first all users could see all trees, so I had to rethink both the data model and the endpoints to filter information by authenticated user. I also learned to handle multipart image uploads from Android to an external storage service (Cloudinary) and to correctly synchronize dates between the backend and Jetpack Compose calendar components to reflect the real care history.",
          },
        ],
      },
    },
  },
};

export function getLocalizedProject(project: Project, language: Language) {
  const localizedProject = projectTranslations[project.id]?.[language];

  if (!localizedProject) {
    return project;
  }

  return {
    ...project,
    title: localizedProject.title ?? project.title,
    description: localizedProject.description,
    detail: project.detail
      ? {
          ...project.detail,
          tagline: localizedProject.detail?.tagline ?? project.detail.tagline,
          content: localizedProject.detail?.content ?? project.detail.content,
          links: localizedProject.detail?.links ?? project.detail.links,
        }
      : project.detail,
  };
}

export function getTranslation(language: Language, key: string) {
  const keys = key.split(".");
  const value = keys.reduce<unknown>((acc, currentKey) => {
    if (acc && typeof acc === "object" && currentKey in acc) {
      return (acc as Record<string, unknown>)[currentKey];
    }
    return undefined;
  }, translations[language]);

  return typeof value === "string" ? value : key;
}
