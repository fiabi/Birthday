import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

interface HomePageProps {
  onNext: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNext }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center p-8"
    >
      <div className="max-w-2xl w-full">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="backdrop-blur-md bg-white/10 rounded-3xl p-12 border border-white/20 shadow-2xl"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
            boxShadow: '0 8px 32px 0 rgba(145, 218, 115, 0.2), inset 0 1px 0 rgba(255,255,255,0.2)',
          }}
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex justify-center mb-8"
          >
            <Heart className="w-16 h-16 text-[#91DA73] fill-current" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white text-center mb-6"
            style={{ textShadow: '0 0 20px rgba(145, 218, 115, 0.5)' }}
          >
            Hey Boomika,
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-xl text-gray-200 text-center mb-12 leading-relaxed"
          >
            Let's play a little game to celebrate your special day...
            <br />
            <span className="text-[#91DA73]">Are you ready for some birthday magic?</span>
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex justify-center"
          >
            <motion.button
              onClick={onNext}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-[#91DA73] to-[#69B437] text-[#021C25] font-bold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3"
              style={{
                boxShadow: '0 4px 20px rgba(145, 218, 115, 0.4)',
              }}
            >
              <Sparkles className="w-5 h-5" />
              Begin the Birthday Quest
              <Sparkles className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};