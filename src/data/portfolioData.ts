export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'microservices' | 'enterprise' | 'realtime' | 'fullstack';
  badge: string;
  description: string;
  highlights: string[];
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  architectureDetails?: string;
  stars?: number;
  forks?: number;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  description: string;
  skills: string[];
  type: 'work' | 'education' | 'teaching';
}

export const PROJECTS_LIST: Project[] = [
  {
    id: "digital-wallet",
    title: "Digital Wallet Microservices",
    tagline: "High-integrity distributed fintech architecture",
    category: "microservices",
    badge: "Distributed Systems",
    description: "Autonomous microservice architecture separating Identity (Auth.API), Wallet operations, and Transaction auditing. Containerized with Docker Compose with independent Microsoft SQL Server database containers per bounded context.",
    highlights: [
      "Auth.API, Wallet.API, and Transaction.API separation",
      "Multi-container orchestration via Docker Compose",
      "Utilizes modern Visual Studio 2022 .slnx XML solution format",
      "Connection resilience with container healthchecks"
    ],
    tags: ["C#", ".NET 8", "Docker Compose", "Microservices", "SQL Server"],
    githubUrl: "https://github.com/MustafaElsayed74/digital-wallet-microservices",
  },
  {
    id: "iot-smart-factory",
    title: "IoT Smart Factory & Telemetry",
    tagline: "Real-time industrial sensor hub via WebSockets",
    category: "realtime",
    badge: "Engineering Capstone",
    description: "Industrial IoT platform combining telecommunications hardware with ASP.NET Core SignalR WebSockets. Ingests high-frequency machine sensor readings and broadcasts live telemetry updates to supervisory control dashboards.",
    highlights: [
      "Real-time bi-directional SignalR hubs (FactoryHub, SensorHub)",
      "Sensor telemetry ingestion via ReadingsController & ProductsController",
      "Electronics & Communication Engineering graduation project",
      "Sub-second machine anomaly notification dispatch"
    ],
    tags: ["ASP.NET Core", "SignalR", "WebSockets", "IoT Telemetry", "C#"],
    githubUrl: "https://github.com/MustafaElsayed74/IoT-smart-factory",
  },
  {
    id: "bookly-api",
    title: "Bookly — Library Management API",
    tagline: "Textbook Specification Pattern & API resilience",
    category: "enterprise",
    badge: "★ 4 Stars · 3 Forks",
    stars: 4,
    forks: 3,
    description: "Enterprise RESTful API engineered with 4-layer Onion Architecture. Features an advanced SpecificationEvaluator evaluating dynamic LINQ expressions (filter by genre, author, stock status), response caching, and custom rate limiting.",
    highlights: [
      "Custom SpecificationEvaluator supporting deferred LINQ execution",
      "Unit of Work & Generic Repository for transactional safety",
      "Response caching middleware to mitigate database load",
      "Multipart book cover upload system with global exception middleware"
    ],
    tags: ["ASP.NET Core", "EF Core", "Specification Pattern", "Rate Limiting", "Caching"],
    githubUrl: "https://github.com/MustafaElsayed74/Bookly.APIs",
  },
  {
    id: "careflow",
    title: "CareFlow — Smart Healthcare Platform",
    tagline: "Modular medical ecosystem with 17+ domain entities",
    category: "enterprise",
    badge: "Enterprise Healthcare",
    description: "Comprehensive medical clinic API composed of 4 solution projects (CareFlow.API, Core, Repository, Service). Implements 17+ domain entities and 15+ domain services handling appointments, patient histories, prescriptions, and Stripe billing.",
    highlights: [
      "Granular RBAC across 3 roles: Admin, Doctor, Patient",
      "Resource-level security preventing horizontal unauthorized data access",
      "Soft-delete patterns and automated audit-trail logging",
      "Stripe payment gateway integration for appointment checkout"
    ],
    tags: ["Clean Architecture", "EF Core Code-First", "Stripe API", "RBAC", "Audit Trails"],
    githubUrl: "https://github.com/MustafaElsayed74/Smart-HealthCare-Management-System",
  },
  {
    id: "ebook-microservices",
    title: "E-Book Commerce Microservices",
    tagline: "Autonomous service mesh for digital publications",
    category: "microservices",
    badge: "Microservices",
    description: "Distributed e-commerce architecture dividing the lifecycle into isolated Catalog, Basket, and Order microservices. Each service maintains private database isolation and is containerized via Docker.",
    highlights: [
      "Domain-driven split: Catalog, Basket, and Order services",
      "Private storage boundaries per microservice",
      "Docker Compose network configuration and service discovery"
    ],
    tags: [".NET 8", "Docker", "Microservices", "RESTful APIs"],
    githubUrl: "https://github.com/MustafaElsayed74/ebook-microservices",
  },
  {
    id: "bloomi-platform",
    title: "Bloomi E-Commerce Platform",
    tagline: "Full-stack ASP.NET Core API + Angular SPA",
    category: "fullstack",
    badge: "Full-Stack SPA",
    description: "Complete full-stack online storefront pairing an ASP.NET Core Web API with an Angular frontend. Features a hardened authentication loop with JWT, email verification tokens, and Stripe Checkout.",
    highlights: [
      "Email verification with cryptographic time-bound expiry tokens",
      "Angular SPA client consuming REST endpoints with interceptors",
      "Stripe Checkout session orchestration and webhook verification"
    ],
    tags: ["ASP.NET Core", "Angular", "TypeScript", "Stripe", "ASP.NET Identity"],
    githubUrl: "https://github.com/MustafaElsayed74/bloomi-server",
  },
];

