
import { useEffect, useState, useRef } from "react";

interface TypewriterTextProps {
  text: string;
  speed?: number;
  className?: string;
  onComplete?: () => void;
}

const TypewriterText = ({ text, speed = 50, className = "", onComplete }: TypewriterTextProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    // Clear any existing timeouts
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }

    // Reset state when text changes
    setDisplayedText("");
    setCurrentIndex(0);
    setIsComplete(false);

    // Start typing
    const typeNextChar = () => {
      if (currentIndex < text.length) {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
        
        // Schedule next character
        timeoutRef.current = window.setTimeout(typeNextChar, speed);
      } else {
        setIsComplete(true);
        if (onComplete) onComplete();
      }
    };

    timeoutRef.current = window.setTimeout(typeNextChar, speed);

    // Clean up
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [text, speed, currentIndex, onComplete]);

  return (
    <span className={`${className} ${isComplete ? "border-r-transparent" : "border-r-2 border-r-teal"}`}>
      {displayedText}
    </span>
  );
};

export default TypewriterText;
