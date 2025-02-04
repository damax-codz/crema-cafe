export type Product = {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: "coffee" | "pastry"
}

export const products: Product[] = [
  {
    id: "1",
    name: "Espresso",
    description: "Rich and bold single shot of espresso",
    price: 3.5,
    image: "/placeholder.svg?height=400&width=400",
    category: "coffee",
  },
  {
    id: "2",
    name: "Cappuccino",
    description: "Classic Italian coffee with equal parts espresso, steamed milk, and foam",
    price: 4.5,
    image: "/placeholder.svg?height=400&width=400",
    category: "coffee",
  },
  {
    id: "3",
    name: "Croissant",
    description: "Buttery, flaky pastry with a golden-brown crust",
    price: 3.75,
    image: "/placeholder.svg?height=400&width=400",
    category: "pastry",
  },
  {
    id: "4",
    name: "Pain au Chocolat",
    description: "Chocolate-filled croissant with a rich, buttery texture",
    price: 4.25,
    image: "/placeholder.svg?height=400&width=400",
    category: "pastry",
  },
  {
    id: "5",
    name: "Espresso",
    description: "Rich and bold single shot of espresso",
    price: 3.5,
    image: "/placeholder.svg?height=400&width=400",
    category: "coffee",
  },
  {
    id: "6",
    name: "Cappuccino",
    description: "Classic Italian coffee with equal parts espresso, steamed milk, and foam",
    price: 4.5,
    image: "/placeholder.svg?height=400&width=400",
    category: "coffee",
  },
  {
    id: "7",
    name: "Croissant",
    description: "Buttery, flaky pastry with a golden-brown crust",
    price: 3.75,
    image: "/placeholder.svg?height=400&width=400",
    category: "pastry",
  },
  {
    id: "8",
    name: "Pain au Chocolat",
    description: "Chocolate-filled croissant with a rich, buttery texture",
    price: 4.25,
    image: "/placeholder.svg?height=400&width=400",
    category: "pastry",
  },
  // Add more products as needed
]

