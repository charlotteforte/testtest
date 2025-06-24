export const slideUp = (delay: number) => {
  return {
    initial: {
      y: "100%",
    },
    open: {
      y: "0%",
      transition: {
        duration: 0.5,
        delay: delay * 0.02,
      }
    },
    closed: {
      y: "100%",
    }
  }
}

export const opacity = {
  initial: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.5,
    }
  },
  closed: {
    opacity: 0,
  }
}
