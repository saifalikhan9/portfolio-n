import { projects } from "@/src/constants/Projects";
import { ProjectCard } from "./project-card";
import { LayoutGroup } from "motion/react";

export const ProjectsList = () => {
  return (
    <LayoutGroup>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project, inx) => (
          <ProjectCard index={inx} key={inx} projects={project} />
        ))}
      </div>
    </LayoutGroup>
  );
};
