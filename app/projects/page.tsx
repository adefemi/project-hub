"use client";

import React, { useEffect, useState } from "react";
import Header from "../common/header";
import Footer from "../common/footer";
import { motion } from "framer-motion";
import NotData from "../common/notData";
import ProjectCard, { ProjectProps } from "../common/projectCard";
import axios from "axios";
import SkeletonLoader from "../common/skeletonLoader";

const Projects = () => {
  const [projects, setProjects] = useState<[ProjectProps] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const getActiveProjects = async () => {
    const projects = await axios.get(
      "https://api-gp.devtot.com/main-path/get-project-url/?isactive=True"
    );
    setLoading(false);
    setProjects(projects.data as [ProjectProps]);
  };

  useEffect(() => {
    getActiveProjects();
  }, []);

  return (
    <main className="min-h-screen w-full">
      <div className="w-full m-header">
        <Header />
      </div>
      <div className="px-4 md:px-24 max-w-screen-lg m-auto mt-8 md:mt-24">
        <motion.h1
          initial={{ y: "50%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
          className="text-xl md:text-2xl font-bold text-main"
        >
          Active Project
        </motion.h1>
        <div className="mt-8" />

        {loading ? (
          <SkeletonLoader h="200px" />
        ) : !projects ? (
          <NotData />
        ) : (
          <ProjectCard proj={projects[0]} />
        )}

        <div className="mt-12 md:mt-24" />
        <motion.h1
          initial={{ y: "50%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
          className="text-xl md:text-2xl font-bold text-main"
        >
          Completed Projects
        </motion.h1>
        <div className="mt-8 md:mt-12" />
        <NotData />
      </div>

      <Footer />
    </main>
  );
};

export default Projects;
