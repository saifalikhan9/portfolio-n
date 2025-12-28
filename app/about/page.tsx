"use client";
import { Container } from "@/src/components/Container";
import { Heading } from "@/src/components/Heading";
import { motion } from "motion/react";
import { SubHeading } from "@/src/components/Subheading";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function About() {
  const [hovered, setHovered] = useState<number | null>(null);
  const navLinks = ["Home", "About", "Blog", "Projects", "Contact"];
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen pt-24 pb-12">
        <Heading>About me</Heading>
        <SubHeading className="my-4">
          I am a passionate developer who loves creating amazing web
          experiences. I am always looking for new challenges and opportunities
          to learn and grow.
        </SubHeading>

        {/* <div
          onMouseLeave={() => setHovered(null)}
          className="mx-10 flex items-center justify-between bg-secondary/10 rounded-4xl p-4"
        >
          {navLinks.map((el, i) => (
            <span
              onMouseEnter={() => setHovered(i)}
              className="relative"
             
            >
              {el}
              {hovered === i && (
                <motion.span
                  layoutId="underline"
                  className="absolute -bottom-1 left-0 h-1 w-full bg-red-500"
                />
              )}
            </span>
          ))}
        </div> */}

        <div className="mx-auto flex h-100 w-3xl gap-2">
          {navLinks.map((el, i) => (
            <div key={i}>
              <motion.div
                onClick={() => setHovered(i)}
                layoutId={`${i}`}
                className="bg-secondary/20 flex h-40 w-34 cursor-pointer items-center justify-center rounded-2xl"
              >
                <motion.h1 layoutId={`${i}-h1`}>{el}</motion.h1>
              </motion.div>

              {hovered === i && (
                <motion.div
                  layoutId={`${i}`}
                  className="absolute inset-0 flex h-full w-full items-center justify-center rounded-2xl  backdrop-blur-md"
                >
                  <button className=" fixed top-20 right-10 px-3 py-1 rounded-2xl shadow bg-secondary/20" onClick={() => setHovered(null)}>
                    close
                  </button>
                  <motion.h1 layoutId={`${i}-h1`}>{el}</motion.h1>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