export const PORTFOLIO_DATA = {
  personal: {
    name: "Mustafa Elsayed",
    fullName: "Mustafa Elsayed Mustafa",
    role: "Junior Backend .NET Developer · ASP.NET Core & Web APIs",
    location: "Cairo, Egypt",
    timezone: "Africa/Cairo (UTC+2)",
    email: "mustafaelsayed.dev@gmail.com",
    phone: "+20 127 306 4903",
    github: "https://github.com/MustafaElsayed74",
    linkedin: "https://linkedin.com/in/mustafaelsayed72",
    repoCount: 53,
    degree: "B.Sc. Electronics & Communication Engineering",
    university: "Zagazig University",
    status: "Actively Seeking Junior Backend .NET & Internship Roles",
  },
  metrics: [
    { label: "Hands-on Production APIs", value: "1+ Year" },
    { label: "Public Code Repositories", value: "53 Repos" },
    { label: "Government Scholarship", value: "DEPI Certified" },
    { label: "Architecture Paradigm", value: "Clean & Onion" },
  ],
  pillars: [
    {
      title: "Defensive Security First",
      subtitle: "Offensive Origins → Defensive Armor",
      desc: "Shaped by foundational penetration testing (TryHackMe Junior PenTester), every endpoint is hardened with time-bound JWT expiries, granular RBAC, IDOR prevention, and strict rate-limiting.",
      icon: "ShieldAlert",
    },
    {
      title: "Architectural Purism",
      subtitle: "Strict Separation of Concerns",
      desc: "4-layer Onion / Clean Architecture decoupling Domain rules from EF Core persistence and controllers. Textbook implementation of the Specification Pattern and Unit of Work.",
      icon: "Layers",
    },
    {
      title: "Distributed Microservices",
      subtitle: "Containerized & Autonomous",
      desc: "Evolving beyond monoliths with Docker Compose orchestrated microservices (Digital Wallet & E-Book systems) featuring isolated database containers and bounded contexts.",
      icon: "Cpu",
    },
    {
      title: "Hardware Telemetry & IoT",
      subtitle: "Electronics Engineering Core",
      desc: "Bridging physical embedded sensors with cloud infrastructure. Real-time factory floor telemetry streaming via ASP.NET Core SignalR WebSockets.",
      icon: "Activity",
    },
  ],
  projects: PROJECTS_LIST,
  liveApps: [
    { name: "Azkar Feeling", url: "https://azkar-feeling.vercel.app", desc: "Interactive emotional & spiritual guidance web tool" },
    { name: "CV Generator", url: "https://cv-generator-five-kappa.vercel.app", desc: "Dynamic resume generator with instant live formatting" },
    { name: "Gallery Betak", url: "https://gallery-betak.vercel.app", desc: "Catalog showcase with database-backed filtering" },
    { name: "WEWatch", url: "https://we-watch-murex.vercel.app", desc: "Streaming media catalog interface" },
  ],
  experience: [
    {
      id: "huma-volve",
      role: "Backend Developer",
      organization: "Huma Volve",
      period: "Feb 2026 – Mar 2026",
      location: "Cairo, Egypt",
      type: "work",
      description: "Architected and maintained ASP.NET Core RESTful APIs for the MedLink Healthcare Management System, establishing Onion Architecture folder conventions and clinic-doctor connectivity workflows. Built reservation lifecycle and trip scheduling modules for the Online Travel Booking System.",
      skills: ["ASP.NET Core", "Onion Architecture", "Agile / Scrum", "REST APIs"],
    },
    {
      id: "ischool",
      role: "Coding Instructor",
      organization: "iSchool – DEMI (Kids Program)",
      period: "Feb 2025 – Present",
      location: "Cairo, Egypt",
      type: "teaching",
      description: "Teaching computer science fundamentals, algorithmic problem-solving, and computational logic to Grade 5 and Grade 6 students. Cultivating technical empathy, concise communication, and deconstructing complex software abstractions into simple mental models.",
      skills: ["Pedagogy", "Algorithms", "Computational Thinking", "Mentorship"],
    },
    {
      id: "depi",
      role: "Full Stack .NET Development Intern",
      organization: "DEPI – Digital Egypt Pioneers Initiative",
      period: "Oct 2023 – Mar 2024",
      location: "Cairo, Egypt",
      type: "work",
      description: "Rigorous government scholarship in enterprise software engineering. Architected 4-layer Onion Architecture solutions, applied EF Core Code-First migrations, optimized LINQ queries, and documented 30+ endpoints tested with Postman and Swagger.",
      skills: ["DEPI Scholarship", "EF Core Code-First", "AutoMapper", "Swagger / OpenAPI"],
    },
    {
      id: "zagazig-uni",
      role: "B.Sc. in Electronics & Communication Engineering",
      organization: "Zagazig University",
      period: "Sep 2021 – Jul 2026",
      location: "Zagazig, Egypt",
      type: "education",
      description: "Comprehensive 5-year engineering foundation in telecommunications, signal processing, microcontroller architecture, computer networks, and digital logic. Graduation Capstone: IoT Smart Factory Telemetry Monitoring Platform.",
      skills: ["Electronics", "Telecommunications", "Signal Processing", "Embedded Systems"],
    },
  ],
  skills: {
    backend: ["C# (Modern .NET 6/7/8)", "ASP.NET Core Web API", "Entity Framework Core", "LINQ Optimization", "SignalR WebSockets", "Java & Spring Boot"],
    architecture: ["Onion Architecture", "Clean Architecture", "Microservices & Bounded Contexts", "Specification Pattern", "Unit of Work", "Dependency Injection"],
    security: ["JWT Authentication", "Role-Based Access Control (RBAC)", "Resource-Level Security", "ASP.NET Identity", "OAuth2 & Keycloak", "Penetration Testing Mindset"],
    databases: ["Microsoft SQL Server", "T-SQL", "PostgreSQL", "MySQL", "EF Core Code-First", "Data Normalization"],
    qualityDevops: ["Docker & Docker Compose", "Swagger / OpenAPI 3.0", "FluentValidation", "Response Caching", "Rate Limiting Middleware", "Postman Collections"],
    frontend: ["Angular", "TypeScript", "JavaScript (ES6+)", "Modern HTML5 / CSS3", "Vercel Deployments", "Bootstrap"],
  }
};
