import { motion, AnimatePresence } from 'framer-motion';
import { Dialog } from '@headlessui/react';
import {
  overlayAnimation,
  overlayWrapperReveal,
} from '../../../utilities/animations';

import CloseIcon from '../../../../public/icons/xmark.svg';
import TimeIcon from '../../../../public/icons/time-filled.svg';
import MonitorCameraIcon from '../../../../public/icons/monitor-camera.svg';
import ChatIcon from '../../../../public/icons/chat-filled.svg';
import GlobeIcon from '../../../../public/icons/globe-filled.svg';

/* eslint react/no-array-index-key: "off" */
interface MultiDayInfoPopupPropsType {
  status: boolean;
  onClose: () => void;
}

const MultiDayInfoPopup = ({ status, onClose }: MultiDayInfoPopupPropsType) => (
  <AnimatePresence>
    {status && (
      <Dialog
        static
        as={motion.div}
        variants={overlayAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        open={status}
        onClose={onClose}
        className="fixed inset-0 z-20 flex items-center justify-center"
      >
        <Dialog.Overlay className="absolute inset-0 bg-black opacity-40" />
        <Dialog.Panel
          as={motion.div}
          variants={overlayWrapperReveal}
          className="relative z-10 w-[95%] max-w-[515px] overflow-hidden rounded-xl bg-white p-4 pb-6 text-left shadow-xl md:p-6 md:pb-8"
        >
          <Dialog.Title
            as="h3"
            className="pt-3 text-base font-bold leading-tight text-black md:pt-0 md:text-[20px]"
          >
            How does a “Multi-Day” course work?
          </Dialog.Title>
          <div className="mt-4 md:mt-5">
            <div className="mb-3 flex items-center md:mb-4">
              <div className="svg_icon mr-3 w-6 shrink-0 text-[#8796A0]">
                <TimeIcon />
              </div>
              <div className="text-xs text-[#444] md:text-base md:leading-tight">
                Meets multiple times at scheduled times
              </div>
            </div>
            <div className="mb-3 flex items-center md:mb-4">
              <div className="svg_icon mr-4 w-5 shrink-0 text-[#8796A0]">
                <MonitorCameraIcon />
              </div>
              <div className="text-xs text-[#444] md:text-base md:leading-tight">
                Live video chats, recorded and monitored for safety and quality
              </div>
            </div>
            <div className="mb-3 flex items-center md:mb-4">
              <div className="svg_icon mr-3 w-6 shrink-0 text-[#8796A0]">
                <ChatIcon />
              </div>
              <div className="text-xs text-[#444] md:text-base md:leading-tight">
                Discussions via classroom forum and private messages with the
                teacher
              </div>
            </div>
            <div className="flex items-center">
              <div className="svg_icon mr-3 w-6 shrink-0 text-[#8796A0]">
                <GlobeIcon />
              </div>
              <div className="text-xs text-[#444] md:text-base md:leading-tight">
                Great for engaging projects and interacting with diverse
                classmates from other states and countries
              </div>
            </div>
          </div>

          <button
            type="button"
            className="group absolute right-2 top-2 p-2"
            onClick={onClose}
          >
            <div className="svg_icon w-4 text-[#BCBCBC] group-hover:text-[#76F4BA]">
              <CloseIcon />
            </div>
          </button>
        </Dialog.Panel>
      </Dialog>
    )}
  </AnimatePresence>
);
export default MultiDayInfoPopup;
