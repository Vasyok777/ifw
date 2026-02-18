import type { Project } from "@/types";

export default function ProjectTotalSum({ project }: { project: Project }) {
  return (
    <div className="font-sans-wide font-bold">
      <p className="text-ifw-gray text-[20px] md:text-[32px] mb-1">
        Загальна <span className="accent">сума збору:</span>
      </p>
      <p className="text-ifw-gray text-[20px] md:text-[32px]">
        {project.totalSum}
      </p>
      <p className="text-ifw-gray text-[20px] md:text-[32px]">
        ({project.totalSumUah})
      </p>
    </div>
  );
}