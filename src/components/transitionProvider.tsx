"use client";

import { AnimatePresence } from "framer-motion";
import React, { ReactNode } from "react";
import Navbar from "./navbar";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

type LayoutProps = { children?: ReactNode };

const TransitionProvider = (props: LayoutProps) => {
  let pageName: string = FormatPathName();

  return (
    <AnimatePresence mode="wait">
      <div key={pageName} className="w-screen h-screen">
        <motion.div
          className="h-screen w-screen fixed bg-[#181926] rounded-b-[100px] z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.div
          className="fixed m-auto top-0 bottom-0 left-0 right-0 text-[#cad3f5] text-8xl cursor-default z-50 w-fit h-fit"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {pageName}
        </motion.div>
        <motion.div
          className="h-screen w-screen fixed bg-[#181926] rounded-t-[100px] bottom-0 z-40"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
        />
        <div className="h-24">
          <Navbar />
        </div>
        <div className="h-[calc(100vh-6rem)]">{props.children}</div>
      </div>
    </AnimatePresence>
  );
};

function FormatPathName(): string {
  let pathName: string = usePathname();

  pathName = pathName
    .substring(pathName.lastIndexOf("/"), pathName.length)
    .substring(1)
    .replace("_", " ")
    .replace("-", " ");
  pathName = pathName.charAt(0).toUpperCase() + pathName.slice(1);

  if (pathName === "") {
    pathName = "Home";
  }

  return pathName;
}

export default TransitionProvider;
