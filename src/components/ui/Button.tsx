'use client'

import { type ReactNode } from 'react'
import { buildWhatsAppUrl } from '@/lib/constants'

interface ButtonProps {
  children:  ReactNode
  variant?:  'primary' | 'secondary' | 'whatsapp' | 'ghost'
  size?:     'sm' | 'md' | 'lg'
  href?:     string
  whatsapp?: boolean
  onClick?:  () => void
  className?: string
  disabled?:  boolean
  loading?:   boolean
  type?:     'button' | 'submit'
}

export default function Button({
  children, variant = 'primary', size = 'md',
  href, whatsapp, onClick, className = '',
  disabled, loading, type = 'button',
}: ButtonProps) {
  const base = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-950 cursor-pointer select-none'

  const variants = {
    primary:   'bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white shadow-lg shadow-indigo-900/40 focus:ring-indigo-500',
    secondary: 'border border-slate-600 text-slate-300 hover:border-indigo-500 hover:text-white bg-transparent',
    whatsapp:  'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white shadow-lg shadow-green-900/40 focus:ring-green-500',
    ghost:     'text-slate-400 hover:text-white bg-transparent',
  }

  const sizes = {
    sm: 'gap-1.5 h-9 px-4 text-sm',
    md: 'gap-2 h-11 px-6 text-sm',
    lg: 'gap-2.5 h-13 px-8 text-base',
  }

  const cls = `${base} ${variants[variant]} ${sizes[size]} ${disabled || loading ? 'opacity-50 cursor-not-allowed' : ''} ${className}`

  const target = whatsapp ? buildWhatsAppUrl() : href

  if (target) {
    return (
      <a href={target} target={whatsapp ? '_blank' : undefined} rel={whatsapp ? 'noopener noreferrer' : undefined} className={cls}>
        {loading ? <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" /> : children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled || loading} className={cls}>
      {loading ? <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" /> : children}
    </button>
  )
}
