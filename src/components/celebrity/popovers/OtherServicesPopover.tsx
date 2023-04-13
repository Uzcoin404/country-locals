/* eslint @next/next/no-img-element: "off" */
/* eslint max-len: "off" */
import { Fragment, useContext } from 'react';
import { Dialog, Tab } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Navigation, Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { OverflowContext } from '../../../context/overflowContext';
import useViewport from '../../../hooks/useViewport';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import CloseIcon from '../../../../public/icons/close-circle.svg';
import OnlineIcon from '../../../../public/icons/online-icon.svg';
import OfflineIcon from '../../../../public/icons/offline.svg';
import ArrowIcon from '../../../../public/icons/arrow-right.svg';

interface OtherServicesPopoverTypes {
  status: boolean;
  onClose: () => void;
}

const OtherServicesPopover = ({
  status,
  onClose,
}: OtherServicesPopoverTypes) => {
  const { width } = useViewport();
  const { setGlobalOverflow } = useContext(OverflowContext);
  const bannerImages = [
    { id: 5, img: 'img4.png' },
    { id: 2, img: 'img2.png' },
    { id: 1, img: 'img1.png' },
    { id: 3, img: 'img3.png' },
    { id: 4, img: 'img5.png' },
  ];

  return (
    <AnimatePresence>
      {status && (
        <Dialog
          static
          as={motion.div}
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: {
                duration: 0.2,
              },
            },
            exit: { opacity: 0 },
          }}
          initial="initial"
          animate="animate"
          exit="exit"
          open={status}
          onClose={onClose}
          className="fixed inset-0 z-30 md:flex md:items-center md:justify-center"
        >
          <Dialog.Overlay
            onClick={() => {
              if (width < 768) {
                setGlobalOverflow(false);
              }
            }}
            className="absolute top-0 left-0 h-full w-full bg-black opacity-40"
          />

          <Dialog.Panel
            as={motion.div}
            variants={{
              initial: { opacity: 0, y: 100 },
              animate: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.3,
                },
              },
              exit: {
                opacity: 0,
                y: 100,
                transition: {
                  duration: 0.3,
                },
              },
            }}
            className="fixed bottom-0 z-10 w-full lg:relative lg:w-11/12 lg:max-w-[1200px]"
          >
            <Tab.Group>
              <div className="relative overflow-hidden rounded-tl-lg rounded-tr-lg bg-white p-5 md:rounded-xl md:shadow-xl">
                <div>
                  <div
                    className="purple_gradient_bg_light w-full rounded-xl px-4 py-4"
                    // style={{ backgroundImage: 'url(/other-services-bg.jpg)' }}
                  >
                    <div className="xs:flex block items-center justify-between">
                      <div className="flex items-center gap-3 lg:gap-5">
                        <Image
                          height={52}
                          width={52}
                          src="/other-service-profile.jpg"
                          alt="profile img"
                          className="h-[52px] w-[52px] rounded-full border-2 border-white"
                        />
                        <h3 className="text-white md:text-2xl">
                          Other Services by Mark
                        </h3>
                      </div>
                      <button
                        type="button"
                        className="group absolute right-7 top-7 flex h-[32px] w-[32px] items-center justify-center rounded-full bg-white lg:top-8 lg:h-[44px] lg:w-[44px]"
                        onClick={() => {
                          onClose();
                          setGlobalOverflow(false);
                        }}
                      >
                        <div className="w-5 text-[#BCBCBC] group-hover:text-[#000] lg:w-7">
                          <CloseIcon />
                        </div>
                      </button>
                    </div>

                    <Tab.List className="other-services-nav celebrity-other-services-nav mt-4 flex max-w-[400px] items-center justify-between rounded-full bg-white p-[5px] text-xs lg:mt-6 lg:text-sm">
                      <Tab as={Fragment}>
                        {({ selected }) => (
                          <button
                            type="button"
                            className={`${
                              selected ? 'active text-white' : 'text-[#64748B]'
                            } relative h-[34px] w-full rounded-full px-1 text-center lg:h-[40px] lg:px-3`}
                          >
                            <span className="ease relative z-[2] transition duration-300">
                              Classes
                            </span>
                          </button>
                        )}
                      </Tab>
                      <Tab as={Fragment}>
                        {({ selected }) => (
                          <button
                            type="button"
                            className={`${
                              selected ? 'active text-white' : 'text-[#64748B]'
                            } relative h-[34px] w-full rounded-full px-1 text-center lg:h-[40px] lg:px-3`}
                          >
                            <span className="ease relative z-[2] transition duration-300">
                              Experiences
                            </span>
                          </button>
                        )}
                      </Tab>
                      <Tab as={Fragment}>
                        {({ selected }) => (
                          <button
                            type="button"
                            className={`${
                              selected ? 'active text-white' : 'text-[#64748B]'
                            } relative h-[34px] w-full rounded-full px-1 text-center lg:h-[40px] lg:px-3`}
                          >
                            <span className="ease relative z-[2] transition duration-300">
                              Prime Packs
                            </span>
                          </button>
                        )}
                      </Tab>
                    </Tab.List>
                  </div>
                  <div className="mt-3 flex gap-x-6 border-b border-[#E6EEF8]">
                    <div className="border-b-2 border-b-[#ef5da8] py-2">
                      <button
                        type="button"
                        className="flex items-center gap-1 text-[#ef5da8]"
                      >
                        <div className="svg_icon w-4">
                          <OnlineIcon />
                        </div>
                        <span>Online</span>
                      </button>
                    </div>
                    <div className="py-2">
                      <button
                        type="button"
                        className="flex items-center gap-1 text-[#64748B]"
                      >
                        <div className="svg_icon w-4">
                          <OfflineIcon />
                        </div>
                        <span>Offline</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div
                  className="custom_scrollbar overflow-y-auto bg-white pb-6 pt-3 lg:max-h-[90vh]"
                  style={{
                    height: width < 1064 ? window.innerHeight - 235 : 'auto',
                  }}
                >
                  <div className="mt-6">
                    <Tab.Panels>
                      <Tab.Panel className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                        {[1, 2, 3, 4].map((item) => (
                          <div
                            key={item}
                            className="card rounded-lg border border-[#E6EEF8] bg-white px-3 pb-5 pt-3 lg:rounded-2xl lg:px-5"
                          >
                            <h3 className="text-xl font-semibold text-[#333]">
                              Introduction Call
                            </h3>
                            <div className="mt-3 flex flex-wrap items-center lg:flex-nowrap lg:gap-3">
                              <div className="group relative w-full rounded lg:w-4/12">
                                <Swiper
                                  modules={[Navigation, Autoplay, Pagination]}
                                  slidesPerView={1}
                                  spaceBetween={0}
                                  // navigation={{
                                  //   prevEl: `.similar_prop_inner-1_${item}.swiper-button-prev`,
                                  //   nextEl: `.similar_prop_inner-1_${item}.swiper-button-next`,
                                  // }}
                                  pagination={{
                                    el: `.similar_prop_inner-1_${item}.swiper-pagination`,
                                  }}
                                >
                                  {bannerImages.map((image) => (
                                    <SwiperSlide key={image.id}>
                                      <div className="relative h-[150px] overflow-hidden rounded-lg">
                                        <img
                                          src={image.img}
                                          alt="slide"
                                          className="absolute h-full w-full object-cover"
                                        />
                                      </div>
                                    </SwiperSlide>
                                  ))}
                                </Swiper>
                                {/* <div
                                  className={`similar_prop_inner-1_${item} similar_prop_inner_nav swiper-button-prev !top-[50%] !left-1 !mt-0 !h-[24px] !w-[24px] -translate-y-[50%] transform rounded-full bg-white bg-opacity-90 !text-[#000] opacity-0 transition duration-300 after:!text-[10px] group-hover:opacity-100`}
                                />
                                <div
                                  className={`similar_prop_inner-1_${item} similar_prop_inner_nav swiper-button-next !top-[50%] !right-1 !mt-0 !h-[24px] !w-[24px] -translate-y-[50%] transform rounded-full bg-white bg-opacity-90 !text-[#000] opacity-0 transition duration-300 after:!text-[10px] group-hover:opacity-100`}
                                /> */}
                                <div
                                  className={`similar_prop_inner-1_${item} similar_prop_inner_pagination swiper-pagination !bottom-1 text-[#666]`}
                                />
                              </div>
                              <div>
                                <div className="py-3 text-xs text-[#333] lg:text-sm">
                                  Amet minim mollit non deserunt ullamco est sit
                                  aliqua dolor do amet sint. Velit officia
                                  consequat duis enim velit mollit. Exercitation
                                  nostrud....
                                </div>
                                <div className="flex items-center justify-between">
                                  <p className="text-sm text-[#333] lg:text-base">
                                    <span className="font-semibold">$120 </span>
                                    <span>/ Person</span>
                                  </p>
                                  <button
                                    type="button"
                                    className="purple_gradient_bg_light flex items-center gap-2 rounded-lg px-6 py-[9px] text-xs text-white lg:text-sm"
                                  >
                                    <span>See Details</span>
                                    <span className="svg_icon w-4 text-transparent lg:w-5">
                                      <ArrowIcon />
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </Tab.Panel>
                      <Tab.Panel className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                        {[1, 2, 3, 4].map((item) => (
                          <div
                            key={item}
                            className="card rounded-lg border border-[#E6EEF8] bg-white px-3 pb-5 pt-3 lg:rounded-2xl lg:px-5"
                          >
                            <h3 className="text-xl font-semibold text-[#333]">
                              Experiences You&apos;ll get
                            </h3>
                            <div className="mt-3 flex flex-wrap items-center lg:flex-nowrap lg:gap-3">
                              <div className="group relative w-full rounded lg:w-4/12">
                                <Swiper
                                  modules={[Navigation, Autoplay, Pagination]}
                                  slidesPerView={1}
                                  spaceBetween={0}
                                  // navigation={{
                                  //   prevEl: `.similar_prop_inner-2_${item}.swiper-button-prev`,
                                  //   nextEl: `.similar_prop_inner-2_${item}.swiper-button-next`,
                                  // }}
                                  pagination={{
                                    el: `.similar_prop_inner-2_${item}.swiper-pagination`,
                                  }}
                                >
                                  {bannerImages.map((image) => (
                                    <SwiperSlide key={image.id}>
                                      <div className="relative h-[150px] overflow-hidden rounded-lg">
                                        <img
                                          src={image.img}
                                          alt="slide"
                                          className="absolute h-full w-full object-cover"
                                        />
                                      </div>
                                    </SwiperSlide>
                                  ))}
                                </Swiper>
                                {/* <div
                                  className={`similar_prop_inner-2_${item} similar_prop_inner_nav swiper-button-prev !top-[50%] !left-1 !mt-0 !h-[24px] !w-[24px] -translate-y-[50%] transform rounded-full bg-white bg-opacity-90 !text-[#000] opacity-0 transition duration-300 after:!text-[10px] group-hover:opacity-100`}
                                />
                                <div
                                  className={`similar_prop_inner-2_${item} similar_prop_inner_nav swiper-button-next !top-[50%] !right-1 !mt-0 !h-[24px] !w-[24px] -translate-y-[50%] transform rounded-full bg-white bg-opacity-90 !text-[#000] opacity-0 transition duration-300 after:!text-[10px] group-hover:opacity-100`}
                                /> */}
                                <div
                                  className={`similar_prop_inner-2_${item} similar_prop_inner_pagination swiper-pagination !bottom-1 text-[#666]`}
                                />
                              </div>
                              <div>
                                <div className="py-3 text-xs text-[#333] lg:text-sm">
                                  Amet minim mollit non deserunt ullamco est sit
                                  aliqua dolor do amet sint. Velit officia
                                  consequat duis enim velit mollit. Exercitation
                                  nostrud....
                                </div>
                                <div className="flex items-center justify-between">
                                  <p className="text-sm text-[#333] lg:text-base">
                                    <span className="font-semibold">$120 </span>
                                    <span>/ Person</span>
                                  </p>
                                  <button
                                    type="button"
                                    className="purple_gradient_bg_light flex items-center gap-2 rounded-lg px-6 py-[9px] text-xs text-white lg:text-sm"
                                  >
                                    <span>See Details</span>
                                    <span className="svg_icon w-4 text-transparent lg:w-5">
                                      <ArrowIcon />
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </Tab.Panel>
                      <Tab.Panel className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                        {[1, 2, 3, 4].map((item) => (
                          <div
                            key={item}
                            className="card rounded-lg border border-[#E6EEF8] bg-white px-3 pb-5 pt-3 lg:rounded-2xl lg:px-5"
                          >
                            <h3 className="text-xl font-semibold text-[#333]">
                              Prime Packs Deal
                            </h3>
                            <div className="mt-3 flex flex-wrap items-center lg:flex-nowrap lg:gap-3">
                              <div className="group relative w-full rounded lg:w-4/12">
                                <Swiper
                                  modules={[Navigation, Autoplay, Pagination]}
                                  slidesPerView={1}
                                  spaceBetween={0}
                                  // navigation={{
                                  //   prevEl: `.similar_prop_inner-3_${item}.swiper-button-prev`,
                                  //   nextEl: `.similar_prop_inner-3_${item}.swiper-button-next`,
                                  // }}
                                  pagination={{
                                    el: `.similar_prop_inner-3_${item}.swiper-pagination`,
                                  }}
                                >
                                  {bannerImages.map((image) => (
                                    <SwiperSlide key={image.id}>
                                      <div className="relative h-[150px] overflow-hidden rounded-lg">
                                        <img
                                          src={image.img}
                                          alt="slide"
                                          className="absolute h-full w-full object-cover"
                                        />
                                      </div>
                                    </SwiperSlide>
                                  ))}
                                </Swiper>
                                {/* <div
                                  className={`similar_prop_inner-3_${item} similar_prop_inner_nav swiper-button-prev !top-[50%] !left-1 !mt-0 !h-[24px] !w-[24px] -translate-y-[50%] transform rounded-full bg-white bg-opacity-90 !text-[#000] opacity-0 transition duration-300 after:!text-[10px] group-hover:opacity-100`}
                                />
                                <div
                                  className={`similar_prop_inner-3_${item} similar_prop_inner_nav swiper-button-next !top-[50%] !right-1 !mt-0 !h-[24px] !w-[24px] -translate-y-[50%] transform rounded-full bg-white bg-opacity-90 !text-[#000] opacity-0 transition duration-300 after:!text-[10px] group-hover:opacity-100`}
                                /> */}
                                <div
                                  className={`similar_prop_inner-3_${item} similar_prop_inner_pagination swiper-pagination !bottom-1 text-[#666]`}
                                />
                              </div>
                              <div>
                                <div className="py-3 text-xs text-[#333] lg:text-sm">
                                  Amet minim mollit non deserunt ullamco est sit
                                  aliqua dolor do amet sint. Velit officia
                                  consequat duis enim velit mollit. Exercitation
                                  nostrud....
                                </div>
                                <div className="flex items-center justify-between">
                                  <p className="text-sm text-[#333] lg:text-base">
                                    <span className="font-semibold">$120 </span>
                                    <span>/ Person</span>
                                  </p>
                                  <button
                                    type="button"
                                    className="purple_gradient_bg_light flex items-center gap-2 rounded-lg px-6 py-[9px] text-xs text-white lg:text-sm"
                                  >
                                    <span>See Details</span>
                                    <span className="svg_icon w-4 text-transparent lg:w-5">
                                      <ArrowIcon />
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </Tab.Panel>
                    </Tab.Panels>
                  </div>
                </div>
              </div>
            </Tab.Group>
          </Dialog.Panel>
        </Dialog>
      )}
    </AnimatePresence>
  );
};
export default OtherServicesPopover;
