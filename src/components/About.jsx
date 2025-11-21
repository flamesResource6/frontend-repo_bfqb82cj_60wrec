export default function About(){
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-white">About Amberarctic</h1>
      <div className="mt-6 grid md:grid-cols-2 gap-8 items-center">
        <div className="rounded-2xl h-72 bg-[url('https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=80&w=2400&auto=format&fit=crop')] bg-cover bg-center border border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM3MTU4MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] opacity-20 mix-blend-overlay" />
          <div className="absolute inset-0 flex items-center justify-center text-6xl font-black tracking-widest text-white/10">A</div>
        </div>
        <div>
          <p className="text-slate-300/90 leading-relaxed">Born on frozen expeditions where layers failed, Amberarctic set out to reinvent winter warmth. We engineer heated jackets that fuse technical performance with a sleek, minimal silhouette—made for the mountain and the metropolis.</p>
          <p className="text-slate-300/90 leading-relaxed mt-3">Every stitch, seam and circuit is tested in wind tunnels and real arctic storms. Because warmth shouldn’t be bulky—and style shouldn’t compromise survival.</p>
        </div>
      </div>
    </div>
  )
}
