import { useContext } from 'react';
import { Dialog } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { OverflowContext } from '../../../context/overflowContext';
import useViewport from '../../../hooks/useViewport';

import CloseIcon from '../../../../public/icons/xmark.svg';
import Checkmark from '../../../../public/icons/checked-purple.svg';

interface AboutPropertyPopoverTypes {
  status: boolean;
  onClose: () => void;
}

const AboutPropertyPopover = ({
  status,
  onClose,
}: AboutPropertyPopoverTypes) => {
  const { width } = useViewport();
  const { setGlobalOverflow } = useContext(OverflowContext);

  return (
    <AnimatePresence>
      {status && (
        <Dialog
          static
          as={motion.div}
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: {
                duration: 0.2,
              },
            },
            exit: { opacity: 0 },
          }}
          initial="initial"
          animate="animate"
          exit="exit"
          open={status}
          onClose={onClose}
          className="fixed inset-0 z-30 md:flex md:items-center md:justify-center"
        >
          <Dialog.Overlay
            onClick={() => {
              if (width < 768) {
                setGlobalOverflow(false);
              }
            }}
            className="absolute top-0 left-0 h-full w-full bg-black opacity-40"
          />

          <Dialog.Panel
            as={motion.div}
            variants={{
              initial: { opacity: 0, y: 100 },
              animate: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.3,
                },
              },
              exit: {
                opacity: 0,
                y: 100,
                transition: {
                  duration: 0.3,
                },
              },
            }}
            className="fixed bottom-0 z-10 w-full md:w-11/12 lg:relative lg:max-w-[780px]"
          >
            <div className="relative overflow-hidden rounded-tl-lg rounded-tr-lg bg-white md:rounded-lg md:shadow-xl">
              <div className="flex h-12 items-center justify-center border-b border-b-[#E8E8E8] md:h-14">
                <button
                  type="button"
                  className="group absolute right-4 top-2 p-2 md:top-3"
                  onClick={() => {
                    onClose();
                    setGlobalOverflow(false);
                  }}
                >
                  <div className="svg_icon w-4 text-[#BCBCBC] group-hover:text-[#000]">
                    <CloseIcon />
                  </div>
                </button>
                <h4 className="text-center text-lg font-bold text-black">
                  About the Property
                </h4>
              </div>

              <div
                className="custom_scrollbar overflow-y-auto bg-white px-6 pb-6 pt-5 md:max-h-[90vh]"
                style={{
                  height: width < 1064 ? window.innerHeight - 70 : 'auto',
                }}
              >
                <div>
                  <p className="mb-5 text-base text-[#808080] md:text-[18px]">
                    Hloyo Village is located on Doi Mae Salong in Chiang Rai.
                    The Akha, a hill tribe, lives here in a very simple way.
                    Their Thai might not be very fluent, so sometimes you need
                    to use your body language and of course your heart when you
                    speak with them! Leave all the hustle and bustle behind and
                    lets relax. Staying in a traditional clay house, sipping hot
                    coffee, watching a sunrise doesnt it sound right enough to
                    leave everything and just come here!?
                  </p>

                  {[1, 2, 3, 4, 5].map((item) => (
                    <div key={item} className="flex items-start py-[8px]">
                      <div className="svg_icon w-10 text-[#E71575] md:w-6">
                        <Checkmark />
                      </div>
                      <div className="ml-2 text-sm">
                        Experience to taste hill tribe food, prepare ingredients
                        and learn how to cook Ahka food with hosts
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      )}
    </AnimatePresence>
  );
};
export default AboutPropertyPopover;
