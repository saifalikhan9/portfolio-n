import BlogsLanding from "@/src/components/Landings/Blogs";
import { Container } from "@/src/components/ui/Container";

import { GithubLanding } from "@/src/components/Landings/GithubLanding";
import Projects from "@/src/components/Landings/Projects";
import { Heading } from "@/src/components/ui/Heading";
import { SubHeading } from "@/src/components/ui/Subheading";
import { Quote } from "@/src/components/ui/Quote";

export default async function Home() {
  let quote = "";
  let reference = "";
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL ?? ""}/api/getQuote`,
      { cache: "no-store" },
    );
    if (res.ok) {
      const json = await res.json();
      quote = json?.data?.quote ?? "";
      reference = json?.data?.reference ?? "";
    }
  } catch (error) {
    console.error("Failed to fetch quote:", error);
  }
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
        <GithubLanding />
        <BlogsLanding />
        {quote && reference && (
          <Quote
            className="m-2 mt-10 md:mx-auto lg:max-w-[50rem]"
            text={quote}
            source={reference}
          />
        )}
      </Container>
    </div>
  );
}
