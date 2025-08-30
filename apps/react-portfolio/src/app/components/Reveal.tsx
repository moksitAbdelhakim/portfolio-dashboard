// components/Reveal.tsx
import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode, JSX } from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  as?: 'div' | 'section';
  className?: string;
}

export const Reveal = ({
  children,
  delay = 0,
  as = 'div',
  className = '',
}: RevealProps) => {
  const MotionTag = motion[as];
  const shouldReduceMotion = useReducedMotion();

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.6,
        ease: 'easeOut',
        delay: shouldReduceMotion ? 0 : delay,
      }}
    >
      {children}
    </MotionTag>
  );
};
