import { Navigation, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { highlightData } from '../../utilities/dummy-api';
import UnderLine from '../common/UnderLine';

const HighlightsCarousel = () => (
  <div className="pt-11">
    <h3 className="font-[22px] pb-3 font-semibold text-[#222] md:pb-5">
      Highlights
    </h3>
    <div className="relative mb-5 -mr-5  md:mr-0">
      <Swiper
        slidesPerView="auto"
        freeMode
        modules={[Navigation, FreeMode]}
        spaceBetween={15}
        navigation={{
          prevEl: '.highlight_carousel.swiper-button-prev',
          nextEl: '.highlight_carousel.swiper-button-next',
        }}
        breakpoints={{
          768: {
            spaceBetween: 20,
          },
        }}
        className="!pr-5 md:!pr-0"
      >
        {highlightData?.map((item) => (
          <SwiperSlide
            className="flex !h-[139px] !w-[136px] flex-col items-center justify-center gap-3 rounded-xl border"
            key={Math.random() * 10}
          >
            <div className="svg_icon w-[36px] text-[#E71575]">
              <item.icon />
            </div>
            <p className="text-sm font-semibold">{item.title}</p>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="highlight_carousel swiper-button-prev !-left-5 !-mt-[14px]  !hidden !h-[34px] !w-[34px] rounded-full border border-[#ddd] bg-white !text-[#000] shadow-lg after:!text-xs md:!flex" />
      <div className="highlight_carousel swiper-button-next !-right-5 !-mt-[14px] !hidden !h-[34px] !w-[34px] rounded-full border border-[#ddd] bg-white !text-[#000] shadow-lg after:!text-xs md:!flex" />
    </div>

    <UnderLine />
  </div>
);
export default HighlightsCarousel;
