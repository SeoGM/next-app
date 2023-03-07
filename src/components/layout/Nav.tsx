import { useState } from "react";
import Link from "next/link";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { MoonIcon } from "@heroicons/react/solid";
import { metadata } from "@/data/metadata";

export default function Nav() {
  const [Toggle, showMenu] = useState<boolean>(false);

  const navLinks: { href: string; title: string }[] = [
    { href: "#home", title: "Home" },
    { href: "#about", title: "About" },
    { href: "#skills", title: "Skills" },
    { href: "#utilizes", title: "Utilizes" },
    { href: "#projects", title: "Projects" },
    { href: "#contact", title: "Contact" },
    // { href: "/blog", title: "Blog" },
  ];
  return (
    <div className="flex justify-between items-center gap-4">
      <div
        className={`flex justify-between items-center
              ${
                Toggle ? "sm:flex" : "sm:hidden"
              } sm:flex-col sm:justify-start sm:fixed sm:gap-8 sm:top-0 sm:left-0 sm:w-full sm:h-full sm:transform sm:bg-gray-200 sm:opacity-95 sm:duration-300 sm:ease-in-out
            `}
      >
        <div className="hidden sm:flex justify-between items-center w-full h-28 px-4">
          <Link href="/" className="text-2xl font-bold">
            {metadata.title}
          </Link>
          <button type="button" onClick={() => showMenu(!Toggle)}>
            <XIcon className="w-8 h-8" />
          </button>
        </div>
        <nav className="flex sm:flex-col justify-between items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="text-sm font-medium"
            >
              {link.title}
            </a>
          ))}
        </nav>
      </div>
      <button type="button">
        <MoonIcon className="w-8 h-8" />
      </button>
      <button
        type="button"
        className="hidden sm:block"
        onClick={() => showMenu(!Toggle)}
      >
        <MenuIcon className="w-8 h-8" />
      </button>
    </div>
  );
}
