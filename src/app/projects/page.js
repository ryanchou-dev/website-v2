import Link from "next/link";
import Image from "next/image";
import { projects } from "../../../public/projects";

export const metadata = {
  title: "ryan's projects",
  description:
    "while these projects aren't necessarily impressive, i had a really fun time making them.",
};

export default function Projects() {
  return (
    <div className="mt-32 pb-16">
      <p className=" text-4xl text-[#ba7472] font-semibold sm:text-5xl">
        projects
      </p>
      <p className=" text-md text-gray-400  sm:text-lg mt-1">
        while these projects aren&apos;t necessarily impressive, i had a really
        fun time making them.
      </p>
      <p className="text-4xl text-gray-600/40">~</p>

      <div className="space-y-24">
        {projects.map((project) => (
          <div
            key={project.title}
            className="mt-4 lg:flex justify-start items-start"
          >
            <Image
              src={project.imagePath}
              height={500}
              width={500}
              alt={project.title}
              className="rounded-lg lg:inline"
            />
            <div className="mt-2 lg:mt-0 lg:ml-8">
              <p className="inline text-2xl">{project.title}</p>
              <p className="inline lg:block text-lg lg:ml-0 ml-2  text-gray-500/40">
                {project.year}
              </p>
              <div
                className="mt-4"
                dangerouslySetInnerHTML={{
                  __html: project.description,
                }}
              />
              <p className="mt-4">
                {project.links.map((link) => (
                  <div key={link[1]}>
                    <span className="text-boba">&#8226;</span>{" "}
                    <a
                      href={link[1]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-2 hover:bg-gray-300 rounded-lg p-0.5 transition  hover:bg-opacity-50  decoration-gray-400"
                    >
                      {link[0]}
                    </a>
                    <br />
                  </div>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
