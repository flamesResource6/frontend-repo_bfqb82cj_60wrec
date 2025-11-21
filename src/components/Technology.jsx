import { Battery, ShieldCheck, PlugZap, Flame, WashingMachine } from 'lucide-react'

export default function Technology(){
  const items = [
    {icon: Battery, title: 'Battery System', desc: 'High-density cells deliver stable heat with smart power management for all-day warmth.'},
    {icon: Flame, title: 'Heating Elements', desc: 'Flexible carbon fiber panels target core zones without adding bulk.'},
    {icon: ShieldCheck, title: 'Safety System', desc: 'Temp sensors and auto‑shutoff keep you safe in every condition.'},
    {icon: WashingMachine, title: 'Washability', desc: 'Electronics isolated. Remove battery. Machine washable on gentle.'},
    {icon: PlugZap, title: 'Charging', desc: 'Fast USB‑C. 80% in 45 minutes. Pass‑through power supported.'},
  ]
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-white">Technology</h1>
      <p className="mt-2 text-slate-300/90 max-w-2xl">A visual breakdown of how Amberarctic heat works—engineered for arctic performance with urban minimalism.</p>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {items.map((it, i) => (
          <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <it.icon className="w-6 h-6 text-sky-300" />
            <div className="mt-3 font-semibold text-white">{it.title}</div>
            <div className="text-sm text-slate-300/80">{it.desc}</div>
            <div className="mt-4 h-36 rounded-xl bg-[radial-gradient(circle_at_50%_30%,rgba(56,189,248,0.25),transparent_60%)] border border-white/10" />
          </div>
        ))}
      </div>
    </div>
  )
}
