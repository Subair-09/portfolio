
export interface Project {
  id: string;
  title: string;
  category: 'AWS' | 'Azure' | 'Linux' | 'CI/CD' | 'DevSecOps' | 'Automation';
  description: string;
  tools: string[];
  link: string;
  architectureLink?: string; // Link to external diagram or technical doc
  imageUrl: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string[];
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  period: string;
  description?: string;
}

export interface SkillCategory {
  label: string;
  items: string[];
}

export interface ResumeData {
  summary: string;
  skills: SkillCategory[];
  education: Education[];
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  imageUrl: string;
  verifyUrl: string;
  projectLink?: string; // Link to a project demonstrating the cert skills
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  content: string;
  link: string; // Link to the original article on Medium, Dev.to, or Hashnode
}
