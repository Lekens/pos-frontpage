'use client'

import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight, Zap } from 'lucide-react'
import Button from '@/components/ui/Button'
import GlowCard from '@/components/ui/GlowCard'
import SectionLabel from '@/components/ui/SectionLabel'
import { fadeUp, staggerContainer } from '@/lib/animations'
import { PRICING, PRICING_FEATURES } from '@/lib/constants'

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          <motion.div variants={fadeUp} className="text-center space-y-4">
            <SectionLabel>Pricing</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Simple, transparent pricing
            </h2>
            <p className="text-slate-400 text-lg">One plan, everything included. No hidden fees.</p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <GlowCard className="p-8 sm:p-10 space-y-8" glowColor="rgba(99,102,241,0.12)">
              {/* Plan header */}
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
                      <Zap size={16} className="text-white" aria-hidden="true" />
                    </div>
                    <span className="text-white font-bold text-lg">Standard Plan</span>
                  </div>
                  <p className="text-slate-400 text-sm">Everything you need to run a modern retail store</p>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-bold text-white">
                    {PRICING.monthlyDisplay}
                  </div>
                  <div className="text-slate-400 text-sm">/month</div>
                </div>
              </div>

              {/* Feature list */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PRICING_FEATURES.map(feature => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <CheckCircle size={16} className="text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="space-y-3">
                <Button variant="whatsapp" size="lg" whatsapp className="w-full">
                  Start Free on WhatsApp
                  <ArrowRight size={18} aria-hidden="true" />
                </Button>
                <p className="text-center text-slate-500 text-xs">
                  No setup fee · No contract · Cancel anytime
                </p>
              </div>
            </GlowCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
