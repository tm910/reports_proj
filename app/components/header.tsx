import Image from "next/image";
import Nav from "./nav";

const Header = () => {
    return (
        <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
            {/* Logo  */}
            <Image
                src="/logo.png"
                alt="Logo"
                width={50}
                height={50}
            />
            <Nav/>
        
        </header>
    )
}

export default Header;