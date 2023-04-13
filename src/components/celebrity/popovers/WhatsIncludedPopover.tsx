import { useContext } from 'react';
import { Dialog } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { OverflowContext } from '../../../context/overflowContext';
import useViewport from '../../../hooks/useViewport';

import CloseIcon from '../../../../public/icons/xmark.svg';

interface WhatsIncludedPopoverTypes {
  status: boolean;
  onClose: () => void;
}

const WhatsIncludedPopover = ({
  status,
  onClose,
}: WhatsIncludedPopoverTypes) => {
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
                  What&apos;s included
                </h4>
              </div>

              <div
                className="custom_scrollbar overflow-y-auto bg-white px-6 pb-6 pt-5 md:max-h-[90vh]"
                style={{
                  height: width < 1064 ? window.innerHeight - 70 : 'auto',
                }}
              >
                <div>
                  <div className="mb-8">
                    <h4 className="text-base font-bold text-black">Food</h4>
                    <div className="py-1 text-sm leading-normal opacity-60">
                      Snacks - Lunch
                    </div>
                    <div className="text-sm text-[#000] opacity-90">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Aliquam, dolorem.
                    </div>
                  </div>
                  <div className="mb-8">
                    <h4 className="text-base font-bold text-black">Tickets</h4>
                    <div className="py-1 text-sm leading-normal opacity-60">
                      Entrance Fees
                    </div>
                    <div className="text-sm text-[#000] opacity-90">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Aliquam, dolorem.
                    </div>
                  </div>
                  <div className="mb-8">
                    <h4 className="text-base font-bold text-black">
                      Transportation
                    </h4>
                    <div className="py-1 text-sm leading-normal opacity-60">
                      Car
                    </div>
                    <div className="text-sm text-[#000] opacity-90">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Aliquam, dolorem.
                    </div>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-black">
                      Equipments
                    </h4>
                    <div className="py-1 text-sm leading-normal opacity-60">
                      Laptops/ Phones
                    </div>
                    <div className="text-sm leading-normal text-[#000] opacity-90">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Aliquam, dolorem. Lorem ipsum dolor, sit amet consectetur
                      adipisicing elit. Aliquam, dolorem.
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
export default WhatsIncludedPopover;
