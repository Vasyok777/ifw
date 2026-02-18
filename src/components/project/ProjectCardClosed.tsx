"use client";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/typography";
import MiniChart from "./MiniChart";
import ProjectTotalSum from "./ProjectTotalSum";
import ProjectStats from "./ProjectStats";
import type { Project } from "@/types";

export default function ProjectCardClosed({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-6 animate-in fade-in duration-300">
      <div className="flex flex-col">
        <Heading level="h3" className="mb-6 md:mb-10">
          <span className="accent">{project.titleAccent}</span> {project.title}
        </Heading>
        <p className="text-ifw-font-gray text-xs md:text-base leading-relaxed mb-4">
          {project.shortDescription}
        </p>
        <p className="text-ifw-gray text-[20px] mb-10">
          (Тисни <span className="font-bold font-sans-wide">Про проект</span>{" "}
          щоб дізнатись більше)
        </p>

        <div className="mt-auto space-y-6">
          <ProjectTotalSum project={project} />
          <Button
            onClick={onOpen}
            className="bg-ifw-purple hover:bg-[#9688FF] text-ifw-gray rounded-full px-8 py-5 font-sans-wide text-[16px] md:text-[20px] h-12 md:h-15 w-full md:w-auto"
          >
            Про проект
          </Button>
        </div>
      </div>

      <div>
        <div className="relative w-full max-w-[428px] max-h-[256px] ml-auto mb-8 md:mb-[78px] aspect-4/3 rounded-xl overflow-hidden self-start">
          <img
            src={project.images[0]}
            alt={project.titleAccent}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex gap-4 flex-col md:flex-row">
          <ProjectStats project={project} />
          <MiniChart />
        </div>
      </div>
    </div>
  );
}
