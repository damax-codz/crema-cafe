"use client"

import { useState } from "react"
import { Menu, ShoppingBag, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

export function Nav({ openCart, itemCount }: { openCart: () => void; itemCount: number }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full z-50">
      <div
        className={`w-full px-8 py-6 flex justify-between items-center ${isOpen ? "bg-espresso-800" : "bg-transparent"}`}
      >
        <Link href="/" className="text-cream-100 font-serif text-2xl font-bold">
          Crema Coffee House
        </Link>

        <div className="flex items-center gap-6">
          <button onClick={openCart} className="text-cream-100 hover:text-cream-200 transition-colors relative">
            <ShoppingBag className="h-6 w-6" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-espresso-700 text-cream-100 text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </button>

          <button onClick={() => setIsOpen(!isOpen)} className="text-cream-100 hover:text-cream-200 transition-colors">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-espresso-800"
          >
            <div className="px-8 py-8">
              <ul className="space-y-4">
                <motion.li initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                  <Link
                    href="/"
                    className="text-cream-100 hover:text-cream-200 transition-colors text-2xl font-serif font-bold"
                  >
                    Home
                  </Link>
                </motion.li>
                <motion.li initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                  <Link
                    href="/shop"
                    className="text-cream-100 hover:text-cream-200 transition-colors text-2xl font-serif font-bold"
                  >
                    Shop
                  </Link>
                </motion.li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

