const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
  },

  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },

  exit: {
    opacity: 0,
    y: 300,
    transition: {
      duration: 1,
    },
  },
};

const titleAim = {
  hidden: {
    y: 200,
  },

  show: {
    y: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

const fade = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.75,
    },
  },
};

const photoAim = {
  hidden: {
    scale: 1.5,
    opacity: 0,
  },

  show: {
    scale: 1,
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.75,
    },
  },
};

export { pageAnimation, titleAim, fade, photoAim };
