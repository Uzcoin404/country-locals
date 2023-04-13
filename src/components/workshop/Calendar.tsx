/* eslint-disable @typescript-eslint/no-explicit-any */
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface WhenPopoverProps {
  when: Date | null;
  onDateChange: any;
}

const Calendar = ({ when, onDateChange }: WhenPopoverProps) => (
  <div className="w-full bg-[#F8F8F8]">
    {' '}
    <div className="container py-10">
      <div className="w-[749px]">
        <DatePicker
          selected={when}
          onChange={(date) => onDateChange(date)}
          monthsShown={1}
          inline
        />
      </div>
    </div>
  </div>
);
export default Calendar;
