"use client";
import React, { useState } from "react";
import { Badge } from "@/src/components/ui/bages";
import { Container } from "@/src/components/ui/Container";
import { Heading } from "@/src/components/ui/Heading";
import { SubHeading } from "@/src/components/ui/Subheading";
import { TagList } from "@/src/components/ui/TagList";
import Image from "next/image";
import { cn } from "@/src/lib/utils";
import { ProjectContent, ProjectFrontmatter } from "@/src/types/Projects";

import notFoundsvg from "@/src/components/ui/icons/404-page.svg";

export const ProjectContents = ({
  frontmatter,
  content,
}: {
  frontmatter: ProjectFrontmatter;
  content: ProjectContent;
}) => {
  const [imgError, setImageError] = useState(false);
  return (
    <Container className="px-6 pt-30">
      <div className="mx-auto overflow-hidden rounded-2xl shadow-[0px_2px_5px_2px_var(--color-neutral-600)] dark:shadow-none">
        {imgError ? (
          <Image
            className="mx-auto rounded-2xl object-center"
            width={400}
            height={400}
            src={notFoundsvg}
            alt={frontmatter.title}
          />
        ) : (
          <Image
            className="w-full rounded-2xl"
            width={500}
            height={500}
            src={frontmatter?.url}
            alt={frontmatter.title}
            onError={() => setImageError(true)}
          />
        )}
      </div>

      <div className="my-6 flex gap-2">
        <Badge className="bg-forground text-primary">
          {frontmatter.status}
        </Badge>

        <TagList tags={frontmatter.tags} />
      </div>

      <h1 className="text-3xl font-bold md:text-4xl">{frontmatter.title}</h1>

      <p className="text-muted-forground my-3 text-lg">
        {frontmatter.description}
      </p>

      <div className="bg-secondary/10 shadow-custom dark:shadow-custom-dark my-8 flex flex-col gap-4 rounded-lg py-4 md:h-30 md:flex-row md:items-center md:gap-26">
        <Info label="Timeline" value={frontmatter.timeline} />
        <Info label="Team" value={frontmatter?.team!} />
        <Info label="Role" value={frontmatter?.role!} />
        <Info label="Status" value={frontmatter?.status} highlight />
      </div>

      <div className="my-8 flex gap-3 text-base">
        <button className="bg-forground text-primary hover:bg-forground/90 text-shadow-primary/50 cursor-pointer rounded px-2 py-1 font-medium text-shadow-2xs">
          Github link
        </button>

        <button
          className={cn(
            "text-shadow-secondary cursor-pointer rounded px-2 py-1 font-medium text-shadow-2xs",
            "text-forground",
            "bg-white/10 hover:bg-neutral-300 dark:bg-black/10 dark:hover:bg-neutral-900",
            "inset-shadow-[0_0px_4px_0px_var(--color-neutral-400),0_0px_2px_var(--color-neutral-400)] dark:ring dark:inset-shadow-[0px_0px_4px_1px_var(--color-neutral-500)] dark:ring-neutral-500",
            "transition-all duration-200 active:scale-90",
          )}
        >
          Live Link
        </button>
      </div>

      <div className="bg-muted-forground my-4 h-px w-full" />

      <article className="prose prose-neutral dark:prose-invert my-4 max-w-none">
        {content}
      </article>
    </Container>
  );
};

const Info = ({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) => (
  <div className="px-4">
    <p>{label}</p>
    <P
      className={
        highlight ? "bg-forground text-primary rounded p-1 text-xs" : ""
      }
    >
      {value}
    </P>
  </div>
);

export const P = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <p className={cn("text-muted-forground w-fit text-sm", className)}>
    {children}
  </p>
);
