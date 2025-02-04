export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: "pastry" | "coffee"
}

export const products: Product[] = [
  {
    id: "1",
    name: "Chocolate Croissant",
    description: "Buttery croissant filled with rich chocolate",
    price: 3.5,
    image: "/placeholder.svg?height=200&width=200",
    category: "pastry",
  },
  {
    id: "2",
    name: "Cappuccino",
    description: "Espresso with steamed milk and foam",
    price: 4.0,
    image: "/placeholder.svg?height=200&width=200",
    category: "coffee",
  },
  {
    id: "3",
    name: "Blueberry Muffin",
    description: "Moist muffin packed with fresh blueberries",
    price: 2.75,
    image: "/placeholder.svg?height=200&width=200",
    category: "pastry",
  },
  {
    id: "4",
    name: "Latte",
    description: "Espresso with steamed milk",
    price: 3.75,
    image: "/placeholder.svg?height=200&width=200",
    category: "coffee",
  },
  // Add more products as needed
]

