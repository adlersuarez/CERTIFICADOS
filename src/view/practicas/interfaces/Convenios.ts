export interface JobInterface {
    id: number
    title: string
    company: string
    verificada: boolean
    location: {
        department: string
        province: string
    }
    fechaRegistro: string
    modality: "Presencial" | "Remoto" | "Presencial y remoto"
    salario: Salario
    duracion: Duracion
    jobType: "Tiempo completo" | "Medio tiempo"
    description: string
    requerimientos: string[]
    funciones: string[]
    buscamos: string[]
    beneficios: string[]
}

export interface Salario {
    min: number | null
    max: number | null
    tipo: 'diario' | 'semanal' | 'mensual' | null
}

export interface Duracion {
    cantidad: number | null
    tipo: 'dias' | 'semanas' | 'meses' | null
}

export interface Option {
    idOption: number
    label: string
    count?: number // El conteo es opcional
}

export interface FiltrosDropdown {
    idButton: number
    buttonLabel: string // Etiqueta del botón
    options: Option[] // Lista de opciones
}

export interface FiltrosSeleccionados {
    idButton: number
    idOption: number
}

export const dropdownPropsList: FiltrosDropdown[] = [
    {
        idButton: 1,
        buttonLabel: 'Ordenar',
        options: [
            { idOption: 1, label: 'Relevancia' }, // Sin cantidad
            { idOption: 2, label: 'Fecha' },
            { idOption: 3, label: 'Salario' },
            // Agregar más opciones según sea necesario
        ],
    },
    {
        idButton: 2,
        buttonLabel: 'Fecha',
        options: [
            { idOption: 4, label: 'Urgente', count: 108 },
            { idOption: 5, label: 'Desde ayer', count: 41 },
            { idOption: 6, label: 'Últimos 3 días', count: 58 },
            { idOption: 7, label: 'Última semana', count: 130 },
            { idOption: 8, label: 'Últimos 15 días', count: 211 },
            { idOption: 9, label: 'Último mes', count: 326 },
        ],
    },
    {
        idButton: 3,
        buttonLabel: 'Experiencia',
        options: [
            { idOption: 10, label: 'Sin experiencia', count: 247 },
            { idOption: 11, label: '1 año', count: 109 },
            { idOption: 12, label: '2 años', count: 37 },
            { idOption: 13, label: '3-4 años', count: 3 },
        ],
    },
    {
        idButton: 4,
        buttonLabel: 'Salario',
        options: [
            { idOption: 14, label: 'Menos de S/. 750' },
            { idOption: 15, label: 'Más de S/. 750' },
            { idOption: 16, label: 'Más de S/. 1500' },
            { idOption: 17, label: 'Más de S/. 3000' },
        ],
    },
    {
        idButton: 5,
        buttonLabel: 'Jornada',
        options: [
            { idOption: 18, label: 'Tiempo completo', count: 344 },
            { idOption: 19, label: 'Tiempo parcial', count: 9 },
        ],
    },
    {
        idButton: 6,
        buttonLabel: 'Tipo',
        options: [
            { idOption: 20, label: 'Remoto', count: 13 },
            { idOption: 21, label: 'Presencial', count: 100 },
            { idOption: 22, label: 'Presencial y remoto', count: 20 },
        ],
    },
];

