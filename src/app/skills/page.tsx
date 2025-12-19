"use client";
import Skillblock from "@/components/skillblock";
import Link from "next/link";
import { Skill, skillList } from "@/data/skills";

const SkillsPage = () => {
  return (
    <div className="overflow-x-hidden text-primary-text">
      <div className="h-screen flex flex-col items-center justify-evenly">
        <div className="flex flex-col justify-center items-center font-semibold sm:outline-double sm:py-10 sm:px-14 sm:-m-10 md:py-10 md:px-20 md:-m-10 lg:py-16 lg:px-36 lg:-m-16 xl:py-20 xl:px-44 xl:-m-20">
          <h1 className="text-6xl text-center">Skills and Background</h1>
          <h1 className="pt-4 text-xl">Click on each skill to learn more!</h1>
        </div>
        <div className="flex gap-4 flex-wrap items-center justify-center w-1/2">
          {skillList.map((skill: Skill) => (
            <Link
              href={`#${skill.name}`}
              key={skill.name}
              className="rounded p-2 text-sm cursor-pointer bg-primary-bg text-primary-text hover:bg-primary-accent hover:text-primary-secondary transition-colors"
            >
              {skill.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-4xl pb-6">
          {skillList.map((skill: Skill) => (
            <div
              id={skill.name}
              key={skill.name}
              className="bg-primary-surface rounded-xl border border-primary-border shadow-md p-6 transition-all duration-200 hover:shadow-xl hover:border-primary-success hover:scale-105"
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
