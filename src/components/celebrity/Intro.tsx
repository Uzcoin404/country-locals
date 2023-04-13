import Link from 'next/link';
import { useEffect, useState } from 'react';

import BackIcon from '../../../public/icons/arrow-left.svg';
import HeartIcon from '../../../public/icons/heart-outline.svg';
import StarIcon from '../../../public/icons/star.svg';
import ShareIcon from '../../../public/icons/upload.svg';
import SharePopup from './popovers/SharePopup';

/* eslint jsx-a11y/anchor-is-valid: "off" */
const Intro = () => {
  const [scroll, setScroll] = useState(false);
  const [showShare, setShowShare] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 212);
    });
  }, []);

  return (
    <>
      <div
        className={`${
          scroll ? 'border-b border-b-slate-200 bg-white ' : ''
        }duration-400 fixed top-0 z-20 flex w-full items-center justify-between py-3 px-3 transition lg:hidden`}
      >
        <button
          type="button"
          className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-small"
        >
          <div className="svg_icon w-4 rotate-180 transform text-transparent">
            <BackIcon />
          </div>
        </button>
        <div className="flex gap-x-3">
          <button
            type="button"
            onClick={() => setShowShare(true)}
            className="flex h-8 items-center justify-center rounded-full bg-white px-3 shadow-small"
          >
            <div className="svg_icon w-4 text-transparent">
              <ShareIcon />
            </div>
            <span className="ml-2 text-sm">Share</span>
          </button>
          <button
            type="button"
            className="flex h-8 items-center justify-center rounded-full bg-white px-3 shadow-small"
          >
            <div className="svg_icon w-4 text-transparent">
              <HeartIcon />
            </div>
            <span className="ml-2 text-sm">Save</span>
          </button>
        </div>
      </div>

      <div className="-mt-8 hidden pt-20 pb-8 sm:pb-12 lg:mt-0 lg:block xl:py-12">
        <div className="container">
          <div className="flex flex-wrap items-center justify-between gap-4 sm:gap-3 md:flex-nowrap">
            <div>
              <div className="flex flex-wrap items-center gap-x-1 gap-y-1 text-xs text-[#9F9F9F] sm:flex-nowrap sm:gap-y-0">
                <Link href="#">
                  <a className="underline">Mumbai, India</a>
                </Link>
                <span>&gt;</span>
                <Link href="#">
                  <a className="underline">Sightseeing</a>
                </Link>
              </div>
              <h2 className="my-3 text-[18px] font-semibold text-[#222] md:text-xl lg:text-2xl">
                Guided Full Mumbai Sightseeing Tour in Air Con Car
              </h2>
              <div className="flex flex-wrap gap-y-1 text-xs sm:gap-y-0">
                <div className="svg_icon mr-1 w-3 text-[#222]">
                  <StarIcon />
                </div>
                <span className="font-semibold text-[#222]">4.7</span>
                <span className="mr-1 ml-1 text-[#808080]">(25) reviews -</span>
                <span className="ml-2 text-[#222]">Mumbai,India</span>
              </div>
            </div>
            <div className="flex gap-x-5 text-sm text-black sm:text-base">
              <button
                type="button"
                className="flex items-center"
                onClick={() => setShowShare(true)}
              >
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
      <SharePopup status={showShare} onClose={() => setShowShare(false)} />
    </>
  );
};
export default Intro;
