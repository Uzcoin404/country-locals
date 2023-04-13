import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import ShareIcon from '../../../public/icons/share-arrow.svg';
import HeartIcon from '../../../public/icons/purple-love.svg';
import FlagIcon from '../../../public/icons/purple-flag.svg';
import ReportPopup from '../common/popups/report-popups/ReportPopup';
import UnderLine from '../common/UnderLine';
import ContactMePopover from './popovers/ContactMePopover';

const ProfileDetails = () => {
  const [openReport, setOpenReport] = useState(false);
  const [showMoreText, setShowMoreText] = useState(false);
  const [showContactMe, setShowContactMe] = useState(false);

  return (
    <div className="">
      <div className="header flex flex-wrap items-start justify-between gap-y-3 pb-4 md:flex-nowrap md:gap-y-0">
        <div className="flex flex-wrap items-center gap-4 sm:flex-nowrap">
          <div className="relative mb-3 flex shrink-0 sm:mb-0">
            <div className="absolute top-0 left-12 z-[2] h-4 w-4 rounded-full border border-white bg-[#1DBF73]" />
            <div className="relative z-[1] flex items-center overflow-hidden rounded-full">
              <Image
                src="/mentor-card-1.jpg"
                width={68}
                height={68}
                alt="Mentor 1"
              />
            </div>
            <motion.div
              variants={{
                initial: { opacity: 0, x: -20 },
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
              className="-ml-4 flex items-center overflow-hidden rounded-full"
            >
              <Image
                src="/mentor-card-2.jpg"
                width={68}
                height={68}
                alt="Mentor 1"
              />
            </motion.div>
          </div>
          <div className="text">
            <div className="flex items-center pb-1">
              <p className="mr-1 text-[14px] font-semibold sm:mr-3">
                Enjoy Local Experience
              </p>
              <div className="flex items-center gap-1">
                <Image
                  src="/icons/verified.png"
                  alt="verified"
                  width={24}
                  height={24}
                  className="mr-3"
                />
                <p className="text-[14px] font-bold text-[#1875FF]">
                  Identify Verified
                </p>
              </div>
            </div>
            <p className="text-[18px] font-bold text-[#4A4A4A]">
              With
              <span className="ml-2 text-[#E71575] ">Martin & Alexa</span>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-x-2">
          <button
            type="button"
            className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#E71575] bg-opacity-10"
          >
            <div className="svg_icon w-[14px] text-[#E71575]">
              <ShareIcon />
            </div>
          </button>
          <button
            type="button"
            className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#E71575] bg-opacity-10"
          >
            <div className="svg_icon w-[14px] text-transparent">
              <HeartIcon />
            </div>
          </button>

          <button
            type="button"
            className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#E71575] bg-opacity-10"
            onClick={() => setOpenReport(true)}
          >
            <div className="svg_icon w-[14px] text-transparent">
              <FlagIcon />
            </div>
          </button>
          <ReportPopup
            status={openReport}
            onClose={() => {
              setOpenReport(false);
            }}
          />
        </div>
      </div>
      <div className="content">
        <p className="text-[14px] font-bold text-[#575757] ">
          The Traveling Painters
        </p>
        <div className="flex items-center gap-2 pb-8">
          <Image src="/icons/global.png" alt="global" width={20} height={20} />
          <p className="text-[12px] font-bold text-[#4A4A4A]">
            <span className="font-thin"> I speak </span>
            Español, English, Português
          </p>
        </div>

        <button
          className="purple_gradient_bg_light mb-8 rounded-lg py-4 px-8 text-base font-bold text-[#fff]"
          type="button"
          onClick={() => setShowContactMe(true)}
        >
          Contact Host
        </button>
        <ContactMePopover
          status={showContactMe}
          onClose={() => setShowContactMe(false)}
        />
        <p className=" p-0 text-[17px]  text-[#808080] ">
          Tortor pellentesque nec sit nulla volutpat curabitur mattis fusce
          condimentum. Nulla orci congue praesent nullam vitae nibh. Sed sit sed
          eu lectus mi amet egestas massa. Nunc enim eleifend tellus tincidunt
          pharetra sagittis volutpat. Ut donec vitae ut viverra lacus lectus
          orci. Amet, consequat volutpat magna risus risus.
          {showMoreText && (
            <>
              Tortor pellentesque nec sit nulla volutpat curabitur mattis fusce
              condimentum. Nulla orci congue praesent nullam vitae nibh. Sed sit
              sed eu lectus mi amet egestas massa. Nunc enim eleifend tellus
              tincidunt pharetra sagittis volutpat. Ut donec vitae ut viverra
              lacus lectus orci. Amet, consequat volutpat magna risus risus.
            </>
          )}
          <button
            type="button"
            className="ml-1 inline-block font-semibold text-[#E71575] hover:text-[#a96ad8]"
            onClick={() => setShowMoreText(!showMoreText)}
          >
            {showMoreText ? ' Show Less' : ' Show More...'}
          </button>
        </p>
        <UnderLine />
      </div>
    </div>
  );
};

export default ProfileDetails;
