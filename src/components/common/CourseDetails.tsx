import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { animationWrapper, fadeIn, fadeInUp } from '../../utilities/animations';
import useViewport from '../../hooks/useViewport';
import MultiDayInfoPopup from './popups/MultiDayInfoPopup';

import Checkmark from '../../../public/icons/circle-check-yellow.svg';
import PersonWorkspaceIcon from '../../../public/icons/person-workspace.svg';
import QuestionMarkIcon from '../../../public/icons/question-mark.svg';
import VerifiedIcon from '../../../public/icons/shield.svg';
import MailIcon from '../../../public/icons/mail-filled.svg';
import PlayIcon from '../../../public/icons/play-button-filled.svg';
import StarIcon from '../../../public/icons/star.svg';
import MedalIcon from '../../../public/icons/medal.svg';
import AssignmentIcon from '../../../public/icons/outline-assignment.svg';
import MonitorDashboardIcon from '../../../public/icons/monitor-dashboard.svg';
import LanguageIcon from '../../../public/icons/language-line.svg';
import LocationIcon from '../../../public/icons/location.svg';
import TimeIcon from '../../../public/icons/access-time-filled.svg';
import UserGroupIcon from '../../../public/icons/user-group.svg';
import LeafIcon from '../../../public/icons/leaf.svg';
import TickMarkIcon from '../../../public/icons/check-lg.svg';

