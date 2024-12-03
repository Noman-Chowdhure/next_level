"use client";

import { nav } from "@/utils/custom";
import { motion } from "motion/react"
import Link from "next/link";
import { useState } from "react";

const TopNav = () => {
  const [open, setOpen] = useState(false);
  const handleBTN = () => {
    setOpen(!open);
  };

  return (
    <div>
      <button onClick={handleBTN}>click</button>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={open ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
        transition={{ duration: 0.8 }}
        className={open ? `w-full h-screen bg-slate-50 absolute` : ""}
      >
        <nav className="w-full h-full relative grid justify-center justify-items-center items-center">
          <button onClick={handleBTN} className=" absolute top-10 right-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className=" size-24 hover:text-red-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
          <ul className="w-full h-full grid grid-cols-1 justify-items-center items-center">
            {nav?.map((abc,ind) => (
              <Link key={abc.id} onClick={handleBTN} href={abc.path}>
                 <motion.div initial={{rotate:0}} whileHover={{rotateY:180}} transition={{duration:0.7}} >
                 {abc.nam} <sub className=" text-4xl">{ind}</sub>
                 </motion.div>
              </Link>
            ))}
          </ul>
        </nav>
      </motion.div>
    </div>
  );
};

export default TopNav;
