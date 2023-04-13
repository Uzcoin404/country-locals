import { useState } from 'react';
import useViewport from '../../hooks/useViewport';
import UnderLine from '../common/UnderLine';

import Checkmark from '../../../public/icons/checked-purple.svg';
import AboutPropertyPopover from './popovers/AboutPropertyPopover';

const AboutProperty = () => {
  const { width } = useViewport();
  const [openPopup, setOpenPopup] = useState<boolean>(false);

  return (
    <div>
      <div>
        <h3 className="mb-3 text-[22px] font-bold text-[#222] ">
          Description about the Property
        </h3>
        <div className="mb-5 flex gap-2">
          {['History & Culture', 'Art & Paint', 'Education'].map((item) => (
            <button
              type="button"
              key={item}
              className="rounded-md bg-[#f8f8f8] py-1 px-3 text-center text-xs text-[#808080] hover:bg-pink_primary hover:text-white"
            >
              {item}
            </button>
          ))}
        </div>

        {width > 1063 ? (
          <>
            <p className="mb-5 text-base text-[#808080] md:text-[18px]">
              Hloyo Village is located on Doi Mae Salong in Chiang Rai. The
              Akha, a hill tribe, lives here in a very simple way. Their Thai
              might not be very fluent, so sometimes you need to use your body
              language and of course your heart when you speak with them! Leave
              all the hustle and bustle behind and lets relax. Staying in a
              traditional clay house, sipping hot coffee, watching a sunrise
              doesnt it sound right enough to leave everything and just come
              here!?
            </p>

            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="flex items-start py-[8px]">
                <div className="svg_icon w-10 text-[#E71575] md:w-6">
                  <Checkmark />
                </div>
                <div className="ml-2 text-sm">
                  Experience to taste hill tribe food, prepare ingredients and
                  learn how to cook Ahka food with hosts
                </div>
              </div>
            ))}
          </>
        ) : (
          <>
            <p className="mb-5 text-base text-[#808080] md:text-[18px]">
              Hloyo Village is located on Doi Mae Salong in Chiang Rai. The
              Akha, a hill tribe, lives here in a very simple way.
              <button
                type="button"
                className="ml-1 font-semibold text-[#E71575]"
                onClick={() => setOpenPopup(true)}
              >
                Read More
              </button>
            </p>
            <AboutPropertyPopover
              status={openPopup}
              onClose={() => setOpenPopup(false)}
            />
          </>
        )}
      </div>
      <UnderLine />
    </div>
  );
};

export default AboutProperty;
