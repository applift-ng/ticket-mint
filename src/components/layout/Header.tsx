import { Julee } from "next/font/google";
import Link from "next/link";
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
    <nav className="px-10 w-full justify-between items-center flex py-5">
      <h3 className={`${julee.className} text-4xl text-purple-primary`}>
        <Link href={"/"}>Mint</Link>
      </h3>
      <div>
        <input
          placeholder="Search Events"
          className="p-3 border pl-5 w-[200%] rounded-full"
          type="text"
        />
      </div>

      <div className="flex w-1/3 justify-between">
        {navLinks.map(({ title, path }) => (
          <>
            <Link href={path}>
              <p>{title}</p>
            </Link>
          </>
        ))}
      </div>
    </nav>
  );
}

export default Header;
