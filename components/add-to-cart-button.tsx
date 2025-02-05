import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useCartStore } from "@/lib/store";
import { Product } from "@/data/products";

interface AddToCartButtonProps {
  product: Product;
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const [quantity, setQuantity] = useState(0);
  const { addItem, updateQuantity, removeItem } = useCartStore();

  const handleAdd = () => {
    if (quantity === 0) {
      addItem(product);
    } else {
      updateQuantity(product.id, quantity + 1);
    }
    setQuantity(quantity + 1);
  };

  const handleRemove = () => {
    if (quantity === 1) {
      removeItem(product.id);
    } else {
      updateQuantity(product.id, quantity - 1);
    }
    setQuantity(Math.max(0, quantity - 1));
  };

  return (
    <div className="flex items-center space-x-2">
      {quantity > 0 ? (
        <>
          <button
            onClick={handleRemove}
            className="p-1 rounded-full bg-cream-100 text-espresso-800 hover:bg-cream-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cream-500"
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="font-semibold text-espresso-800">{quantity}</span>
          <button
            onClick={handleAdd}
            className="p-1 rounded-full bg-cream-100 text-espresso-800 hover:bg-cream-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cream-500"
          >
            <Plus className="h-4 w-4" />
          </button>
        </>
      ) : (
        <button
          onClick={handleAdd}
          className="px-3 py-1 rounded-full bg-espresso-800 text-white hover:bg-espresso-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-espresso-500"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
}
