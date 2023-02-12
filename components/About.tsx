import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function About({}: Props) {
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
      className="flex flex-col relative h-screen text-center 
    md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcc3fTIAVY11lKuybFeTrFnN9eKmv77eiRww&usqp=CAU="
        className="-mb-20 md:mb-0 flex-shrink-0 w-40 h-40 rounded-full 
        object-cover md:rounded-lg md:w-60 md:h-60 xl:w-[300px] xl:h-[300px] my-5"
      />

      <div className="space-y-50 px-0 md-10 my-3 text-left">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50"> little</span>{" "}
          background
        </h4>
        <p className="text-base mx-5 my-5 text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          ac risus dapibus ex efficitur egestas ac convallis ipsum. Maecenas
          metus enim, fermentum a mollis quis, congue quis felis. Integer sed
          dui lacinia, luctus risus sit amet, rutrum ligula. In eu sapien neque.
          Vestibulum interdum euismod nisi, at lobortis enim mollis ac. Nunc
          consectetur eleifend finibus. Vivamus hendrerit sed sapien a
          condimentum. Nam purus sapien, cursus ac malesuada sit amet, congue
          hendrerit leo. Nullam eu lectus vel dui hendrerit dignissim. Phasellus
          pulvinar sit amet metus quis commodo. Duis venenatis erat sed ligula
          dignissim, in volutpat dui lacinia. Vestibulum hendrerit vitae purus
          ac vulputate. Vivamus posuere placerat tristique. Duis maximus ut
          metus ac mattis. Vestibulum ante ipsum primis in faucibus orci luctus
          et ultrices posuere cubilia curae; Suspendisse lobortis tincidunt
          ante, volutpat commodo augue dictum ut. Nulla quis enim ut est
          facilisis accumsan in nec libero. Donec consequat dignissim fermentum.
          Vivamus blandit aliquam purus, ac facilisis justo. Pellentesque
          feugiat vitae velit in cursus. Nunc dapibus magna nec ipsum lobortis
          semper. Phasellus ac ex fermentum, sodales ante vitae, eleifend odio.
          Praesent ac convallis ex, ac imperdiet enim. Fusce tincidunt id ante
          quis placerat. Vestibulum a luctus ipsum. Curabitur vulputate in nunc
          id elementum. Nunc facilisis efficitur ante vel elementum.
        </p>
      </div>
    </motion.div>
  );
}
