import { useContext } from 'react';
import { Dialog } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { OverflowContext } from '../../../context/overflowContext';
import useViewport from '../../../hooks/useViewport';

import CloseIcon from '../../../../public/icons/xmark.svg';

interface FaqDetailsPopoverTypes {
  status: boolean;
  onClose: () => void;
}

const FaqDetailsPopover = ({ status, onClose }: FaqDetailsPopoverTypes) => {
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
                  FAQ
                </h4>
              </div>

              <div
                className="custom_scrollbar overflow-y-auto bg-white px-6 pb-6 pt-5 md:max-h-[90vh]"
                style={{
                  height: width < 1064 ? window.innerHeight - 70 : 'auto',
                }}
              >
                <div>
                  <p className="mb-5 text-lg font-bold md:text-[18px]">
                    How many guests can stay at that place?
                  </p>
                  <p>
                    Tortor pellentesque nec sit nulla volutpat curabitur mattis
                    fusce condimentum. Nulla orci congue praesent nullam vitae
                    nibh. Sed sit sed eu lectus mi amet egestas. Sed sit sed eu
                    lectus mi amet egestas. Sit sed eu lectus mi amet egestas
                    sit sed eu lectus mi amet egestas. Tortor pellentesque nec
                    sit nulla volutpat curabitur mattis fusce condimentum. Nulla
                    orci congue praesent nullam vitae nibh. Sed sit sed eu
                    lectus mi amet egestas. Sed sit sed eu lectus mi amet
                    egestas. Sit sed eu lectus mi amet egestas sit sed eu lectus
                    mi amet egestas. Tortor pellentesque nec sit nulla volutpat
                    curabitur mattis fusce condimentum. Nulla orci congue
                    praesent nullam vitae nibh. Sed sit sed eu lectus mi amet
                    egestas. Sed sit sed eu lectus mi amet egestas. Sit sed eu
                    lectus mi amet egestas sit sed eu lectus mi amet egestas.
                    Tortor pellentesque.
                  </p>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      )}
    </AnimatePresence>
  );
};
export default FaqDetailsPopover;
