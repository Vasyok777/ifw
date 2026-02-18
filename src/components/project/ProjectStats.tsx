import type { Project } from "@/types";

export default function ProjectStats({ project }: { project: Project }) {
  return (
    <div className="text-ifw-gray">
      <p className="mb-1">Вже залучено у проєкт:</p>
      <p className="font-sans-wide">
        {project.invested} / {project.investedTotal}
      </p>
      <p className="mt-3">
        <span className="font-semibold">{project.certificates}</span>{" "}
        сертифікатів вже активовано
      </p>
      <p className="mt-3">Кількість сертифікатів обмежена.</p>
    </div>
  );
}
