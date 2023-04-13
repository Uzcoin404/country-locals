/* eslint react/prop-types: "off" */
import { Disclosure } from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';

import ArrowDownIcon from '../../../../public/icons/chevron-down.svg';

const FaqAccordion = ({ title }: { title: string }) => (
  <Disclosure>
    {({ open }) => (
      <div className="relative mt-5 flex flex-col items-center justify-center first:mt-0">
        <Disclosure.Button
          as="div"
          role="button"
          className="focus-purple relative w-full text-left text-[16px] font-bold "
        >
          <div className="flex w-full items-center justify-between rounded bg-[#F8F8F8] p-2 px-5 pl-3 text-[#4A4A4A]">
            <h3 className="pl-1">{title}</h3>
            <span
              className={`svg_icon absolute right-3 top-3 inline-block w-[15px] text-transparent transition-all duration-300 ease-in-out md:w-[18px] ${
                open && 'rotate-180'
              }`}
            >
              <ArrowDownIcon />
            </span>
          </div>
        </Disclosure.Button>

        <AnimatePresence initial={false}>
          {open && (
            <Disclosure.Panel
              static
              as={motion.div}
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { opacity: 1, height: 'auto' },
                collapsed: { opacity: 0, height: 0 },
              }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="ml-2 overflow-hidden"
            >
              <div className="pt-2 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                laudantium ex illo dolores eos, incidunt, ad perspiciatis
                tempora dolorum velit aut reprehenderit in? Animi maxime ea
                ipsum, quis doloremque ducimus nemo officiis, fugit nam
                consequatur et nesciunt culpa minima soluta nobis architecto
                maiores iure ipsam sapiente cumque, repellat laudantium. Nulla.
              </div>
            </Disclosure.Panel>
          )}
        </AnimatePresence>
      </div>
    )}
  </Disclosure>
);
export default FaqAccordion;
