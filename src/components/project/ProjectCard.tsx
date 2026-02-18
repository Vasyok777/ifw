"use client";

import { useState } from "react";
import ProjectCardClosed from "./ProjectCardClosed";
import ProjectCardOpen from "./ProjectCardOpen";
import Lightbox from "./Lightbox";
import type { Project } from "@/types";

export type { Project };

export default function ProjectCard({ project }: { project: Project }) {
  const [isOpen, setIsOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex((prev) =>
      prev !== null
        ? (prev - 1 + project.images.length) % project.images.length
        : null,
    );
  const nextImage = () =>
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % project.images.length : null,
    );

  return (
    <>
      <div className="bg-background rounded-[24px] md:rounded-[64px] p-4 md:p-15 border overflow-hidden transition-all duration-500 ease-in-out">
        {isOpen ? (
          <ProjectCardOpen
            project={project}
            onClose={() => setIsOpen(false)}
            onImageClick={openLightbox}
          />
        ) : (
          <ProjectCardClosed project={project} onOpen={() => setIsOpen(true)} />
        )}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={project.images}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </>
  );
}
