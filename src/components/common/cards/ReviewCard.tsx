/* eslint react/jsx-one-expression-per-line: "off" */
import { useState } from 'react';
import ReviewDetailsMobile from '../popovers/ReviewDetailsMobile';

import StarIcon from '../../../../public/icons/star.svg';
import USFlag from '../../../../public/icons/american-flag.svg';

interface ReviewCardProps {
  item: number;
}

const ReviewCard = ({ item }: ReviewCardProps) => {
  const [openPopup, setOpenPopup] = useState(false);
  return (
    <div className="md:m-0 lg:w-[49%]">
      <div
        className="flex flex-wrap overflow-hidden rounded-[10px] sm:flex-nowrap"
        style={{ boxShadow: '0 3px 10px -1px rgba(0,0,0,.2)' }}
      >
        <div
          className="flex h-[160px] w-full shrink-0 overflow-hidden rounded-[10px] bg-cover bg-center bg-no-repeat sm:h-auto sm:max-w-[202px]"
          style={{ backgroundImage: `url(/review-headshot-${item}.jpg)` }}
        />
        <div className="flex-auto py-3 px-4">
          <div className="flex justify-between">
            <div className="text-base">
              <strong>Annett Prudlo</strong> from Germany
            </div>
            <div className="flex gap-[1px] pt-1 text-[#FFCE31]">
              <div className="svg_icon w-3.5">
                <StarIcon />
              </div>
              <div className="svg_icon w-3.5">
                <StarIcon />
              </div>
              <div className="svg_icon w-3.5">
                <StarIcon />
              </div>
              <div className="svg_icon w-3.5">
                <StarIcon />
              </div>
              <div className="svg_icon w-3.5 text-[#DADADA]">
                <StarIcon />
              </div>
            </div>
          </div>
          <div className="mt-2 text-xs">April 22, 2020</div>
          <div className="pb-3 pt-3 text-sm text-black opacity-70">
            Sit et integer nisl diam malesuada. Sed cras natoque metus
            fermentum. Morbi morbi<span className="inline lg:hidden">... </span>
            <span className="hidden lg:inline">
              Urna, molestie venenatis Consectetur sit ac sed nunc interdum
              tortor ultrices vel pulvinar. Sit at hendrerit magna tempus, ac
              sem sagittis, nulla.
            </span>
            <button
              type="button"
              onClick={() => setOpenPopup(true)}
              className="inline text-sm text-pink_primary lg:hidden"
            >
              Read More
            </button>
          </div>
          <div className="flex items-center">
            <div className="mr-1 w-5">
              <USFlag />
            </div>
            <span className="text-xs text-black opacity-50">
              United States, NY
            </span>
          </div>
        </div>
      </div>
      <ReviewDetailsMobile
        status={openPopup}
        onClose={() => setOpenPopup(false)}
        reviewer="Annett Prudlo"
        country="Germany"
      />
    </div>
  );
};
export default ReviewCard;
