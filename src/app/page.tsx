"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RESPONSIVE_PADDING, BUTTON_STYLES } from "@/constants/styles";

const Homepage = () => {
  return (
    <main
      className={`h-full flex flex-col lg:flex-row ${RESPONSIVE_PADDING}`}
      aria-label="Homepage main content"
    >
      <section
        className="h-1/2 lg:h-full lg:w-1/2 relative"
        aria-label="Profile image"
      >
        <Image
          src={"/picture-of-me-homepage.png"}
          alt="Portrait of Jason Thompson"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="rounded-t-3xl object-contain"
        />
      </section>
      <section className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center text-primary-text text-center lg:text-left">
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
        <div className="flex w-full flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center">
          <Link
            href="/portfolio"
            className={BUTTON_STYLES.primary}
            aria-label="View my work portfolio"
          >
            View My Work
          </Link>
          <Link
            href="/contact"
            className={BUTTON_STYLES.secondary}
            aria-label="Contact me"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Homepage;
