import React, { useEffect, useState } from "react";

import { Divide as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";
import logo from "../img/maintext.png";

const NavAnimation = {
  offscreen: {
    y: "-20px",
    opacity: 0,
  },
  onscreen: {
    y: "0px",
    opacity: 1,
  },
};

const Navbar = ({ open, setOpen }) => {
  const [scroll, getScroll] = useState(false);

  const [prev, setPrev] = useState(window.pageYOffset);
  const [current, setCurrent] = useState();

  useEffect(() => {
    if (open === true) {
      getScroll(false);
    } else {
      window.onscroll = function () {
        setCurrent(window.pageYOffset);
        if (prev > current) {
          getScroll(false);
        } else {
          getScroll(true);
        }
        setPrev(current);
      };
    }
  }, [current, open, prev]);

  return (
    <div
      className={`bg-bgBlack fixed w-full h-20 z-50 ${
        scroll ? "-top-20 duration-300" : "top-0 duration-300"
      } scroll-m-6`}
    >
      <div className="w-full h-full flex flex-row items-center justify-between">
        <img className="w-7 ml-6" src={logo} alt="logo" />
        <div className="relative md:hidden">
          <div className="mr-3">
            <Hamburger
              color={`${open ? "#ee1d52" : "white"}`}
              size={29}
              toggled={open}
              toggle={setOpen}
            />
          </div>
          {/* <div
            className={`absolute flex flex-col justify-center items-center ${
              open ? "-left-10 duration-300" : "left-20 duration-300"
            } top-12`}
          >
            <div className="shadow-inner w-20 h-9 bg-iconColor flex justify-center items-center rounded-lg mt-4">
              <p className="text-white font-primary font-extrabold tracking-wider">
                <a href="">Home</a>
              </p>
            </div>
            <div className="w-20 h-9 bg-iconColor flex justify-center items-center rounded-lg mt-4 shadow-lg">
              <p className="text-white font-primary font-extrabold tracking-wider  ">
                <a href="#about">About</a>
              </p>
            </div>
            <div className="w-20 h-9 bg-iconColor flex justify-center items-center rounded-lg mt-4 shadow-lg">
              <p className="text-white font-primary font-extrabold tracking-wider ">
                <a href="#skill">Skill</a>
              </p>
            </div>
            <div className="w-20 h-9 bg-iconColor flex justify-center items-center rounded-lg mt-4 shadow-lg">
              <p className="text-white font-primary font-extrabold tracking-wider ">
                <a href="#work">Work</a>
              </p>
            </div>
            <div className="w-20 h-9 bg-iconColor flex justify-center items-center rounded-lg mt-4 shadow-lg">
              <p className="text-white font-primary font-extrabold  tracking-wider ">
                <a href="#contact">Contact</a>
              </p>
            </div>
          </div> */}
        </div>
        <div className="hidden md:block">
          <div className="flex flex-row ">
            <a href="#about">
              <motion.p
                className="font-primary text-navtextcolor text-lg mr-6 tracking-wide hover:text-redEdit hover:duration-200 cursor-pointer"
                variants={NavAnimation}
                initial="offscreen"
                animate="onscreen"
                transition={{ type: "spring", bounce: 0, duration: 3 }}
              >
                Abouts
              </motion.p>
            </a>
            <a href="#skill">
              {" "}
              <motion.p
                className="font-primary text-navtextcolor text-lg mr-6 tracking-wide hover:text-redEdit hover:duration-200 cursor-pointer"
                variants={NavAnimation}
                initial="offscreen"
                animate="onscreen"
                transition={{
                  type: "spring",
                  bounce: 0,
                  duration: 3,
                  delay: 0.3,
                }}
              >
                Skill
              </motion.p>
            </a>
            <a href="#work">
              <motion.p
                className="font-primary text-navtextcolor text-lg mr-6 tracking-wide hover:text-redEdit hover:duration-200 cursor-pointer"
                variants={NavAnimation}
                initial="offscreen"
                animate="onscreen"
                transition={{
                  type: "spring",
                  bounce: 0,
                  duration: 3,
                  delay: 0.6,
                }}
              >
                Works
              </motion.p>
            </a>
            <a href="#contact">
              <motion.p
                className="font-primary text-navtextcolor text-lg mr-6 tracking-wide hover:text-redEdit hover:duration-200 cursor-pointer"
                variants={NavAnimation}
                initial="offscreen"
                animate="onscreen"
                transition={{
                  type: "spring",
                  bounce: 0,
                  duration: 3,
                  delay: 0.9,
                }}
              >
                Contact
              </motion.p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
