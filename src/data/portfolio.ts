import type { Profile } from "@/types/portfolio";

export const initial: Profile = {
  available: true,
  headline:
    "Information Technology undergraduate building backend systems and mobile products.",
  email: "",
  github: "https://github.com/janithnishen",
  linkedin: "https://www.linkedin.com/in/janithnishen/",
  // Put cv.pdf in /public and set this to "/cv.pdf" to enable the CV button.
  resume: "",
  resumeName: "",
  skills: [
    "TypeScript",
    "JavaScript",
    "Java",
    "Python",
    "C",
    "React.js",
    "React Native",
    "HTML5",
    "CSS3",
    "NestJS",
    "Node.js",
    "Express.js",
    "REST APIs",
    "Firebase",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "Git",
    "GitHub",
    "Postman",
    "VS Code",
    "Android Studio",
  ],
  projects: [
    {
      id: "credit",
      title: "Smart Credit+",
      category: "Fintech / Mobile",
      description:
        "A decentralized peer-to-peer lending platform that connects underserved borrowers with microloans, transparent repayments, and objective credit scoring.",
      tags: [
        "React Native",
        "Expo",
        "TypeScript",
        "NestJS",
        "Firebase",
        "PostgreSQL",
      ],
      published: true,
      subtitle: "Decentralized P2P Lending Platform",
      role: "Team Lead · 5-member team",
      highlights: [
        "Cross-platform borrower app with offline caching and biometric authentication.",
        "Modular REST backend with JWT authentication and role-based access.",
        "Automated credit scoring and verifiable repayment workflows.",
      ],
      // Add when available: result, status, dateRange, repoUrl, demoUrl, screenshots.
    },
    {
      id: "gallery",
      title: "Smart Shooting Gallery",
      category: "Embedded / IoT",
      description:
        "An interactive shooting range with a wireless glove controller, precision target tracking, and real-time telemetry powered by dual microcontrollers.",
      tags: [
        "ESP32",
        "Arduino",
        "C / C++",
        "WebSockets",
        "Node.js",
        "FreeRTOS",
      ],
      published: true,
      subtitle: "Wireless Control & Live Telemetry",
      role: "Firmware & Systems Engineering",
      highlights: [
        "ESP32 and Arduino communication over UART and RF.",
        "Gesture-controlled wearable with flex and gyroscope sensors.",
        "Live scores and diagnostics delivered over WebSockets.",
      ],
    },
  ],
};
