import React from "react";
import { motion } from "framer-motion";

const Scrollicon = () => {
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

export default Scrollicon;
