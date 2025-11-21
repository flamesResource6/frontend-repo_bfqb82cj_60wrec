import { Leaf } from 'lucide-react'

export default function Sustainability(){
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-white">Sustainability</h1>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {["Responsible sourcing","Low‑waste cutting","Long‑life build"].map((t,i)=>(
          <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <Leaf className="w-6 h-6 text-sky-300" />
            <div className="mt-3 font-semibold text-white">{t}</div>
            <p className="text-sm text-slate-300/80">We partner with certified mills, optimize patterns to reduce scrap, and design for repairability and long wear.</p>
          </div>
        ))}
      </div>
      <div className="mt-8 rounded-2xl h-60 bg-[url('https://images.unsplash.com/photo-1431036101494-66a36de47def?q=80&w=2400&auto=format&fit=crop')] bg-cover bg-center border border-white/10" />
    </div>
  )
}
