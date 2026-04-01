export interface Project {
  slug: string;
  name: string;
  location: string;
  year: string;
  description: string;
  mainImage: string;
  details: ProjectDetail[];
  internalPictures?: string[];
  blueprints?: string[];
  sketches?: string[];
}

export interface ProjectDetail {
  label: string;
  value: string;
}

export interface ProjectPreview {
  name: string;
  slug: string;
  location: string;
  image: string;
  year: string;
  description?: string;
}
