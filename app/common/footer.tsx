import { motion } from "framer-motion";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full">
      <motion.div
        initial={{ y: "6000%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="dividerMain mt-16"
      />

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
        className="py-6 md:py-12 text-sm md:text-base text-center"
      >
        &copy; Copyright 2023 -{" "}
        <a
          href="https://www.youtube.com/adefemigreat"
          className="text-primary"
          target="__blank"
        >
          Adefemigreat
        </a>
      </motion.div>
    </div>
  );
};

export default Footer;
