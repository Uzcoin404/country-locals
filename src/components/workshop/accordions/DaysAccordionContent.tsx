/* eslint @next/next/no-img-element: "off" */
/* eslint @typescript-eslint/indent: "off" */

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import LightBoxWithGallery from '../popovers/LightBoxWithGallery';

import 'swiper/css';

const DaysAccordionContent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [images, setImages] = useState<
    { id: number; thumbnail: string; fullSize: string; current: boolean }[]
  >([
    {
      id: 1,
      thumbnail: '/stay-banner-1.jpg',
      fullSize: '/stay-banner-1.jpg',
      current: true,
    },
    {
      id: 2,
      thumbnail: '/stay-banner-2.jpg',
      fullSize: '/stay-banner-2.jpg',
      current: false,
    },
    {
      id: 3,
      thumbnail: '/stay-banner-3.jpg',
      fullSize: '/stay-banner-3.jpg',
      current: false,
    },
    {
      id: 4,
      thumbnail: '/stay-banner-4.jpg',
      fullSize: '/stay-banner-4.jpg',
      current: false,
    },
    {
      id: 5,
      thumbnail: '/stay-banner-5.jpg',
      fullSize: '/stay-banner-5.jpg',
      current: false,
    },
    {
      id: 6,
      thumbnail: '/stay-banner-6.jpg',
      fullSize: '/stay-banner-6.jpg',
      current: false,
    },
  ]);

  const showLargeImage = (id: number) => {
    setImages(
      images.map((image) => {
        if (image.id === id) {
          return { ...image, current: true };
        }
        return { ...image, current: false };
      }),
    );
    setIsOpen(true);
  };

  return (
    <>
      <motion.div
        variants={{ collapsed: { opacity: 0.8 }, open: { opacity: 1 } }}
        transition={{ duration: 0.3 }}
        initial="collapsed"
        animate="open"
        exit="collapsed"
      >
        {['morning', 'noon', 'night'].map((item) => (
          <div key={item} className="ml-5 max-w-[590px] pt-3 md:ml-0">
            <div className="flex items-center pb-2 text-base font-semibold text-[#222]">
              <Image src={`/icons/${item}.png`} width={24} height={24} />
              <span className="ml-1 pl-2 capitalize">{item}</span>
            </div>
            <p className="text-[14px] text-[#808080]">
              upon your arrival at the Lisu Lodge (9 am.) you will be welcomed
              with a refreshing traditional drink. Then, following a cycling
              tour around the village (13 kilometers or 8 miles).
            </p>
            <div className="-mr-5 -ml-[10px] mt-3 md:ml-0 md:mr-0">
              <Swiper
                slidesPerView="auto"
                spaceBetween={10}
                freeMode
                modules={[FreeMode]}
                className="flex flex-wrap rounded-lg !pr-5 md:!pr-0"
              >
                {[1, 2, 3, 4, 5, 6].map((img) => (
                  <SwiperSlide
                    key={img}
                    className="!w-[68%] md:!w-1/2 lg:!w-[35%]"
                  >
                    <div
                      role="button"
                      onClick={() => {
                        showLargeImage(img);
                      }}
                      onKeyDown={() => {
                        showLargeImage(img);
                      }}
                      tabIndex={0}
                      className="relative flex overflow-hidden rounded-lg pb-[60%]"
                    >
                      <img
                        src={`/stay-banner-${img}.jpg`}
                        alt={`/stay-banner-${img}.jpg`}
                        className="absolute w-full object-cover"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        ))}
      </motion.div>
      <LightBoxWithGallery
        status={isOpen}
        onClose={() => setIsOpen(false)}
        images={images}
      />
    </>
  );
};
export default DaysAccordionContent;
