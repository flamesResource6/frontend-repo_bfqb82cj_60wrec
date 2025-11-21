import { useState } from 'react'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Sizing(){
  const [form, setForm] = useState({height_cm:'', weight_kg:'', build:'regular'})
  const [result, setResult] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    const res = await fetch(`${baseUrl}/size/recommend`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({
      height_cm: parseInt(form.height_cm,10),
      weight_kg: parseInt(form.weight_kg,10),
      build: form.build
    }) })
    const data = await res.json()
    setResult(data.recommended)
  }

  return (
    <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-white">Sizing Guide</h1>
      <p className="text-slate-300/90 mt-2">Input your details to get a recommended size.</p>
      <form onSubmit={submit} className="mt-6 space-y-3">
        <input required className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10" placeholder="Height (cm)" value={form.height_cm} onChange={e=>setForm({...form, height_cm:e.target.value})} />
        <input required className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10" placeholder="Weight (kg)" value={form.weight_kg} onChange={e=>setForm({...form, weight_kg:e.target.value})} />
        <select className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10" value={form.build} onChange={e=>setForm({...form, build:e.target.value})}>
          <option value="slim">Slim</option>
          <option value="regular">Regular</option>
          <option value="athletic">Athletic</option>
          <option value="broad">Broad</option>
        </select>
        <button className="w-full px-4 py-2 rounded-lg bg-sky-400 text-slate-900 font-semibold">Get size</button>
      </form>
      {result && (
        <div className="mt-6 p-4 rounded-2xl bg-white/5 border border-white/10 text-white font-semibold">
          Recommended size: {result}
        </div>
      )}
    </div>
  )
}
