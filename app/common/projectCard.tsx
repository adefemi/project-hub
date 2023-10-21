import React, { useState } from "react";
import Modal from "./submitProject";
import { motion } from "framer-motion";

export interface ProjectProps {
  title: string;
  info: string;
  rules: string;
  prizes: string;
  deadline: string;
  isactive: boolean;
  cover: string;
  submission_count: number;
}

const ProjectCard = ({
  proj,
  getActiveProject,
}: {
  proj: ProjectProps;
  getActiveProject: () => void;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const getRules = (rules: string) => {
    const r = rules.split("@");
    let final: any = [];
    for (let i of r) {
      final.push(<li key={i}>{i}</li>);
    }
    return final;
  };
  const getRewards = (prizes: string) => {
    const r = prizes.split("@");
    let final: any = [];
    let header: string = "";
    for (let i = 0; i < r.length; i++) {
      if (i == 0) {
        header = r[i];
      } else {
        final.push(<li key={i}>{r[i]}</li>);
      }
    }
    return { header, final };
  };

  const rewards = getRewards(proj.prizes);

  const isoString = proj.deadline;
  const date = new Date(isoString);

  const options: any = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short",
  };
  const formattedDate = date.toLocaleDateString("en-US", options);
  return (
    <div>
      {isModalOpen && (
        <Modal
          id="1"
          isOpen={isModalOpen}
          onClose={handleClose}
          getActiveProject={getActiveProject}
        />
      )}
      <Infos title="Title" description={proj.title} />

      <motion.img
        src={proj.cover}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
        className="w-full rounded-2xl my-6"
      />
      <Infos title="Overview" description={proj.info} />
      <div className="mt-6" />
      <Infos
        title="Guide Lines"
        noP
        description={
          <>
            <ul className="list-disc pl-8 text-base text-tertiary font-normal">
              {getRules(proj.rules)}
            </ul>
          </>
        }
      />
      <div className="mt-6" />
      <Infos
        title="Rewards"
        noP
        description={
          <>
            <p className="text-base mb-2 text-tertiary font-normal">
              {rewards.header}
            </p>
            <ul className="list-disc pl-8 text-base text-tertiary font-normal">
              {rewards.final}
            </ul>
          </>
        }
      />
      <div className="mt-6" />
      <Infos title="Submission Deadlin" description={formattedDate} />
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
          <span className="font-bold">{proj.submission_count}</span> Total
          Submissions
        </div>
      </motion.div>
    </div>
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

export default ProjectCard;
