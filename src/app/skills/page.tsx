"use client";
import Skillblock from "@/components/skillblock";
import Link from "next/link";
import { useEffect, useState } from "react";

const SkillsPage = () => {
  type Skill = { name: string; desc: string };

  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRendered(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const skillList: Array<Skill> = [
    {
      name: "Java",
      desc: "This is just a sample few sentences. This is where I would describe how/where I used/learned this skill",
    },
    {
      name: "C++",
      desc: "This is just a sample few sentences. This is where I would describe how/where I used/learned this skill",
    },
    {
      name: "JavaScript",
      desc: "This is just a sample few sentences. This is where I would describe how/where I used/learned this skill",
    },
    {
      name: "TypeScript",
      desc: "This is just a sample few sentences. This is where I would describe how/where I used/learned this skill",
    },
    {
      name: "Python",
      desc: "This is just a sample few sentences. This is where I would describe how/where I used/learned this skill",
    },
    {
      name: "React.js",
      desc: "This is just a sample few sentences. This is where I would describe how/where I used/learned this skill",
    },
    {
      name: "Next.js",
      desc: "This is just a sample few sentences. This is where I would describe how/where I used/learned this skill",
    },
    {
      name: "TailwindCSS",
      desc: "This is just a sample few sentences. This is where I would describe how/where I used/learned this skill",
    },
    {
      name: "Jenkins",
      desc: "This is just a sample few sentences. This is where I would describe how/where I used/learned this skill",
    },
    {
      name: "Maven",
      desc: "This is just a sample few sentences. This is where I would describe how/where I used/learned this skill",
    },
    {
      name: "Git",
      desc: "This is just a sample few sentences. This is where I would describe how/where I used/learned this skill",
    },
    {
      name: "Github",
      desc: "This is just a sample few sentences. This is where I would describe how/where I used/learned this skill",
    },
    {
      name: "Framer Motion",
      desc: "This is just a sample few sentences. This is where I would describe how/where I used/learned this skill",
    },
    {
      name: "Jira",
      desc: "This is just a sample few sentences. This is where I would describe how/where I used/learned this skill",
    },
    {
      name: "Agile Development",
      desc: "This is just a sample few sentences. This is where I would describe how/where I used/learned this skill",
    },
    {
      name: "SQL",
      desc: "This is just a sample few sentences. This is where I would describe how/where I used/learned this skill",
    },
    {
      name: "Node.js",
      desc: "This is just a sample few sentences. This is where I would describe how/where I used/learned this skill",
    },
    {
      name: "Kafka",
      desc: "This is just a sample few sentences. This is where I would describe how/where I used/learned this skill",
    },
    {
      name: "Spring Boot",
      desc: "This is just a sample few sentences. This is where I would describe how/where I used/learned this skill",
    },
  ];

  return (
    <div className={isRendered ? "" : "hidden"}>
      <div className="h-screen flex flex-col items-center justify-evenly">
        <div className="flex flex-col justify-center items-center font-semibold">
          <h1 className="text-4xl">Skills that I have and how I have them</h1>
          <h3 className="text-xl">Click on each skill to learn more!</h3>
        </div>
        {/* <div className="w-1/2 flex flex-row flex-wrap justify-center items-center"> */}
        <div className="flex gap-4 flex-wrap items-center justify-center px-96 w-auto">
          {skillList.map((skill: Skill) => (
            <Link
              href={`#${skill.name}`}
              key={skill.name}
              className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
            >
              {skill.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-8 pb-6">
        {skillList.map((skill: Skill) => (
          <div id={skill.name} key={skill.name} className="">
            <Skillblock skill={skill} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;
