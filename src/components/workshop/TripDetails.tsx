import { Disclosure } from '@headlessui/react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { slideToggle } from '../../utilities/animations';
import useViewport from '../../hooks/useViewport';

import ArrowDownIcon from '../../../public/icons/chevron-down.svg';
import CloseIcon from '../../../public/icons/xmark.svg';

import 'swiper/css';
import DaysAccordion from './accordions/DaysAccordion';
import FaqAccordion from './accordions/FaqAccordion';
import FaqMobileSlider from './accordions/FaqMobileSlider';

const TripDetails = () => {
  const { width } = useViewport();

  return (
    <div className="relative">
      <div className="pb-6 text-center md:pb-12">
        <p className="text-sm uppercase text-[#E71575] md:text-lg">
          WE’RE HERE To create wonderful memories
        </p>
        <h2 className="pb-3 pt-4 text-[24px] font-bold leading-tight md:pt-2 md:text-[42px]">
          Here Are The Trip Details
        </h2>
      </div>

      <div className="mx-auto pb-8 lg:max-w-[820px]">
        <Disclosure as="div" className="mb-4">
          {({ open }) => (
            <div className="rounded-xl bg-white px-2 pt-2 pb-2 shadow-spread md:px-4">
              <Disclosure.Button className="focus-purple relative flex w-full gap-3 px-1 pb-3 pt-3 text-left text-base font-bold focus-visible:ring-offset-0 md:px-3 md:text-[20px]">
                <span className="flex">
                  <Image
                    src="/icons/purple-calendar.png"
                    width={22}
                    height={22}
                  />
                </span>
                Program
                {open ? (
                  <span className="svg_icon absolute right-3 top-4 inline-block w-[15px] md:w-[18px]">
                    <CloseIcon />
                  </span>
                ) : (
                  <span className="svg_icon absolute right-3 top-5 inline-block w-[15px] text-transparent md:w-[18px]">
                    <ArrowDownIcon />
                  </span>
                )}
              </Disclosure.Button>

              <AnimatePresence>
                {open && (
                  <Disclosure.Panel
                    static
                    as={motion.div}
                    initial="initial"
                    animate="animate"
                    exit="initial"
                    variants={slideToggle}
                    transition={{
                      duration: 0.3,
                      ease: 'easeInOut',
                    }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 mb-4 px-3">
                      <DaysAccordion title="Day 1" />
                      <DaysAccordion title="Day 2" />
                      <DaysAccordion title="Day 3" />
                    </div>
                  </Disclosure.Panel>
                )}
              </AnimatePresence>
            </div>
          )}
        </Disclosure>

        <Disclosure as="div" className="mb-4">
          {({ open }) => (
            <div className="rounded-xl px-2 pt-2 pb-2 shadow-spread md:px-4">
              <Disclosure.Button className="focus-purple relative flex w-full gap-3 px-1 pb-3 pt-3 text-left text-base font-bold focus-visible:ring-offset-0 md:px-3 md:text-[20px]">
                <span className="flex">
                  <Image
                    src="/icons/purple-calendar.png"
                    width={22}
                    height={22}
                  />
                </span>
                FAQs
                {open ? (
                  <span className="svg_icon absolute right-3 top-4 inline-block w-[15px] md:w-[18px]">
                    <CloseIcon />
                  </span>
                ) : (
                  <span className="svg_icon absolute right-3 top-5 inline-block w-[15px] text-transparent md:w-[18px]">
                    <ArrowDownIcon />
                  </span>
                )}
              </Disclosure.Button>

              <AnimatePresence>
                {open && (
                  <Disclosure.Panel
                    static
                    as={motion.div}
                    initial="initial"
                    animate="animate"
                    exit="initial"
                    variants={slideToggle}
                    transition={{
                      duration: 0.3,
                      ease: 'easeInOut',
                    }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 mb-4 px-1 md:px-3">
                      {width > 1023 ? (
                        <>
                          <FaqAccordion title="This is the first question?" />
                          <FaqAccordion title="This is the second question?" />
                          <FaqAccordion title="This is the third question?" />
                          <FaqAccordion title="This is the fourth question?" />
                        </>
                      ) : (
                        <FaqMobileSlider />
                      )}
                    </div>
                  </Disclosure.Panel>
                )}
              </AnimatePresence>
            </div>
          )}
        </Disclosure>
      </div>
    </div>
  );
};
export default TripDetails;
