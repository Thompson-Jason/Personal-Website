"use client";

import { useEffect, useState } from "react";

const UnderConstructionPage = () => {
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRendered(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div
      className={`flex justify-center items-center font-bold text-2xl pt-10 ${
        isRendered ? "" : "hidden"
      }`}
    >
      ⚠️ Under Construction ⚠️
    </div>
  );
};

export default UnderConstructionPage;
