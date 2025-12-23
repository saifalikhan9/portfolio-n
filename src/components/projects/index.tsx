"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { projects } from "@/src/constants/constants";
import { truncate } from "@/src/utils/utils";

export default function Projects() {
  return (
    <section
      id="/projects"
      className="shadow-sectionInset dark:shadow-sectionInset-dark my-4 px-3 py-4 md:px-10"
    >
      <p className="text-muted-forground py-2 text-sm">
        Here are some of my projects that I have worked on.
      </p>
      <div className="group my-2 grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((el, indx) => (
          <Link
            href={`/projects/${el.slug}`}
            key={indx}
            className="block cursor-pointer"
          >
            <motion.div
              initial={{ opacity: 0, filter: "blur(10px)", y: -40 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ duration: 0.2, delay: indx * 0.1, ease: "easeInOut" }}
            >
              <Image
                className="shadow-custom h-60 w-full rounded-xl object-cover object-top transition-all duration-300"
                width={300}
                height={300}
                src={el.url}
                alt={el.title}
                
              />
              <h2 className="text-forground mt-2  tracking-tight text-lg font-semibold md:text-xl">{el.title}</h2>
              <p className="text-muted-forground my-1  text-sm">
                {truncate(el.description, 250)}
              </p>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}
