import Link from 'next/link';
import StarIcon from '../../../public/icons/star.svg';
import ShareIcon from '../../../public/icons/upload.svg';
import HeartIcon from '../../../public/icons/heart-outline.svg';

/* eslint jsx-a11y/anchor-is-valid: "off" */
const TourismIntro = () => (
  <div className="pt-8 pb-0 sm:pb-12 sm:pt-28 xl:py-12">
    <div className="container">
      <div className="flex flex-wrap items-center justify-between gap-4 sm:gap-3 md:flex-nowrap md:items-end">
        <div>
          <div className="flex flex-wrap items-center gap-x-1 gap-y-1 text-xs text-[#4A4A4A] sm:flex-nowrap sm:gap-y-0">
            <Link href="#">
              <a className="underline">Delhi India</a>
            </Link>
            <span>&gt;</span>
            <Link href="#">
              <a className="underline">Art and Culture</a>
            </Link>
            <span>&gt;</span>
            <Link href="#">
              <a className="underline">Culture and History</a>
            </Link>
            <span>&gt;</span>
            <span className="text-[#808080]">Culture</span>
          </div>
          <h2 className="my-4 text-[18px] font-semibold text-[#222] md:text-2xl lg:text-3xl">
            2235 GREAT 3BED / 2.5BATHS IN BRAND NEW BUILDING
          </h2>
          <div className="flex flex-wrap gap-y-1 text-sm sm:gap-y-0 md:text-base">
            <div className="svg_icon mr-1 w-4 text-[#FFD166] md:w-5">
              <StarIcon />
            </div>
            <span className="font-semibold text-[#222]">4.7</span>
            <span className="mr-1 ml-1 text-[#808080]">(25) reviews - </span>
            <span className="text-[#4A4A4A]">
              Greater London, England, United Kingdom
            </span>
          </div>
        </div>
        <div className="flex gap-x-5 text-sm text-black sm:text-base">
          <button type="button" className="flex items-center">
            <div className="w-4 sm:w-[22px]">
              <ShareIcon />
            </div>
            <span className="ml-1 underline">Share</span>
          </button>
          <button type="button" className="flex items-center">
            <div className="svg_icon w-4 text-transparent sm:w-[22px]">
              <HeartIcon />
            </div>
            <span className="ml-1 underline">Save</span>
          </button>
        </div>
      </div>
    </div>
  </div>
);
export default TourismIntro;
