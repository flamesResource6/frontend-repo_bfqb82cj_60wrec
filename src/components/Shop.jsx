import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { SlidersHorizontal } from 'lucide-react'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Shop() {
  const [items, setItems] = useState([])
  const [filters, setFilters] = useState({ gender: '', activity: '', min_temp: '', max_temp: '' })

  const load = async () => {
    const params = new URLSearchParams()
    Object.entries(filters).forEach(([k,v]) => { if (v) params.set(k, v) })
    const res = await fetch(`${baseUrl}/jackets?${params.toString()}`)
    const data = await res.json()
    setItems(data.items)
  }

  useEffect(() => { load() }, [])

  const apply = async () => { await load() }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-bold text-white">Shop Jackets</h1>
        <div className="flex items-center gap-2 text-slate-300"><SlidersHorizontal className="w-5 h-5" /> Filters</div>
      </div>

      {/* Filters */}
      <div className="mt-6 grid sm:grid-cols-4 gap-3">
        <select className="bg-white/5 border border-white/10 rounded-lg px-3 py-2" value={filters.gender} onChange={e=>setFilters({...filters, gender:e.target.value})}>
          <option value="">Gender</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="unisex">Unisex</option>
        </select>
        <select className="bg-white/5 border border-white/10 rounded-lg px-3 py-2" value={filters.activity} onChange={e=>setFilters({...filters, activity:e.target.value})}>
          <option value="">Activity</option>
          <option value="travel">Travel</option>
          <option value="city">City</option>
          <option value="hike">Hike</option>
          <option value="bike">Bike</option>
          <option value="commute">Commute</option>
          <option value="snow">Snow</option>
        </select>
        <input className="bg-white/5 border border-white/10 rounded-lg px-3 py-2" placeholder="Min temp (°C)" value={filters.min_temp} onChange={e=>setFilters({...filters, min_temp:e.target.value})} />
        <input className="bg-white/5 border border-white/10 rounded-lg px-3 py-2" placeholder="Max temp (°C)" value={filters.max_temp} onChange={e=>setFilters({...filters, max_temp:e.target.value})} />
        <button onClick={apply} className="sm:col-span-4 px-4 py-2 rounded-lg bg-sky-400 text-slate-900 font-semibold hover:bg-sky-300">Apply</button>
      </div>

      {/* Grid */}
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(it => (
          <Link key={it.slug} to={`/product/${it.slug}`} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
            <div className="aspect-[4/5] bg-[url('https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" />
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div className="font-semibold text-white">{it.name}</div>
                <div className="text-sky-200 text-sm">${it.price}</div>
              </div>
              <div className="mt-2 text-xs text-sky-100/70">{it.temperature_min_c}°C to {it.temperature_max_c}°C • up to {it.battery_life_hours}h</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
