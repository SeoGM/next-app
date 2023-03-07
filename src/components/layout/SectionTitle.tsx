interface props {
  title: string;
  subtitle: string;
}

export default function SectionTitle({ title, subtitle }: props) {
  return (
    <>
      <h2 className="text-4xl font-semibold title-color text-center md:text-2xl">
        {title}
      </h2>
      <span className="block text-sm font-normal title-color text-center mb-16 md:mb-12">
        {subtitle}
      </span>
    </>
  );
}
