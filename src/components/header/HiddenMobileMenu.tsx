import {
  Fragment,
  useEffect,
  useRef,
  FC,
  RefObject,
  ReactNode,
  useState,
} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Popover, Tab, Disclosure } from '@headlessui/react';
import { PrimaryNav, StatesType } from '../../utilities/types';
import WhatPopover from './popovers/What';
import WherePopover from './popovers/Where';
import WhenPopover from './popovers/When';
import WhoPopover from './popovers/Who';

import CloseIcon from '../../../public/icons/xmark.svg';
import SearchIcon from '../../../public/icons/search.svg';

interface HiddenMobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  menuItems: { id: number; title: string; active: boolean }[];
  onNavChange: (id: number) => void;
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

type PopoverWrapperProps = {
  children: ReactNode;
  title: string;
  titleClosed: string;
  subtitleClosed: string;
  index: number;
  isOpen?: boolean;
};

const titles = ['what', 'where', 'when', 'who'];

const PopoverWrapper: FC<PopoverWrapperProps> = ({
  children,
  title,
  titleClosed,
  subtitleClosed,
  index,
  isOpen = false,
}) => {
  const ref = useRef() as any;

  useEffect(() => {
    if (!ref.current) return;
    if (isOpen) {
      ref.current.click();
    }
  }, [isOpen]);

  return (
    <Popover as={Fragment}>
      {({ open }) => (
        <div
          className={`mt-4 -translate-y-full transform overflow-hidden rounded-2xl bg-white opacity-0 ${
            open ? 'shadow-big' : 'shadow-small'
          }`}
          id="tr_div"
          style={{ '--i': index } as React.CSSProperties}
        >
          <Popover.Button
            id="button"
            ref={ref}
            className={[
              open ? 'h-auto' : 'h-[56px]',
              'relative flex h-[56px] w-full items-center justify-between rounded-2xl px-[24px]',
            ].join(' ')}
          >
            <AnimatePresence initial={false}>
              {open ? (
                <motion.p className="pt-[24px] align-bottom text-[22px] font-bold">
                  {title}
                </motion.p>
              ) : (
                <>
                  <span className="block text-sm font-[500] text-[#757575]">
                    {titleClosed}
                  </span>
                  <span className="block text-sm font-[500] text-[#212121]">
                    {subtitleClosed}
                  </span>
                </>
              )}
            </AnimatePresence>
          </Popover.Button>
          <AnimatePresence initial={false}>
            {open && (
              <Popover.Panel
                static
                as={motion.div}
                transition={{
                  ease: 'easeInOut',
                  duration: 0.3,
                }}
                // initial={{ opacity: 0, y: 30 }}
                // animate={{ opacity: 1, y: 0 }}
                // exit={{ opacity: 0, y: 10 }}
                className="w-full origin-top-right bg-white px-[24px] pb-[24px] pt-[16px] shadow-lg lg:rounded-[30px] lg:border lg:border-[#DDDDDD]"
              >
                {children}
              </Popover.Panel>
            )}
          </AnimatePresence>
        </div>
      )}
    </Popover>
  );
};

