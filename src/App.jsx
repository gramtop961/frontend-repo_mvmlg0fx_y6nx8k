import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CategoryGrid from './components/CategoryGrid'
import FeaturedDeals from './components/FeaturedDeals'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <CategoryGrid />
      <FeaturedDeals />

      <footer className="border-t border-slate-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-3 gap-8 text-sm">
          <div>
            <h4 className="font-semibold mb-2">About</h4>
            <p className="text-slate-600">A modern shop for mobiles and electronics with playful 3D interactions.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Support</h4>
            <ul className="space-y-1 text-slate-600">
              <li>Help Center</li>
              <li>Shipping & Returns</li>
              <li>Warranty</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Get updates</h4>
            <div className="flex gap-2">
              <input placeholder="Enter your email" className="flex-1 px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <button className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="text-center text-slate-500 text-xs py-6">© 2025 BlueTech. All rights reserved.</div>
      </footer>
    </div>
  )
}

export default App
