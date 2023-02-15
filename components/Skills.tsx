import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {};

function Skills({}: Props) {
  return (
    <motion.div
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] 
                            xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="top-24 uppercase tracking-[20px] text-gray-500 text-2xl mx-5">
        Skills
      </h3>

      <div
        className="grid grid-cols-4 gap-5 flex flex-col rounded-lg items-center space-y-6 flex-shrink-0
      w-[500px] md:w-[500px] xl:w-[900px] snap-center bg-[#292929] p-1
      hover:opacity-100 opacity-40 cursor-pointer transition-opacity
      duration-200 overflow-hidden"
      >
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </motion.div>
  );
}

export default Skills;
