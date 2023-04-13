/* eslint @next/next/no-img-element: "off" */
/* eslint @typescript-eslint/indent: "off" */
import { useState } from 'react';
import Image from 'next/image';
import { FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import useViewport from '../../hooks/useViewport';

import 'swiper/css';

import LightBoxWithGallery from './popovers/LightBoxWithGallery';

const TouringBanner = () => {
  const { width } = useViewport();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [images, setImages] = useState<
    { id: number; thumbnail: string; fullSize: string; current: boolean }[]
  >([
    {
      id: 1,
      thumbnail: '/banner1.png',
      fullSize: '/plan-fullsize-1.jpg',
      current: true,
    },
    {
      id: 2,
      thumbnail: '/banner2.png',
      fullSize: '/plan-fullsize-2.jpg',
      current: false,
    },
    {
      id: 3,
      thumbnail: '/banner3.png',
      fullSize: '/plan-fullsize-3.jpg',
      current: false,
    },
    {
      id: 4,
      thumbnail: '/banner4.png',
      fullSize: '/plan-fullsize-4.jpg',
      current: false,
    },
    {
      id: 5,
      thumbnail: '/banner5.png',
      fullSize: '/plan-fullsize-5.jpg',
      current: false,
    },
    {
      id: 6,
      thumbnail: '/banner6.png',
      fullSize: '/plan-fullsize-6.jpg',
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
    <div className="purple_gradient_bg relative z-[12] mb-6 flex h-auto w-full items-center justify-center py-8 md:py-16">
      <div className="container">
        <div className="mx-auto max-w-[753px] text-center">
          <p className="mb-0 text-base uppercase text-[#fff] md:pb-3 md:text-[22px]">
            during your Tour
          </p>
          <p className="pb-3 text-[22px] font-bold text-[#fff] md:text-[38px]">
            Create something worth sharing
          </p>
          <p className="pb-6 text-sm font-semibold text-[#fff] md:text-base">
            Imgainative paintings, orignal songs, custom sneakers, delicious
            recipes, and more. By the end ofyour 30-day class, you’ll create
            something you are proud to share.
          </p>
          {width > 1063 ? (
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
              <div className="flex w-[232px] flex-col gap-4">
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    showLargeImage(1);
                  }}
                  className="overflow-hidden"
                >
                  <Image
                    src="/banner1.png"
                    width="232px"
                    height="140px"
                    className="transition-all duration-[2s] ease-in-out hover:scale-[1.2]"
                  />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    showLargeImage(2);
                  }}
                  className="overflow-hidden"
                >
                  <Image
                    src="/banner2.png"
                    width="232px"
                    height="223px"
                    className="transition-all duration-[2s] ease-in-out hover:scale-[1.2]"
                  />
                </button>
              </div>
              <div className="flex w-[232px] flex-col gap-4">
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    showLargeImage(3);
                  }}
                  className="overflow-hidden"
                >
                  <Image
                    src="/banner3.png"
                    width="232px"
                    height="223px"
                    className="transition-all duration-[2s] ease-in-out hover:scale-[1.2]"
                  />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    showLargeImage(4);
                  }}
                  className="overflow-hidden"
                >
                  <Image
                    src="/banner4.png"
                    width="232px"
                    height="140px"
                    className="transition-all duration-[2s] ease-in-out hover:scale-[1.2]"
                  />
                </button>
              </div>
              <div className="flex w-[232px] flex-col gap-4">
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    showLargeImage(5);
                  }}
                  className="overflow-hidden"
                >
                  <Image
                    src="/banner5.png"
                    width="232px"
                    height="140px"
                    className="transition-all duration-[2s] ease-in-out hover:scale-[1.2]"
                  />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    showLargeImage(6);
                  }}
                  className="overflow-hidden"
                >
                  <Image
                    src="/banner6.png"
                    width="232px"
                    height="223px"
                    className="transition-all duration-[2s] ease-in-out hover:scale-[1.2]"
                  />
                </button>
              </div>
            </div>
          ) : (
            <div className="-mr-5 -ml-[10px] md:ml-0 md:mr-0">
              <Swiper
                slidesPerView="auto"
                spaceBetween={10}
                freeMode
                modules={[FreeMode]}
                className="flex flex-wrap !pr-5 md:!pr-0"
              >
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <SwiperSlide
                    key={item}
                    className="!w-[68%] md:!w-1/3 lg:!w-1/5"
                  >
                    <div
                      role="button"
                      onClick={() => {
                        showLargeImage(item);
                      }}
                      onKeyDown={() => {
                        showLargeImage(item);
                      }}
                      tabIndex={0}
                      className="relative flex overflow-hidden rounded-lg pb-[60%]"
                    >
                      <img
                        src={`/banner${item}.png`}
                        alt={`/banner${item}.png`}
                        className="absolute w-full object-cover transition-all duration-[2s] ease-in-out hover:scale-[1.2]"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
        </div>
      </div>
      <LightBoxWithGallery
        status={isOpen}
        onClose={() => setIsOpen(false)}
        images={images}
      />
    </div>
  );
};

export default TouringBanner;
