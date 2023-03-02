import Link from "next/link";
import Container from "./Container";
import { metadata } from "@/data/metadata";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 flex items-center w-full h-28 bg-white">
      <Container>
        <div className={`flex justify-between items-center`}>
          <Link href="/">
            <h1 className="text-2xl font-bold">{metadata.title}</h1>
          </Link>
          <Nav />
        </div>
      </Container>
    </header>
  );
}
