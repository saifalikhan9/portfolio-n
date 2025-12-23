import BlogsLanding from "@/src/components/Blogs";
import { Container } from "@/src/components/Container";
import { Heading } from "@/src/components/Heading";
import Projects from "@/src/components/projects";

import { SubHeading } from "@/src/components/Subheading";

export default function Home() {
  
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="relative min-h-screen pt-24 pb-12">
      
        <Heading>Saif Ali Khan</Heading>
        <SubHeading className="">
          I am a Full-Stack MERN Developer creating intelligent, user-centric
          web applications. I combine modern frontend engineering, scalable
          backend design, and AI-powered features to help businesses automate
          processes, understand their data, and deliver personalized digital
          experiences.
        </SubHeading>
        <Projects />
        <BlogsLanding />
      </Container>
    </div>
  );
}
