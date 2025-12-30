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
    slug?:string
  }