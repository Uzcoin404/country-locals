import { useContext } from 'react';
import { Dialog } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { OverflowContext } from '../../../context/overflowContext';
import useViewport from '../../../hooks/useViewport';

import CloseIcon from '../../../../public/icons/xmark.svg';

interface PriceBreakdownPopoverTypes {
  status: boolean;
  onClose: () => void;
}

const PriceBreakdownPopover = ({
  status,
  onClose,
}: PriceBreakdownPopoverTypes) => {
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
            className="fixed bottom-0 z-50 w-full md:w-11/12 lg:relative lg:max-w-[450px]"
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
                  Price Breakdown
                </h4>
              </div>

              <div
                className="custom_scrollbar overflow-y-auto bg-white px-6 pb-6 pt-5 md:max-h-[90vh]"
                style={{
                  height: width < 1064 ? window.innerHeight - 70 : 'auto',
                }}
              >
                <div>
                  <div className="mb-6 border-b border-b-[#E8E8E8] pb-6">
                    <h4 className="text-base font-semibold">
                      Individual Prices
                    </h4>
                    <div className="mt-4 flex items-center justify-between text-sm">
                      <p>Adult</p>
                      <p>From $45</p>
                    </div>
                    <div className="mt-4 flex items-center justify-between text-sm">
                      <p>Child(ages 2-12)</p>
                      <p>From $45</p>
                    </div>
                    <div className="mt-4 flex items-center justify-between text-sm">
                      <p>Infant (under 2)</p>
                      <p>From $45</p>
                    </div>
                  </div>

                  <div className="pb-6">
                    <h4 className="text-base font-semibold">Private group</h4>
                    <div className="mt-4 flex items-center justify-between text-sm">
                      <p>Up to 30 guest</p>
                      <p>From $45</p>
                    </div>
                    <div className="mt-4 flex items-center justify-between text-sm">
                      <p>
                        Final Price will be determined by the number of guests.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      )}
    </AnimatePresence>
  );
};
export default PriceBreakdownPopover;
