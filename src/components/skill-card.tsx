import Image from "next/image";

import styles from "./skill-card.module.css";

interface SkillCardProps {
  name: string;
  image: string;
}

export const SkillCard: React.FC<SkillCardProps> = ({ name, image }) => {
  return (
    <div className={styles["skill-card"]}>
      <Image
        className={styles["skill-card__image"]}
        width={24}
        height={24}
        src={image}
        alt={name}
      />
      <span className={styles["skill-card__name"]}>{name}</span>
    </div>
  );
};
