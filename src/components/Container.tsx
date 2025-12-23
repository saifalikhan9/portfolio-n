import { cn } from "@/src/lib/utils";
import React from "react";

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "bg-primary dark:bg-primary  relative mx-auto w-full md:max-w-4xl",
        className
      )}
    >
      {children}
    </div>
  );
};
