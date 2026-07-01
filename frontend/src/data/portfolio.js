// Centralised portfolio data for Aditya Pratihast

export const profile = {
  name: "Aditya",
  firstName: "Aditya",
  role: "Software Engineer × Business Analyst × Agile Practitioner",
  headline: "I build scalable software and translate business problems into shipped products.",
  taglines: [
    "Java Full Stack Developer",
    "Business Analyst",
    "Agile Practitioner",
    "Problem Solver",
  ],
  summary:
    "Results-driven Full Stack Java developer with a strong foundation in Core Java, OOPs, DSA, Spring Boot and SQL — paired with hands-on Business Analysis skills: requirement gathering, BRD/FRD/SRS, user stories and Agile delivery. I build secure REST APIs, model data with intent, and write the docs that turn vague asks into shippable sprints. Open to FAANG-track engineering roles and high-leverage freelance work.",
  location: "New Delhi, India",
  email: "adityapratihast28@gmail.com",
  phone: "+91 9871318973",
  whatsapp: "https://wa.me/919871318973",
  linkedin: "https://linkedin.com/in/aditya-5a5a372a7",
  github: "https://github.com/aditya-pratihast",
  leetcode: "https://leetcode.com/u/aditya_pratihast_23/",
  resumeUrl: "https://customer-assets.emergentagent.com/job_ab350cd4-b0c9-46dd-a91f-92a2677d3d09/artifacts/hkouh4oa_Aditya_Resume.pdf.PNG",
  portraitUrl: "https://customer-assets.emergentagent.com/job_ab350cd4-b0c9-46dd-a91f-92a2677d3d09/artifacts/hkouh4oa_Aditya_Resume.pdf.PNG",
  availability: "Open to roles · Available for freelance",
};

export const about = {
  intro: [
    "I'm Aditya — a final-year B.Tech engineer at R.G.P.V Bhopal who builds production-style backends in Java and Spring Boot, and writes the BRDs / FRDs / SRSs that make those backends meaningful.",
    "I sit comfortably between engineering and product. I'll ship a secure REST API with JWT auth in the morning and lead a stakeholder requirement-gathering walkthrough in the afternoon.",
    "My day-zero strengths are clean OOP, disciplined DSA practice, MySQL data modeling and Agile/Scrum delivery. I document like a senior, code like a junior who has read too much Effective Java.",
    "I'm targeting FAANG-level engineering teams and product companies in the US, UK and India — and selectively pick freelance work where business analysis depth multiplies the codebase's value.",
  ],
  strength: "Bridging the gap between business stakeholders and engineering — I can write the user story and the controller for it.",
  differentiator: "Most freshers ship either code or documents. I ship the system: requirements → architecture → API → DB → release notes.",
  goal: "Within 3 years: Senior SDE / Tech-BA hybrid at a top product company. Long-term: building products that solve high-impact business problems at scale.",
};

export const technicalSkills = [
  { name: "Java", rating: 90, category: "Languages" },
  { name: "Spring Boot", rating: 85, category: "Backend" },
  { name: "Spring Framework", rating: 80, category: "Backend" },
  { name: "Hibernate / JPA", rating: 78, category: "Backend" },
  { name: "JDBC", rating: 85, category: "Backend" },
  { name: "REST API", rating: 88, category: "Backend" },
  { name: "SQL", rating: 88, category: "Database" },
  { name: "MySQL", rating: 85, category: "Database" },
  { name: "DBMS", rating: 82, category: "CS Fundamentals" },
  { name: "OOP", rating: 92, category: "CS Fundamentals" },
  { name: "DSA", rating: 80, category: "CS Fundamentals" },
  { name: "Operating Systems", rating: 75, category: "CS Fundamentals" },
  { name: "Computer Networks", rating: 75, category: "CS Fundamentals" },
  { name: "HTML5", rating: 88, category: "Frontend" },
  { name: "CSS3", rating: 82, category: "Frontend" },
  { name: "JavaScript", rating: 80, category: "Frontend" },
  { name: "React", rating: 72, category: "Frontend" },
  { name: "Git", rating: 85, category: "Tools" },
  { name: "GitHub", rating: 85, category: "Tools" },
  { name: "Maven", rating: 80, category: "Tools" },
  { name: "Postman", rating: 88, category: "Tools" },
];

export const baSkills = {
  Methodologies: ["Agile", "Scrum", "Kanban", "Waterfall"],
  Documentation: ["BRD", "FRD", "SRS", "User Stories", "Acceptance Criteria"],
  Modeling: ["UML", "Use Case Diagram", "Sequence Diagram", "Flow Charts", "Process Mapping"],
  Tools: ["Jira", "Confluence", "Figma", "Wireframing", "Excel", "Power BI"],
  Analysis: ["SWOT", "PESTLE", "MoSCoW", "Gap Analysis", "Stakeholder Management"],
  Growth: ["SQL for Analytics", "Google Analytics", "SEO", "Market Research", "Competitive Analysis"],
};

