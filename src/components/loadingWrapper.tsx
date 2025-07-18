"use client";

import { useEffect, useState } from "react";

interface LoadingWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const LoadingWrapper = ({ 
  children, 
  className = "", 
  delay = 100 
}: LoadingWrapperProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  if (!isLoaded) {
    return (
      <div className={`flex items-center justify-center min-h-screen ${className}`}>
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-accent"></div>
      </div>
    );
  }

  return <>{children}</>;
};

export default LoadingWrapper;
