"use client"
import SectionWrapper from "../components/SectionWrapper"
import ProjectCard from "../components/ProjectCard"

const projects = [
  {
    title: "Pipsoul",
    description: "A trade journaling and analytics platform for forex traders built with Next.js and Supabase.",
    tech: ["Next.js", "Supabase", "Tailwind CSS"],
    github: "https://github.com/obaahshadrach416/pipsoul",
    live: "https://pipsoul-dashboard.vercel.app/dashboard",
  },
  {
    title: "Useoniix",
    description: "A modern web product focused on UI/UX and frontend polish — a design-first frontend project.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    live: "https://useoniix.com/",
  },
  {
    title: "EasyShip",
    description: "A logistics/shipping interface concept focusing on clean UX and tracking experience.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    live: "https://easyship.live/",
  },
  {
    title: "DRO Health App",
    description: "UI/UX redesign case study for a healthcare mobile/web experience.",
    tech: ["Figma", "React", "Design System"],
    behance: "https://www.behance.net/gallery/238761839/DRO-Health-App-Feature-Extension",
  },
  {
    title: "GlowPay",
    description: "A modern mobile wallet experience created to make everyday payments feel effortless, secure and a little more magical.",
    tech: ["Figma"],
    behance: "https://www.behance.net/gallery/237297515/GlowPay-Fintech-App-UIUX-Case-Study",
  },
  {
    title: "FlowBill",
    description: "A modern billing and revenue-tracking platform designed to simplify how businesses manage invoices, monitor transactions, and understand their financial performance.",
    tech: ["Figma"],
    behance: "https://www.behance.net/gallery/240075781/Flowbill-Smart-Finance-Invoicing-Platform-Design",
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
            <ProjectCard key={p.title} title={p.title} description={p.description} tech={p.tech} github={p.github} live={p.live} behance={p.behance}/>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
