import Link from "next/link";

import styles from "./layout-link.module.css";

export const LayoutLink: React.FC<{
  href: string;
  text: string;
  icon?: React.ReactNode;
  className?: string;
  type: "navigation" | "socials";
}> = ({ href, text, icon, className, type = "navigation" }) => {
  const popoverClass = {
    navigation: styles["layout-link__popover--navigation"],
    socials: styles["layout-link__popover--socials"],
  }[type];

  return (
    <Link className={`${styles["layout-link"]} ${className}`} href={href}>
      {icon}
      <span className={`${styles["layout-link__popover"]} ${popoverClass}`}>
        {text}
      </span>
    </Link>
  );
};