export const services = [
  {
    title: "Full Stack Development",
    desc: "Production-grade backends in Java Spring Boot with REST APIs, JWT auth, validation and clean modular architecture.",
    icon: "Code2",
  },
  {
    title: "Business Analysis & Requirements",
    desc: "Stakeholder interviews, BRD/FRD/SRS authoring, user stories, acceptance criteria and prioritization frameworks.",
    icon: "FileText",
  },
  {
    title: "Agile Project Coordination",
    desc: "Sprint planning, backlog grooming, daily standups, retros and Jira board hygiene for small-to-mid teams.",
    icon: "Workflow",
  },
  {
    title: "REST API Design",
    desc: "Resource-modeled APIs with versioning, OpenAPI specs, Postman collections and proper error envelopes.",
    icon: "Network",
  },
  {
    title: "Database Modeling",
    desc: "Normalised MySQL schemas, query optimisation, ER diagrams and migrations for evolving products.",
    icon: "Database",
  },
  {
    title: "Technical Documentation",
    desc: "Architecture notes, runbooks, READMEs and release notes that an onboarding teammate can actually use.",
    icon: "BookOpen",
  },
];

export const projects = [
  {
    id: "ecommerce-backend",
    title: "E-Commerce Backend System",
    category: "Backend",
    period: "Apr 2025 – May 2025",
    cover: "https://images.unsplash.com/photo-1757301714935-c8127a21abc6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTZ8MHwxfHNlYXJjaHwzfHxlY29tbWVyY2UlMjBhcHAlMjBkYXNoYm9hcmQlMjB1aXxlbnwwfHx8fDE3ODI4NDYzMzJ8MA&ixlib=rb-4.1.0&q=85",
    stack: ["Java", "Spring Boot", "Spring Data JPA", "MySQL", "JWT", "Maven"],
    problem: "Small merchants need a secure, modular commerce backend without paying SaaS markup or sacrificing control over data.",
    solution: "Modular Spring Boot REST backend with JWT auth, role-based access, product/cart/order/payment modules and clean global response envelopes.",
    value: "Reusable foundation any frontend can plug into; cuts time-to-MVP for a merchant from weeks to days.",
    features: ["JWT auth & role-based access", "Product, Cart, Order, Payment modules", "Global exception handling", "Input validation", "Spring Data JPA + MySQL"],
    future: ["Stripe webhooks", "Inventory eventing", "Redis cart cache", "Admin dashboard"],
    agile: "2-week sprints, Jira board, story-pointed backlog, retros after each release.",
    featured: true,
  },
  {
    id: "banking-jdbc",
    title: "Banking Management System",
    category: "Backend",
    period: "Aug 2024 – Sep 2024",
    cover: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNDR8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBhcHAlMjBkYXNoYm9hcmQlMjB1aXxlbnwwfHx8fDE3ODI4NDYzMzJ8MA&ixlib=rb-4.1.0&q=85",
    stack: ["Core Java", "JDBC", "MySQL", "OOP"],
    problem: "Practice the fundamentals: transactional integrity, normalisation and OOP modeling — without leaning on a framework.",
    solution: "Console-driven banking app with account creation, deposit, withdrawal, balance inquiry and transaction history using raw JDBC.",
    value: "Demonstrates command of JDBC, transactions and OOP design — the layer that frameworks abstract away.",
    features: ["Account CRUD", "Deposit & withdraw with validation", "Balance inquiry", "Transaction history", "Layered OOP design"],
    future: ["Migrate to Spring Boot", "Add REST layer", "Role-based admin"],
    agile: "Solo Kanban board, daily commit goals, GitHub for version history.",
  },
  {
    id: "amazon-clone",
    title: "Amazon Clone — Frontend",
    category: "Frontend",
    period: "Feb 2025 – Mar 2026",
    cover: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=1200&q=80",
    stack: ["HTML5", "CSS3", "JavaScript"],
    problem: "Build a pixel-faithful Amazon homepage to drill responsive layout and DOM interactivity without frameworks.",
    solution: "Vanilla JS responsive Amazon homepage with product grid, search, dynamic cart and DOM-driven UI updates.",
    value: "Proves frontend fundamentals — no React crutch.",
    features: ["Responsive product grid", "Search filter", "Cart add/remove", "Dynamic DOM rendering"],
    future: ["Refactor to React", "Backend integration", "Auth"],
    agile: "Trello board, MoSCoW-prioritised features.",
  },
  {
    id: "ai-requirement-mgmt",
    title: "AI Requirement Management System",
    category: "Full Stack",
    period: "Concept",
    cover: "https://images.unsplash.com/photo-1720962158813-29b66b8e23e1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODh8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjBkYXNoYm9hcmQlMjB1aSUyMGRlc2lnbnxlbnwwfHx8fDE3ODI4NDYzMjV8MA&ixlib=rb-4.1.0&q=85",
    stack: ["Spring Boot", "MySQL", "React", "LLM APIs"],
    problem: "Business analysts spend 40%+ of their time turning stakeholder transcripts into structured BRD/FRD/SRS docs.",
    solution: "An LLM-assisted platform that ingests interview transcripts and auto-generates structured requirement artifacts, traceable to source quotes.",
    value: "Cuts BA documentation time by an estimated 60% and improves traceability and audit readiness.",
    features: ["Transcript ingestion", "Auto BRD/FRD/SRS generation", "Traceability matrix", "Stakeholder dashboard", "Export to Confluence/Jira"],
    future: ["Auto user story generation", "MoSCoW prioritization assistant", "Risk-flagging"],
    agile: "Discovery sprint → MVP sprint → 2-week iteration cadence with stakeholder demos.",
    featured: true,
  },
  {
    id: "healthcare-appointments",
    title: "Healthcare Appointment Platform",
    category: "Full Stack",
    period: "Concept",
    cover: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
    stack: ["Spring Boot", "MySQL", "React", "REST"],
    problem: "Clinics still depend on phone calls; patients can't see real-time slots and clinicians lack a single source of truth.",
    solution: "Doctor-patient booking platform with real-time slot management, role-based dashboards and reminders.",
    value: "Reduces no-shows and frees up reception staff hours per week.",
    features: ["Slot booking", "Doctor & patient dashboards", "Role-based auth", "Email reminders", "Reports"],
    future: ["Telemedicine video", "Payment gateway", "Insurance integration"],
    agile: "Persona-driven user stories, sprint demos with simulated clinician users.",
  },
  {
    id: "crm-dashboard",
    title: "CRM Sales Dashboard",
    category: "Full Stack",
    period: "Concept",
    cover: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNDR8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBhcHAlMjBkYXNoYm9hcmQlMjB1aXxlbnwwfHx8fDE3ODI4NDYzMzJ8MA&ixlib=rb-4.1.0&q=85",
    stack: ["Spring Boot", "React", "MySQL", "Chart.js"],
    problem: "Sales teams lose context jumping between spreadsheets, inboxes and ad-hoc trackers.",
    solution: "Pipeline CRM with stage tracking, activity timeline, forecast charts and rep leaderboards.",
    value: "Single pane of glass for revenue ops; improves forecast accuracy.",
    features: ["Deal pipeline kanban", "Activity timeline", "Forecast chart", "Rep leaderboard", "Email log"],
    future: ["Calendar sync", "AI lead scoring", "Slack alerts"],
    agile: "Backlog grooming with mock sales-ops stakeholder; 1-week sprints.",
  },
  {
    id: "hrms",
    title: "HRMS — People Operations",
    category: "Full Stack",
    period: "Concept",
    cover: "https://images.unsplash.com/photo-1529119368496-2dfda6ec2804?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwzfHxidXNpbmVzcyUyMHN0cmF0ZWd5JTIwYWdpbGUlMjBtZWV0aW5nfGVufDB8fHx8MTc4Mjg0NjMzMnww&ixlib=rb-4.1.0&q=85",
    stack: ["Spring Boot", "MySQL", "React"],
    problem: "Small companies juggle attendance, leaves and payroll across 4-5 disconnected tools.",
    solution: "Unified HRMS with employee directory, attendance, leave workflow, payroll stubs and document vault.",
    value: "Replaces 4+ point tools for SMBs — clean ROI story.",
    features: ["Employee directory", "Attendance tracking", "Leave approval workflow", "Document vault", "Reports"],
    future: ["Payroll automation", "Performance reviews", "Slack integration"],
    agile: "Stakeholder-led story mapping, MVP defined via MoSCoW.",
  },
  {
    id: "inventory-mgmt",
    title: "Inventory Management",
    category: "Backend",
    period: "Concept",
    cover: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    stack: ["Spring Boot", "MySQL", "REST"],
    problem: "Mid-market retailers can't reconcile stock across warehouses and storefronts in near-real-time.",
    solution: "Backend service with SKU catalog, multi-warehouse stock, reorder triggers and audit log.",
    value: "Reduces stock-outs and overstock waste.",
    features: ["SKU catalog", "Multi-warehouse stock", "Reorder rules", "Audit log", "REST API for any frontend"],
    future: ["Barcode integration", "Demand forecasting", "Supplier portal"],
    agile: "Domain-driven backlog, Definition of Done enforced per story.",
  },
];

