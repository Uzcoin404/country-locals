/* eslint @next/next/no-img-element: "off" */

interface WhoPopoverProps {
  adults: number;
  child: number;
  infants: number;
  onIncrement: (type: string) => void;
  onDecrement: (type: string) => void;
}

const WhoPopover = ({
  adults,
  child,
  infants,
  onIncrement,
  onDecrement,
}: WhoPopoverProps) => (
  <div>
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
            onDecrement('adults');
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
            onIncrement('adults');
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
            onDecrement('child');
          }}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-[#ddd] text-2xl text-[#5E5E5E] disabled:opacity-50"
          disabled={child === 0}
        >
          <img
            src="https://img.icons8.com/material-outlined/96/000000/minus.png"
            alt="-"
            width={14}
          />
        </button>
        <div className="min-w-[35px] text-center font-medium text-[#222]">
          {child}
        </div>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            onIncrement('child');
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
            onDecrement('infants');
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
            onIncrement('infants');
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
        <p className="text-base font-semibold leading-none text-[#222]">Pets</p>
        <span className="mt-2 block text-[13px] leading-none text-[#717171] underline">
          Bringing a service animal?
        </span>
      </div>
      <div className="flex items-center gap-x-2">
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            onDecrement('infants');
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
            onIncrement('infants');
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
export default WhoPopover;
