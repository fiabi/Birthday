import React from 'react';
import { motion } from 'framer-motion';

export const AuroraBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#021C25] via-[#053A3D] to-[#0D2D23]" />
      
      {/* Aurora lights */}
      <motion.div
        className="absolute inset-0 opacity-40"
        animate={{
          background: [
            'radial-gradient(ellipse at 30% 30%, #91DA73 0%, transparent 50%)',
            'radial-gradient(ellipse at 70% 40%, #69B437 0%, transparent 50%)',
            'radial-gradient(ellipse at 40% 70%, #165A54 0%, transparent 50%)',
            'radial-gradient(ellipse at 60% 20%, #91DA73 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      />
      
      {/* Floating particles */}
      {Array.from({ length: 50 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full opacity-70"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: 'easeInOut',
          }}
        />
      ))}
      
      {/* Additional glow effects */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        animate={{
          background: [
            'linear-gradient(45deg, transparent 30%, rgba(145, 218, 115, 0.1) 50%, transparent 70%)',
            'linear-gradient(135deg, transparent 30%, rgba(105, 180, 55, 0.1) 50%, transparent 70%)',
            'linear-gradient(225deg, transparent 30%, rgba(22, 90, 84, 0.1) 50%, transparent 70%)',
          ],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  );
};