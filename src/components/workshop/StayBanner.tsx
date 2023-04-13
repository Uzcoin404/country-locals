/* eslint react/jsx-one-expression-per-line : "off" */
/* eslint @typescript-eslint/no-explicit-any : "off" */
import { useState } from 'react';
import { EffectFade, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import UnderLine from '../common/UnderLine';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import TickMarkIcon from '../../../public/icons/check-lg.svg';

const StayBanner = () => {
  const [swiper, setSwiper] = useState<any>(null);

  const onMouseOver = () => {
    swiper.slideNext(1000, true);

    swiper.autoplay.start({ delay: 4000 });
  };

  const onmouseleave = () => {
    swiper?.autoplay.stop();
  };

  return (
    <div className="w-full">
      <h3 className="mb-4 text-[22px] font-bold text-[#000]">
        You will Stay her
      </h3>

      <div
        className="book_card_offer relative"
        onFocus={onMouseOver}
        onMouseOver={onMouseOver}
        onMouseLeave={onmouseleave}
      >
        <Swiper
          onSwiper={setSwiper}
          modules={[Pagination, EffectFade, Autoplay]}
          slidesPerView={1}
          spaceBetween={0}
          effect="fade"
          fadeEffect={{
            crossFade: true,
          }}
          loop
          pagination={{
            el: '.stay_slider.swiper-pagination',
          }}
          className="rounded-xl"
          style={{ boxShadow: '0 3px 10px -1px rgba(0,0,0,.2)' }}
        >
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <SwiperSlide key={item}>
              <div className="flex h-auto w-full flex-wrap items-center bg-white md:flex-nowrap">
                <div className="banner flex overflow-hidden rounded-[10px] bg-black p-0 md:h-[210px] md:w-[244px] ">
                  <Image
                    src={`/stay-banner-${item}.jpg`}
                    width={225 * 2}
                    height={210 * 2}
                    alt={`stay banner ${item}`}
                    className="transition-all duration-[3s] ease-in-out"
                  />
                </div>
                <div className="relative max-w-[505px] p-4 pt-6 lg:pt-3">
                  <p className="text-[18px] font-bold text-[#4A4A4A]">
                    Where You Sleep - {item}
                  </p>
                  {[1, 2, 3].map((key) => (
                    <div className="flex items-start gap-2 pt-2" key={key}>
                      <div className="svg_icon w-6 text-[#e45f8c]">
                        <TickMarkIcon />
                      </div>
                      <p className="text-[12px] text-[#4A4A4A]">
                        {item} - Vehicula faucibus ultices gravida tincidunt
                        dolor. Ut ultricies nunc congue id heget malesuada
                      </p>
                    </div>
                  ))}
                  <div className="purple_gradient_bg absolute right-3 -top-4 flex h-[28px] w-[149px] items-center justify-center rounded text-[14px] font-bold text-[#fff] md:-top-[10px]">
                    From $45 / Person
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="stay_slider swiper-pagination !bottom-1 !w-[225px] text-[#666]" />
      </div>

      <UnderLine />
    </div>
  );
};

export default StayBanner;
