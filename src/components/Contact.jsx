export default function Contact(){
  return (
    <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
      <div className="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.3),transparent_40%)]" />
      <h1 className="text-3xl font-bold text-white">Contact</h1>
      <p className="text-slate-300/90 mt-2">We typically reply within 24 hours.</p>
      <form className="mt-6 space-y-3">
        <input className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10" placeholder="Your name" />
        <input className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10" placeholder="Email" />
        <textarea rows="5" className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10" placeholder="How can we help?" />
        <button className="w-full px-4 py-2 rounded-lg bg-sky-400 text-slate-900 font-semibold">Send</button>
      </form>
      <div className="mt-6 text-sm text-slate-300/80">
        support@amberarctic.com • @amberarctic
      </div>
    </div>
  )
}
