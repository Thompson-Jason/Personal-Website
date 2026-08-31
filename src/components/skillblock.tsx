import React from "react";
import { Skill } from "@/data/skills";

type PropsList = { skill: Skill };

const LEVEL_LABELS = [
  "Familiar",
  "Developing",
  "Proficient",
  "Advanced",
  "Expert",
];

const MAX_LEVEL = 5;

const SkillLevelMeter = ({ level }: { level: Skill["level"] }) => {
  const label = LEVEL_LABELS[level - 1];

  return (
    <div
      className="flex items-center gap-2"
      role="img"
      aria-label={`Proficiency: ${label} (${level} out of ${MAX_LEVEL})`}
    >
      <div className="flex gap-1">
        {Array.from({ length: MAX_LEVEL }).map((_, index) => (
          <span
            key={index}
            className={`h-2 w-4 rounded-full ${
              index < level ? "bg-primary-accent" : "bg-primary-border"
            }`}
          />
        ))}
      </div>
      <span className="text-xs font-medium text-primary-text/60">
        {label}
      </span>
    </div>
  );
};

const Skillblock = (props: PropsList) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <h3 className="font-semibold text-xl text-primary-accent">
          {props.skill.name}
        </h3>
        <SkillLevelMeter level={props.skill.level} />
      </div>
      <p className="text-primary-text/80 text-sm leading-relaxed">
        {props.skill.desc}
      </p>
    </div>
  );
};

export default Skillblock;
