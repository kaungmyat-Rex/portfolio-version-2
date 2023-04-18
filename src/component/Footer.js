import React from "react";
import { FiGithub } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-11/12 h-auto">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-row justify-center items-center">
            <a href="https://github.com/kaungmyat-gusto">
              <FiGithub className="text-2xl text-gray-500 m-5 hover:text-redEdit duration-200 cursor-pointer" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100021177453532">
              {" "}
              <FiFacebook className="text-2xl text-gray-500 m-5 hover:text-redEdit duration-200 cursor-pointer" />{" "}
            </a>
            <a href="https://www.instagram.com/rex_kgmyat/">
              {" "}
              <FiInstagram className="text-2xl text-gray-500 m-5 hover:text-redEdit duration-200 cursor-pointer" />{" "}
            </a>
            <a href="#nothing">
              <FiTwitter className="text-2xl text-gray-500 m-5 hover:text-redEdit duration-200 cursor-pointer" />{" "}
            </a>
            <a href="https://www.linkedin.com/in/kaung-myat-1027a9247/">
              {" "}
              <FiLinkedin className="text-2xl text-gray-500 m-5 hover:text-redEdit duration-200 cursor-pointer" />{" "}
            </a>
          </div>
          <p className="font-mono text-sm text-blueEdit pt-3">
            Designed & built by Kaung Myat
          </p>
          <p className="font-mono text-sm text-blueEdit pt-2 pb-24 sm:pb-8">
            ©2023 present , All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
