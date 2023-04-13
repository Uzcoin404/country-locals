import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog } from '@headlessui/react';

import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';
import FourthStep from './FourthStep';
import FifthStep from './FifthStep';

import CloseIcon from '../../../../../public/icons/xmark.svg';

interface ReportPopupPropsType {
  status: boolean;
  onClose: () => void;
}

const ReportPopup = ({ status, onClose }: ReportPopupPropsType) => {
  const [activeStep, setActiveStep] = useState(1);

  const handleReportComplete = () => {
    setActiveStep(1);
    onClose();
  };

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
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          <Dialog.Overlay className="absolute inset-0 bg-black opacity-40" />
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
            className="fixed bottom-0 z-10 w-full md:relative md:w-11/12 md:max-w-[500px]"
          >
            <div className="relative rounded-tl-lg rounded-tr-lg bg-white md:rounded-lg md:shadow-xl">
              <div className="flex h-12 items-center justify-center border-b border-b-[#E8E8E8] md:h-12">
                <button
                  type="button"
                  className="group absolute right-4 p-2 md:top-2"
                  onClick={handleReportComplete}
                >
                  <div className="svg_icon w-4 text-[#BCBCBC] group-hover:text-black">
                    <CloseIcon />
                  </div>
                </button>
              </div>

              <div className="custom_scrollbar max-h-[70vh] overflow-y-auto bg-white px-6 pb-7 pt-3">
                {activeStep === 1 && <FirstStep />}
                {activeStep === 2 && <SecondStep />}
                {activeStep === 3 && <ThirdStep />}
                {activeStep === 4 && <FourthStep />}
                {activeStep === 5 && <FifthStep />}
              </div>
              <div className="flex items-center justify-between px-6 pt-4 pb-6 text-[18px] md:pt-0 md:text-base">
                <button
                  type="button"
                  className={`text-sm text-black underline ${
                    (activeStep === 1 || activeStep > 4) &&
                    'invisible opacity-0'
                  }`}
                  onClick={() => setActiveStep(activeStep - 1)}
                >
                  Back
                </button>

                <button
                  type="button"
                  className={`${
                    activeStep > 4 && 'invisible opacity-0'
                  } rounded-md border-2 border-black bg-black px-6 py-2 text-sm font-semibold text-white hover:bg-transparent hover:text-black md:text-xs`}
                  onClick={() => setActiveStep(activeStep + 1)}
                >
                  Next
                </button>

                {activeStep === 5 && (
                  <button
                    type="button"
                    className="rounded-md border-2 border-black bg-black px-6 py-2 text-xs font-semibold text-white hover:bg-transparent hover:text-black"
                    onClick={handleReportComplete}
                  >
                    Okay
                  </button>
                )}
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      )}
    </AnimatePresence>
  );
};
export default ReportPopup;
