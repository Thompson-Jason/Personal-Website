import { Project, projects } from "@/data/projects";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";

type Props = { params: { projectName: string } };

const ProjectPage = ({ params }: Props) => {
  const { projectName } = params;
  const project = projects.find((proj) => proj.name === projectName)!;

  if (!project) {
    return notFound();
  }

  return (
    <div className="h-screen flex flex-col justify-between">
      <div className="relative w-full sm:h-[5vh] md:h-[20vh] lg:h-[40vh] xl:h-[50vh]">
        <div className="-z-10">
          <Image
            src={project.img}
            alt={project.alt_text}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </div>
      <Link
        href={project.github_url}
        className="text-4xl text-center font-semibold sm:px-8 md:px-12 lg:px-20 xl:px-48"
      >
        {project.name.replace("_", " ")}
      </Link>
      <div className="text-center py-5 px-16">{project.long_desc}</div>
    </div>
  );
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    projectName: project.name,
  }));
}

export default ProjectPage;
