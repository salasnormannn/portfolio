// ─── PERSONAL INFO ────────────────────────────────────────────
export const PERSONAL_INFO = {
  name: "Norman Lee Salas",
  role: "Java Developer & DevOps Engineer",
  email: "salasnormanlee9@gmail.com",
  github: "https://github.com/salasnormannn",
  linkedin: "https://www.linkedin.com/in/norman-lee-salas-b8408331b/",
  domain: "https://salasnorman.dev",
  intro:
    "Information Technology graduate with experience in Java development, " +
    "DevOps workflows, and full-stack systems. Passionate about building " +
    "scalable and reliable software solutions.",
}

// ─── SKILLS ───────────────────────────────────────────────────
export const SKILLS = [
  { name: "Java",           category: "Backend",  level: 80 },
  { name: "Spring Boot",    category: "Backend",  level: 75 },
  { name: "REST APIs",      category: "Backend",  level: 75 },
  { name: "Node.js",        category: "Backend",  level: 70 },
  { name: "PHP",            category: "Backend",  level: 65 },
  { name: "React",          category: "Frontend", level: 70 },
  { name: "JavaScript",     category: "Frontend", level: 75 },
  { name: "HTML & CSS",     category: "Frontend", level: 80 },
  { name: "Kotlin",         category: "Frontend", level: 65 },
  { name: "Docker",         category: "DevOps",   level: 65 },
  { name: "GitHub Actions", category: "DevOps",   level: 70 },
  { name: "Git & Linux",    category: "DevOps",   level: 70 },
  { name: "Kafka",          category: "DevOps",   level: 70 },
  { name: "Elasticsearch",  category: "DevOps",   level: 70 },
  { name: "Kibana",         category: "DevOps",   level: 65 },
  { name: "Flink",          category: "DevOps",   level: 65 },
  { name: "MySQL",          category: "Database", level: 75 },
  { name: "MongoDB",        category: "Database", level: 70 },
  { name: "SQLite",         category: "Database", level: 65 },
]

// ─── PROJECTS ─────────────────────────────────────────────────
export const PROJECTS = [
  {
    id: 1,
    title: "BusMate PH",
    description:
      "A real-time Public Utility Bus tracking system powered by IoT sensors and GPS. " +
      "An onboard Raspberry Pi device streams live data to the cloud, feeding a " +
      "company dashboard for fleet management and a commuter web app for on-the-go tracking. " +
      "Combines computer vision via OpenCV, GPS telemetry, and a Node.js backend " +
      "to deliver end-to-end visibility across the entire bus network.",
    tech: ["Node.js", "JavaScript", "HTML", "CSS", "GPS", "OpenCV", "Raspberry Pi", "IoT"],
    image: "/projects/busmate-dashboard.png",
    featured: true,
  },
  {
    id: 2,
    title: "Archers Reservation Hub",
    description:
      "A laboratory seat reservation platform for the Gokongwei College of Engineering " +
      "at De La Salle University. Students can browse available seats and make reservations " +
      "while lab technicians manage real-time availability — eliminating manual seat allocation " +
      "and reducing queuing time across the engineering building.",
    tech: ["HTML", "CSS", "JavaScript", "MongoDB"],
    image: "/projects/archers-hub.png",
    featured: true,
  },
  {
    id: 3,
    title: "ExploreMore",
    description:
      "A native Android travel app inspired by Klook and FoodPanda, built for " +
      "local Philippine travelers. Features hotel booking, tour reservations, " +
      "food discovery, and geolocation-based services — all within a clean, " +
      "intuitive mobile interface developed entirely in Kotlin.",
    tech: ["Kotlin", "Android Studio", "SQLite"],
    image: "/projects/explore-more.png",
    featured: true,
  },
  {
    id: 4,
    title: "Combo Meal Assembler",
    description:
      "A kiosk-type web application for building and ordering custom combo meals. " +
      "Customers dynamically assemble their combo from categorized items — mains, sides, and drinks — " +
      "with real-time pricing, automatic discount calculation, and a streamlined checkout flow " +
      "powered by a PHP backend and PHPMyAdmin database.",
    tech: ["PHP", "Java", "JavaScript", "XAMPP", "PHPMyAdmin"],
    image: "/projects/combo-meal.png",
    featured: false,
  },
  {
    id: 5,
    title: "Farm.io",
    description:
      "An agricultural management CLI system built to demonstrate core Java OOP principles. " +
      "Applies inheritance, polymorphism, encapsulation, and abstraction to model farm entities, " +
      "manage crops, and simulate farm operations — making complex OOP concepts tangible " +
      "through a clean command-line interface.",
    tech: ["Java", "OOP", "CLI"],
    image: "/projects/farm-io.png",
    featured: false,
  },
  {
    id: 6,
    title: "The Vinyl Vault",
    description:
      "A vinyl record showcase and e-commerce shop featuring genre filtering, " +
      "search, price sorting, and a cart system. Built as a team project where " +
      "I was specifically responsible for the backend database architecture — " +
      "designing and managing the MongoDB product schema, handling CRUD operations, " +
      "and connecting the database layer to the frontend shop interface.",
    tech: ["JavaScript", "HTML", "CSS", "MongoDB", "Node.js"],
    image: "/projects/vinyl-vault.png",
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