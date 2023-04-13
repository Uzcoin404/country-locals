/* eslint react/jsx-one-expression-per-line: "off" */
import useViewport from '../../hooks/useViewport';

import HighlightsCarousel from './HighlightsCarousel';
import ProfileDetails from './ProfileDetails';
import Activities from './Activities';
import SafetyFeatures from './SafetyFeatures';
import Offers from './Offers';
import AboutProperty from './AboutProperty';
import Experience from './Experience';
import StayBanner from './StayBanner';
import HouseRules from './HouseRules';
import BookingCard from './BookingCard';
import BookingCardMobile from './popovers/BookingCardMobile';

import LocationIcon from '../../../public/icons/location.svg';
import StarIcon from '../../../public/icons/star.svg';
import ShareIcon from '../../../public/icons/upload.svg';
import HeartIcon from '../../../public/icons/heart-outline.svg';

const Profiles = () => {
  const { width } = useViewport();
  return (
    <div className="sticky_top_container relative mt-8 bg-[#fff] md:mt-0 md:pt-14 lg:pt-12">
      <div className="container">
        <div className="flex flex-wrap justify-between lg:flex-nowrap">
          <div className="w-full lg:max-w-[650px] xl:max-w-[730px]">
            <div>
              <p className="pb-4 text-3xl font-bold text-[#222] md:pb-6 md:text-[36px] md:leading-snug">
                Aberdeen Fishermen Cultural Tour with Delicious Dim Sums Lunch{' '}
                <span className="font-thin">(2D1N)</span>
              </p>
              <div className="flex flex-wrap items-start justify-between gap-4 sm:gap-0 lg:flex-nowrap">
                <div className="flex w-[280px] items-center sm:w-1/2">
                  <div className="svg_icon mr-2 w-[26px] shrink-0 text-[#E71575]">
                    <LocationIcon />
                  </div>

                  <div className="text-sm text-[#4A4A4A] lg:text-[20px]">
                    Mussoorie,Uttarkhand. India
                  </div>
                </div>
                <div className="flex w-1/2 items-center sm:justify-end">
                  <div className="svg_icon mr-2 w-[24px] shrink-0 text-[#FFCE31] ">
                    <StarIcon />
                  </div>
                  <div className="flex items-center gap-1 text-[18px]">
                    <span className="text-[18px] font-medium text-[#222]">
                      4.6
                    </span>{' '}
                    <span className="text-[#808080]">(25)reviews</span>
                  </div>
                  <div className="ml-6 flex gap-x-3 text-sm text-black sm:text-base">
                    <button type="button" className="flex items-center">
                      <div className="w-4 sm:w-[22px]">
                        <ShareIcon />
                      </div>
                      <span className="ml-1 underline">Share</span>
                    </button>
                    <button type="button" className="flex items-center">
                      <div className="svg_icon w-4 text-transparent sm:w-[22px]">
                        <HeartIcon />
                      </div>
                      <span className="ml-1 underline">Save</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <HighlightsCarousel />
            <ProfileDetails />
            <Activities />
            <SafetyFeatures />
            <Offers />
            <AboutProperty />
            <Experience />
            <StayBanner />
            <HouseRules />
          </div>
          {width > 1063 ? (
            <div className="z-[11] w-[320px] xl:w-[400px]">
              <BookingCard />
            </div>
          ) : (
            <BookingCardMobile />
          )}
        </div>
      </div>
    </div>
  );
};
export default Profiles;
