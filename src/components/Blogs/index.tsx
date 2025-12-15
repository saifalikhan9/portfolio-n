import { getAllBlogs } from "@/src/utils/getSingleBlog";
import { truncate } from "@/src/utils/utils";
import Link from "next/link";
import { SubHeading } from "../Subheading";

export default async function BlogsLanding() {
  const blogs = await getAllBlogs();

  return (
    <section className="">
      <SubHeading className="">I love to write things </SubHeading>
      <div className="my-4 flex flex-col gap-4 ml-3 md:px-10">
        {blogs.map((blog, idx) => (
          <Link href={`/blog/${blog.slug}`} key={idx}>
            <div className="md:flex items-center justify-between ">
              <h2 className="text-forground text-base font-bold tracking-tight w-full mb-2">
                {blog.frontmatter.title}
              </h2>
              <p className="text-forground  w-20 text-xs mb-2 ">
                {new Date(blog.frontmatter.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </p>
            </div>
            <p className="text-secondary max-w-lg text-sm">
              {truncate(blog.frontmatter.description, 400)}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
