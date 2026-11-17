import React from 'react';
import { motion } from 'motion/react';

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children, className = '', id }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, margin: '-60px' }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className={`relative ${className}`}
    >
      {/* Top glowing cyber laser line transition on scroll */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.9, delay: 0.15 }}
        className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent pointer-events-none z-10"
      />
      {children}
    </motion.section>
  );
};

