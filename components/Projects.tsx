/* eslint-disable react/jsx-key */
import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen relative flex overflow-hidden flex-col text-left 
                    md:flex-row max-w-full justify-evenly items-center z-0"
    >
      <h3 className="mx-10 top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden snap- snap-mandatory z-20 my-0
                   scrollbar-track-gray-400/20 
                  scrollbar-thumb-[#F7AB0A] scrollbar-thin"
      >
        {projects.map((project, i) => (
          <div className="my-5 w-screen flex-shrink-0 snap-center flex flex-col space-y-0 items-center justify-center p-20 md:p-44 h-screen">
            <motion.img
              initial={{
                y: -300,
                opacity: 1,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1.2,
              }}
              viewport={{
                once: true,
              }}
              src="https:cdn.sanity.io/images/ltuexkre/production/af7ca99b5a796d0698cf9121a4a0795b5022b6be-666x375.png"
              alt=""
              width={666}
              height={375}
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semihold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                UPS Clone
              </h4>

              <p className="text-lg text-center md:text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse ac risus dapibus ex efficitur egestas ac convallis
                ipsum. Maecenas metus enim, fermentum a mollis quis, congue quis
                felis. Integer sed dui lacinia, luctus risus sit amet, rutrum
                ligula. In eu sapien neque. Vestibulum interdum euismod nisi, at
                lobortis enim mollis ac. Nunc consectetur eleifend finibus.
                Vivamus hendrerit sed sapien a condimentum.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top=[30%] bg-[#F7AB0A]/10 left-0 h-[400px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
