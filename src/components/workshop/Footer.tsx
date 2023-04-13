/* eslint react/no-array-index-key: "off" */
import Image from 'next/image';

import Arrow from '../../../public/icons/arrow.svg';
import InstagramIcon from '../../../public/icons/instagram.svg';
import FacebookIcon from '../../../public/icons/facebook-square.svg';
import TwitterIcon from '../../../public/icons/twitter-square.svg';
import SnapchatIcon from '../../../public/icons/snapchat-square.svg';

const Footer = () => (
  <div className="footer relative min-h-[740px] w-[full] ">
    <div className=" absolute -top-[1px] h-4 w-full rounded-bl-[20px] rounded-br-[20px] bg-[#fff] md:h-16 md:rounded-bl-[50px] md:rounded-br-[50px] ">
      {/* // */}
    </div>
    <div className="container pb-[250px] pt-4 md:pb-[350px] md:pt-[110px] lg:pb-0">
      <div className="flex flex-wrap justify-between pt-10 pb-2 md:pb-10 lg:px-10">
        <div className="pb-10 lg:w-[30%]">
          <h3 className="pb-2 text-3xl font-bold text-[#fff] lg:text-[36px]">
            Countrylocals
          </h3>
          <p className="text-xl font-medium text-[#fff] md:text-2xl">
            Fancy seeing you down here.
          </p>
        </div>
        <div className="menu flex w-full flex-wrap gap-y-5 pb-10 sm:justify-between sm:gap-10 lg:w-[60%]">
          <div className="w-1/2 sm:w-1/4">
            <p className="mb-3 text-sm font-bold uppercase text-[#FFF]">
              How it works
            </p>
            <div>
              {['Sale', 'Events', 'Sale', 'Events'].map((item, index) => (
                <a
                  href="#"
                  className="flex items-center gap-3 py-1 font-normal text-[#fff] hover:text-pink_primary"
                  key={index}
                >
                  <div className="svg_icon hidden w-2 sm:block">
                    <Arrow />
                  </div>
                  <span className="text-base sm:text-[14px]">{item}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="w-1/2 sm:w-1/4">
            <h3 className="mb-3 text-sm font-bold uppercase text-[#FFF]">
              ABOUT
            </h3>
            <div>
              {['Sale', 'Events', 'Sale', 'Events'].map((item, index) => (
                <a
                  href="#"
                  className="flex items-center gap-3 py-1 font-normal text-[#fff] hover:text-pink_primary"
                  key={index}
                >
                  <div className="svg_icon hidden w-2 sm:block">
                    <Arrow />
                  </div>
                  <span className="text-base sm:text-[14px]">{item}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="w-1/2 sm:w-1/4">
            <h3 className="mb-3 text-sm font-bold uppercase text-[#FFF]">
              OUR INITIATIVES
            </h3>
            <div>
              {['ToS', 'Rules', 'Sale'].map((item, index) => (
                <a
                  href="#"
                  className="flex items-center gap-3 py-1 font-normal text-[#fff] hover:text-pink_primary"
                  key={index}
                >
                  <div className="svg_icon hidden w-2 sm:block">
                    <Arrow />
                  </div>
                  <span className="text-base sm:text-[14px]">{item}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="lg:px-10">
        <div className="flex items-center justify-center gap-7 pb-5 lg:hidden">
          <a
            href="#"
            className="text-[14px] uppercase text-[#fff] hover:text-pink_primary"
          >
            <div className="svg_icon w-5">
              <InstagramIcon />
            </div>
          </a>
          <a
            href="#"
            className="text-[14px] uppercase text-[#fff] hover:text-pink_primary"
          >
            <div className="svg_icon w-5">
              <FacebookIcon />
            </div>
          </a>
          <a
            href="#"
            className="text-[14px] uppercase text-[#fff] hover:text-pink_primary"
          >
            <div className="svg_icon w-5">
              <TwitterIcon />
            </div>
          </a>
          <a
            href="#"
            className="text-[14px] uppercase text-[#fff] hover:text-pink_primary"
          >
            <div className="svg_icon w-5">
              <SnapchatIcon />
            </div>
          </a>
        </div>
        <div className="mb-4 h-[1px] w-full bg-[#fff]" />
        <div className="flex flex-wrap items-center justify-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-2 lg:gap-4 xl:gap-5">
            <a
              href="#"
              className="w-full text-center text-sm font-normal text-[#fff] hover:text-pink_primary md:w-auto md:text-left"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="w-full text-center text-sm font-normal text-[#fff] hover:text-pink_primary md:w-auto md:text-left"
            >
              Terms of Users
            </a>
            <a
              href="#"
              className="w-full text-center text-sm font-normal text-[#fff] hover:text-pink_primary md:w-auto md:text-left"
            >
              Newsletter
            </a>
            <span className="hidden text-center text-sm font-normal text-[#fff] md:block md:text-left">
              •
            </span>
            <p className="mt-2 w-full text-center text-[11px] font-normal text-[#fff] md:mt-0 md:w-auto md:text-left md:text-sm">
              Copyright CountryLocals 2022. All Rights Reserved.
            </p>
          </div>
          <div className="hidden items-center gap-2 lg:flex">
            <a
              href="#"
              className="text-[14px] uppercase text-[#fff] hover:text-pink_primary"
            >
              <div className="svg_icon w-5">
                <InstagramIcon />
              </div>
            </a>
            <a
              href="#"
              className="text-[14px] uppercase text-[#fff] hover:text-pink_primary"
            >
              <div className="svg_icon w-5">
                <FacebookIcon />
              </div>
            </a>
            <a
              href="#"
              className="text-[14px] uppercase text-[#fff] hover:text-pink_primary"
            >
              <div className="svg_icon w-5">
                <TwitterIcon />
              </div>
            </a>
            <a
              href="#"
              className="text-[14px] uppercase text-[#fff] hover:text-pink_primary"
            >
              <div className="svg_icon w-5">
                <SnapchatIcon />
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 w-[95%] max-w-[1500px] -translate-x-1/2  transform rounded-tl-[20px] rounded-tr-[20px] bg-black px-5 pt-5 pb-16 md:rounded-tl-[50px] md:rounded-tr-[50px] md:px-14 md:pt-14">
        <div className="flex items-center justify-between pb-0 md:pb-5">
          <div className="w-[110px] text-[#fff]">
            <Image src="/icons/logo.png" width="110px" height="48px" />
          </div>
          <button
            type="button"
            className="flex h-[40px] w-[40px] items-center justify-center rounded-lg border-2 border-gray-600 md:h-[50px] md:w-[50px]"
          >
            <div className="up_down_animation">
              <div className="svg_icon w-2 rotate-90 text-[#fff] md:w-[10px]">
                <Arrow />
              </div>
            </div>
          </button>
        </div>
        <p className="pb-10 text-sm font-thin text-[#fff] md:pb-14 md:text-[20px] lg:pb-0">
          Experience New Experiences
        </p>
      </div>
    </div>
  </div>
);

export default Footer;
