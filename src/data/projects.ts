type BaseProject = {
  name: string;
  short_desc: string;
  long_desc: string;
  img: string;
  alt_text: string;
  url: string;
  hidden?: boolean;
  // ISO date (YYYY-MM-DD) for the last time you meaningfully touched this
  // project. Bump it by hand when you work on something here even if you
  // don't write a blog post about it — the homepage "Recently Active" card
  // shows whichever is newer: this date, or your latest blog post.
  // Left unset below since I don't know your real timelines; fill these in.
  updated?: string;
};

type WebsiteProject = BaseProject & {
  card: {
    type: "website";
  };
};

type AppProject = BaseProject & {
  card: {
    type: "app";
    tagline: string;
    platforms: string[];
  };
};

export type Project = WebsiteProject | AppProject;

export const projects: Project[] = [
  {
    name: "Personal_Website",
    short_desc: "A personal website to showcase my skills and projects",
    long_desc:
      "This project is a personal website built using Next.js and TypeScript, designed to showcase my portfolio and personal information. The site features a modern, responsive design with Tailwind CSS, leveraging React.js at its core to create dynamic user interfaces and single-page applications. By utilizing these technologies, the website ensures a robust, scalable, and efficient user experience. \n The codebase is hosted on GitHub, where it is managed and versioned for easy collaboration and updates. GitHub Actions automate the build and deployment processes, ensuring continuous integration and delivery. This setup allows for seamless management and quick implementation of updates, ensuring the site remains up-to-date and functional. The project is organized into well-structured directories for workflows, public assets, and source code, promoting maintainability and scalability.",
    img: "/website-homepage.png",
    card: { type: "website" },
    alt_text: "A picture of the homepage of my personal portfolio website",
    url: "https://github.com/Thompson-Jason/Personal-Website",
  },

  {
    name: "DockSprout",
    short_desc:
      "A small fast CLI tool to help manage docker containers written in Rust",
    long_desc:
      "DockSprout is a Rust-based command-line tool I built to scratch a personal itch—simplifying the management of Docker Compose projects in my home lab. It recursively scans directories to locate docker-compose.yml files and automatically brings up the associated containers using Docker Compose. To provide better control, it supports a .compose-ignore file, allowing users to exclude specific directories. This project highlights my expertise in Rust development, CLI tooling, filesystem traversal, process automation, and Docker integration, making containerized environments easier to manage.",
    img: "/docksprout-github.png",
    card: { type: "website" },
    alt_text: "A picture of the Github repo of the DockSprout project.",
    url: "https://github.com/Thompson-Jason/DockSprout",
  },

  {
    name: "SumIt",
    short_desc:
      "A native iOS app for tracking, sharing, and visualizing everyday counts",
    long_desc:
      "SumIt is a native Apple-platform counting app I built with SwiftUI. People can create standalone counters or organize them into groups for habits, goals, or everyday totals. Each counter supports custom amounts, notes, detailed history, summaries, streaks, rankings, plus configurable charts. Shared counters or groups let friends track progress together. Core Data with CloudKit powers local persistence, iCloud sync, plus collaboration. Notifications, deep links, Home Screen widgets with quick-add actions, plus a companion Apple Watch app extend the experience across Apple devices.",
    img: "/sumit-app-icon.png",
    card: {
      type: "app",
      tagline: "Count anything. Together.",
      platforms: ["iPhone", "Apple Watch", "Widgets"],
    },
    alt_text: "The blue and teal SumIt iOS app icon.",
    url: "https://apps.apple.com/us/app/sumit-tracker/id6755155624",
  },

  {
    name: "SimplyCandid",
    short_desc: "A private app focused on candid, simple user experiences",
    long_desc:
      "simplycandid is a private application I built and maintain. The source code is not public, but the live app is available at simplycandid.app. This project highlights my ability to design, build, and ship production-ready software while maintaining a private codebase.",
    img: "/coming-soon.png",
    card: { type: "website" },
    alt_text: "A preview card for simplycandid.",
    url: "https://simplycandid.app",
    hidden: true,
  },

  // {
  //   name: "obsidian-export",
  //   short_desc: "A tool for exporting Obsidian files to normal Markdown files",
  //   long_desc: "I am a contributor to obsidian-exporter, this obsidian-export project is a Rust library and command-line interface (CLI) tool designed to export an Obsidian vault to regular Markdown format. It supports exporting Obsidian Markdown files, handling [[note]] references and ![[note]] file includes, and uses .export-ignore and .gitignore patterns for exclusions. It works across multiple platforms, including Windows, Mac, Linux, and BSDs. The project isn't officially endorsed by Obsidian but provides a robust solution for converting and managing Obsidian vault content. This is a tool that I use in my workflow of hosting my own notes which can be found in the navbar.",
  //   img: "/coming-soon.png",
  //   alt_text: "temp",
  //   url: "https://github.com/zoni/obsidian-export",
  // },

  //Leave this project as the last project
  {
    name: "Coming_Soon",
    short_desc: "More projects are always being worked on",
    long_desc:
      "I am always working on new projects and continuously enhancing my skills, which means my portfolio is constantly evolving. As I explore new technologies and ideas, I regularly add fresh content to my personal website. This dynamic approach ensures that the portfolio reflects my latest work and growth as a developer. Stay tuned for exciting updates and innovative projects that will showcase my ongoing commitment to learning and development.",
    img: "/coming-soon.png",
    card: { type: "website" },
    alt_text: "A picture of the text coming soon",
    url: "https://github.com/Thompson-Jason",
  },
];

export const visibleProjects = projects.filter((project) => !project.hidden);

// Most recently touched visible project, based on `updated`. Returns null
// if no visible project has an `updated` date set.
export function getMostRecentlyUpdatedProject(): Project | null {
  const dated = visibleProjects.filter((project) => project.updated);
  if (dated.length === 0) return null;
  return dated.reduce((latest, project) =>
    project.updated! > latest.updated! ? project : latest
  );
}
