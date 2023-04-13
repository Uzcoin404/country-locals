import { FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import useViewport from '../../hooks/useViewport';

import Checkmark from '../../../public/icons/checked-purple.svg';

const ThingsToKnow = () => {
  const { width } = useViewport();

  return (
    <div className="pb-8 md:pb-14">
      <div className="container">
        <div className="lg:max-w-[650px] xl:max-w-[730px]">
          <h3 className="pb-4 text-[20px] font-bold text-[#AFAFAF] md:pb-6 md:text-3xl">
            Know 10 Things About Me
          </h3>
          <div className="rounded-[20px] p-0 md:bg-[#F5F5F5] md:px-14 md:py-14">
            {width > 1063 ? (
              <div className="flex w-full flex-wrap justify-between gap-y-5">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                  <div
                    key={item}
                    className="flex w-full items-center rounded-[5px] bg-[#fff] py-2 pl-2 pr-6 md:w-[48%]"
                    style={{ boxShadow: '0 3px 10px -1px rgba(0,0,0,.2)' }}
                  >
                    <div className="svg_icon w-6 text-[#E71575]">
                      <Checkmark />
                    </div>
                    <div className="ml-2 text-sm font-semibold">
                      Structured but flexible to fit
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
                          style={{
                            boxShadow: '0 3px 10px -1px rgba(0,0,0,.2)',
                          }}
                        >
                          <div className="svg_icon w-6 text-[#E71575]">
                            <Checkmark />
                          </div>
                          <div className="ml-2 text-sm font-semibold">
                            Structured but flexible to fit
                          </div>
                        </div>
                        <div
                          className="flex w-full items-center rounded-[5px] bg-[#fff] py-2 pl-2 pr-6"
                          style={{
                            boxShadow: '0 3px 10px -1px rgba(0,0,0,.2)',
                          }}
                        >
                          <div className="svg_icon w-6 text-[#E71575]">
                            <Checkmark />
                          </div>
                          <div className="ml-2 text-sm font-semibold">
                            Structured but flexible to fit
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThingsToKnow;
