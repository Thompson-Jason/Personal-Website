import React from "react";

type Skill = { name: string; desc: string };
type PropsList = { skill: Skill };

const Skillblock = (props: PropsList) => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="font-semibold text-xl text-primary-accent">
        {props.skill.name}
      </h3>
      <p className="text-primary-text/80 text-sm leading-relaxed">
        {props.skill.desc}
      </p>
    </div>
  );
};

export default Skillblock;
