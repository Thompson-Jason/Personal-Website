"use client";

import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import NavLink from "@/components/navLink";
import { motion } from "framer-motion";

const links = [
  { url: "/", title: "Home" },
  { url: "/skills", title: "Skills" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  const topVarients = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(202, 211, 245)",
    },
  };

  const centerVarients = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVarients = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(202, 211, 245)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      <div className="hidden md:flex gap-4 w-1/3 text-[#b7bdf8]">
        {links.map((link) => (
          <NavLink link={link} key={link.url} />
        ))}
      </div>
      <div className="md:hidden lg:flex xl:w-1/3 xl:items-center">
        <Link
          href="/"
          className="text-sm bg-[#b7bdf8] rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-[#24273a] mr-1">Jason </span>
          <span className="w-20 h-8 rounded bg-[#24273a] text-[#cad3f5] mr-1 flex items-center justify-center">
            Thompson
          </span>
        </Link>
      </div>
      <div className="hidden md:flex gap-4">
        <a
          href="/resume.pdf"
          download="resume.pdf"
          className=" flex justify-center items-center rounded py-1 px-2 bg-[#b7bdf8] text-[#24273a] text-sm font-semibold hover:text-[#b7bdf8] hover:bg-[#494d64] hover:duration-200"
        >
          Download Resume
        </a>
        <Link href="https://github.com/Thompson-Jason" target="_blank">
          <FontAwesomeIcon
            icon={faGithub}
            size="2xl"
            className="text-[#b7bdf8] hover:text-[#494d64]"
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/jason-thompson-761b7a19a/"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            size="2xl"
            className="text-[#b7bdf8] hover:text-[#494d64]"
          />
        </Link>
        <Link href="https://notes.jasonthompson.org">
          <FontAwesomeIcon
            icon={faBookOpen}
            size="2xl"
            className="text-[#b7bdf8] hover:text-[#494d64]"
          />
        </Link>
      </div>
      <div className="md:hidden w-1/3">
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen(!open)}
        >
          <motion.div
            variants={topVarients}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-[#181926] rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVarients}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-[#181926] rounded"
          ></motion.div>
          <motion.div
            variants={bottomVarients}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-[#181926] rounded origin-left"
          ></motion.div>
        </button>
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 flex flex-col w-screen h-screen bg-[#24273a] text-[#cad3f5] items-center justify-center gap-8 text-4xl z-10"
          >
            {links.map((link) => (
              <motion.div variants={listItemVariants} key={link.title}>
                <Link href={link.url} onClick={() => setOpen(!open)}>
                  {link.title}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
