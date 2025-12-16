import { projects } from "@/data/projects";
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
    <div className="min-h-screen flex flex-col gap-6 sm:gap-8 md:gap-10 text-[#cad3f5]">
      <div className="relative w-full h-40 sm:h-52 md:h-72 lg:h-96 xl:h-[50vh]">
        <Image
          src={project.img}
          alt={project.alt_text}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
          priority={false}
        />
      </div>
      <Link
        href={project.github_url}
        className="text-3xl sm:text-4xl md:text-5xl text-center font-semibold px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 underline text-[#7dc4e4]"
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
  return projects.map((project) => ({
    projectName: project.name,
  }));
}

export default ProjectPage;
