import { Badge } from "@/src/components/bages";
import { Container } from "@/src/components/Container";
import { Heading } from "@/src/components/Heading";
import { SubHeading } from "@/src/components/Subheading";
import { Quote } from "@/src/components/Quote";
import { cn } from "@/src/lib/utils";
import { getSingleProject } from "@/src/utils/getprojects";
import type { Metadata } from "next";
import Image from "next/image";

type QuoteData = {
  quote: string;
  reference: string;
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = await params;

  const data = await getSingleProject(slug);
  if (!data) return {};

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
  if (!project) return null;

  const { content, frontmatter } = project;

  let quoteData: QuoteData = { quote: "", reference: "" };

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL ?? ""}/api/getQuote`,
      { cache: "no-store" }, // IMPORTANT for AI
    );

    if (res.ok) {
      const json = await res.json();
      quoteData = json?.data ?? quoteData;
    }
  } catch (error) {
    console.error("Failed to fetch quote:", error);
  }

  return (
    <div className="flex min-h-screen justify-start">
      <Container className="pt-30 md:px-12">
        <div className="mx-auto overflow-hidden rounded-2xl shadow-[0px_2px_5px_2px_var(--color-neutral-600)] dark:shadow-none">
          <Image
            className="w-full rounded-2xl"
            width={600}
            height={600}
            src={frontmatter.url}
            alt={frontmatter.title}
          />
        </div>

        <div className="flex gap-2 py-4">
          <Badge className="bg-forground text-primary">
            {frontmatter.status}
          </Badge>
          {frontmatter.tags.map((tag: string, i: number) => (
            <Badge key={i}>{tag}</Badge>
          ))}
        </div>

        <Heading className="md:text-5xl md:p-0 ">{frontmatter.title}</Heading>

        <SubHeading className="md:text-lg md:p-0 md:max-w-full">
          {frontmatter.description}
        </SubHeading>

        <div className="bg-secondary/10 my-8 shadow-custom dark:shadow-custom-dark mx-2 flex flex-col gap-4 rounded-xl md:mx-0 md:h-20 md:flex-row md:items-center md:gap-26">
          <Info label="Timeline" value={frontmatter.timeline} />
          <Info label="Role" value={frontmatter?.role} />
          <Info label="Team" value={frontmatter?.team} />
          <Info label="Status" value={frontmatter?.status} highlight />
        </div>

        <div className="my-8 flex gap-3 text-base">
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

        <article className="prose prose-sm md:prose-h1:text-3xl dark:prose-invert my-2 max-w-none px-4 text-neutral-500">
          {content}
        </article>

        <div className="px-4 pb-6 md:px-6">
          <Quote text={quoteData.quote} source={quoteData.reference} />
        </div>
      </Container>
    </div>
  );
}

/* ---------- Small Helper Components ---------- */

const Info = ({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) => (
  <div className="px-4">
    <p>{label}</p>
    <P
      className={
        highlight ? "bg-forground text-primary rounded px-1 text-xs" : ""
      }
    >
      {value}
    </P>
  </div>
);

export const P = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <p className={cn("text-muted-forground text-sm", className)}>{children}</p>
);
