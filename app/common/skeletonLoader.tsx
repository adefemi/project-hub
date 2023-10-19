import { motion } from "framer-motion";
import React from "react";

const skeletonVariant = {
  animate: {
    backgroundColor: ["#e0e0e0", "#f0f0f0", "#e0e0e0"],
  },
};

const SkeletonLoader = ({ h = "20px" }: { h?: string }) => {
  return (
    <motion.div
      variants={skeletonVariant}
      animate="animate"
      transition={{ repeat: Infinity, duration: 1.5 }}
      style={{
        width: "100%",
        height: h,
        borderRadius: "4px",
      }}
    />
  );
};

export default SkeletonLoader;