export const jobs: JobInterface[] = [
    {
        id: 1,
        title: "Practicante preprofesional de soporte técnico de TI",
        company: "Tech Solutions S.A.",
        verificada: true,
        location: {
            department: "Lima",
            province: "Lima",
        },
        fechaRegistro: "2024-10-11 09:23:45.000",
        modality: 'Presencial',
        salario: {
            min: 300,
            max: null,
            tipo: 'semanal'
        },
        duracion: {
            cantidad: 6,
            tipo: 'meses'
        },
        jobType: "Tiempo completo",
        description: "Nuestro equipo del área de Sistemas busca nuevos integrantes que deseen poner en práctica todo tus conocimientos, participar en proyectos significativos de manera remota, si deseas realizar tus prácticas con nosotros ¡Estamos a la espera!",
        requerimientos: [
            "Estar cursando la carrera de Ingeniería de Sistemas, Ingeniería de Software, Ingeniería Informática o afines a partir del 4to ciclo, egresado o bachiller.",
            "Contar con manejo de Ofimática a Nivel Intermedio",
            "Disponer de tiempo Lun - Sab, 6 horas al día AM o PM.",
            "Disponer de laptop o pc con internet estable (indispensable).",
            "Sin experiencia o experiencia mínima de 2 meses en puestos similares (No indispensable)."
        ],
        funciones: [],
        buscamos: [
            "Trabajar en equipo.",
            "Comunicación asertiva.",
            "Deseos de aprender y adaptabilidad a nuevas tecnologías y metodologías.",
        ],
        beneficios: [
            "Las prácticas son 100% virtual",
            "Certificación de prácticas pre profesional o profesional según haya concluido su carrera.",
            "Ambiente competitivo – constructivo para generar mentalidad de crecimiento constante.",
            "Aprendizaje y apoyo constante.",
        ]
    },
    {
        id: 2,
        title: "Practicante preprofesional de marketing digital",
        company: "Marketing Global",
        verificada: false,
        location: {
            department: "Arequipa",
            province: "Arequipa",
        },
        fechaRegistro: "2024-10-08 22:23:45.000",
        modality: 'Remoto',
        salario: {
            min: 1200,
            max: 1500,
            tipo: 'mensual'
        },
        duracion: {
            cantidad: 4,
            tipo: 'meses'
        },
        jobType: "Medio tiempo",
        description: "Estamos en busca de un practicante de ingeniería civil para unirse a nuestro equipo dinámico y en crecimiento. Este puesto ofrece una oportunidad única para adquirir experiencia práctica en proyectos de infraestructura y edificación, trabajando junto a profesionales experimentados en un ambiente colaborativo.",
        requerimientos: [
            "Estudiantes que se encuentren en 7ciclo o mayor, egresados o bachilleres de la carrera de Ingeniería Civil.",
            "Conocimientos básicos en software de diseño y modelado como AutoCAD, Revit, Office, Lumion o Illustrator",
            "Habilidades básicas de cálculo y análisis estructural.",
            "Disponibilidad para realizar prácticas de lunes a sábado en dos turnos AM o PM",
            "Experiencia en prácticas anteriores o proyectos académicos relevantes (NO INDISPENSABLE)",
            "Disponer de una computadora o laptop con internet en casa (INDISPENSABLE)"
        ],
        funciones: [],
        buscamos: [
            "Orientación a resultados",
            "Capacidad de análisis",
            "Capacidad de trabajo bajo presión",
            "Responsabilidad y Disciplina"
        ],
        beneficios: [
            "Prácticas remotas – 100% Virtual",
            "Oportunidad de desarrollo como Ing. Civil",
        ]
    },
    {
        id: 3,
        title: "Practicante en Contabilidad",
        company: "ASECOFIT & CIA FMC SAC",
        verificada: false,
        location: {
            department: "Jesús María",
            province: "Lima",
        },
        fechaRegistro: "2024-10-07 22:23:45.000",
        modality: 'Remoto',
        salario: {
            min: 600,
            max: 1025,
            tipo: 'mensual'
        },
        duracion: {
            cantidad: 6,
            tipo: 'semanas'
        },
        jobType: "Tiempo completo",
        description: "Estamos en la búsqueda de personal practicante de área de contabilidad",
        requerimientos: [],
        funciones: [
            "Registro y llenado de libros de contables (manuales y computarizados)",
            "Apoyo en declaración de impuestos",
            "Trámites diversos ante Sunat, Sunarp, etc.",
            "Es necesario que se encuentre actualmente estudiando o de vacaciones, se le brindara facilidades en el horario para que puedan asistir a clases.",
            "C/S experiencia",
            "Disponibilidad para apoyarnos en el distrito de La Victoria",
        ],
        buscamos: [],
        beneficios: [
            "Capacitación Constante",
            "Subvención económica",
            "Oportunidad de tratar con clientes",
            "Oportunidad de profundizarse en temas tributarios, una buena oportunidad de aprender."
        ]
    },
    // Añadir más trabajos según sea necesario
]