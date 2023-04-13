/* eslint react/no-unescaped-entities: "off" */
/* eslint react/jsx-one-expression-per-line: "off" */
import { useContext } from 'react';
import { Dialog } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { OverflowContext } from '../../../context/overflowContext';
import useViewport from '../../../hooks/useViewport';

import CloseIcon from '../../../../public/icons/xmark.svg';
import ArrowIcon from '../../../../public/icons/chevron-right.svg';

interface MeetingLocationPopoverTypes {
  status: boolean;
  onClose: () => void;
}

const MeetingLocationPopover = ({
  status,
  onClose,
}: MeetingLocationPopoverTypes) => {
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
            className="fixed bottom-0 z-10 w-full lg:relative lg:w-11/12 lg:max-w-[1200px]"
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
                  Where you’ll be
                </h4>
              </div>

              <div
                className="custom_scrollbar overflow-y-auto bg-white px-6 pb-6 pt-3 lg:max-h-[90vh]"
                style={{
                  height: width < 1064 ? window.innerHeight - 70 : 'auto',
                }}
              >
                <div className="flex flex-wrap-reverse items-center py-3 md:flex-nowrap">
                  <div className="w-full md:w-1/3">
                    <h3 className="mb-6 text-2xl font-bold text-[#222]">
                      Where you’ll be
                    </h3>
                    <div className="mb-6">
                      <p className="mb-3 text-base font-semibold text-[#222]">
                        Jaisamand, Rajasthan, India
                      </p>
                      <p className="mb-4 text-sm">
                        Jaisamand Lake is the largest man made lake is Asia and
                        the second largest in the World. The villa is located on
                        an island and is a 3 km boat ride to...
                      </p>
                      <Link href="/">
                        <a className="flex items-center text-xs font-semibold underline">
                          Read More
                          <span className="ml-2 w-3">
                            <ArrowIcon />
                          </span>
                        </a>
                      </Link>
                    </div>
                    <div>
                      <p className="mb-3 text-base font-semibold text-[#222]">
                        Getting around
                      </p>
                      <p className="mb-4 text-sm">
                        Jaisamand Lake is the largest man made lake is Asia and
                        the second largest in the World. The villa is located on
                        an island and is a 3 km boat.
                      </p>
                    </div>
                  </div>
                  <div className="mb-5 w-full md:mb-0 md:w-2/3 md:pl-10">
                    <div className="w-full">
                      <iframe
                        title="map"
                        width="100%"
                        height="600"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight={0}
                        marginWidth={0}
                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(Country%20Locals)&amp;t=&amp;z=20&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                      />
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
export default MeetingLocationPopover;
