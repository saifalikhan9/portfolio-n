"use client";
import { cn } from "@/src/lib/utils";
import { Project } from "@/src/types/Projects";
import { Tooltip } from "../ui/tool-tip";
import Image from "next/image";
import Link from "next/link";
import { easeInOut, motion } from "motion/react";
import {
  IconArrowNarrowRight,
  IconBrandGithub,
  IconWorld,
} from "@tabler/icons-react";
import { truncate } from "@/src/utils/utils";
import { useState } from "react";

export const ProjectCard = ({
  className,
  projects,
  index,
}: {
  className?: string;
  projects: Project;
  index: string | number;
}) => {
  const [hovered, setHovered] = useState<number | string | null>(null);
  return (
    <motion.div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      initial={{
        opacity: 0,
        filter: `blur(5px)`,
        y: -10,
      }}
      animate={{
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
      }}
      transition={{
        duration: 0.3,
        ease: easeInOut,
      }}
      className={cn("p-1 relative ", className)}
    >

      {hovered === index &&  <motion.div
        layoutId="hovered"
        className="shadow-custom-inset-shadow dark:shadow-custom-inset-shadow-dark bg-secondary/20 absolute inset-0 -top-2 -left-2 h-[28rem] w-full md:w-[26rem] rounded-xl"
      />   }
     
      <ProjectImage image={projects.image} imageDes={projects.description} />

      <ProjectTextContent
        title={projects.title}
        description={projects.description}
        github={projects.github}
        link={projects.link}
      />

      <div className="mx-2 my-4 flex items-center justify-between">
        <div>
          {projects.technologies.map((tech, techIndex) => (
            <Tooltip key={`${projects.title}-${techIndex}`} content={tech.name}>
              {tech.icon}
            </Tooltip>
          ))}
        </div>
        {projects?.projectDetailsPageSlug && (
          <Link
            href={`/projects/${projects.projectDetailsPageSlug}`}
            className="text-muted-forground relative z-20 inline-flex items-center justify-center text-xs"
          >
            view details
            <IconArrowNarrowRight className="relative inset-0 top-[0.9px] stroke-1" />
          </Link>
        )}
      </div>
    </motion.div>
  );
};
const ProjectImage = ({
  className,
  image,
  imageDes,
}: {
  className?: string;
  image: string;
  imageDes: string;
}) => {
  return (
    <Image
      className={cn("h-60 rounded-xl object-cover", className)}
      alt={imageDes}
      width={500}
      height={500}
      src={image}
    />
  );
};

const ProjectTextContent = ({
  title,
  description,
  github,
  link,
}: {
  title: string;
  description: string;
  github: string;
  link: string;
}) => {
  return (
    <div className="px-2">
      <div className="text-forground my-3 flex items-center justify-between">
        <h2 className="text-lg font-medium md:text-xl">{title}</h2>
        <div className="inline-flex gap-2">
          <Link
            className="hover:text-muted-forground transition-all duration-200 ease-in-out"
            href={github}
          >
            {<IconBrandGithub className="stroke-1" />}
          </Link>
          <Link
            className="hover:text-muted-forground transition-all duration-200 ease-in-out"
            href={link}
          >
            {<IconWorld className="stroke-1" />}
          </Link>
        </div>
      </div>
      <p className="text-muted-forground text-sm">
        {truncate(description, 200)}
      </p>
    </div>
  );
};
