export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  published: boolean;
  subtitle?: string;
  role?: string;
  highlights?: string[];
  result?: string;
  status?: string;
  dateRange?: string;
  repoUrl?: string;
  demoUrl?: string;
  screenshots?: string[];
};

export type Profile = {
  available: boolean;
  headline: string;
  email: string;
  github: string;
  linkedin: string;
  resume: string;
  resumeName: string;
  skills: string[];
  projects: Project[];
};
