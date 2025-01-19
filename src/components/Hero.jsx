import React from 'react'
import { HERO_CONTENT } from '../constants'
// import profilePic from "../assets/kevinRushProfile.png";
import profilePic2 from "../assets/ProfilePic.png";
import { motion } from "motion/react";


const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay,},
  }
})

function Hero() {
  return (
    <div className="pb-10 border-b border-neutral-900 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0.2)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16
            lg:text-8xl text-white"
            >
              Aman Pandey
            </motion.h1>

            <motion.span
              variants={container(0.7)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500
             bg-clip-text text-3xl md:text-4xl lg:text-4xl tracking-tight text-transparent"
            >
              Frontend Developer
            </motion.span>

            <motion.p
              variants={container(1.2)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter text-neutral-400"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: +100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className=" opacity-1 will-change-auto transform-none"
              src={profilePic2}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero