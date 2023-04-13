/* eslint react/jsx-one-expression-per-line: "off" */
/* eslint react/require-default-props: "off" */
import { Navigation, FreeMode, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import BookCardOffer from './BookCardOffer';
import FavouriteBookCardOffer from './FavouriteBookCardOffer';

interface BookOffersProps {
  sliderId: string;
  title: JSX.Element;
  data?: { id: number; type: string; imgUrl: string }[];
}

const BookOffers = ({ sliderId, title, data }: BookOffersProps) => (
  <div className="relative pb-14">
    <div className="container">
      <div className="flex items-center justify-between gap-4 pb-7">
        <div className="w-full md:w-1/2">{title}</div>
        <div className="hidden w-1/2 justify-end gap-5 md:flex md:pt-0">
          <div className="relative flex w-[130px] items-center gap-2">
            <div className="book_offer_main_slider swiper-pagination !relative !top-0 !bottom-0 !w-[50px] text-[#666]" />

            <div className="book_offer_main_slider swiper-button-prev !relative !top-0 !bottom-0 !-left-0 !mt-0 !h-[32px] !w-[32px] rounded-full border border-[#ddd] bg-white !text-[#000] shadow-lg after:!text-[10px]" />
            <div className="book_offer_main_slider swiper-button-next !relative !top-0 !bottom-0 !-right-0 !mt-0 !h-[32px] !w-[32px] rounded-full border border-[#ddd] bg-white !text-[#000] shadow-lg after:!text-[10px]" />
          </div>
        </div>
      </div>

      <div className={`${sliderId} relative -ml-2 -mr-4 px-0 md:-mr-2`}>
        <Swiper
          slidesPerView="auto"
          spaceBetween={0}
          modules={[Navigation, Pagination, FreeMode]}
          navigation={{
            prevEl: '.book_offer_main_slider.swiper-button-prev',
            nextEl: '.book_offer_main_slider.swiper-button-next',
          }}
          pagination={{
            type: 'fraction',
            el: '.book_offer_main_slider.swiper-pagination',
          }}
          className="flex"
        >
          {data &&
            data.map((item) => (
              <SwiperSlide
                key={item.id}
                className="!w-[245px] sm:!w-[33.33%] lg:!w-[20%]"
              >
                {item.type === 'local' && <BookCardOffer {...item} />}
                {item.type === 'favourite' && (
                  <FavouriteBookCardOffer {...item} />
                )}
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  </div>
);
export default BookOffers;
