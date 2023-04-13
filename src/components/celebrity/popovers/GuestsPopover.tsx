/* eslint @next/next/no-img-element: "off" */
import { decrementItem, incrementItem } from '../../../utilities/helpers';

const GuestsPopover = ({
  guests,
  onChange,
}: {
  guests: { adults: number; children: number; infants: number };
  onChange: (type: string, count: number) => void;
}) => {
  const { adults, children, infants } = guests;

  const handleIncrement = (type: string) => {
    if (type === 'adults') {
      const value = incrementItem(adults);
      onChange('adults', value);
    } else if (type === 'children') {
      const value = incrementItem(children);
      onChange('children', value);
    } else if (type === 'infants') {
      const value = incrementItem(infants);
      onChange('infants', value);
    }
  };

  const handleDecrement = (type: string) => {
    if (type === 'adults') {
      const value = decrementItem(adults);
      onChange('adults', value);
    } else if (type === 'children') {
      const value = decrementItem(children);
      onChange('children', value);
    } else if (type === 'infants') {
      const value = decrementItem(infants);
      onChange('infants', value);
    }
  };

  return (
    <div className="z-10 rounded-xl bg-white py-4">
      <div className="flex items-center justify-between border-b border-[#ddd] pb-5">
        <div>
          <p className="text-base font-semibold leading-none text-[#222]">
            Adults
          </p>
          <span className="mt-2 block text-[13px] leading-none text-[#717171]">
            Ages 13 or above
          </span>
        </div>
        <div className="flex items-center gap-x-2">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              handleDecrement('adults');
            }}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#ddd] text-2xl text-[#5E5E5E] disabled:opacity-50"
            disabled={adults === 0}
          >
            <img
              src="https://img.icons8.com/material-outlined/96/000000/minus.png"
              alt="-"
              width={14}
            />
          </button>
          <div className="min-w-[35px] text-center font-medium text-[#222]">
            {adults}
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              handleIncrement('adults');
            }}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#ddd] text-2xl text-[#5E5E5E]"
          >
            <img
              src="https://img.icons8.com/android/96/000000/plus.png"
              alt="+"
              width={14}
            />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between border-b border-[#ddd] pb-5 pt-5">
        <div>
          <p className="text-base font-semibold leading-none text-[#222]">
            Children
          </p>
          <span className="mt-2 block text-[13px] leading-none text-[#717171]">
            Ages 2-12
          </span>
        </div>
        <div className="flex items-center gap-x-2">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              handleDecrement('children');
            }}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#ddd] text-2xl text-[#5E5E5E] disabled:opacity-50"
            disabled={children === 0}
          >
            <img
              src="https://img.icons8.com/material-outlined/96/000000/minus.png"
              alt="-"
              width={14}
            />
          </button>
          <div className="min-w-[35px] text-center font-medium text-[#222]">
            {children}
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              handleIncrement('children');
            }}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#ddd] text-2xl text-[#5E5E5E]"
          >
            <img
              src="https://img.icons8.com/android/96/000000/plus.png"
              alt="+"
              width={14}
            />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between pt-5">
        <div>
          <p className="text-base font-semibold leading-none text-[#222]">
            Infants
          </p>
          <span className="mt-2 block text-[13px] leading-none text-[#717171]">
            Under 2
          </span>
        </div>
        <div className="flex items-center gap-x-2">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              handleDecrement('infants');
            }}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#ddd] text-2xl text-[#5E5E5E] disabled:opacity-50"
            disabled={infants === 0}
          >
            <img
              src="https://img.icons8.com/material-outlined/96/000000/minus.png"
              alt="-"
              width={14}
            />
          </button>
          <div className="min-w-[35px] text-center font-medium text-[#222]">
            {infants}
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              handleIncrement('infants');
            }}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#ddd] text-2xl text-[#5E5E5E]"
          >
            <img
              src="https://img.icons8.com/android/96/000000/plus.png"
              alt="+"
              width={14}
            />
          </button>
        </div>
      </div>
    </div>
  );
};
export default GuestsPopover;
