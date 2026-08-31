export type SkillCategory =
  | "Languages"
  | "Frameworks & Libraries"
  | "Tools & Platforms"
  | "Practices";

// Lightweight proficiency signal, 1 (just getting familiar) through 5 (expert).
export type SkillLevel = 1 | 2 | 3 | 4 | 5;

export type Skill = {
  name: string;
  desc: string;
  category: SkillCategory;
  level: SkillLevel;
  // Optional link to a project on the site that demonstrates this skill.
  // `external: true` for links off-site (e.g. a live app), otherwise treated
  // as an internal /portfolio/[name] route.
  projectLink?: { label: string; href: string; external?: boolean };
};

export const skillList: Array<Skill> = [
  {
    name: "Java",
    desc: "I started learning Java in my last year of college, going back to re-do earlier C++ projects in Java to build a strong foundation. I used it daily for two years at [24]7.ai, then continued using it daily in my next role at Tyler Technologies. I earned an Oracle Certified Associate - Java SE 8 Programmer Certification in September 2023. It's not part of Capital One's main stack, so I use it less often these days, but I still reach for it occasionally.",
    category: "Languages",
    level: 4,
  },
  {
    name: "C++",
    desc: "C++ was the language of choice at my college, leading me to use it in almost all of my classes for the four years I was there. Throughout those four years, I continued to improve not only my C++ skills but also my overall programming skills, which have helped me in any language I choose to write in. While I have not yet used C++ professionally, I believe that I will still be able to utilize this language at a high level of skill.",
    category: "Languages",
    level: 3,
  },
  {
    name: "JavaScript / TypeScript",
    desc: "I started experimenting with JavaScript for years before I properly committed to learning it, and quickly moved into TypeScript as my primary day-to-day language. I use TypeScript daily at Capital One across a wide range of projects, and reach for it in personal projects too - it's been my most-used language for the last couple of years.",
    category: "Languages",
    level: 5,
  },
  {
    name: "Rust",
    desc: "Rust is a language I started learning in my free time, and I put it into practice by building DockSprout, a CLI tool for managing Docker Compose projects in my home lab. I'm still building depth here, but shipping a real tool with it was a great way to learn.",
    category: "Languages",
    level: 2,
    projectLink: { label: "DockSprout", href: "/portfolio/DockSprout" },
  },
  {
    name: "SQL",
    desc: "I started learning SQL about halfway through college, then got professional experience with MySQL at [24]7.ai. Since then I've picked up PostgreSQL as well - some at Tyler Technologies, and now almost daily at Capital One, both professionally and in personal projects. I'm comfortable working across SQL database types at this point.",
    category: "Languages",
    level: 4,
  },
  {
    name: "C# / .NET",
    desc: "C# and .NET are part of my day-to-day toolkit at Capital One - I use them sometimes, less often than TypeScript but more than Java these days. Still building deeper expertise here, but it's an active part of my current stack.",
    category: "Languages",
    level: 3,
  },
  {
    name: "Swift / SwiftUI",
    desc: "I built SumIt, a published iOS app, using SwiftUI, Core Data with CloudKit for sync, Home Screen widgets, and a companion Apple Watch app. It's personal-project-only for now, but shipping something with that much surface area gave me solid working proficiency with the Apple ecosystem.",
    category: "Languages",
    level: 3,
    projectLink: { label: "SumIt", href: "/portfolio/SumIt" },
  },
  {
    name: "React.js",
    desc: "React.js powers this site, which is where I've built up my hands-on experience with it - components, hooks, state management, and building responsive UIs. I haven't used it professionally since Capital One's frontend work is in Angular, but maintaining and evolving this site over time has given me a solid working knowledge of the library.",
    category: "Frameworks & Libraries",
    level: 3,
  },
  {
    name: "Next.js",
    desc: "I use Next.js for this site and for SimplyCandid, a project I built and maintain. Between the two I've worked with the App Router, static site generation, dynamic routes, route handlers, and metadata/SEO features. No professional use yet, but I have solid hands-on depth with the framework at this point.",
    category: "Frameworks & Libraries",
    level: 4,
    projectLink: {
      label: "SimplyCandid",
      href: "https://simplycandid.app",
      external: true,
    },
  },
  {
    name: "Nest.js",
    desc: "I have been using Nest.js extensively at Capital One in my current role. Through hands-on experience, I have developed and maintained scalable backend services, leveraging Nest.js's modular architecture and TypeScript support. My work includes building RESTful APIs, integrating with databases, and implementing robust authentication and authorization systems. This experience has deepened my understanding of modern backend development and best practices with Nest.js.",
    category: "Frameworks & Libraries",
    level: 5,
  },
  {
    name: "TailwindCSS",
    desc: "I use TailwindCSS to style this entire site - responsive layouts, a custom color system, and reusable component patterns. It's been my only real exposure to the framework, but building and maintaining a full site with it has given me solid working proficiency.",
    category: "Frameworks & Libraries",
    level: 3,
  },
  {
    name: "Spring Boot",
    desc: "I originally picked up Spring Boot to expand my Java knowledge, and I've since gotten to use it occasionally at Capital One. It's mostly dormant these days since it's not a primary tool in my day-to-day, but I still reach for it every once in a while.",
    category: "Frameworks & Libraries",
    level: 3,
  },
  {
    name: "Jenkins",
    desc: "Jenkins has been my CI/CD tool of choice across two roles now - I developed this skill at [24]7.ai, running and building Jenkinsfiles and writing new workflows from scratch, and I continue to use it daily at Capital One.",
    category: "Tools & Platforms",
    level: 5,
  },
  {
    name: "Apache Maven",
    desc: "Maven was my go-to build tool for Java projects, including at [24]7.ai where I built up strong POM file experience. It's mostly dormant these days since Java itself isn't part of my regular stack, but I still use it occasionally at Capital One.",
    category: "Tools & Platforms",
    level: 4,
  },
  {
    name: "Git",
    desc: "I've been using Git since 2017, both professionally and personally, across every project I work on at this point.",
    category: "Tools & Platforms",
    level: 5,
  },
  {
    name: "GitHub",
    desc: "I started using GitHub back in college for hosting my various projects, and I've kept exploring it more over time - that's how I picked up GitHub Actions and various CI/CD practices, which this site's own deployment pipeline runs on. I also hold a Career Essentials in GitHub Professional Certificate from May 2024.",
    category: "Tools & Platforms",
    level: 4,
  },
  {
    name: "Jira",
    desc: "Jira has been part of my day-to-day across three roles now - I picked it up at [24]7.ai tracking every story in detail, and I've used it daily since at both Tyler Technologies and Capital One.",
    category: "Tools & Platforms",
    level: 5,
  },
  {
    name: "Apache Kafka",
    desc: "I first picked up Kafka at [24]7.ai when a project needed it - I dove in, learned it deeply, and took that project from conception to production. It didn't come up at Tyler Technologies, but I use it frequently at Capital One now.",
    category: "Tools & Platforms",
    level: 5,
  },
  {
    name: "Docker",
    desc: "Docker's mostly a home lab thing for me - I run a bunch of self-hosted applications, all managed with Docker Compose, and built DockSprout to make managing that setup easier. I use it occasionally at Capital One too, just not as heavily as at home.",
    category: "Tools & Platforms",
    level: 4,
    projectLink: { label: "DockSprout", href: "/portfolio/DockSprout" },
  },
  {
    name: "Agile Development",
    desc: "I've practiced Agile development across all three of my roles now - [24]7.ai, Tyler Technologies, and Capital One - participating in sprint planning, daily stand-ups, retrospectives, and working closely with cross-functional teams to deliver iterative improvements.",
    category: "Practices",
    level: 5,
  },
  {
    name: "Multithreading",
    desc: "Multithreading is a skill that I started learning in college, giving me a strong understanding of the fundamentals of multithreading and the specifics of multithreading in C++. I was able to successfully utilize my strong knowledge of multithreading to help create a complex multithreaded application in my previous role at [24]7.ai.",
    category: "Practices",
    level: 4,
  },
];
