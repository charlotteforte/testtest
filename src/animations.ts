export const slideUp = (i: number) => ({
  initial: { y: 20, opacity: 0 },
  open: {
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.01,
      duration: 0.2,
      ease: "easeOut",
    },
  },
  closed: { y: 20, opacity: 0 },
});

export const opacity = {
  initial: { opacity: 0 },
  open: { opacity: 1, transition: { duration: 0.6, delay: 0.5 } },
  closed: { opacity: 0 },
};
