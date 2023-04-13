/* eslint react/no-array-index-key: "off" */
import Image from 'next/image';
import { FreeMode, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import StarIcon from '../../../public/icons/star.svg';

const ReviewSlider = () => (
  <div className="container">
    <div className="relative -mr-5 -ml-[10px] md:-ml-3 md:-mr-3">
      <Swiper
        slidesPerView="auto"
        spaceBetween={0}
        freeMode
        modules={[Navigation, FreeMode]}
        navigation={{
          prevEl: '.review_slider.swiper-button-prev',
          nextEl: '.review_slider.swiper-button-next',
        }}
        className="flex flex-wrap !pr-5 md:!pr-0"
      >
        {[...Array(9)].map((item, index) => (
          <SwiperSlide key={index} className="!w-[78%] md:!w-1/3 lg:!w-1/4">
            <div className="m-3 flex items-center gap-2 rounded-lg p-2 shadow-spread md:gap-5">
              <div className="h-[78px] w-[66px] rounded border">
                <Image src="/icons/tower.png" width={66} height={78} />
              </div>
              <div>
                <div className="flex items-center text-[#FFCE31]">
                  <span className="svg_icon inline-block w-[8px]">
                    <StarIcon />
                  </span>
                  <span className="svg_icon inline-block w-[8px]">
                    <StarIcon />
                  </span>
                  <span className="svg_icon inline-block w-[8px]">
                    <StarIcon />
                  </span>
                  <span className="svg_icon inline-block w-[8px]">
                    <StarIcon />
                  </span>
                  <span className="svg_icon inline-block w-[8px]">
                    <StarIcon />
                  </span>
                  <span className="ml-3 text-[11px] text-[#404145]">
                    {' '}
                    5 Reviews
                  </span>
                </div>
                <h2 className="py-1 text-base font-semibold text-[#222]">
                  Art and Culture
                </h2>
                <h4 className="text-sm font-semibold text-[#808080]">
                  49 experiences
                </h4>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="review_slider swiper-button-prev !-left-1 !-mt-[14px]  !hidden !h-[34px] !w-[34px] rounded-full border border-[#ddd] bg-white !text-[#000] shadow-lg after:!text-xs md:!flex" />
      <div className="review_slider swiper-button-next !-right-1 !-mt-[14px] !hidden !h-[34px] !w-[34px] rounded-full border border-[#ddd] bg-white !text-[#000] shadow-lg after:!text-xs md:!flex" />
    </div>
  </div>
);

export default ReviewSlider;
