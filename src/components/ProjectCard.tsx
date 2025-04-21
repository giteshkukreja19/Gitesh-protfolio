
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  delay: string;
  demoUrl?: string;
  codeUrl?: string;
}

const ProjectCard = ({ 
  title, 
  description, 
  tags, 
  imageUrl = "/placeholder.svg", 
  delay,
  demoUrl = "#",
  codeUrl = "#"
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`relative rounded-lg overflow-hidden bg-navy border border-textSecondary/20 shadow-lg
        transform transition-all duration-300 ${isHovered ? 'scale-[1.02]' : ''} 
        opacity-0 animate-fadeIn ${delay}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
          style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}
        />
        <div className={`absolute inset-0 bg-navy/50 transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-70'}`}></div>
      </div>
      
      <div className="p-4">
        <h3 className="text-teal text-lg font-bold mb-2">{title}</h3>
        <p className="text-textSecondary text-sm mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs px-2 py-1 bg-teal/10 text-teal rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between">
          <a 
            href={demoUrl} 
            className="text-teal text-sm hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
          <a 
            href={codeUrl} 
            className="text-teal text-sm hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
