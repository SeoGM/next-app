interface props {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  desc: string;
}

export default function AboutInfoBox({ icon, title, desc }: props) {
  const Icon = icon as React.FC<React.SVGProps<SVGSVGElement>>;
  return (
    <div className="border border-black/[0.1] rounded-xl px-5 py-4 text-center">
      <Icon className="inline-block mb-2 w-6 h-6" />
      <h3 className="text-sm font-medium">{title}</h3>
      <span className="text-base">{desc}</span>
    </div>
  );
}
