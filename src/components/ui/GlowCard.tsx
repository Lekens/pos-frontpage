import { type ReactNode } from 'react'

interface GlowCardProps {
  children:   ReactNode
  className?: string
  glowColor?: string
}

export default function GlowCard({ children, className = '', glowColor = 'rgba(99,102,241,0.08)' }: GlowCardProps) {
  return (
    <div
      className={`relative rounded-2xl border border-slate-800 bg-slate-900/80 backdrop-blur-sm transition-all duration-300 hover:border-indigo-500/40 ${className}`}
      style={{ '--glow-color': glowColor } as React.CSSProperties}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px ${glowColor}`
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.boxShadow = 'none'
      }}
    >
      {children}
    </div>
  )
}
