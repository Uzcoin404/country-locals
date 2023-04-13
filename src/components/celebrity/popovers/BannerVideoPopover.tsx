/* eslint react/jsx-one-expression-per-line: "off" */
import { Dialog } from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useContext } from 'react';
import ReactPlayer from 'react-player';
import { OverflowContext } from '../../../context/overflowContext';
import useViewport from '../../../hooks/useViewport';
import CloseIcon from '../../../../public/icons/xmark.svg';

interface BannerVideoPopoverTypes {
  status: boolean;
  onClose: () => void;
}

const BannerVideoPopover = ({ status, onClose }: BannerVideoPopoverTypes) => {
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
            className="fixed bottom-0 z-10 w-full md:w-11/12 lg:relative lg:max-w-[1000px]"
          >
            <div className="relative overflow-hidden rounded-tl-lg rounded-tr-lg bg-white md:rounded-xl md:shadow-xl">
              <div
                className="custom_scrollbar overflow-y-auto bg-white md:max-h-[90vh]"
                style={{
                  height: width < 1064 ? window.innerHeight - 60 : 'auto',
                }}
              >
                <div className="relative overflow-hidden">
                  <ReactPlayer
                    url="https://drive.google.com/uc?id=1ZMYDAQUIRuISS5ckSOVUtGE6dV5RRfW2"
                    width="100%"
                    height="100%"
                    controls
                    muted
                    playing
                  />
                </div>
                <div className="flex flex-wrap items-center justify-between gap-y-3 bg-[#0C111A] px-6 py-5 lg:py-7 lg:px-10">
                  <div className="text-white">
                    <p className="pb-2">Richard Seil</p>
                    <p className="text-lg font-bold lg:text-xl">
                      Designing Desserts: A 30 Day Class with Richard Seil
                    </p>
                  </div>
                  <button
                    type="button"
                    className="rounded-full border-2 border-[#02E8A1] bg-[#02E8A1] px-5 py-2 text-sm font-semibold text-[#0C111A] transition hover:bg-transparent hover:text-[#02E8A1] md:text-base lg:px-7 lg:py-3"
                  >
                    Start Now
                  </button>
                </div>
              </div>
              <button
                type="button"
                className="group absolute right-0 top-0 p-2"
                onClick={() => {
                  onClose();
                  setGlobalOverflow(false);
                }}
              >
                <div className="svg_icon w-4 text-[#fff]">
                  <CloseIcon />
                </div>
              </button>
            </div>
          </Dialog.Panel>
        </Dialog>
      )}
    </AnimatePresence>
  );
};
export default BannerVideoPopover;
