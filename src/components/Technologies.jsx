import { RiReactjsLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import powerBIlogo from "../assets/power-bi.svg";
import { RiNodejsLine } from "react-icons/ri";
import { motion } from "motion/react";
import { animate } from "motion";

const iconVariants = (duration) => ({
  hidden: { y: -10 },
  animate: { y: [10, -10], 
    transition: {
    duration: duration,
    repeat : Infinity,
    repeatType: "reverse"
  }}
});

function Technologies() {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="my-20 text-center text-4xl text-neutral-300"
      >
        Technologies
      </motion.h2>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-[#61DBFB]" />
        </motion.div>

        <motion.div
          variants={iconVariants(5)}
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiNodejsLine className="text-7xl text-[#8CC84B]" />
        </motion.div>

        <motion.div
          variants={iconVariants(2)}
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiTailwindCssFill className="text-7xl text-[#06b6d4]" />
        </motion.div>

        <motion.div
          variants={iconVariants(6)}
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img className="h-[4.5rem] w-[4.5rem]" src={powerBIlogo} alt="" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Technologies