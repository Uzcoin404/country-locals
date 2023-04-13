/* eslint react/jsx-one-expression-per-line: "off" */
import { Dialog } from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useContext, useState } from 'react';
import { OverflowContext } from '../../../context/overflowContext';
import useViewport from '../../../hooks/useViewport';
import { formatDayMonth } from '../../../utilities/helpers';

import GuestsPopover from './GuestsPopover';
import GuestsPopoverMobile from './GuestsPopoverMobile';
import RequestToBookCalenderPopover from './RequestToBookCalenderPopover';
import RequestToBookTimePopover from './RequestToBookTimePopover';

import CalendarIcon from '../../../../public/icons/calendar.svg';
import ArrowDownIcon from '../../../../public/icons/chevron-right.svg';
import ClockIcon from '../../../../public/icons/clock-1.svg';
import UserIcon from '../../../../public/icons/user-outline.svg';
import CloseIcon from '../../../../public/icons/xmark.svg';

interface RequestToBookPopoverTypes {
  status: boolean;
  onClose: () => void;
  startDate: Date | null;
  endDate: Date | null;
  onDateChange: (dates: [Date: Date | null, Date: Date | null]) => void;
  time: string | null;
  onTimeChange: (time: string) => void;
  guests: { adults: number; children: number; infants: number };
  onGuestsChange: (type: string, count: number) => void;
}

