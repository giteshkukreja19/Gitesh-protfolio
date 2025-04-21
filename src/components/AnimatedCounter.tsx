
import { useState, useEffect, useRef } from "react";

interface AnimatedCounterProps {
  end: number;
  start?: number;
  duration?: number;
  delay?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

const AnimatedCounter = ({
  start = 0,
  end,
  duration = 2000,
  delay = 0,
  prefix = "",
  suffix = "",
  className = ""
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(start);
  const countRef = useRef(start);
  const timerRef = useRef<number | null>(null);
  
  useEffect(() => {
    let startTime: number;
    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsedTime = timestamp - startTime;
      
      if (elapsedTime < duration) {
        const progress = elapsedTime / duration;
        const nextCount = Math.floor(start + progress * (end - start));
        
        if (nextCount !== countRef.current) {
          countRef.current = nextCount;
          setCount(nextCount);
        }
        
        timerRef.current = requestAnimationFrame(animateCount);
      } else {
        setCount(end);
      }
    };
    
    // Apply delay if specified
    setTimeout(() => {
      timerRef.current = requestAnimationFrame(animateCount);
    }, delay);
    
    return () => {
      if (timerRef.current) {
        cancelAnimationFrame(timerRef.current);
      }
    };
  }, [start, end, duration, delay]);
  
  return (
    <span className={className}>
      {prefix}{count}{suffix}
    </span>
  );
};

export default AnimatedCounter;
