import { Badge } from "@/src/components/ui/bages";
import { Container } from "@/src/components/ui/Container";
import { Heading } from "@/src/components/ui/Heading";
import { SubHeading } from "@/src/components/ui/Subheading";
import Image from "next/image";
import JavaScript from "@/src/components/ui/icons/JavaScript";
import TypeScript from "@/src/components/ui/icons/TypeScript";
import ReactIcon from "@/src/components/ui/icons/ReactIcon";
import NextJs from "@/src/components/ui/icons/NextJs";
import TailwindCss from "@/src/components/ui/icons/TailwindCss";
import { Tooltip } from "@/src/components/ui/tool-tip";

export default function About() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-8 pt-24 pb-12">
        <Heading className="mb-8 md:p-0">About Me</Heading>
        <div className="flex">
          <div className="size-60">
            <Image
              className="rounded-lg"
              src={
                "https://saifalikhan99.vercel.app/_next/image?url=%2Fimages%2Fdp.jpg&w=828&q=75"
              }
              width={500}
              height={500}
              alt="profile picture"
            />
          </div>
          <div>
            <Heading className="">Saif Ali Khan</Heading>
            <SubHeading className="">
              I am a passionate developer who loves creating amazing web
              experiences. I am always looking for new challenges and
              opportunities to learn and grow.
            </SubHeading>
            <p className="mx-10 my-4 mt-10 font-medium text-neutral-700 text-shadow-xs md:text-lg dark:text-neutral-300">
              Skills
            </p>
            <div className="ml-9 flex gap-1">
              {[
                <JavaScript key="javascript" />,
                <TypeScript key="typescript" />,
                <ReactIcon key="react" />,
                <NextJs key="nextjs" />,
                <TailwindCss key="tailwindcss" />,
              ].map((icon, i) => (
                <Tooltip content="name  ">{icon}</Tooltip>
              ))}
            </div>
          </div>
        </div>

        <div className="my-4 grid grid-cols-3 gap-5">
          {[1, 2, 3].map((el, i) => (
            <div
              key={i}
              className="bg-secondary/30 flex h-70 items-center justify-center rounded-lg"
            >
              {el}
            </div>
          ))}
        </div>
        <div>
          <Heading>Contact me</Heading>
          <div className="bg-secondary/20 m-4 my-4 rounded p-2">
            <div className="flex flex-col">
              <label className="text-2xl" htmlFor="message">
                Message
              </label>
              <textarea
                className="ring-secondary/50 my-4 rounded ring-1"
                id="message"
                name="message"
                rows={6}
                cols={33}
              ></textarea>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
