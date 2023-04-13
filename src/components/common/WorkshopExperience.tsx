import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';

/* eslint react/jsx-one-expression-per-line: "off" */
const WorkshopExperience = () => {
  const workshopItems = [
    {
      id: 1,
      title: 'Thoughtful Hosts',
      description:
        'Get to know hosts who share their expertise and a window into their world.',
      imgUrl: '/icons/purple-smile.svg',
    },
    {
      id: 2,
      title: 'Small-group Activities',
      description:
        'Meet people from all over the world while learning something new together.',
      imgUrl: '/icons/purple-user.svg',
    },
    {
      id: 3,
      title: 'Simple and Global',
      description:
        'Join easily and participate from home without a lot of prep.',
      imgUrl: '/icons/purple-device.svg',
    },
    {
      id: 4,
      title: 'Flexible Schedule',
      description: 'Rescheduling Option Available',
      imgUrl: '/icons/purple-calendar.svg',
    },
    {
      id: 5,
      title: 'Easy Refund - Cancel Anytime',
      description: '100% Refund on unused classes',
      imgUrl: '/icons/purple-dollar.svg',
    },
  ];

  return (
    <div className="relative hidden pt-10 md:block md:pt-8">
      <div className="container">
        <h2 className="mb-8 text-center text-2xl font-bold text-black md:mb-10 md:text-3xl lg:mb-12 lg:text-4xl">
          <span className="purple_gradient_text mr-2">Country Locals</span>{' '}
          Experience
        </h2>

        <div className="flex flex-wrap justify-center gap-4 md:gap-5 lg:gap-7">
          {workshopItems &&
            workshopItems.map((item) => (
              <div
                key={item.id}
                className="purple_gradient_bg_light flex w-full rounded-2xl p-3 sm:w-[48%] lg:mb-0 lg:w-[380px] lg:p-4 xl:w-[368px] xl:p-5"
              >
                <div className="mr-3 flex h-[66px] w-[66px] flex-shrink-0 items-center justify-center rounded-[10px] bg-white">
                  <div className="svg_icon flex w-8 items-center text-[#EF5DA8]">
                    <Image
                      src={item.imgUrl}
                      width={32}
                      height={32}
                      alt={item.title}
                    />
                  </div>
                </div>
                <div>
                  <p className="pb-1 text-base font-bold leading-tight text-white sm:pb-[6px] lg:text-[16px]">
                    {item.title}
                  </p>
                  <div className="text-[11px] text-white sm:text-[12px]">
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
export default WorkshopExperience;
