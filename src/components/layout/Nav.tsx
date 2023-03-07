import { useState } from "react";
import Link from "next/link";
import { ViewGridIcon, XIcon } from "@heroicons/react/outline";
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
      {/* <button type="button">
        <MoonIcon className="w-8 h-8 title-color" />
      </button> */}
      <button
        type="button"
        className="hidden md:block"
        onClick={() => showMenu(!Toggle)}
      >
        <ViewGridIcon className="w-6 h-6 title-color" />
      </button>
      <div
        className={`flex justify-between items-center ${
          Toggle ? "md:bottom-0" : "md:bottom-[-100%]"
        } md:body-color md:fixed md:gap-8 md:left-0 md:right-0 md:pt-8 md:pb-16 md:px-6 md:rounded-t-3xl md:shadow-[0_-1px_4px_0_rgba(0_0_0_/_15%)] md:duration-300 md:ease-in-out
        `}
      >
        <button
          type="button"
          className="hidden md:block absolute right-6 bottom-2"
          onClick={() => showMenu(!Toggle)}
        >
          <XIcon className="w-8 h-8" />
        </button>
        <nav className="flex justify-between items-center gap-8 md:grid md:grid-cols-3 md:w-full">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="text-sm font-medium title-color flex flex-col items-center"
            >
              {link.title}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
