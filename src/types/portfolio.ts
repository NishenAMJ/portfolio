export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  published: boolean;
};

export type Profile = {
  available: boolean;
  headline: string;
  email: string;
  github: string;
  resume: string;
  resumeName: string;
  skills: string[];
  projects: Project[];
};
