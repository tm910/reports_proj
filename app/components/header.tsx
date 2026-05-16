'use client';
import Nav from "./nav";
import SearchBar from "./search-bar";
import Logo from "./logo";
import { CarIcon, Heart, Menu, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }
    return (
      <header className="">
        <div className="flex flex-wrap gap-5 items-center p-4 bg-secondary">
    <div className="flex justify-between w-full md:w-auto items-center">
              <Menu className="text-white md:hidden" />
              <Logo />

              <div className="flex items-center md:hidden">
                <ShoppingCart className="text-white" />
              </div>
            </div>
            {/* Search Bar */}
            <SearchBar
              searchValue={searchValue}
              handleSearchChange={handleSearchChange}
            />
            <div className="hidden md:flex gap-6 text-white">
              <Link href="/account" className="block text-center mr-4">
                <User />
                <p className="text-xs mt-1">حسابي</p>
              </Link>
              <Link href="/wishlist" className="block">
                <Heart />
                <p className="text-xs mt-1">المفضلة</p>
              </Link>
              <Link href="/cart" className="block">
                <ShoppingCart />
                <p className="text-xs mt-1">السلة</p>
              </Link>
            </div>
        </div>
       

        <Nav />
      </header>
    )
}

export default Header;