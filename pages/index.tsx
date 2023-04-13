/* eslint react/jsx-wrap-multilines: "off" */
import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import useViewport from '../src/hooks/useViewport';
import { bookOffersData } from '../src/utilities/dummy-api';

import ThingsToKnow from '../src/components/common/ThingsToKnow';
import WorkshopExperience from '../src/components/common/WorkshopExperience';
import AvailableDate from '../src/components/workshop/AvailableDate';
import BookOffers from '../src/components/workshop/BookOffers';
import Gallery from '../src/components/workshop/Gallery';
import GoodToKnow from '../src/components/workshop/GoodToknow';
import MobileGallery from '../src/components/workshop/MobileGallery';
import Plan from '../src/components/workshop/Plan';
import Profiles from '../src/components/workshop/Profiles';
import Review from '../src/components/workshop/Review';
import ReviewSlider from '../src/components/workshop/ReviewSlider';
import SimilarProperties from '../src/components/workshop/SimilarProperties';
import TouringBanner from '../src/components/workshop/TouringBanner';
import TourismIntro from '../src/components/workshop/TourismIntro';
import TripCalender from '../src/components/workshop/TripCalendar';
import TripDetails from '../src/components/workshop/TripDetails';

const Home: NextPage = () => {
  const { width } = useViewport();
  const [sectionVisible, setSectionVisible] = useState<boolean>(false);

  const onChange = (isVisible: boolean) => {
    setSectionVisible(isVisible);
  };

  return (
    <>
      <style>
        {`.mobile_floating_header {
           display: none;
          }
          .booking-card-wrapper {
            opacity: ${sectionVisible ? '0' : '1'};
          }`}
        {/* {`header.mobile_header, .mobile_floating_header {
            // display: none;
          }
          .booking-card-wrapper {
            opacity: ${sectionVisible ? '0' : '1'};
          }`} */}
      </style>
      <Head>
        <title>Country Locals</title>
      </Head>
      <div className="bg-[#fff] pb-10">
        {width < 1064 && <MobileGallery />}

        {width > 1063 && (
          <>
            <TourismIntro />
            <Gallery />
          </>
        )}

        <Profiles />

        <VisibilitySensor onChange={onChange} partialVisibility>
          <TouringBanner />
        </VisibilitySensor>

        <div className="container pt-8">
          <div className="w-full lg:max-w-[650px] xl:max-w-[730px]">
            <Plan />
            <GoodToKnow />
            <TripDetails />
          </div>
        </div>

        <TripCalender />

        <Review />

        <AvailableDate />

        <SimilarProperties />

        <BookOffers
          sliderId="book_one_of_my_offers"
          title={
            <h2 className="mr-7  text-2xl font-bold text-[#202124] lg:text-4xl">
              Book one of
              <span className="purple_gradient_text_deep"> my offers</span>
            </h2>
          }
          data={bookOffersData}
        />

        <ReviewSlider />

        <WorkshopExperience />

        <ThingsToKnow />
      </div>
    </>
  );
};

export default Home;
