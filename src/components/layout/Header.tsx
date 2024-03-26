import { Julee } from "next/font/google";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import NavLinks from "./NavLinks";

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
    <nav className="px-10 w-full md:justify-around justify-between items-center flex py-5">
      <h3 className={`font-julee text-5xl text-purple-primary`}>
        <Link href={"/"}>Mint</Link>
      </h3>
      <div className="relative md:block hidden w-1/3">
        <input
          placeholder="Search Events"
          className="p-4 border hidden md:block pl-5 w-full rounded-full"
          type="text"
        />
        <span className="md:absolute text-black md:text-white md:bg-verdant p-2 rounded-full md: top-1 right-1">
          <IoIosSearch size={35} />
        </span>
      </div>
      <NavLinks navLinks={navLinks} />
    </nav>
  );
}

export default Header;
