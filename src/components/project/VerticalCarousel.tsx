"use client";

import { useState, useEffect, useRef } from "react";

const VISIBLE_COUNT = 3;
const IMG_GAP = 12;

export default function VerticalCarousel({
  images,
  onImageClick,
}: {
  images: string[];
  onImageClick: (index: number) => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [containerH, setContainerH] = useState<number | undefined>(undefined);
  const scrollPos = useRef(0);

  useEffect(() => {
    function calc() {
      if (imgRef.current) {
        const h = imgRef.current.getBoundingClientRect().height;
        if (h > 0) {
          setContainerH(h * VISIBLE_COUNT + IMG_GAP * (VISIBLE_COUNT - 1));
        }
      }
    }
    const timer = setTimeout(calc, 300);
    window.addEventListener("resize", calc);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", calc);
    };
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animId: number;
    const speed = 0.5;

    function animate() {
      if (!isPaused && el) {
        scrollPos.current += speed;
        const half = el.scrollHeight / 2;
        if (half > 0 && scrollPos.current >= half) {
          scrollPos.current -= half;
        }
        el.scrollTop = scrollPos.current;
      }
      animId = requestAnimationFrame(animate);
    }

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [isPaused]);

  const doubled = [...images, ...images];

  return (
    <div
      ref={scrollRef}
      className="overflow-hidden rounded-xl"
      style={{
        height: containerH ? `${containerH}px` : "auto",
        maskImage:
          "linear-gradient(to bottom, transparent 0%, black 4%, black 96%, transparent 100%)",
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="flex flex-col gap-3">
        {doubled.map((src, i) => (
          <img
            key={i}
            ref={i === 0 ? imgRef : undefined}
            src={src}
            alt={`Project photo ${(i % images.length) + 1}`}
            className="w-full rounded-lg cursor-pointer shrink-0 object-cover h-[222.75px]"
            onLoad={() => {
              if (i === 0 && imgRef.current && !containerH) {
                const h = imgRef.current.getBoundingClientRect().height;
                if (h > 0)
                  setContainerH(
                    h * VISIBLE_COUNT + IMG_GAP * (VISIBLE_COUNT - 1),
                  );
              }
            }}
            onClick={() => onImageClick(i % images.length)}
          />
        ))}
      </div>
    </div>
  );
}