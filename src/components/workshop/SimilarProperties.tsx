import { Navigation, FreeMode, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import SimilarPropertiesCard from './SimilarPropertiesCard';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SimilarProperties = () => (
  <div className="relative pb-14">
    <div className="container">
      <div className="flex items-center justify-between gap-4 pb-2">
        <div className="w-full md:w-1/2">
          <h2 className="mr-7 text-2xl font-bold text-[#202124] lg:text-4xl">
            Similar
            <span className="purple_gradient_text_deep"> Properties</span>
          </h2>
        </div>
        <div className="hidden w-1/2 justify-end gap-5 md:flex md:pt-0">
          <div className="relative flex w-[130px] items-center gap-2">
            <div className="similar_properties_slider swiper-pagination !relative !top-0 !bottom-0 !w-[50px] text-[#666]" />

            <div className="similar_properties_slider swiper-button-prev !relative !top-0 !bottom-0 !-left-0 !mt-0 !h-[32px] !w-[32px] rounded-full border border-[#ddd] bg-white !text-[#000] shadow-lg after:!text-[10px]" />
            <div className="similar_properties_slider swiper-button-next !relative !top-0 !bottom-0 !-right-0 !mt-0 !h-[32px] !w-[32px] rounded-full border border-[#ddd] bg-white !text-[#000] shadow-lg after:!text-[10px]" />
          </div>
        </div>
      </div>

      <div className="similar_properties_slider relative -ml-3 -mr-4 px-0 md:-mr-3">
        <Swiper
          slidesPerView="auto"
          spaceBetween={0}
          modules={[Navigation, Pagination, FreeMode]}
          freeMode
          navigation={{
            prevEl: '.similar_properties_slider.swiper-button-prev',
            nextEl: '.similar_properties_slider.swiper-button-next',
          }}
          pagination={{
            type: 'fraction',
            el: '.similar_properties_slider.swiper-pagination',
          }}
          className="flex"
        >
          {[1, 2, 3, 4, 5, 6, 7].map((item) => (
            <SwiperSlide
              key={item}
              className="!w-[300px] sm:!w-[33.33%] lg:!w-[25%]"
            >
              <SimilarPropertiesCard id={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  </div>
);
export default SimilarProperties;