const RequestToBookPopover = ({
  status,
  onClose,
  startDate,
  endDate,
  onDateChange,
  time,
  onTimeChange,
  guests,
  onGuestsChange,
}: RequestToBookPopoverTypes) => {
  const { width } = useViewport();
  const { setGlobalOverflow } = useContext(OverflowContext);
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [showTimePicker, setShowTimePicker] = useState<boolean>(false);
  const [showGuestsPicker, setShowGuestsPicker] = useState<boolean>(false);

  return (
    <>
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
              className="fixed bottom-0 z-10 w-full md:w-11/12 lg:relative lg:max-w-[550px]"
            >
              <div className="relative overflow-hidden rounded-tl-lg rounded-tr-lg bg-white md:rounded-lg md:shadow-xl">
                <div className="flex h-12 items-center justify-center border-b border-b-[#E8E8E8] md:h-14">
                  <button
                    type="button"
                    className="group absolute right-4 top-2 p-2 md:top-3"
                    onClick={() => {
                      onClose();
                      setGlobalOverflow(false);
                    }}
                  >
                    <div className="svg_icon w-4 text-[#BCBCBC] group-hover:text-[#000]">
                      <CloseIcon />
                    </div>
                  </button>
                  <h4 className="text-center text-lg font-bold text-black">
                    Request To Book
                  </h4>
                </div>

                <div
                  className="custom_scrollbar overflow-y-auto bg-white px-6 pb-6 pt-5 md:max-h-[90vh]"
                  style={{
                    height: width < 1064 ? window.innerHeight - 60 : 'auto',
                  }}
                >
                  <div>
                    <div className="flex border-b border-b-[#E8E8E8] pb-5">
                      <div className="mr-5 h-20 w-20 overflow-hidden rounded-full bg-gray-200">
                        <Image src="/author-head.png" width={80} height={80} />
                      </div>
                      <div className="text-xs md:text-sm">
                        <h3 className="text-[20px] font-bold text-[#EE1898]">
                          Hello!
                        </h3>
                        <p className="py-2">
                          Thanks for getting in touch.
                          <br />
                          Let’s Personalize your experience
                        </p>
                        {/* <button
                          type="button"
                          className="text-left font-bold text-pink_primary hover:text-purple-700"
                        >
                          Or just ask me a question &gt;
                        </button> */}
                      </div>
                    </div>
                    <div className="pt-5 pb-4">
                      Suggest suitable days & time
                    </div>
                    <div className="flex flex-wrap justify-between md:gap-y-5">
                      <div className="relative w-full md:mt-0 md:w-[48%]">
                        <button
                          type="button"
                          className="w-full rounded-lg border-2 border-[#E8E8E8] p-2 pl-9 text-left text-base focus:border-transparent focus:outline-none focus:ring-2 focus:ring-pink_primary md:text-sm"
                          onClick={() => setShowDatePicker(!showDatePicker)}
                        >
                          <span className="svg_icon absolute top-3 left-3 flex w-4 text-gray-500 md:top-[11px]">
                            <CalendarIcon />
                          </span>
                          {startDate ? formatDayMonth(startDate) : 'Date'}
                          {endDate && ` - ${formatDayMonth(endDate)}`}
                          <span className="svg_icon absolute top-[14px] right-3 flex w-4 rotate-90 transform text-gray-500 md:top-[11px]">
                            <ArrowDownIcon />
                          </span>
                        </button>
                      </div>
                      <div className="relative mt-5 w-full md:mt-0 md:w-[48%]">
                        <button
                          type="button"
                          className="w-full rounded-lg border-2 border-[#E8E8E8] p-2 pl-9 text-left text-base focus:border-transparent focus:outline-none focus:ring-2 focus:ring-pink_primary md:text-sm"
                          onClick={() => setShowTimePicker(!showTimePicker)}
                        >
                          <span className="svg_icon absolute top-3 left-3 flex w-4 text-transparent md:top-[11px]">
                            <ClockIcon />
                          </span>
                          {time || '9:00 AM'}
                          <span className="svg_icon absolute top-[14px] right-3 flex w-4 rotate-90 transform text-gray-500 md:top-[11px]">
                            <ArrowDownIcon />
                          </span>
                        </button>
                      </div>

                      <div className="relative mt-5 w-full md:mt-0">
                        <button
                          type="button"
                          className="w-full rounded-lg border-2 border-[#E8E8E8] p-2 pl-9 text-left text-base focus:border-transparent focus:outline-none focus:ring-2 focus:ring-pink_primary md:text-sm"
                          onClick={() => setShowGuestsPicker(!showGuestsPicker)}
                        >
                          <span className="svg_icon absolute top-3 left-3 flex w-4 text-gray-500 md:top-[11px]">
                            <UserIcon />
                          </span>
                          {guests.adults + guests.children + guests.infants}{' '}
                          Guests
                          <span
                            className={`svg_icon absolute top-[14px] right-3 flex w-4 transform text-gray-500 md:top-[11px] ${
                              showGuestsPicker ? 'rotate-[270deg]' : 'rotate-90'
                            }`}
                          >
                            <ArrowDownIcon />
                          </span>
                        </button>
                        {showGuestsPicker &&
                          (width > 1063 ? (
                            <div className="absolute top-12 w-full rounded-lg border-2 border-[#E8E8E8] bg-white px-5 pb-5">
                              <GuestsPopover
                                guests={guests}
                                onChange={(type: string, count: number) => {
                                  onGuestsChange(type, count);
                                }}
                              />
                            </div>
                          ) : (
                            <GuestsPopoverMobile
                              status={showGuestsPicker}
                              onClose={() => setShowGuestsPicker(false)}
                              guests={guests}
                              onChange={(type: string, count: number) => {
                                onGuestsChange(type, count);
                              }}
                            />
                          ))}
                      </div>
                    </div>
                    <div className="pt-5">
                      <p className="mb-5">
                        Is there anything you’d like me to customise for your
                        exprience
                      </p>
                      <textarea
                        name="contact-text"
                        rows={7}
                        placeholder="Hi! Would it be possible to have an extended virtual tour with some extra stories about what life is currently like in your city?"
                        className="w-full rounded-lg border-2 border-[#E8E8E8] p-3 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-pink_primary"
                      />
                    </div>
                    <div className="pt-5">
                      <p className="mb-5">With whom will you be joining?</p>
                      <textarea
                        name="contact-text"
                        rows={7}
                        placeholder="Hi! Would it be possible to have an extended virtual tour with some extra stories about what life is currently like in your city?"
                        className="w-full rounded-lg border-2 border-[#E8E8E8] p-3 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-pink_primary"
                      />
                      <button
                        type="submit"
                        className="purple_gradient_bg_light mt-4 w-full rounded-full px-3 py-3 font-bold text-white"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        )}
      </AnimatePresence>
      <RequestToBookCalenderPopover
        status={showDatePicker}
        onClose={() => setShowDatePicker(false)}
        startDate={startDate}
        endDate={endDate}
        onDateChange={onDateChange}
      />

      <RequestToBookTimePopover
        status={showTimePicker}
        onClose={() => setShowTimePicker(false)}
        time={time}
        onTimeChange={onTimeChange}
      />
    </>
  );
};
export default RequestToBookPopover;
