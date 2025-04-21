
import React, { ReactNode } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: string;
  children?: ReactNode;
}

const AnimatedText = ({ text, className = "", delay = "" }: AnimatedTextProps) => {
  return (
    <div className={`opacity-0 animate-fadeIn ${delay} ${className}`}>
      {text}
    </div>
  );
};

export default AnimatedText;