/* eslint jsx-a11y/anchor-is-valid: "off" */
/* eslint react/jsx-one-expression-per-line: "off" */
const CourseDetails = () => {
  const { width } = useViewport();
  const [openMultiDayDetails, setOpenMultiDayDetails] = useState(false);

  const handleOpenMultiDayDetails = () => {
    setOpenMultiDayDetails(!openMultiDayDetails);
  };

  return (
    <div className="relative pt-10 md:pt-14 lg:pt-20">
      <motion.div
        variants={animationWrapper}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="container"
      >
        <div className="flex flex-wrap justify-between gap-14 lg:flex-nowrap">
          <div className="w-full">
            <div className="flex w-full flex-wrap items-start sm:flex-nowrap">
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
                  className="-ml-6 flex items-center overflow-hidden rounded-full"
                >
                  <Image
                    src="/mentor-card-2.jpg"
                    width={68}
                    height={68}
                    alt="Mentor 1"
                  />
                </motion.div>
              </div>
              <motion.div variants={fadeIn} className="w-full sm:ml-4">
                <div className="flex flex-wrap items-center gap-y-2 sm:flex-nowrap">
                  <div className="mr-3 flex w-full items-center sm:w-auto">
                    <div className="svg_icon mr-2 w-[18px] text-[#393939]">
                      <PersonWorkspaceIcon />
                    </div>
                    <div className="text-sm font-bold text-[#393939]">
                      Workshop
                    </div>
                  </div>
                  <div className="mr-3 flex w-full items-center sm:w-auto">
                    <div className="mr-2 text-sm font-bold text-[#8796A0]">
                      Multi-Day Course
                    </div>
                    <button
                      type="button"
                      className="svg_icon w-[18px] text-[#8796A0]"
                      onClick={handleOpenMultiDayDetails}
                    >
                      <QuestionMarkIcon />
                    </button>
                  </div>
                  <MultiDayInfoPopup
                    status={openMultiDayDetails}
                    onClose={handleOpenMultiDayDetails}
                  />

                  <div className="flex w-full items-center sm:w-auto">
                    <div className="svg_icon mr-1 w-4 text-[#1875FF]">
                      <VerifiedIcon />
                    </div>
                    <div className="text-sm font-bold text-[#1875FF]">
                      Identity Verified
                    </div>
                  </div>
                </div>
                <div className="pt-2 pb-1 text-base font-bold text-[#8796A0] md:text-[18px]">
                  <span className="text-black">With</span>{' '}
                  <span className="text-[#E71575]">Martin & Alexa</span>{' '}
                  <span className="font-normal text-[#C7C7C7]">|</span> B.A
                  Child & Adolescent Development
                </div>
                <div className="text-xs font-bold text-[#575757] md:text-sm">
                  The Traveling Painters
                </div>
                <div className="mt-2 flex flex-wrap items-center justify-between md:mt-0 lg:mt-2 xl:mt-0">
                  <div className="text-sm text-[#1c1c1c]">
                    <strong>I Speak:</strong> English, Indonesia, Germany
                  </div>
                  <div className="mt-3 flex gap-1 md:mt-0 lg:mt-3 xl:mt-0">
                    <button
                      type="button"
                      className="flex h-[32px] w-full max-w-[132px] items-center justify-center rounded-full border-2 border-[#8796A0] bg-[#8796A0] text-[11px] text-white transition hover:bg-transparent hover:text-[#8796A0]"
                    >
                      <div className="svg_icon mr-[3px] w-[17px]">
                        <MailIcon />
                      </div>
                      Ask a question
                    </button>
                    <button
                      type="button"
                      className="flex h-[32px] w-[185px] items-center justify-center rounded-full border-2 border-[#8796A0] bg-transparent pr-1 text-[11px] text-[#8796A0] transition hover:bg-[#8796A0] hover:text-white"
                    >
                      <div className="svg_icon mr-[3px] w-[17px]">
                        <PlayIcon />
                      </div>
                      Watch My video intro
                    </button>
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap items-center">
                  <div className="flex items-center gap-[2px] text-[#50EA1A]">
                    <span className="svg_icon inline-block w-[13px] lg:w-[18px]">
                      <StarIcon />
                    </span>
                    <span className="svg_icon inline-block w-[13px] lg:w-[18px]">
                      <StarIcon />
                    </span>
                    <span className="svg_icon inline-block w-[13px] lg:w-[18px]">
                      <StarIcon />
                    </span>
                    <span className="svg_icon inline-block w-[13px] lg:w-[18px]">
                      <StarIcon />
                    </span>
                    <span className="svg_icon inline-block w-[13px] lg:w-[18px]">
                      <StarIcon />
                    </span>
                    <span className="mt-[3px] ml-1 text-xs font-semibold lg:text-[17px]">
                      5.0
                    </span>
                  </div>
                  <span className="mt-[2px] ml-2 text-xs font-semibold text-[#969696] lg:text-[16px]">
                    (920 Review for this Teacher)
                  </span>
                </div>
                <div className="mt-2 flex flex-wrap items-center sm:mt-4">
                  <div className="flex items-center gap-[2px] text-[#50EA1A]">
                    <span className="svg_icon inline-block w-[13px] lg:w-[18px]">
                      <StarIcon />
                    </span>
                    <span className="svg_icon inline-block w-[13px] lg:w-[18px]">
                      <StarIcon />
                    </span>
                    <span className="svg_icon inline-block w-[13px] lg:w-[18px]">
                      <StarIcon />
                    </span>
                    <span className="svg_icon inline-block w-[13px] lg:w-[18px]">
                      <StarIcon />
                    </span>
                    <span className="svg_icon inline-block w-[13px] lg:w-[18px]">
                      <StarIcon />
                    </span>
                    <span className="mt-[3px] ml-1 text-xs font-semibold lg:text-[17px]">
                      5.0
                    </span>
                  </div>
                  <span className="mt-[2px] ml-2 text-xs font-semibold text-[#969696] lg:text-[16px]">
                    (42 Review for this Class)
                  </span>
                </div>
              </motion.div>
            </div>

            <motion.div
              variants={fadeIn}
              className="mt-3 text-sm text-black lg:mt-6 lg:text-base"
            >
              Tortor pellentesque nec sit nulla volutpat curabitur mattis fusce
              condimentum. Nulla orci congue praesent nullam vitae nibh. Sed sit
              sed eu lectus mi amet egestas massa. Nunc enim eleifend tellus
              tincidunt pharetra sagittis volutpat. Ut donec vitae ut viverra
              lacus lectus orci. Amet, consequat volutpat magna risus risus.{' '}
              <a href="#" className="font-bold">
                Read More
              </a>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-10 flex flex-wrap justify-between gap-y-3 border-t-2 border-b-2 border-[#EBEBEB] py-5 md:flex-nowrap"
            >
              <div className="flex w-full items-center md:max-w-[190px]">
                <div className="svg_icon mr-2 w-[26px] shrink-0">
                  <MedalIcon />
                </div>
                <div className="text-[11px] font-bold">
                  Certification upon completion of the courses
                </div>
              </div>
              <div className="flex w-full items-center md:max-w-[180px]">
                <div className="svg_icon mr-2 w-[26px] shrink-0">
                  <AssignmentIcon />
                </div>
                <div className="text-[11px] font-bold">Assignments</div>
              </div>
              <div className="flex w-full items-center md:max-w-[180px]">
                <div className="svg_icon mr-3 w-[22px] shrink-0">
                  <MonitorDashboardIcon />
                </div>
                <div>
                  <div className="text-[11px] font-bold">6 Month</div>
                  <div className="text-[11px]">8-10hrs/Week</div>
                </div>
              </div>
              <div className="flex w-full items-center md:max-w-[180px]">
                <div className="svg_icon mr-2 w-[26px] shrink-0">
                  <LanguageIcon />
                </div>
                <div className="text-[11px] font-bold">English</div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-between gap-y-6 border-b-2 border-[#EBEBEB] py-5"
            >
              <div className="flex w-1/2 items-center">
                <div className="svg_icon mr-2 w-[26px] shrink-0 text-[#E71575]">
                  <LocationIcon />
                </div>
                <div className="text-sm font-semibold text-[#4B4B4B]">
                  6 Month
                </div>
              </div>
              <div className="flex w-1/2 items-center">
                <div className="svg_icon mr-2 w-[26px] shrink-0 text-[#E71575]">
                  <PersonWorkspaceIcon />
                </div>
                <div className="text-sm font-semibold text-[#4B4B4B]">
                  Workshop
                </div>
              </div>
              <div className="flex w-1/2 items-center">
                <div className="svg_icon mr-2 w-[26px] shrink-0 text-[#E71575]">
                  <TimeIcon />
                </div>
                <div className="text-sm font-semibold text-[#4B4B4B]">
                  2 Hours
                </div>
              </div>
              <div className="flex w-1/2 items-center">
                <div className="svg_icon mr-2 w-[26px] shrink-0 text-[#E71575]">
                  <UserGroupIcon />
                </div>
                <div className="text-sm font-semibold text-[#4B4B4B]">
                  Private Group
                </div>
              </div>
              <div className="flex w-1/2 items-center">
                <div className="svg_icon mr-2 w-[26px] shrink-0 text-[#E71575]">
                  <LeafIcon />
                </div>
                <div className="text-sm font-semibold text-[#4B4B4B]">
                  Carbon Neutral
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-2 border-b-2 border-[#EBEBEB] pt-5 pb-7"
            >
              <h3 className="mb-7 text-center text-lg font-semibold lg:text-[22px]">
                About the Course
              </h3>
              <div className="flex flex-wrap justify-between gap-y-6 text-center font-semibold text-black md:flex-nowrap">
                <div className="w-full md:w-1/3">
                  <div className="text-3xl leading-none sm:text-[40px] md:text-[56px]">
                    6
                  </div>
                  <p className="mt-1">Unique Choreography</p>
                </div>
                <div className="w-full md:w-1/3">
                  <div className="text-3xl leading-none sm:text-[40px] md:text-[56px]">
                    8
                  </div>
                  <p className="mt-1">Dance Styles</p>
                </div>
                <div className="w-full md:w-1/3">
                  <div className="text-3xl leading-none sm:text-[40px] md:text-[56px]">
                    40+
                  </div>
                  <p className="mt-1">Dance Steps</p>
                </div>
              </div>
              <div className="mt-6 text-sm text-black lg:text-base">
                Tortor pellentesque nec sit nulla volutpat curabitur mattis
                fusce condimentum. Nulla orci congue praesent nullam vitae nibh.
                Sed sit sed eu lectus mi amet egestas massa. Nunc enim eleifend
                tellus tincidunt pharetra sagittis volutpat. Ut donec vitae ut
                viverra lacus lectus orci. Amet, consequat volutpat magna risus
                risus.{' '}
                <a href="#" className="font-bold">
                  Read More
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-1 border-b-2 border-[#EBEBEB] pt-5 pb-7"
            >
              <h3 className="pb-6 text-lg font-semibold text-black md:text-[20px]">
                6 Reason to Book{' '}
                <span className="text-[#E71575]">this Experience</span>
              </h3>
              <div className="flex w-full flex-wrap justify-between gap-y-5 md:max-w-[590px]">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div
                    key={item}
                    className="flex items-center rounded-[5px] bg-white py-[6px] pl-2  pr-6 shadow-spread"
                  >
                    <div className="svg_icon w-6 text-[#F9E171]">
                      <Checkmark />
                    </div>
                    <div className="ml-2 text-sm font-semibold">
                      Structured but flexible to fit
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {width > 1024 ? (
            <div className="shrink-0">
              <div>
                <Image src="/dummy-gig-frame.jpg" width={375} height={615} />
              </div>
              <div className="mt-40 max-w-[360px]">
                <Image
                  src="/creativity-thumb.png"
                  width={360 * 2}
                  height={250 * 2}
                />
              </div>
            </div>
          ) : (
            ''
          )}
        </div>

        <motion.div variants={fadeInUp} className="mt-1 pt-5">
          <h3 className="pb-4 text-lg font-semibold text-black md:text-[20px]">
            What we are going <span className="text-[#E71575]">to do</span>
          </h3>
          <div className="text-sm text-black lg:text-base">
            <p className="pb-5">
              Tortor pellentesque nec sit nulla volutpat curabitur mattis fusce
              condimentum. Nulla orci congue praesent nullam vitae nibh. Sed sit
              sed eu lectus mi amet egestas massa. Nunc enim eleifend tellus
              tincidunt pharetra sagittis volutpat. Ut donec vitae ut viverra
              lacus lectus orci. Amet, consequat volutpat magna risus risus. Sed
              sed aliquet a pretium molestie lorem scelerisque convallis.
            </p>
            <p>
              Tortor pellentesque nec sit nulla volutpat curabitur mattis fusce
              condimentum. Nulla orci congue praesent nullam vitae nibh. Sed sit
              sed eu lectus mi amet egestas massa. Nunc enim eleifend tellus
              tincidunt pharetra sagittis volutpat. Ut donec vitae ut viverra
              lacus lectus orci. Amet, consequat volutpat magna risus risus.{' '}
              <a href="#" className="font-bold">
                Read More
              </a>
            </p>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} className="mt-10">
          <h3 className="pb-4 text-xl font-bold text-[#AFAFAF] md:text-2xl lg:text-[32px]">
            PENTATONIX’S CLASS COVERS:
          </h3>
          <div className="rounded-lg bg-[#F6F6F6] p-4 md:p-7">
            <div className="flex w-full flex-wrap justify-between gap-y-3 md:gap-y-5">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
                (item) => (
                  <div
                    key={item}
                    className="flex w-full items-center sm:w-1/2 lg:w-1/3"
                  >
                    <div className="svg_icon w-6 text-black">
                      <TickMarkIcon />
                    </div>
                    <div className="ml-2 text-xs text-[#4B4B4B] md:text-sm">
                      End-to-End A Cappella Arrangement
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </motion.div>

        {width < 1025 ? (
          <div className="mt-10 shrink-0">
            <div>
              <Image src="/dummy-gig-frame.jpg" width={375} height={615} />
            </div>
            <div className="mt-10 max-w-[360px]">
              <Image
                src="/creativity-thumb.png"
                width={360 * 2}
                height={250 * 2}
              />
            </div>
          </div>
        ) : (
          ''
        )}
      </motion.div>
    </div>
  );
};
export default CourseDetails;
