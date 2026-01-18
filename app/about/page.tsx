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
import { Timeline } from "@/src/components/ui/Timeline";
const data = [
  {
    year: 2025,
    achievements: [
      {
        title: "Focused on frontend & real-world projects",
        description:
          "Built production-ready web applications using React, Next.js, TypeScript, and Tailwind CSS with a strong focus on clean UI and performance.",
      },
    ],
  },
  {
    year: 2024,
    achievements: [
      {
        title: "Strengthened full-stack fundamentals",
        description:
          "Learned backend basics, authentication, databases, and API integration through personal and academic projects.",
      },
      {
        title: "Built multiple personal projects",
        description:
          "Worked on small to medium-scale applications to improve problem-solving, code structure, and development workflow.",
      },
    ],
  },
  {
    year: 2023,
    achievements: [
      {
        title: "Completed B.Tech in Computer Science",
        description:
          "Developed strong foundations in programming, data structures, databases, and software engineering concepts.",
      },
    ],
  },
  {
    year: 2022,
    achievements: [
      {
        title: "Explored programming and web basics",
        description:
          "Built academic mini-projects and experimented with web development and core programming concepts.",
      },
    ],
  },
  {
    year: 2021,
    achievements: [
      {
        title: "Started my Computer Science journey",
        description:
          "Began undergraduate studies and learned core programming concepts and logical thinking.",
      },
    ],
  },
];


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
                <Tooltip key={i} content="name  ">{icon}</Tooltip>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-secondary/40 mask-l-from-90% mask-r-from-90% absolute h-px top-[33%] inset-0" />

        <div className="mt-16">
          <Timeline
            data={data}
          />
        </div>
      </Container>
    </div>
  );
}
