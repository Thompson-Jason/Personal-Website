import React from "react";

type Skill = { name: string; desc: string };
type PropsList = { skill: Skill };

const Skillblock = (props: PropsList) => {
  return (
    <div
      id={props.skill.name}
      className="bg-[#181926] outline-double rounded-3xl flex flex-col justify-center items-center mx-auto overflow-auto"
    >
      <h1 className="flex items-center justify-center font-semibold text-4xl mt-5">
        {props.skill.name}
      </h1>
      <div className="flex justify-center text-center my-5 px-5">
        {props.skill.desc}
      </div>
    </div>
  );
};

export default Skillblock;
