import React from "react";
import { Badge } from "@/src/components/ui/bages";
import { Container } from "@/src/components/ui/Container";
import { Heading } from "@/src/components/ui/Heading";
import { Quote } from "@/src/components/ui/Quote";
import { SubHeading } from "@/src/components/ui/Subheading";
import Image from "next/image";
import { cn } from "@/src/lib/utils";
import { ProjectContent, ProjectFrontmatter } from "@/src/types/Projects";

export const ProjectContents = ({
  frontmatter,
  content,
}: {
  frontmatter: ProjectFrontmatter;
  content: ProjectContent;
}) => {
  return (
    <Container className="pt-30 md:px-12">
      {frontmatter.url && (
        <div className="mx-auto overflow-hidden rounded-2xl shadow-[0px_2px_5px_2px_var(--color-neutral-600)] dark:shadow-none">
          <Image
            className="w-full rounded-2xl"
            width={600}
            height={600}
            src={frontmatter.url}
            alt={frontmatter.title}
          />
        </div>
      )}

      <div className="flex gap-2 py-4">
        <Badge className="bg-forground text-primary">
          {frontmatter.status}
        </Badge>
        {frontmatter.tags.map((tag: string, i: number) => (
          <Badge key={i}>{tag}</Badge>
        ))}
      </div>

      <Heading className="md:p-0 md:text-5xl">{frontmatter.title}</Heading>

      <SubHeading className="md:max-w-full md:p-0 md:text-lg">
        {frontmatter.description}
      </SubHeading>

      <div className="bg-secondary/10 shadow-custom dark:shadow-custom-dark mx-2 my-8 flex flex-col gap-4 rounded-xl md:mx-0 md:h-20 md:flex-row md:items-center md:gap-26">
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
        highlight ? "bg-forground text-primary rounded px-1 text-xs" : ""
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
  <p className={cn("text-muted-forground text-sm", className)}>{children}</p>
);
