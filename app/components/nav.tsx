import Link from "next/link";

const Nav = () => {
    return (
        <nav className="w-full bg-[#2A3649] p-2 hidden md:flex gap-6 text-white">
          <Link href="/products" className="block text-center">
            الاكترونيات
          </Link>
          <Link href="/categories" className="block text-center">
            المطبخ
          </Link>
          <Link href="/brands" className="block text-center">
            الرياضة
          </Link>
          <Link href="/deals" className="block text-center">
            العروض
          </Link>
        </nav>
    )
}

export default Nav;