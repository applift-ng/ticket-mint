import { Julee } from "next/font/google";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import NavLinks from "./NavLinks";
const julee = Julee({ weight: "400", subsets: ["latin"] });
function Header() {
  const navLinks = [
    {
      title: "Events",
      path: "/events",
    },
    {
      title: "Create Event",
      path: "/create",
    },
    {
      title: "About Us",
      path: "/about",
    },
    {
      title: "Log in",
      path: "/login",
    },
    {
      title: "Sign Up",
      path: "/signup",
    },
  ];
  return (
    <nav className="px-10 w-full justify-around items-center flex py-5">
      <h3 className={`${julee.className} text-5xl text-purple-primary`}>
        <Link href={"/"}>Mint</Link>
      </h3>
      <div className="relative w-1/3">
        <input
          placeholder="Search Events"
          className="p-4 border hidden md:block pl-5 w-full rounded-full"
          type="text"
        />
        <span className="absolute text-white bg-verdant p-2 rounded-full top-1 right-1">
          <IoIosSearch size={35} />
        </span>
      </div>
      <NavLinks navLinks={navLinks} />
    </nav>
  );
}

export default Header;
