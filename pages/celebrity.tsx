import type { NextPage } from 'next';
import Head from 'next/head';
import VisibilitySensor from 'react-visibility-sensor';
import { useState } from 'react';
import useViewport from '../src/hooks/useViewport';

import Banner from '../src/components/celebrity/Banner';
import CelebrityFaq from '../src/components/celebrity/CelebrityFaq';
import CelebrityProfile from '../src/components/celebrity/CelebrityProfile';
import DeliverySlider from '../src/components/celebrity/DeliverySlider';
import GoodToKnow from '../src/components/celebrity/GoodToknow';
import Intro from '../src/components/celebrity/Intro';
import MoreCelebrities from '../src/components/celebrity/MoreCelebrities';
import PersonSlider from '../src/components/celebrity/PersonSlider';
import PinkPurpleGradient from '../src/components/celebrity/PinkPurpleGradient';
import PreviewAccordion from '../src/components/celebrity/PreviewAccordion';
import Profiles from '../src/components/celebrity/Profiles';
import RecentVideoSlider from '../src/components/celebrity/RecentVideoSlider';
import ServicesSlider from '../src/components/celebrity/ServicesSlider';
import SessionInfoGrid from '../src/components/celebrity/SessionInfoGrid';
import ThingsToKnow from '../src/components/celebrity/ThingsToKnow';
import WorkshopExperience from '../src/components/common/WorkshopExperience';
import Review from '../src/components/workshop/Review';
import BannerMobile from '../src/components/celebrity/BannerMobile';

const Celebrity: NextPage = () => {
  const { width } = useViewport();
  const [sectionVisible, setSectionVisible] = useState<boolean>(false);

  const onChange = (isVisible: boolean) => {
    setSectionVisible(isVisible);
  };

  const offsetHeight = process.browser ? window.innerHeight - 950 : '';

  return (
    <>
      <style>
        {`header.mobile_header, .mobile_floating_header {
            display: none;
          }
          .booking-card-wrapper {
            opacity: ${sectionVisible ? '0' : '1'};
          }`}
      </style>
      <Head>
        <title>Celebrity: Country Locals</title>
      </Head>
      <div className="bg-[#FBFBFB] pb-10">
        <Intro />

        {width > 1063 ? <Banner /> : <BannerMobile />}

        <PinkPurpleGradient />

        <SessionInfoGrid />

        <Profiles />

        <VisibilitySensor
          onChange={onChange}
          partialVisibility
          offset={{ bottom: offsetHeight }}
        >
          <div>
            <PreviewAccordion />
            <CelebrityProfile />
          </div>
        </VisibilitySensor>

        <ThingsToKnow />

        <GoodToKnow />

        <CelebrityFaq />

        <DeliverySlider />

        <Review />

        <WorkshopExperience />

        <PersonSlider />

        <ServicesSlider />

        <MoreCelebrities />

        <RecentVideoSlider />
      </div>
    </>
  );
};
export default Celebrity;
