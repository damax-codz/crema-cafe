"use client";
import { Nav } from "@/components/nav";
import { HeroCarousel } from "@/components/hero-carousel";
import { CartDrawer } from "@/components/cart-drawer";
import { useState } from "react";
import { useCartStore } from "@/store/cart";

export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartItems = useCartStore((state) => state.items);
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <main className="min-h-screen">
      <Nav openCart={() => setIsCartOpen(true)} itemCount={itemCount} />
      <HeroCarousel />
      <CartDrawer open={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </main>
  );
}
