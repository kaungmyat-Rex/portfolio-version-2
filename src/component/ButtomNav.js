import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import { RiMiniProgramFill } from "react-icons/ri";
import { HiMail } from "react-icons/hi";

const ButtomNav = ({ active }) => {
  return (
    <div className="fixed w-full bottom-0 flex justify-center items-center bg-btnNavColor1 border-t-2 border-navborder rounded-tr-lg rounded-tl-lg sm:hidden">
      <div className="w-10/12 h-auto">
        <div className="flex flex-row justify-between items-center pt-3 pb-6">
          <a
            href="#about"
            className={`flex flex-col justify-center items-center ${
              active === "about" ? "text-redEdit" : "text-navtextcolor"
            }  hover:text-redEdit`}
          >
            <BsFillPersonFill className="text-2xl" />
            <p className="font-secondry text-sm">About</p>
          </a>
          <a
            href="#skill"
            className={`flex flex-col justify-center items-center ${
              active === "skill" ? "text-redEdit" : "text-navtextcolor"
            }  hover:text-redEdit`}
          >
            <IoMdSettings className="text-2xl" />
            <p className="font-secondry text-sm">Skills</p>
          </a>
          <a
            href="#work"
            className={`flex flex-col justify-center items-center ${
              active === "work" ? "text-redEdit" : "text-navtextcolor"
            }  hover:text-redEdit`}
          >
            <RiMiniProgramFill className="text-2xl" />
            <p className="font-secondry text-sm">Works</p>
          </a>
          <a
            href="#contact"
            className={`flex flex-col justify-center items-center ${
              active === "contact" ? "text-redEdit" : "text-navtextcolor"
            }  hover:text-redEdit`}
          >
            <HiMail className="text-2xl" />
            <p className="font-secondry text-sm">Contact</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ButtomNav;
