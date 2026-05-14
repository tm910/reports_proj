import Image from "next/image";

const Logo = () => {
    return (
        <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Logo" width={50} height={50} />
            <h1 className="text-3xl font-bold">ساحة</h1>
        </div>
    )
}

export default Logo;