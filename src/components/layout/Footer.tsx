import { useEffect, useState } from "react";
import { metadata } from "@/data/metadata";
import SocialIcon from "@/components/socialIcons";
import Container from "./Container";
import { ArrowSmUpIcon } from "@heroicons/react/outline";

export default function Footer() {
  const [scroll, setScroll] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 300);
    });
  });

  return (
    <>
      <footer className="bg-white border-t border-black/[0.1]">
        <Container>
          <div className="flex flex-col items-center pt-8 pb-24">
            <h1 className="text-4xl font-semibold title-color mb-8">
              {metadata.title}
            </h1>
            <ul className="flex justify-center gap-6 mb-8">
              <li>
                <a href="#about" className="title-color">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="title-color">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="title-color">
                  Projects
                </a>
              </li>
            </ul>
            <div className="flex space-x-4">
              <SocialIcon kind="github" href={metadata.github} />
            </div>
            <div className="mt-24 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <div>&#169; 2023 GWANGMYEONG SEO. All rights reserved</div>
            </div>
          </div>
        </Container>
      </footer>
      <a
        href="#home"
        className={`fixed right-10 ${
          scroll ? "bottom-12 md:bottom-16" : "bottom-[-20%]"
        } z-50 px-2 py-2.5 bg-slate-500 opacity-80 hover:opacity-100 rounded-lg duration-300 md:right-6 `}
      >
        <ArrowSmUpIcon className="w-6 h-6 text-white" />
      </a>
    </>
  );
}
