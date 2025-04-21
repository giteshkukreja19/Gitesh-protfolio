
export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  demoUrl?: string;
  codeUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Interactive Particle System",
    description: "A WebGL-powered particle system with physics interactions and mouse controls.",
    tags: ["Three.js", "WebGL", "JavaScript", "React"],
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    demoUrl: "#",
    codeUrl: "#"
  },
  {
    id: 2,
    title: "Animated Dashboard UI",
    description: "A responsive dashboard interface with smooth transitions and data visualizations.",
    tags: ["React", "GSAP", "D3.js", "Tailwind CSS"],
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    demoUrl: "#",
    codeUrl: "#"
  },
  {
    id: 3,
    title: "Algorithm Visualizer",
    description: "Educational tool for visualizing sorting algorithms with step-by-step animations.",
    tags: ["JavaScript", "Canvas API", "Algorithms", "CSS"],
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    demoUrl: "#",
    codeUrl: "#"
  },
  {
    id: 4,
    title: "3D Portfolio Experience",
    description: "Interactive 3D showcase built with Three.js and React Three Fiber.",
    tags: ["Three.js", "React", "React Three Fiber", "GLSL"],
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    demoUrl: "#",
    codeUrl: "#"
  }
];
