export type Project = {
    name: string;
    short_desc: string;
    long_desc: string;
    img: string;
    alt_text: string;
    github_url: string;
}

export const projects: Project[] = [
    {
        name: "Personal_Website",
        short_desc: "A personal website to showcase my skills and projects",
        long_desc: "This project is a personal website built using Next.js and TypeScript, designed to showcase your portfolio and personal information. The site features a modern, responsive design with Tailwind CSS, leveraging React.js at its core to create dynamic user interfaces and single-page applications. By utilizing these technologies, the website ensures a robust, scalable, and efficient user experience. \n The codebase is hosted on GitHub, where it is managed and versioned for easy collaboration and updates. GitHub Actions automate the build and deployment processes, ensuring continuous integration and delivery. This setup allows for seamless management and quick implementation of updates, ensuring the site remains up-to-date and functional. The project is organized into well-structured directories for workflows, public assets, and source code, promoting maintainability and scalability.",
        img: "/website-homepage.png",
        alt_text: "A picture of the homepage of my personal portfolio website",
        github_url: "https://github.com/Thompson-Jason/Personal-Website",
      },
]