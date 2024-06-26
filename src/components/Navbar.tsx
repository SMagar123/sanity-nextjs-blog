import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  return (
    <nav className="w-full max-w-7xl mx-auto px-4 py-5 flex justify-between items-center ">
      <Link href="/" className="font-bold text-3xl">
        Suraj<span className="text-primary">Blog</span>
      </Link>
      <ModeToggle />
    </nav>
  );
};

export default Navbar;
