"use client";
import { motion } from "framer-motion";

const UnderConstructionPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="flex justify-center items-center font-bold text-2xl pt-10">
        ⚠️ Under Construction ⚠️
      </div>
    </motion.div>
  );
};

export default UnderConstructionPage;
