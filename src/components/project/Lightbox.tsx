"use client";

import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Lightbox({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
        onClick={onClose}
      >
        <X className="w-8 h-8" />
      </button>
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
      >
        <ChevronLeft className="w-10 h-10" />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
      >
        <ChevronRight className="w-10 h-10" />
      </button>
      <div
        className="max-w-4xl max-h-[80vh] w-full mx-4 rounded-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[currentIndex]}
          alt={`Photo ${currentIndex + 1}`}
          className="w-full h-full object-contain"
        />
        <p className="text-center text-gray-400 text-sm mt-2">
          {currentIndex + 1} / {images.length}
        </p>
      </div>
    </div>
  );
}
