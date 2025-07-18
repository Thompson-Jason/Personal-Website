import Image from "next/image";
import React from "react";
import { Project } from "@/data/projects";

type PropsList = { project: Project };

const PortfolioPane = (props: PropsList) => {
  return (
    <div className="flex flex-col flex-wrap justify-center items-center">
      <h1 className="font-semibold py-2">
        {props.project.name.replace("_", " ")}
      </h1>
      <div className="relative w-[480px] h-[235px] max-w-full">
        <Image
          src={props.project.img}
          alt={props.project.alt_text}
          fill
          className="object-cover rounded shadow-md"
          sizes="480px"
          priority={false}
        />
      </div>
      <div className="flex items-center justify-center text-center w-1/2">
        {props.project.short_desc}
      </div>
    </div>
  );
};

export default PortfolioPane;
