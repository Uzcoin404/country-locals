import { useState, Fragment, useEffect } from 'react';
import Image from 'next/image';
import { Listbox, Transition } from '@headlessui/react';
import { PrimaryNav } from '../../../utilities/types';
import ChevronIcon from '../../../../public/icons/chevron-right.svg';
import {
  SearchIcon,
  UpDownIcon,
  CloseIcon,
  OnlineExpIcon,
  ChevronRight,
} from '../../common/Icons';
import useViewport from '../../../hooks/useViewport';

interface WhatPopoverType {
  categoryMenu: PrimaryNav[];
  openMenu?: (index: number) => void;
}

const people = [
  { name: 'Mentors', id: 1 },
  { name: 'Classes', id: 2 },
  { name: 'Packs', id: 3 },
];

const WhatPopover = ({ categoryMenu, openMenu }: WhatPopoverType) => {
  const { width } = useViewport();
  const [isSelected, setSelected] = useState(people[0]);

  const [activeMenuItem, setActiveMenuItem] = useState(0);

  return (
    <>
      <div className="flex items-center justify-between pb-2">
        <div className="custom-border relative z-[10] flex w-full items-center justify-between rounded-xl outline-hidden">
          {activeMenuItem === 0 ? (
            <>
              <Listbox value={isSelected} onChange={setSelected}>
                <div className="relative w-1/3 text-sm">
                  <Listbox.Button className="relative h-[60px] w-full cursor-default rounded-lg bg-transparent py-2 pl-3 pr-6 text-left">
                    <span className="block truncate">{isSelected.name}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 text-black">
                      <UpDownIcon />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {people.map((person) => (
                        <Listbox.Option
                          key={person.id}
                          className="relative cursor-default select-none py-2 px-2"
                          value={person}
                        >
                          {({ active, selected }) => (
                            <span
                              className={`block truncate text-sm ${
                                selected ? 'text-black' : 'text-gray-400'
                              }`}
                            >
                              {person.name}
                            </span>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
              <div className="relative flex w-2/3 items-center border-l">
                <div className="w-full">
                  <input
                    type="search"
                    placeholder="Search any topic"
                    className="w-full truncate rounded-lg bg-white py-2 pl-3 text-sm outline-none focus:ring-transparent"
                  />
                </div>
                <div className="pr-3 text-2xl text-gray-400">
                  <SearchIcon />
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="py-2 pl-3 text-sm">
                {categoryMenu[activeMenuItem].title}
              </div>
              <div
                className="pr-2 text-2xl text-gray-500"
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
            {categoryMenu
              ? categoryMenu.map((item) => (
                  <li
                    key={item.id}
                    className="group relative flex w-max flex-col items-start justify-center p-1"
                  >
                    <div
                      aria-hidden
                      onClick={() => setActiveMenuItem(item.id)}
                      className={[
                        'flex shrink-0 items-center overflow-hidden rounded-[12px] border-[2px]',
                        item.id === 1 || item.id === activeMenuItem
                          ? 'border-black'
                          : 'border-transparent',
                      ].join(' ')}
                    >
                      <Image
                        src={item.imgUrl || ''}
                        width={width > 1063 ? 150 : 124}
                        height={width > 1063 ? 150 : 124}
                        layout="fixed"
                        className="scale-110 rounded-[12px]"
                        alt={item.title}
                      />
                    </div>
                    <div
                      className={`flex w-full cursor-pointer items-center pt-1 md:justify-between ${
                        item.id === activeMenuItem
                          ? 'text-black'
                          : 'text-black/60'
                      } group-hover:text-black`}
                    >
                      <p className="mt-1 flex max-w-[100px] flex-1 items-center overflow-hidden truncate whitespace-nowrap text-xs font-semibold md:mt-0">
                        <span className="svg_icon mr-1 hidden w-3 sm:inline-block">
                          <item.icon />
                        </span>
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
          <ul className="absolute left-0 top-0 flex h-full w-full flex-wrap content-start overflow-auto bg-white group-hover:visible group-hover:opacity-100 sm:pl-6 md:pr-0">
            {categoryMenu[activeMenuItem].submenuItems.map((subitem) => (
              <li
                key={`${subitem.title}_${subitem.id}`}
                className="my-1 h-max w-full sm:w-1/2"
              >
                <button
                  type="button"
                  onClick={() => {
                    openMenu && openMenu(1);
                  }}
                  className="flex w-full justify-start rounded-xl border border-[#E8E8E8] p-1 text-left transition-shadow duration-200 ease-out hover:shadow-md"
                >
                  <div className="flex shrink-0 items-center overflow-hidden rounded-lg p-1">
                    <Image
                      src={subitem.imgUrl}
                      width={65}
                      height={65}
                      layout="fixed"
                      alt={subitem.title}
                    />
                  </div>
                  <div />
                  <div className="flex flex-grow flex-col justify-center self-stretch overflow-hidden px-4 py-2">
                    <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm font-semibold leading-4 text-[#4B4B4B]">
                      {subitem.title}
                    </p>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      {activeMenuItem === 0 ? (
        <div className="relative mt-2 flex w-full items-center justify-between border-t pt-3 pb-2">
          <div className="flex w-full items-center justify-start gap-2 text-xs">
            <span className="w-5">
              <OnlineExpIcon />
            </span>
            <span className="whitespace-nowrap">Try and online experience</span>
          </div>
          <div className="text-xs">
            <ChevronRight />
          </div>
        </div>
      ) : null}
    </>
  );
};
export default WhatPopover;
