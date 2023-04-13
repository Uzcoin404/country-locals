import { useContext } from 'react';
import { useRouter } from 'next/router';
import { Dialog } from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { OverflowContext } from '../../../context/overflowContext';
import useViewport from '../../../hooks/useViewport';

import CopyIcon from '../../../../public/icons/fi_copy.svg';
import MailIcon from '../../../../public/icons/fi_mail.svg';
import MessageIcon from '../../../../public/icons/fi_message-circle.svg';
import FacebookIcon from '../../../../public/icons/fi_facebook.svg';
import SendIcon from '../../../../public/icons/fi_send.svg';
import TwitterIcon from '../../../../public/icons/fi_twitter.svg';
import InstagramIcon from '../../../../public/icons/fi_instagram.svg';
import MoreIcon from '../../../../public/icons/fi_more-horizontal.svg';
import CloseIcon from '../../../../public/icons/xmark.svg';

/* eslint react/no-array-index-key: "off" */
interface SharePopupPropsType {
  status: boolean;
  onClose: () => void;
}

const SharePopup = ({ status, onClose }: SharePopupPropsType) => {
  const { pathname } = useRouter();
  const { width } = useViewport();
  const { setGlobalOverflow } = useContext(OverflowContext);
  const siteUrl =
    typeof window === 'undefined' ? '' : window.location.origin + pathname;

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
            className="fixed bottom-0 z-10 w-full md:w-11/12 lg:relative lg:max-w-[340px]"
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
                  Share this experience
                </h4>
              </div>

              <div
                className="custom_scrollbar overflow-y-auto bg-white px-6 pb-6 pt-5 md:max-h-[90vh]"
                style={{
                  height: width < 1064 ? window.innerHeight - 60 : 'auto',
                }}
              >
                <div className="">
                  <div className="border-b-[##DBDBDB] mb-4 flex justify-between border-b pb-4">
                    <button
                      type="button"
                      className="p-2"
                      onClick={() => navigator.clipboard.writeText(siteUrl)}
                    >
                      <div className="svg_icon w-6 text-transparent">
                        <CopyIcon />
                      </div>
                    </button>
                    <button type="button" className="p-2">
                      <div className="svg_icon w-6 text-transparent">
                        <MailIcon />
                      </div>
                    </button>
                    <button type="button" className="p-2">
                      <div className="svg_icon w-6 text-transparent">
                        <MessageIcon />
                      </div>
                    </button>
                    <button type="button" className="p-2">
                      <div className="svg_icon w-6 text-transparent">
                        <FacebookIcon />
                      </div>
                    </button>
                  </div>
                  <div className="flex justify-between">
                    <button type="button" className="p-2">
                      <div className="svg_icon w-6 text-transparent">
                        <SendIcon />
                      </div>
                    </button>
                    <button type="button" className="p-2">
                      <div className="svg_icon w-6 text-transparent">
                        <TwitterIcon />
                      </div>
                    </button>
                    <button type="button" className="p-2">
                      <div className="svg_icon w-6 text-transparent">
                        <InstagramIcon />
                      </div>
                    </button>
                    <button type="button" className="p-2">
                      <div className="svg_icon w-6 text-transparent">
                        <MoreIcon />
                      </div>
                    </button>
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
export default SharePopup;
