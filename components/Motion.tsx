"use client";

import { motion, type HTMLMotionProps, type Variants } from 'framer-motion';

type MotionSectionProps = HTMLMotionProps<'section'> & {
  delay?: number;
};

export function MotionSection({ children, delay = 0, ...props }: MotionSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
      {...props}
    >
      {children}
    </motion.section>
  );
}

export const MotionDiv = motion.div;

const riseEase = [0.22, 1, 0.36, 1] as const;

export const riseUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: riseEase,
      delay,
    },
  }),
};
