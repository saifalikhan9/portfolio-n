"use client";
import React from "react";
import { cn } from "../lib/utils";
import { motion } from "motion/react";

export const SubHeading = ({
  children,
  className,
  as = "h2",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "h2" | "h3" | "h4" | "h5" | "h6";
}) => {
  const Tag = as;
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)", y: -40 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{ duration: 0.2, delay: 0.1, ease: "easeInOut" }}
      viewport={{ once: true }}
    >
      <Tag
        className={cn(
          className,
          "text-muted-forground dark:text-muted-forground my-2 max-w-xs px-4 text-sm md:max-w-lg md:px-10",
        )}
      >
        {children}
      </Tag>
    </motion.div>
  );
};