export const certifications = [
  {
    title: "DSA with Java",
    period: "Feb 2024 – May 2024",
    desc: "Strong foundation in Data Structures & Algorithms. Solved coding problems in Java with focus on time/space optimisation.",
  },
  {
    title: "Java SE",
    period: "Jun 2024 – Sep 2024",
    desc: "Certified in Core Java, OOPs, exception handling, collections and multithreading concepts.",
  },
  {
    title: "SQL — Advanced Queries",
    period: "Sep 2024",
    desc: "Strong understanding of queries, joins, subqueries, stored procedures and database design.",
  },
  {
    title: "Spring Boot & REST APIs",
    period: "Oct 2024 – Dec 2024",
    desc: "REST controller design, JPA, dependency injection, exception handling and Spring Security fundamentals.",
  },
  {
    title: "MySQL for Developers",
    period: "Nov 2024",
    desc: "Schema design, indexing, transactions, normalisation and query performance tuning.",
  },
  {
    title: "Agile & Scrum Foundations",
    period: "Jan 2025",
    desc: "Scrum roles, ceremonies, artifacts, story pointing, backlog grooming and sprint retros.",
  },
  {
    title: "Business Analysis — BRD/FRD/SRS",
    period: "Feb 2025",
    desc: "Requirement elicitation, stakeholder interviews and writing BRD, FRD and SRS documents.",
  },
  {
    title: "Jira & Confluence Essentials",
    period: "Feb 2025",
    desc: "Board configuration, epics/stories/tasks, workflows, dashboards and Confluence documentation.",
  },
  {
    title: "UML & System Modeling",
    period: "Mar 2025",
    desc: "Use case, sequence, class and activity diagrams for real-world software systems.",
  },
  {
    title: "Git & GitHub — Team Workflows",
    period: "Mar 2025",
    desc: "Branching strategies, PR reviews, conflict resolution and CI-friendly commit hygiene.",
  },
  {
    title: "Postman API Testing",
    period: "Apr 2025",
    desc: "Collections, environments, chained requests, automated tests and Newman CLI runs.",
  },
  {
    title: "Full Stack Web Development",
    period: "May 2025",
    desc: "HTML5, CSS3, JavaScript and React fundamentals paired with a Java Spring Boot backend.",
  },
];

