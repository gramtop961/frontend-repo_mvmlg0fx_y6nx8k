import { Menu, Smartphone, ShoppingCart, Headphones, Laptop, Camera, Search } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { label: 'Mobiles', href: '#mobiles', icon: <Smartphone className="w-4 h-4" /> },
    { label: 'Laptops', href: '#laptops', icon: <Laptop className="w-4 h-4" /> },
    { label: 'Audio', href: '#audio', icon: <Headphones className="w-4 h-4" /> },
    { label: 'Cameras', href: '#cameras', icon: <Camera className="w-4 h-4" /> },
  ]

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-backdrop-blur:bg-white/60 bg-white/80 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-semibold text-slate-900">
            <div className="p-2 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white">
              <Smartphone className="w-5 h-5" />
            </div>
            <span>BlueTech</span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-slate-700 hover:text-blue-600 flex items-center gap-2 text-sm">
                {l.icon}
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                placeholder="Search gadgets"
                className="pl-9 pr-3 py-2 rounded-full bg-slate-100 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
            </div>
            <button className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 text-sm">
              <ShoppingCart className="w-4 h-4" />
              Cart
            </button>
          </div>

          <button className="md:hidden p-2 rounded-lg hover:bg-slate-100" onClick={() => setOpen(!open)}>
            <Menu className="w-5 h-5" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2 pt-2">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="px-3 py-2 rounded-lg hover:bg-slate-100 flex items-center gap-2 text-slate-700">
                  {l.icon}
                  {l.label}
                </a>
              ))}
              <a href="#deals" className="px-3 py-2 rounded-lg hover:bg-slate-100 text-slate-700">Deals</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
