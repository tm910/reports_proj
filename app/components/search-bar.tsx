import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {useDebouncedCallback} from "use-debounce"

import { Search } from 'lucide-react';
import { useRouter, useSearchParams } from "next/navigation";

const SearchBar = ({ searchValue, handleSearchChange }: { searchValue: string; handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  
  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams)
    if (term) {
      params.set('query', term)
    } else {
      params.delete('query')
    }
    replace(`/search?${params.toString()}`)
  }, 300)
  return (
    <div className="flex-1 relative md:min-w-0 flex items-center  order-last mt-2 md:order-0 md:mt-0">
      <Input
        placeholder="ابحث عن المنتجات و الماركات و المزيد...."
        className="w-full px-4 py-2 border-0 rounded-0 focus:outline-none focus:ring-2 focus:ring-primary bg-white/90"
        value={searchValue}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <Button className="absolute left-0 top-0 h-full rounded-r-0 bg-primary hover:bg-primary/90 focus:ring-primary">
        <Search size={18}/>
      </Button>
    </div>
  )
}

export default SearchBar;