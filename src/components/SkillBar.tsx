
interface SkillBarProps {
  name: string;
  level: number;
  delay: string;
}

const SkillBar = ({ name, level, delay }: SkillBarProps) => {
  const stars = "★".repeat(level) + "☆".repeat(5 - level);
  
  return (
    <div className={`mb-4 opacity-0 animate-fadeIn ${delay}`}>
      <div className="flex justify-between mb-1">
        <span className="text-textPrimary font-medium">{name}</span>
        <span className="text-teal">{stars}</span>
      </div>
      <div className="w-full h-1.5 bg-navy rounded-full">
        <div 
          className="h-1.5 bg-teal rounded-full transition-all duration-1000" 
          style={{ width: `${level * 20}%` }}
        />
      </div>
    </div>
  );
};

export default SkillBar;
