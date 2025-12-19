"use client";

import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import NavLink from "@/components/navLink";
import { motion } from "framer-motion";
import { useTransitionNavigation } from "@/components/transitionNavigation";

const links = [
  { url: "/", title: "Home" },
  { url: "/skills", title: "Skills" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/blog", title: "Blog" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const { startNavigate, isTransitioning } = useTransitionNavigation();

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
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl relative">
      <div className="hidden md:flex gap-4 w-1/3 text-primary-accent">
        {links.map((link) => (
          <NavLink link={link} key={link.url} />
        ))}
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
        <Link
          href="/"
          className="text-sm bg-primary-accent rounded-md p-1 font-semibold flex items-center justify-center"
          onClick={(event) => {
            if (isTransitioning) {
              event.preventDefault();
              return;
            }
            // Only intercept internal navigation
            event.preventDefault();
            startNavigate("/");
          }}
        >
          <span className="text-primary-secondary mr-1">Jason </span>
          <span className="w-20 h-8 rounded bg-primary-secondary text-primary-text mr-1 flex items-center justify-center">
            Thompson
          </span>
        </Link>
      </div>
      <div className="hidden md:flex gap-4">
        {/* <a
          href="/resume.pdf"
          download="resume.pdf"
          className="flex justify-center items-center rounded py-1 px-2 bg-primary-accent text-primary-secondary text-sm font-semibold hover:text-primary-accent hover:bg-primary-hover transition-colors duration-200"
        >
          Download Resume
        </a> */}
        <Link href="https://github.com/Thompson-Jason" target="_blank">
          <FontAwesomeIcon
            icon={faGithub}
            size="2xl"
            className="text-primary-accent hover:text-primary-hover transition-colors"
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/jason-thompson-761b7a19a/"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            size="2xl"
            className="text-primary-accent hover:text-primary-hover transition-colors"
          />
        </Link>
        <Link href="https://notes.jasonthompson.org">
          <FontAwesomeIcon
            icon={faBookOpen}
            size="2xl"
            className="text-primary-accent hover:text-primary-hover transition-colors"
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
            className="w-10 h-1 bg-primary-bg rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVarients}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-primary-bg rounded"
          ></motion.div>
          <motion.div
            variants={bottomVarients}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-primary-bg rounded origin-left"
          ></motion.div>
        </button>
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 flex flex-col w-screen h-screen bg-primary-secondary text-primary-text items-center justify-center gap-8 text-4xl z-10"
          >
            {links.map((link) => (
              <motion.div variants={listItemVariants} key={link.title}>
                <Link
                  href={link.url}
                  onClick={(event) => {
                    setOpen(false);
                    if (isTransitioning) {
                      event.preventDefault();
                      return;
                    }
                    event.preventDefault();
                    startNavigate(link.url);
                  }}
                >
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
