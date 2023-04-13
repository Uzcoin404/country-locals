import { useContext } from 'react';
import { Dialog } from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { OverflowContext } from '../../../context/overflowContext';
import useViewport from '../../../hooks/useViewport';

import ChatIcon from '../../../../public/icons/chat-filled.svg';
import GlobeIcon from '../../../../public/icons/globe-filled.svg';
import MonitorCameraIcon from '../../../../public/icons/monitor-camera.svg';
import TimeIcon from '../../../../public/icons/time-filled.svg';
import CloseIcon from '../../../../public/icons/xmark.svg';

/* eslint react/no-array-index-key: "off" */
interface BookInfoPopupPropsType {
  status: boolean;
  onClose: () => void;
}

const BookInfoPopup = ({ status, onClose }: BookInfoPopupPropsType) => {
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
            className="fixed bottom-0 z-10 w-full md:w-11/12 lg:relative lg:max-w-[550px]"
          >
            <div className="relative overflow-hidden rounded-tl-lg rounded-tr-lg bg-white md:rounded-lg md:shadow-xl">
              <div className="flex items-center justify-center border-b border-b-[#E8E8E8] md:h-14">
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
                <h4 className="max-w-[80%] py-3 text-center text-lg font-bold text-black md:max-w-[100%] lg:py-0">
                  How does a “One Day” workshop work?
                </h4>
              </div>

              <div
                className="custom_scrollbar overflow-y-auto bg-white px-6 pb-6 pt-5 md:max-h-[90vh]"
                style={{
                  height: width < 1064 ? window.innerHeight - 100 : 'auto',
                }}
              >
                <div className="">
                  <div className="mb-3 flex items-center md:mb-4">
                    <div className="svg_icon mr-3 w-6 shrink-0 text-[#8796A0]">
                      <TimeIcon />
                    </div>
                    <div className="text-base text-[#444] md:leading-tight">
                      Meets multiple times at scheduled times
                    </div>
                  </div>
                  <div className="mb-3 flex items-center md:mb-4">
                    <div className="svg_icon mr-4 w-5 shrink-0 text-[#8796A0]">
                      <MonitorCameraIcon />
                    </div>
                    <div className="text-base text-[#444] md:leading-tight">
                      Live video chats, recorded and monitored for safety and
                      quality
                    </div>
                  </div>
                  <div className="mb-3 flex items-center md:mb-4">
                    <div className="svg_icon mr-3 w-6 shrink-0 text-[#8796A0]">
                      <ChatIcon />
                    </div>
                    <div className="text-base text-[#444] md:leading-tight">
                      Discussions via classroom forum and private messages with
                      the teacher
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="svg_icon mr-3 w-6 shrink-0 text-[#8796A0]">
                      <GlobeIcon />
                    </div>
                    <div className="text-base text-[#444] md:leading-tight">
                      Great for engaging projects and interacting with diverse
                      classmates from other states and countries
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
export default BookInfoPopup;
