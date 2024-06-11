"use client";
import Skillblock from "@/components/skillblock";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Skill, skillList } from "@/data/skills";

const SkillsPage = () => {
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRendered(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`overflow-x-hidden text-[#cad3f5] ${
        isRendered ? "" : "hidden"
      }`}
    >
      <div className="h-screen flex flex-col items-center justify-evenly">
        <div className="flex flex-col justify-center items-center font-semibold">
          <h1 className="text-4xl text-center">
            Skills that I have and how I have them
          </h1>
          <h3 className="pt-4 text-xl">Click on each skill to learn more!</h3>
        </div>
        <div className="flex gap-4 flex-wrap items-center justify-center w-1/2">
          {skillList.map((skill: Skill) => (
            <Link
              href={`#${skill.name}`}
              key={skill.name}
              className="rounded p-2 text-sm cursor-pointer bg-[#181926] text-[#cad3f5] hover:bg-[#b7bdf8] hover:text-[#24273a]"
            >
              {skill.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col w-1/2 justify-center items-center gap-8 pb-6">
          {skillList.map((skill: Skill) => (
            <div id={skill.name} key={skill.name} className="">
              <Skillblock skill={skill} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
