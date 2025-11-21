export default function FAQ(){
  const faqs = [
    {q:'How long does the battery last?', a:'Up to 12 hours on low, 8 on medium, 4 on high depending on ambient temperature.'},
    {q:'Is it safe?', a:'Yes. Multiple temperature sensors and auto‑shutoff. CE and FCC compliant.'},
    {q:'Can I wash it?', a:'Remove the battery and machine wash cold on gentle. Hang dry.'},
    {q:'How warm is it?', a:'Rated for wind chills down to -40°C when used with appropriate base layers.'},
    {q:'Shipping times?', a:'Ships in 1–2 business days from regional warehouses.'},
    {q:'Warranty?', a:'No formal warranty, but every jacket is quality‑checked and supported by our service team.'},
  ]
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-white">FAQ</h1>
      <div className="mt-6 divide-y divide-white/10">
        {faqs.map((f,i)=>(
          <details key={i} className="py-4">
            <summary className="cursor-pointer font-semibold text-white">{f.q}</summary>
            <p className="mt-2 text-slate-300/90">{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  )
}
