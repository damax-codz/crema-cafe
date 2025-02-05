import Image from "next/image";
import { AddToCartButton } from "./add-to-cart-button";
import { Product } from "@/data/products";

interface ProductGridProps {
  products: Product[];
  isLoading: boolean;
}

export function ProductGrid({ products, isLoading }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {isLoading
        ? Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse"
            >
              <div className="h-48 bg-gray-300" />
              <div className="p-4 space-y-2">
                <div className="h-4 bg-gray-300 rounded w-3/4" />
                <div className="h-4 bg-gray-300 rounded w-1/2" />
                <div className="h-8 bg-gray-300 rounded" />
              </div>
            </div>
          ))
        : products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105"
            >
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-espresso-800">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  {product.description}
                </p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-lg font-bold text-espresso-800">
                    ${product.price.toFixed(2)}
                  </span>
                  <AddToCartButton product={product} />
                </div>
              </div>
            </div>
          ))}
    </div>
  );
}
