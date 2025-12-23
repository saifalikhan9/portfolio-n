"use client";
import { Container } from "@/src/components/Container";
import { Heading } from "@/src/components/Heading";

import { SubHeading } from "@/src/components/Subheading";
import { useEffect, useState } from "react";

export default function About() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen pt-24 pb-12">
  
        <Heading>About me</Heading>
        <SubHeading className="my-4">
          I am a passionate developer who loves creating amazing web
          experiences. I am always looking for new challenges and opportunities
          to learn and grow.
        </SubHeading>
        <div className="after:[] relative mx-10 size-5 rounded bg-neutral-500/20 after:absolute after:bottom-0 after:h-1 after:w-full after:rounded after:bg-blue-700"></div>
      </Container>
    </div>
  );
}
