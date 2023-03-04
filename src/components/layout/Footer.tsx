import { metadata } from "@/data/metadata";
import SocialIcon from "@/components/socialIcons";

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center mt-16">
        <div className="flex space-x-4 mb-3">
          <SocialIcon kind="github" href={metadata.github} />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>&#169; 2023 GWANGMYEONG SEO. All rights reserved</div>
        </div>
      </div>
    </footer>
  );
}
