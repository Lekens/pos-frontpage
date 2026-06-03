'use client'

import { motion } from 'framer-motion'
import { fadeIn } from '@/lib/animations'
import { STATS } from '@/lib/constants'

export default function StatsBar() {
  return (
    <section className="py-16 bg-slate-950/80 border-y border-slate-800/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-slate-800"
        >
          {STATS.map(stat => (
            <div key={stat.label} className="flex flex-col items-center text-center px-4">
              <span className="text-3xl sm:text-4xl font-bold text-white tabular-nums">
                {stat.value}<span className="text-indigo-400">{stat.suffix}</span>
              </span>
              <span className="text-sm text-slate-400 mt-1">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
