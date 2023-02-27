import { useState } from "react";
import Link from "next/link";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { MoonIcon } from "@heroicons/react/solid";

export default function Header() {  
  const [Toggle, showMenu] = useState<boolean>(false);

  const navLinks = [
    { href: '/blog', title: 'Blog' },
    { href: '/about', title: 'About' },
  ];
  
  return (
    <header className="fixed top-0 left-0 right-0 z-10 flex items-center w-full h-28 bg-white">
      <div className={`flex justify-between items-center max-w-5xl w-full mx-auto px-4`}>
        <Link href="/"><h1 className="text-2xl font-bold">BLINGLOG</h1></Link>
        <div className="flex justify-between items-center gap-4">
          <div className={`flex justify-between items-center
            ${Toggle ? "sm:flex" : "sm:hidden"} sm:flex-col sm:justify-start sm:fixed sm:gap-8 sm:top-0 sm:left-0 sm:w-full sm:h-full sm:transform sm:bg-gray-200 sm:opacity-95 sm:duration-300 sm:ease-in-out
          `}>
            <div className="hidden sm:flex justify-between items-center w-full h-28 px-4">
              <Link href="/" className="text-2xl font-bold">BLINGBLING</Link>
              <button type="button" onClick={() => showMenu(!Toggle)}><XIcon className="w-8 h-8" /></button>  
            </div>
            <nav className="flex sm:flex-col justify-between items-center gap-4">
              {navLinks.map((link) => (
                <Link key={link.title} href={link.href} className="sm:text-2xl sm:font-bold">
                  {link.title}
                </Link>
              ))}
            </nav>
          </div>
          <button type="button"><MoonIcon className="w-8 h-8" /></button>
          <button type="button" className="hidden sm:block" onClick={() => showMenu(!Toggle)}><MenuIcon className="w-8 h-8" /></button>
        </div>
      </div>
    </header>
  );
}