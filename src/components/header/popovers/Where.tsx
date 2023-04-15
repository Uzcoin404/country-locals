import { useState, Fragment, useEffect } from 'react';
import Image from 'next/image';
import { Listbox, Transition } from '@headlessui/react';

import { StatesType } from '../../../utilities/types';
import ChevronIcon from '../../../../public/icons/chevron-right.svg';
import MapIcon from '../../../../public/icons/map-pin.svg';

import {
  SearchIcon,
  UpDownIcon,
  CloseIcon,
  OnlineExpIcon,
  ChevronRight,
  BoltIcon,
  InputClose,
} from '../../common/Icons';
import useViewport from '../../../hooks/useViewport';
import { AnimatePresence, motion } from 'framer-motion';
import { states } from '../../../utilities/dummy-api';

interface WherePopoverType {
  stateItems: StatesType[];
  openMenu?: (index: number) => void;
}
const people = [
  { name: 'Mentors', id: 1 },
  { name: 'Classes', id: 2 },
  { name: 'Packs', id: 3 },
];

const WherePopover = ({ stateItems, openMenu }: WherePopoverType) => {
  const { width } = useViewport();
  const [isSelected, setSelected] = useState(people[0]);

  const [prevSearches, setPrevSearches] = useState(
    states[0].cities.splice(0, 5),
  );
  const [prevSearchesActive, setPrevSearchesActive] = useState(false);

  const [activeMenuItem, setActiveMenuItem] = useState(0);
  const [isSearchbarActive, setSearchbarActive] = useState(false);

  const onSearchFocus = () => {
    setSearchbarActive(true);
  };

  return (
    <>
      <div>
        <div className="flex items-center justify-between pb-2">
          <div className="relative z-[10] flex h-[60px] w-full items-center justify-between rounded-xl border outline-hidden">
            {activeMenuItem === 0 ? (
              <>
                <div className="w-full">
                  <input
                    type="search"
                    placeholder="Search locations"
                    onFocus={onSearchFocus}
                    className="h-full w-full truncate rounded-lg bg-transparent py-2 px-6 text-sm outline-none"
                  />
                </div>
                <div className="px-3 text-2xl text-gray-400">
                  <SearchIcon />
                </div>
              </>
            ) : (
              <>
                <div className="py-2 pl-6 text-sm text-gray-400">
                  {stateItems[activeMenuItem].title}
                </div>
                <div
                  className="pr-6 text-2xl text-gray-500"
                  aria-hidden
                  onClick={() => setActiveMenuItem(0)}
                >
                  <CloseIcon />
                </div>
              </>
            )}
          </div>
        </div>
        <div
          className={[
            'hide-scroll relative w-full',
            activeMenuItem === 0
              ? 'h-full  overflow-x-auto'
              : 'h-[250px] overflow-y-auto ',
          ].join(' ')}
        >
          {activeMenuItem === 0 ? (
            <ul className="relative flex gap-2 py-2">
              {stateItems
                ? stateItems.map((item) => (
                    <li
                      key={item.id}
                      className="group relative flex w-max flex-col items-start justify-center p-1"
                    >
                      <div
                        aria-hidden
                        onClick={() => setActiveMenuItem(item.id)}
                        className="flex shrink-0 items-center overflow-hidden rounded-lg"
                      >
                        {/* <Image
                        src={item.imgUrl || ''}
                        width={width > 1063 ? 150 : 100}
                        height={width > 1063 ? 150 : 100}
                        layout="fixed"
                        alt={item.title}
                      /> */}
                        <div
                          className="bg-black"
                          style={{
                            width: 124,
                            height: 124,
                          }}
                        ></div>
                      </div>
                      <div
                        className={`flex w-full cursor-pointer items-center pt-1 md:justify-between ${
                          item.id === activeMenuItem
                            ? 'text-black'
                            : 'text-black/60'
                        } group-hover:text-black`}
                      >
                        <p className="mt-1 flex max-w-[100px] flex-1 items-center overflow-hidden truncate whitespace-nowrap text-xs font-semibold md:mt-0">
                          {/* <span className="svg_icon mr-1 hidden w-3 sm:inline-block">
                          <item.icon />
                        </span> */}
                          {item.title}
                        </p>
                        <i className="svg_icon hidden w-4 self-end justify-self-end sm:inline-block">
                          <ChevronIcon />
                        </i>
                      </div>
                    </li>
                  ))
                : null}
            </ul>
          ) : (
            <ul className="absolute left-0 top-0 grid h-full w-full grid-cols-2 content-start gap-3 overflow-auto bg-white group-hover:visible group-hover:opacity-100 sm:pl-6 md:pr-0">
              {stateItems[activeMenuItem].cities.map((city) => (
                <button
                  key={city}
                  onClick={() => {
                    openMenu && openMenu(2);
                  }}
                  type="button"
                  className="h-[56px] rounded-[8px] border border-[#E0e0e0] px-2 py-4 text-center text-xs font-semibold text-[#212121] transition duration-200 ease-out hover:bg-[#E71575] hover:text-white md:h-[56px] md:rounded-md md:px-4"
                >
                  <div className="relative flex h-full w-full items-center justify-start gap-2">
                    <div
                      className="rounded-[6px] bg-black"
                      style={{
                        width: 40,
                        height: 40,
                      }}
                    ></div>
                    <span className="whitespace-wrap text-start">{city}</span>
                  </div>
                </button>
              ))}
            </ul>
          )}
        </div>

        {/* <nav>
        <ul className="relative">
          {stateItems &&
            stateItems.map((item) => (
              <li key={item.id} className="group w-1/3">
                <div
                  className={`flex cursor-pointer  items-center  border-r border-r-[#F1F1F1] py-1 sm:py-2 sm:pr-5 ${
                    item.active ? 'text-[#E71575]' : 'text-[#A8ABC1]'
                  } group-hover:text-[#E71575]`}
                >
                  <span className="svg_icon hidden w-5 sm:inline-block">
                    <MapIcon />
                  </span>
                  <p className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-sm font-semibold sm:ml-2 md:mx-3">
                    {item.title}
                  </p>
                  <i className="svg_icon hidden w-4 self-end justify-self-end sm:inline-block">
                    <ChevronIcon />
                  </i>
                </div>
                <div
                  className={`absolute left-1/3 top-0 flex h-full w-2/3 flex-wrap content-start gap-1 bg-white pt-1 pl-2 sm:gap-2 sm:pt-2 sm:pl-6 ${
                    item.active ? 'opacity-1 visible' : 'invisible opacity-0'
                  } group-hover:visible group-hover:opacity-100`}
                >
                  {item.cities.map((val) => (
                    <button
                      key={val}
                      type="button"
                      className="h-7 rounded border border-[#E71575] px-3 text-center text-xs font-semibold text-[#E71575] transition duration-200 ease-out hover:bg-[#E71575] hover:text-white md:h-[32px] md:rounded-md md:px-4"
                    >
                      {val}
                    </button>
                  ))}
                </div>
              </li>
            ))}
        </ul>
      </nav> */}
        <div className="mt-2 flex w-full items-center justify-between border-t pt-3 pb-2">
          <div className="flex  w-full items-center justify-start gap-2 text-xs">
            <span className="w-4">
              <OnlineExpIcon />
            </span>
            <span className="">Try and online experience</span>
          </div>
          <div className="text-xs">
            <ChevronRight />
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isSearchbarActive ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{
              ease: 'easeOut',
            }}
            className="search-shadow fixed inset-0 z-[9999] flex !h-[calc(100vh-4rem)] w-full flex-col items-center justify-start rounded-t-[24px] bg-white p-4"
          >
            <div className="mx-16 flex h-[60px] w-full items-center overflow-hidden rounded-xl bg-[#F5F5F5] px-[20px] text-[rgb(113,113,113)]">
              <div className="mr-[10px] px-1 text-2xl text-gray-800">
                <SearchIcon />
              </div>
              <input
                type="search"
                placeholder="Search locations"
                onFocus={(e) => {
                  e.preventDefault();
                  setPrevSearchesActive(true);
                }}
                // onChange={saveSearchs}
                className="h-full w-full truncate rounded-lg bg-transparent text-sm outline-none focus:ring-transparent"
              />
              <div
                className="px-1 text-3xl text-gray-400"
                aria-hidden
                onClick={() => {
                  setSearchbarActive(false);
                  setPrevSearchesActive(false);
                }}
              >
                <InputClose />
              </div>
            </div>
            {prevSearchesActive ? (
              <div className="relative mt-2 flex w-full flex-col rounded-lg bg-white py-5 px-5 shadow-spread">
                <span className="text-[16px] font-[700]">Recent Searches</span>
                {prevSearches.map((item, i) => (
                  <div
                    className="relative mt-2 flex w-full items-center justify-start"
                    key={i + item}
                  >
                    <span className="mr-2 text-2xl">
                      <BoltIcon />
                    </span>
                    <span className="text-[14px] font-[450] text-[#212121] ">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            ) : null}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};
export default WherePopover;
