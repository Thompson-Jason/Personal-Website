"use client";
import { useEffect, useState } from "react";

const PortfolioPage = () => {
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRendered(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);
  return <div className={isRendered ? "" : "hidden"}>PortfolioPage</div>;
};

export default PortfolioPage;
