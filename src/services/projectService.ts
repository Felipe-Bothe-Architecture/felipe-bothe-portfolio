import { Project, ProjectPreview } from "@/types/project";

const PROJECTS: Project[] = [
  {
    slug: "the-glass-house",
    name: "The Glass House",
    location: "West Palm Beach, FL",
    year: "2023",
    description: "A transparent sanctuary that blurs the line between interior and exterior. The structure uses floor-to-ceiling high-performance glass and a slim steel frame to achieve maximum transparency.",
    mainImage: "https://plus.unsplash.com/premium_photo-1664301045332-b037631b8a56?q=80&w=1572&auto=format&fit=crop",
    details: [
      { label: "Area", value: "4,500 sq. ft." },
      { label: "Status", value: "Completed" },
      { label: "Client", value: "Private" },
    ],
    internalPictures: [
      "https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=2070&auto=format&fit=crop",
    ],
    blueprints: [
      "https://images.unsplash.com/photo-1503387762-592dea58ef21?q=80&w=2000&auto=format&fit=crop",
    ],
    sketches: [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1974&auto=format&fit=crop",
    ]
  },
  {
    slug: "brutalist-sanctuary",
    name: "Brutalist Sanctuary",
    location: "Miami, FL",
    year: "2022",
    description: "Exploring the raw beauty of board-formed concrete. This residence emphasizes texture, light, and mass, creating a silent retreat from the vibrant city life.",
    mainImage: "https://images.unsplash.com/photo-1642327949281-e4b09180b97f?q=80&w=1563&auto=format&fit=crop",
    details: [
      { label: "Area", value: "5,200 sq. ft." },
      { label: "Material", value: "Board-formed Concrete" },
    ],
    internalPictures: [
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2070&auto=format&fit=crop",
    ],
  },
  {
    slug: "monolith-pavilion",
    name: "Monolith Pavilion",
    location: "Jupiter, FL",
    year: "2024",
    description: "A residential project focusing on the interplay of light and white textures. This pavilion stands as a singular, powerful gesture in the landscape.",
    mainImage: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2070&auto=format&fit=crop",
    details: [
      { label: "Area", value: "2,500 sq. ft." },
      { label: "Status", value: "In Progress" },
    ],
  },
  {
    slug: "oceanic-retreat",
    name: "Oceanic Retreat",
    location: "Palm Beach, FL",
    year: "2023",
    description: "A minimalist apartment designed as a sanctuary from the city, opening itself to the vastness of the ocean.",
    mainImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop",
    details: [
      { label: "Area", value: "3,800 sq. ft." },
      { label: "Status", value: "Completed" },
    ],
  }
];

export async function getAllProjects(): Promise<ProjectPreview[]> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return PROJECTS.map(p => ({
    slug: p.slug,
    name: p.name,
    location: p.location,
    image: p.mainImage,
    year: p.year,
    description: p.description
  }));
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  await new Promise(resolve => setTimeout(resolve, 500));
  return PROJECTS.find(p => p.slug === slug) || null;
}
