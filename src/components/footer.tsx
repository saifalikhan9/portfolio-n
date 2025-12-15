import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import Link from "next/link";
import React from "react";
import { Container } from "./Container";
import { SubHeading } from "./Subheading";
import { Scales } from "./Scales";

export const Footer = () => {
  return (
    <footer className="">
      <Container className="flex items-center justify-between py-4">
        <div className="shadow-sectionInset dark:shadow-sectionInset-dark absolute inset-0 left-8 h-full w-full max-w-[330] border-t border-neutral-300 dark:border-neutral-700 md:max-w-[832px]"></div>
        <Scales />
        <SubHeading>Built with love by Saif Ali Khan</SubHeading>
        <div className="relative z-10 flex items-center justify-center gap-4 px-4">
          <Link href={"https://saifalikhan99.vercel.app"}>
            <IconBrandX
              size={20}
              className="text-neutral-500 dark:text-neutral-400 transition-all duration-200 hover:text-neutral-700 dark:hover:text-neutral-300"
            />
          </Link>
          <Link href={"https://saifalikhan99.vercel.app"}>
            <IconBrandLinkedin
              size={20}
              className="text-neutral-500 dark:text-neutral-400 transition-all duration-200 hover:text-neutral-700 dark:hover:text-neutral-300"
            />
          </Link>
          <Link href={"https://saifalikhan99.vercel.app"}>
            <IconBrandGithub
              size={20}
              className="text-neutral-500 dark:text-neutral-400 transition-all duration-200 hover:text-neutral-700 dark:hover:text-neutral-300"
            />
          </Link>
        </div>
      </Container>
    </footer>
  );
};
