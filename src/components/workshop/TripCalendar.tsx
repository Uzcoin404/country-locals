import { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import { formatDate } from '../../utilities/helpers';

const TripCalender = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  const onChange = (dates: [Date, Date]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <div className="sticky_bottom_container hidden bg-[#F8F8F8] py-10 md:block md:py-14">
      <div className="container">
        <div className="w-full lg:max-w-[650px] xl:max-w-[730px]">
          <div className="w-full rounded-xl bg-white p-14 shadow-pop lg:max-w-[730px]">
            <div className="mb-5 flex justify-between">
              <div className="w-4/12">
                <h4 className="mb-1 text-xl font-semibold">32 nights</h4>
                <p className="text-base text-[#808080]">
                  <span>{formatDate(startDate)}</span>
                  <span> - </span>
                  <span>{formatDate(endDate)}</span>
                </p>
              </div>
            </div>
            <div className="booking_calendar">
              <DatePicker
                selected={startDate}
                onChange={onChange}
                startDate={startDate}
                endDate={endDate}
                monthsShown={2}
                selectsRange
                inline
                isClearable
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TripCalender;
