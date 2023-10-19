/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";

const NotData = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <motion.img
        initial={{ opacity: 0, y: "10%" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        src="/notavail.webp"
        alt="nodata"
        className="w-32"
      />
      <motion.p
        initial={{ opacity: 0, y: "-20%" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="text-tertiary mt-2"
      >
        No data here!
      </motion.p>
    </div>
  );
};

export default NotData;
