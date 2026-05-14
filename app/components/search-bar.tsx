import { Button } from "@/components/ui/button";
import { Search } from 'lucide-react';

const SearchBar = () => {
    return (
        <div className="flex-1 md:min-w-0 flex items-center gap-2 order-last mt-2 md:order-0 md:mt-0">
          <input
            type="text"
            placeholder="ابحث عن المنتجات و الماركات و المزيد...."
            className="w-full px-4 py-2 rounded-0 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        <Button>
          <Search />
        </Button>
      </div>
    )
}

export default SearchBar;