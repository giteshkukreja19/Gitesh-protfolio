import { useState, useEffect } from "react";

interface ProgressiveImageProps {
  src: string;
  placeholderSrc?: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}

const ProgressiveImage = ({ 
  src, 
  placeholderSrc = "/placeholder.svg", 
  alt, 
  className = "", 
  style = {}
}: ProgressiveImageProps) => {
  const [imgSrc, setImgSrc] = useState(placeholderSrc);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      setImgSrc(src);
      setIsLoading(false);
    };
    
    img.onerror = () => {
      setIsLoading(false);
      // Keep placeholder on error
    };
    
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={`transition-opacity duration-500 ${isLoading ? 'opacity-50' : 'opacity-100'} ${className}`}
      style={style}
    />
  );
};

export default ProgressiveImage;
