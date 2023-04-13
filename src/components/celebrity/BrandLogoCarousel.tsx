/* eslint @next/next/no-img-element: "off" */
import { Navigation, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const BrandLogoCarousel = () => (
  <div className="pb-2 md:pb-10">
    <div className="flex flex-wrap items-center pb-3 md:pb-6">
      <div className="w-2/3">
        <h3 className="orange_purple_gradient_text flex items-center text-base font-bold md:text-[22px]">
          Brands & Project I have worked with
        </h3>
      </div>
      <div className="hidden w-1/3 justify-end gap-5 md:flex md:pt-0">
        <div className="relative flex w-[140px] items-center gap-2">
          <div className="brand_logo_slider swiper-pagination !relative !top-0 !bottom-0 !w-[50px] text-[#666]" />

          <div className="brand_logo_slider swiper-button-prev !relative !top-0 !bottom-0 !-left-0 !mt-0 !h-[32px] !w-[32px] rounded-full border border-[#ddd] bg-white !text-[#000] shadow-lg after:!text-[10px]" />
          <div className="brand_logo_slider swiper-button-next !relative !top-0 !bottom-0 !-right-0 !mt-0 !h-[32px] !w-[32px] rounded-full border border-[#ddd] bg-white !text-[#000] shadow-lg after:!text-[10px]" />
        </div>
      </div>
    </div>
    <div className="relative mb-5 -mr-5 md:mr-0">
      <Swiper
        slidesPerView={2}
        freeMode
        modules={[Navigation, FreeMode]}
        spaceBetween={15}
        navigation={{
          prevEl: '.brand_logo_slider.swiper-button-prev',
          nextEl: '.brand_logo_slider.swiper-button-next',
        }}
        breakpoints={{
          768: {
            spaceBetween: 20,
            slidesPerView: 3,
          },
        }}
        className="!pr-5 md:!pr-0"
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
          <SwiperSlide key={item}>
            <div className="mb-3 flex h-[139px] items-center justify-center rounded-xl border border-[#EBEBEB] bg-white">
              <img
                src="/icons/nike-logo.png"
                alt="logo"
                className="max-w-[120px]"
              />
            </div>
            <div className="!hidden h-[139px] items-center justify-center rounded-xl border border-[#EBEBEB] bg-white lg:!flex">
              <img
                src="/icons/nike-logo.png"
                alt="logo"
                className="max-w-[120px]"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
);
export default BrandLogoCarousel;
