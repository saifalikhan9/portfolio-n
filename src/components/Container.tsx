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
        className,
        "relative mx-auto w-full md:max-w-4xl bg-primary dark:bg-primary px-8", 
      )}
    >
      {children}
    </div>
  );
};
