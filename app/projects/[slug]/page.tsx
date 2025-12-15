import { Container } from "@/src/components/Container";
import { Heading } from "@/src/components/Heading";
import { Scales } from "@/src/components/Scales";
import { projects } from "@/src/constants/constants";
import Image from "next/image";
import React from "react";

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const project = projects.find((val) => val.slug === slug);
  // console.log(project, slug);

  return (
    <div className="flex h-screen items-start justify-start">
      <Container className="min-h-screen pt-30">
        <Scales />
        <Heading>{project?.title}</Heading>
        <Image
          className=" rounded-2xl shadow shadow-white my-4 mx-auto "
          width={800}
          height={700}
          src={project?.url!!}
          alt="project image"
        />
      </Container>
    </div>
  );
}
