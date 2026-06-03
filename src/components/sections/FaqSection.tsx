'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import { fadeUp, staggerContainer } from '@/lib/animations'
import { FAQ_ITEMS } from '@/lib/constants'

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          <motion.div variants={fadeUp} className="text-center space-y-4">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Frequently asked questions
            </h2>
          </motion.div>

          <motion.div variants={fadeUp} className="space-y-3">
            {FAQ_ITEMS.map((item, i) => (
              <div
                key={i}
                className="rounded-xl border border-slate-800 bg-slate-900/60 overflow-hidden"
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
                  aria-expanded={open === i}
                >
                  <span className="text-white font-medium text-sm sm:text-base">{item.question}</span>
                  <ChevronDown
                    size={18}
                    className={`text-slate-400 shrink-0 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                    >
                      <p className="px-6 pb-5 text-slate-400 text-sm leading-relaxed border-t border-slate-800 pt-4">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
