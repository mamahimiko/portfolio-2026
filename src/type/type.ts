export interface skillType {
  id: number;
  skill: string;
}

export interface projectType {
  id: number;
  name: string;
  date: string;
  description: string;
  skills: string[];
  strongPoint: string;
  image: string;
  website: string;
  github: string;
}

export interface contactListType {
  id: number;
  title: string;
  contact: string;
  display: string;
}
