"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { Container } from "@/src/components/Container";
import { SubHeading } from "@/src/components/Subheading";
import { Heading } from "@/src/components/Heading";

import { projects } from "@/src/constants/constants";

export default function Projects() {
  return (
    <div id="/projects" className="flex items-start justify-start">
      <Container className="min-h-screen pt-24 pb-12">
    
        <Heading>Projects</Heading>
        <SubHeading>
          Here are some of my projects that I have worked on.
        </SubHeading>
        <div className="my-5 grid grid-cols-1 gap-3 px-4 md:grid-cols-2">
          {projects.map((el, indx) => (
            <motion.div
              initial={{ opacity: 0, filter: "blur(10px)", y: -40 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{
                duration: 0.2,
                delay: indx * 0.1,
                ease: "easeInOut",
              }}
              key={indx}
            >
              <Image
                className="h-60 w-full rounded-xl object-cover object-top"
                width={300}
                height={300}
                src={el.url}
                alt={el.title}
              />
              <h2 className="text-primary dark:text-primary mt-2 text-lg md:text-xl">
                {el.title}
              </h2>
              <p className="text-secondary dark:text-secondary my-1 pl-1 text-sm">
                {el.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
}
