import { ShoppingBag } from 'lucide-react'


const Logo = () => {
  return (
    <div className="flex items-center gap-2">
        <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-violet-600">
          <ShoppingBag className="h-5 w-5 text-white" />
        </div>
        <p className="text-xl font-bold tracking-tight">
          <span className="text-neutral-900">Shop</span>
          <span className="text-violet-600">Sphere</span>
        </p>
      </div>
  )
}

export default Logo