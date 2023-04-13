import Image from 'next/image';
import { FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import useViewport from '../../hooks/useViewport';

const SessionInfoGrid = () => {
  const { width } = useViewport();

  const information = [
    {
      id: 1,
      title: 'VIDEO MESSAGES',
      description: 'Sed habitant diam massa id egestas ante.',
      image: '/icons/pg-message.png',
    },
    {
      id: 2,
      title: 'DM ON INSTAGRAM',
      description: 'Sed habitant diam massa id egestas ante.',
      image: '/icons/pg-instagram.png',
    },
    {
      id: 3,
      title: 'ONLINE CALLS & SESSION',
      description: 'Sed habitant diam massa id egestas ante.',
      image: '/icons/pg-headphone.png',
    },
    {
      id: 4,
      title: 'REAL MEETS',
      description: 'Sed habitant diam massa id egestas ante.',
      image: '/icons/pg-calendar.png',
    },
    {
      id: 5,
      title: 'PROMOTE YOUR BRAND',
      description: 'Sed habitant diam massa id egestas ante.',
      image: '/icons/pg-tag.png',
    },
  ];

  return (
    <div className="bg-[#FFFFFF] pt-5 pb-5 shadow-lg md:pt-14 md:pb-14">
      {width > 1063 ? (
        <div className="flex flex-wrap items-stretch gap-3 px-4 md:px-9 xl:flex-nowrap xl:justify-between">
          {information &&
            information.map((info) => (
              <div
                key={info.id}
                className="flex w-full items-center gap-2 rounded-xl bg-[#F8F8F8] py-5 px-4 md:w-[49%] lg:w-[32%] xl:w-[19%]"
              >
                <div className="flex h-[54px] w-[54px] flex-shrink-0 items-center justify-center rounded-full">
                  <Image
                    src={info.image}
                    width={54}
                    height={54}
                    alt={info.title}
                  />
                </div>
                <div className="text-left text-black">
                  <p className="pb-1 text-sm font-bold">{info.title}</p>
                  <p className="text-xs opacity-70">{info.description}</p>
                </div>
              </div>
            ))}
        </div>
      ) : (
        <div className="-mr-5 -ml-[10px] md:ml-0 md:mr-0">
          <Swiper
            slidesPerView="auto"
            spaceBetween={0}
            freeMode
            modules={[FreeMode]}
            className="flex flex-wrap !pr-5 md:!pr-0"
          >
            {information.map((info) => (
              <SwiperSlide key={info.id} className="!w-[86%] px-2 py-3">
                <div className="ml-4 flex w-full items-center gap-2 rounded-xl bg-[#F8F8F8] py-5 px-4 md:w-[49%] lg:w-[32%] xl:w-[19%]">
                  <div className="flex h-[54px] w-[54px] flex-shrink-0 items-center justify-center rounded-full">
                    <Image
                      src={info.image}
                      width={54}
                      height={54}
                      alt={info.title}
                    />
                  </div>
                  <div className="text-left text-black">
                    <p className="pb-1 text-sm font-bold">{info.title}</p>
                    <p className="text-xs opacity-70">{info.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
};
export default SessionInfoGrid;
