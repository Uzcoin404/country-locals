/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from 'react';

interface PopUpScreenVal {
  children: any;
  activePopUp: any;
}

const PopUpScreen = ({ children, activePopUp }: PopUpScreenVal) => {
  // const { setActivePopUp } = activePopUp;
  const [hoverEffect, setHoverEffect] = useState(true);

  const handleMouseOver = () => {
    setHoverEffect(true);
  };
  const handleMouseLeave = () => {
    setTimeout(() => {
      setHoverEffect(false);
    }, 7000);
  };

  const handleClose = () => {
    activePopUp(false);
    document.querySelector('body')?.classList.remove('active');
  };
  return (
    <div
      className="fixed top-0 left-0 z-[1040] flex h-screen w-full select-none items-center justify-center bg-[#000000]"
      onMouseEnter={handleMouseOver}
      onMouseMove={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={` ${
          hoverEffect ? 'top-0 opacity-100' : '-top-4 opacity-0'
        } absolute top-0 left-0  z-[1050] flex w-full items-center justify-end bg-[#00000073] duration-300`}
      >
        <button
          className=" z-[1050] bg-[#00000073] p-2 pr-4 text-[25px] font-thin text-[#999] duration-500 hover:text-[#fff]"
          onClick={() => handleClose()}
          type="button"
        >
          x
        </button>
      </div>

      <div className="item">{children}</div>
    </div>
  );
};

export default PopUpScreen;