const HiddenMobileMenu = ({
  isOpen,
  onClose,
  menuItems,
  onNavChange,
  categoryMenu,
  states,
  adults,
  child,
  infants,
  onIncrement,
  onDecrement,
  when,
  onDateChange,
}: HiddenMobileMenuProps) => {
  const curIndex = useRef(0);
  const [isLeft, setIsLeft] = useState(false);
  const [iswhatOpen, setWhatOpen] = useState(false);
  const [isWhereOpen, setWhereOpen] = useState(false);
  const [isWhenOpen, setWhenOpen] = useState(false);
  const [isWhoOpen, setWhoOpen] = useState(false);
  // const [isLeft, setIsLeft] = useState(false);

  const openPanels = (index: number) => {
    if (index === 0) {
      setWhatOpen(true);
      setWhenOpen(false);
      setWhereOpen(false);
      setWhoOpen(false);
    } else if (index === 1) {
      setWhatOpen(false);
      setWhenOpen(false);
      setWhereOpen(true);
      setWhoOpen(false);
    } else if (index === 2) {
      setWhatOpen(false);
      setWhenOpen(true);
      setWhereOpen(false);
      setWhoOpen(false);
    } else if (index === 3) {
      setWhatOpen(false);
      setWhenOpen(false);
      setWhereOpen(false);
      setWhoOpen(true);
    }
  };
  return (
    <div
      className={`hidden_menu custom-transition fixed left-0 top-0 z-50 h-full w-full origin-bottom transform bg-[#FBFBFB] transition duration-200 ease-in ${
        isOpen
          ? 'active pointer-events-auto visible'
          : 'pointer-events-none invisible'
      }`}
    >
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className="overflow-y-auto px-[15px] pb-24"
            style={{
              height: process.browser ? window.innerHeight : 'auto',
            }}
          >
            <Tab.Group
              as={Fragment}
              onChange={(index) => {
                if (curIndex.current > index) {
                  setIsLeft(true);
                } else {
                  setIsLeft(false);
                }
                curIndex.current = index;
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  ease: 'easeOut',
                }}
                className="relative flex w-full items-center gap-3 pt-4"
              >
                <div className="px-0">
                  <button
                    type="button"
                    onClick={onClose}
                    className="relative flex h-8 w-8 items-center justify-center rounded-full border border-[#ddd] bg-white p-2 shadow-md"
                  >
                    <span className="svg_icon w-full">
                      <CloseIcon />
                    </span>
                  </button>
                </div>
                <div className="hide-scroll relative flex-1 overflow-x-auto overflow-y-hidden rounded-full bg-[#f5f5f5]">
                  <Tab.List className="flex w-max items-center justify-center p-1">
                    {menuItems.map((item) => (
                      <Tab key={item.id}>
                        <button
                          type="button"
                          onClick={() => {
                            onNavChange(item.id);
                          }}
                          className={`focus-green after:duration-400 relative rounded-full py-1.5 px-3.5 text-sm hover:text-black ${
                            item.active
                              ? 'bg-white font-semibold text-black shadow-spread'
                              : 'text-[#4B4B4B]'
                          }`}
                        >
                          {item.title}
                        </button>
                      </Tab>
                    ))}
                  </Tab.List>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  ease: 'easeOut',
                  duration: 0.5,
                }}
              >
                <Tab.Panels as={Fragment}>
                  <AnimatePresence initial={false}>
                    {menuItems.map((item) => (
                      <Tab.Panel key={item.id}>
                        <motion.div
                          initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: isLeft ? 30 : -30 }}
                          transition={{
                            ease: 'easeOut',
                            duration: 0.5,
                          }}
                        >
                          <PopoverWrapper
                            title="Select Category"
                            titleClosed="What"
                            subtitleClosed="Add Category"
                            index={0}
                            isOpen
                          >
                            <WhatPopover
                              categoryMenu={categoryMenu}
                              openMenu={openPanels}
                            />
                          </PopoverWrapper>

                          <PopoverWrapper
                            title="Select Destination"
                            titleClosed="Where"
                            subtitleClosed="Add Destinations"
                            index={1}
                            isOpen={isWhereOpen}
                          >
                            <WherePopover
                              stateItems={states}
                              openMenu={openPanels}
                            />
                          </PopoverWrapper>

                          <PopoverWrapper
                            title="When's your trip"
                            titleClosed="When"
                            subtitleClosed="Add dates"
                            index={2}
                            isOpen={isWhenOpen}
                          >
                            <WhenPopover
                              when={when}
                              onDateChange={onDateChange}
                              openMenu={openPanels}
                            />
                          </PopoverWrapper>
                          {/* <PopoverWrapper
              title=" Check Out Schedule"
              titleClosed="Check Out"
              subtitleClosed="Set your Schedule"
            >
              <WhenPopover when={when} onDateChange={onDateChange} />
            </PopoverWrapper> */}
                          <PopoverWrapper
                            title="Who"
                            titleClosed="Who"
                            subtitleClosed="Add guests"
                            index={3}
                            isOpen={isWhoOpen}
                          >
                            <WhoPopover
                              adults={adults}
                              child={child}
                              infants={infants}
                              onIncrement={onIncrement}
                              onDecrement={onDecrement}
                              // openMenu={openPanels}
                            />
                          </PopoverWrapper>
                        </motion.div>
                      </Tab.Panel>
                    ))}
                  </AnimatePresence>
                </Tab.Panels>
              </motion.div>
            </Tab.Group>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                ease: 'easeOut',
                duration: 0.5,
              }}
              className="absolute left-0 bottom-0 flex w-full items-center justify-between bg-white px-4 py-3 shadow-spread"
            >
              <div className="">
                <span className="text-sm font-bold underline">Clear All</span>
              </div>

              <button
                type="submit"
                className="focus-green red_btn flex w-max items-center justify-center rounded-lg px-4 py-3 text-center text-white transition-shadow duration-300 ease-in-out hover:shadow-lg"
              >
                <div className="svg_icon mr-1 flex w-6 shrink-0 items-center justify-center text-transparent">
                  <SearchIcon />
                </div>
                Search
              </button>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default HiddenMobileMenu;
