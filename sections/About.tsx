import SectionWrapper from "../components/SectionWrapper"

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-slate-900">About</h2>
        <p className="mt-4 text-slate-600">I’m a frontend developer and product designer specializing in building polished, performant web experiences. I focus on creating clear user interfaces and delightful interactions — from prototyping in Figma to shipping production-ready React/Next.js applications. I enjoy collaborating with teams and turning product goals into simple, elegant interfaces.</p>
      </div>
    </SectionWrapper>
  )
}
