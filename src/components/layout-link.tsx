import Link from "next/link";

import styles from "./layout-link.module.css";

export const LayoutLink: React.FC<{
  href: string;
  text: string;
  icon?: React.ReactNode;
  className?: string;
}> = ({ href, text, icon, className }) => {
  return (
    <Link className={`${styles["layout-link"]} ${className}`} href={href}>
      {icon}
      <span className={styles["layout-link__text"]}>{text}</span>
    </Link>
  );
};
