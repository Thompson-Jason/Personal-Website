import { visibleProjects } from "@/data/projects";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";

type Props = { params: { projectName: string } };

const ProjectPage = ({ params }: Props) => {
  const { projectName } = params;
  const project = visibleProjects.find((proj) => proj.name === projectName)!;

  if (!project) {
    return notFound();
  }

  const isAppProject = project.card.type === "app";

  return (
    <div className="min-h-screen flex flex-col gap-6 sm:gap-8 md:gap-10 text-primary-text">
      <div
        className="relative w-full h-40 sm:h-52 md:h-72 lg:h-96 xl:h-[50vh] overflow-hidden"
      >
        {isAppProject ? (
          <div className="flex h-full items-center justify-center">
            <div className="relative aspect-square h-[82%] overflow-hidden rounded-[22%] shadow-2xl">
              <Image
                src={project.img}
                alt={project.alt_text}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 132px, (max-width: 1024px) 315px, 410px"
                priority={false}
              />
            </div>
          </div>
        ) : (
          <Image
            src={project.img}
            alt={project.alt_text}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
            priority={false}
          />
        )}
      </div>
      <Link
        href={project.url}
        className="text-3xl sm:text-4xl md:text-5xl text-center font-semibold px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 underline text-primary-accent"
      >
        {project.name.replace("_", " ")}
      </Link>
      <div className="text-center text-base sm:text-lg py-4 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {project.long_desc}
      </div>
    </div>
  );
};

export async function generateStaticParams() {
  return visibleProjects.map((project) => ({
    projectName: project.name,
  }));
}

export default ProjectPage;
