import { Container } from "@/src/components/Container";
import { Heading } from "@/src/components/Heading";
import { getAllBlogs } from "@/src/utils/getSingleBlog";
import { truncate } from "@/src/utils/utils";
import Link from "next/link";

export default async function BlogPost() {
  const allBlogs = await getAllBlogs();

  return (
    <div className="px-4">
      <Heading>All Blogs </Heading>
      <div className="flex flex-col gap-4 py-10">
        {allBlogs.map((blog, idx) => (
          <Link href={`/blog/${blog.slug}`} key={idx}>
            <div className="flex items-center justify-between">
              <h2 className="text-forground text-base font-bold tracking-tight">
                {blog.frontmatter.title}
              </h2>
              <p className="text-muted-forground text-sm">
                {new Date(blog.frontmatter.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </p>
            </div>
            <p className="text-muted-forground max-w-lg text-sm">
              {truncate(blog.frontmatter.description, 110)}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