export const education = [
  { degree: "Bachelor of Technology", school: "R.G.P.V, Bhopal (M.P)", period: "Nov 2022 – Jun 2026" },
  { degree: "Higher Secondary", school: "IP Convent Sr Sec School, New Delhi", period: "Apr 2020 – Mar 2021" },
  { degree: "Matriculation (C.B.S.E)", school: "Solanki Sec Public School, New Delhi", period: "Apr 2018 – Mar 2019" },
];

export const agilePhases = [
  { name: "Sprint Planning", desc: "Backlog grooming, story pointing & sprint goal definition." },
  { name: "Daily Standup", desc: "15-min sync — yesterday, today, blockers." },
  { name: "Development", desc: "Spring Boot REST + MySQL with feature branches & PR reviews." },
  { name: "Code Review", desc: "Pull request reviews against checklists and Definition of Done." },
  { name: "Testing", desc: "Unit + integration testing with Postman & JUnit." },
  { name: "Sprint Review", desc: "Stakeholder demo — collect feedback, refine acceptance criteria." },
  { name: "Retrospective", desc: "Continuous improvement — what worked, what to change." },
];

export const testimonials = [
  {
    quote: "Aditya combines engineering rigor with rare BA discipline. He'll write the BRD and the controller for it.",
    name: "Concept Mentor",
    role: "Engineering Manager (representative)",
  },
  {
    quote: "Documentation that doesn't suck and APIs that actually follow REST. Refreshing in a fresher.",
    name: "Open-source Reviewer",
    role: "Senior Backend Engineer (representative)",
  },
  {
    quote: "Sprint demos were sharp — clear stakeholder framing, clear what shipped, clear what's next.",
    name: "Workshop Lead",
    role: "Agile Coach (representative)",
  },
];

export const faqs = [
  { q: "Are you open to full-time roles?", a: "Yes — actively interviewing for SDE 1 / Junior Engineer / Tech-BA hybrid roles in India, UK, US (remote/onsite/hybrid)." },
  { q: "Do you take freelance projects?", a: "Yes, selectively. I focus on Java/Spring Boot backends, REST APIs and BA documentation packages. Drop a brief via the contact form." },
  { q: "What's your typical response time?", a: "Under 24 hours on weekdays. Faster if it's an interview loop or active freelance brief." },
  { q: "Notice period / availability?", a: "Available to start within 2 weeks for full-time. Freelance: typically 5–15 hours/week alongside studies." },
  { q: "Tech you won't touch?", a: "I avoid legacy monoliths without source control. Otherwise, I'm pragmatic — the right tool for the problem." },
  { q: "Where are you based?", a: "New Delhi, India. Comfortable working across IST, GMT and EST overlaps." },
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "casestudies", label: "Case Studies" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];
