/* eslint jsx-a11y/anchor-is-valid: "off" */
/* eslint react/jsx-one-expression-per-line: "off" */
import { useState } from 'react';
import { FreeMode, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { Disclosure } from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';

import UnderLine from '../common/UnderLine';
import NotIncludedPopover from './popovers/NotIncludedPopover';
import CancellationPopover from './popovers/CancellationPopover';
import MeetingLocationPopover from './popovers/MeetingLocationPopover';
import WhatsIncludedPopover from './popovers/WhatsIncludedPopover';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import CancelMark from '../../../public/icons/purple-cancel.svg';
import Checkmark from '../../../public/icons/checked-purple.svg';
import ArrowIcon from '../../../public/icons/chevron-right.svg';
import ArrowDownIcon from '../../../public/icons/arrow-square-up.svg';

const GoodToKnow = () => {
  const [notIncludedOpen, setNotIncludedOpen] = useState<boolean>(false);
  const [cancellationOpen, setCancellationOpen] = useState<boolean>(false);
  const [meetingOpen, setMeetingOpen] = useState<boolean>(false);
  const [openGoodToKnowModal, setOpenGoodToKnowModal] =
    useState<boolean>(false);
  const sliderItems = [
    {
      id: 1,
      title: 'Transport',
      imgUrl: 'purple-bus.png',
    },
    {
      id: 2,
      title: 'Private Group',
      imgUrl: 'purple-bus.png',
    },
    {
      id: 3,
      title: 'Transport',
      imgUrl: 'purple-bus.png',
    },
    {
      id: 4,
      title: 'Private Group',
      imgUrl: 'purple-bus.png',
    },
    {
      id: 5,
      title: 'Transport',
      imgUrl: 'purple-bus.png',
    },
    {
      id: 6,
      title: 'Private Group',
      imgUrl: 'purple-bus.png',
    },
    {
      id: 7,
      title: 'Transport',
      imgUrl: 'purple-bus.png',
    },
    {
      id: 8,
      title: 'Private Group',
      imgUrl: 'purple-bus.png',
    },
    {
      id: 9,
      title: 'Transport',
      imgUrl: 'purple-bus.png',
    },
    {
      id: 10,
      title: 'Private Group',
      imgUrl: 'purple-bus.png',
    },
    {
      id: 11,
      title: 'Transport',
      imgUrl: 'purple-bus.png',
    },
    {
      id: 12,
      title: 'Private Group',
      imgUrl: 'purple-bus.png',
    },
  ];

  return (
    <div className="">
      <div className="container">
        <div className="relative w-full lg:max-w-[650px] lg:pb-5 xl:max-w-[730px]">
          <h2 className="pb-3 text-2xl font-bold text-black md:pb-5 md:text-[28px] lg:text-[32px]">
            Good to know
          </h2>
          <div className="flex flex-wrap items-center pb-3 md:pb-6">
            <div className="w-1/2">
              <h2 className="flex items-center text-base font-bold text-black md:text-[20px]">
                Whats Included
              </h2>
            </div>
            <div className="hidden w-1/2 justify-end gap-5 md:flex md:pt-0">
              <div className="relative flex w-[140px] items-center gap-2">
                <div className="good_to_know_slider swiper-pagination !relative !top-0 !bottom-0 !w-[50px] text-[#666]" />

                <div className="good_to_know_slider swiper-button-prev !relative !top-0 !bottom-0 !-left-0 !mt-0 !h-[32px] !w-[32px] rounded-full border border-[#ddd] bg-white !text-[#000] shadow-lg after:!text-[10px]" />
                <div className="good_to_know_slider swiper-button-next !relative !top-0 !bottom-0 !-right-0 !mt-0 !h-[32px] !w-[32px] rounded-full border border-[#ddd] bg-white !text-[#000] shadow-lg after:!text-[10px]" />
              </div>
            </div>
          </div>
          <div className="-mr-5 -ml-[10px] md:ml-0 md:mr-0">
            <Swiper
              slidesPerView="auto"
              spaceBetween={0}
              freeMode
              modules={[Navigation, Pagination, FreeMode]}
              navigation={{
                prevEl: '.good_to_know_slider.swiper-button-prev',
                nextEl: '.good_to_know_slider.swiper-button-next',
              }}
              pagination={{
                type: 'fraction',
                el: '.good_to_know_slider.swiper-pagination',
              }}
              className="flex flex-wrap !pr-5 md:!pr-0"
            >
              {sliderItems.map((item) => (
                <SwiperSlide
                  key={item.id}
                  className="!w-[58%] md:!w-1/2 lg:!w-1/3"
                >
                  <div
                    className="m-3 my-5 rounded-xl bg-white p-[15px]"
                    style={{ boxShadow: '0 3px 10px -1px rgba(0,0,0,.2)' }}
                  >
                    <div className="relative flex">
                      <Image
                        src={`/icons/${item.imgUrl}`}
                        width={33}
                        height={33}
                      />
                    </div>
                    <p className="pt-4 text-base font-semibold text-black md:text-[20px]">
                      {item.title}
                    </p>
                    <p className="hidden pt-4 text-[13px] md:block">
                      Tortor pellentesque nec sit nulla volutpat curabitur
                      mattis fusce condimentum.{' '}
                      <button
                        type="button"
                        className="font-semibold text-[#E71575]"
                        onClick={() => setOpenGoodToKnowModal(true)}
                      >
                        Read More
                      </button>
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="pt-3 text-center md:hidden">
            <button
              type="button"
              onClick={() => setOpenGoodToKnowModal(true)}
              className="purple_gradient_bg h-[44px] w-[160px] rounded-lg py-1 px-2 text-xs font-bold uppercase text-white transition-shadow hover:shadow-lg"
            >
              SHOW Details
            </button>
            <WhatsIncludedPopover
              status={openGoodToKnowModal}
              onClose={() => setOpenGoodToKnowModal(false)}
            />
          </div>
          <UnderLine />

          <div className="w-full lg:max-w-[730px]">
            <Disclosure>
              {({ open }) => (
                <div className="mb-8 flex flex-col items-center justify-center">
                  <Disclosure.Button
                    as="div"
                    role="button"
                    className="relative w-full"
                  >
                    <div className="flex w-full items-center justify-between">
                      <h3 className="font-bold text-[#222] lg:text-2xl">
                        Whats not Included
                      </h3>
                      <span
                        className={`svg_icon absolute right-0 inline-block w-6 transition-all duration-300 ease-in-out md:w-8 ${
                          open && 'rotate-180'
                        }`}
                      >
                        <ArrowDownIcon />
                      </span>
                    </div>
                  </Disclosure.Button>

                  <AnimatePresence initial={false}>
                    {open && (
                      <Disclosure.Panel
                        static
                        as={motion.div}
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                          open: { opacity: 1, height: 'auto' },
                          collapsed: { opacity: 0, height: 0 },
                        }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6 text-sm leading-relaxed">
                          <p className="mb-3 flex items-start text-sm text-[#484848] md:text-base">
                            <span className="mr-2 inline-flex w-[22px] flex-shrink-0 items-center">
                              <CancelMark />
                            </span>
                            Tortor pellentesque nec sit nulla volutpat curabitur
                            mattis fusce condimentum.. Nulla Orci congue prasent
                          </p>
                          <p className="mb-3 flex items-start text-sm text-[#484848] md:text-base">
                            <span className="mr-2 inline-flex w-[22px] flex-shrink-0 items-center">
                              <CancelMark />
                            </span>
                            Tortor pellentesque nec sit nulla volutpat
                          </p>
                          <div>
                            <button
                              type="button"
                              onClick={() => setNotIncludedOpen(true)}
                              className="ml-auto flex items-center text-sm underline"
                            >
                              <span>Show More</span>
                              <span className="ml-2 w-3">
                                <ArrowIcon />
                              </span>
                            </button>
                            <NotIncludedPopover
                              status={notIncludedOpen}
                              onClose={() => setNotIncludedOpen(false)}
                            />
                          </div>
                        </div>
                      </Disclosure.Panel>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </Disclosure>

            <Disclosure>
              {({ open }) => (
                <div className="mb-8 flex flex-col items-center justify-center">
                  <Disclosure.Button
                    as="div"
                    role="button"
                    className="relative w-full"
                  >
                    <div className="flex w-full items-center justify-between">
                      <h3 className="font-bold text-[#222] lg:text-2xl">
                        Where we will meet?
                      </h3>
                      <span
                        className={`svg_icon absolute right-0 inline-block w-6 transition-all duration-300 ease-in-out md:w-8 ${
                          open && 'rotate-180'
                        }`}
                      >
                        <ArrowDownIcon />
                      </span>
                    </div>
                  </Disclosure.Button>

                  <AnimatePresence initial={false}>
                    {open && (
                      <Disclosure.Panel
                        static
                        as={motion.div}
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                          open: { opacity: 1, height: 'auto' },
                          collapsed: { opacity: 0, height: 0 },
                        }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6 text-sm leading-relaxed">
                          <p className="mb-3 flex items-start text-sm text-[#484848] md:text-base">
                            <span className="svg_icon mr-2 inline-block w-[22px] flex-shrink-0 text-[#E61D51] xl:pt-1">
                              <Checkmark />
                            </span>
                            Tortor pellentesque nec sit nulla volutpat curabitur
                            mattis fusce condimentum.. Nulla Orci congue prasent
                          </p>
                          <button
                            type="button"
                            onClick={() => setMeetingOpen(true)}
                            className="purple_gradient_bg ml-6 mt-2 rounded-[10px] py-3 px-5 text-sm font-bold text-[#fff] "
                          >
                            View Meeting Location
                          </button>
                          <MeetingLocationPopover
                            status={meetingOpen}
                            onClose={() => setMeetingOpen(false)}
                          />
                        </div>
                      </Disclosure.Panel>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </Disclosure>

            <Disclosure>
              {({ open }) => (
                <div className="mb-8 flex flex-col items-center justify-center">
                  <Disclosure.Button
                    as="div"
                    role="button"
                    className="relative w-full"
                  >
                    <div className="flex w-full items-center justify-between">
                      <h3 className="font-bold text-[#222] lg:text-2xl">
                        Cancelation
                      </h3>
                      <span
                        className={`svg_icon absolute right-0 inline-block w-6 transition-all duration-300 ease-in-out md:w-8 ${
                          open && 'rotate-180'
                        }`}
                      >
                        <ArrowDownIcon />
                      </span>
                    </div>
                  </Disclosure.Button>

                  <AnimatePresence initial={false}>
                    {open && (
                      <Disclosure.Panel
                        static
                        as={motion.div}
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                          open: { opacity: 1, height: 'auto' },
                          collapsed: { opacity: 0, height: 0 },
                        }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6 text-sm leading-relaxed">
                          <p className="mb-3 flex items-start text-sm text-[#484848] md:text-base">
                            <span className="mr-2 inline-flex w-[22px] flex-shrink-0 items-center">
                              <CancelMark />
                            </span>
                            Tortor pellentesque nec sit nulla volutpat curabitur
                            mattis fusce condimentum.. Nulla Orci congue prasent
                          </p>
                          <p className="mb-3 flex items-start text-sm text-[#484848] md:text-base">
                            <span className="mr-2 inline-flex w-[22px] flex-shrink-0 items-center">
                              <CancelMark />
                            </span>
                            Tortor pellentesque nec sit nulla volutpat
                          </p>
                          <div>
                            <button
                              type="button"
                              onClick={() => setCancellationOpen(true)}
                              className="ml-auto flex items-center text-sm underline"
                            >
                              <span>Show More</span>
                              <span className="ml-2 w-3">
                                <ArrowIcon />
                              </span>
                            </button>
                            <CancellationPopover
                              status={cancellationOpen}
                              onClose={() => setCancellationOpen(false)}
                            />
                          </div>
                        </div>
                      </Disclosure.Panel>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </Disclosure>
          </div>
          <UnderLine />
        </div>
      </div>
    </div>
  );
};
export default GoodToKnow;
