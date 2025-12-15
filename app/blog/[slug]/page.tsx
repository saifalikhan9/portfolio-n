import React from "react";
import { getSingleBlog } from "@/src/utils/getSingleBlog";
import { redirect } from "next/navigation";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = await params;
  const data = await getSingleBlog(slug);
  if (!data) {
    return {};
  }
  const { frontmatter } = data;
  return {
    title: frontmatter.title,
    description: frontmatter.description,
    authors: [{ name: frontmatter.author }],
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.description,
      type: "article",
      publishedTime: frontmatter.date,
    },
  };
}

export default async function Blogs({ params }: { params: { slug: string } }) {
  const { slug } = await params;

  const blogData = await getSingleBlog(slug);
  if (!blogData) {
    return redirect("/blog");
  }

  const { content, frontmatter } = blogData;

  return (
    <div className="flex min-h-screen flex-col items-start justify-start">
      <article className="prose prose-md prose-headings:text-2xl  md:prose:lg max-w-none px-4 ">{content}</article>
    </div>
  );
}
