import { useEffect, useState } from "react";
import Link from "next/link";
import Container from "./Container";
import { metadata } from "@/data/metadata";
import Nav from "./Nav";

export default function Header() {
  const [scroll, setScroll] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 80);
    });
  });

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-10 flex items-center w-full h-20 bg-white ${
        scroll && "shadow-[0_-1px_4px_0_rgba(0_0_0_/_15%)]"
      }`}
    >
      <Container>
        <div className="flex justify-between items-center">
          <Link href="/">
            <h1 className="text-2xl font-bold">{metadata.title}</h1>
          </Link>
          <Nav />
        </div>
      </Container>
    </header>
  );
}
