"use client";
import Skillblock from "@/components/skillblock";
import Link from "next/link";
import { Skill, skillList } from "@/data/skills";

const SkillsPage = () => {
  return (
    <div className="overflow-x-hidden text-primary-text">
      <div className="h-screen flex flex-col items-center justify-evenly px-4">
        <div className="flex flex-col justify-center items-center font-semibold sm:outline-double sm:py-6 sm:px-8 sm:-m-6 md:py-10 md:px-20 md:-m-10 lg:py-16 lg:px-36 lg:-m-16 xl:py-20 xl:px-44 xl:-m-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center">
            Skills and Background
          </h1>
          <h1 className="pt-2 sm:pt-4 text-base sm:text-lg md:text-xl">
            Click on each skill to learn more!
          </h1>
        </div>
        <div className="flex gap-2 sm:gap-4 flex-wrap items-center justify-center w-full sm:w-4/5 md:w-2/3 lg:w-1/2 px-2">
          {skillList.map((skill: Skill) => (
            <Link
              href={`#${skill.name}`}
              key={skill.name}
              className="rounded px-3 py-2 text-sm cursor-pointer bg-primary-bg text-primary-text hover:bg-primary-accent hover:text-primary-secondary transition-colors"
            >
              {skill.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex justify-center px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 w-full max-w-6xl pb-10">
          {skillList.map((skill: Skill) => (
            <div
              id={skill.name}
              key={skill.name}
              className="bg-primary-surface rounded-xl border border-primary-border shadow-md p-4 sm:p-6 transition-all duration-200 hover:shadow-xl hover:border-primary-success hover:scale-[1.02]"
            >
              <Skillblock skill={skill} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
