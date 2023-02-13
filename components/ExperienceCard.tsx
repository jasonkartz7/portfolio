import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-6 flex-shrink-0 w-[500px] md:w-[500px] xl:w-[900px] 
                        snap-center bg-[#292929] p-1 hover:opacity-100 opacity-40 cursor-pointer transition-opacity 
                        duration-200 overflow-hidden"
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        className="w-32 h-32 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfjkZd3aGWFUvYUuCI8RXDsreZ88BxXeH5rBR1D2_I&s"
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Software Developer</h4>
        <p className="font-bold text-2xl mt-1">SMRT</p>
        <div className="flex space-x-2 my-2">
          <Image
            className="h-10 w-10 rounded-full"
            src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
            alt=""
            width={500}
            height={500}
          />
          <Image
            className="h-10 w-10 rounded-full"
            src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
            alt=""
            width={500}
            height={500}
          />
          <Image
            className="h-10 w-10 rounded-full"
            src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
            alt=""
            width={500}
            height={500}
          />
        </div>
        <p className="uppercase py-5 text-gray-300">
          Started work... - Ended...
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>
            Summary PointsSummary PointsSummary PointsSummary PointsSummary
            Points
          </li>
          <li>
            Summary PointsSummary PointsSummary PointsSummary PointsSummary
            Points
          </li>
          <li>
            Summary PointsSummary PointsSummary PointsSummary PointsSummary
            Points
          </li>
          <li>
            Summary PointsSummary PointsSummary PointsSummary PointsSummary
            Points
          </li>
          <li>
            Summary PointsSummary PointsSummary PointsSummary PointsSummary
            Points
          </li>
        </ul>
      </div>
    </article>
  );
}
