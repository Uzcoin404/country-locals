import { useState } from 'react';
import { offersData } from '../../utilities/dummy-api';
import UnderLine from '../common/UnderLine';
import AmenitiesPopover from './popovers/AmenitiesPopover';

const Offers = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="mt-8 mb-8">
      <h3 className="pb-8 text-[22px] font-bold text-[#222]">
        What this place offers
      </h3>
      <div className="mb-8 flex w-full flex-wrap justify-start gap-[14px]">
        {offersData.map((item) => (
          <div
            className="flex w-full cursor-pointer items-center gap-x-1 rounded-md bg-[#F8F8F8] p-4 text-[#4A4A4A] duration-150 ease-linear hover:bg-[#E71575] hover:text-[#fff] md:w-[48%] xl:w-[32%]"
            key={Math.random() * 10}
          >
            <div className="svg_icon w-[20px] ease-linear hover:bg-[#E71575] hover:text-[#fff]">
              <item.icon />
            </div>
            <p className="text-[14px]">{item.title}</p>
          </div>
        ))}
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="w-full cursor-pointer rounded-md border border-[#E71575] p-4 text-center text-[#E71575] duration-150 ease-linear hover:bg-[#E71575] hover:text-[#fff] md:w-[32%]"
        >
          Show all 14 amenities
        </button>
        <AmenitiesPopover status={isOpen} onClose={() => setIsOpen(false)} />
      </div>
      <UnderLine />
    </div>
  );
};

export default Offers;
