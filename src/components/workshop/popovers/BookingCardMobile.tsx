/* eslint react/jsx-one-expression-per-line: "off" */
/* eslint jsx-a11y/label-has-associated-control: "off" */
/* eslint implicit-arrow-linebreak: "off" */
import { useState, useContext } from 'react';
import Image from 'next/image';
import { Dialog } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { formatDate } from '../../../utilities/helpers';
import { OverflowContext } from '../../../context/overflowContext';
import { MobileBookingContext } from '../../../context/mobileBookingContext';

import BookInfoPopups from './BookInfoPopups';
import ReportPopup from '../../common/popups/report-popups/ReportPopup';
import BookingCalendarMobile from './BookingCalendarMobile';
import GuestsPopoverMobile from './GuestsPopoverMobile';
import OtherServicesPopover from './OtherServicesPopover';
import PriceBreakdownPopover from './PriceBreakdownPopover';
import PersonalizeExperiencePopover from './PersonalizeExpPopover';
import RequestToBookPopover from './RequestToBookPopover';

import StarIcon from '../../../../public/icons/star.svg';
import QuestionMarkIcon from '../../../../public/icons/question-mark.svg';
import FlagIcon from '../../../../public/icons/purple-flag.svg';
import UserIcon from '../../../../public/icons/user-outline.svg';
import ChevronIcon from '../../../../public/icons/chevron-down.svg';
import CloseIcon from '../../../../public/icons/xmark.svg';

