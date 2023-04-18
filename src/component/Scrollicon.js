import React from "react";
import { motion } from "framer-motion";
import { IoIosArrowDropup } from "react-icons/io";

export const Scrollicon = () => {
  return (
    <div className=" w-9 h-16 border rounded-3xl relative">
      <motion.div
        className="w-2 h-2 bg-white rounded-full absolute left-3"
        initial={{ opacity: 1, y: "5px" }}
        animate={{ y: "42px", opacity: 0 }}
        transition={{
          type: "spring",
          bounce: 0,
          duration: 3,
          repeat: Infinity,
        }}
      ></motion.div>
    </div>
  );
};

export const BackToTopBtn = () => {
  const backtopFun = () => {
    window.scrollTo(0, 0);
  };
  return (
    <IoIosArrowDropup
      onClick={() => backtopFun()}
      className="p-3 fixed bg-btnNavColor border-2 border-navborder bottom-24 right-2 text-6xl text-navtextcolor rounded-full shadow-md hover:text-redEdit  sm:bottom-8 sm:right-5"
    />
  );
};
