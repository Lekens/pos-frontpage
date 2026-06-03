'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Package, ShoppingCart } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import { staggerContainer, fadeUp } from '@/lib/animations'
import { HOW_IT_WORKS } from '@/lib/constants'

const ICONS: Record<string, React.ReactNode> = {
  MessageCircle: <MessageCircle size={28} />,
  Package:       <Package size={28} />,
  ShoppingCart:  <ShoppingCart size={28} />,
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 bg-slate-950/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          <motion.div variants={fadeUp} className="text-center space-y-4">
            <SectionLabel>How It Works</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Get started in 3 simple steps
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              No IT expertise needed. Most stores are selling within 30 minutes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting line on desktop */}
            <div className="hidden md:block absolute top-14 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px bg-gradient-to-r from-indigo-600/40 via-violet-500/40 to-indigo-600/40" aria-hidden="true" />

            {HOW_IT_WORKS.map((step, i) => (
              <motion.div key={step.step} variants={fadeUp} className="relative flex flex-col items-center text-center gap-5">
                {/* Step number bubble */}
                <div className="relative z-10 w-28 h-28 rounded-2xl bg-slate-900 border border-slate-700 flex flex-col items-center justify-center gap-2 shadow-xl">
                  <div className="text-indigo-400">{ICONS[step.icon]}</div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{step.step}</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-white font-semibold text-lg">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                </div>
                {/* Mobile connector */}
                {i < HOW_IT_WORKS.length - 1 && (
                  <div className="md:hidden w-px h-8 bg-gradient-to-b from-indigo-500/40 to-transparent" aria-hidden="true" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
