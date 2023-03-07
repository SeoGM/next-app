import { metadata } from "@/data/metadata";
import SocialIcon from "@/components/socialIcons";
import Container from "./Container";

export default function Footer() {
  return (
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
  );
}
