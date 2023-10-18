/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";

const texts: any = {
  learn:
    "Before building our projects, we get to learn the basis. We would learn about the different tools available within our arsenal and why we have used them. We would see them in action, so we are not going into the competition completely blind.",
  innovate:
    "The competition is all about exploring your potential and pushing the boundaries of established concepts. We encourage you to go all out, think outside the box, and craft products that you'll be proud to showcase in your portfolio. Plus, there's the exciting prospect of winning!",
  win: "In order to encourage excellence, we'll offer boosters—rewards that in-still a sense of fulfilment for your efforts. Prizes will be tied to specific projects, meaning each project will set its own rules and define its prizes. Simple, right? You get to learn, enhance your visibility, and possibly win a reward.",
};

const variants = {
  initial: { y: 0 },
  float: {
    y: ["0%", "10%", "0%"],
    transition: {
      y: {
        repeat: Infinity,
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  },
};

const Card = ({ title, id }: { title: string; id: string }) => {
  const text = texts[id];
  const image = `/${id}.png`;
  const border =
    id === "learn"
      ? "border-learn"
      : id === "innovate"
      ? "border-innovate"
      : "border-win";

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0, originX: 0, originY: 1 }}
      animate={{ scale: 1, opacity: 1, originX: 0, originY: 1 }}
      transition={{ duration: 1, type: "spring", delay: 1 }}
      className={`w-full border relative px-8 py-16 md:py-24 rounded-2xl bg-white border-solid ${border}`}
    >
      <h2 className="text-xl text-main font-bold">{title}</h2>

      <p className="mt-4 text-sm md:text-base leading-loose md:leading-loose font-normal text-grey">{text}</p>

      <motion.img
        src={image}
        alt="learn"
        initial="initial"
        variants={variants}
        whileHover="float"
        className="absolute top-2 right-4 w-12 h-12 md:w-16 md:h-16"
      />
    </motion.div>
  );
};

export default Card;
