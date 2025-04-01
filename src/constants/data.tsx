import {
  Gamepad2,
  Hammer,
  LayoutTemplate,
  Linkedin,
  Mail,
  Phone,
  Server,
} from "lucide-react";
import { SkillColors, Specialization, ThemeStyles } from "../interfaces/curriculum.interface";

export const contactInfo = [
  { icon: Phone, text: "+57 3242574768" },
  { icon: Mail, text: "lopezanderson069@gmail.com" },
  {
    icon: Linkedin,
    text: "anderson-lopez-2a9a43",
    href: "https://www.linkedin.com/in/anderson-lopez-68bb76213",
  },
];

export const education = [
  {
    institution: "Universidad Centro Occidental Lisandro Alvarado",
    degree: "INGENIERÍA EN INFORMÁTICA",
    status: "Cursando",
  },
];

export const courses = [
  { name: "Git y GitHub", platform: "Platzi" },
  { name: "Curso de Programación Básica", platform: "Platzi" },
  { name: "Curso de React Fernando Herrera 2021", platform: "Udemy" },
  { name: "Introducción a Godot", platform: "Platzi" },
  { name: "Next.js de 0 a Experto Fernando Herrera", platform: "Udemy" },
  { name: "HTML y CSS 2019 y 2021", platform: "Platzi" },
  { name: "Introducción a TypeScript", platform: "Platzi" },
  { name: "React y TypeScript", platform: "Udemy" },
  { name: "Matzle Email", platform: "Platzi" },
  { name: "Curso Profesional de GODOT", platform: "Idle" },
];

export const specializations: Specialization[] = [
  {
    name: "Frontend",
    icon: LayoutTemplate,
    skills: [
      { name: "React.js", level: "green" },
      { name: "Next.js", level: "green" },
      { name: "Tailwind CSS", level: "yellow" },
      { name: "TypeScript", level: "green" },
    ],
  },
  {
    name: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", level: "green" },
      { name: "Nest.Js", level: "yellow" },
      { name: "REST APIs", level: "yellow" },
    ],
  },
  {
    name: "Herramientas & Gestión",
    icon: Hammer,
    skills: [
      { name: "Git y GitHub", level: "green" },
      { name: "Zustand - Redux", level: "yellow" },
      { name: "ClickUp", level: "green" },
      { name: "Slack", level: "green" },
    ],
  },
  {
    name: "Especializado",
    icon: Gamepad2,
    skills: [
      { name: "Godot Engine", level: "green" },
      { name: "Maizzle", level: "green" },
      { name: "HeroUI", level: "yellow" },
    ],
  },
];

export const workExperience = [
  {
    position: "Front End Developer",
    company: "ANDEAN WIDE",
    period: "ABRIL DE 2023 HASTA LA FECHA · ACTUALIDAD",
    responsibilities: [
      "Desarrollos de aplicativos internos y externos de la empresa",
      "Construcción de plataformas y app de Front con REACTJS - NEXTJS y en proyectos menores de Back con NESTJS y NODEJS",
      "Implementación de Emails con Maizzle",
    ],
  },
  {
    position: "Junior Front End Developer",
    company: "BUSINESS GROUP",
    period: "NOVIEMBRE DE 2021 HASTA 23 MARZO 2023",
    responsibilities: [
      "Desarrollos de aplicativos internos de la empresa",
      'Integración de videojuegos en "Godot" con conexión a API REST NODE',
      "Creación de páginas web en NextJs",
    ],
  },
  {
    position: "Auxiliar de Sistemas",
    company: "BUSINESS GROUP",
    period: "ENERO DE 2021 HASTA NOVIEMBRE DE 2023",
    responsibilities: [
      "Mantenimiento correctivo y preventivo de equipos computacionales",
    ],
  },
];

export const themes: { name: string; value: "light" | "dark" | "blue" }[] = [
  { name: "Claro", value: "light" },
  { name: "Oscuro", value: "dark" },
  { name: "Azul", value: "blue" },
];

export const themeStyles: ThemeStyles = {
  light: {
    bg: "bg-white",
    card: "bg-slate-50",
    primary: "text-slate-900",
    secondary: "text-slate-600",
    accent: "text-orange-600",
    border: "border-slate-200",
    button: "bg-orange-600 hover:bg-orange-700 text-white",
    separator: "bg-slate-200",
    skillPill: "bg-white",
  },
  dark: {
    bg: "bg-slate-900",
    card: "bg-slate-800",
    primary: "text-white",
    secondary: "text-slate-300",
    accent: "text-orange-500",
    border: "border-slate-700",
    button: "bg-orange-600 hover:bg-orange-700 text-white",
    separator: "bg-slate-700",
    skillPill: "bg-slate-700",
  },
  blue: {
    bg: "bg-slate-50",
    card: "bg-white",
    primary: "text-slate-900",
    secondary: "text-slate-600",
    accent: "text-blue-600",
    border: "border-slate-200",
    button: "bg-blue-600 hover:bg-blue-700 text-white",
    separator: "bg-slate-200",
    skillPill: "bg-white",
  },
};

export const skillLevelColors: SkillColors = {
  green: {
    light: "bg-green-500",
    dark: "bg-green-400",
    blue: "bg-green-500",
  },
  yellow: {
    light: "bg-yellow-500",
    dark: "bg-yellow-400",
    blue: "bg-yellow-500",
  },
};
