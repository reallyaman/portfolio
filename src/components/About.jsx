import image from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "motion/react";

function About() {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="my-20 text-center text-4xl text-neutral-400"
      >
        About <span className="text-neutral-500">Myself</span>
      </motion.h2>

      <div className="flex flex-wrap lg:flex-nowrap">
        <div className="w-full lg:w-1/2 lg:p-14">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className=" flex items-center justify-center"
          >
            <img className=" rounded-2xl" src={image} alt="" />
          </motion.div>
        </div>

        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ x: +100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex lg:items-center lg:justify-start lg:h-full justify-center"
          >
            <p className="my-2 max-w-xl py-6 text-neutral-400">{ABOUT_TEXT}</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;
