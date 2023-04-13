import useViewport from '../../hooks/useViewport';
import BookingCard from './BookingCard';
import BrandLogoCarousel from './BrandLogoCarousel';
import BookingCardMobile from './popovers/BookingCardMobile';
import ProfileDetails from './ProfileDetails';
import ReasonsSlider from './ReasonsSlider';

const Profiles = () => {
  const { width } = useViewport();
  return (
    <div className="relative mt-8 pb-6 md:mt-0 md:pt-14 lg:pt-12">
      <div className="container">
        <div className="flex flex-wrap justify-between lg:flex-nowrap">
          <div className="w-full lg:max-w-[650px] xl:max-w-[730px]">
            <ProfileDetails />

            <BrandLogoCarousel />

            <ReasonsSlider />
          </div>
          {width > 1063 ? (
            <div className="z-[11] w-[320px] xl:w-[400px]">
              <BookingCard />
            </div>
          ) : (
            <BookingCardMobile />
          )}
        </div>
      </div>
    </div>
  );
};
export default Profiles;
