import Image from "next/image";
import { Project } from "@/types/project";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";

import { ProjectCardLink } from "./project-card-link";

import styles from "./project-card.module.css";

export const ProjectCard: React.FC<Project> = ({
  title,
  image,
  visit_link,
  github_link,
  description,
  stack,
}) => {
  return (
    <article className={styles["project-card"]}>
      <Image
        width={64}
        height={64}
        className={styles["project-card__image"]}
        src={image}
        alt={title}
      />
      <header className={styles["project-card__header"]}>
        <h3 className={styles["project-card__title"]}>{title}</h3>
        <div className={styles["project-card__links-container"]}>
          {visit_link && (
            <ProjectCardLink
              icon={<IconExternalLink />}
              href={visit_link}
              text="Visit"
            />
          )}

          {github_link && (
            <ProjectCardLink
              icon={<IconBrandGithub />}
              href={github_link}
              text="Github"
            />
          )}
        </div>
      </header>
      <div className={styles["project-card__info"]}>
        <h5 className={styles["project-card__info-title"]}>Description</h5>
        <p className={styles["project-card__info-description"]}>
          {description}
        </p>
        <h5 className={styles["project-card__info-title"]}>Stack</h5>
        <p className={styles["project-card__info-description"]}>{stack}</p>
      </div>
    </article>
  );
};
