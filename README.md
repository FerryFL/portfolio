# 🌐 Ferry Febrian — Personal Portfolio

A modern, animated personal portfolio website built with **Next.js 16**, **TypeScript**, and **Tailwind CSS v4**. Showcasing real-world projects, tech stack, and professional experience — complete with smooth animations and a polished UI.

🔗 **Live Site**: [https://github.com/FerryFL/portfolio](https://github.com/FerryFL/portfolio)

---

## ✨ Features

- ⚡ **Next.js 16** App Router for fast, server-rendered pages
- 🎨 **Tailwind CSS v4** utility-first styling
- 🌙 **Dark / Light mode** via `next-themes`
- 🎬 **Smooth animations** powered by Framer Motion & AOS
- 🧩 **Reusable UI components** with Radix UI & shadcn/ui
- 📱 **Fully responsive** on all screen sizes
- 🗂️ **Project detail pages** with dynamic routing (`/project/[id]`)
- 💫 **Welcome / splash screen** animation on first load

---

## 🛠️ Tech Stack

### Languages & Frameworks
`TypeScript` `JavaScript` `C#` `Python` `ASP.NET` `React JS` `Vue JS` `Next JS` `Nuxt JS` `Flask`

### Tools & Libraries
| Category | Technology |
|---|---|
| Framework | Next.js 16 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 |
| UI Components | Radix UI, shadcn/ui |
| Animations | Framer Motion, AOS |
| Icons | Lucide React |
| Notifications | Sonner |
| Linting | ESLint 9 |

---

## 🗂️ Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Home page (Welcome → Dashboard)
│   ├── globals.css         # Global styles
│   └── project/            # Dynamic project detail pages
├── components/
│   ├── WelcomeScreen.tsx   # Animated splash / welcome screen
│   ├── dashboard/
│   │   ├── AnimatedBackground.tsx
│   │   ├── LandingPages.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   └── ui/                 # Reusable shadcn/ui primitives
├── constants/
│   └── projects.ts         # Project & tech stack data
├── lib/                    # Utility functions
└── public/
    └── img/                # Project thumbnails & tech icons
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+
- **npm** / yarn / pnpm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/FerryFL/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📜 Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build optimized production bundle |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint code checks |

---

## 🗃️ Featured Projects

| Project | Description |
|---|---|
| **Kawan Lama E-Recruitment** | Career website managing the full recruitment process for Kawan Lama Group |
| **Kawan Lama Academy** | Internal learning platform serving 30,000+ employees |
| **POSnova** | AI-powered Point of Sales web application *(skripsi project)* |
| **My Khodam** | Fun entertainment website generating a "khodam" based on your name |
| **One Percent** | Self-improvement productivity website |

---

## 🚢 Deployment

This project is optimized for deployment on **Vercel**:

```bash
npm run build
```

Or connect your GitHub repo directly to [Vercel](https://vercel.com) for automatic deployments on every push.

---

## 📬 Contact

- **GitHub**: [@FerryFL](https://github.com/FerryFL)

---

> © 2026 Ferry Febrian. All Rights Reserved.
