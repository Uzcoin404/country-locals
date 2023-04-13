/* eslint react/no-unescaped-entities: "off" */
/* eslint react/jsx-one-expression-per-line: "off" */
import { useContext } from 'react';
import { Dialog } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { OverflowContext } from '../../../context/overflowContext';
import useViewport from '../../../hooks/useViewport';

import CloseIcon from '../../../../public/icons/xmark.svg';

interface CancellationPopoverTypes {
  status: boolean;
  onClose: () => void;
}

const CancellationPopover = ({ status, onClose }: CancellationPopoverTypes) => {
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
            className="fixed bottom-0 z-10 w-full lg:relative lg:w-11/12 lg:max-w-[580px]"
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
                  Cancellation policy
                </h4>
              </div>

              <div
                className="custom_scrollbar overflow-y-auto bg-white px-6 pb-6 pt-3 lg:max-h-[90vh]"
                style={{
                  height: width < 1064 ? window.innerHeight - 70 : 'auto',
                }}
              >
                <div className="mt-3">
                  <p className="text-sm leading-normal">
                    Before you book, make sure you're comfortable with this
                    Host's cancellation policy. Keep in mind that CountryLocal's{' '}
                    <a className="underline">Extenuating Circumstances</a>{' '}
                    policy doesn't cover cancellations due to illness or travel
                    disruptions caused by COVID-19.
                  </p>
                  <h4 className="mt-5 text-lg">Cancel by</h4>
                  <div className="pb-5">
                    <div className="flex w-full cursor-pointer items-center gap-x-1 border-b border-b-slate-200 py-6 text-sm text-[#4A4A4A]">
                      <div className="w-1/5">
                        <p className="font-semibold">1st Jan</p>
                        <p className="mt-1 text-xs">2:00 pm</p>
                      </div>
                      <div className="w-4/5">
                        Partial refund: Get back 50% of every night. No refund
                        of the service fee.
                      </div>
                    </div>
                    <div className="flex w-full cursor-pointer items-center gap-x-1 border-b border-b-slate-200 py-6 text-sm text-[#4A4A4A]">
                      <div className="w-1/5">
                        <p className="font-semibold">1st Jan</p>
                        <p className="mt-1 text-xs">2:00 pm</p>
                      </div>
                      <div className="w-4/5">
                        Partial refund: Get back 50% of every night. No refund
                        of the service fee.
                      </div>
                    </div>
                  </div>
                  <Link href="/">
                    <a className="text-xs font-semibold underline">
                      Learn more about cancellation policies
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      )}
    </AnimatePresence>
  );
};
export default CancellationPopover;
