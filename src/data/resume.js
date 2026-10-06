// Shared portfolio content, aligned with the October 6, 2026 resume.
export const experiences = [
  {
    "role": "Co-Founder & Software Engineer",
    "company": "LocalGo",
    "location": "Remote",
    "period": "Jan 2026 — Present",
    "current": true,
    "bullets": [
      "Built LocalGo's full-stack ordering and delivery app with React Native, TypeScript, FastAPI, and Postgres.",
      "Prototyped GOER AI with Python and Groq tool calling for menu search and contextual product questions.",
      "Containerized FastAPI services with Docker and Docker Compose for repeatable builds and app deployment.",
      "Built iOS and Android releases with Expo/EAS, using GitHub Actions for type checks and automated tests.",
      "Provisioned infrastructure with Terraform and Ansible, enabling repeatable deployments and service rollback.",
      "Deployed services on Kubernetes, packaged builds with Helm, and monitored application health with Datadog."
    ],
    "tags": [
      "React Native",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "Groq",
      "Docker",
      "Docker Compose",
      "Expo / EAS",
      "GitHub Actions",
      "Terraform",
      "Ansible",
      "Kubernetes",
      "Helm",
      "Datadog"
    ]
  },
  {
    "role": "Software Engineering Intern",
    "company": "CopyPasta",
    "location": "Remote",
    "period": "Feb 2026 — May 2026",
    "current": false,
    "bullets": [
      "Built offline file conversion in Swift/SwiftUI for ClipTex, a native macOS OCR app using Apple's Vision API.",
      "Built a 26-format image, document, audio, and video engine using AVFoundation, ImageIO, and PDFKit.",
      "Added automated conversion tests to the CI/CD pipeline and organized file-processing logic into Swift classes.",
      "Kept document and media conversion entirely on-device, enabling offline use without sending user files to servers.",
      "Managed App Sandbox entitlements and security-scoped file access for CopyPasta, a live macOS App Store app."
    ],
    "tags": [
      "Swift",
      "SwiftUI",
      "Vision",
      "AVFoundation",
      "ImageIO",
      "PDFKit",
      "CI/CD",
      "App Sandbox"
    ]
  },
  {
    "role": "Robotics Software Engineer",
    "company": "Space Concordia",
    "location": "Montreal, QC",
    "period": "Sep 2025 — Jan 2026",
    "current": false,
    "bullets": [
      "Designed and simulated an autonomous robot with ROS2 and Gazebo, programming in Python and C/C++."
    ],
    "tags": [
      "ROS2",
      "Gazebo",
      "Python",
      "C / C++"
    ]
  },
  {
    "role": "IEEE Lab Supervisor",
    "company": "IEEE Concordia",
    "location": "Montreal, QC",
    "period": "Aug 2026 — Present",
    "current": true,
    "bullets": [
      "Supervised daily engineering lab operations, maintaining workstations, tools, and electronic component inventory.",
      "Mentored students through circuit debugging and microcontroller projects while enforcing engineering lab safety."
    ],
    "tags": [
      "Circuit Debugging",
      "Microcontrollers",
      "Lab Operations"
    ]
  },
  {
    "role": "Full-Stack Software Engineer",
    "company": "Freelancer",
    "clients": "PureBranded · Singer Haley",
    "location": "Remote",
    "period": "2025 — Present",
    "current": true,
    "bullets": [
      "Shipped custom web applications and REST backends for small businesses, from database design to deployment."
    ],
    "tags": [
      "Web Applications",
      "REST APIs",
      "Database Design",
      "Deployment"
    ]
  }
]

export const projects = [
  {
    "title": "GOER AI",
    "kind": "Chat-Based Ordering · In Development",
    "period": "Jun 2026",
    "blurb": "LocalGo's chat-based ordering flow, with a Python prototype for menu search and contextual product questions.",
    "features": [
      "Developing LocalGo's chat-based ordering flow for product discovery, customization, checkout, and order tracking.",
      "Built a Python prototype with Groq tool calling for catalog-grounded menu search and contextual follow-ups.",
      "Designing FastAPI agents for carts and checkout with validated pricing, Stripe, and a React Native chat UI."
    ],
    "tech": [
      "Python",
      "Groq",
      "FastAPI",
      "React Native",
      "Stripe"
    ],
    "github": "https://github.com/samerodeh/goer-ai"
  },
  {
    "title": "Jarvis",
    "kind": "Home Automation System",
    "period": "Mar 2026",
    "blurb": "A voice-controlled home automation system using Google Gemini, Vosk offline speech-to-text, and ESP32 hardware.",
    "features": [
      "Built Jarvis, a voice-controlled home automation system with Google Gemini and Vosk offline speech-to-text.",
      "Wrote C/C++ firmware for ESP32 nodes and custom PCBs over UART/I2C, driving SG90 servos and relays.",
      "Deployed across 4+ rooms, turning spoken intent into low-latency servo and relay commands on ESP32 nodes."
    ],
    "tech": [
      "LangChain",
      "Google Gemini",
      "Vosk",
      "ESP32",
      "C / C++",
      "UART / I2C",
      "SG90"
    ],
    "github": "https://github.com/samerodeh/jarvis"
  },
  {
    "title": "Facelytics",
    "kind": "Web Application",
    "period": "Dec 2025",
    "blurb": "A face verification app comparing InsightFace embeddings, built with FastAPI, Postgres, and React.",
    "features": [
      "Built Facelytics, a face verification app comparing InsightFace embeddings, on FastAPI, Postgres, and React."
    ],
    "tech": [
      "InsightFace",
      "FastAPI",
      "PostgreSQL",
      "React"
    ],
    "github": "https://github.com/samerodeh/Facelytics",
    "demo": "https://facelytics-brown.vercel.app/"
  }
]

export const skillGroups = [
  {
    "label": "Languages",
    "items": [
      "C / C++",
      "Python",
      "TypeScript",
      "JavaScript",
      "Java",
      "Swift",
      "SQL",
      "Bash"
    ]
  },
  {
    "label": "Cloud & DevOps",
    "items": [
      "AWS",
      "Docker",
      "Kubernetes",
      "Helm",
      "Datadog",
      "Linux",
      "CI/CD (GitHub Actions)"
    ]
  },
  {
    "label": "Dev Environment",
    "items": [
      "Cursor",
      "Herdr (TMUX)",
      "vim / neovim",
      "Pi coding agent",
      "Claude Code CLI"
    ]
  }
]

export const education = {
  "degree": "Bachelor of Engineering in Computer Engineering",
  "school": "Concordia University",
  "location": "Montreal, QC, Canada",
  "period": "Sep 2024 — Sep 2029 (Expected)"
}

export const certifications = [
  {
    "name": "Cisco CCNA",
    "status": "In progress"
  },
  {
    "name": "CKAD: Certified Kubernetes Application Developer",
    "status": "In progress"
  }
]

