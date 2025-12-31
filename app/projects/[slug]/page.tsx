import { ProjectContents } from "@/src/components/Projects/Project-Content";
import { getSingleProject } from "@/src/utils/getprojects";
import type { Metadata } from "next";

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
      <ProjectContents frontmatter={frontmatter} content={content} />
    </div>
  );
}

/* ---------- Small Helper Components ---------- */
