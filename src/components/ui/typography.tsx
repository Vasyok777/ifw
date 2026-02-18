import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

const headingVariants = cva("font-bold text-ifw-heading", {
  variants: {
    level: {
      h1: "text-[42px] leading-[42px] tracking-[-1px] md:text-[98px] md:leading-[94px] md:tracking-[-2px]",
      h2: "text-[24px] leading-[30px] md:text-[44px] md:leading-[48px]",
      h3: "text-[20px] leading-[26px] md:text-[32px] md:leading-[36px]",
      h4: "text-[18px] leading-[24px] md:text-[24px] md:leading-[28px]",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
  },
  defaultVariants: {
    level: "h2",
    align: "left",
  },
});

type HeadingLevel = "h1" | "h2" | "h3" | "h4";

function Heading({
  className,
  level = "h2",
  align,
  asChild = false,
  ...props
}: React.ComponentProps<"h1"> &
  VariantProps<typeof headingVariants> & {
    level?: HeadingLevel;
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : level;

  return (
    <Comp
      data-slot="heading"
      className={cn(headingVariants({ level, align, className }))}
      {...props}
    />
  );
}

const textVariants = cva("font-sans", {
  variants: {
    variant: {
      body: "text-ifw-font-gray text-[16px] leading-[22px] md:text-[28px] md:leading-[32px]",
      small:
        "text-ifw-font-gray text-[14px] leading-[20px] md:text-[18px] md:leading-[24px]",
      muted:
        "text-ifw-font-gray/60 text-[12px] leading-[16px] md:text-[14px] md:leading-[18px]",
      accent: "accent",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
  },
  defaultVariants: {
    variant: "body",
    align: "left",
  },
});

function Text({
  className,
  variant,
  align,
  asChild = false,
  ...props
}: React.ComponentProps<"p"> &
  VariantProps<typeof textVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : "p";

  return (
    <Comp
      data-slot="text"
      className={cn(textVariants({ variant, align, className }))}
      {...props}
    />
  );
}

export { Heading, headingVariants, Text, textVariants };
