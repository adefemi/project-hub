"use client";

import Link from "next/link";
import Card from "./common/card";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const variants = {
  initial: { scale: 1.15, y: "-200%", opacity: 0 },
  show: {
    scale: 1.15,
    opacity: 1,
    y: "0",
    transition: {
      duration: 1,
      type: "spring",
      delay: 1,
    },
  },
  float: {
    scale: 1.15,
    opacity: 1,
    y: ["0%", "5%", "0%"],
    transition: {
      y: {
        repeat: Infinity,
        duration: 2,
        ease: "easeInOut",
      },
    },
  },
};

export default function Home() {
  const [animation, setAnimation] = useState("show");

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimation("float");
    }, 1800);

    return () => clearTimeout(timer);
  }, []);
  return (
    <main className="flex flex-col items-center min-h-screen w-full">
      <div className="w-full hero">
        <div className="h-16 md:h-24 px-4 md:px-8 w-ful border-b border-b-tertiary">
          <div className="flex h-full flex-row items-center justify-between max-w-screen-xl m-auto">
            <div className="text-white text-base lg:text-lg font-bold">
              Great<span className="text-primary">.Projects</span>
            </div>
            <nav>
              <Link href="/projects" className="text-sm text-heading">
                Projects
              </Link>
            </nav>
          </div>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 px-4 md:px-12 max-w-screen-xl m-auto">
          <div>
            <h1 className="text-white mt-16 md:mt-28 lg:mt-32 text-3xl md:text-6xl font-bold">
              <motion.div
                initial={{ x: "-50%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                Learn, Innovate, and
              </motion.div>
              <motion.div
                initial={{ x: "-50%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
                className="text-primary md:mt-2"
              >
                Win Prizes!
              </motion.div>
            </h1>
            <motion.p
              initial={{ y: "50%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
              className="text-secondary mt-6 text-sm md:text-lg max-w-lg"
            >
              You get to learn, build yourself, and enhance your visibility
              while also availing yourself the chance to win prizes.
            </motion.p>
          </div>
          <div className="relative">
            <motion.div
              className="caller mt-8 mx-auto w-78 h-78 md:w-128 md:h-128 lg:ml-6"
              initial={{ scale: 0, originX: 0.5, originY: 1 }}
              animate={{ scale: 1, originX: 0.5, originY: 1 }}
              transition={{ duration: 1, type: "spring" }}
            />
            <motion.img
              src="/bg.svg"
              alt="Caller"
              initial="initial"
              animate={animation}
              variants={variants}
              className="absolute top-24 z-10 w-60 md:w-128"
            />
          </div>
        </div>
      </div>
      <div className="bottom w-full relative -mt-0 min-h-78 md:-mt-24">
        <div className="max-w-screen-xl m-auto px-8 md:pt-40 lg:pt-24">
          <div className="flex flex-col w-full items-center mt-32">
            <motion.h2
              initial={{ y: "50%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-heading text-sm font-medium"
            >
              OUR MOTIVE
            </motion.h2>
            <motion.h1
              initial={{ y: "50%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
              className="text-center mt-4 text-xl md:text-2xl font-bold text-main max-w-lg"
            >
              We aim to drive creativity with a
              portfolio filled with catchy projects
            </motion.h1>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <Card title="Learn" id="learn" />
            <Card title="Innovate" id="innovate" />
            <Card title="Win Prizes" id="win" />
          </div>
        </div>
      </div>
      <motion.div
        initial={{ y: "6000%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="dividerMain my-16"
      />

      <div className="w-full">
        <div className="max-w-screen-sm m-auto px-8">
          <motion.h1
            initial={{ y: "50%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
            className="text-xl md:text-2xl font-bold text-main"
          >
            Let&apos;s get started
          </motion.h1>
          <motion.p
            initial={{ y: "50%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
            className="mt-4 text-sm md:text-base leading-loose md:leading-loose font-normal text-grey "
          >
            Well, this is not going to be your regular long website. You already
            captured what we are all about, so let’s get you into the zone.
            Click on the button to view your next challenge
          </motion.p>
          <motion.div
            initial={{ x: "-10%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            whileHover={{
              scale: 1.1,
              originX: 0,
              transition: { duration: 0.2 },
            }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
            className="mt-8 md:mt-12 inline-block"
          >
            <Link href="/projects">
              <button className="bg-tertiary text-sm md:text-base text-white py-3 md:py-4 px-8 md:px-10 rounded-full buttonEnter">
                View Projects
              </button>
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ y: "6000%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="dividerMain mt-16"
        />
      </div>

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
        className="py-6 md:py-12 text-sm md:text-base"
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
    </main>
  );
}
