import Image from "next/image";
import React from "react";
import { Project } from "@/data/projects";
import { CARD_HOVER_STYLES } from "@/constants/styles";

type PropsList = { project: Project };

const PortfolioPane = (props: PropsList) => {
  const isAppCard = props.project.card.type === "app";

  return (
    <div
      className={`${CARD_HOVER_STYLES} flex w-[90vw] max-w-full flex-col items-center justify-center sm:w-[420px] md:w-[480px]`}
    >
      <h1 className="font-semibold py-2">
        {props.project.name.replace("_", " ")}
      </h1>
      <div
        className={`relative h-[200px] w-full overflow-hidden rounded sm:h-[220px] md:h-[235px] ${
          isAppCard ? "bg-transparent" : ""
        }`}
      >
        {props.project.card.type === "app" ? (
          <div className="flex h-full items-center justify-center gap-5 px-3 sm:gap-7 sm:px-6 md:gap-9">
            <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-[22%] shadow-xl sm:h-36 sm:w-36 md:h-40 md:w-40">
              <Image
                src={props.project.img}
                alt={props.project.alt_text}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 112px, (max-width: 768px) 144px, 160px"
                priority={false}
              />
            </div>
            <div className="max-w-[14rem] text-left text-primary-text">
              <p className="text-xl font-bold leading-tight sm:text-2xl md:text-3xl">
                {props.project.card.tagline}
              </p>
              <p className="mt-3 text-xs font-semibold leading-relaxed text-primary-text/80 sm:text-sm md:text-base">
                {props.project.card.platforms.join(" · ")}
              </p>
            </div>
          </div>
        ) : (
          <Image
            src={props.project.img}
            alt={props.project.alt_text}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 90vw, (max-width: 768px) 420px, 480px"
            priority={false}
          />
        )}
      </div>
      <div className="flex min-h-[3rem] w-full max-w-sm items-center justify-center px-3 text-center">
        {props.project.short_desc}
      </div>
    </div>
  );
};

export default PortfolioPane;
