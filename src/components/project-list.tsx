import { ProjectCard } from "./project-card";
import { Project } from "@/types/project";

import styles from "./project-list.module.css";

interface ProjectListProps {
  projects: Project[];
  id: string;
}

export const ProjectList: React.FC<ProjectListProps> = ({ projects, id }) => {
  return (
    <div id={id} className={styles["project-list"]}>
      <h2 className={styles["project-list__title"]}>My projects</h2>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};
