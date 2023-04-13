import Image from 'next/image';
import { safetyFeaturesData } from '../../utilities/dummy-api';
import UnderLine from '../common/UnderLine';

const SafetyFeatures = () => (
  <div>
    <h3 className="pb-8 text-[22px] font-bold text-[#222] ">Safety Features</h3>
    <div className="flex w-full flex-wrap justify-start gap-y-5 md:gap-y-10">
      {safetyFeaturesData.map((item) => (
        <div
          className="flex w-full items-center gap-1 md:w-1/3 md:pr-2 lg:w-1/2 xl:w-1/3"
          key={Math.random() * 10}
        >
          <div className="flex w-[36px] shrink-0 items-center text-[#E71575]">
            <Image src={item.icon} alt="icon" width="26px" height="26px" />
          </div>
          <p className="text-base font-semibold text-[#222] ">{item.title}</p>
        </div>
      ))}
    </div>
    <UnderLine />
  </div>
);

export default SafetyFeatures;
