import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t mt-12 py-6 text-sm text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>© {new Date().getFullYear()} Oluchukwu Oliseh</div>
        <div className="flex gap-4">
          <Link href="https://github.com/MyStack001">GitHub</Link>
          <Link href="https://www.linkedin.com/in/obaahshadrach416">LinkedIn</Link>
        </div>
      </div>
    </footer>
  )
}
