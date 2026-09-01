"use client";
import Skillblock from "@/components/skillblock";
import Link from "next/link";
import { Skill, SkillCategory, skillList } from "@/data/skills";
import { CARD_STYLES } from "@/constants/styles";
import TiltCard from "@/components/tiltCard";

const CATEGORY_ORDER: Array<SkillCategory> = [
  "Languages",
  "Frameworks & Libraries",
  "Tools & Platforms",
  "Practices",
];

const skillsByCategory = CATEGORY_ORDER.map((category) => ({
  category,
  skills: skillList.filter((skill) => skill.category === category),
})).filter((group) => group.skills.length > 0);

// Skill names can contain characters (#, /, spaces) that aren't valid in an
// HTML id or a bare URL fragment - slugify for the anchor, keep the raw name
// for display.
const skillSlug = (name: string) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const SkillsPage = () => {
  return (
    <div className="overflow-x-hidden text-primary-text">
      <div className="h-screen flex flex-col items-center justify-evenly px-4">
        <div className="flex flex-col justify-center items-center font-semibold sm:outline-double sm:py-6 sm:px-8 sm:-m-6 md:py-10 md:px-20 md:-m-10 lg:py-16 lg:px-36 lg:-m-16 xl:py-20 xl:px-44 xl:-m-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center">
            Skills and Background
          </h1>
          <p className="pt-2 sm:pt-4 text-base sm:text-lg md:text-xl font-semibold">
            Click on each skill to learn more!
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:gap-4 items-center justify-center w-full sm:w-4/5 md:w-2/3 lg:w-1/2 px-2">
          {skillsByCategory.map(({ category, skills }) => (
            <div
              key={category}
              className="flex flex-col gap-2 items-center w-full"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-primary-text/50">
                {category}
              </span>
              <div className="flex gap-2 sm:gap-4 flex-wrap items-center justify-center">
                {skills.map((skill: Skill) => (
                  <Link
                    href={`#${skillSlug(skill.name)}`}
                    key={skill.name}
                    className="rounded px-3 py-2 text-sm cursor-pointer bg-primary-bg text-primary-text hover:bg-primary-accent hover:text-primary-secondary transition-colors"
                  >
                    {skill.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center px-4">
        <div className="flex flex-col gap-10 w-full max-w-6xl pb-10">
          {skillsByCategory.map(({ category, skills }) => (
            <section key={category} className="flex flex-col gap-4 sm:gap-6">
              <h2 className="text-2xl sm:text-3xl font-semibold text-primary-text border-b border-primary-border pb-2">
                {category}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                {skills.map((skill: Skill) => (
                  <TiltCard
                    id={skillSlug(skill.name)}
                    key={skill.name}
                    className={CARD_STYLES}
                  >
                    <Skillblock skill={skill} />
                  </TiltCard>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
