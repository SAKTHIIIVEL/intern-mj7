import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const navItems = ["ABOUT", "PROJECT", "TEAM", "PORTFOLIO", "CONTACT"];

  return (
    <nav className="fixed top-0 left-0 w-full h-[120px] bg-black z-50">
      {/* Main container matching Figma Frame 2 */}
      <div className="w-full max-w-[1440px] h-full mx-auto pl-[90px] pr-[100px] flex flex-row justify-between items-center relative">
        {/* Group 1 - Logo */}
        <div className="w-[142.93px] h-[94px] flex-shrink-0 relative top-[13px]">
          <Link href="/" className="block w-full h-full">
            <Image
              src="/navbar_logo.png"
              alt="MJ7 Logo"
              width={143}
              height={94}
              className="rounded-[4px] object-contain"
              priority
            />
          </Link>
        </div>

        {/* Frame 1 - Navigation Items */}
        <div className="flex flex-row justify-center items-center gap-[51px] h-[30px] flex-shrink-0">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="font-poppins font-normal text-[20px] leading-[30px] text-white uppercase hover:opacity-80 transition-opacity whitespace-nowrap"
              style={{
                fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
              }}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

