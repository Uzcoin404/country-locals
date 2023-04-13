import { FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import useViewport from '../../hooks/useViewport';

import UnderLine from '../common/UnderLine';

import Checkmark from '../../../public/icons/checked-purple.svg';

const Experience = () => {
  const { width } = useViewport();

  return (
    <div>
      <h3 className="pb-6 text-lg font-bold text-black md:text-[20px]">
        6 Reason to Book
        <span className="purple_gradient_text_deep "> this Experience</span>
      </h3>
      {width > 1063 ? (
        <div className="flex w-full flex-wrap justify-between gap-y-5 md:pr-7">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="flex w-full items-center rounded-[5px] bg-[#fff] py-2 pl-2 pr-6 md:w-[45%]"
              style={{ boxShadow: '0 3px 10px -1px rgba(0,0,0,.2)' }}
            >
              <div className="svg_icon w-6 text-[#E71575]">
                <Checkmark />
              </div>
              <div className="ml-2 text-sm font-semibold">
                Explore Berlin in a conviertible car
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="-mr-5 -ml-[10px] md:ml-0 md:mr-0">
          <Swiper
            slidesPerView="auto"
            spaceBetween={0}
            freeMode
            modules={[FreeMode]}
            className="flex flex-wrap !pr-5 md:!pr-0"
          >
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <SwiperSlide
                key={item}
                className="!w-[95%] px-2 py-3 md:!w-[48%]"
              >
                <div className="flex w-full flex-col gap-4">
                  <div
                    className="flex w-full items-center rounded-[5px] bg-[#fff] py-2 pl-2 pr-6"
                    style={{ boxShadow: '0 3px 10px -1px rgba(0,0,0,.2)' }}
                  >
                    <div className="svg_icon w-6 text-[#E71575]">
                      <Checkmark />
                    </div>
                    <div className="ml-2 text-sm font-semibold">
                      Explore Berlin in a conviertible car
                    </div>
                  </div>
                  <div
                    className="flex w-full items-center rounded-[5px] bg-[#fff] py-2 pl-2 pr-6"
                    style={{ boxShadow: '0 3px 10px -1px rgba(0,0,0,.2)' }}
                  >
                    <div className="svg_icon w-6 text-[#E71575]">
                      <Checkmark />
                    </div>
                    <div className="ml-2 text-sm font-semibold">
                      Explore Berlin in a conviertible car
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
      <UnderLine />
    </div>
  );
};

export default Experience;
