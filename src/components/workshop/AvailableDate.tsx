import { useState } from 'react';
import Image from 'next/image';
import { FreeMode, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import useViewport from '../../hooks/useViewport';

import 'swiper/css';

import Arrow from '../../../public/icons/purple-arrow.svg';
import StarIcon from '../../../public/icons/star.svg';
import Verify from '../../../public/icons/black-verify.svg';
import Shield from '../../../public/icons/shield.svg';
import ReviewPopup from '../common/popups/ReviewPopup';

const AvailableDate = () => {
  const { width } = useViewport();
  const [isOpen, setIsOpen] = useState(false);
  const handlePopupOpen = () => {
    setIsOpen(true);
  };
  const handlePopupClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="container pb-10 pt-4 md:pb-20">
      <h3 className="pb-3 text-2xl font-bold md:text-3xl lg:text-[38px]">
        Choose from
        <span className="purple_gradient_text"> available dates</span>
      </h3>
      <h5 className="text-base font-medium">5 available</h5>

      <div className="relative -mr-5 -ml-2 mt-3 md:-mr-3 md:-ml-3">
        <Swiper
          slidesPerView="auto"
          spaceBetween={0}
          freeMode
          modules={[Navigation, FreeMode]}
          navigation={{
            prevEl: '.available_dates.swiper-button-prev',
            nextEl: '.available_dates.swiper-button-next',
          }}
          className="flex flex-wrap !pr-5 md:!pr-0"
        >
          {[1, 2, 3, 4, 5].map((item) => (
            <SwiperSlide key={item} className="!w-[98%] md:!w-1/2 lg:!w-1/3">
              <div
                className="m-3 flex flex-nowrap items-stretch justify-between overflow-hidden rounded-[10px] bg-white"
                style={{
                  boxShadow: '0 3px 10px -1px rgba(0,0,0,.2)',
                }}
              >
                <div className="w-[55%] p-5 pr-2 md:w-[60%] md:pr-5">
                  <h3 className="py-0 text-base font-semibold text-[#222]">
                    Tue, 2 Jul
                  </h3>
                  <h4 className="mb-4 text-[12px] font-medium">
                    7:30 am - 8:00 am(IST)
                  </h4>
                  <a
                    href="#"
                    className="mb-3 text-[12px] text-[#222] underline hover:text-[#E71575]"
                  >
                    Book for a private group?
                  </a>
                  <div className="mt-4 flex items-center  gap-4">
                    <button
                      type="button"
                      className="purple_gradient_bg flex h-[40px] w-[115px] items-center justify-center rounded text-[14px] font-bold text-[#fff]"
                    >
                      Select
                    </button>

                    <p className="text-base text-[#808080]">
                      <span className="text-[#E71575]">$45 </span>
                      <span>/ person</span>
                    </p>
                  </div>
                </div>
                <div className="flex w-[45%] shrink-0 items-center justify-center overflow-hidden rounded-[10px] bg-[#1C1C25] sm:w-[40%]">
                  <Image
                    src="/icons/yellow-love.png"
                    width={70}
                    height={70}
                    alt="review 1"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="available_dates swiper-button-prev !-left-1 !-mt-[14px]  !hidden !h-[34px] !w-[34px] rounded-full border border-[#ddd] bg-white !text-[#000] shadow-lg after:!text-xs md:!flex" />
        <div className="available_dates swiper-button-next !-right-1 !-mt-[14px] !hidden !h-[34px] !w-[34px] rounded-full border border-[#ddd] bg-white !text-[#000] shadow-lg after:!text-xs md:!flex" />
      </div>

      <div className="pt-4 text-center lg:pt-5">
        <button
          type="button"
          onClick={handlePopupOpen}
          className="purple_gradient_bg h-[44px] w-[160px] rounded-lg py-1 px-2 text-xs font-bold uppercase text-white transition-shadow hover:shadow-lg"
        >
          SHOW MORE
        </button>
        <ReviewPopup status={isOpen} onClose={handlePopupClose} />
      </div>

      <h3 className="mt-8 block pb-3 text-2xl font-bold md:text-3xl lg:hidden lg:text-[38px]">
        Meet your
        <span className="purple_gradient_text"> mentors</span>
      </h3>

      {width > 1063 ? (
        <div className="flex flex-wrap items-center justify-between gap-y-5 md:mt-16 md:gap-y-0 xl:px-7">
          {[1, 2].map((item) => (
            <div className="w-full md:w-[49%]" key={item}>
              <div className="flex flex-wrap overflow-hidden rounded-[10px] shadow-spread md:flex-nowrap">
                <div
                  className="flex h-[140px] w-full shrink-0 overflow-hidden rounded-[10px] bg-cover bg-center bg-no-repeat md:h-auto md:max-w-[140px] lg:max-w-[155px]"
                  style={{
                    backgroundImage: `url(/review-headshot-${item}.jpg)`,
                  }}
                />
                <div className="w-full p-5">
                  <div className="flex flex-wrap items-center justify-between">
                    <p className="text-[18px] font-semibold text-[#000]">
                      {item === 2 && 'Co-'}
                      Hosted by The
                    </p>
                    <a
                      href="#"
                      className="flex items-center text-[12px] font-semibold text-[#E71575]"
                    >
                      See Profile
                      <div className="svg_icon w-3">
                        <Arrow />
                      </div>
                    </a>
                  </div>
                  <div className="text-[10px] text-[#808080] xl:text-xs">
                    Joined in February 2017
                  </div>
                  <div className="flex items-center gap-1 pb-2 pt-2  text-black  xl:pb-4 xl:pt-3 xl:text-xs">
                    <div className="svg_icon w-[20px] text-[#FFCE31]">
                      <StarIcon />
                    </div>
                    <h4 className="mr-1 text-xs font-semibold text-[#222]">
                      107 Reviews
                    </h4>
                    <div className="svg_icon w-3">
                      <Verify />
                    </div>
                    <h4 className="text-xs text-[#5F5D5D]">
                      Identity verified
                    </h4>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 xl:flex-nowrap">
                    <button
                      type="button"
                      className="purple_gradient_bg order-2 h-[40px] w-[164px] rounded-lg text-sm font-bold text-[#fff] sm:order-1"
                    >
                      Contact Host
                    </button>
                    <div className="order-1 flex items-center gap-2 sm:order-2">
                      <div className="svg_icon w-[18px] text-[#FFCE31]">
                        <Shield />
                      </div>
                      <p className="text-xs font-medium text-[#808080] xl:w-[170px]">
                        To protect your payment, never tranfer money or
                        communicate outside of the website or app.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="-mr-5 -ml-[10px] md:ml-0 md:mr-0">
          <Swiper
            slidesPerView="auto"
            spaceBetween={0}
            freeMode
            modules={[FreeMode]}
            className="flex flex-wrap !pr-5 md:!pr-0"
          >
            {[1, 2].map((item) => (
              <SwiperSlide key={item} className="!w-[85%] px-2 py-3">
                <div className="w-full" key={item}>
                  <div className="flex flex-wrap overflow-hidden rounded-[10px] shadow-spread md:flex-nowrap">
                    <div
                      className="flex h-[140px] w-full shrink-0 overflow-hidden rounded-[10px] bg-cover bg-center bg-no-repeat md:h-auto md:max-w-[140px] lg:max-w-[155px]"
                      style={{
                        backgroundImage: `url(/review-headshot-${item}.jpg)`,
                      }}
                    />
                    <div className="w-full px-4 pt-2 pb-4">
                      <div className="flex flex-wrap items-center justify-between">
                        <p className="text-[18px] font-semibold text-[#000]">
                          {item === 2 && 'Co-'}
                          Hosted by The
                        </p>
                        <a
                          href="#"
                          className="flex items-center text-[12px] font-semibold text-[#E71575]"
                        >
                          See Profile
                          <div className="svg_icon w-3">
                            <Arrow />
                          </div>
                        </a>
                      </div>
                      <div className="text-[10px] text-[#808080] xl:text-xs">
                        Joined in February 2017
                      </div>
                      <div className="flex items-center gap-1 pb-2 pt-2  text-black  xl:pb-4 xl:pt-3 xl:text-xs">
                        <div className="svg_icon w-[20px] text-[#FFCE31]">
                          <StarIcon />
                        </div>
                        <h4 className="mr-1 text-xs font-semibold text-[#222]">
                          107 Reviews
                        </h4>
                        <div className="svg_icon w-3">
                          <Verify />
                        </div>
                        <h4 className="text-xs text-[#5F5D5D]">
                          Identity verified
                        </h4>
                      </div>
                      <div className="flex flex-wrap items-center gap-3 xl:flex-nowrap">
                        <button
                          type="button"
                          className="purple_gradient_bg order-2 h-[40px] w-[164px] rounded-lg text-sm font-bold text-[#fff] sm:order-1"
                        >
                          Contact Host
                        </button>
                        <div className="order-1 flex gap-2 sm:order-2">
                          <div className="svg_icon w-[18px] text-[#FFCE31]">
                            <Shield />
                          </div>
                          <p className="w-full text-xs font-medium text-[#808080]">
                            To protect your payment, never tranfer money or
                            communicate outside of the website or app.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default AvailableDate;
