"use client";
import PortfolioPane from "@/components/portfoliopane";
import Link from "next/link";
import { useEffect, useState } from "react";
import { projects, Project } from "@/data/projects";

const PortfolioPage = () => {
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRendered(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={isRendered ? "" : "hidden"}>
      <h1 className="text-4xl text-center font-semibold sm:px-8 md:px-12 lg:px-20 xl:px-48">
        My different projects
      </h1>
      <h3 className="text-xl text-center font-semibold">
        Click on each project to learn more!
      </h3>
      <div className="flex flex-row flex-wrap justify-center gap-5 sm:py-3 md:py-8 lg:py-16 xl:py-24">
        {projects.map((project: Project) => (
          <Link href={`/portfolio/${project.name}`} key={project.name}>
            <PortfolioPane project={project} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
