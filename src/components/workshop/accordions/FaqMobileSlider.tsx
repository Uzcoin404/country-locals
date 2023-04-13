import { useState } from 'react';
import { FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import FaqDetailsPopover from '../popovers/FaqDetailsPopover';

import 'swiper/css';

const FaqMobileSlider = () => {
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <>
      <div className="-mr-5 -ml-[10px] md:ml-0 md:mr-0">
        <Swiper
          slidesPerView="auto"
          spaceBetween={0}
          freeMode
          modules={[FreeMode]}
          className="flex flex-wrap !pr-5 md:!pr-0"
        >
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <SwiperSlide key={item} className="!w-[96%]">
              <div
                className="m-[10px] rounded-xl bg-white p-3"
                style={{ boxShadow: '0 3px 10px -1px rgba(0,0,0,.2)' }}
              >
                <h4 className="font-bold leading-snug">
                  How many guests can stay at that place?
                </h4>
                <p className="pt-3 text-sm">
                  Tortor pellentesque nec sit nulla volutpat curabitur mattis
                  fusce condimentum. Nulla orci congue praesent nullam vitae
                  nibh. Sed sit sed eu lectus mi amet egestas. Sed sit sed eu
                  lectus mi amet egestas. Sit sed eu lectus mi amet egestas sit
                  sed eu lectus mi amet egestas...
                </p>
                <button
                  type="button"
                  onClick={() => setOpenPopup(true)}
                  className="text-sm text-pink_primary"
                >
                  Read More
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <FaqDetailsPopover
        status={openPopup}
        onClose={() => setOpenPopup(false)}
      />
    </>
  );
};
export default FaqMobileSlider;
