// ─── PERSONAL INFO ────────────────────────────────────────────
export const PERSONAL_INFO = {
  name: "Norman Lee Salas",
  role: "Java Developer & DevOps Engineer",
  email: "salasnormanlee9@gmail.com",       // replace with your real email
  github: "https://github.com/salasnormannn",
  linkedin: "https://linkedin.com/in/norman-lee-salas-b8408331b/",
  domain: "https://salasnorman.dev",
  intro:
    "I build scalable backend systems with Java & Spring Boot, " +
    "and automate deployment pipelines with Docker and GitHub Actions. " +
    "Fresh graduate passionate about clean code and cloud infrastructure.",
}

// ─── SKILLS ───────────────────────────────────────────────────
export const SKILLS = [
  { name: "Java",           category: "Backend",  level: 85 },
  { name: "Spring Boot",    category: "Backend",  level: 75 },
  { name: "React",          category: "Frontend", level: 70 },
  { name: "JavaScript",     category: "Frontend", level: 70 },
  { name: "HTML & CSS",     category: "Frontend", level: 80 },
  { name: "Docker",         category: "DevOps",   level: 60 },
  { name: "GitHub Actions", category: "DevOps",   level: 65 },
  { name: "Git",            category: "DevOps",   level: 80 },
  { name: "MySQL",          category: "Database", level: 70 },
  { name: "REST APIs",      category: "Backend",  level: 75 },
]

// ─── PROJECTS ─────────────────────────────────────────────────
export const PROJECTS = [
  {
    id: 1,
    title: "Farm.io",
    description:
      "Agricultural management system built with core Java OOP principles. " +
      "Implements inheritance, polymorphism, encapsulation, and abstraction " +
      "to manage farm entities and operations.",
    tech: ["Java", "OOP", "CLI"],
//    github: "https://github.com/YOUR_USERNAME/farm-io",
    featured: true,
  },
  {
    id: 2,
    title: "Ordering & Inventory System",
    description:
      "Full-featured ordering and stock tracking system. Handles product " +
      "management, order processing, and real-time inventory updates " +
      "with a clean command-line interface.",
    tech: ["Java", "OOP", "Data Structures"],
//    github: "https://github.com/YOUR_USERNAME/ordering-inventory",
    featured: true,
  },
  {
    id: 3,
    title: "Reservation System",
    description:
      "Booking and scheduling management system that handles reservations, " +
      "availability checks, and conflict resolution using Java collections " +
      "and file-based persistence.",
    tech: ["Java", "OOP", "File I/O"],
//    github: "https://github.com/YOUR_USERNAME/reservation-system",
    featured: true,
  },
  {
    id: 4,
    title: "Monopoly CLI Game",
    description:
      "Fully playable command-line Monopoly game implementing game logic, " +
      "player management, property trading, and turn-based mechanics " +
      "using object-oriented design patterns.",
    tech: ["Java", "OOP", "Game Logic", "Design Patterns"],
//    github: "https://github.com/YOUR_USERNAME/monopoly-cli",
    featured: false,
  },
]

// ─── NAVIGATION ───────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "About",    href: "#about"    },
  { label: "Skills",   href: "#skills"   },
  { label: "Projects", href: "#projects" },
  { label: "Contact",  href: "#contact"  },
]