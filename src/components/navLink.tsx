"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTransitionNavigation } from "@/components/transitionNavigation";

// @ts-ignore
const NavLink = ({ link }) => {
  const pathName: string = usePathname();
  const { startNavigate, isTransitioning } = useTransitionNavigation();

  return (
    <div>
      <Link
        className={`rounded p-1 ${
          pathName === link.url && "bg-[#494d64] text-[#cad3f5]"
        }`}
        href={link.url}
        onClick={(e) => {
          if (isTransitioning) {
            e.preventDefault();
            return;
          }
          if (pathName !== link.url) {
            e.preventDefault();
            startNavigate(link.url);
          }
        }}
      >
        {link.title}
      </Link>
    </div>
  );
};

export default NavLink;
