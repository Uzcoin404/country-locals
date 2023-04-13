/* eslint @next/next/no-img-element: "off" */
import { useState } from 'react';
import useViewport from '../../hooks/useViewport';

const CelebrityProfile = () => {
  const [showMore, setShowMore] = useState(false);
  const { width } = useViewport();

  return (
    <div className="pb-12 lg:pb-16">
      <div className="container">
        <div className="group flex flex-wrap overflow-hidden rounded-xl bg-[#272B34] shadow-2xl lg:rounded-3xl">
          <div className="w-full lg:w-1/3">
            <div className="h-full w-full overflow-hidden">
              <img
                src="/large-profile.jpeg"
                alt="Jade Warren"
                className="h-[220px] w-full object-cover transition-all duration-1000 ease-in-out group-hover:scale-110 md:h-[300px] lg:h-full"
              />
            </div>
          </div>
          <div className="w-full p-4 md:py-6 md:px-6 lg:w-2/3 lg:py-10 lg:px-8">
            <p className="text-sm uppercase text-[#CCD3DD] md:text-lg lg:text-xl">
              LEARN FROM THE BEST
            </p>
            <h3 className="pb-2 pt-2 text-lg font-bold uppercase text-[#fff] md:pb-6 md:text-xl lg:pt-6 lg:pb-12 lg:text-[42px]">
              JADE WARREN
            </h3>
            <div className="rounded-[20px] border-[#2F343E] bg-[#1F2229] p-4 text-[#fff] md:border md:py-4 md:px-6 lg:py-6 lg:px-8">
              <div className="text-sm leading-relaxed md:text-base lg:text-lg">
                <span className="mr-1">
                  Monthly classes go beyond a playlist of videos. The classroom
                  has been fully digitzied, allowing you to get a hands-on
                  learning experience and community from anywhere. Monthly
                  classes go beyond a playlist of videos. The classroom has been
                  fully digitzied.
                </span>
                {width > 768 ? (
                  <span>
                    Monthly classes go beyond a playlist of videos. The
                    classroom has been fully digitzied, allowing you to get a
                    hands-on learning experience and community from anywhere.
                    Monthly classes go beyond a playlist of videos. The
                    classroom has been fully digitzied, allowing you to get a
                    hands-on learning experience and community from anywhere.
                  </span>
                ) : (
                  showMore && (
                    <span className="ml-1 mr-1">
                      Monthly classes go beyond a playlist of videos. The
                      classroom has been fully digitzied, allowing you to get a
                      hands-on learning experience and community from anywhere.
                      Monthly classes go beyond a playlist of videos. The
                      classroom has been fully digitzied, allowing you to get a
                      hands-on learning experience and community from anywhere.
                    </span>
                  )
                )}
                <button
                  type="button"
                  className="md:hidden"
                  onClick={() => {
                    setShowMore(!showMore);
                  }}
                >
                  {showMore ? ' show less' : ' show more...'}
                </button>
              </div>
              <div className="flex flex-wrap justify-between gap-y-2 pt-4 md:pt-6 lg:pt-10">
                <div className="flex items-center text-sm font-bold text-[#C1C1C1] md:text-base lg:text-xl">
                  <img
                    src="/icons/instagram.png"
                    alt="Instagram"
                    className="mr-2 w-5 lg:mr-4 lg:w-8"
                  />
                  <span>14,5M followers</span>
                </div>
                <div className="flex items-center text-sm font-bold text-[#C1C1C1] md:text-base lg:text-xl">
                  <img
                    src="/icons/spotify.png"
                    alt="spotify"
                    className="mr-2 w-5 lg:mr-4 lg:w-8"
                  />
                  <span>14,5M monthly listeners</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CelebrityProfile;
