/* eslint @next/next/no-img-element: "off" */
/* eslint react/jsx-one-expression-per-line: "off" */
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const ReasonsSlider = () => (
  <div className="md:pb-14">
    <div className="relative">
      <Swiper
        slidesPerView={1}
        freeMode
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        // effect="fade"
        // fadeEffect={{
        //   crossFade: true,
        // }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          el: '.reason_slider.swiper-pagination',
          clickable: true,
        }}
        className="purple_gradient_bg rounded-xl !pt-10 !pb-16 lg:rounded-3xl"
      >
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <SwiperSlide key={item}>
            <div className="mx-auto max-w-[650px] px-4 text-center text-white">
              <p className="text-uppercase text-base leading-normal md:text-lg">
                7 REASONS TO BOOK THIS EXPERIENCE
              </p>
              <h4 className="py-2 text-2xl font-bold md:text-3xl">
                A better kind of online class - {item}
              </h4>
              <div className="text-sm leading-normal">
                Monthly classes go beyond a playlist of videos. The classroom
                has been fully digitzied, allowing you to get a hands-on
                learning experience and community from anywhere.
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="reason_slider swiper-pagination !bottom-4 !left-[50%] !w-[225px] !translate-x-[-50%] transform text-[#666]" />
      </Swiper>
    </div>
  </div>
);
export default ReasonsSlider;
