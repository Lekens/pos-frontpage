'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'
import { fadeUp, staggerContainer } from '@/lib/animations'

export default function CtaBanner() {
  return (
    <section className="py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            variants={fadeUp}
            className="relative rounded-3xl overflow-hidden p-10 sm:p-16 text-center"
            style={{
              background: 'linear-gradient(135deg, #4f46e5, #7c3aed, #6d28d9)',
            }}
          >
            {/* Subtle grid overlay */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                backgroundSize: '32px 32px',
              }}
              aria-hidden="true"
            />

            <div className="relative z-10 space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                Ready to transform your store?
              </h2>
              <p className="text-indigo-200 text-lg max-w-xl mx-auto">
                Join 50+ Nigerian stores already using POS-Choice. Set up in minutes — no tech skills needed.
              </p>
              <Button variant="whatsapp" size="lg" whatsapp className="inline-flex">
                Start Free on WhatsApp
                <ArrowRight size={18} aria-hidden="true" />
              </Button>
              <p className="text-indigo-300 text-sm">No credit card required · Cancel anytime</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
