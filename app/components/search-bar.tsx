'use client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from 'lucide-react';

const SearchBar = ({ searchValue, handleSearchChange }: { searchValue: string; handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) => {
  return (
    <div className="flex-1 relative md:min-w-0 flex items-center  order-last mt-2 md:order-0 md:mt-0">
      <Input
        placeholder="ابحث عن المنتجات و الماركات و المزيد...."
        className="w-full px-4 py-2 border-0 rounded-0 focus:outline-none focus:ring-2 focus:ring-primary bg-white/90"
        value={searchValue}
        onChange={handleSearchChange}
      />
      <Button className="absolute left-0 top-0 h-full rounded-0 bg-primary hover:bg-primary/90 focus:ring-primary">
        <Search />
      </Button>
    </div>
  )
}

export default SearchBar;