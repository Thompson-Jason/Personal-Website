import Image from "next/image";
import React from "react";
import { Project } from "@/data/projects";

type PropsList = { project: Project };

const PortfolioPane = (props: PropsList) => {
  return (
    <div className="flex flex-col flex-wrap justify-center items-center max-w-full">
      <h1 className="font-semibold py-2">
        {props.project.name.replace("_", " ")}
      </h1>
      <div className="relative w-full sm:w-[420px] md:w-[480px] h-[200px] sm:h-[220px] md:h-[235px]">
        <Image
          src={props.project.img}
          alt={props.project.alt_text}
          fill
          className="object-cover rounded shadow-md"
          sizes="(max-width: 640px) 90vw, (max-width: 768px) 420px, 480px"
          priority={false}
        />
      </div>
      <div className="flex items-center justify-center text-center w-11/12 sm:w-4/5 md:w-2/3 lg:w-1/2">
        {props.project.short_desc}
      </div>
    </div>
  );
};

export default PortfolioPane;
