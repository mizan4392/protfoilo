import { Transition, Variants } from "framer-motion";

/* eslint-disable @typescript-eslint/no-explicit-any */
export type DIRECTION_TYPE = "left" | "right" | "up" | "down" | "";
export type ANIMATION_TYPE = "spring" | "tween"; // Add this

// export const textVariant = (delay?: number) => {
//   return {
//     hidden: {
//       y: -50,
//       opacity: 0,
//     },
//     show: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         duration: 1.25,
//         delay: delay,
//       },
//     },
//   };
// };

export const textVariant = (delay: number = 0): Variants => ({
  hidden: {
    y: -50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.25,
      delay,
    },
  },
});
export const fadeIn = (
  direction: DIRECTION_TYPE,
  type: ANIMATION_TYPE,
  delay: number,
  duration: number,
) => {
  const transition: Transition =
    type === "spring"
      ? { type, delay, duration }
      : { type, delay, duration, ease: "easeInOut" };

  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      // transition: {
      //   type: type,
      //   delay: delay,
      //   duration: duration,
      //   ease: "easeInOut", // <-- Change from array to string
      // },
      transition,
    },
  };
};

export const zoomIn = (delay: number, duration: number) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const slideIn = (
  direction: DIRECTION_TYPE,
  type: ANIMATION_TYPE,
  delay: number,
  duration: number,
) => {
  const transition: Transition =
    type === "spring"
      ? { type, delay, duration }
      : { type, delay, duration, ease: "easeOut" };
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      // transition: {
      //   type: type,
      //   delay: delay,
      //   duration: duration,
      //   ease: "easeOut",
      // },
      transition,
    },
  };
};

export const staggerContainer = (
  staggerChildren?: string,
  delayChildren?: number,
): any => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};
