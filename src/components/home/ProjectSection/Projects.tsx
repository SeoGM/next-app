import ProjectItem from "./ProjectItem";
import { metadata } from "@/data/metadata";

export default function Projects() {
  return (
    <div className="grid grid-cols-2 justify-center gap-12 lg:gap-5 md:grid-cols-1">
      {metadata.project.map((item, index) => {
        return <ProjectItem key={index} item={item} />;
      })}
    </div>
  );
}
