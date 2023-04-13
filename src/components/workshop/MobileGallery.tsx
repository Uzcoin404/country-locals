/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react';
import { EffectFade, Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import BackIcon from '../../../public/icons/arrow-left.svg';
import HeartIcon from '../../../public/icons/heart-outline.svg';
import UploadIcon from '../../../public/icons/upload.svg';

const MobileGallery = () => {
  const bannerData = [
    { id: 1, img: 'img1.png' },
    { id: 2, img: 'img2.png' },
    { id: 3, img: 'img3.png' },
    { id: 4, img: 'img5.png' },
    { id: 5, img: 'img4.png' },
    { id: 6, img: 'img1.png' },
    { id: 7, img: 'img2.png' },
    { id: 8, img: 'img3.png' },
    { id: 9, img: 'img5.png' },
    { id: 10, img: 'img4.png' },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 400);
    });
  }, []);

  return (
    <div className="relative -mt-8">
      <Swiper
        modules={[EffectFade, Navigation, Autoplay]}
        slidesPerView={1}
        spaceBetween={0}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: '.mobile_gallery.swiper-button-prev',
          nextEl: '.mobile_gallery.swiper-button-next',
        }}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        onSlideChange={(swiper) => {
          setCurrentSlide(swiper.activeIndex);
        }}
        className="mobile_gallery_slider"
      >
        {bannerData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative h-[450px] sm:h-auto">
              <img
                src={item.img}
                alt="slide"
                className="absolute h-full w-auto object-cover sm:relative sm:h-auto"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className={`${
          scroll && 'border-b border-b-slate-200 bg-white'
        } fixed top-0 z-20 flex w-full items-center justify-between py-3 px-3`}
      >
        <button
          type="button"
          className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-small"
        >
          <div className="svg_icon w-4 rotate-180 transform text-transparent">
            <BackIcon />
          </div>
        </button>
        <div className="flex gap-x-3">
          <button
            type="button"
            className="flex h-8 items-center justify-center rounded-full bg-white px-3 shadow-small"
          >
            <div className="svg_icon w-4 text-transparent">
              <UploadIcon />
            </div>
            <span className="ml-2 text-sm">Share</span>
          </button>
          <button
            type="button"
            className="flex h-8 items-center justify-center rounded-full bg-white px-3 shadow-small"
          >
            <div className="svg_icon w-4 text-transparent">
              <HeartIcon />
            </div>
            <span className="ml-2 text-sm">Save</span>
          </button>
        </div>
      </div>
      <div className="mobile_gallery swiper-button-prev !top-[50%] !-left-0 !mt-0 !h-[32px] !w-[32px] -translate-y-[50%] transform !text-[#fff] after:!text-[18px]" />
      <div className="mobile_gallery swiper-button-next !top-[50%] !-right-0 !mt-0 !h-[32px] !w-[32px] -translate-y-[50%] transform !text-[#fff] after:!text-[18px]" />
      <div className="absolute left-[4%] bottom-3 z-[1] flex h-1 w-[92%] justify-between">
        {bannerData.map((item, index) => (
          <div
            key={item.id}
            className="h-1 overflow-hidden rounded-md bg-white bg-opacity-40"
            style={{
              width: `calc(${100 / bannerData.length}% - 6px)`,
            }}
          >
            <div
              className={`h-1 bg-white ${
                currentSlide >= index ? 'w-full' : 'w-0'
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileGallery;
