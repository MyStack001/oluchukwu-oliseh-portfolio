"use client"
import { motion } from "framer-motion"
import Link from "next/link"

type Props = {
  title: string
  description: string
  tech: string[]
  github?: string
  live?: string
  behance?: string
}

const card = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 }
}

export default function ProjectCard({ title, description, tech, github, live, behance }: Props) {
  return (
    <motion.article
      className="border rounded-lg p-6 bg-white shadow-sm"
      variants={card}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
      <p className="text-sm text-slate-600 mt-2">{description}</p>
      <div className="flex flex-wrap gap-2 mt-4">
        {tech.map((t) => (
          <span key={t} className="text-xs bg-slate-100 px-2 py-1 rounded-full text-slate-700">
            {t}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-3 mt-4">
        {github && (
          <Link href={github} target="_blank" className="text-sm text-slate-600 hover: underline">
            GitHub
          </Link>
        )}
        {live && (
          <Link href={live} target="_blank" className="text-sm text-slate-600 hover: underline">
            Live
          </Link>
        )}
        {behance && (
          <Link href={behance} target="_blank" className="text-sm text-slate-600 hover: underline">
            Behance
          </Link>
        )}
      </div>
    </motion.article>
  )
}
