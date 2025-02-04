"use client";

import { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useCartStore } from "@/store/cart";
import { Minus, Plus, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

export function CartDrawer({ open, onClose }: CartDrawerProps) {
  const { items, removeItem, updateQuantity } = useCartStore();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg bg-white">
        <SheetHeader>
          <SheetTitle className="text-2xl font-serif text-espresso-700">
            Your Cart
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col h-full">
          <ScrollArea className="flex-1 -mx-6 px-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full">
                <p className="text-lg text-espresso-700 mb-4 text-center">
                  Your cart is empty
                </p>
                <Button
                  onClick={() => {
                    onClose();
                    router.push("/shop");
                  }}
                  className="bg-espresso-700 text-white hover:bg-espresso-800 mb-6"
                >
                  View Products
                </Button>
              </div>
            ) : (
              <AnimatePresence>
                {items.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="flex gap-4 py-4 border-b border-espresso-100"
                  >
                    <div className="relative w-20 h-20">
                      {/* <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="object-cover rounded-md"
                      /> */}
                      <div className="w-full h-full rounded-sm bg-gray-200"></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-espresso-700">
                        {item.name}
                      </h3>
                      <p className="text-sm text-espresso-500">
                        N{item.price.toFixed(2)}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 bg-white border-espresso-100 text-espresso-700 hover:bg-espresso-50"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 bg-white border-espresso-100 text-espresso-700 hover:bg-espresso-50"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 ml-2"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            )}
          </ScrollArea>
          {items.length > 0 && (
            <div className="py-4 space-y-4">
              <div className="flex justify-between text-lg font-medium text-espresso-700">
                <span>Total</span>
                <span>N{total.toFixed(2)}</span>
              </div>
              <Button className="w-full bg-espresso-700 text-white hover:bg-espresso-800 mb-6">
                Complete Order
              </Button>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
