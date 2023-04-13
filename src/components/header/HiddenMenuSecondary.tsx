import { Fragment, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Popover } from '@headlessui/react';
import { dropdownWrapperAnimation } from '../../utilities/animations';
import { PrimaryNav, StatesType } from '../../utilities/types';
import WhatPopover from './popovers/What';
import WherePopover from './popovers/Where';
import WhenPopover from './popovers/When';

import SearchIcon from '../../../public/icons/search.svg';
import WhoPopover from './popovers/Who';

interface HiddenMenuSecondaryProps {
  panel: number;
  categoryMenu: PrimaryNav[];
  states: StatesType[];
  adults: number;
  child: number;
  infants: number;
  onIncrement: (type: string) => void;
  onDecrement: (type: string) => void;
  when: Date | null;
  onDateChange: (date: Date | null) => void;
}

const HiddenMenuSecondary = ({
  panel,
  categoryMenu,
  states,
  adults,
  child,
  infants,
  onIncrement,
  onDecrement,
  when,
  onDateChange,
}: HiddenMenuSecondaryProps) => {
  const whatRef = useRef<HTMLButtonElement>(null);
  const whereRef = useRef<HTMLButtonElement>(null);
  const whenRef = useRef<HTMLButtonElement>(null);
  const whoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (panel === 1) {
      whatRef.current?.click();
    } else if (panel === 2) {
      whereRef.current?.click();
    } else if (panel === 3) {
      whenRef.current?.click();
    } else if (panel === 4) {
      whoRef.current?.click();
    }
  }, [panel]);

  return (
    <div className="mt-7 w-full">
      <div className="relative mx-auto flex h-[76px] w-full max-w-[1000px] items-center justify-center rounded-full border border-[#ddd] bg-[#f7f7f7]">
        <Popover as={Fragment}>
          {({ open }) => (
            <>
              <Popover.Button
                ref={whatRef}
                className={`focus-green relative h-[74px] flex-auto rounded-full pl-10 pr-2 text-left transition duration-300 ease-in-out hover:bg-white hover:shadow-lg focus-visible:rounded-full focus-visible:ring-offset-0 ${
                  open
                    ? 'bg-white shadow-lg'
                    : 'after:absolute after:-right-[13px] after:top-[18px] after:h-[38px] after:w-[1px] after:bg-[#ddd]'
                } group-hover:after:hidden`}
              >
                <span className="block text-sm font-semibold text-black">
                  What
                </span>
                <span className="block text-xs text-[#797979]">
                  Find Category Courses
                </span>
              </Popover.Button>
              <AnimatePresence exitBeforeEnter>
                {open && (
                  <Popover.Panel
                    static
                    as={motion.div}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={dropdownWrapperAnimation}
                    className="absolute top-[85px] w-full origin-top-right translate-y-3 transform rounded-[30px] border border-[#DDDDDD] bg-white p-6 shadow-lg"
                  >
                    <WhatPopover categoryMenu={categoryMenu} />
                  </Popover.Panel>
                )}
              </AnimatePresence>
            </>
          )}
        </Popover>

        <Popover as={Fragment}>
          {({ open }) => (
            <>
              <Popover.Button
                ref={whereRef}
                className={`focus-green relative h-[74px] flex-auto rounded-full pl-10 pr-2 text-left transition duration-300 ease-in-out hover:bg-white hover:shadow-lg focus-visible:rounded-full focus-visible:ring-offset-0 ${
                  open
                    ? 'bg-white shadow-lg'
                    : 'after:absolute after:-right-[13px] after:top-[18px] after:h-[38px] after:w-[1px] after:bg-[#ddd]'
                } group-hover:after:hidden`}
              >
                <span className="block text-sm font-semibold text-black">
                  Where
                </span>
                <span className="block text-xs text-[#797979]">
                  Search Destinations
                </span>
              </Popover.Button>
              <AnimatePresence>
                {open && (
                  <Popover.Panel
                    static
                    as={motion.div}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={dropdownWrapperAnimation}
                    className="absolute top-[85px] w-full origin-top-right translate-y-3 transform rounded-[30px] border border-[#DDDDDD] bg-white p-6 shadow-lg"
                  >
                    <WherePopover stateItems={states} />
                  </Popover.Panel>
                )}
              </AnimatePresence>
            </>
          )}
        </Popover>

        <Popover as={Fragment}>
          {({ open }) => (
            <>
              <Popover.Button
                ref={whenRef}
                className={`focus-green relative h-[74px] flex-auto rounded-full pl-10 pr-2 text-left transition duration-300 ease-in-out hover:bg-white hover:shadow-lg focus-visible:rounded-full focus-visible:ring-offset-0 ${
                  open
                    ? 'bg-white shadow-lg'
                    : 'after:absolute after:-right-[3px] after:top-[18px] after:h-[38px] after:w-[1px] after:bg-[#ddd]'
                } group-hover:after:hidden`}
              >
                <span className="block text-sm font-semibold text-black">
                  Check In
                </span>
                <span className="block text-xs text-[#797979]">
                  Set your Schedule
                </span>
              </Popover.Button>
              <AnimatePresence>
                {open && (
                  <Popover.Panel
                    static
                    as={motion.div}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={dropdownWrapperAnimation}
                    className="absolute top-[85px] w-full origin-top-right translate-y-3 transform rounded-[30px] border border-[#DDDDDD] bg-white p-7 shadow-lg"
                  >
                    <WhenPopover when={when} onDateChange={onDateChange} />
                  </Popover.Panel>
                )}
              </AnimatePresence>
            </>
          )}
        </Popover>

        <Popover as={Fragment}>
          {({ open }) => (
            <>
              <Popover.Button
                // ref={whenRef}
                className={`focus-green relative h-[74px] flex-auto rounded-full pl-10 pr-2 text-left transition duration-300 ease-in-out hover:bg-white hover:shadow-lg focus-visible:rounded-full focus-visible:ring-offset-0 ${
                  open
                    ? 'bg-white shadow-lg'
                    : 'after:absolute after:-right-[3px] after:top-[18px] after:h-[38px] after:w-[1px] after:bg-[#ddd]'
                } group-hover:after:hidden`}
              >
                <span className="block text-sm font-semibold text-black">
                  Check Out
                </span>
                <span className="block text-xs text-[#797979]">
                  Set your Schedule
                </span>
              </Popover.Button>
              <AnimatePresence>
                {open && (
                  <Popover.Panel
                    static
                    as={motion.div}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={dropdownWrapperAnimation}
                    className="absolute top-[85px] w-full origin-top-right translate-y-3 transform rounded-[30px] border border-[#DDDDDD] bg-white p-7 shadow-lg"
                  >
                    <WhenPopover when={when} onDateChange={onDateChange} />
                  </Popover.Panel>
                )}
              </AnimatePresence>
            </>
          )}
        </Popover>

        <Popover as={Fragment}>
          {({ open }) => (
            <>
              <div
                className={`relative w-full max-w-[250px] flex-auto cursor-pointer rounded-full transition duration-300 ease-in-out hover:bg-white hover:shadow-lg ${
                  open ? 'bg-white shadow-lg' : ''
                }`}
              >
                <Popover.Button
                  as="div"
                  ref={whoRef}
                  className="focus-green flex h-[74px] flex-auto items-center rounded-full pl-6 pr-2 text-left focus-visible:rounded-full focus-visible:ring-offset-0"
                >
                  <div>
                    <span className="block text-sm font-semibold text-black">
                      Who
                    </span>
                    <span className="block text-xs text-[#797979]">
                      Student Age
                    </span>
                  </div>
                </Popover.Button>
                <button
                  type="submit"
                  className="focus-green absolute right-3 top-3 flex h-[52px] w-full max-w-[124px] items-center justify-center gap-1 rounded-full bg-[#E71575] transition-all duration-300 ease-in-out hover:shadow-lg focus-visible:rounded-full focus-visible:ring-offset-0"
                >
                  <span className="w-[26px]">
                    <SearchIcon />
                  </span>
                  <span className="font-bold text-white">Search</span>
                </button>
              </div>

              <AnimatePresence>
                {open && (
                  <Popover.Panel
                    static
                    as={motion.div}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={dropdownWrapperAnimation}
                    className="absolute right-0 top-[85px] w-full max-w-[390px] origin-top-right translate-y-3 transform rounded-[30px] border border-[#DDDDDD] bg-white p-8 shadow-lg"
                  >
                    <WhoPopover
                      adults={adults}
                      child={child}
                      infants={infants}
                      onIncrement={onIncrement}
                      onDecrement={onDecrement}
                    />
                  </Popover.Panel>
                )}
              </AnimatePresence>
            </>
          )}
        </Popover>
      </div>
    </div>
  );
};
export default HiddenMenuSecondary;
