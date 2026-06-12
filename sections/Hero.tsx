"use client"
import SectionWrapper from "../components/SectionWrapper"
import Button from "../components/Button"
import Link from "next/link"

export default function Hero() {
  return (
    <SectionWrapper id="hero">
      <div className="text-center">
        <p className="text-sm text-sky-600 font-medium">Hi, I’m</p>
        <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold text-slate-900">Shadrach Obaah</h1>
        <p className="mt-2 text-xl text-slate-700">Frontend Developer & Product Designer</p>
        <p className="mt-4 max-w-2xl mx-auto text-slate-600">I build responsive, accessible interfaces focused on delightful user experiences using modern frontend tools and product design principles.</p>
        <div className="mt-6 flex justify-center gap-3">
          <a href="#projects"><Button>View Projects</Button></a>
          <a href="#contact"><Button variant="ghost">Contact Me</Button></a>
        </div>
      </div>
    </SectionWrapper>
  )
}
