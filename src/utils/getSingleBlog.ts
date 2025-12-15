import fs from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";

type BlogFrontmatter = {
  title: string;
  description: string;
  date: string;
  author: string;
};

type BlogData = {
  content: React.ReactElement;
  frontmatter: BlogFrontmatter;
};

type BlogMetadata = {
  frontmatter: BlogFrontmatter;
  slug: string;
};

export const getSingleBlog = async (
  fileName: string,
): Promise<BlogData | null> => {
  const filePath = path.join(process.cwd(), "src/data", `${fileName}.mdx`);
  if (!fs.existsSync(filePath)) {
    return null;
  }
  const singleBlog = fs.readFileSync(filePath, "utf-8");
  if (singleBlog) {
    const { content, frontmatter } = await compileMDX<BlogFrontmatter>({
      source: singleBlog,
      options: { parseFrontmatter: true },
    });
    return {
      content,
      frontmatter,
    };
  }

  return null;
};

export const getAllBlogs = async (): Promise<Array<BlogMetadata>> => {
  const files = fs.readdirSync(path.join(process.cwd(), "src/data"));
  const blogs = await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(process.cwd(), "src/data", file);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { frontmatter } = await compileMDX<BlogFrontmatter>({
        source: fileContent,
        options: { parseFrontmatter: true },
      });
      const slug = file.replace(/\.mdx$/, "");
      return {
        slug,
        frontmatter,
      };
    }),
  );
  return blogs;
};
