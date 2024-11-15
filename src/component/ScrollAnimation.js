export const scrollAnimation = {
  offscreen: {
    y: "50px",
    opacity: 0,
  },
  onscreen: {
    y: "0px",
    opacity: 1,
    transition: { type: "spring", bounce: 0, duration: 2 },
  },
};
