import SectionWrapper from "../components/SectionWrapper"

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript(ES6+)",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Framer Motion",
  "Supabase",
  "Git/GitHub",
  "Figma",
  "Responsive Design",
  "Accessibility(WCAG)",
  "PostgreSQL",
  "REST APIs",
  "Authentication & Authorization",
  "Database Design",
  
]

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <div>
        <h2 className="text-2xl font-semibold text-slate-900">Skills</h2>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl">
          {skills.map((s) => (
            <div key={s} className="px-3 py-2 bg-slate-50 rounded-md text-sm text-slate-700">{s}</div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
