"use client";

import { useState } from "react";
import type { Product } from "@/data/products";
import { useCartStore } from "@/store/cart";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem, items } = useCartStore();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    addItem(product);
    setTimeout(() => setIsAdding(false), 500);
  };

  const itemInCart = items.find((item) => item.id === product.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group relative"
    >
      <div className="aspect-square overflow-hidden rounded-lg bg-white border border-espresso-100">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="object-cover bg-white object-center transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gray-200"></div>
        )}
      </div>
      <div className="mt-2 space-y-2">
        <h3 className="text-lg font-medium text-espresso-700">
          {product.name}
        </h3>
        <div className="flex items-center justify-between">
          <p className="text-lg font-medium text-espresso-700">
            N{product.price.toFixed(2)}
          </p>
          <Button
            onClick={handleAddToCart}
            className={`bg-espresso-700 hover:bg-espresso-800 ${
              isAdding ? "animate-pulse" : ""
            }`}
            disabled={isAdding}
          >
            {itemInCart
              ? `Add Another (${itemInCart.quantity})`
              : "Add to Cart"}
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

export function ProductCardSkeleton() {
  return (
    <div className="space-y-4">
      <div className="aspect-square rounded-lg bg-gray-100 animate-pulse" />
      <div className="space-y-2">
        <div className="h-5 w-2/3 bg-gray-200 rounded animate-pulse" />
        <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
        <div className="flex items-center justify-between">
          <div className="h-5 w-16 bg-gray-200 rounded animate-pulse" />
          <div className="h-9 w-24 bg-gray-200 rounded animate-pulse" />
        </div>
      </div>
    </div>
  );
}
