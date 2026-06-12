"use client"
import SectionWrapper from "../components/SectionWrapper"
import ProjectCard from "../components/ProjectCard"

const projects = [
  {
    title: "Pipsoul",
    description: "A trade journaling and analytics platform for forex traders built with Next.js and Supabase.",
    tech: ["Next.js", "Supabase", "Tailwind CSS"],
    github: "https://github.com/obaahshadrach416/pipsoul",
  },
  {
    title: "Useoniix",
    description: "A modern web product focused on UI/UX and frontend polish — a design-first frontend project.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/obaahshadrach416/useoniix",
  },
  {
    title: "EasyShip",
    description: "A logistics/shipping interface concept focusing on clean UX and tracking experience.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    github: "https://github.com/obaahshadrach416/easyship",
  },
  {
    title: "DRO Health App",
    description: "UI/UX redesign case study for a healthcare mobile/web experience.",
    tech: ["Figma", "React", "Design System"],
    github: "https://github.com/obaahshadrach416/dro-health-app",
  },
  {
    title: "GlowPay",
    description: "A fintech-inspired payment interface focused on clean, fast user experience.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/obaahshadrach416/glowpay",
  },
]

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <div>
        <h2 className="text-2xl font-semibold text-slate-900">Projects</h2>
        <p className="mt-2 text-slate-600 max-w-2xl">Selected work showcasing product-focused frontend development and UI/UX case studies.</p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} title={p.title} description={p.description} tech={p.tech} github={p.github} live={p.live} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
