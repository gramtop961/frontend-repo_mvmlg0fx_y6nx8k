import { Star, BadgePercent, ShieldCheck, Truck } from 'lucide-react'

const products = [
  { id: 1, title: 'iPhone 15 Pro', price: 999, rating: 4.8, tag: 'Hot', img: 'https://images.unsplash.com/photo-1695048137422-84bea458e28b?q=80&w=1200&auto=format&fit=crop' },
  { id: 2, title: 'Galaxy S24 Ultra', price: 1199, rating: 4.7, tag: 'New', img: 'https://images.unsplash.com/photo-1616347962234-40a1e2a0552e?q=80&w=1200&auto=format&fit=crop' },
  { id: 3, title: 'MacBook Air M3', price: 1299, rating: 4.9, tag: 'Best', img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop' },
]

export default function FeaturedDeals() {
  return (
    <section className="py-16" id="deals">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Featured Deals</h2>
          <a href="#" className="text-blue-600 hover:text-blue-700 text-sm">View all</a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.id} className="group rounded-2xl border border-slate-200 bg-white overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform" />
                <span className="absolute left-4 top-4 px-2 py-1 rounded-full bg-slate-900 text-white text-xs">{p.tag}</span>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-slate-900">{p.title}</h3>
                <div className="mt-1 flex items-center gap-2 text-amber-500">
                  <Star className="w-4 h-4 fill-amber-500" />
                  <span className="text-sm text-slate-600">{p.rating}</span>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-bold">${p.price}</span>
                  <button className="px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 text-sm">Add to cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid sm:grid-cols-3 gap-4">
          <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4">
            <BadgePercent className="w-5 h-5 text-blue-600" />
            <p className="text-sm text-slate-700">Exclusive member discounts</p>
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4">
            <ShieldCheck className="w-5 h-5 text-blue-600" />
            <p className="text-sm text-slate-700">2-year warranty on devices</p>
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4">
            <Truck className="w-5 h-5 text-blue-600" />
            <p className="text-sm text-slate-700">Free shipping over $50</p>
          </div>
        </div>
      </div>
    </section>
  )
}
