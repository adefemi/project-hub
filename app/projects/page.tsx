"use client";

import React, { useState } from "react";
import Header from "../common/header";
import Footer from "../common/footer";
import { motion } from "framer-motion";
import NotData from "../common/notData";
import Modal from "../common/submitProject";

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };
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
        <Infos title="TITLE" description="Build a portfolio for yourself" />

        <motion.img
          src="https://cdn.pixabay.com/photo/2018/06/07/16/49/virtual-3460451_1280.jpg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
          className="w-full rounded-2xl my-6"
        />
        <Infos
          title="INFO"
          description="Well, the whole aim is to build up your portfolio to be excellent and catchy, while not let's start from the portfolio itself"
        />
        <div className="mt-6" />
        <Infos title="RULES" description="No Rules" />
        <div className="mt-6" />
        <Infos
          title="PRIZES"
          noP
          description={
            <>
              <p className="text-lg text-tertiary font-normal">
                Winner get’s a price and would be in{" "}
                <span className="font-medium">Nigeria - Rest of the World</span>
              </p>
              <ul className="list-disc pl-8 text-base text-tertiary font-normal">
                <li>Nigeria winner: #20,000</li>
                <li>Rest of the world $25 Amazon Giftcard</li>
              </ul>
            </>
          }
        />
        <div className="mt-6" />
        <Infos title="DEADLINE" description="22 October 2023" />
        <div className="mt-12" />
        <motion.div
          className="block md:flex items-center"
          initial={{ y: "50%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
        >
          <button
            onClick={handleOpen}
            className="text-sm text-tertiary font-medium bg-white border px-16 py-4 border-tertiary rounded-full"
          >
            Submit
          </button>
          <div className="text-base text-tertiary mt-4 md:mt-0 md:ml-12">
            <span className="font-bold">25</span> Total Submissions
          </div>
        </motion.div>

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
      {isModalOpen && <Modal id="1" isOpen={isModalOpen} onClose={handleClose} />}
    </main>
  );
};

const Infos = ({
  title,
  description,
  noP,
}: {
  title: string;
  description: React.ReactNode;
  noP?: boolean;
}) => {
  return (
    <motion.h2
      initial={{ y: "50%", opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="text-heading text-sm font-medium"
    >
      {title}
      {noP ? (
        description
      ) : (
        <p className="text-lg text-tertiary font-normal">{description}</p>
      )}
    </motion.h2>
  );
};

export default Projects;
