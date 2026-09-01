"use client";

import { ReactTyped } from "react-typed";

const ROLES: Array<string> = [
  "Senior Software Engineer",
  "Home-lab tinkerer",
  "iOS app builder",
  "Always shipping something",
];

const HomepageIntro = () => {
  return (
    <h1 className="text-4xl font-bold md:text-6xl">
      Hi, I&apos;m Jason Thompson.
      <span className="block text-primary-accent text-2xl md:text-4xl mt-2 min-h-[1.5em]">
        {/* Purely decorative - the typing animation updates rapidly and
            would otherwise get announced character-by-character. Screen
            readers get a single static line instead. */}
        <span aria-hidden="true">
          <ReactTyped
            strings={ROLES}
            typeSpeed={60}
            backSpeed={30}
            backDelay={1500}
            startDelay={300}
            loop
          />
        </span>
        <span className="sr-only">{ROLES[0]}</span>
      </span>
    </h1>
  );
};

export default HomepageIntro;
