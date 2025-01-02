import { IconHome, IconPackage, IconStack } from "@tabler/icons-react";

import { LayoutLink } from "./layout-link";

export const Navigation = () => {
  return (
    <>
      <LayoutLink
        type="navigation"
        icon={<IconHome />}
        href="#about"
        text="Home"
      />
      <LayoutLink
        type="navigation"
        icon={<IconStack />}
        href="#skills"
        text="Skills"
      />
      <LayoutLink
        type="navigation"
        icon={<IconPackage />}
        href="#projects"
        text="Projects"
      />
    </>
  );
};
