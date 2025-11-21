import { Link } from 'react-router-dom'
import { ArrowRight, Star, ThermometerSnowflake, Shield, Battery, Wind, Flame, Sparkles } from 'lucide-react'

function Stat({ label, value }) {
  return (
    <div className="text-center">
      <div className="text-3xl font-extrabold text-white">{value}</div>
      <div className="text-xs uppercase tracking-widest text-sky-100/70">{label}</div>
    </div>
  )
}

export default function Homepage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=3270&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="absolute inset-0 -z-10 bg-slate-900/70" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_10%,rgba(56,189,248,0.3),transparent_40%)]" />
        {/* Snow particles */}
        <div className="pointer-events-none absolute inset-0 opacity-30">
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={i} className="absolute w-1 h-1 bg-white rounded-full animate-bounce" style={{
              top: `${Math.random()*100}%`, left: `${Math.random()*100}%`, animationDuration: `${6 + Math.random()*6}s`
            }} />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sky-100 backdrop-blur mb-6">
              <Sparkles className="w-4 h-4" /> New season drop
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white drop-shadow-lg">
              Engineered for the cold. Powered by innovation.
            </h1>
            <p className="mt-6 text-lg text-sky-100/90 max-w-2xl">
              Premium heated jackets for extreme cold and urban winter performance. Sleek, minimal and powerful—warmth without bulk.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/shop" className="px-5 py-3 rounded-lg bg-sky-400 text-slate-900 font-semibold hover:bg-sky-300 transition inline-flex items-center gap-2">
                Shop Now <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/technology" className="px-5 py-3 rounded-lg bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 transition">
                Explore Technology
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
              <Stat label="-40°C Rated" value="Arctic" />
              <Stat label="Up to" value="12h Battery" />
              <Stat label="Water/Wind" value="Proof" />
            </div>
          </div>
        </div>
      </section>

      {/* Product showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-white">Bestsellers</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {['glacier-pro-3','aurora-lite','arctic-x'].map((slug) => (
            <Link key={slug} to={`/product/${slug}`} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
              <div className="aspect-[4/5] bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" />
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="font-semibold text-white">{slug.replaceAll('-', ' ')}</div>
                  <div className="text-sky-200 text-sm">$299–$399</div>
                </div>
                <div className="mt-2 text-xs text-sky-100/70">-30°C to 5°C • up to 12h battery</div>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-t from-slate-900/60 to-transparent" />
            </Link>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: ThermometerSnowflake, title: 'Arctic Rated', desc: 'Tested to -40°C wind chills with active heat zones.' },
            { icon: Battery, title: 'All-day Power', desc: 'Up to 12 hours on low with fast USB‑C charging.' },
            { icon: Wind, title: 'Wind + Water Proof', desc: 'Sealed seams and storm zippers defy the elements.' },
            { icon: Shield, title: 'Built to Last', desc: 'Reinforced stress points and abrasion resistant shell.' },
          ].map((f, i) => (
            <div key={i} className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <f.icon className="w-6 h-6 text-sky-300" />
              <div className="mt-3 font-semibold text-white">{f.title}</div>
              <div className="text-sm text-slate-300/80">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Lifestyle + reviews */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-8">
        <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
          <div className="aspect-[16/10] bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM3MTU4MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center" />
          <div className="p-6">
            <div className="text-sky-200 text-sm uppercase">Urban winter</div>
            <div className="text-white font-semibold text-lg">Sleek warmth for city streets</div>
            <p className="text-slate-300/80 text-sm mt-2">Minimal silhouette with technical performance. Layer less, move more.</p>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
          <div className="aspect-[16/10] bg-[url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2400&auto=format&fit=crop')] bg-cover bg-center" />
          <div className="p-6">
            <div className="text-sky-200 text-sm uppercase">Reviews</div>
            <div className="flex items-center gap-1 text-amber-300">
              {Array.from({ length: 5 }).map((_, i) => (<Star key={i} fill="currentColor" className="w-5 h-5" />))}
            </div>
            <p className="text-white font-medium mt-2">“The heat zones kept me warm in -25°C Montreal nights. Battery lasted through my commute and errands.”</p>
            <p className="text-slate-300/80 text-sm mt-2">— Jamie, Canada</p>
          </div>
        </div>
      </section>

      {/* Comparison + durability */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <div className="font-semibold text-white">Cold Comparison</div>
            <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-white/10">
                <div className="text-sky-200">0°C</div>
                <div className="text-slate-300/80">Light heat</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/60 border border-white/10">
                <div className="text-sky-200">-10°C</div>
                <div className="text-slate-300/80">Medium heat</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/60 border border-white/10">
                <div className="text-sky-200">-30°C</div>
                <div className="text-slate-300/80">Max heat</div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <div className="font-semibold text-white">Durability Test</div>
            <p className="text-slate-300/80 text-sm mt-2">Shell abrasion, zipper pull stress, water column pressure and wind tunnel tested to exceed mountain standards.</p>
            <div className="mt-4 h-2 rounded bg-slate-800">
              <div className="h-full w-11/12 rounded bg-gradient-to-r from-sky-400 to-cyan-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Brand story teaser */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="text-sky-200 text-sm uppercase">Our Story</div>
            <h3 className="mt-2 text-2xl md:text-3xl font-bold text-white">Born from the Arctic. Built for the city.</h3>
            <p className="mt-4 text-slate-300/90">Amberarctic began on frozen expeditions where traditional layers failed. We engineered a system that delivers targeted heat, premium materials and a silhouette worthy of city streets.</p>
            <Link to="/about" className="mt-6 inline-block px-5 py-3 rounded-lg bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 transition">Read the story</Link>
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM3MTU4MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center h-72" />
        </div>
      </section>
    </div>
  )
}
