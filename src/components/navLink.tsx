"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// @ts-ignore
const NavLink = ({ link }) => {
  const pathName: string = usePathname();

  return (
    <div>
      <Link
        className={`rounded p-1 ${
          pathName === link.url && "bg-black text-white"
        }`}
        href={link.url}
      >
        {link.title}
      </Link>
    </div>
  );
};

export default NavLink;