const BookingCardMobile = () => {
  const { setGlobalOverflow } = useContext(OverflowContext);
  const [openPopup, setOpenPopup] = useState<boolean>(false);
  const [openReport, setOpenReport] = useState<boolean>(false);
  const [openPriceBreakdown, setOpenPriceBreakdown] = useState<boolean>(false);
  const [openPersonalizedExperience, setOpenPersonalizedExperience] =
    useState<boolean>(false);
  const [openRequestToBook, setOpenRequestToBook] = useState<boolean>(false);
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [showMoreServices, setShowMoreServices] = useState<boolean>(false);
  const [showGuests, setShowGuests] = useState<boolean>(false);
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  const [clickedDate, setClickedDate] = useState<string>('');
  const { showMobileBooking, setShowMobileBooking } =
    useContext(MobileBookingContext);

  const [bookingDate, setBookingDate] = useState<Date | null>(new Date());
  const [bookingTime, setBookingTime] = useState<string>('10:00 pm');

  const [guestsCount, setGuestsCount] = useState<{
    adults: number;
    children: number;
    infants: number;
  }>({
    adults: 2,
    children: 0,
    infants: 0,
  });

  const handleGuestCount = (type: string, count: number) => {
    if (type === 'adults') {
      setGuestsCount({ ...guestsCount, adults: count });
    } else if (type === 'children') {
      setGuestsCount({ ...guestsCount, children: count });
    } else if (type === 'infants') {
      setGuestsCount({ ...guestsCount, infants: count });
    }
  };

  return (
    <>
      <div className="fixed bottom-0 left-0 z-[20] w-full border-t border-t-slate-200 bg-white">
        <div className="container">
          <div className="flex items-center justify-between py-3 text-lg">
            <div>
              <div className="font-semibold">
                $458 <span className="text-sm font-medium">night</span>
              </div>
              <div className="flex items-center">
                <div className="svg_icon mr-1 w-[13px] shrink-0">
                  <StarIcon />
                </div>
                <span className="mr-2">4.6</span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => {
                setShowMobileBooking(true);
                setGlobalOverflow(true);
              }}
              className="rounded-lg bg-pink_primary py-3 px-4 text-sm font-semibold text-white transition duration-300 hover:bg-[#A96AD8]"
            >
              Reserve
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {showMobileBooking && (
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
            open={showMobileBooking}
            onClose={() => setShowMobileBooking(false)}
            className="fixed inset-0 z-30"
          >
            <Dialog.Overlay
              onClick={() => {
                setGlobalOverflow(false);
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
              className="fixed bottom-0 z-10 w-full"
            >
              <div className="relative rounded-tl-lg rounded-tr-lg bg-white md:rounded-lg md:shadow-xl">
                <div className="flex h-12 items-center justify-center border-b border-b-[#E8E8E8] md:h-14">
                  <button
                    type="button"
                    className="group absolute right-4 top-2 p-2 md:top-3"
                    onClick={() => {
                      setShowMobileBooking(false);
                      setGlobalOverflow(false);
                    }}
                  >
                    <div className="svg_icon w-4 text-[#BCBCBC] group-hover:text-[#000]">
                      <CloseIcon />
                    </div>
                  </button>
                </div>
                <div
                  className="custom_scrollbar overflow-y-auto bg-white px-6 pb-6 pt-3 md:max-h-[70vh]"
                  style={{
                    height: window.innerHeight - 125,
                  }}
                >
                  <div className="booking-card mb-5 w-full rounded-[20px]">
                    <h3 className="mb-2 text-center text-xl font-bold leading-snug xl:mt-6 xl:mb-3 xl:text-2xl">
                      The Best of Berling in a Convertible Car
                    </h3>
                    <div className="flex items-center justify-center text-center text-lg">
                      <span className="mr-3">Hosted by</span>
                      <Image src="/miha.png" width={51} height={22} />
                    </div>
                    <div className="mt-3 mb-5 flex items-center justify-center text-center text-sm">
                      <div className="font-semibold">
                        From $45 <span className="line-through">$567</span> /
                        night
                      </div>
                      <div className="ml-3 flex items-center">
                        <div className="svg_icon mr-1 w-[13px] shrink-0">
                          <StarIcon />
                        </div>
                        <span className="mr-2">4.6</span>
                        <span className="underline">(25)reviews</span>
                      </div>
                    </div>
                    <div className="relative rounded-lg border border-[#808080]">
                      <div className="flex border-b border-b-[#808080]">
                        <button
                          type="button"
                          onClick={() => {
                            setClickedDate('start');
                            setShowDatePicker(!showDatePicker);
                          }}
                          className="flex-1 border-r border-r-[#808080] px-4 py-4 text-left text-sm"
                        >
                          <span className="block font-semibold">CHECK-IN</span>
                          <span className="">{formatDate(startDate)}</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setClickedDate('end');
                            setShowDatePicker(!showDatePicker);
                          }}
                          className="flex-1 px-4 py-4 text-left text-sm"
                        >
                          <span className="block font-semibold">CHECK-OUT</span>
                          <span className="">{formatDate(endDate)}</span>
                        </button>

                        <BookingCalendarMobile
                          status={showDatePicker}
                          onClose={() => setShowDatePicker(false)}
                          startDate={startDate}
                          endDate={endDate}
                          clickedDate={clickedDate}
                          onStartDateChange={(date) => {
                            setClickedDate('end');
                            setStartDate(date);
                          }}
                          onEndDateChange={(date) => {
                            setEndDate(date);
                            setShowDatePicker(false);
                          }}
                          onClickedDateChange={(type) => setClickedDate(type)}
                        />
                      </div>
                      <div className="relative flex px-4 py-3">
                        <button
                          type="button"
                          onClick={() => setShowGuests(!showGuests)}
                          className="flex flex-1 items-center justify-between text-left text-sm"
                        >
                          <div>
                            <span className="font-semibold">GUESTS</span>
                            <div className="mt-1 flex items-center">
                              <div className="svg_icon w-4">
                                <UserIcon />
                              </div>
                              <span className="ml-2">
                                {guestsCount.adults +
                                  guestsCount.children +
                                  guestsCount.infants}{' '}
                                guests
                              </span>
                            </div>
                          </div>
                          <div
                            className={`svg_icon w-4 transform text-transparent ${
                              showGuests ? 'rotate-180' : ''
                            }`}
                          >
                            <ChevronIcon />
                          </div>
                        </button>

                        <GuestsPopoverMobile
                          status={showGuests}
                          onClose={() => setShowGuests(false)}
                          guests={guestsCount}
                          onChange={(type: string, count: number) => {
                            handleGuestCount(type, count);
                          }}
                        />
                      </div>
                    </div>
                    <div className="mt-4 mb-3">
                      <div className="flex items-center">
                        <div className="text-base font-semibold">
                          Book for Private Group
                        </div>
                        <button
                          type="button"
                          className="svg_icon ml-2 w-[14px] rounded-full bg-black text-white"
                          onClick={() => setOpenPopup(true)}
                        >
                          <QuestionMarkIcon />
                        </button>
                        <label className="switch ml-auto">
                          <input type="checkbox" />
                          <span className="slider round" />
                        </label>
                        <BookInfoPopups
                          status={openPopup}
                          onClose={() => setOpenPopup(false)}
                        />
                      </div>
                    </div>
                    <p className="text-center text-sm">
                      You won’t be charged yet
                    </p>
                    <div className="border-b border-b-[#DBDBDB] pt-3 pb-3 text-base text-[#4A4A4A]">
                      <div className="mb-3 flex justify-between">
                        <div className="underline">$315 x nights</div>
                        <div>$2,203</div>
                      </div>
                      <div className="flex justify-between">
                        <div className="underline">
                          Service fee{' '}
                          <button
                            type="button"
                            className="svg_icon ml-2 w-[14px] rounded-full"
                            onClick={() => setOpenPriceBreakdown(true)}
                          >
                            <QuestionMarkIcon />
                          </button>
                          <PriceBreakdownPopover
                            status={openPriceBreakdown}
                            onClose={() => setOpenPriceBreakdown(false)}
                          />
                        </div>
                        <div>$203</div>
                      </div>
                    </div>
                    <div className="flex justify-between pt-2 text-base font-semibold text-[#222222]">
                      <div>Total before taxes</div>
                      <div>$2,203</div>
                    </div>

                    <div className="mt-3 text-center">
                      <button
                        type="button"
                        className="mx-auto flex items-center text-xs font-semibold text-[#222222]"
                        onClick={() => setOpenReport(true)}
                      >
                        <div className="svg_icon mr-2 w-[12px]">
                          <FlagIcon />
                        </div>
                        <div className="underline">Report this listings</div>
                      </button>
                      <ReportPopup
                        status={openReport}
                        onClose={() => {
                          setOpenReport(false);
                        }}
                      />
                      <button
                        type="button"
                        onClick={() => setOpenPersonalizedExperience(true)}
                        className="mt-3 rounded-full border-2 border-pink_primary px-5 py-[6px] text-xs text-pink_primary"
                      >
                        Contact me to customize this to your needs
                      </button>
                      <PersonalizeExperiencePopover
                        status={openPersonalizedExperience}
                        onClose={() => setOpenPersonalizedExperience(false)}
                        date={bookingDate}
                        time={bookingTime}
                        onDateChange={(date: Date | null) => {
                          setBookingDate(date);
                        }}
                        onTimeChange={(time: string) => setBookingTime(time)}
                        guests={guestsCount}
                        onGuestsChange={(type: string, count: number) => {
                          handleGuestCount(type, count);
                        }}
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setShowMoreServices(true);
                    }}
                    className="relative z-0 w-full pb-10 text-sm"
                  >
                    <div className="z-50 w-full rounded-xl border-b-4 border-[#fff] bg-[#002390] py-3 text-center text-[#fff] ">
                      View All My Service
                    </div>
                    <div className="absolute left-0 top-10 -z-10 w-full rounded-xl border-[#fff] bg-[#23B4ED] py-3 text-center text-[#fff] ">
                      Total 10 Services
                    </div>
                  </button>
                  <OtherServicesPopover
                    status={showMoreServices}
                    onClose={() => {
                      setShowMoreServices(false);
                    }}
                  />
                </div>
                <div className="border-t border-t-[#EAEAEA] px-5 py-3">
                  <button
                    type="button"
                    className="w-full rounded-lg bg-pink_primary py-[10px] px-4 text-sm font-semibold text-white transition duration-300 hover:bg-[#A96AD8]"
                    onClick={() => setOpenRequestToBook(true)}
                  >
                    Request To Book
                  </button>
                  <RequestToBookPopover
                    status={openRequestToBook}
                    onClose={() => setOpenRequestToBook(false)}
                    date={bookingDate}
                    time={bookingTime}
                    onDateChange={(date: Date | null) => setBookingDate(date)}
                    onTimeChange={(time: string) => setBookingTime(time)}
                    guests={guestsCount}
                    onGuestsChange={(type: string, count: number) => {
                      handleGuestCount(type, count);
                    }}
                  />
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
};
export default BookingCardMobile;
