"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { products } from "@/data/products";
import { ProductCard, ProductCardSkeleton } from "@/components/product-card";
import { CartDrawer } from "@/components/cart-drawer";
import { useCartStore } from "@/store/cart";
import { ShoppingBag, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

type Category = "all" | "coffee" | "pastry";

export default function ShopPage() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();

  const categoryFromUrl = (searchParams.get("category") as Category) || "all";
  const [selectedCategory, setSelectedCategory] = useState<Category>(categoryFromUrl);

  useEffect(() => {
    setSelectedCategory(categoryFromUrl);
  }, [categoryFromUrl]);

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleCategoryChange = (category: Category) => {
    router.push(`/shop?category=${category}`, { scroll: false });
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="text-2xl font-serif font-bold text-espresso-700">
            Crema Coffee House
          </Link>
          <button onClick={() => setIsCartOpen(true)} className="relative p-2">
            <ShoppingBag className="h-6 w-6 text-espresso-700" />
          </button>
        </div>
      </header>

      <main className="container mx-auto px-4 pt-24 pb-16">
        <Suspense fallback={<div>Loading...</div>}>
          <div className="w-full md:w-1/2 mb-8 space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-10 bg-white focus:outline-none focus:ring-2 focus:ring-espresso-700 focus:border-espresso-700"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              {["all", "coffee", "pastry"].map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={
                    selectedCategory === category
                      ? "bg-espresso-700 text-white hover:bg-espresso-800"
                      : "bg-white text-espresso-700 border-espresso-700 hover:bg-espresso-50"
                  }
                  onClick={() => handleCategoryChange(category as Category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
            <AnimatePresence>
              {filteredProducts.length > 0
                ? filteredProducts.map((product) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <ProductCard product={product} />
                    </motion.div>
                  ))
                : Array.from({ length: 8 }).map((_, i) => (
                    <motion.div
                      key={`skeleton-${i}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <ProductCardSkeleton />
                    </motion.div>
                  ))}
            </AnimatePresence>
          </div>
        </Suspense>
      </main>

      <CartDrawer open={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}
