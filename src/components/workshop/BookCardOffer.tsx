/* eslint-disable */
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { EffectFade, Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

import StarIcon from '../../../public/icons/star.svg';
import HeartIcon from '../../../public/icons/heart.svg';
import ClockIcon from '../../../public/icons/clock.svg';
import RocketIcon from '../../../public/telegram.svg';

interface BookCardOffersProps {
  id?: number;
  spotsLeft?: number;
  imgUrl?: string;
  authorImg?: string;
  ageRange?: string;
  price?: number;
  title?: string;
  authors?: string;
  rating?: number;
  offer?: number;
}

const BookCardOffer = ({
  id,
  spotsLeft,
  imgUrl,
  authorImg,
  ageRange,
  price,
  title,
  authors,
  rating,
  offer,
}: BookCardOffersProps) => {
  const bannerImages = [
    { id: 5, img: 'img4.png' },
    { id: 2, img: 'img2.png' },
    { id: 1, img: 'img1.png' },
    { id: 3, img: 'img3.png' },
    { id: 4, img: 'img5.png' },
    { id: 6, img: 'img4.png' },
    { id: 7, img: 'img2.png' },
    { id: 8, img: 'img1.png' },
    { id: 9, img: 'img3.png' },
  ];

  const [swiper, setSwiper] = useState<any>(null);

  const onMouseOver = () => {
    swiper.slideNext(1000, true);
    swiper.autoplay.start({ delay: 4000 });
  };

  const onmouseleave = () => {
    swiper?.autoplay.stop();
  };

  return (
    <Link href="/">
      <a
        className="book_card_offer block rounded-xl bg-white px-2"
        onFocus={onMouseOver}
        onMouseOver={onMouseOver}
        onMouseLeave={onmouseleave}
      >
        <div className="group relative rounded">
          <Swiper
            modules={[EffectFade, Autoplay, Navigation]}
            slidesPerView={1}
            spaceBetween={0}
            effect="fade"
            fadeEffect={{
              crossFade: true,
            }}
            navigation={{
              prevEl: `.book_card_inner-${id}.swiper-button-prev`,
              nextEl: `.book_card_inner-${id}.swiper-button-next`,
            }}
            loop
            onSwiper={setSwiper}
          >
            {bannerImages.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="relative h-[240px] overflow-hidden rounded-lg">
                  <img
                    src={item.img}
                    alt="slide"
                    className="absolute h-full w-auto object-cover transition-all duration-[3s] ease-in-out"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div
            className={`book_card_inner-${id} similar_prop_inner_nav swiper-button-prev !top-[50%] !left-1 !mt-0 !h-[30px] !w-[30px] -translate-y-[50%] transform rounded-full bg-white bg-opacity-90 !text-[#000] opacity-0 transition duration-300 after:!text-[12px] group-hover:opacity-100 md:!hidden`}
          />
          <div
            className={`book_card_inner-${id} similar_prop_inner_nav swiper-button-next !top-[50%] !right-1 !mt-0 !h-[30px] !w-[30px] -translate-y-[50%] transform rounded-full bg-white bg-opacity-90 !text-[#000] opacity-0 transition duration-300 after:!text-[12px] group-hover:opacity-100 md:!hidden`}
          />

          <div className="absolute top-3 right-3 z-[2] flex items-center rounded-md bg-opacity-20 px-2 py-[3px] text-[8px] font-bold text-transparent">
            <button type="button" className="svg_icon w-6 hover:shadow-lg">
              <HeartIcon />
            </button>
          </div>
        </div>
        <div className="px-1 pt-1 pb-2">
          <div className="my-1 flex items-center gap-2">
            <div className="svg_icon w-3 text-[#808080]">
              <RocketIcon />
            </div>
            <p className="semi-bold text-sm">Florence, Italy</p>
          </div>
          <div className="mt-[2px] mb-3 flex items-center gap-0">
            <div className="z-10 flex">
              <div className="z-[5] flex h-[54px] w-[54px] overflow-hidden rounded-full border-2 border-white">
                <Image src="/author-head.png" width={54} height={54} />
              </div>
              <motion.span
                variants={{
                  initial: { opacity: 0, x: -40 },
                  animate: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.5,
                      delay: 1,
                    },
                  },
                }}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="z-[4] -ml-5 flex h-[54px] w-[54px] overflow-hidden rounded-full border-2 border-white"
              >
                <Image src="/user-2.png" width={50} height={50} alt="user-2" />
              </motion.span>
            </div>
            <div className="ml-1 flex flex-col items-center justify-start gap-1 text-[#E71575]">
              <div className="-ml-2 flex items-center gap-1 ">
                <span className="svg_icon inline-block w-[12px]">
                  <StarIcon />
                </span>
                <span className="svg_icon inline-block w-[12px]">
                  <StarIcon />
                </span>
                <span className="svg_icon inline-block w-[12px]">
                  <StarIcon />
                </span>
                <span className="svg_icon inline-block w-[12px]">
                  <StarIcon />
                </span>
                <span className="svg_icon inline-block w-[12px]">
                  <StarIcon />
                </span>
                <span className="ml-1 mr-3 text-[12px] text-[#808080]">
                  (231)
                </span>
              </div>
              <p className="text-xs font-semibold text-[#222]">
                Enjoy Florence with
                <span className="  text-[#E71575]"> Olacorno</span>
              </p>
            </div>
          </div>
          <h4 className="pb-1 pt-1 text-base font-bold text-[#222]">
            City Escape: Tuscany
          </h4>
          <div className="flex items-center gap-2">
            <h4 className="text-xs font-bold text-[#222]">
              From $20/<span className="font-medium">person</span>
            </h4>
            <h5 className="flex items-center gap-1 text-xs font-semibold">
              <div className="svg_icon w-3 text-[#292D32]">
                <ClockIcon />
              </div>
              7 hours
            </h5>
          </div>
        </div>
      </a>
    </Link>
  );
};
export default BookCardOffer;
