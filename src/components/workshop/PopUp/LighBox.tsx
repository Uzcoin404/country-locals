/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import RightArrow from '../../../../public/icons/iconmonstr-arrow-right-lined.svg';
import LeftArrow from '../../../../public/icons/iconmonstr-arrow-left-lined.svg';

interface PopUpImg {
  totalImgNum: any;
  currentIndex: any;
  img: any;
  handleRight: () => void;
  handleLeft: () => void;
}

const LightBox = ({
  img,
  totalImgNum,
  currentIndex,
  handleRight,
  handleLeft,
}: PopUpImg) => {
  const lightImg = img;
  const [hoverEffect, setHoverEffect] = useState(true);

  const handleMouseOver = () => {
    setHoverEffect(true);
  };
  const handleMouseLeave = () => {
    setTimeout(() => {
      setHoverEffect(false);
    }, 7000);
  };

  return (
    <div
      className="box_body"
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseOver}
    >
      <div className="box_content">
        <div className="left_arrow arrow">
          <div
            className={` ${
              hoverEffect ? 'left-3 opacity-100' : ' left-0 opacity-0'
            } svg_icon absolute  z-[1060] w-12 translate-y-[-50%] cursor-pointer bg-[#00000073] p-3 text-[#999] duration-500 hover:text-[#fff] `}
            onClick={handleLeft}
          >
            <LeftArrow />
          </div>
        </div>
        <div className="img_content">
          <img src={lightImg} alt="imgs" />
        </div>

        <div className="right_arrow arrow">
          <div
            className={` ${
              hoverEffect ? 'right-3 opacity-100' : 'right-0 opacity-0'
            } svg_icon absolute right-3 z-[1060] w-12 translate-y-[-50%] cursor-pointer bg-[#00000073] p-3 text-[#999] duration-500 hover:text-[#fff]  `}
            onClick={handleRight}
          >
            <RightArrow />
          </div>
        </div>
      </div>
      <div className="responsive_arrow">
        <div className="left_arrow res_arrow">
          <div
            className="  svg_icon w-12  cursor-pointer bg-[#00000073] p-3 text-[#999] duration-500 hover:text-[#fff] "
            onClick={handleLeft}
          >
            <LeftArrow />
          </div>
        </div>
        <div className="right_arrow res_arrow">
          <div
            className=" svg_icon w-12  cursor-pointer bg-[#00000073] p-3 text-[#999] duration-500 hover:text-[#fff] "
            onClick={handleRight}
          >
            <RightArrow />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LightBox;
