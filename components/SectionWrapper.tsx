"use client"
import { ReactNode } from "react"
import { motion } from "framer-motion"

type Props = {
  id?: string
  children: ReactNode
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function SectionWrapper({ id, children }: Props) {
  return (
    <section id={id} className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6 }}
        variants={fadeUp}
      >
        {children}
      </motion.div>
    </section>
  )
}
