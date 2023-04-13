/* eslint react/prop-types: "off" */
import { Disclosure } from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';

import DaysAccordionContent from './DaysAccordionContent';

import ArrowDownIcon from '../../../../public/icons/chevron-down.svg';
import LocationIcon from '../../../../public/icons/location.svg';

const DaysAccordion = ({ title }: { title: string }) => (
  <Disclosure>
    {({ open }) => (
      <div className="relative mb-4 flex flex-col items-center justify-center last:mb-0">
        <div className="absolute -left-0 top-6 z-[1] h-[100%] w-[1px] border-[1px] border-dashed border-r-[#E71575] md:left-[10px] " />
        <div className=" svg_icon absolute -left-3 top-2 z-[1] w-[26px] shrink-0 text-[#E71575] md:-left-[1px]">
          <LocationIcon />
        </div>
        <Disclosure.Button
          as="button"
          className="focus-purple relative w-[90%] text-left text-[16px] font-bold"
        >
          <div className="mb-3 flex w-full items-center justify-between rounded bg-[#F8F8F8] p-2 px-5 pl-3 text-[#4A4A4A]">
            <h3 className="pl-1">{title}</h3>
            <span
              className={`svg_icon absolute right-3 top-3 mt-1 inline-block w-[15px] text-transparent transition-all duration-300 ease-in-out md:mt-[2px] md:w-[18px] ${
                open && 'rotate-180'
              }`}
            >
              <ArrowDownIcon />
            </span>
          </div>

          {!open && (
            <div className="flex flex-wrap items-center gap-2 p-2 pl-3 md:flex-nowrap md:gap-5">
              <button
                type="button"
                className="rounded-3xl border border-[#808080] px-3 py-1 text-[12px] font-medium text-[#808080]"
              >
                Ramboda Waterfalls
              </button>
              <button
                type="button"
                className="rounded-3xl border border-[#808080] px-3 py-1 text-[12px] font-medium text-[#808080]"
              >
                Golf Course
              </button>
              <button
                type="button"
                className="rounded-3xl border border-[#808080] px-3 py-1 text-[12px] font-medium text-[#808080]"
              >
                Ramboda Waterfalls
              </button>
            </div>
          )}
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
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="overflow-hidden md:ml-8"
            >
              <DaysAccordionContent />
            </Disclosure.Panel>
          )}
        </AnimatePresence>
      </div>
    )}
  </Disclosure>
);
export default DaysAccordion;
