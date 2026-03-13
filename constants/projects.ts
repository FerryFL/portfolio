interface Attachment {
    id?: string,
    image: string,
    name: string,
    description?: string,
    link?: string,
    feature?: string[],
    tech?: string[]
}

export const TECH_STACK = ["TypeScript", "Javascript", "C#", "Python", "ASP.NET", "Vue JS", "React JS", "Nuxt JS", "Next JS", "Nuxt JS", "Flask", "Git", "Jenkins", "AI / ML"]

export const project: Attachment[] = [
    {
        id: "PRJ001",
        image: "/img/erec.png",
        name: "Kawan Lama E-Recruiment",
        description: "Kawan Lama E-Recruitment merupakan website karir yang mengelola proses rekrutmen kandidat karyawan Kawan Lama Group",
        link: "https://karir.kawanlamagroup.com/",
        feature: [
            "Role Recruiter and Candidate",
            "Recruitment Process (Online Test, Mandatory Data, Job Application, etc)",
            "AI Chatbot",
            "CV OCR",
            "Google Recaptcha",
            "Rate Limiter",
            "Send Vacancy to Big Query (For Chatbot)",
            "Logger",
            "Etc.."
        ],
        tech: [
            "ASP.NET MVC",
            "Bootstrap",
            "Conversational Agent (Google)",
            "SQL Server Management Studio"
        ]
    },
    {
        id: "PRJ002",
        image: "/img/kla.png",
        name: "Kawan Lama Academy",
        description: "Kawan Lama Academy merupakan platform pembelajaran bagi for 30.000+ karyawan internal Kawan Lama Group",
        link: "https://klacademy.klgsys.com/",
        feature: [
            "Roles Student, Admin, Trainer, Superior",
            "Dashboard (Student, Admin, Trainer, Superior)",
            "Course",
            "Program",
            "Program Class",
            "Others (Criteria, Custom Field, User List, Custom Report, Trainer, Completion History)",
            "Calendar",
            "Google Calendar Integration",
            "Moodle Integration",
            "Etc..."
        ],
        tech: [
            "Nuxt JS (Vue)",
            "Shadcn (Tailwind)",
            ".NET Core",
        ]
    },
    {
        id: "PRJ003",
        image: "/img/posnova.png",
        name: "POSnova",
        description: "POSnova adalah aplikasi Point of Sales berbasis website dengan sistem rekomendasi berbasis AI",
        link: "https://posnova-skripsi.vercel.app/",
        feature: [
            "Roles Kasir, Pemilik, Admin",
            "Dashboard Pemilik",
            "Dashboard Kasir",
            "Manajemen Transaksi",
            "Manajemen Kategori",
            "Manajemen Produk",
            "Manajemen Varian",
            "Manajemen UMKM",
            "Pembayaran",
            "AI Rekomendasi",
        ],
        tech: [
            "Next JS (React)",
            "tRPC",
            "Shadcn UI (Tailwind)",
            "Flask (Python)",
        ]

    },
    {
        id: "PRJ004",
        image: "/img/mykhodam.png",
        name: "My Khodam",
        description: "My Khodam adalah website entertainment yang mengenerate khodam berdasarkan nama seseorang",
        link: "https://my-khodam.vercel.app/",
        feature: [
            "Check Khodam based on Name + Today Date combination",
            "Add Khodam Idea",
            "Add Review",
        ],
        tech: [
            "Mongo DB (Atlas)",
            "React",
            "Tailwind CSS",
        ]
    },
    {
        id: "PRJ005",
        image: "/img/onepercent.png",
        name: "One Percent",
        description: "One Percent merupakan website self improvement yang bertujuan meningkatkan produktivitas pengguna",
        link: "https://one-percent-ten.vercel.app/",
        feature: [
            "Generate Random Quotes",
            "CRUD Activity",
        ],
        tech: [
            "Mongo DB (Atlas)",
            "React",
            "Tailwind CSS",
        ]
    },
]

export const techStack: Attachment[] = [
    {
        image: "/img/typescript.svg",
        name: "Typescript"
    },
    {
        image: "/img/javascript.svg",
        name: "JS ES6+"
    },
    {
        image: "/img/csharp.svg",
        name: "C#"
    },
    {
        image: "/img/python.svg",
        name: "Python"
    },
    {
        image: "/img/dotnet.svg",
        name: "ASP.NET"
    },
    {
        image: "/img/vuejs.svg",
        name: "Vue JS"
    },
    {
        image: "/img/reactjs.svg",
        name: "React JS"
    },
    {
        image: "/img/nuxtjs.svg",
        name: "Nuxt JS",
    },
    {
        image: "/img/nextjs.svg",
        name: "Next JS",
    },
    {
        image: "/img/flask.svg",
        name: "Flask",
    },
    {
        image: "/img/git.svg",
        name: "Git",
    },
]