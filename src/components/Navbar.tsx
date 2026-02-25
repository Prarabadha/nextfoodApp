import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import CartIcon from "./CartIcon";
const Navbar = () => {
  const user = false;
  return (
    <div className="h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40">
      {/* Left Links */}

      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">HomePage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
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
        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/menu">Menu</Link>
        )}
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;
