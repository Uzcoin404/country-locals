/* eslint-disable @typescript-eslint/ban-ts-comment */
import DatePicker from 'react-datepicker';
import { addDays, format } from 'date-fns';
import { Tab } from '@headlessui/react';
import { useState, Fragment } from 'react';
// @ts-ignore
import { DateRangePicker, Calendar } from 'react-date-range';
import { Calendar as CalendarIcon } from '../../common/Icons';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import useViewport from '../../../hooks/useViewport';

interface WhenPopoverProps {
  when: Date | null;
  onDateChange: (date: Date | null) => void;
  openMenu?: (index: number) => void;
}

const WhenPopover = ({ when, onDateChange, openMenu }: WhenPopoverProps) => {
  const howLong = ['Weekend', 'Week', 'Month'];
  const whenMonths = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const calendarFooter = [
    'Exact dates',
    '+ 1 day',
    '+ 2 day',
    '+ 3 day',
    '+ 7 day',
  ];

  const { width } = useViewport();
  const [state, setState] = useState({
    selection: {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: 'selection',
    },
  });

  const [selectedLong, setSelectedLong] = useState(0);
  const [selectedWhen, setSelectedWhen] = useState(0);

  return (
    <div className="">
      <Tab.Group as={Fragment}>
        <Tab.List
          as="div"
          className="flex items-center justify-center rounded-full bg-[rgb(235,235,235)] p-1 text-[14px]"
        >
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={[
                  'flex-1 rounded-full px-3 py-2',
                  selected
                    ? 'tab-shadow bg-white'
                    : 'bg-transparent text-[rgb(34,34,34)]',
                ].join(' ')}
              >
                Choose dates
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={[
                  'flex-1 rounded-full px-3 py-2',
                  selected
                    ? 'tab-shadow bg-white'
                    : 'bg-transparent text-[rgb(34,34,34)]',
                ].join(' ')}
              >
                Flexible dates
              </button>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <div className="h-full w-full pt-3 pb-6">
              <DateRangePicker
                onChange={(item: any) => setState({ ...state, ...item })}
                months={1}
                // minDate={addDays(new Date(), -300)}
                // maxDate={addDays(new Date(), 900)}
                direction="vertical"
                scroll={{ enabled: true }}
                ranges={[state.selection]}
                rangeColors={['#000']}
                className="date-pp"
                showMonthAndYearPickers={false}
                showMonthArrow={false}
                showDateDisplay={false}
                showPreview={false}
              />
            </div>
            <div className="hide-scroll flex w-full gap-2 overflow-x-auto border-t border-b py-4">
              {calendarFooter.map((l, i) => (
                <button
                  key={i.toString() + l}
                  className={[
                    'whitespace-nowrap rounded-full border px-3 py-1 text-xs',
                    selectedLong === i ? 'border-black' : 'border-black/20',
                  ].join(' ')}
                  // onClick={() => setSelectedLong(i)}
                >
                  {l}
                </button>
              ))}
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="relative flex w-full flex-col items-center justify-start">
              <div className="mt-4 w-full border-t py-2">
                <h3 className="text-start font-semibold">
                  How long would you like to stay?
                </h3>
                <div className="flex items-center justify-start gap-2 pb-4 pt-2">
                  {howLong.map((l, i) => (
                    <button
                      key={i.toString() + l}
                      className={[
                        'rounded-full border px-2 py-1 text-sm',
                        selectedLong === i ? 'border-black' : 'border-black/20',
                      ].join(' ')}
                      onClick={() => setSelectedLong(i)}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mt-4 w-full border-t py-2">
                <h3 className="text-start font-semibold">
                  When do you want to go?
                </h3>
                <div className="hide-scroll w-full overflow-x-auto">
                  <div className="relative flex w-full items-center justify-start gap-2 pb-4 pt-2">
                    {whenMonths.map((month, i) => (
                      <button
                        key={month}
                        onClick={() => setSelectedWhen(i)}
                        className={[
                          'flex min-h-[106px] min-w-[114px] flex-col items-center justify-center rounded-xl border border-gray-700 py-4 px-6 text-sm',
                          selectedWhen === i
                            ? 'border-black/50'
                            : 'border-black/20',
                        ].join(' ')}
                      >
                        <span className="mb-2 text-4xl text-gray-500">
                          <CalendarIcon />
                        </span>
                        <span className=" text-black">{month}</span>
                        <span className="">2023</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
      {/* <DatePicker
        selected={when}
        onChange={(date) => onDateChange(date)}
        monthsShown={width > 1024 ? 2 : 1}
        inline
      /> */}

      <div className="flex items-center justify-between px-4 py-2">
        <button className="text-sm capitalize underline">skip</button>
        <button
          onClick={() => {
            openMenu && openMenu(3);
          }}
          className="rounded-lg bg-black px-5 py-2.5 capitalize text-white"
        >
          next
        </button>
      </div>
    </div>
  );
};
export default WhenPopover;
