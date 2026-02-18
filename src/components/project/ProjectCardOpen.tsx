"use client";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/typography";
import MiniChart from "./MiniChart";
import ProjectTotalSum from "./ProjectTotalSum";
import ProjectStats from "./ProjectStats";
import VerticalCarousel from "./VerticalCarousel";
import type { Project } from "@/types";

export default function ProjectCardOpen({
  project,
  onClose,
  onImageClick,
}: {
  project: Project;
  onClose: () => void;
  onImageClick: (index: number) => void;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-6 animate-in fade-in duration-300">
      <div className="flex flex-col">
        <Heading level="h3" className="mb-6 md:mb-10">
          <span className="accent">{project.titleAccent}</span> {project.title}
        </Heading>

        <div className="text-ifw-font-gray text-xs md:text-base leading-relaxed whitespace-pre-line mb-4">
          {project.fullDescription}
        </div>

        <div className="mt-auto">
          <ProjectTotalSum project={project} />
        </div>
      </div>

      <div>
        <div className="ml-auto bg-[#7867F4] rounded-4xl w-full max-w-107 px-4 overflow-hidden">
          <VerticalCarousel
            images={project.images}
            onImageClick={onImageClick}
          />
        </div>
        <div className="flex flex-col gap-4 mt-6 md:mt-10 items-end">
          <MiniChart />
          <ProjectStats project={project} />
        </div>

        <div className="mt-6 md:mt-10 flex">
          <Button
            onClick={onClose}
            className="bg-ifw-purple ml-auto hover:bg-[#9688FF] text-ifw-gray rounded-full px-8 py-5 font-sans-wide text-[16px] md:text-[20px] h-12 md:h-15 w-full md:w-auto"
          >
            Зв&apos;язатись з менеджером
          </Button>
        </div>
      </div>
    </div>
  );
}
