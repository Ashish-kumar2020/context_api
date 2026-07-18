import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

const SearchBar = () => {
  return (
    <div className="relative w-full">
      <Input
        placeholder="Search for products, brands and more...."
        className="pl-9 w-full h-10"
      />
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
    </div>
  )
}

export default SearchBar