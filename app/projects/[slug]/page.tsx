import { Badge } from "@/src/components/bages";
import { Container } from "@/src/components/Container";
import { Heading } from "@/src/components/Heading";

import { SubHeading } from "@/src/components/Subheading";
import { Quote } from "@/src/components/Quote";
import { cn } from "@/src/lib/utils";
import { getSingleProject } from "@/src/utils/getprojects";
import type { Metadata } from "next";
import Image from "next/image";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = await params;
  const data = await getSingleProject(slug);
  if (!data) {
    return {};
  }
  const { frontmatter } = data;
  return {
    title: frontmatter.title,
    description: frontmatter.description,

    openGraph: {
      title: frontmatter.title,
      description: frontmatter.description,
      type: "article",
    },
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const project = await getSingleProject(slug);
  if (!project) {
    return null;
  }
  const { content, frontmatter } = project;

  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="pt-30 md:px-12">
        <div className="mx-4 overflow-hidden rounded-2xl shadow-[0px_2px_5px_2px_var(--color-neutral-600)] dark:shadow-none">
          <Image
            className="w-200 rounded-2xl"
            width={500}
            height={500}
            src={frontmatter.url}
            alt="project image "
          />
        </div>
        <div className="px-2">
          <div className="mx-4 flex gap-2 py-4">
            <Badge className="bg-forground text-primary">
              {frontmatter?.status}
            </Badge>
            {frontmatter?.tags.map((el: string, i: number) => (
              <Badge key={i}>{el}</Badge>
            ))}
          </div>

          <div className="flex flex-col gap-5 py-4 md:px-4">
            <Heading className="md:p-0 md:text-5xl">
              {frontmatter?.title}
            </Heading>
            <SubHeading className="max-w-full md:max-w-full md:p-0 md:text-lg">
              {frontmatter?.description}
            </SubHeading>
            <div className="bg-secondary/10 shadow-custom dark:shadow-custom-dark mx-2 flex h-auto flex-col items-start gap-4 overflow-hidden rounded-xl md:mx-0 md:h-20 md:flex-row md:items-center md:gap-26">
              <div className="px-4 pt-3 md:pt-0">
                <p>Timeline</p>
                <P>{frontmatter?.timeline}</P>
              </div>
              <div className="px-4 md:px-0">
                <p>Role</p>
                <P>{frontmatter?.role}</P>
              </div>
              <div className="px-4 md:px-0">
                <p>Team</p>
                <P>{frontmatter?.team}</P>
              </div>
              <div className="px-4 pb-3 md:px-0 md:pb-0">
                <p>Status</p>
                <P className="text-primary bg-forground rounded p-1 text-xs">
                  {frontmatter.status}
                </P>
              </div>
            </div>
          </div>
          <div className="mx-4 flex gap-3 text-base">
            <button className="bg-forground text-primary hover:bg-forground/90 cursor-pointer rounded px-4 py-1 font-medium">
              Github link
            </button>
            <button
              className={cn(
                "cursor-pointer rounded px-4 py-1 font-medium",

                "text-forground",

                "bg-white/10 hover:bg-neutral-300 dark:bg-black/10 dark:hover:bg-neutral-900",

                "inset-shadow-[0_0px_4px_0px_var(--color-neutral-400),0_0px_2px_var(--color-neutral-400)] dark:ring dark:inset-shadow-[0px_0px_4px_1px_var(--color-neutral-500)] dark:ring-neutral-500",

                "transition-all duration-200 active:scale-90",
              )}
            >
              Live Link
            </button>
          </div>
          <div className="bg-muted-forground my-4 h-px w-full" />
          <article className="prose prose-sm prose-h1:text-xl md:prose-h1:text-3xl dark:prose-invert my-2 max-w-none px-4 text-neutral-500">
            {content}
          </article>
          <div className="px-4 pt-2 pb-6 md:px-6">
            <Quote text={"quote"} author={"saif"} source={"that"} />
          </div>
        </div>
      </Container>
    </div>
  );
}
export const P = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p className={cn("text-muted-forground text-sm", className)}>{children}</p>
  );
};
