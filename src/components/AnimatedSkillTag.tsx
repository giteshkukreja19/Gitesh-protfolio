
import { useState } from "react";

interface AnimatedSkillTagProps {
  name: string;
  color?: string;
  delay?: string;
}

const AnimatedSkillTag = ({ name, color = "teal", delay = "" }: AnimatedSkillTagProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`inline-block px-3 py-1 rounded-full 
        bg-${color}/10 border border-${color}/30
        text-${color} text-sm font-medium
        transition-all duration-300 transform
        ${isHovered ? "scale-110 shadow-md shadow-teal/20" : ""}
        opacity-0 animate-fadeIn ${delay}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {name}
    </div>
  );
};

export default AnimatedSkillTag;
