/* eslint react/jsx-one-expression-per-line: "off" */
/* eslint @next/next/no-img-element: "off" */
/* eslint jsx-a11y/label-has-associated-control: "off" */
/* eslint max-len: "off" */
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import TimeKeeper from 'react-timekeeper';
import Sticky from 'react-stickynode';
import { formatDayMonth } from '../../utilities/helpers';

import ReportPopup from '../common/popups/report-popups/ReportPopup';
import BookInfoPopups from './popovers/BookInfoPopup';
import GuestsPopover from './popovers/GuestsPopover';
import OtherServicesPopover from './popovers/OtherServicesPopover';
import PersonalizeExperiencePopover from './popovers/PersonalizeExpPopover';
import RequestToBookPopover from './popovers/RequestToBookPopover';

import 'react-datepicker/dist/react-datepicker.css';

import CalendarEditIcon from '../../../public/icons/calendar-edit.svg';
import CalendarIcon from '../../../public/icons/calendar-tick.svg';
import VoiceIcon from '../../../public/icons/call-calling.svg';
import CheckmarkIcon from '../../../public/icons/check-lg.svg';
import ArrowDownIcon from '../../../public/icons/chevron-right.svg';
import ClockIcon from '../../../public/icons/clock-1.svg';
import FlagIcon from '../../../public/icons/flag-2.svg';
import InstagramIcon from '../../../public/icons/instagram-2.svg';
import PeopleIcon from '../../../public/icons/people.svg';
import QuestionMarkIcon from '../../../public/icons/question-mark-2.svg';
import TagIcon from '../../../public/icons/tag-2.svg';
import UndoIcon from '../../../public/icons/undo.svg';
import UserIcon from '../../../public/icons/user-outline.svg';
import VideoIcon from '../../../public/icons/video.svg';

