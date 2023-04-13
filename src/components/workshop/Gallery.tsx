/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable arrow-body-style */
/* eslint-disable @next/next/no-img-element */

import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReactPlayer from 'react-player';

import LightBox from './PopUp/LighBox';
import PopUpScreen from './PopUp/PopUpScreen';
import LayoutIcon from '../../../public/icons/gallery-layout.svg';

const Gallery = () => {
  const [lightImg, setLightImg] = useState('');
  const [totalImg, setTotalImg] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activePopUp, setActivePopUp] = useState(false);
  const [showBottomBar, setShowBottomBar] = useState(true);

  const bannerData = [
    { id: 1, img: 'img1.png' },
    { id: 2, img: 'img2.png' },
    { id: 3, img: 'img3.png' },
    { id: 4, img: 'img5.png' },
    { id: 5, img: 'img4.png' },
  ];

  const handleLightBox = (data: { img: string }, index: number) => {
    setLightImg(data.img);
    setCurrentIndex(index);
    setTotalImg(bannerData.length);
    document.querySelector('body')?.classList.add('active');
  };

  const handleRight = () => {
    const totalLength = bannerData.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = bannerData[0].img;
      setLightImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = bannerData.filter((item) => {
      return bannerData.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].img;
    setLightImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handleLeft = () => {
    const totalLength = bannerData.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = bannerData[totalLength - 1].img;
      setLightImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = bannerData.filter((item) => {
      return bannerData.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].img;
    setLightImg(newItem);
    setCurrentIndex(newIndex);
  };

  return (
    <div className="sticky_top_container flex w-full flex-wrap">
      <div className="gallery-layout grid w-full grid-cols-4 grid-rows-2 gap-2 bg-black py-2">
        {bannerData.map((data, index) => (
          <div
            className={`item${index + 1} ${
              index === 0
                ? 'video_player_wrapper col-span-2 row-span-2'
                : 'col-span-1 row-span-1'
            } relative overflow-hidden after:duration-300 hover:after:scale-110`}
            key={data.id + Math.random()}
          >
            {index === 0 ? (
              <ReactPlayer
                url="https://drive.google.com/uc?id=1ZMYDAQUIRuISS5ckSOVUtGE6dV5RRfW2"
                width="100%"
                height="100%"
                controls
                muted
                playing
              />
            ) : (
              <img
                src={`/${data.img}`}
                alt="img"
                onClick={() => {
                  setActivePopUp(true);
                  handleLightBox(data, index);
                }}
                className="cursor-pointer duration-300 hover:scale-105"
              />
            )}
          </div>
        ))}

        {activePopUp && (
          <PopUpScreen activePopUp={setActivePopUp}>
            <LightBox
              img={lightImg}
              totalImgNum={totalImg}
              currentIndex={currentIndex}
              handleRight={handleRight}
              handleLeft={handleLeft}
            />

            <Swiper
              slidesPerView={'auto'}
              spaceBetween={8}
              className={` ${
                showBottomBar ? 'show' : 'hide'
              } gallerySwiper  bg-[#0D0A0A] `}
            >
              <div
                className="svg_icon absolute -top-6 right-4 z-[1060]  w-12 cursor-pointer  rounded bg-[#0D0A0A] p-3 pt-1  text-[#999] duration-500 hover:text-[#fff] "
                onClick={() => setShowBottomBar(!showBottomBar)}
              >
                <LayoutIcon />
              </div>
              {bannerData.map((items: { img: string }, _index: any) => (
                <SwiperSlide key={Math.random() * 10} className="galleryImg">
                  <img
                    src={items.img}
                    alt=""
                    width={80}
                    height={50}
                    onClick={() => handleLightBox(items, _index)}
                    className={
                      items.img === lightImg
                        ? ' cursor-pointer rounded  border-2 border-[#e25454]'
                        : 'cursor-pointer rounded border-2 border-white'
                    }
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </PopUpScreen>
        )}
      </div>
    </div>
  );
};

export default Gallery;
