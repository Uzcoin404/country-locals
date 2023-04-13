/* eslint react/no-array-index-key: "off" */
/* eslint @next/next/no-img-element: "off" */
import { useState } from 'react';
// import ReactPlayer from 'react-player';
import dynamic from 'next/dynamic';
import { FreeMode, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import useViewport from '../../hooks/useViewport';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

const RecentVideoSlider = () => {
  const { width } = useViewport();
  const [videoList, setVideoList] = useState([
    {
      id: 1,
      title: 'Jade Warren',
      image: 'prime-gig-slider-2.jpg',
      url: 'https://vimeo.com/90509568',
      playing: false,
    },
    {
      id: 2,
      title: 'Warren Jade',
      image: 'prime-gig-slider-4.jpg',
      url: 'https://vimeo.com/169599296',
      playing: false,
    },
    {
      id: 3,
      title: 'Tom Cruise',
      image: 'prime-gig-slider-5.jpg',
      url: 'https://vimeo.com/90509568',
      playing: false,
    },
  ]);

  const handlePlayPause = (id: number) => {
    const newVideoList = videoList.map((video) => {
      if (video.id === id) {
        return {
          ...video,
          playing: !video.playing,
        };
      }
      return {
        ...video,
        playing: false,
      };
    });
    setVideoList(newVideoList);
  };

  return (
    <div className="relative pt-5 md:pt-14">
      <div className="container">
        <div className="flex items-center justify-between gap-4 pb-2">
          <div className="w-full md:w-1/2">
            <h2 className="mr-7 text-2xl font-bold text-[#202124] lg:text-4xl">
              Recent
              <span className="purple_gradient_text_deep"> Browsing</span>
            </h2>
          </div>
        </div>

        <div className="similar_properties_slider relative -ml-3 -mr-4 px-0 md:-mr-3">
          <Swiper
            slidesPerView="auto"
            spaceBetween={0}
            modules={[Navigation, Pagination, FreeMode]}
            freeMode
            navigation={{
              prevEl: '.similar_properties_slider.swiper-button-prev',
              nextEl: '.similar_properties_slider.swiper-button-next',
            }}
            pagination={{
              type: 'fraction',
              el: '.similar_properties_slider.swiper-pagination',
            }}
            className="flex"
          >
            {videoList.map((video) => (
              <SwiperSlide
                key={video.id}
                className="!w-full md:!w-[50%] lg:!w-[33.33%]"
              >
                <div className="group relative mx-3 my-5 overflow-hidden rounded-xl bg-white">
                  <div className="relative overflow-hidden">
                    <ReactPlayer
                      url={video.url}
                      playing={video.playing}
                      width="100%"
                      height={width < 1064 ? '200px' : '220px'}
                      controls
                    />
                    {!video.playing && (
                      <div
                        aria-label="Play Pause"
                        role="button"
                        tabIndex={0}
                        onKeyDown={() => handlePlayPause(video.id)}
                        onClick={() => handlePlayPause(video.id)}
                        className="group absolute left-0 top-0 h-full w-full cursor-pointer overflow-hidden"
                      >
                        <img
                          src={video.image}
                          alt="poster"
                          className="h-full w-full object-cover transition-all duration-1000 ease-in-out group-hover:scale-110"
                        />

                        <button
                          type="button"
                          className="absolute top-[50%] left-[50%] flex -translate-x-[50%] -translate-y-[50%] transform items-center justify-center"
                          onClick={() => handlePlayPause(video.id)}
                        >
                          <img
                            src="/icons/play-transparent.png"
                            alt="play"
                            className="w-16"
                          />
                        </button>
                      </div>
                    )}
                  </div>
                  <a
                    href="#"
                    target="_blank"
                    rel="nofollow"
                    className="block bg-[#DDF4FF] px-2 pt-3 pb-4 text-center"
                  >
                    <p className="text-xl font-bold text-[#1C1C25]">
                      {video.title}
                    </p>
                    <div className="flex items-center justify-center gap-x-2">
                      <p className="border-r border-r-[#1C1C25] pr-2 text-sm text-[#1C1C25]">
                        Creative Baking
                      </p>
                      <img
                        src="/linkedin-blue.png"
                        alt="LinkedIn"
                        className="-mt-[1px] max-w-[77px]"
                      />
                    </div>
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
export default RecentVideoSlider;
