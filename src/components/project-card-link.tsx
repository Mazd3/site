import styles from "./project-card-link.module.css";

export const ProjectCardLink: React.FC<{
  href: string;
  text: string;
  icon?: React.ReactNode;
  className?: string;
}> = ({ href, text, icon, className }) => {
  return (
    <a className={`${styles["project-card-link"]} ${className}`} href={href}>
      <span className={styles["project-card-link__icon"]}>{icon}</span>
      <span className={styles["project-card-link__text"]}>{text}</span>
    </a>
  );
};
