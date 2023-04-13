/* eslint jsx-a11y/anchor-is-valid: "off" */
/* eslint react/jsx-one-expression-per-line: "off" */
import Link from 'next/link';

import IdCardIcon from '../../../public/icons/id-card.svg';
import UserIcon from '../../../public/icons/user.svg';
import MaskIcon from '../../../public/icons/mask-face.svg';
import Checkmark from '../../../public/icons/checked-purple.svg';

const ThingsToKnow = () => (
  <div className="relative hidden pt-10 pb-2 md:block md:pt-14 md:pb-14 lg:pt-20 lg:pb-20">
    <div className="container">
      <div className="border-t-2 border-b-2 border-[#EBEBEB] pt-12 pb-12">
        <div className="pb-8">
          <h3 className="text-2xl font-bold text-black  lg:text-[28px]">
            Things to know
          </h3>
        </div>

        <div className="flex flex-wrap justify-between">
          <div className="mb-8 lg:mb-0 lg:w-[380px] xl:w-[432px]">
            <h4 className="pb-4 text-base font-bold text-[#262626] lg:text-lg">
              Whats not Included
            </h4>
            <p className="mb-4 flex text-xs text-[#686868] md:mb-6 md:text-sm">
              <span className="mr-3 inline-block w-[22px] flex-shrink-0">
                <IdCardIcon />
              </span>
              You’ll need a photo that matches the one on your ID to confirm
              who’s actually going on this experience
            </p>
            <p className="mb-4 flex text-xs text-[#686868] md:mb-6 md:text-sm">
              <span className="mr-3 inline-block w-[22px] flex-shrink-0">
                <UserIcon />
              </span>
              Guests ages 18 and up can attend, up to 7 guest in total
            </p>
            <p className="flex text-xs text-[#686868] md:text-sm">
              <span className="mr-3 inline-block w-[22px] flex-shrink-0">
                <MaskIcon />
              </span>
              All participants must wear a protective face covering and practice
              social distancing
            </p>
          </div>

          <div className="mb-8 flex-shrink-0 lg:mb-0">
            <h4 className="pb-4 text-base font-bold text-[#262626] lg:text-lg">
              What to bring
            </h4>
            <p className="mb-4 flex text-xs text-[#686868] md:mb-6 md:text-sm">
              <span className="mr-3 inline-block w-[20px] flex-shrink-0">
                <Checkmark />
              </span>
              Bottle
            </p>
            <p className="mb-4 flex text-xs text-[#686868] md:mb-6 md:text-sm">
              <span className="mr-3 inline-block w-[20px] flex-shrink-0">
                <Checkmark />
              </span>
              Sun Glasses
            </p>
            <p className="mb-4 flex text-xs text-[#686868] md:mb-6 md:text-sm">
              <span className="mr-3 inline-block w-[20px] flex-shrink-0">
                <Checkmark />
              </span>
              Cap
            </p>
            <p className="flex text-xs text-[#686868] md:text-sm">
              <span className="mr-3 inline-block w-[20px] flex-shrink-0">
                <Checkmark />
              </span>
              Hand Sanitizer
            </p>
          </div>

          <div className="lg:w-[350px] xl:w-[432px]">
            <h4 className="pb-4 text-base font-bold text-[#262626] lg:text-lg">
              Cancellation Policy
            </h4>
            <p className="mb-3 flex text-xs text-[#686868] md:text-sm">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet. Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam
              consequat sunt nostrud amet.
            </p>
            <Link href="/">
              <a className="font-semibold  text-[#E71575]">Read More &gt;</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default ThingsToKnow;
