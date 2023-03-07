import { BadgeCheckIcon } from "@heroicons/react/outline";

interface props {
  title: string;
  data: { name: string; level: string }[];
}

export default function SkillInfoBox({ title, data }: props) {
  return (
    <div className="bg-white border border-black/[0.1] rounded-2xl px-8 py-8 text-center">
      <h3 className="text-base font-medium title-color text-center mb-6">
        {title}
      </h3>
      <div className="grid grid-cols-2 gap-x-6 gap-y-4">
        {data.map((skill, index) => (
          <div className="flex gap-x-2" key={index}>
            <BadgeCheckIcon className="flex-none w-4 h-4 mt-1 title-color" />
            <div className="text-left">
              <h4 className="text-base font-medium title-color">
                {skill.name}
              </h4>
              <span className="text-xs">{skill.level}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
