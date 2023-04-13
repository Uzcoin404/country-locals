/* eslint @next/next/no-img-element: "off" */
import { useContext } from 'react';
import { FreeMode, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Dialog } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { OverflowContext } from '../../../context/overflowContext';
import useViewport from '../../../hooks/useViewport';

import CloseIcon from '../../../../public/icons/xmark.svg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

interface LightBoxWithGalleryTypes {
  status: boolean;
  onClose: () => void;
  images: {
    id: number;
    thumbnail: string;
    fullSize: string;
    current: boolean;
  }[];
}

const LightBoxWithGallery = ({
  status,
  onClose,
  images,
}: LightBoxWithGalleryTypes) => {
  const { width } = useViewport();
  const { setGlobalOverflow } = useContext(OverflowContext);
  const selectedIndex = images?.find((image) => image.current)?.id || 1;

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
                duration: 0.3,
              },
            },
            exit: { opacity: 0 },
          }}
          initial="initial"
          animate="animate"
          exit="exit"
          open={status}
          onClose={onClose}
          className="fixed inset-0 z-30 flex items-center justify-center"
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
              initial: { opacity: 0 },
              animate: {
                opacity: 1,
                transition: {
                  duration: 0.3,
                },
              },
              exit: {
                opacity: 0,
                transition: {
                  duration: 0.3,
                },
              },
            }}
            className="fixed z-10 w-full md:w-11/12 lg:relative lg:max-w-[1100px]"
          >
            <div className="relative overflow-hidden rounded-tl-lg rounded-tr-lg bg-white md:rounded-lg md:shadow-xl">
              <div className="flex h-4 items-center justify-center md:h-9">
                <button
                  type="button"
                  className="absolute right-1 top-1 p-2 md:right-4 md:top-3"
                  onClick={() => {
                    onClose();
                    setGlobalOverflow(false);
                  }}
                >
                  <div className="svg_icon w-4 text-[#000]">
                    <CloseIcon />
                  </div>
                </button>
              </div>

              <div className="custom_scrollbar overflow-y-auto bg-white px-2 pb-4 pt-5 md:px-6 md:pb-7">
                <div className="lightBox_gallery_slider relative">
                  <Swiper
                    spaceBetween={10}
                    modules={[FreeMode, Navigation]}
                    navigation
                    className="overflow-hidden rounded-lg"
                    initialSlide={selectedIndex - 1}
                  >
                    {images.map((image) => (
                      <SwiperSlide key={image.id}>
                        <div className="relative flex overflow-hidden rounded-lg pb-[65%]">
                          <img
                            src={image.fullSize}
                            alt={image.fullSize}
                            className="absolute w-full object-cover"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      )}
    </AnimatePresence>
  );
};
export default LightBoxWithGallery;
