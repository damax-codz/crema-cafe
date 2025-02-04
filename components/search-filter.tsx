import { Search } from "lucide-react"

interface SearchFilterProps {
  searchTerm: string
  setSearchTerm: (term: string) => void
  category: string
  setCategory: (category: string) => void
}

export function SearchFilter({ searchTerm, setSearchTerm, category, setCategory }: SearchFilterProps) {
  return (
    <div className="mb-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4">
      <div className="relative w-full sm:w-64">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-espresso-500 focus:border-transparent"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>
      <div className="flex space-x-2">
        <button
          onClick={() => setCategory("all")}
          className={`px-4 py-2 rounded-full ${
            category === "all" ? "bg-espresso-800 text-white" : "bg-cream-100 text-espresso-800"
          } hover:bg-espresso-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-espresso-500`}
        >
          All
        </button>
        <button
          onClick={() => setCategory("pastry")}
          className={`px-4 py-2 rounded-full ${
            category === "pastry" ? "bg-espresso-800 text-white" : "bg-cream-100 text-espresso-800"
          } hover:bg-espresso-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-espresso-500`}
        >
          Pastries
        </button>
        <button
          onClick={() => setCategory("coffee")}
          className={`px-4 py-2 rounded-full ${
            category === "coffee" ? "bg-espresso-800 text-white" : "bg-cream-100 text-espresso-800"
          } hover:bg-espresso-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-espresso-500`}
        >
          Coffee
        </button>
      </div>
    </div>
  )
}

