'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'
import Button from '@/components/ui/Button'
import { fadeUp, staggerContainer } from '@/lib/animations'

const TRUST_PILLS = ['50+ stores onboarded', '10,000+ daily transactions', '99.9% uptime guarantee']

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden mesh-gradient pt-16">
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Eyebrow badge */}
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              Built for Nigerian Retail
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight"
          >
            The POS Built for{' '}
            <span className="gradient-text">Nigerian Retail</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={fadeUp}
            className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            Scan faster, checkout smarter, and never lose a sale. POS-Choice gives your store a cloud-based point of sale — built specifically for supermarkets and mini-marts in Nigeria.
          </motion.p>

          {/* CTA row */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="whatsapp" size="lg" whatsapp className="w-full sm:w-auto">
              Start Free on WhatsApp
              <ArrowRight size={18} aria-hidden="true" />
            </Button>
            <Button variant="secondary" size="lg" href="#how-it-works" className="w-full sm:w-auto">
              See How It Works
            </Button>
          </motion.div>

          {/* Trust pills */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-3 pt-2">
            {TRUST_PILLS.map(pill => (
              <span key={pill} className="flex items-center gap-1.5 text-sm text-slate-400">
                <CheckCircle size={14} className="text-emerald-500 shrink-0" aria-hidden="true" />
                {pill}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#020617] to-transparent pointer-events-none" aria-hidden="true" />
    </section>
  )
}
