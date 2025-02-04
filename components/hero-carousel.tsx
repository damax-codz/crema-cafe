"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Instagram, TwitterIcon as TikTok, MapPin } from "lucide-react";
import { useRouter } from "next/navigation";

const images = [
  {
    url: "https://images.pexels.com/photos/3020919/pexels-photo-3020919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Savor the Essence of Coffee",
    subtitle:
      "Where every sip tells a story, and every corner inspires connection.",
    buttonText: "Buy Now",
    buttonLink: "/shop",
    category: "coffee",
  },
  {
    url: "https://images.pexels.com/photos/5648034/pexels-photo-5648034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Work, Connect, Create",
    subtitle:
      "Enjoy the ambiance of our free workspace—where ideas flow as freely as the coffee.",
    buttonText: "Visit our café",
    buttonLink:
      "https://www.google.com/maps/search/?api=1&query=Plot+2A+Grace+Anjous+Dr,+Lekki+Phase+I,+Lagos",
  },
  {
    url: "https://images.pexels.com/photos/267308/pexels-photo-267308.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Pastries You Can't Resist",
    subtitle:
      "Satisfy your cravings with our freshly baked pastries, made to comfort and delight.",
    buttonText: "Buy Now",
    buttonLink: "/shop",
    category: "pastry",
  },
];

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleButtonClick = (link: string, category?: string) => {
    if (link.startsWith("http")) {
      window.open(link, "_blank", "noopener,noreferrer");
    } else {
      // Use next/navigation for client-side navigation
      if (category) {
        router.push(`${link}?category=${category}`);
      } else {
        router.push(link);
      }
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-espresso-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <Image
            src={images[current].url || "/placeholder.svg"}
            alt={images[current].title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-8 max-w-4xl px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-4"
              >
                <h1 className="text-white font-serif text-6xl md:text-8xl font-black">
                  {images[current].title}
                </h1>
                <p className="text-cream-100 text-xl md:text-2xl font-medium">
                  {images[current].subtitle}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <button
                  onClick={() =>
                    handleButtonClick(
                      images[current].buttonLink,
                      images[current].category
                    )
                  }
                  className="px-8 py-3 border-2 border-cream-100 text-cream-100 text-lg font-bold hover:bg-cream-100 hover:text-espresso-900 transition-colors"
                >
                  {images[current].buttonText}
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-8 left-8 flex flex-col gap-6 text-cream-100">
        <div className="flex flex-col gap-3">
          <a
            href="https://www.google.com/maps/place/Crema+Coffee+House/@6.446408,3.4638729,963m/data=!3m2!1e3!4b1!4m6!3m5!1s0x103bf4519a749591:0xe1d8e1133783c95e!8m2!3d6.446408!4d3.465457!16s%2Fg%2F11f3tr8hch?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-cream-200 transition-colors"
          >
            <MapPin className="h-5 w-5" />
            <span className="text-sm font-medium">
              Plot 2A Grace Anjous Dr, Lekki Phase I, Lagos
            </span>
          </a>
        </div>
        <div className="flex gap-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cream-200 transition-colors"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cream-200 transition-colors"
          >
            <TikTok className="h-5 w-5" />
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 md:bottom-12">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === current ? "bg-cream-100" : "bg-cream-100/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
