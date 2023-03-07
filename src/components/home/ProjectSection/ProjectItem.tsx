import { CalendarIcon } from "@heroicons/react/outline";

interface props {
  item: {
    title: string;
    date: string;
    calculator: string;
    position: string;
    skills: string[];
    description: string;
  };
}

export default function ProjectItem({ item }: props) {
  const { title, date, calculator, position, skills, description } = item;
  return (
    <div className="border border-black\/\[0\.1\] p-5 rounded-2xl lg:p-4">
      <h3 className="text-xl font-medium title-color mb-2">{title}</h3>
      <div className="text-sm mb-2">
        <CalendarIcon className="inline-block w-3 h-3" /> {date} {calculator}
      </div>
      <div className="mb-2">
        <span className="block text-sm">Position</span>
        {position}
      </div>
      <div className="mb-2">
        <span className="block text-sm">Skills</span>
        <ul className="flex gap-1">
          {skills.map((skill: string, index: number) => (
            <li
              key={index}
              className="border border-black\/\[0\.1\] p-1 rounded-sm"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-2">
        <span className="block text-sm">Description</span>
        {description}
      </div>
    </div>
  );
}
