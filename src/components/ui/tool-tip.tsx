"use client";
import { useState, ReactNode } from "react";

type TooltipProps = {
  content: string;
  children: ReactNode;
  position?: "top" | "bottom" | "left" | "right";
};

export const Tooltip = ({
  content,
  children,
  position = "top",
}: TooltipProps) => {
  const [visible, setVisible] = useState(false);

  const positionClasses: Record<string, string> = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  return (
    <span
      className="relative inline-flex items-center justify-center size-6 mx-1 z-20 hover:scale-120 transition-all duration-300 ease-in-out"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}

      {visible && (
        <span
          className={`absolute z-50 whitespace-nowrap rounded-md bg-black px-2 py-1 text-[0.6rem] text-white shadow-md ${positionClasses[position]}`}
        >
          {content}
        </span>
      )}
    </span>
  );
};
