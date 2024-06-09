"use client";
import Skillblock from "@/components/skillblock";
import { motion } from "framer-motion";
import Link from "next/link";

const SkillsPage = () => {
  type Skill = { name: string; desc: string };

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
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col justify-around">
        <h1 className="flex items-center justify-center font-semibold text-4xl mt-5">
          Skills that I have and how I have them
        </h1>
        <div className="flex gap-4 flex-wrap items-center justify-center px-96 w-auto">
          {skillList.map((skill: Skill) => (
            <Link
              href={`#${skill.name}`}
              key={skill.name}
              className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
            >
              {skill.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="h-auto flex flex-col justify-around text-center gap-8 mt-96 pb-10">
        {skillList.map((skill: Skill) => (
          <div id={skill.name} key={skill.name} className="flex flex-col">
            <Skillblock skill={skill} />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillsPage;