const BookingCard = () => {
  const [tabs, setTabs] = useState([
    { id: 1, title: 'Video Message', icon: <VideoIcon />, active: true },
    { id: 2, title: 'DM On Instagram', icon: <InstagramIcon />, active: false },
    { id: 3, title: 'Book Appointment', icon: <CalendarIcon />, active: false },
    { id: 4, title: 'Brand Enquiry', icon: <TagIcon />, active: false },
  ]);

  const [typeTabs, setTypeTabs] = useState([
    { id: 1, title: 'Basic', price: 300, active: true },
    { id: 2, title: 'Standard', price: 400, active: false },
    { id: 3, title: 'Premium', price: 500, active: false },
  ]);

  const [bookMode, setBookMode] = useState([
    { id: 1, title: 'Video Call', icon: <VideoIcon />, active: false },
    { id: 2, title: 'Voice Call', icon: <VoiceIcon />, active: false },
    { id: 3, title: 'Meeting', icon: <PeopleIcon />, active: false },
  ]);

  const [bookDuration, setBookDuration] = useState([
    { id: 1, title: '15 Min', active: false },
    { id: 2, title: '30 Min', active: false },
    { id: 3, title: '45 Min', active: false },
    { id: 4, title: '60 Min', active: false },
  ]);

  const [plans, setPlans] = useState([
    { id: 1, title: 'Corporate Events', active: false },
    { id: 2, title: 'Studio Shoot', active: false },
    { id: 3, title: 'Brand Video', active: false },
    { id: 4, title: 'Star Hour', active: false },
    { id: 5, title: 'Experiences', active: false },
    { id: 6, title: 'Photo Shoot', active: false },
  ]);

  const [openPopup, setOpenPopup] = useState<boolean>(false);
  const [openReport, setOpenReport] = useState<boolean>(false);
  const [openPersonalizedExperience, setOpenPersonalizedExperience] =
    useState<boolean>(false);
  const [openRequestToBook, setOpenRequestToBook] = useState<boolean>(false);
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [showTimePicker, setShowTimePicker] = useState<boolean>(false);
  const [bookingTime, setBookingTime] = useState<string | null>(null);
  const [showGuests, setShowGuests] = useState<boolean>(false);
  const [showMoreServices, setShowMoreServices] = useState<boolean>(false);

  const [guestsCount, setGuestsCount] = useState<{
    adults: number;
    children: number;
    infants: number;
  }>({
    adults: 2,
    children: 0,
    infants: 0,
  });

  const handleDateChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const handleTabChange = (id: number) => {
    const newTabs = tabs.map((tab) => {
      if (tab.id === id) {
        return { ...tab, active: true };
      }
      return { ...tab, active: false };
    });
    setTabs(newTabs);
  };

  const getActiveTabId = () => {
    const activeTab = tabs.find((tab) => tab.active);
    return activeTab?.id;
  };

  const getActiveTypeTabTitle = () => {
    const activeTab = tabs.find((tab) => tab.active);
    return activeTab?.title;
  };

  const getActiveTypeTabPrice = () => {
    const activeTab = typeTabs.find((tab) => tab.active);
    return activeTab?.price;
  };

  const handleTypeChange = (id: number) => {
    const newType = typeTabs.map((tab) => {
      if (tab.id === id) {
        return { ...tab, active: true };
      }
      return { ...tab, active: false };
    });
    setTypeTabs(newType);
  };

  const handleModeChange = (id: number) => {
    const newMode = bookMode.map((mode) => {
      if (mode.id === id) {
        return { ...mode, active: true };
      }
      return { ...mode, active: false };
    });
    setBookMode(newMode);
  };

  const handleDurationChange = (id: number) => {
    const newDuration = bookDuration.map((duration) => {
      if (duration.id === id) {
        return { ...duration, active: true };
      }
      return { ...duration, active: false };
    });
    setBookDuration(newDuration);
  };

  const handlePlanChange = (id: number) => {
    const newPlan = plans.map((plan) => {
      if (plan.id === id) {
        return { ...plan, active: true };
      }
      return { ...plan, active: false };
    });
    setPlans(newPlan);
  };

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
    <Sticky top={15} bottomBoundary=".sticky_bottom_container">
      <div className="booking-card-wrapper h-full transition-opacity duration-100">
        <div className="booking-card mb-3 w-full rounded-[20px] border border-[#ebebeb] bg-white p-3 shadow-small xl:p-6">
          <div className="flex flex-wrap justify-between gap-y-3">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`w-[48%] rounded-2xl border-2 border-[#ebebeb] p-3 text-left ${
                  tab.active
                    ? 'purple_orange_bg border-[#303030] text-white'
                    : 'bg-[#F5F5F5] text-[#9C9C9C]'
                }`}
                onClick={() => handleTabChange(tab.id)}
              >
                <div className="svg_icon w-6">{tab.icon}</div>
                <p className="pt-1 text-[13px] font-bold">{tab.title}</p>
              </button>
            ))}
          </div>

          <div className="services-packages-tab mt-5 flex items-center justify-between rounded-full border border-[#F4F3F4] bg-white p-[5px] text-xs lg:text-sm">
            {typeTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`${
                  tab.active ? 'active text-white' : 'text-[#272731]'
                } relative h-[34px] w-full rounded-full px-1 text-center text-sm font-bold lg:h-[40px] lg:px-3`}
                onClick={() => handleTypeChange(tab.id)}
              >
                <span className="ease relative z-[2] transition duration-300">
                  {tab.title}
                </span>
              </button>
            ))}
          </div>

          <div className="pt-4">
            <div className="flex items-center justify-between font-bold text-black">
              <span>{getActiveTypeTabTitle()}</span>
              <span>${getActiveTypeTabPrice()}</span>
            </div>
            <p className="pt-3 pb-4 text-[13px]">
              Web application consist of 2-4 database table and also 2-4 web
              page.
            </p>

            <div className="flex items-center gap-x-7 text-[#70757A]">
              <div className="flex items-center text-xs">
                <div className="svg_icon mr-2 w-4">
                  <ClockIcon />
                </div>
                5 Week
              </div>
              <div className="mt-[1px] flex items-center text-xs">
                <div className="svg_icon mr-2 -mt-[1px] w-3">
                  <UndoIcon />
                </div>
                <div>1 Revision</div>
              </div>
            </div>
            <div className="mt-2 flex items-center text-xs text-[#BEBEBE]">
              <div className="svg_icon mr-2 w-4 text-[#8796A0]">
                <CheckmarkIcon />
              </div>
              4k ultra HD
            </div>
            <div className="mt-2 mb-4 flex items-center text-xs text-[#EF5DA8]">
              <div className="svg_icon mr-2 w-4">
                <CheckmarkIcon />
              </div>
              30 Seconds running time
            </div>

            {getActiveTabId() === 3 && (
              <>
                <div className="border-1 mb-4 rounded-lg border-[#EF5DA8] bg-[#FDEFF6] px-4 py-[10px] text-xs font-bold text-[#EF5DA8]">
                  Whats Included
                </div>
                <div className="relative rounded-lg border border-[#DFDFDF]">
                  <div className="flex">
                    <button
                      type="button"
                      onClick={() => {
                        setShowTimePicker(false);
                        setShowGuests(false);
                        setShowDatePicker(true);
                      }}
                      className="flex flex-1 items-center justify-between border-r border-r-[#DFDFDF] px-4 py-4 text-left text-xs"
                    >
                      <div className="flex items-center">
                        <span className="svg_icon mr-2 block w-5 text-transparent">
                          <CalendarEditIcon />
                        </span>
                        <span>
                          {startDate ? formatDayMonth(startDate) : 'Date'}
                          {endDate && ` - ${formatDayMonth(endDate)}`}
                        </span>
                      </div>
                      <span className="svg_icon flex w-4 rotate-90 transform text-[#C4C4C4]">
                        <ArrowDownIcon />
                      </span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setShowDatePicker(false);
                        setShowGuests(false);
                        setShowTimePicker(true);
                      }}
                      className="flex flex-1 items-center justify-between px-4 py-4 text-left text-xs"
                    >
                      <div className="flex items-center">
                        <span className="svg_icon mr-2 block w-5 text-transparent">
                          <ClockIcon />
                        </span>
                        <span>{bookingTime || 'Time'}</span>
                      </div>
                      <span className="svg_icon flex w-4 rotate-90 transform text-[#C4C4C4]">
                        <ArrowDownIcon />
                      </span>
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setShowDatePicker(false);
                      setShowTimePicker(false);
                      setShowGuests(true);
                    }}
                    className="flex w-full flex-1 items-center justify-between border-t border-[#DFDFDF] px-4 py-4 text-left text-xs"
                  >
                    <div className="flex items-center">
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
                    <div
                      className={`svg_icon flex w-4 rotate-90 transform text-[#C4C4C4] ${
                        showGuests ? 'rotate-180' : ''
                      }`}
                    >
                      <ArrowDownIcon />
                    </div>
                  </button>

                  {showDatePicker && (
                    <div className="absolute -top-[40px] -right-[40px] z-[11] w-[660px] rounded-2xl bg-white p-10 shadow-spread">
                      <div className="flex items-center justify-between">
                        <div className="">
                          <h4 className="text-lg font-semibold">Add Dates</h4>
                        </div>
                        <div className="w-[280px] rounded-lg border border-[#666] xl:w-[350px]">
                          <div className="flex overflow-hidden">
                            <button
                              type="button"
                              onClick={() => {
                                setShowTimePicker(false);
                                setShowGuests(false);
                                setShowDatePicker(true);
                              }}
                              className={`flex h-[50px] flex-1 items-center justify-between rounded-lg px-4 text-left text-xs ${
                                showDatePicker &&
                                'border-b-1 rounded-bl-none border border-r-2 border-[#666]'
                              }`}
                            >
                              <div className="flex items-center">
                                <span className="svg_icon mr-2 block w-5 text-transparent">
                                  <CalendarEditIcon />
                                </span>
                                <span>
                                  {startDate
                                    ? formatDayMonth(startDate)
                                    : 'Date'}
                                  {endDate && ` - ${formatDayMonth(endDate)}`}
                                </span>
                              </div>
                              <span className="svg_icon flex w-4 -rotate-90 transform text-[#C4C4C4]">
                                <ArrowDownIcon />
                              </span>
                            </button>
                            <button
                              type="button"
                              onClick={() => {
                                setShowDatePicker(false);
                                setShowGuests(false);
                                setShowTimePicker(true);
                              }}
                              className="flex h-[50px] flex-1 items-center justify-between rounded-lg px-4 text-left text-xs"
                            >
                              <div className="flex items-center">
                                <span className="svg_icon mr-2 block w-5 text-transparent">
                                  <ClockIcon />
                                </span>
                                <span>{bookingTime || 'Time'}</span>
                              </div>
                              <span className="svg_icon flex w-4 rotate-90 transform text-[#C4C4C4]">
                                <ArrowDownIcon />
                              </span>
                            </button>
                          </div>
                          <button
                            type="button"
                            onClick={() => {
                              setShowDatePicker(false);
                              setShowTimePicker(false);
                              setShowGuests(true);
                            }}
                            className="flex h-[50px] w-full flex-1 items-center justify-between border-t border-[#666] px-4 text-left text-xs"
                          >
                            <div className="flex items-center">
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
                            <div className="svg_icon flex w-4 rotate-90 transform text-[#C4C4C4]">
                              <ArrowDownIcon />
                            </div>
                          </button>
                        </div>
                      </div>
                      <div className="booking_calendar mt-8 mb-4">
                        <DatePicker
                          selected={startDate}
                          onChange={handleDateChange}
                          startDate={startDate}
                          endDate={endDate}
                          minDate={new Date()}
                          monthsShown={2}
                          selectsRange
                          inline
                          isClearable
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <button
                          type="button"
                          onClick={() => {
                            setStartDate(null);
                            setEndDate(null);
                          }}
                          className="text-xs underline"
                        >
                          Clear dates
                        </button>
                        <button
                          type="button"
                          onClick={() => setShowDatePicker(false)}
                          className="rounded-lg bg-[#222] px-5 py-2 text-xs text-white"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  )}

                  {showTimePicker && (
                    <div className="absolute -top-[40px] -right-[40px] z-[11] w-[430px] rounded-2xl bg-white p-10 shadow-spread">
                      <div className="flex items-center justify-between">
                        <div className="" />
                        <div className="w-[280px] rounded-lg border border-[#666] xl:w-[350px]">
                          <div className="flex overflow-hidden">
                            <button
                              type="button"
                              onClick={() => {
                                setShowGuests(false);
                                setShowTimePicker(false);
                                setShowDatePicker(true);
                              }}
                              className={`flex h-[50px] flex-1 items-center justify-between rounded-lg px-4 text-left text-xs ${
                                showDatePicker &&
                                'border-b-1 rounded-bl-none border border-r-2 border-[#666]'
                              }`}
                            >
                              <div className="flex items-center">
                                <span className="svg_icon mr-2 block w-5 text-transparent">
                                  <CalendarEditIcon />
                                </span>
                                <span>
                                  {startDate
                                    ? formatDayMonth(startDate)
                                    : 'Date'}
                                  {endDate && ` - ${formatDayMonth(endDate)}`}
                                </span>
                              </div>
                              <span className="svg_icon flex w-4 rotate-90 transform text-[#C4C4C4]">
                                <ArrowDownIcon />
                              </span>
                            </button>
                            <button
                              type="button"
                              onClick={() => {
                                setShowGuests(false);
                                setShowDatePicker(false);
                                setShowTimePicker(true);
                              }}
                              className={`flex h-[50px] flex-1 items-center justify-between rounded-lg px-4 text-left text-xs ${
                                showTimePicker &&
                                'border-b-1 rounded-br-none border border-l-2 border-[#666]'
                              }`}
                            >
                              <div className="flex items-center">
                                <span className="svg_icon mr-2 block w-5 text-transparent">
                                  <ClockIcon />
                                </span>
                                <span>{bookingTime || 'Time'}</span>
                              </div>
                              <span className="svg_icon flex w-4 rotate-90 transform text-[#C4C4C4]">
                                <ArrowDownIcon />
                              </span>
                            </button>
                          </div>
                          <button
                            type="button"
                            onClick={() => {
                              setShowDatePicker(false);
                              setShowTimePicker(false);
                              setShowGuests(true);
                            }}
                            className="flex h-[50px] w-full flex-1 items-center justify-between border-t border-[#666] px-4 text-left text-xs"
                          >
                            <div className="flex items-center">
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
                            <div
                              className={`svg_icon flex w-4 rotate-90 transform text-[#C4C4C4] ${
                                showGuests ? 'rotate-180' : ''
                              }`}
                            >
                              <ArrowDownIcon />
                            </div>
                          </button>
                        </div>
                      </div>
                      <div className="booking_time ml-auto mt-4 mb-4 w-[280px] text-center xl:w-[344px]">
                        <TimeKeeper
                          time={bookingTime}
                          switchToMinuteOnHourSelect
                          onChange={(updatedTime) => {
                            setBookingTime(updatedTime.formatted12);
                          }}
                        />
                      </div>
                      <div className="flex items-center justify-end">
                        <button
                          type="button"
                          onClick={() => setShowTimePicker(false)}
                          className="rounded-lg bg-[#222] px-5 py-2 text-xs text-white"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  )}

                  {showGuests && (
                    <div className="absolute -top-[40px] -right-[40px] z-[11] w-[430px] rounded-2xl bg-white p-10 shadow-spread">
                      <div className="flex items-center justify-between">
                        <div />
                        <div className="w-[280px] rounded-lg border border-[#666] xl:w-[350px]">
                          <div className="flex overflow-hidden">
                            <button
                              type="button"
                              onClick={() => {
                                setShowGuests(false);
                                setShowTimePicker(false);
                                setShowDatePicker(true);
                              }}
                              className="flex h-[50px] flex-1 items-center justify-between rounded-lg rounded-tr-none rounded-br-none border-r border-r-[#666] px-4 text-left text-xs"
                            >
                              <div className="flex items-center">
                                <span className="svg_icon mr-2 block w-5 text-transparent">
                                  <CalendarEditIcon />
                                </span>
                                <span>
                                  {startDate
                                    ? formatDayMonth(startDate)
                                    : 'Date'}
                                  {endDate && ` - ${formatDayMonth(endDate)}`}
                                </span>
                              </div>
                              <span className="svg_icon flex w-4 rotate-90 transform text-[#C4C4C4]">
                                <ArrowDownIcon />
                              </span>
                            </button>
                            <button
                              type="button"
                              onClick={() => {
                                setShowGuests(false);
                                setShowDatePicker(false);
                                setShowTimePicker(true);
                              }}
                              className="flex h-[50px] flex-1 items-center justify-between rounded-lg px-4 text-left text-xs"
                            >
                              <div className="flex items-center">
                                <span className="svg_icon mr-2 block w-5 text-transparent">
                                  <ClockIcon />
                                </span>
                                <span>{bookingTime || 'Time'}</span>
                              </div>
                              <span className="svg_icon flex w-4 rotate-90 transform text-[#C4C4C4]">
                                <ArrowDownIcon />
                              </span>
                            </button>
                          </div>
                          <button
                            type="button"
                            onClick={() => {
                              setShowDatePicker(false);
                              setShowTimePicker(false);
                              setShowGuests(true);
                            }}
                            className={`flex h-[50px] w-full flex-1 items-center justify-between rounded-lg border-t border-[#666] px-4 text-left text-xs ${
                              showGuests ? 'border border-t-2' : ''
                            }`}
                          >
                            <div className="flex items-center">
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
                            <div className="svg_icon flex w-4 rotate-90 transform text-[#C4C4C4]">
                              <ArrowDownIcon />
                            </div>
                          </button>
                        </div>
                      </div>
                      <div className="ml-auto mt-4 mb-2 w-[280px] xl:w-[350px]">
                        <GuestsPopover
                          guests={guestsCount}
                          onChange={(type: string, count: number) => {
                            handleGuestCount(type, count);
                          }}
                        />
                      </div>
                      <div className="flex items-center justify-end">
                        <button
                          type="button"
                          onClick={() => setShowGuests(false)}
                          className="rounded-lg bg-[#222] px-5 py-2 text-xs text-white"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                <div className="mt-5 mb-6 border-b border-b-[#DFDFDF] pb-4">
                  <div className="flex items-center">
                    <div className="text-sm font-semibold">
                      Book for Private Group
                    </div>
                    <button
                      type="button"
                      className="svg_icon ml-2 w-[14px] rounded-full"
                      onClick={() => setOpenPopup(true)}
                    >
                      <QuestionMarkIcon />
                    </button>
                    <label className="switch ml-auto">
                      <input type="checkbox" />
                      <span className="slider round" />
                    </label>
                  </div>
                </div>

                <div className="pb-4 text-sm font-semibold">Select Mode</div>
                <div className="flex justify-between">
                  {bookMode.map((mode) => (
                    <button
                      key={mode.id}
                      type="button"
                      className={`flex w-[32%] items-end rounded-lg border border-[#EF5DA8] py-2 px-2 text-[13px] ${
                        mode.active
                          ? 'bg-[#EF5DA8] text-white'
                          : 'text-[#EF5DA8]'
                      }`}
                      onClick={() => handleModeChange(mode.id)}
                    >
                      <div className="svg_icon mr-1 w-5 flex-shrink-0">
                        {mode.icon}
                      </div>
                      <span>{mode.title}</span>
                    </button>
                  ))}
                </div>

                <div className="pb-4 pt-5 text-sm font-semibold">
                  Select Duration
                </div>
                <div className="mb-5 flex justify-between">
                  {bookDuration.map((time) => (
                    <button
                      key={time.id}
                      type="button"
                      className={`w-[23.5%] items-end rounded-lg border border-[#EF5DA8] py-2 px-2 text-[13px] ${
                        time.active
                          ? 'bg-[#EF5DA8] text-white'
                          : 'text-[#EF5DA8]'
                      }`}
                      onClick={() => handleDurationChange(time.id)}
                    >
                      <span>{time.title}</span>
                    </button>
                  ))}
                </div>
              </>
            )}

            {getActiveTabId() === 4 && (
              <>
                {/* <div className="border-b border-b-[#DFDFDF] pb-4">
                <div className="flex items-center pb-4 text-sm font-semibold">
                  <span>Choose your Mode</span>
                  <button
                    type="button"
                    className="svg_icon ml-2 w-[14px] rounded-full"
                    onClick={() => setOpenPopup(true)}
                  >
                    <QuestionMarkIcon />
                  </button>
                </div>
                <div className="flex flex-wrap gap-y-5 md:gap-y-2 lg:flex-nowrap">
                  {['Online', 'Physical'].map((day) => (
                    <div
                      key={day}
                      className="flex w-full items-center lg:w-1/3"
                    >
                      <input
                        type="radio"
                        id={day}
                        name="classStarting"
                        className="h-6 w-6 shrink-0 cursor-pointer accent-[#EF5DA8] md:h-[18px] md:w-[18px]"
                      />
                      <label
                        htmlFor={day}
                        className="ml-2 w-full cursor-pointer text-base md:w-auto md:text-[12px]"
                      >
                        {day}
                      </label>
                    </div>
                  ))}
                </div>
              </div> */}

                <div className="pb-4 text-sm font-semibold">
                  Choose your plan
                </div>
                <div className="mb-5 flex flex-wrap gap-2">
                  {plans.map((plan) => (
                    <button
                      key={plan.id}
                      type="button"
                      className={`items-end rounded-lg border border-[#EF5DA8] py-2 px-2 text-[13px] ${
                        plan.active
                          ? 'bg-[#EF5DA8] text-white'
                          : 'text-[#EF5DA8]'
                      }`}
                      onClick={() => handlePlanChange(plan.id)}
                    >
                      <span>{plan.title}</span>
                    </button>
                  ))}
                </div>
              </>
            )}

            <button
              type="button"
              className="purple_gradient_bg_light mb-5 w-full rounded-lg py-[10px] text-sm font-bold text-white transition duration-300"
              onClick={() => setOpenRequestToBook(true)}
            >
              Check Availability
            </button>

            <div className="rounded-lg bg-[#F3F3F3] p-3 text-xs text-[#C0C0C0]">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit
            </div>

            <div className="mt-5 text-center">
              <button
                type="button"
                className="mx-auto flex items-center text-xs font-semibold text-[#222222]"
                onClick={() => setOpenReport(true)}
              >
                <div className="svg_icon mr-1 w-4">
                  <FlagIcon />
                </div>
                <div className="underline">Report this listings</div>
              </button>
              <button
                type="button"
                onClick={() => setOpenPersonalizedExperience(true)}
                className="mt-3 rounded-full border-2 border-pink_primary px-5 py-[6px] text-xs text-pink_primary"
              >
                Contact me to customize this to your needs
              </button>
            </div>
          </div>
        </div>
        <button
          type="button"
          onClick={() => {
            setShowMoreServices(true);
          }}
          className="relative z-0 w-full rounded-lg border border-[#E7E7E7] bg-white p-2"
        >
          <div className="w-full rounded-lg bg-[#374C74] py-3 text-center text-sm font-semibold text-[#fff] hover:bg-[#1F3660]">
            View one-off sessions
          </div>
        </button>

        <ReportPopup
          status={openReport}
          onClose={() => {
            setOpenReport(false);
          }}
        />

        <PersonalizeExperiencePopover
          status={openPersonalizedExperience}
          onClose={() => setOpenPersonalizedExperience(false)}
        />

        <RequestToBookPopover
          status={openRequestToBook}
          onClose={() => setOpenRequestToBook(false)}
          onDateChange={handleDateChange}
          startDate={startDate}
          endDate={endDate}
          time={bookingTime}
          onTimeChange={(time: string) => setBookingTime(time)}
          guests={guestsCount}
          onGuestsChange={(type: string, count: number) => {
            handleGuestCount(type, count);
          }}
        />

        <BookInfoPopups
          status={openPopup}
          onClose={() => setOpenPopup(false)}
        />

        <OtherServicesPopover
          status={showMoreServices}
          onClose={() => {
            setShowMoreServices(false);
          }}
        />
      </div>
    </Sticky>
  );
};
export default BookingCard;
