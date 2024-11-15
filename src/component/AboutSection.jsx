import React, { useRef } from "react";
import { motion } from "framer-motion";
import { scrollAnimation } from "./ScrollAnimation";
import Journy from "./Journy";
import personImg from "../img/blackpantherblue.png";
import ironman from "../img/iron.png";
import spiderman from "../img/spiderman.png";
const AboutSection = () => {
  const constraintsRef = useRef(null);

  return (
    <motion.div
      className="w-11/12 h-auto lg:w-2/3"
      variants={scrollAnimation}
      initial="offscreen"
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="flex flex-col justify-center items-center md:flex-row">
        <div className="flex-[6] flex flex-col justify-center items-center lg:justify-start lg:items-start">
          <motion.h3
            className="relative font-primary text-blueEdit text-titleFont z-10 lg:text-6xl lg:pb-5"
            variants={scrollAnimation}
          >
            Me, Myself and I
          </motion.h3>
          <p className="font-secondry text-white pt-5 pb-5 md:text-lg">
            Hello, my name is Aung Kaung Myat. I’m a developer with a passion
            for
            <a
              className="text-blueEdit hover:text-redEdit"
              href="https://www.google.com/search?sxsrf=ALiCzsb1IJeU4y_A9wcVVGZSjqSyFoSwxg:1672145937873&q=Web+development&si=AC1wQDDpGOot2oszezPNwprLIg5ABjqHZ3YIIcGrpvlRyk10Fl70cf7ItObbiIETq79fqVxspM9h3gX55vt9hvakdVkrkN55v87NC8fJs3nFhHsAegheIkh-qFlAPOh32HqZxqc05UAALWckn5fUs_B-q6OMlSb4zcS6ET_A3YURyM7MlUMHoG8%3D&sa=X&ved=2ahUKEwicuo6F7Zn8AhVbyjgGHW88CF8Q6RN6BAhEEAE&biw=1536&bih=792&dpr=1.25"
            >
              {" "}
              web development.{" "}
            </a>
            Initially, I explored web development casually, but over time, I
            became more serious about honing my skills and fully immersing
            myself in the field. I am continuously learning and actively seeking
            remote or onsite job opportunities. If you need a frontend developer
            for your project, please feel free to contact me. I would be
            delighted to assist, as it would provide me with the opportunity to
            further develop my skills and knowledge.
          </p>
          <Journy />
        </div>
        {/* <motion.div
          dragConstraints={constraintsRef}
          className="flex-[4] w-[384px] sm:w-[384px] relative "
        > */}
        <motion.div
          ref={constraintsRef}
          className="w-[384px] sm:w-[384px] h-[400px] relative"
        >
          <img
            // ref={constraintsRef}
            className="w-[384px] sm:w-[384px] h-[400px] object-contain"
            src={personImg}
            alt=""
          />

          {/* <motion.img
            className="w-44 h-44 object-contain absolute -top-5 left-[53%] -translate-x-[50%]"
            drag
            dragConstraints={constraintsRef}
            src={spiderman}
          /> */}
          <motion.img
            className="w-44 h-44 object-contain absolute -top-5 left-[53%] -translate-x-[50%]"
            drag
            dragConstraints={constraintsRef}
            src={ironman}
          />
        </motion.div>
        {/* <img
          ref={constraintsRef}
          className="w-[384px] sm:w-[384px] object-contain"
          src={personImg}
          alt=""
        /> */}
        {/* <motion.img
            className="w-44 h-44 object-contain absolute -top-5 left-[53%] -translate-x-[50%] min-[1480px]:left-[49%]"
            drag
            dragConstraints={constraintsRef}
            src={ironman}
          />
        </motion.div> */}

        {/* <motion.img
          ref={constraintsRef}
          className="w-96 sm:w-96 bg-white relative"
          src={personImg}
          alt=""
        /> */}
      </div>
    </motion.div>
  );
};

export default AboutSection;
