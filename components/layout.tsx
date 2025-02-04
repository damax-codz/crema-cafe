import type React from "react"
import Link from "next/link"
import { ShoppingBag } from "lucide-react"
import { useCartStore } from "@/lib/store"

interface LayoutProps {
  children: React.ReactNode
  openCart: () => void
}

export function Layout({ children, openCart }: LayoutProps) {
  const cartItems = useCartStore((state) => state.items)
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl font-bold text-espresso-800">
                Crema Coffee House
              </Link>
            </div>
            <div className="flex items-center">
              <button
                onClick={openCart}
                className="p-2 rounded-full bg-espresso-100 text-espresso-800 hover:bg-espresso-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-espresso-500"
              >
                <ShoppingBag className="h-6 w-6" />
                {itemCount > 0 && (
                  <span className="absolute top-0 right-0 -mt-1 -mr-1 px-2 py-1 text-xs font-bold rounded-full bg-espresso-800 text-white">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  )
}

