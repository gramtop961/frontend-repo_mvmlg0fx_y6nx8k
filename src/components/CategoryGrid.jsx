import { Smartphone, Laptop, Headphones, Camera, Watch, TabletSmartphone } from 'lucide-react'

const items = [
  { id: 'mobiles', title: 'Smartphones', desc: 'Latest Android & iOS', icon: Smartphone, color: 'from-blue-500 to-cyan-500' },
  { id: 'laptops', title: 'Laptops', desc: 'Ultrabooks & Gaming', icon: Laptop, color: 'from-purple-500 to-pink-500' },
  { id: 'audio', title: 'Audio', desc: 'Headphones & Speakers', icon: Headphones, color: 'from-amber-500 to-orange-500' },
  { id: 'cameras', title: 'Cameras', desc: 'Mirrorless & DSLR', icon: Camera, color: 'from-emerald-500 to-teal-500' },
  { id: 'wearables', title: 'Wearables', desc: 'Watches & Fitness', icon: Watch, color: 'from-fuchsia-500 to-violet-500' },
  { id: 'tablets', title: 'Tablets', desc: 'Work & Play', icon: TabletSmartphone, color: 'from-rose-500 to-red-500' },
]

export default function CategoryGrid() {
  return (
    <section className="py-16" id="categories">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Shop by Category</h2>
          <a href="#" className="text-blue-600 hover:text-blue-700 text-sm">View all</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => {
            const Icon = item.icon
            return (
              <a key={item.id} href={`#${item.id}`} className="group rounded-2xl border border-slate-200 bg-white p-5 hover:shadow-xl transition-shadow">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} text-white grid place-items-center` }>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="mt-4 font-semibold text-slate-900">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
                <span className="inline-block mt-4 text-blue-600 group-hover:translate-x-1 transition-transform">Shop now →</span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
