import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Shield, Wind, Battery, Feather, Ruler, RotateCw, ZoomIn, Flame, Loader2 } from 'lucide-react'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Feature({ icon: Icon, label }) {
  return (
    <div className="flex items-center gap-2 text-slate-200 text-sm">
      <Icon className="w-4 h-4 text-sky-300" /> {label}
    </div>
  )
}

export default function Product() {
  const { slug } = useParams()
  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)
  const [angle, setAngle] = useState(0)

  useEffect(() => {
    const load = async () => {
      setLoading(true)
      const res = await fetch(`${baseUrl}/jackets/${slug}`)
      const data = await res.json()
      setItem(data)
      setLoading(false)
    }
    load()
  }, [slug])

  if (loading) return <div className="flex items-center justify-center py-20 text-slate-300"><Loader2 className="w-6 h-6 animate-spin" /></div>
  if (!item) return <div className="text-slate-300 py-20 text-center">Not found</div>

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* 360 view */}
        <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 p-4">
          <div className="aspect-square relative flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM3MTU4MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center">
            <div className="absolute inset-0 bg-slate-900/30" />
            <div className="absolute top-3 right-3 px-2 py-1 rounded bg-black/40 text-white text-xs flex items-center gap-1"><RotateCw className="w-3 h-3" /> 360°</div>
            <img
              src={`https://picsum.photos/seed/${slug}-${Math.round(angle)} /600/600`}
              alt={item.name}
              className="w-2/3 object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
            />
          </div>
          <input type="range" min="0" max="360" value={angle} onChange={e=>setAngle(e.target.value)} className="w-full mt-3" />
          <div className="text-xs text-slate-400/80 mt-1">Drag to rotate</div>
        </div>

        {/* Details */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-white">{item.name}</h1>
          <div className="mt-2 text-sky-200">${item.price}</div>

          <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
            <Feature icon={Shield} label="Waterproof" />
            <Feature icon={Wind} label="Windproof" />
            <Feature icon={Battery} label={`Up to ${item.battery_life_hours}h`} />
            <Feature icon={Feather} label="Lightweight" />
          </div>

          {/* Heating zone diagram (simplified) */}
          <div className="mt-6 rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-4">
            <div className="text-slate-200 font-semibold">Heating Zones</div>
            <div className="mt-3 grid grid-cols-3 gap-3">
              {['Upper Back','Chest','Pockets'].map(z => (
                <div key={z} className="relative h-28 rounded-xl bg-[url('https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
                  <div className="absolute bottom-2 left-2 px-2 py-1 rounded bg-rose-500/20 border border-rose-300/30 text-rose-100 text-xs inline-flex items-center gap-1">
                    <Flame className="w-3 h-3" /> {z}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Size guide */}
          <div className="mt-6 p-4 rounded-2xl bg-white/5 border border-white/10">
            <div className="font-semibold text-white">Size Guide</div>
            <div className="mt-2 grid grid-cols-3 gap-2 text-sm">
              {item.sizes.map(s => (
                <div key={s} className="px-3 py-2 rounded-lg bg-slate-900/60 border border-white/10 text-center">{s}</div>
              ))}
            </div>
            <div className="mt-2 text-xs text-slate-400/80">Model is 180cm / 75kg wearing M</div>
          </div>

          {/* Shipping & returns */}
          <div className="mt-6 p-4 rounded-2xl bg-white/5 border border-white/10 text-sm text-slate-300/90">
            <div className="font-semibold text-white">Shipping & Returns</div>
            <p className="mt-1">Free shipping over $150. 30-day returns. Ships in 1–2 business days.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
