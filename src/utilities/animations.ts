/* eslint import/prefer-default-export: "off" */
export const dropdownWrapperAnimation = {
  initial: { opacity: 0, scaleY: 0 },
  animate: {
    opacity: 1,
    scaleY: 1,
    transition: {
      staggerChildren: 0.03,
      when: 'beforeChildren',
    },
  },
  exit: {
    opacity: 0,
    scaleY: 0,
  },
};

export const animationWrapper = {
  animate: {
    transition: {
      staggerChildren: 0.2,
      when: 'beforeChildren',
    },
  },
};

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
};

export const zoomIn = {
  initial: { opacity: 0, scale: 0 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -20 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
    },
  },
};

export const fadeInRight = {
  initial: { opacity: 0, x: 20 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
    },
  },
};

export const slideToggle = {
  initial: {
    height: 0,
    opacity: 0,
  },
  animate: {
    height: 'auto',
    opacity: 1,
  },
};

export const overlayAnimation = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.15,
      duration: 0.3,
    },
  },
  exit: { opacity: 0 },
};

export const overlayWrapperReveal = {
  initial: { opacity: 0, scale: 0.7 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.05,
      duration: 0.2,
    },
  },
  exit: { opacity: 0 },
};

export const overlayWrapperSlideReveal = {
  initial: { opacity: 0, y: 300 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      // staggerChildren: 0.05,
      duration: 0.2,
      ease: 'linear',
    },
  },
  exit: { opacity: 0 },
};
