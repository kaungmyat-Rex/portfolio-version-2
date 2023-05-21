import "./App.css";
import Navbar from "./component/Navbar";
import mainImag from "./img/maintext.png";
import personImg from "./img/blackpantherblue.png";
import { useState, useRef, useEffect } from "react";
import pjImg from "./img/MRML.jpg";
import pjImg2 from "./img/phonebae.jpg";
import pjImg3 from "./img/warteepf.jpg";
import pjImg4 from "./img/travel.jpg";
import { GrView } from "react-icons/gr";
import { AiFillGithub } from "react-icons/ai";
import Footer from "./component/Footer";
import { FiGithub } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { motion } from "framer-motion";
import { Scrollicon, BackToTopBtn } from "./component/Scrollicon";
import ButtomNav from "./component/ButtomNav";
import ImageModel from "./component/ImageModel";

const scrollAnimation = {
  offscreen: {
    y: "50px",
    opacity: 0,
  },
  onscreen: {
    y: "0px",
    opacity: 1,
    transition: { type: "spring", bounce: 0, duration: 2 },
  },
};

function App() {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);
  const [interval, setinterval] = useState(0);
  const [deginterval, setDeginterval] = useState(0);
  const [stop, setStop] = useState(0);
  const [deg, setDeg] = useState(0);
  const [degstop, setDegStop] = useState(0);
  const [open, setOpen] = useState(false);
  const [nav, setNav] = useState("");
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  const [active, setActive] = useState("");
  const [hidebtn, sethidebtn] = useState(false);
  const [openModel, setOpenModel] = useState(false);
  const [modelNumber, setModelNumber] = useState(1);
  const refAbout = useRef(null);
  const refSkill = useRef(null);
  const refWork = useRef(null);
  const refContact = useRef(null);

  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 5000);
  }

  const clickhome = async (data) => {
    setOpen(false);
    setNav(data.testUser);
  };

  const mouseoverFun = (dataset) => {
    setCount(0);
    setDeg(0);
    clearInterval(interval);
    clearInterval(deginterval);
    setData(dataset.testName);
    setStop(Number(dataset.testId));
    setDegStop(Number(dataset.testUser));
    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
      setinterval(timer);
    }, 20);
    const degtimer = setInterval(() => {
      setDeg((prev) => prev + 1);
      setDeginterval(degtimer);
    }, 1);
  };

  if (count === stop) {
    clearInterval(interval);
  }

  if (deg === degstop) {
    clearInterval(deginterval);
  }

  // console.log("Hi");
  // console.log("let me guess, your are developer too");
  // console.log(
  //   "website was built with React js , Tailwind css and Framer Motion"
  // );

  const OpenModelFun = (dataset) => {
    setModelNumber(Number(dataset.testId));
    setOpenModel(true);
    setOpen(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const aboutDiv = refAbout.current.offsetTop;
      const skillDiv = refSkill.current.offsetTop;
      const workDiv = refWork.current.offsetTop;
      const contactDiv = refContact.current.offsetTop;
      const scrollPosition = window.scrollY + 500;
      if (scrollPosition <= aboutDiv) {
        sethidebtn(false);
      } else {
        sethidebtn(true);
      }

      if (scrollPosition >= aboutDiv && scrollPosition < skillDiv) {
        setActive("about");
      } else if (scrollPosition >= skillDiv && scrollPosition < workDiv) {
        setActive("skill");
      } else if (scrollPosition >= workDiv && scrollPosition < contactDiv) {
        setActive("work");
      } else if (scrollPosition >= contactDiv) {
        setActive("contact");
      } else {
        setActive("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    !loading && (
      <div className={`App ${open ? "app-fix" : ""}`}>
        <Navbar open={open} setOpen={setOpen} />
        <div
          className={`${open ? "block duration-300" : "hidden duration-300"}`}
        >
          <div className="fixed w-full h-full bg-bgBlack z-30 flex justify-center ">
            <div className="w-11/12 bg-bgBlack flex flex-col">
              <div className="flex flex-col items-start mt-24">
                <a
                  className="font-primary text-xl text-navtextcolor w-full pt-5 pb-5 border-t-2 border-navborder hover:bg-navborder"
                  href={`#${nav}`}
                >
                  <p
                    onClick={(e) => clickhome(e.target.dataset)}
                    data-test-user="home"
                  >
                    Home
                  </p>
                </a>

                <a
                  className="font-primary text-xl text-navtextcolor w-full pt-5 pb-5 border-t-2 border-navborder hover:bg-navborder"
                  href={`#${nav}`}
                >
                  {" "}
                  <p
                    onClick={(e) => clickhome(e.target.dataset)}
                    data-test-user="about"
                  >
                    Abouts
                  </p>
                </a>

                <a
                  className="font-primary text-xl text-navtextcolor w-full pt-5 pb-5 border-t-2 border-navborder hover:bg-navborder"
                  href={`#${nav}`}
                >
                  {" "}
                  <p
                    onClick={(e) => clickhome(e.target.dataset)}
                    data-test-user="skill"
                  >
                    Skills
                  </p>
                </a>
                <a
                  className="font-primary text-xl text-navtextcolor w-full pt-5 pb-5 border-t-2 border-navborder hover:bg-navborder"
                  href={`#${nav}`}
                >
                  {" "}
                  <p
                    onClick={(e) => clickhome(e.target.dataset)}
                    data-test-user="work"
                  >
                    Works
                  </p>
                </a>
                <a
                  className="font-primary text-xl text-navtextcolor w-full pt-5 pb-5 border-t-2 border-b-2 border-navborder hover:bg-navborder"
                  href={`#${nav}`}
                >
                  {" "}
                  <p
                    onClick={(e) => clickhome(e.target.dataset)}
                    data-test-user="contact"
                  >
                    Contact
                  </p>
                </a>
              </div>
              <div className="mt-10 flex flex-col justify-center items-center">
                {" "}
                <div className="flex flex-row justify-center items-center">
                  <a href="https://github.com/kaungmyat-gusto">
                    <FiGithub className="text-2xl text-gray-500 m-5" />
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=100021177453532">
                    <FiFacebook className="text-2xl text-gray-500 m-5" />
                  </a>
                  <a href="https://www.instagram.com/rex_kgmyat/">
                    <FiInstagram className="text-2xl text-gray-500 m-5" />
                  </a>
                  <FiTwitter className="text-2xl text-gray-500 m-5" />
                  <a href="https://www.linkedin.com/in/kaung-myat-1027a9247/">
                    <FiLinkedin className="text-2xl text-gray-500 m-5" />
                  </a>
                </div>
                <p className="font-mono text-blueEdit mt-14">
                  version 2.0.23.31122022
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex justify-center items-center pt-52 pb-80 duration-200"
          id="home"
        >
          <div className="w-full h-auto md:w-4/5">
            <div className="flex flex-row justify-center items-center">
              <motion.img
                className="w-28 md:w-44"
                src={mainImag}
                alt="logo"
                initial={{ opacity: 0, x: "-50px" }}
                animate={{ opacity: 1, x: "0px" }}
                transition={{ type: "spring", duration: 5 }}
              />
              <div className="">
                <motion.h1
                  className="font-primary text-maintextcolor text-7xl md:text-9xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ type: "spring", delay: 0.5, duration: 10 }}
                >
                  AUNG
                </motion.h1>
                <motion.p
                  className="font-primary text-maintextcolor text-2xl md:text-4xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ type: "spring", delay: 1, duration: 10 }}
                >
                  MYAT's PORTFOLIO
                </motion.p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center pt-9">
              <motion.p
                className="font-secondry text-maintextcolor text-2xl font-extralight md:text-4xl"
                initial={{ opacity: 0, y: "10px" }}
                animate={{ opacity: 1, y: "0px" }}
                transition={{ type: "spring", delay: 1.5, duration: 5 }}
              >
                Developer who's code with art.
              </motion.p>
              <motion.p
                className="font-secondry text-maintextcolor text-sm text-center font-bold mt-1 md:w-4/5 md:text-xl md:font-normal"
                initial={{ opacity: 0, y: "10px" }}
                animate={{ opacity: 1, y: "0px" }}
                transition={{ type: "spring", delay: 2, duration: 5 }}
              >
                Web Developer. Googler. Content Creator. Creative Designer.
                Coffee Lover. Front-end Developer.
              </motion.p>
              <motion.div
                className="mt-20"
                initial={{ opacity: 0, y: "10px" }}
                animate={{ opacity: 1, y: "0px" }}
                transition={{ type: "spring", delay: 2.5, duration: 5 }}
              >
                <Scrollicon />
              </motion.div>
            </div>
          </div>
        </div>

        <ImageModel
          openModel={openModel}
          setOpenModel={setOpenModel}
          modelNumber={modelNumber}
          setOpen={setOpen}
        />

        {/* section-about */}
        <div
          className="flex justify-center items-center pb-28 lg:pt-52 lg:pb-40"
          id="about"
          ref={refAbout}
        >
          <motion.div
            className="w-11/12 h-auto lg:w-2/3"
            variants={scrollAnimation}
            initial="offscreen"
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="flex flex-col justify-center items-center md:flex-row">
              <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start">
                <motion.h3
                  className="relative font-primary text-blueEdit text-titleFont z-10 lg:text-6xl lg:pb-5"
                  variants={scrollAnimation}
                >
                  Me, Myself and I
                </motion.h3>
                <p className="font-secondry text-white pt-5 pb-5 md:text-lg">
                  Hello there.It's me Aung Kaung Myat. As I said before, I am a
                  developer.I became interested in web development in 2017, when
                  I was at{" "}
                  <a
                    className="text-blueEdit hover:text-redEdit"
                    href="https://www.glos.ac.uk/"
                  >
                    college
                  </a>{" "}
                  (Bsc (Hons) Computing).I'm not studying properly at that time
                  because of my young age and studentlife. And in 2019, when the
                  Covid break out , I will begin self-study to learn the entire{" "}
                  <a
                    className="text-blueEdit hover:text-redEdit"
                    href="https://www.google.com/search?sxsrf=ALiCzsb1IJeU4y_A9wcVVGZSjqSyFoSwxg:1672145937873&q=Web+development&si=AC1wQDDpGOot2oszezPNwprLIg5ABjqHZ3YIIcGrpvlRyk10Fl70cf7ItObbiIETq79fqVxspM9h3gX55vt9hvakdVkrkN55v87NC8fJs3nFhHsAegheIkh-qFlAPOh32HqZxqc05UAALWckn5fUs_B-q6OMlSb4zcS6ET_A3YURyM7MlUMHoG8%3D&sa=X&ved=2ahUKEwicuo6F7Zn8AhVbyjgGHW88CF8Q6RN6BAhEEAE&biw=1536&bih=792&dpr=1.25"
                  >
                    web development
                  </a>{" "}
                  sector.<br></br>
                  <br></br> So, here we are in 2023, and I am constantly
                  learning and looking for a remote or onsite Job opening
                  position. So, if you require a Frontend developer for your
                  project, please contact me. I would be delighted to assist you
                  since it would allow me to improve my skills and knowledge.
                </p>
              </div>

              <img className="w-96 sm:w-96" src={personImg} alt="" />
            </div>
          </motion.div>
        </div>
        {/* section skill and exp */}
        <div
          className="flex justify-center items-center pb-56 lg:pt-52"
          id="skill"
          ref={refSkill}
        >
          <motion.div
            className="w-11/12 h-auto lg:w-2/3"
            variants={scrollAnimation}
            initial="offscreen"
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="flex flex-col justify-center items-center md:flex-row md:justify-start">
              <div className="flex flex-col justify-center items-center md:w-3/5 lg:justify-start lg:items-start ">
                <h3 className="relative font-primary text-blueEdit text-4xl z-10 lg:text-6xl lg:pb-5">
                  Where'm I Expert?
                </h3>
                <p className="font-secondry text-white pt-5 pb-5 md:text-lg">
                  I designed profitable and beautiful websites with the finest
                  user experience and a clean style. I developed progressively
                  and using best practices. My main area of expertise right now
                  is front-end web development with React JS, customized
                  animation, design and back-end is still learning in progess.
                </p>
                <div className="flex flex-row flex-wrap justify-start">
                  <p
                    className="font-mono text-lg text-blueEdit border-2 border-blueEdit rounded-sm pl-4 pr-4 m-1 hover:bg-texticonbg cursor-pointer"
                    data-test-id="30"
                    data-test-user="180"
                    data-test-name="Html"
                    onClick={(e) => mouseoverFun(e.target.dataset)}
                  >
                    Html
                  </p>
                  <p
                    className="font-mono text-lg text-blueEdit border-blueEdit border-2 rounded-sm pl-4 pr-4 m-1 hover:bg-texticonbg cursor-pointer"
                    data-test-id="50"
                    data-test-user="215"
                    data-test-name="Css3"
                    onClick={(e) => mouseoverFun(e.target.dataset)}
                  >
                    Css3
                  </p>
                  <p
                    className="font-mono text-lg text-blueEdit border-blueEdit border-2 rounded-sm pl-4 pr-4 m-1 hover:bg-texticonbg cursor-pointer"
                    data-test-id="75"
                    data-test-user="240"
                    data-test-name="Javascript"
                    onClick={(e) => mouseoverFun(e.target.dataset)}
                  >
                    Javascript
                  </p>
                  <p
                    className="font-mono text-lg text-blueEdit border-blueEdit border-2 rounded-sm pl-4 pr-4 m-1 hover:bg-texticonbg cursor-pointer"
                    data-test-id="85"
                    data-test-user="256"
                    data-test-name="ReactJs"
                    onClick={(e) => mouseoverFun(e.target.dataset)}
                  >
                    ReactJs
                  </p>
                  <p
                    className="font-mono text-lg text-blueEdit border-blueEdit border-2 rounded-sm pl-4 pr-4 m-1 hover:bg-texticonbg cursor-pointer"
                    data-test-id="20"
                    data-test-user="149"
                    data-test-name="NodeJs"
                    onClick={(e) => mouseoverFun(e.target.dataset)}
                  >
                    NodeJs
                  </p>
                  <p
                    className="font-mono text-lg text-blueEdit border-blueEdit border-2 rounded-sm pl-4 pr-4 m-1 hover:bg-texticonbg cursor-pointer"
                    data-test-id="20"
                    data-test-user="149"
                    data-test-name="Express Js"
                    onClick={(e) => mouseoverFun(e.target.dataset)}
                  >
                    ExpressJs
                  </p>
                  <p
                    className="font-mono text-lg text-blueEdit border-blueEdit border-2 rounded-sm pl-4 pr-4 m-1 hover:bg-texticonbg cursor-pointer"
                    data-test-id="35"
                    data-test-user="198"
                    data-test-name="TypeScript"
                    onClick={(e) => mouseoverFun(e.target.dataset)}
                  >
                    TS
                  </p>
                  <p
                    className="font-mono text-lg text-blueEdit border-blueEdit border-2 rounded-sm pl-4 pr-4 m-1 hover:bg-texticonbg cursor-pointer"
                    data-test-id="50"
                    data-test-user="215"
                    data-test-name="Tailwind"
                    onClick={(e) => mouseoverFun(e.target.dataset)}
                  >
                    Tailwind
                  </p>
                  <p
                    className="font-mono text-lg text-blueEdit border-blueEdit border-2 rounded-sm pl-4 pr-4 m-1 hover:bg-texticonbg cursor-pointer"
                    data-test-id="20"
                    data-test-user="149"
                    data-test-name="MaterialUI"
                    onClick={(e) => mouseoverFun(e.target.dataset)}
                  >
                    MaterialUi
                  </p>
                  <p
                    className="font-mono text-lg text-blueEdit border-blueEdit border-2 rounded-sm pl-4 pr-4 m-1 hover:bg-texticonbg cursor-pointer"
                    data-test-id="20"
                    data-test-user="149"
                    data-test-name="Framer motion"
                    onClick={(e) => mouseoverFun(e.target.dataset)}
                  >
                    Framer motion
                  </p>
                  <p
                    className="font-mono text-lg text-blueEdit border-blueEdit border-2 rounded-sm pl-4 pr-4 m-1 hover:bg-texticonbg cursor-pointer"
                    data-test-id="75"
                    data-test-user="240"
                    data-test-name="MongoDb"
                    onClick={(e) => mouseoverFun(e.target.dataset)}
                  >
                    MongoDb
                  </p>
                </div>
              </div>
              <div className="flex mt-48 relative md:mt-20 md:ml-44 lg:ml-56">
                <div
                  style={{
                    position: "relative",
                    width: "auto",
                    height: "auto",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      color: "white",
                      zIndex: "20",
                      left: "-100px",
                      bottom: "-70px",
                    }}
                  >
                    0
                  </span>
                  <span
                    style={{
                      position: "absolute",
                      color: "white",
                      zIndex: "20",
                      left: "-120px",
                    }}
                  >
                    1
                  </span>
                  <span
                    style={{
                      position: "absolute",
                      color: "white",
                      zIndex: "20",
                      left: "-105px",
                      bottom: "40px",
                    }}
                  >
                    5
                  </span>
                  <span
                    style={{
                      position: "absolute",
                      color: "white",
                      zIndex: "20",
                      left: "-66px",
                      bottom: "83px",
                    }}
                  >
                    10
                  </span>
                  <span
                    style={{
                      position: "absolute",
                      color: "white",
                      zIndex: "20",
                      top: "-120px",
                    }}
                  >
                    20
                  </span>
                  <span
                    style={{
                      position: "absolute",
                      color: "white",
                      zIndex: "20",
                      left: "50px",
                      bottom: "83px",
                    }}
                  >
                    30
                  </span>
                  <span
                    style={{
                      position: "absolute",
                      color: "white",
                      zIndex: "20",
                      right: "-106px",
                      bottom: "40px",
                    }}
                  >
                    50
                  </span>
                  <span
                    style={{
                      position: "absolute",
                      color: "white",
                      zIndex: "20",
                      right: "-120px",
                    }}
                  >
                    75
                  </span>
                  <span
                    style={{
                      position: "absolute",
                      color: "white",
                      zIndex: "20",
                      right: "-100px",
                      bottom: "-70px",
                    }}
                  >
                    100
                  </span>
                  <p className="circle-percen">{count}%</p>
                  <div
                    style={{
                      position: "absolute",
                      height: "300px",
                      width: "300px",
                      borderRadius: "50%",

                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transform: "rotate(210deg)",

                      background: `conic-gradient(#69c9d0 ${deg}deg, #4c5154 0deg)`,
                      transition: "ease-in-out 500ms",
                    }}
                  >
                    <div
                      style={{
                        height: "250px",
                        width: "250px",
                        borderRadius: "50%",
                        backgroundColor: "#131b1e",
                        position: "absolute",
                        color: "white",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "ease-in-out 500ms",
                      }}
                    >
                      <p className="circle-font">{data}</p>
                    </div>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      top: "70px",
                      left: "-140px",
                      width: "300px",
                      height: "100px",
                      backgroundColor: "#131b1e",
                    }}
                  ></div>
                </div>
                <p className="absolute font-secondry bg-iconColor text-gray-400 p-1 pl-4 pr-4 -left-20 top-24 w-40">
                  Click the Skill Tag
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* section project */}
        <div
          className="flex justify-center items-center pt-50 pb-28"
          id="work"
          ref={refWork}
        >
          <div className="w-11/12 h-auto lg:w-2/3">
            <div className="flex flex-col justify-center items-center ">
              <h3 className="font-primary text-blueEdit text-titleFont lg:text-6xl lg:pb-5">
                My Projects
              </h3>
              <motion.div
                className="flex flex-col justify-center items-center mt-8 lg:flex-row"
                variants={scrollAnimation}
                initial="offscreen"
                whileInView={"onscreen"}
                viewport={{ once: true, amount: 0.1 }}
              >
                <div className="flex relative">
                  <img
                    className="rounded-lg border border-cyan-200 lg:border-none"
                    src={pjImg}
                    alt="project"
                  />
                  <div className="hidden lg:block lg:absolute lg:bg-blueEdit lg:w-full lg:h-full lg:rounded-lg lg:opacity-30 lg:hover:opacity-0 lg:duration-300"></div>
                </div>
                <div className="flex flex-col justify-start mt-5 lg:justify-end lg:items-end">
                  <h3 className="font-secondry text-blueEdit text-3xl font-medium ">
                    MRML
                  </h3>
                  <p className="font-secondry text-white pt-5 pb-5 lg:bg-textbg lg:pl-7 lg:pr-7 lg:-ml-28 lg:text-navtextcolor lg:text-lg lg:rounded lg:shadow-md lg:mt-5 lg:mb-5 lg:z-30 ">
                    The project you've seen is a movie review website with
                    Burmese language. It's intended for movie fans who don't
                    know what to watch or how to watch it. Provided by IMDB-API
                    and translation-API. For the development environment, Vite
                    and Tailwind Css is served!.
                  </p>
                  <div className="flex flex-row flex-wrap ">
                    <p className="font-primary text-white">ReactJs</p>
                    <p className="font-primary text-white ml-3">Tailwind</p>
                    <p className="font-primary text-white ml-3">Vite</p>
                  </div>
                  <div className="flex flex-row mt-3 ">
                    <p
                      className="text-base text-blueEdit mr-2 cursor-pointer border-2 border-blueEdit rounded-lg pt-1 pr-2 pl-2"
                      data-test-id="1"
                      onClick={(e) => OpenModelFun(e.target.dataset)}
                    >
                      Gallary
                    </p>
                    <a href="https://github.com/kaungmyat-gusto?tab=repositories">
                      <AiFillGithub className="text-blueEdit text-4xl" />
                    </a>
                    <div className="flex flex-row bg-blueEdit rounded-lg justify-center items-center ml-2">
                      <GrView className="font-semibold ml-2" />
                      <a href="https://mrml.vercel.app/">
                        <p className="font-secondry font-semibold pl-1 pr-2 ">
                          demo
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="flex flex-col justify-center items-center mt-16 lg:flex-row-reverse"
                variants={scrollAnimation}
                initial="offscreen"
                whileInView={"onscreen"}
                viewport={{ once: true, amount: 0.1 }}
              >
                <div className="flex relative">
                  <img
                    className="rounded-lg border border-cyan-200 lg:border-none"
                    src={pjImg2}
                    alt="project"
                  />
                  <div className="hidden lg:block lg:absolute lg:bg-blueEdit lg:w-full lg:h-full lg:rounded-lg lg:opacity-30 lg:hover:opacity-0 lg:duration-300"></div>
                </div>
                <div className="flex flex-col justify-start mt-5 lg:items-start">
                  <h3 className="font-secondry text-blueEdit text-3xl font-medium ">
                    Phonebae Reviews
                  </h3>
                  <p className="font-secondry text-white pt-5 pb-5 lg:bg-textbg lg:pl-7 lg:pr-7 lg:-mr-28 lg:text-navtextcolor lg:text-lg lg:rounded lg:shadow-md lg:mt-5 lg:mb-5 lg:z-30 ">
                    The project name is phone bae review website, on this
                    website ,you can post , edit and delete reviews if you are
                    admin , for client or visitor can read the reviews.
                    Dashboard include for admin , so it is easy to manage the
                    post quickly.
                  </p>
                  <div className="flex flex-row flex-wrap ">
                    <p className="font-primary text-white">ReactJs</p>
                    <p className="font-primary text-white ml-3">Router</p>
                    <p className="font-primary text-white ml-3">Express Js</p>
                    <p className="font-primary text-white ml-3">Mongo Db</p>
                  </div>
                  <div className="flex flex-row mt-3 ">
                    <p
                      className="text-base text-blueEdit mr-2 cursor-pointer border-2 border-blueEdit rounded-lg pt-1 pr-2 pl-2"
                      data-test-id="2"
                      onClick={(e) => OpenModelFun(e.target.dataset)}
                    >
                      Gallary
                    </p>
                    <a href="https://github.com/kaungmyat-gusto/phonebae-reviews">
                      <AiFillGithub className="text-blueEdit text-4xl" />
                    </a>
                    <div className="flex flex-row bg-blueEdit rounded-lg justify-center items-center ml-2">
                      <GrView className="font-semibold ml-2" />
                      <a href="https://phonebae-reviews.vercel.app/">
                        <p className="font-secondry font-semibold pl-1 pr-2 ">
                          demo
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="flex flex-col justify-center items-center mt-16 lg:flex-row"
                variants={scrollAnimation}
                initial="offscreen"
                whileInView={"onscreen"}
                viewport={{ once: true, amount: 0.1 }}
              >
                <div className="flex relative">
                  <img
                    className="rounded-lg border border-cyan-200 lg:border-none"
                    src={pjImg3}
                    alt="project"
                  />
                  <div className="hidden lg:block lg:absolute lg:bg-blueEdit lg:w-full lg:h-full lg:rounded-lg lg:opacity-30 lg:hover:opacity-0 lg:duration-300"></div>
                </div>
                <div className="flex flex-col justify-start mt-5 lg:justify-end lg:items-end">
                  <h3 className="font-secondry text-blueEdit text-3xl font-medium ">
                    Wartee Food Delivery
                  </h3>
                  <p className="font-secondry text-white pt-5 pb-5 lg:bg-textbg lg:pl-7 lg:pr-7 lg:-ml-28 lg:text-navtextcolor lg:text-lg lg:rounded lg:shadow-md lg:mt-5 lg:mb-5 lg:z-10 ">
                    This project is built for delivery system.Customer can
                    create orders and leave reviews.For website admin,Dashboard
                    will be included to control CRUD operation and also have
                    AUTH system with passportJs for security.
                  </p>
                  <div className="flex flex-row flex-wrap ">
                    <p className="font-primary text-white">ReactJs</p>
                    <p className="font-primary text-white ml-3">TypeScript</p>
                    <p className="font-primary text-white ml-3">Express Js</p>
                    <p className="font-primary text-white ml-3">Firebase</p>
                    <p className="font-primary text-white ml-3">Mongo Db</p>
                  </div>
                  <div className="flex flex-row mt-3 ">
                    <p
                      className="text-base text-blueEdit mr-2 cursor-pointer border-2 border-blueEdit rounded-lg pt-1 pr-2 pl-2"
                      data-test-id="3"
                      onClick={(e) => OpenModelFun(e.target.dataset)}
                    >
                      Gallary
                    </p>
                    <a href="https://github.com/kaungmyat-gusto/WarTee-food-delivery">
                      {" "}
                      <AiFillGithub className="text-blueEdit text-4xl" />
                    </a>
                    <div className="flex flex-row bg-blueEdit rounded-lg justify-center items-center ml-2">
                      <GrView className="font-semibold ml-2" />

                      <a href="https://wartee-fastfoods.netlify.app/">
                        <p className="font-secondry font-semibold pl-1 pr-2 ">
                          demo
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="flex flex-col justify-center items-center mt-16 lg:flex-row-reverse"
                variants={scrollAnimation}
                initial="offscreen"
                whileInView={"onscreen"}
                viewport={{ once: true, amount: 0.1 }}
              >
                <div className="flex relative">
                  <img
                    className="rounded-lg border border-cyan-200 lg:border-none"
                    src={pjImg4}
                    alt="project"
                  />
                  <div className="hidden lg:block lg:absolute lg:bg-blueEdit lg:w-full lg:h-full lg:rounded-lg lg:opacity-30 lg:hover:opacity-0 lg:duration-300"></div>
                </div>
                <div className="flex flex-col justify-start mt-5 lg:items-start">
                  <h3 className="font-secondry text-blueEdit text-3xl font-medium ">
                    Travel Agency Asia
                  </h3>
                  <p className="font-secondry text-white pt-5 pb-5 lg:bg-textbg lg:pl-7 lg:pr-7 lg:-mr-28 lg:text-navtextcolor lg:text-lg lg:rounded lg:shadow-md lg:mt-5 lg:mb-5 lg:z-30 ">
                    This project is the travel and tour agency which manages
                    tour packages for travelling in Aisa. It’s a landing page
                    which showcases the agency’s services, tour packages it
                    offers, benefits, etc
                  </p>
                  <div className="flex flex-row flex-wrap ">
                    <p className="font-primary text-white">ReactJs</p>
                    <p className="font-primary text-white ml-3">Swiperjs</p>
                  </div>
                  <div className="flex flex-row mt-3 ">
                    <a href="https://github.com/kaungmyat-gusto/Asia-travel-agency">
                      <AiFillGithub className="text-blueEdit text-4xl" />
                    </a>
                    <div className="flex flex-row bg-blueEdit rounded-lg justify-center items-center ml-2">
                      <GrView className="font-semibold ml-2" />
                      <a href="https://travel-agency-asia.netlify.app/">
                        <p className="font-secondry font-semibold pl-1 pr-2 ">
                          demo
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* section contact */}
        <div
          className="flex justify-center items-center pt-10 pb-40"
          id="contact"
          ref={refContact}
        >
          <div className="w-11/12 h-auto md:w-2/3">
            <motion.div
              className="flex flex-col justify-center items-center"
              variants={scrollAnimation}
              initial="offscreen"
              whileInView={"onscreen"}
              viewport={{ once: true, amount: 0.1 }}
            >
              <h3 className="font-primary text-blueEdit text-titleFont lg:text-6xl lg:pb-5">
                Get in touch
              </h3>
              <p className="font-secondry text-white pt-5 md:text-lg">
                Whether it's a job opportunity or project, my inbox is always
                open. If you have a question or just want to say hi, feel free
                to contact me.
              </p>
              <div className="w-3/4 h-auto flex flex-col justify-start pt-7">
                <p className="font-secondry text-white">
                  <span className="text-blueEdit">Email</span> -
                  aungakm667@gmail.com
                </p>
                <p className="font-secondry text-white mt-2">
                  <span className="text-blueEdit">Phone</span> - +65
                  09-971569482
                </p>
              </div>
              <a href="mailto:aungakm667@gmail.com">
                <button className="border border-blueEdit rounded mt-24 hover:bg-texticonbg duration-200">
                  <p className="font-secondry text-blueEdit p-4 pl-6 pr-6">
                    Say Hello!
                  </p>
                </button>
              </a>
            </motion.div>
          </div>
        </div>
        <Footer />
        <ButtomNav active={active} />
        <div className={`${hidebtn ? "block" : "hidden"}`}>
          <BackToTopBtn />{" "}
        </div>
      </div>
    )
  );
}

export default App;
