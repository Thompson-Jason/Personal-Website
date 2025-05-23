"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Homepage = () => {
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRendered(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main
      className={`h-full flex flex-col lg:flex-row sm:px-8 md:px-12 lg:px-20 xl:px-48 ${
        isRendered ? "" : "hidden"
      }`}
      aria-label="Homepage main content"
    >
      <section className="h-1/2 lg:h-full lg:w-1/2 relative" aria-label="Profile image">
        <Image
          src={"/picture-of-me-homepage.png"}
          alt="Portrait of Jason Thompson"
          fill
          priority
          className="rounded-t-3xl object-contain"
        />
      </section>
      <section className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center text-[#cad3f5]">
        <h1 className="text-4xl font-bold md:text-6xl">
          Software Engineer at Capital One.
        </h1>
        <p className="md:text-xl">
          Results-oriented Computer Science graduate with strong skills in Java,
          C++, and Python. Experienced Software Engineer with expertise in
          Interactive Voice Response (IVR) systems, utilizing industry-standard
          tools and Agile methodologies. Adept at problem-solving and
          collaborative team efforts.
        </p>
        <div className="flex w-full gap-4">
          <Link
            href="/portfolio"
            className="p-4 rounded-lg ring-1 ring-[#181926] bg-[#181926] text-[#cad3f5] focus:outline-none focus:ring-2 focus:ring-[#b7bdf8]"
            aria-label="View my work portfolio"
            role="button"
          >
            View My Work
          </Link>
          <Link
            href="/contact"
            className="p-4 rounded-lg ring-2 ring-[#181926] text-[#cad3f5] focus:outline-none focus:ring-2 focus:ring-[#b7bdf8]"
            aria-label="Contact me"
            role="button"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Homepage;
