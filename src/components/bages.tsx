"use client";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/src/lib/utils";
import { useState } from "react";

const badgeVariants = cva(
  " flex items-center rounded-lg p-1 md:py-1 md:px-2 text-xs transition-all ease-in-out duration-300 ",
  {
    variants: {
      variant: {
        primary: "bg-primary shadow-custom dark:shadow-custom-dark",
        secondary: " bg-secondary shadow-custom dark:shadow-custom-dark",
        transparent: " p-0 md:p-0 text-2xl hover:scale-120 ",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);
interface BadgeProps
  extends React.ComponentProps<"span">,
    VariantProps<typeof badgeVariants> {
  tooltip?: string;
  tooltipPosition?: "top" | "bottom" | "left" | "right";
}

function Badge({
  className,
  variant,
  tooltip,
  tooltipPosition = "top",
  onMouseEnter,
  onMouseLeave,
  ...props
}: BadgeProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = (e: React.MouseEvent<HTMLSpanElement>) => {
    setShowTooltip(true);
    onMouseEnter?.(e);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLSpanElement>) => {
    setShowTooltip(false);
    onMouseLeave?.(e);
  };

  const tooltipPositionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-1",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-1",
    left: "right-full top-1/2 -translate-y-1/2 mr-1",
    right: "left-full top-1/2 -translate-y-1/2 ml-1",
  };

  const arrowPositionClasses = {
    top: "top-full left-1/2 -translate-x-1/2 border-t-neutral-800 dark:border-t-neutral-200 border-l-transparent border-r-transparent border-b-transparent",
    bottom:
      "bottom-full left-1/2 -translate-x-1/2 border-b-neutral-800 dark:border-b-neutral-200 border-l-transparent border-r-transparent border-t-transparent",
    left: "left-full top-1/2 -translate-y-1/2 border-l-neutral-800 dark:border-l-neutral-200 border-t-transparent border-b-transparent border-r-transparent",
    right:
      "right-full top-1/2 -translate-y-1/2 border-r-neutral-800 dark:border-r-neutral-200 border-t-transparent border-b-transparent border-l-transparent",
  };

  return (
    <span
      className={cn(
        "relative inline-block",
        badgeVariants({ variant }),
        className,
      )}
      data-slot="badge"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {tooltip && showTooltip && (
        <div
          className={cn(
            "absolute z-50 rounded-md bg-neutral-800 p-1 text-xs whitespace-nowrap text-white shadow-lg transition-opacity duration-200 dark:bg-neutral-200 dark:text-neutral-800",
            tooltipPositionClasses[tooltipPosition],
          )}
          role="tooltip"
        >
          {tooltip}
          <div
            className={cn(
              "absolute h-0 w-0 border-4",
              arrowPositionClasses[tooltipPosition],
            )}
          />
        </div>
      )}
      {props.children}
    </span>
  );
}

export { Badge, badgeVariants };
