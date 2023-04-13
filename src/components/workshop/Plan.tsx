/* eslint @next/next/no-img-element: "off" */
/* eslint @typescript-eslint/indent: "off" */
import { useContext, useState } from 'react';
import Image from 'next/image';
import { MobileBookingContext } from '../../context/mobileBookingContext';
import useViewport from '../../hooks/useViewport';

import ContactMePopover from './popovers/ContactMePopover';
import UnderLine from '../common/UnderLine';
import LightBoxWithGallery from './popovers/LightBoxWithGallery';

import FillLocate from '../../../public/icons/fillLocation.svg';
import TickMarkIcon from '../../../public/icons/check-lg.svg';

const Plan = () => {
  const { width } = useViewport();
  const { setShowMobileBooking } = useContext(MobileBookingContext);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const scrollToBookNow = () => {
    const section = document.querySelector('.sticky_top_container');
    section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const [showContactMe, setShowContactMe] = useState(false);
  const [images, setImages] = useState<
    { id: number; thumbnail: string; fullSize: string; current: boolean }[]
  >([
    {
      id: 1,
      thumbnail: 'img1.png',
      fullSize: 'img1.png',
      current: true,
    },
    {
      id: 2,
      thumbnail: 'img2.png',
      fullSize: 'img2.png',
      current: false,
    },
    {
      id: 3,
      thumbnail: 'img3.png',
      fullSize: 'img3.png',
      current: false,
    },
    {
      id: 4,
      thumbnail: 'img4.png',
      fullSize: 'img4.png',
      current: false,
    },
    {
      id: 5,
      thumbnail: 'img5.png',
      fullSize: 'img5.png',
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
    <div>
      <h3 className="mb-4 text-[22px] font-bold text-[#222]">
        This is the plan
      </h3>

      <p className="mb-8 text-base text-[#808080] md:text-[18px]">
        Check out the plan below to see what you will get up with your local
        host. Feel free to personalize this offer with the host of your choice.
      </p>

      <div className="relative h-5 w-12">
        <div className="svg_icon absolute top-0 -left-3 z-[1] w-6 text-[#E71575] ">
          <FillLocate />
        </div>
      </div>

      <div className="relative z-0 mb-0 h-full pt-10 lg:pt-[70px]">
        <div className="absolute -left-[1px] -top-2 -z-10 h-full w-[1px] border-[1px] border-dashed border-r-[#E71575]" />
        {images.map((item) => (
          <div
            className="relative ml-6 flex flex-wrap justify-between gap-5 pt-3 pb-8 lg:flex-nowrap"
            key={item.id}
          >
            <div className="max-w-[373px]">
              <span className="absolute -left-8 -top-5 z-[1] text-[56px] text-[#E71575]">
                •
              </span>

              <p className="pb-2 text-[18px] font-bold text-[#000]">
                This is the plan
              </p>
              <p className="text-[14px] text-[#000]">
                Tortor pellentesque nec sit nulla volutpat curabitur mattis
                fusce condimentum. Nulla orci congue praesent nullam vitae nibh.
                Sed sit sed eu lectus mi amet egestas massa.
              </p>
            </div>

            <div
              role="button"
              tabIndex={0}
              onClick={() => {
                showLargeImage(item.id);
              }}
              onKeyDown={() => {
                showLargeImage(item.id);
              }}
              className="relative flex w-full overflow-hidden rounded-lg pb-[38%] md:pb-[18%]"
            >
              <img
                src={`/${item.thumbnail}`}
                alt={`/${item.thumbnail}`}
                className="absolute w-full object-cover transition-all duration-[2s] ease-in-out hover:scale-[1.2]"
              />
            </div>
          </div>
        ))}

        <LightBoxWithGallery
          status={isOpen}
          onClose={() => setIsOpen(false)}
          images={images}
        />

        <div className="relative ml-6">
          <span className=" absolute -left-8 -top-8 z-10 text-[56px] text-[#E71575]">
            •
          </span>
          <p className="text-[18px] font-bold text-[#222]">
            Excited?
            <button
              type="button"
              className="ml-1 text-[#E71575]"
              onClick={
                width < 1064
                  ? () => setShowMobileBooking(true)
                  : () => scrollToBookNow()
              }
            >
              Book Now
            </button>
          </p>
        </div>
      </div>

      <UnderLine />

      <div>
        <div className="w-full">
          <p className="mb-4 text-[22px] font-bold text-[#222] ">
            I can personlize this tour for you
          </p>
          <div className="flex w-full flex-wrap items-start gap-4 rounded lg:min-h-[230px]  lg:flex-nowrap">
            <div className="banner flex w-full overflow-hidden rounded-lg p-0 lg:w-[40%]">
              <Image
                src="/girl.png"
                width="362px"
                height="270px"
                alt="staybanner"
                className="transition-all duration-[2s] ease-in-out hover:scale-[1.2]"
              />
            </div>
            <div className="relative w-full lg:w-[60%]">
              {[1, 2, 3].map((item) => (
                <div className="flex items-center gap-3 pb-[10px] " key={item}>
                  <div className="svg_icon w-6 text-[#E71575] md:w-8">
                    <TickMarkIcon />
                  </div>
                  <p className="text-sm text-[#808080]">
                    Vehicula faucibus ultrices gravida tincidunt dolor. Ut
                    ultricies nunc congue id eget malesuada.
                  </p>
                </div>
              ))}
              <button
                type="button"
                onClick={() => setShowContactMe(true)}
                className="purple_gradient_bg ml-2 mt-3 flex h-10 w-[182px] items-center justify-center rounded-lg text-base font-bold text-[#fff] md:h-14 "
              >
                Contact me
              </button>
              <ContactMePopover
                status={showContactMe}
                onClose={() => setShowContactMe(false)}
              />
            </div>
          </div>
          <UnderLine />
        </div>
      </div>
    </div>
  );
};

export default Plan;
