import GithubIcon from "./github.svg";

const components: { [key: string]: React.FC<React.SVGProps<SVGSVGElement>> } = {
  github: GithubIcon,
};

interface props {
  kind: string;
  href: string;
}

export default function SocialIcon({ kind, href }: props) {
  const SocialSvg = components[kind];

  return (
    <a
      className="text-sm text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={`fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 h-6 w-6`}
      />
    </a>
  );
}
