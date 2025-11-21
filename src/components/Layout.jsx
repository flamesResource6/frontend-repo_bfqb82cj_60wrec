import { Link, NavLink, useLocation } from 'react-router-dom'
import { ShoppingCart, Snowflake, Mountain, Zap, ShieldCheck, Leaf, Phone } from 'lucide-react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/technology', label: 'Technology' },
  { to: '/about', label: 'About' },
  { to: '/sustainability', label: 'Sustainability' },
  { to: '/sizing', label: 'Sizing' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
]

function FrostBadge({ children }) {
  return (
    <span className="px-3 py-1 rounded-full text-xs tracking-wide uppercase bg-white/5 border border-white/10 text-sky-100 backdrop-blur">
      {children}
    </span>
  )
}

export default function Layout({ children }) {
  const location = useLocation()
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Frosted gradient background with subtle aurora */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.15),transparent_60%)]" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_70%_20%,rgba(23,37,84,0.8),transparent_60%)]" />
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(120deg,transparent_0%,rgba(148,163,184,0.12)_40%,transparent_70%)]" />
      </div>

      {/* Top bar */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-sky-400 to-cyan-300 flex items-center justify-center text-slate-900 font-black">A</div>
            <div>
              <div className="font-extrabold tracking-tight text-white leading-none">Amberarctic</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-sky-200/70">Heated Jackets</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition border border-transparent hover:border-sky-300/20 hover:bg-white/5 ${
                    isActive ? 'text-sky-200 bg-white/5 border-sky-300/20' : 'text-slate-200'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <FrostBadge>Free shipping over $150</FrostBadge>
            <Link to="/checkout" className="relative p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10">
              <ShoppingCart className="w-5 h-5 text-sky-200" />
              <span className="absolute -top-1 -right-1 text-[10px] bg-sky-400 text-slate-900 rounded-full px-1.5 py-0.5">0</span>
            </Link>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="mt-20 border-t border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-4 gap-8">
          <div>
            <div className="font-extrabold text-white text-lg">Amberarctic</div>
            <p className="text-slate-300/80 mt-2 text-sm">Engineered warmth without bulk. Built for the city and the summit.</p>
            <div className="flex gap-2 mt-4">
              <FrostBadge>Waterproof</FrostBadge>
              <FrostBadge>Windproof</FrostBadge>
              <FrostBadge>Rechargeable</FrostBadge>
            </div>
          </div>
          <div>
            <div className="font-semibold text-slate-200 mb-3">Explore</div>
            <ul className="space-y-2 text-slate-300/80 text-sm">
              {navItems.slice(0,5).map(i => (
                <li key={i.to}><Link className="hover:text-sky-200" to={i.to}>{i.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-semibold text-slate-200 mb-3">Technology</div>
            <ul className="space-y-2 text-slate-300/80 text-sm">
              <li className="flex items-center gap-2"><Zap className="w-4 h-4 text-sky-300" /> Graphene-lined heat</li>
              <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-sky-300" /> Safety-first circuitry</li>
              <li className="flex items-center gap-2"><Snowflake className="w-4 h-4 text-sky-300" /> Arctic rated insulation</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-slate-200 mb-3">Support</div>
            <ul className="space-y-2 text-slate-300/80 text-sm">
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-sky-300" /> support@amberarctic.com</li>
              <li className="flex items-center gap-2"><Leaf className="w-4 h-4 text-sky-300" /> Responsible materials</li>
            </ul>
          </div>
        </div>
        <div className="py-4 text-center text-xs text-slate-400/80">© {new Date().getFullYear()} Amberarctic. All rights reserved.</div>
      </footer>

      {/* Floating frost streaks */}
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-30">
        <div className="absolute -right-20 top-10 h-1 w-72 bg-gradient-to-r from-transparent via-sky-300/40 to-transparent blur-sm animate-pulse" />
        <div className="absolute left-10 bottom-24 h-1 w-56 bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent blur-sm animate-pulse" />
      </div>
    </div>
  )
}
