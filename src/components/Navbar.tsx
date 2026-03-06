import Link from "next/link";
import { usePathname } from "next/navigation";
import Menu from "./Menu";
import CartIcon from "./CartIcon";
const Navbar = () => {
  const pathname = usePathname();
  const linkClass = (href: string) => {
    const active =
      pathname === href || (href !== "/" && pathname.startsWith(href));
    return `hover:font-bold ${active ? "font-bold" : "font-normal"}`;
  };

  return (
    <div className="h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40">
      {/* Left Links */}

      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/" className={linkClass("/")}>
          Home
        </Link>
        <Link href="/productlist" className={linkClass("/productlist")}>
          Products
        </Link>
        <Link href="/contact" className={linkClass("/contact")}>
          Contact
        </Link>
     
      </div>

      {/* Logo */}
      <div className="text-xl md:font-bold flex-1 md:text-center">
        <Link href="/">Next Food</Link>
      </div>

      {/*Mobile Menu */}
      <div className="md:hidden">
        <Menu />
      </div>

      {/* Right Links */}
      <div className="hidden md:flex gap-4 items-center flex-1 justify-end">
           <Link
          href="/favorites"
          className={`${linkClass("/favorites")} flex items-center gap-1`}
        >
          <span>❤️</span> Favorites
        </Link>
        <CartIcon />
        
      </div>
    </div>
  );
};

export default Navbar;
