"use client";

import { useState, useCallback, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/ui/typography";
import { statuses } from "@/data";
import { highlightAccents } from "@/lib/highlightAccents";

export default function InvestorStatus() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  const onSelect = useCallback(() => {
    if (!api) return;
    setActiveIndex(api.selectedScrollSnap());
  }, [api]);

  useEffect(() => {
    if (!api) return;
    api.scrollTo(3, false);
    onSelect();
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  const current = statuses[activeIndex] ?? statuses[0];

  return (
    <section className="mb-16 md:mb-53.25">
      <div className="max-w-[918px] mx-auto px-4">
        <Heading
          level="h2"
          align="center"
          className="mb-10 md:mb-30 text-ifw-heading"
        >
          Унікальний сертифікат та{" "}
          <span className="text-ifw-purple italic">статус</span> інвестора
        </Heading>
      </div>

      <Carousel
        setApi={setApi}
        opts={{ align: "center", loop: true }}
        className="w-full"
      >
        <CarouselContent className="-ml-2">
          {statuses.map((status, i) => {
            const isActive = i === activeIndex;
            return (
              <CarouselItem
                key={status.id}
                className="pl-2 basis-[72%] sm:basis-[50%] md:basis-[32%] lg:basis-[26%]"
              >
                <div
                  className="cursor-pointer transition-all duration-500 ease-in-out select-none"
                  style={{
                    transform: isActive ? "scale(1)" : "scale(0.886)",
                    opacity: isActive ? 1 : 0.55,
                  }}
                  onClick={() => api?.scrollTo(i)}
                >
                  <img
                    src={`/status/${status.image}`}
                    alt={`Статус ${status.name}`}
                    className="w-full aspect-[138/217] object-contain"
                    draggable={false}
                  />
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>

      <div className="flex justify-center mt-6 mb-8 md:mt-20 md:mb-30 px-4 md:px-24">
        <div
          className="relative w-full max-w-[420px] h-2.5 rounded-[100px] bg-[#3E3E40] cursor-pointer"
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const index = Math.min(
              Math.floor((x / rect.width) * statuses.length),
              statuses.length - 1,
            );
            api?.scrollTo(index);
          }}
        >
          <div
            className="absolute top-0 h-full rounded-[100px] bg-[#7867F4] transition-all duration-300"
            style={{
              width: `${100 / statuses.length}%`,
              left: `${(activeIndex / statuses.length) * 100}%`,
            }}
          />
        </div>
      </div>

      <div className="max-w-[1312px] mx-auto px-4">
        <div className="transition-all duration-300">
          <Heading level="h2" className="mb-6">
            Status{" "}
            <span className="text-ifw-purple">
              &ldquo;{current.name}&rdquo;
            </span>{" "}
            <span className="text-ifw-font-gray font-normal">
              {current.minInvest}
            </span>
          </Heading>

          <Text className="whitespace-pre-line mb-6 md:text-[32px] md:leading-[38px]">
            {highlightAccents(current.description)}
          </Text>

          <Text className="mb-20 md:text-[32px] md:leading-[38px]">
            <span className="accent">Розподіл часток</span> відбувається після
            повного закриття інвестиційного збору та згідно суми вашої
            інвестиції.
          </Text>

          <div className="flex justify-center">
            <Button className="bg-ifw-purple h-15 hover:bg-[#9688FF] text-ifw-gray rounded-full px-8 py-6 text-[20px] font-sans-wide transition-all duration-200">
              Стати партнером
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
