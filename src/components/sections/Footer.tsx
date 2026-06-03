import { Zap, MessageCircle } from 'lucide-react'
import { SITE_NAME, FOOTER_LINKS, buildWhatsAppUrl } from '@/lib/constants'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-800/60 bg-slate-950 py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shrink-0">
                <Zap size={16} className="text-white" aria-hidden="true" />
              </div>
              <span className="text-white font-bold text-lg gradient-text">{SITE_NAME}</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              The modern POS system built for Nigerian supermarkets and retail stores.
            </p>
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <MessageCircle size={16} aria-hidden="true" />
              Chat with us on WhatsApp
            </a>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([group, links]) => (
            <div key={group} className="space-y-4">
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider">{group}</h3>
              <ul className="space-y-2.5">
                {links.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-white text-sm transition-colors"
                      {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {year} {SITE_NAME}. All rights reserved.</p>
          <p>Made with ❤ for Nigerian retail</p>
        </div>
      </div>
    </footer>
  )
}
