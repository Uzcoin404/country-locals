/* eslint react/no-array-index-key: "off" */
/* eslint react/no-unescaped-entities: "off" */
/* eslint @typescript-eslint/no-shadow: "off" */
import { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog } from '@headlessui/react';
import Image from 'next/image';
import useViewport from '../../../hooks/useViewport';
import { OverflowContext } from '../../../context/overflowContext';

import CloseIcon from '../../../../public/icons/xmark.svg';
import StarIcon from '../../../../public/icons/star.svg';
import SearchIcon from '../../../../public/icons/charm_search.svg';

interface ReviewPopupPropsType {
  status: boolean;
  onClose: () => void;
}

const ReviewPopup = ({ status, onClose }: ReviewPopupPropsType) => {
  const { width } = useViewport();
  const { setGlobalOverflow } = useContext(OverflowContext);
  const reviews = [
    { id: 1, hasImage: true, hasResponse: true },
    { id: 2, hasImage: false, hasResponse: false },
    { id: 3, hasImage: false, hasResponse: false },
    { id: 4, hasImage: false, hasResponse: false },
    { id: 5, hasImage: false, hasResponse: false },
    { id: 6, hasImage: false, hasResponse: true },
  ];

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
          className="fixed inset-0 z-20 md:flex md:items-center md:justify-center"
        >
          <Dialog.Overlay className="absolute top-0 left-0 h-full w-full bg-black opacity-40" />

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
            className="fixed bottom-0 z-10 w-full md:relative md:w-11/12 md:max-w-[805px]"
          >
            <div className="relative rounded-tl-lg rounded-tr-lg bg-white pb-1 md:rounded-lg md:shadow-xl">
              <div className="flex h-12 items-center justify-center border-b border-b-[#E8E8E8] md:h-14">
                <button
                  type="button"
                  className="group absolute right-4 top-2 p-2 md:top-3"
                  onClick={() => {
                    if (width < 768) {
                      setGlobalOverflow(false);
                    }
                    onClose();
                  }}
                >
                  <div className="svg_icon w-4 text-[#BCBCBC] group-hover:text-black">
                    <CloseIcon />
                  </div>
                </button>
                <h4 className="text-center text-lg font-bold text-black">
                  Reviews
                </h4>
              </div>

              <div
                className="custom_scrollbar overflow-y-auto bg-white px-6 pb-6 pt-3 md:max-h-[85vh]"
                style={{
                  height: width < 1064 ? window.innerHeight - 70 : 'auto',
                }}
              >
                <h3 className="mt-2 flex items-center text-lg font-bold leading-tight text-black">
                  <div className="svg_icon mr-2 w-5">
                    <StarIcon />
                  </div>
                  4.99 (137 reviews)
                </h3>

                <div className="relative mt-4 mb-5">
                  <div className="absolute top-[13px] left-5 w-5 text-[#A9A9A9]">
                    <SearchIcon />
                  </div>
                  <input
                    type="text"
                    className="h-12 w-full rounded-full border border-[#A9A9A9] pl-12 text-xs text-black placeholder:text-[#A9A9A9] focus-visible:border-black focus-visible:outline-none"
                    placeholder="Search any Topic or Mentor"
                  />
                </div>

                <div className="mb-4 flex flex-wrap">
                  <div className="w-full">
                    <div className="mb-3 flex items-center justify-between">
                      <p className="text-xs font-bold text-[#737373]">
                        Quality of activity
                      </p>
                      <div className="flex items-center">
                        <div className="relative h-[6px] w-[154px] overflow-hidden rounded-full bg-[#D9D9D9]">
                          <div className="absolute left-0 top-0 h-full w-[90%] bg-[#E71575]" />
                        </div>
                        <p className="ml-2 w-6 text-[11px] font-bold text-[#737373]">
                          90%
                        </p>
                      </div>
                    </div>
                    <div className="mb-3 flex items-center justify-between">
                      <p className="text-xs font-bold text-[#737373]">
                        Overall Impression
                      </p>
                      <div className="flex items-center">
                        <div className="relative h-[6px] w-[154px] overflow-hidden rounded-full bg-[#D9D9D9]">
                          <div className="absolute left-0 top-0 h-full w-[87%] bg-[#E71575]" />
                        </div>
                        <p className="ml-2 w-6 text-[11px] font-bold text-[#737373]">
                          87%
                        </p>
                      </div>
                    </div>
                    <div className="mb-3 flex items-center justify-between">
                      <p className="text-xs font-bold text-[#737373]">
                        Value for money
                      </p>
                      <div className="flex items-center">
                        <div className="relative h-[6px] w-[154px] overflow-hidden rounded-full bg-[#D9D9D9]">
                          <div className="absolute left-0 top-0 h-full w-[50%] bg-[#E71575]" />
                        </div>
                        <p className="ml-2 w-6 text-[11px] font-bold text-[#737373]">
                          50%
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="mb-3 flex items-center justify-between">
                      <p className="text-xs font-bold text-[#737373]">
                        Seller communication
                      </p>
                      <div className="flex items-center">
                        <div className="relative h-[6px] w-[154px] overflow-hidden rounded-full bg-[#D9D9D9]">
                          <div className="absolute left-0 top-0 h-full w-full bg-[#E71575]" />
                        </div>
                        <p className="ml-2 w-6 text-[11px] font-bold text-[#737373]">
                          100%
                        </p>
                      </div>
                    </div>
                    <div className="mb-3 flex items-center justify-between">
                      <p className="text-xs font-bold text-[#737373]">
                        Would Recommended
                      </p>
                      <div className="flex items-center">
                        <div className="relative h-[6px] w-[154px] overflow-hidden rounded-full bg-[#D9D9D9]">
                          <div className="absolute left-0 top-0 h-full w-[60%] bg-[#E71575]" />
                        </div>
                        <p className="ml-2 w-6 text-[11px] font-bold text-[#737373]">
                          60%
                        </p>
                      </div>
                    </div>
                    <div className="mb-3 flex items-center justify-between">
                      <p className="text-xs font-bold text-[#737373]">
                        Service as described
                      </p>
                      <div className="flex items-center">
                        <div className="relative h-[6px] w-[154px] overflow-hidden rounded-full bg-[#D9D9D9]">
                          <div className="absolute left-0 top-0 h-full w-[70%] bg-[#E71575]" />
                        </div>
                        <p className="ml-2 w-6 text-[11px] font-bold text-[#737373]">
                          70%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap justify-between gap-y-5">
                  {reviews.map((item, index) => (
                    <div key={index} className="w-full">
                      <div className="flex flex-wrap items-center justify-between md:flex-nowrap">
                        <div className="flex items-center">
                          <div className="mr-4 flex h-[50px] w-[50px] overflow-hidden rounded-full md:h-[76px] md:w-[76px]">
                            <Image
                              src="/review-popup-1.jpg"
                              width={76}
                              height={76}
                            />
                          </div>
                          <div>
                            <p className="text-base font-semibold">Jennifer</p>
                            <p className="text-xs text-[#5F5D5f]">
                              February 2022
                            </p>
                          </div>
                        </div>
                        <h3 className="mt-4 w-full text-lg font-semibold md:mt-0 md:w-auto md:text-center md:text-xl">
                          “Wonderful experience”
                        </h3>
                        <div className="flex items-center text-base md:text-lg">
                          <div className="svg_icon mr-2 w-3">
                            <StarIcon />
                          </div>
                          4.99
                        </div>
                      </div>

                      <div className="mt-2 mb-6 text-sm text-[#5F5D5D] md:mb-8 md:mt-5">
                        The online Experience was a great mix of learning
                        something new and doing it right there during the
                        session under the Host's guidance. It was nice to learn
                        the origins & significance of 0M, then chanting 0M
                        together. Roopak is very gentle & generous and answered
                        all my questions patiently. He made the process of 0M
                        chanting seem so simple & meaningful.
                      </div>
                      {item.hasImage && (
                        <div className="mb-5 flex gap-3 md:mb-8 md:ml-5">
                          {[...Array(3)].map((img, index) => (
                            <div
                              key={index}
                              className="flex items-center overflow-hidden rounded-md"
                            >
                              <Image
                                src={`/review-image-${index + 1}.jpg`}
                                width={100}
                                height={100}
                              />
                            </div>
                          ))}
                        </div>
                      )}

                      {item.hasResponse && (
                        <>
                          <h4 className="mb-3 text-lg font-semibold md:ml-5">
                            Mentor’s response:
                          </h4>
                          <div className="ml-4 mr-5 mb-5 flex flex-wrap items-center md:mb-8 md:flex-nowrap">
                            <div className="mr-4 flex h-[50px] w-[50px] shrink-0 overflow-hidden rounded-full md:h-[76px] md:w-[76px]">
                              <Image
                                src="/review-popup-2.jpg"
                                width={76}
                                height={76}
                              />
                            </div>
                            <div className="mt-3 bg-gray-100 px-3 py-2 text-sm text-[#5F5D5f] md:mt-0">
                              Hello Amy We highly appreciate your time taken to
                              give a review of your 4 day weekend retreat Thank
                              you for flying in to attend and we are very happy
                              to know you enjoyed your stay. Take care and we
                              are sure we shall all meet again, Kind regards
                              Rose & Fushin
                            </div>
                          </div>
                        </>
                      )}
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
export default ReviewPopup;
