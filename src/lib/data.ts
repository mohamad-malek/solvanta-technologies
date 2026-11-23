import {
  AppWindow,
  Server,
  Briefcase,
  PenTool,
  Database,
  ShieldCheck,
  Search,
  LayoutTemplate,
  Code2,
  Rocket,
  Zap,
  Atom,
  FileCode2,
  Route,
  Wind,
  Webhook,
  GitBranch,
  Container,
  FlaskConical,
  type LucideIcon,
} from "lucide-react";

export const COMPANY = {
  name: "Solvanta Technologies",
  tagline: "Turning Challenges into Solutions.",
  github: "https://github.com/mohamad-malek",
  location: "Lebanon",
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Technologies", href: "#technologies" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
] as const;

export const ABOUT_PILLARS: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Search,
    title: "Understand business needs",
    text: "We start by listening, so the software we build fits how your business actually works.",
  },
  {
    icon: ShieldCheck,
    title: "Solve real-world problems",
    text: "Every feature has a purpose: removing friction, saving time, or making decisions easier.",
  },
  {
    icon: Code2,
    title: "Build reliable software",
    text: "Clean architecture, careful testing, and maintainable code that holds up over time.",
  },
  {
    icon: LayoutTemplate,
    title: "Deliver user-friendly solutions",
    text: "Interfaces that feel clear and natural for the people who use them every day.",
  },
];

export const SERVICES: { icon: LucideIcon; title: string; text: string; tag: string }[] = [
  {
    icon: AppWindow,
    title: "Custom Web Application Development",
    text: "Responsive, fast web applications tailored to your workflows, built with modern frameworks and clean, maintainable code.",
    tag: "Web",
  },
  {
    icon: Server,
    title: "Backend and API Development",
    text: "Secure, well-documented REST APIs and server-side logic that power your applications and connect your systems.",
    tag: "Backend",
  },
  {
    icon: Briefcase,
    title: "Business Management Systems",
    text: "Tools for customers, inventory, sales, invoicing, and reporting that bring day-to-day operations into one place.",
    tag: "Systems",
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    text: "User research, wireframes, and polished interfaces that make complex software simple and enjoyable to use.",
    tag: "Design",
  },
  {
    icon: Database,
    title: "Database Design and Integration",
    text: "Well-structured relational data models, migrations, and integrations that keep your information consistent and accessible.",
    tag: "Data",
  },
  {
    icon: ShieldCheck,
    title: "Software Testing and Quality Assurance",
    text: "Structured test plans, functional and regression testing, and quality checks that catch issues before your users do.",
    tag: "Quality",
  },
];

export const PROJECTS = [
  {
    id: "medibook",
    name: "MediBook",
    category: "Appointment Booking Platform",
    description:
      "A clinic appointment management concept with patient bookings, doctor availability, scheduling conflict prevention, and an administration dashboard.",
    focus: "Web applications, scheduling, database integration.",
    tags: ["Web Apps", "Scheduling", "Database"],
  },
  {
    id: "smartbiz",
    name: "SmartBiz ERP",
    category: "Business Management Platform",
    description:
      "A lightweight ERP concept for small businesses, supporting customer management, inventory, sales, invoices, and reporting.",
    focus: "Business applications, APIs, database systems.",
    tags: ["Business Apps", "APIs", "Databases"],
  },
  {
    id: "opsguard",
    name: "OpsGuard",
    category: "IT Monitoring Platform",
    description:
      "An infrastructure monitoring concept featuring service monitoring, alerts, incident tracking, logs, and administration tools.",
    focus: "Monitoring, API integrations, security, system reliability.",
    tags: ["Monitoring", "Integrations", "Security"],
  },
] as const;

export type TechItem = { icon: LucideIcon; name: string; note: string };

export const TECH_GROUPS: { title: string; blurb: string; items: TechItem[] }[] = [
  {
    title: "Frontend & Design",
    blurb: "Interfaces that are fast, accessible, and carefully designed.",
    items: [
      { icon: Zap, name: "Next.js", note: "Full-stack React framework" },
      { icon: Atom, name: "React", note: "Component-driven interfaces" },
      { icon: FileCode2, name: "TypeScript", note: "Type-safe, maintainable code" },
      { icon: Wind, name: "Tailwind CSS", note: "Consistent, responsive styling" },
      { icon: PenTool, name: "Figma", note: "Wireframes and prototypes" },
    ],
  },
  {
    title: "Backend & Data",
    blurb: "Dependable services and well-structured data.",
    items: [
      { icon: Server, name: "Node.js", note: "JavaScript server runtime" },
      { icon: Route, name: "Express.js", note: "Lightweight API framework" },
      { icon: Webhook, name: "REST APIs", note: "Clear, documented endpoints" },
      { icon: Database, name: "PostgreSQL", note: "Relational data modeling" },
    ],
  },
  {
    title: "Workflow & Quality",
    blurb: "Practices that keep delivery organized and reliable.",
    items: [
      { icon: GitBranch, name: "Git and GitHub", note: "Version control and collaboration" },
      { icon: Container, name: "Docker", note: "Reproducible environments" },
      { icon: FlaskConical, name: "Software Testing", note: "Functional and regression checks" },
    ],
  },
];

export const PROCESS: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Search,
    title: "Discover and Plan",
    text: "We learn your goals, users, and constraints, then define scope, priorities, and a clear roadmap.",
  },
  {
    icon: PenTool,
    title: "Design",
    text: "We map user flows, create wireframes and interface designs, and validate them with you before development.",
  },
  {
    icon: Code2,
    title: "Develop and Test",
    text: "We build in iterations, reviewing progress regularly and testing each feature as it is completed.",
  },
  {
    icon: Rocket,
    title: "Deploy and Support",
    text: "We launch the solution, hand over documentation, and remain available for fixes and improvements.",
  },
];

export const TEAM = [
  {
    initials: "MM",
    name: "Mohamad Malek",
    role: "Project Manager & Team Lead",
    text: "Coordinates planning, scope, and delivery, and keeps the team and client aligned from kickoff to launch.",
    lead: true,
  },
  {
    initials: "FS",
    name: "Full-Stack Developer",
    role: "Front-end & back-end engineering",
    text: "Builds web interfaces, APIs, and database layers, turning designs and requirements into working software.",
    lead: false,
  },
  {
    initials: "UX",
    name: "UI/UX Designer & QA Engineer",
    role: "Design & quality assurance",
    text: "Shapes intuitive user experiences and verifies that every release is polished, consistent, and reliable.",
    lead: false,
  },
] as const;
