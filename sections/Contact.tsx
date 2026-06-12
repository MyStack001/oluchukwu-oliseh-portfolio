"use client"
import SectionWrapper from "../components/SectionWrapper"
import ContactForm from "../components/ContactForm"

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-slate-900">Contact</h2>
        <p className="mt-2 text-slate-600">Have a project or just want to say hi? Fill the form or email me at 
          <a className="text-sky-600 hover: underline" href="mailto:obaahshadrach416@gmail.com">
            obaahshadrach416@gmail.com</a>
          .</p>
        <div className="mt-6">
          <ContactForm />
        </div>
      </div>
    </SectionWrapper>
  )
}
