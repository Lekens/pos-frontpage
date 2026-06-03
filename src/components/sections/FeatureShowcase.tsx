'use client'

import { motion } from 'framer-motion'
import { ScanBarcode, LayoutDashboard, Package, Users, Receipt, BarChart2 } from 'lucide-react'
import GlowCard from '@/components/ui/GlowCard'
import SectionLabel from '@/components/ui/SectionLabel'
import { staggerContainer, fadeUp } from '@/lib/animations'
import { FEATURES } from '@/lib/constants'

const ICONS: Record<string, React.ReactNode> = {
  ScanBarcode:    <ScanBarcode size={24} />,
  LayoutDashboard:<LayoutDashboard size={24} />,
  Package:        <Package size={24} />,
  Users:          <Users size={24} />,
  Receipt:        <Receipt size={24} />,
  BarChart2:      <BarChart2 size={24} />,
}

const ICON_COLORS = [
  'text-indigo-400 bg-indigo-500/10',
  'text-violet-400 bg-violet-500/10',
  'text-emerald-400 bg-emerald-500/10',
  'text-blue-400 bg-blue-500/10',
  'text-amber-400 bg-amber-500/10',
  'text-pink-400 bg-pink-500/10',
]

export default function FeatureShowcase() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={fadeUp} className="text-center space-y-4">
            <SectionLabel>Features</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Everything you need to run your store
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              From checkout to reports, POS-Choice covers every part of your retail operation.
            </p>
          </motion.div>

          {/* Feature grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f, i) => (
              <motion.div key={f.title} variants={fadeUp}>
                <GlowCard className="h-full p-6 space-y-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${ICON_COLORS[i]}`}>
                    {ICONS[f.icon]}
                  </div>
                  <h3 className="text-white font-semibold text-lg">{f.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{f.description}</p>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
