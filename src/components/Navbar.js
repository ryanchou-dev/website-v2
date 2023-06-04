"use client";
import { usePathname } from "next/navigation";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import moo from "../../public/moo.svg";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex border border-b-2 border-gray-200  items-center justify-between top-0 w-screen lg:px-48 xl:px-72 sm:px-12 px-4 pt-6 pb-6  h-fit   backdrop-blur-lg backdrop-saturate-50 backdrop-filter fixed z-10 ">
      <div className="flex space-x-4 justify-start flex-row">
        <motion.button
          className="group ml-4 "
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
        >
          <Link
            href={pathname == "/" ? "" : "/"}
            className={
              (pathname == "/"
                ? "bg-gradient-to-tr"
                : "hover:bg-gradient-to-tr") +
              "   p-4  hover:from-[#2473AB]/70 hover:via-[#1E528E]/70 hover:to-[#5B7983]/70 from-[#C3F0F5]/70 via-[#ffdf6b]/70  to-[#ffd5be]/70 rounded-lg "
            }
          >
            <p className="group-hover:text-white inline-block transition duration-100 opacity-100 ">
              <Image
                src={moo}
                alt="moo"
                className="inline group-hover:brightness-0 group-hover:invert"
                width={50}
              />
            </p>
            {/* <span className="hover:hidden block">Home</span> */}
          </Link>
        </motion.button>
        <motion.button
          className="group ml-4 "
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
        >
          <Link
            href={"/posts"}
            className={
              (pathname.substring(0, 6) == "/posts"
                ? "bg-gradient-to-tr"
                : "hover:bg-gradient-to-tr") +
              "   p-4  hover:from-[#2473AB]/70 hover:via-[#1E528E]/70 hover:to-[#5B7983]/70 from-[#C3F0F5]/70 via-[#ffdf6b]/70  to-[#ffd5be]/70 rounded-lg "
            }
          >
            <p className="group-hover:text-white  font-semibold inline-block  opacity-100 ">
              posts
            </p>
          </Link>
        </motion.button>
      </div>
      <div className="flex flex-row space-x-4  justify-end">
        {/* <motion.button
          className="group justify-right items-right "
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
        >
          <div className="bg-amber-800 bg-opacity-20 p-2 rounded-lg font-semibold ">
            🧋 1
          </div>
        </motion.button> */}

        <motion.button
          className="group justify-right items-right "
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
        >
          <a
            href="https://github.com/ryanchou-dev"
            target="_blank"
            rel="noopener noreferrer"
            className={
              "hover:bg-gradient-to-tr" +
              "   p-4  hover:from-[#2473AB]/70 hover:via-[#1E528E]/70 hover:to-[#5B7983]/70  rounded-lg "
            }
          >
            <AiFillGithub
              size={30}
              className="group-hover:brightness-0 group-hover:invert  inline-block"
            />
          </a>
        </motion.button>
      </div>
    </nav>
  );
}
