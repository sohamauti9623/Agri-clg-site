'use client';

import { motion, type HTMLMotionProps } from 'framer-motion';

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
