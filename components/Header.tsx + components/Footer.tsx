'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const pathname = usePathname()
  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="Ocean Studio" className="h-8" />
          <span className="font-bold text-sky-600">Ocean Studio</span>
        </Link>
        <nav className="flex gap-4">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={`hover:text-sky-600 ${pathname === l.href ? 'text-sky-600 font-semibold' : 'text-slate-700'}`}>
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
