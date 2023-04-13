/* eslint-disable @typescript-eslint/naming-convention */
/* eslint @next/next/no-img-element: "off" */
/* eslint jsx-a11y/anchor-is-valid: "off" */
/* eslint react/jsx-one-expression-per-line: "off" */
/* eslint @typescript-eslint/no-unused-vars: "off" */
/* eslint react/require-default-props: "off" */

import Image from 'next/image';
import Link from 'next/link';
import { Navigation, Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import HeartIcon from '../../../public/icons/heart.svg';
import RocketIcon from '../../../public/telegram.svg';

interface SimilarPropertiesCardTypes {
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

const SimilarPropertiesCard = ({
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
}: SimilarPropertiesCardTypes) => {
  const bannerImages = [
    { id: 5, img: 'img4.png' },
    { id: 2, img: 'img2.png' },
    { id: 1, img: 'img1.png' },
    { id: 3, img: 'img3.png' },
    { id: 4, img: 'img5.png' },
  ];

  return (
    <div
      className="mx-3 my-5 block rounded-xl bg-white"
      style={{ boxShadow: '0 3px 10px -1px rgba(0,0,0,.2)' }}
    >
      <div className="group relative rounded">
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={0}
          navigation={{
            prevEl: `.similar_prop_inner-${id}.swiper-button-prev`,
            nextEl: `.similar_prop_inner-${id}.swiper-button-next`,
          }}
          pagination={{
            el: `.similar_prop_inner-${id}.swiper-pagination`,
          }}
        >
          {bannerImages.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="relative h-[270px] overflow-hidden rounded-lg">
                <img
                  src={item.img}
                  alt="slide"
                  className="absolute h-full w-auto object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          className={`similar_prop_inner-${id} similar_prop_inner_nav swiper-button-prev !top-[50%] !left-1 !mt-0 !h-[30px] !w-[30px] -translate-y-[50%] transform rounded-full bg-white bg-opacity-90 !text-[#000] opacity-0 transition duration-300 after:!text-[12px] group-hover:opacity-100`}
        />
        <div
          className={`similar_prop_inner-${id} similar_prop_inner_nav swiper-button-next !top-[50%] !right-1 !mt-0 !h-[30px] !w-[30px] -translate-y-[50%] transform rounded-full bg-white bg-opacity-90 !text-[#000] opacity-0 transition duration-300 after:!text-[12px] group-hover:opacity-100`}
        />
        <div
          className={`similar_prop_inner-${id} similar_prop_inner_pagination swiper-pagination !bottom-1 text-[#666]`}
        />

        <div className="absolute top-3 right-3 z-[2] flex items-center rounded-md bg-opacity-20 px-2 py-[3px] text-[8px] font-bold text-transparent">
          <button type="button" className="svg_icon w-6 hover:shadow-lg">
            <HeartIcon />
          </button>
        </div>
      </div>
      <div className="px-4 pt-3 pb-4">
        <div className="my-1 flex items-center gap-2">
          <div className="svg_icon w-3 text-[#808080]">
            <RocketIcon />
          </div>
          <p className="semi-bold text-sm">
            Florence, <span className="text-pink_primary">Italy</span>
          </p>
        </div>
        <Link href="/">
          <a className="block pt-1 pb-1 text-lg font-bold leading-normal">
            Beautiful Family Friendly 3BR Condo
          </a>
        </Link>
        <p className="text-sm text-[#4B4B4B]">Sleeps 8 . 3 bedrooms . 6 beds</p>

        <div className="item-center mt-4 flex justify-between border-t-2 border-dashed border-t-slate-200 pt-3 text-base">
          <div>
            from <span className="font-bold text-pink_primary">$600/night</span>
          </div>
          <div className="flex items-center">
            <Image src="/icons/star-pink.png" width={14} height={14} />
            <span className="purple_gradient_text ml-1">New</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SimilarPropertiesCard;
