export default function Checkout(){
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-white">Checkout</h1>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className="backdrop-blur bg-white/5 border border-white/10 rounded-2xl p-6">
          <div className="text-slate-200 font-semibold mb-3">Shipping</div>
          <div className="grid grid-cols-2 gap-3">
            <input className="col-span-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10" placeholder="Full name" />
            <input className="col-span-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10" placeholder="Address" />
            <input className="px-3 py-2 rounded-lg bg-white/5 border border-white/10" placeholder="City" />
            <input className="px-3 py-2 rounded-lg bg-white/5 border border-white/10" placeholder="Postal code" />
            <input className="col-span-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10" placeholder="Country" />
          </div>
        </div>
        <div className="backdrop-blur bg-gradient-to-br from-slate-900/80 to-slate-800/80 border border-white/10 rounded-2xl p-6">
          <div className="text-slate-200 font-semibold mb-3">Payment</div>
          <div className="grid grid-cols-2 gap-3">
            <input className="col-span-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10" placeholder="Card number" />
            <input className="px-3 py-2 rounded-lg bg-white/5 border border-white/10" placeholder="MM/YY" />
            <input className="px-3 py-2 rounded-lg bg-white/5 border border-white/10" placeholder="CVC" />
            <button className="col-span-2 px-4 py-2 rounded-lg bg-sky-400 text-slate-900 font-semibold">Pay Now</button>
          </div>
          <div className="mt-4 text-xs text-slate-400/80">Secure checkout • Encrypted • PCI compliant</div>
        </div>
      </div>
    </div>
  )
}
