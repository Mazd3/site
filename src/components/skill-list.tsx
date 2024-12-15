import { SkillCard } from "./skill-card";
import { Skill } from "@/types/skill";

import styles from "./skill-list.module.css";

interface SkillListProps {
  skills: Skill[];
  id: string;
}

export const SkillList: React.FC<SkillListProps> = ({ skills, id }) => {
  return (
    <div id={id} className={styles["skill-list"]}>
      <h2 className={styles["skill-list__title"]}>My skills</h2>
      <div className={styles["skill-list__cards"]}>
        {skills.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
    </div>
  );
};
