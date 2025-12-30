"use client";
import Image from "next/image";
import Link from "next/link";
import { hover, motion } from "motion/react";
import { IconsObject, projects } from "@/src/constants/Icons";
import { truncate } from "@/src/utils/utils";
import { SubHeading } from "../Subheading";
import { Badge } from "../ui/bages";
import { div } from "motion/react-client";
import React, { useState } from "react";
import StackIcon from "tech-stack-icons";
import { useTheme } from "next-themes";
import { Tooltip } from "../ui/tool-tip";
import { ProjectsList } from "../Projects/ProjectsList";

export default function Projects() {
  const [hovered, setHovered] = useState<number | null>(null);
  const { theme, resolvedTheme } = useTheme();

  const getIcons = (tech: string): React.ReactElement | null => {
    const normaliseTech = tech.trim().toLocaleLowerCase();
    switch (normaliseTech) {
      case IconsObject.javascript:
        return (
          <StackIcon
            variant={resolvedTheme === "dark" ? "dark" : "light"}
            name="js"
          />
        );
      case IconsObject.typescript:
        return (
          <StackIcon
            variant={resolvedTheme === "dark" ? "dark" : "light"}
            name="typescript"
          />
        );
      case IconsObject.react:
        return (
          <StackIcon
            variant={resolvedTheme === "dark" ? "dark" : "light"}
            name="react"
          />
        );
      case IconsObject.nextjs:
        return (
          <StackIcon
            variant={resolvedTheme === "dark" ? "dark" : "light"}
            name="nextjs"
          />
        );
      case IconsObject.framer:
        return (
          <StackIcon
            variant={resolvedTheme === "dark" ? "dark" : "light"}
            name="framer"
          />
        );
      case IconsObject.redis:
        return (
          <StackIcon
            variant={resolvedTheme === "dark" ? "dark" : "light"}
            name="redis"
          />
        );
      case IconsObject.express:
        return (
          <StackIcon
            variant={resolvedTheme === "dark" ? "dark" : "light"}
            name="expressjs"
          />
        );
      case IconsObject.gemini:
        return (
          <StackIcon
            variant={resolvedTheme === "dark" ? "dark" : "light"}
            name="gemini"
          />
        );
      case IconsObject.mongodb:
        return (
          <StackIcon
            variant={resolvedTheme === "dark" ? "dark" : "light"}
            name="mongodb"
          />
        );
      case IconsObject.nodejs:
        return (
          <StackIcon
            variant={resolvedTheme === "dark" ? "dark" : "light"}
            name="nodejs"
          />
        );
      case IconsObject.prisma:
        return (
          <StackIcon
            variant={resolvedTheme === "dark" ? "dark" : "light"}
            name="prisma"
          />
        );
      case IconsObject.tailwindcss:
        return (
          <StackIcon
            variant={resolvedTheme === "dark" ? "dark" : "light"}
            name="tailwindcss"
          />
        );
      case IconsObject.postgressql:
        return (
          <StackIcon
            variant={resolvedTheme === "dark" ? "dark" : "light"}
            name="postgresql"
          />
        );
      default:
        return null;
    }
  };

  return (
    <section
      id="/projects"
      className="shadow-sectionInset dark:shadow-sectionInset-dark my-4 px-3 py-4 md:px-10"
    >
      <p className="text-muted-forground py-2 text-sm">
        Here are some of my projects that I have worked on.
      </p>

      <ProjectsList />
      {/* {projects.map((el, indx) => (   
          <Link
            href={`/projects/${el.slug}`}
            key={indx}
            onMouseEnter={() => setHovered(indx)}
            className="relative z-20 block cursor-pointer rounded-2xl p-1 transition-all duration-200 ease-in-out active:scale-98"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, filter: "blur(10px)", y: -40 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.2,
                  delay: indx * 0.1,
                  ease: "easeInOut",
                }}
              >
                <Image
                  className="shadow-custom h-60 w-full rounded-xl object-cover object-top transition-all duration-300"
                  width={300}
                  height={300}
                  src={el.url}
                  alt={el.title}
                />
                <h2 className="text-forground mt-2 text-lg font-semibold tracking-tight md:text-xl">
                  {el.title}
                </h2>
                <p className="text-muted-forground my-1 text-sm">
                  {truncate(el.description, 250)}
                </p>
              </motion.div>
              <div>
                <SubHeading className="md:p-0">Technologies Used</SubHeading>
                <div className="relative z-30 flex flex-row gap-1">
                  {el.techUsed.map((tech, techIndex) => {
                    const icon = getIcons(tech);

                    return (
                      <Tooltip key={`${indx}-${techIndex}`} content={tech}>
                      <button className="hover:scale-120 size-6 mx-px  transition-all duration-300 ease-in-out ">
                        {icon}
                      </button>
                    </Tooltip>
              
                   
                    );
                  })}
                </div>
              </div>
              {hovered === indx && (
                <motion.div
                  layoutId="hovered"
                  className="bg-secondary/10 shadow-custom-inset-shadow dark:shadow-custom-inset-shadow-dark absolute -inset-2 h-120 w-102 rounded-2xl"
                />
              )}
            </div>
          </Link>
        ))} */}
    </section>
  );
}
