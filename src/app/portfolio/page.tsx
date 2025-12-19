"use client";
import PortfolioPane from "@/components/portfoliopane";
import Link from "next/link";
import { projects, Project } from "@/data/projects";

const PortfolioPage = () => {
  return (
    <div className="sm:pt-8 md:pt-12 lg:pt-20 xl:pt-32">
      <div className="flex flex-col items-center">
        <div className="md:outline-double outline-[#cad3f5] p-4 m-4 inline-block md:py-6 md:px-10 md:-m-6 lg:py-14 lg:px-28 lg:-m-14 xl:py-20 xl:px-36 xl:-m-20">
          <h1 className="text-[#cad3f5] text-6xl text-center font-semibold sm:px-8 md:px-12 lg:px-20 xl:px-48">
            My Different Projects
          </h1>
          <h3 className="text-xl pt-4 text-[#cad3f5] text-center font-semibold">
            Click on each project to learn more!
          </h3>
        </div>
      </div>
      <div className="flex flex-row flex-wrap text-[#cad3f5] justify-center gap-5 sm:py-3 md:py-8 lg:py-16 xl:py-24">
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
