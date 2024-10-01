"use client";
import React from "react";
import {
  IconHome,
  IconMessage,
  IconUser,
  IconAward,
  IconBrandAuth0,
  IconScript,
  IconUserCog,
} from "@tabler/icons-react";
import { FloatingDock } from "./floating-dock";

export function FloatingNavDemo() {
  const navItems = [
    {
      title: "Home",
      href: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      title: "About",
      href: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      title: "Skills",
      href: "/skills",
      icon: (
        <IconBrandAuth0 className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      title: "Certificates",
      href: "/certificates",
      icon: (
        <IconAward className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      title: "Project",
      href: "/project",
      icon: (
        <IconScript className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      title: "Experience",
      href: "/experience",
      icon: (
        <IconUserCog className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      title: "Contact",
      href: "/contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];

  return (
    <div>
      <FloatingDock items={navItems} />
    </div>
  );
}
