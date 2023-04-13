import Image from 'next/image';
import Link from 'next/link';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

/* eslint jsx-a11y/anchor-is-valid: "off" */
/* eslint react/jsx-one-expression-per-line: "off" */
const DeliverySlider = () => {
  const sliderItems = [
    {
      id: 1,
      imgUrl: 'image-gallery-1.jpg',
    },
    {
      id: 2,
      imgUrl: 'image-gallery-2.jpg',
    },
    {
      id: 3,
      imgUrl: 'image-gallery-3.jpg',
    },
    {
      id: 4,
      imgUrl: 'image-gallery-4.jpg',
    },
    {
      id: 5,
      imgUrl: 'image-gallery-5.jpg',
    },
    {
      id: 6,
      imgUrl: 'image-gallery-1.jpg',
    },
    {
      id: 7,
      imgUrl: 'image-gallery-2.jpg',
    },
    {
      id: 8,
      imgUrl: 'image-gallery-3.jpg',
    },
    {
      id: 9,
      imgUrl: 'image-gallery-4.jpg',
    },
    {
      id: 10,
      imgUrl: 'image-gallery-5.jpg',
    },
  ];

  return (
    <div className="relative pt-2 md:pt-14 lg:pt-20">
      <div className="mx-auto max-w-[1500px] px-2">
        <h2 className="pb-7 text-center text-2xl font-bold leading-tight text-black md:text-[28px] lg:text-[36px]">
          BY THE END, YOU’LL HAVE 3 RELEASE READY SONGS
        </h2>

        <div>
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            centeredSlides
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: '.image_gallery.swiper-button-prev',
              nextEl: '.image_gallery.swiper-button-next',
            }}
            pagination={{
              el: '.image_gallery.swiper-pagination',
              // dynamicBullets: true,
            }}
            breakpoints={{
              // when window width is >= 768px
              1200: {
                spaceBetween: 10,
                slidesPerView: 5,
              },
              768: {
                spaceBetween: 10,
                slidesPerView: 3,
              },
            }}
            className="flex"
          >
            {sliderItems.map((item) => (
              <SwiperSlide
                className="image_gallery_rotate_slide py-7 px-2 text-center"
                key={item.id}
              >
                <div className="mx-auto w-[260px] -rotate-[15deg] scale-[.8] transform rounded-2xl bg-white p-[10px] opacity-80 shadow transition-all lg:mx-0 lg:w-auto">
                  <div className="relative flex overflow-hidden rounded-2xl">
                    <Image
                      src={`/${item.imgUrl}`}
                      width={165 * 2}
                      height={180 * 2}
                      className="transition-all duration-1000 ease-in-out hover:scale-110"
                    />
                  </div>
                </div>
                <div className="mx-auto mt-4 hidden h-[72px] w-[230px] items-center rounded-full border-2 border-[#F2F2F2] bg-white lg:mt-6 lg:w-[200px]">
                  <div className="ml-2 flex w-[56px] shrink-0 items-center  overflow-hidden rounded-full">
                    <Image
                      src="/image-gallery-user.jpg"
                      width={56 * 2}
                      height={56 * 2}
                    />
                  </div>
                  <div className="px-2 text-left">
                    <p className="text-[13px] font-bold text-black">
                      Brian Philips
                    </p>
                    <p className="text-[9px] text-[#6D6D6D]">
                      The Shoe Surgeon Student
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="relative mx-auto flex items-center justify-center gap-3">
            <div className="image_gallery swiper-button-prev !relative !top-0 !bottom-0 !-left-0 !mt-0 !h-[30px] !w-[30px] shrink-0 rounded-full border border-[#ddd] bg-white !text-[#000] shadow-lg after:!text-[10px]" />
            <div className="image_gallery swiper-pagination !relative !top-0 !bottom-0 flex !w-[150px] shrink-0 justify-between !text-[#666]" />
            <div className="image_gallery swiper-button-next !relative !top-0 !bottom-0 !-right-0 !mt-0 !h-[30px] !w-[30px] shrink-0 rounded-full border border-[#ddd] bg-white !text-[#000] shadow-lg after:!text-[10px]" />
          </div>
        </div>
      </div>
      <div className="mt-10 text-center">
        <Link href="#">
          <a className="focus_green mx-auto flex h-[44px] w-[160px] items-center justify-center rounded-lg bg-black p-1 text-[13px] font-bold text-white transition-shadow hover:shadow-lg">
            View all Photos
          </a>
        </Link>
      </div>
    </div>
  );
};
export default DeliverySlider;
