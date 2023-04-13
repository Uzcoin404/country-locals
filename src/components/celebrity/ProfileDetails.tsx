/* eslint @next/next/no-img-element: "off" */
import Image from 'next/image';
import { useState } from 'react';
import ContactMePopover from './popovers/ContactMePopover';

import StarIcon from '../../../public/icons/star.svg';
import BannerVideoPopover from './popovers/BannerVideoPopover';

const ProfileDetails = () => {
  const [showMoreText, setShowMoreText] = useState(false);
  const [showContactMe, setShowContactMe] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <div className="pb-14">
        <div className="header flex flex-wrap items-center justify-between gap-y-5 pb-4 md:flex-nowrap md:gap-y-0">
          <div>
            <div className="flex flex-wrap items-center gap-4 sm:flex-nowrap">
              <div className="relative mb-3 flex shrink-0 sm:mb-0">
                <div className="relative z-[1] flex items-center overflow-hidden rounded-full">
                  <Image
                    src="/mentor-card-1.jpg"
                    width={68}
                    height={68}
                    alt="Mentor 1"
                  />
                </div>
              </div>
              <div className="text">
                <p className="text-[18px] font-bold text-[#4A4A4A]">
                  Martin Alexa
                </p>
                <p className="py-1 text-[14px] font-semibold">
                  The Traveling Painters
                </p>
                <div className="text-sm text-[#1c1c1c]">
                  <strong>I Speak:</strong>
                  <span className="ml-1">English, Indonesia, Germany</span>
                </div>
              </div>
            </div>
            <div className="mt-3 flex flex-wrap items-center">
              <div className="flex items-center gap-[2px] text-[#EF5DA8]">
                <div className="svg_icon w-[18px] shrink-0">
                  <StarIcon />
                </div>
                <div className="svg_icon w-[18px] shrink-0">
                  <StarIcon />
                </div>
                <div className="svg_icon w-[18px] shrink-0">
                  <StarIcon />
                </div>
                <div className="svg_icon w-[18px] shrink-0">
                  <StarIcon />
                </div>
                <div className="svg_icon w-[18px] shrink-0">
                  <StarIcon />
                </div>
                <span className="ml-2 mt-[2px] text-xs font-semibold lg:text-[17px]">
                  5.0
                </span>
              </div>
              <span className="mt-[2px] ml-2 text-xs font-semibold text-[#9F9F9F] lg:text-[16px]">
                ( 920 Review for this Teacher )
              </span>
            </div>
          </div>
          <div>
            <img
              src="/super-celebrity.png"
              alt="Super Celebrity"
              className="max-w-[250px]"
            />
          </div>
        </div>
        <div className="content mt-5">
          <div className="flex flex-wrap gap-3 sm:flex-nowrap">
            <button
              type="button"
              className="purple_gradient_bg_light flex h-[56px] w-full items-center rounded-[10px] pl-2 pr-5 sm:w-auto"
              onClick={() => setShowVideo(true)}
            >
              <div className="mr-1 flex h-9 w-9 shrink-0 rounded-full">
                <Image src="/icons/play-circle.png" width={35} height={35} />
              </div>
              <span className="block w-full text-base font-semibold text-white">
                Watch My Video Intro
              </span>
            </button>
            <button
              type="button"
              className="flex h-[56px] w-full items-center rounded-[10px] bg-[#D9D9D9] pl-2 pr-5 hover:bg-[#f0f0f0] sm:w-auto"
              onClick={() => setShowContactMe(true)}
            >
              <div className="mr-1 flex h-9 w-9 shrink-0 rounded-full">
                <Image src="/icons/messages-3.png" width={33} height={33} />
              </div>
              <span className="block w-full text-base font-semibold text-[#747474]">
                Ask a Question
              </span>
            </button>
          </div>
          <ContactMePopover
            status={showContactMe}
            onClose={() => setShowContactMe(false)}
          />
          <p className="pt-8 text-[#808080]">
            Tortor pellentesque nec sit nulla volutpat curabitur mattis fusce
            condimentum. Nulla orci congue praesent nullam vitae nibh. Sed sit
            sed eu lectus mi amet egestas massa. Nunc enim eleifend tellus
            tincidunt pharetra sagittis volutpat. Ut donec vitae ut viverra
            lacus lectus orci. Amet, consequat volutpat magna risus risus.
            {showMoreText && (
              <span className="ml-1">
                Tortor pellentesque nec sit nulla volutpat curabitur mattis
                fusce condimentum. Nulla orci congue praesent nullam vitae nibh.
                Sed sit sed eu lectus mi amet egestas massa. Nunc enim eleifend
                tellus tincidunt pharetra sagittis volutpat. Ut donec vitae ut
                viverra lacus lectus orci. Amet, consequat volutpat magna risus
                risus.
              </span>
            )}
            <button
              type="button"
              className="ml-1 inline-block font-semibold text-[#444] hover:text-[#a96ad8]"
              onClick={() => setShowMoreText(!showMoreText)}
            >
              {showMoreText ? ' Show Less' : ' Read More'}
            </button>
          </p>
        </div>
      </div>
      <BannerVideoPopover
        status={showVideo}
        onClose={() => setShowVideo(false)}
      />
    </>
  );
};

export default ProfileDetails;
