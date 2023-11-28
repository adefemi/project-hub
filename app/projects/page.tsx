"use client";

import React, { useEffect, useState } from "react";
import Header from "../common/header";
import Footer from "../common/footer";
import { motion } from "framer-motion";
import NotData from "../common/notData";
import ProjectCard, { ProjectProps } from "../common/projectCard";
import axios from "axios";
import SkeletonLoader from "../common/skeletonLoader";
import { domain } from "../network";
import CompletedProjectCard from "../common/CompletedProjectCard";

const Projects = () => {
  const [projects, setProjects] = useState<[ProjectProps] | null>(null);
  const [completedProjects, setCompletedProjects] = useState<
    [ProjectProps] | null
  >(null);
  const [loading, setLoading] = useState<boolean>(true);
  const getActiveProjects = async (
    setter: (data: [ProjectProps]) => void,
    status = "True"
  ) => {
    const projects = await axios.get(
      `${domain}get-project-url/?isactive=${status}`
    );
    setLoading(false);
    setter(projects.data as [ProjectProps]);
  };

  useEffect(() => {
    getActiveProjects(setProjects);
    getActiveProjects(setCompletedProjects, "False");
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
        ) : !projects || !projects[0] ? (
          <NotData />
        ) : (
          <ProjectCard
            proj={projects[0]}
            getActiveProject={() => getActiveProjects(setProjects)}
          />
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
        {loading ? (
          <SkeletonLoader h="200px" />
        ) : !completedProjects || !completedProjects[0] ? (
          <NotData />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {completedProjects.map((proj, i) => (
              <CompletedProjectCard proj={proj} key={i} />
            ))}
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
};

export default Projects;
