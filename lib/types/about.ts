export interface Experience {
  id: number;
  companyName: string;
  startDate: string;
  endDate: string | null;
  isCurrent: boolean;
  role: string;
  description?: string;
  displayOrder: number;
  projects?: Project[];
}

export interface Project {
  id: number;
  experienceId: number;
  projectName: string;
  startDate?: string;
  endDate?: string;
  role?: string;
  description?: string;
  techStack?: string[];
  achievements?: string[];
  url?: string;
  displayOrder: number;
}
