import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProjectImgList } from "./ProjectImgList";
import { TfiArrowCircleLeft } from "react-icons/tfi";
import { TfiArrowCircleRight } from "react-icons/tfi";
import { AiOutlineCloseSquare } from "react-icons/ai";
const ImageModel = ({ openModel, setOpenModel, modelNumber, setOpen }) => {
  const ref = useRef();

  const handleNextSlide = () => {
    ref.current.slickNext();
  };

  const handlePrevSlide = () => {
    ref.current.slickPrev();
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none" }}
        onClick={onClick}
      />
    );
  }

  const CloseModel = () => {
    setOpenModel(false);
    setOpen(false);
  };

  const settings = {
    dots: false,

    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SampleNextArrow />,
  };

  //   console.log(ProjectImgList.filter((e) => e.id === 3)[0].img.map((e) => e));

  return (
    <div
      className={`fixed w-full h-full right-0 top-0 z-50 ${
        openModel ? "flex" : "hidden"
      } flex-col items-center justify-center backdrop-blur bg-modelbg`}
    >
      <h4 className="font-primary text-blueEdit text-4xl mb-6 relative">
        Project Images
      </h4>
      <Slider
        {...settings}
        className="w-11/12 h-96 lg:w-3/4 xl:w-4/6"
        ref={ref}
      >
        {ProjectImgList.filter((e) => e.id === modelNumber)[0].img.map(
          (e, index) => (
            <img
              key={index}
              src={e}
              alt="projectImage"
              className="w-full h-96 object-contain bg-white xl:bg-transparent lg:bg-transparent"
            />
          )
        )}
      </Slider>
      <div className="flex justify-center items-center gap-6 mt-11">
        <TfiArrowCircleLeft
          className=" text-white text-3xl cursor-pointer"
          onClick={handlePrevSlide}
        />
        <TfiArrowCircleRight
          className="text-white  text-3xl cursor-pointer"
          onClick={handleNextSlide}
        />
      </div>
      <AiOutlineCloseSquare
        className=" relative text-white text-5xl top-11"
        onClick={() => CloseModel()}
      />
    </div>
  );
};

export default ImageModel;
