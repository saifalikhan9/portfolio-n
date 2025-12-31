export interface Project {
  title: string;
  description: string;
  image: string;
  video?: string;
  link: string;
  technologies: { name: string; icon: React.ReactNode }[];
  github: string;
  details: boolean;
  projectDetailsPageSlug: string;
  isWorking: boolean;
  slug?: string;
}

export type ProjectFrontmatter = {
  title: string;
  description: string;
  slug: string;
  url: string;
  tags: string[];
  timeline: string;
  role?: string;
  team?: string;
  status: "Completed" | "Running" | string;
  liveLink?: string;
  githubLink?: string;
  // Optional fields that may exist in some MDX files
  image?: string;
  technologies?: string[];
  github?: string;
  live?: string;
  featured?: boolean;
  challenges?: string[];
  learnings?: string[];
  isPublished?: boolean;
  quote?: string;
  quoteAuthor?: string;
  quoteSource?: string;
};

// Content type - MDX content is compiled to React.ReactElement
export type ProjectContent = React.ReactElement;
