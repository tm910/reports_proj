import Nav from "./nav";
import SearchBar from "./search-bar";
import Logo from "./logo";
import { CarIcon, ShoppingCart } from "lucide-react";

const Header = () => {
    return (
      <header className="flex flex-wrap items-center p-4 bg-secondary">
        <div className="flex-1 flex justify-between w-full md:w-auto items-center">
          <Logo />

          <div className="flex items-center md:hidden">
            <ShoppingCart />
          </div>
        </div>
        {/* Search Bar */}
        {/* <div className=""> */}
          <SearchBar />
        {/* </div> */}
        <div className="hidden md:flex items-center">
          <ShoppingCart className="mr-4" />
        </div>
      </header>
    )
}

export default Header;