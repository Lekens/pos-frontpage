'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Zap } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from './Button'
import { SITE_NAME, NAV_LINKS } from '@/lib/constants'

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-slate-950/95 backdrop-blur-md border-b border-slate-800/60 shadow-xl' : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 text-white font-bold text-lg shrink-0">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
              <Zap size={16} className="text-white" aria-hidden="true" />
            </div>
            <span className="gradient-text">{SITE_NAME}</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-400 hover:text-white transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="whatsapp" size="sm" whatsapp>
              Start Free Trial
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
            onClick={() => setMobileOpen(v => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.25 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-slate-950 border-l border-slate-800 flex flex-col p-6 md:hidden"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-white font-bold">{SITE_NAME}</span>
                <button onClick={() => setMobileOpen(false)} className="text-slate-400 hover:text-white" aria-label="Close">
                  <X size={20} />
                </button>
              </div>
              <nav className="flex flex-col gap-4 flex-1">
                {NAV_LINKS.map(link => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-slate-300 hover:text-white font-medium py-2 border-b border-slate-800 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <Button variant="whatsapp" size="lg" whatsapp className="w-full mt-6">
                Start Free on WhatsApp
              </Button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
