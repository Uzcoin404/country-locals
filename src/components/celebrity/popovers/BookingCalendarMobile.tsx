/* eslint react/jsx-one-expression-per-line: "off" */
/* eslint @next/next/no-img-element: "off" */
/* eslint jsx-a11y/label-has-associated-control: "off" */
import { useContext } from 'react';
import { Dialog } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';
import DatePicker from 'react-datepicker';
import { formatDayMonth } from '../../../utilities/helpers';
import { OverflowContext } from '../../../context/overflowContext';

import 'react-datepicker/dist/react-datepicker.css';

import StarIcon from '../../../../public/icons/star.svg';
import CloseIcon from '../../../../public/icons/xmark.svg';

interface BookingCalendarMobileTypes {
  status: boolean;
  onClose: () => void;
  startDate: Date | null;
  endDate: Date | null;
  onDateChange: (dates: [Date: Date, Date: Date]) => void;
}

const BookingCalendarMobile = ({
  status,
  onClose,
  startDate,
  endDate,
  onDateChange,
}: BookingCalendarMobileTypes) => {
  const { setGlobalOverflow } = useContext(OverflowContext);

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
                    onClose();
                    setGlobalOverflow(false);
                  }}
                >
                  <div className="svg_icon w-4 text-[#BCBCBC] group-hover:text-[#000]">
                    <CloseIcon />
                  </div>
                </button>
                <h4 className="text-center text-lg font-bold text-black">
                  Date
                </h4>
              </div>
              <div
                className="custom_scrollbar overflow-y-auto bg-white px-6 pb-6 pt-3 md:max-h-[70vh]"
                style={{
                  height: window.innerHeight - 140,
                }}
              >
                <div className="rounded-2xl bg-white">
                  <div className="flex justify-between">
                    <div className="w-full">
                      {startDate ? formatDayMonth(startDate) : 'Date'}
                      {endDate && ` - ${formatDayMonth(endDate)}`}
                    </div>
                  </div>
                  <div className="booking_calendar mt-5 mb-4">
                    <DatePicker
                      selected={startDate}
                      onChange={onDateChange}
                      startDate={startDate}
                      endDate={endDate}
                      minDate={new Date()}
                      monthsShown={2}
                      selectsRange
                      inline
                      isClearable
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-t-[#EAEAEA] px-5 py-3 md:py-3">
                <div className="text-lg">
                  <div className="font-semibold">
                    <span className="text-sm font-medium">From</span> $458
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
                    onClose();
                    setGlobalOverflow(true);
                  }}
                  className="rounded-full bg-[#E71575] px-8 py-2 text-sm font-semibold text-white"
                >
                  Save
                </button>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      )}
    </AnimatePresence>
  );
};
export default BookingCalendarMobile;
