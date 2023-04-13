import { useContext } from 'react';
import { Dialog } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { OverflowContext } from '../../../context/overflowContext';
import { offersData } from '../../../utilities/dummy-api';
import useViewport from '../../../hooks/useViewport';

import CloseIcon from '../../../../public/icons/xmark.svg';

interface AmenitiesPopoverTypes {
  status: boolean;
  onClose: () => void;
}

const AmenitiesPopover = ({ status, onClose }: AmenitiesPopoverTypes) => {
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
            className="fixed bottom-0 z-10 w-full lg:relative lg:w-11/12 lg:max-w-[780px]"
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
                  What this place offers
                </h4>
              </div>

              <div
                className="custom_scrollbar overflow-y-auto bg-white px-6 pb-6 pt-3 lg:max-h-[90vh]"
                style={{
                  height: width < 1064 ? window.innerHeight - 70 : 'auto',
                }}
              >
                <div className="mb-10">
                  <h4 className="my-3 text-lg font-semibold">Bathroom</h4>
                  {offersData.map((item) => (
                    <div
                      className="flex w-full cursor-pointer items-center gap-x-1 border-b border-b-slate-200 py-6 text-[#4A4A4A]"
                      key={Math.random() * 10}
                    >
                      <div className="svg_icon w-[20px] ease-linear hover:bg-[#E71575] hover:text-[#fff]">
                        <item.icon />
                      </div>
                      <p className="ml-4 text-[14px]">{item.title}</p>
                    </div>
                  ))}
                </div>

                <div className="mb-10">
                  <h4 className="my-3 text-lg font-semibold">
                    Bedroom and laundry
                  </h4>
                  {offersData.map((item) => (
                    <div
                      className="flex w-full cursor-pointer items-center gap-x-1 border-b border-b-slate-200 py-6 text-[#4A4A4A]"
                      key={Math.random() * 10}
                    >
                      <div className="svg_icon w-[20px] ease-linear hover:bg-[#E71575] hover:text-[#fff]">
                        <item.icon />
                      </div>
                      <p className="ml-4 text-[14px]">{item.title}</p>
                    </div>
                  ))}
                </div>
                <div className="pb-10">
                  <h4 className="my-3 text-lg font-semibold">Entertainment</h4>
                  {offersData.map((item) => (
                    <div
                      className="flex w-full cursor-pointer items-center gap-x-1 border-b border-b-slate-200 py-6 text-[#4A4A4A]"
                      key={Math.random() * 10}
                    >
                      <div className="svg_icon w-[20px] ease-linear hover:bg-[#E71575] hover:text-[#fff]">
                        <item.icon />
                      </div>
                      <p className="ml-4 text-[14px]">{item.title}</p>
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
export default AmenitiesPopover;
