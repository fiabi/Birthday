import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, RotateCcw, Volume2, VolumeX } from 'lucide-react';

interface FinalSurpriseProps {
  onReset: () => void;
}

export const FinalSurprise: React.FC<FinalSurpriseProps> = ({ onReset }) => {
  const [showSecret, setShowSecret] = useState(false);
  const [playingMessage, setPlayingMessage] = useState(false);

  const handleHeartClick = () => {
    setShowSecret(true);
    setPlayingMessage(true);
    // Simulate voice message playing
    setTimeout(() => {
      setPlayingMessage(false);
    }, 8000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center p-8"
    >
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="backdrop-blur-md bg-white/10 rounded-3xl p-12 border border-white/20 shadow-2xl text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
            boxShadow: '0 8px 32px 0 rgba(145, 218, 115, 0.3)',
          }}
        >
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-8xl mb-8"
          >
            🌟
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-white mb-8"
            style={{ textShadow: '0 0 20px rgba(145, 218, 115, 0.5)' }}
          >
            My Beautiful Boomika
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="backdrop-blur-sm bg-white/10 rounded-2xl p-10 border border-white/20 mb-8"
          >
            <p className="text-3xl md:text-4xl text-[#91DA73] mb-8 leading-relaxed font-semibold">
              "In your smile, I find my peace.<br />
              In your eyes, my world."
            </p>
            <p className="text-2xl text-gray-200 leading-relaxed mb-6">
              Every day with you feels like a celebration. You bring light to my darkest days 
              and make my brightest moments even more magical.
            </p>
            <p className="text-xl text-[#91DA73] leading-relaxed mb-6 italic">
              "You are not just my girlfriend, you are my heart walking outside my body,<br />
              my soul's perfect companion, my forever love story."
            </p>
            <p className="text-lg text-gray-200 leading-relaxed">
              Today isn't just your birthday—it's a celebration of the incredible person you are 
              and all the joy you bring to this world. You make every ordinary moment extraordinary 
              just by being you.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2 }}
            className="mb-8"
          >
            <p className="text-white mb-6 text-xl font-medium">
              Click the heart to reveal a special message from my soul 💝
            </p>
            <motion.button
              onClick={handleHeartClick}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              animate={{ 
                scale: showSecret ? 1 : [1, 1.2, 1],
                opacity: showSecret ? 0.7 : 1
              }}
              transition={{ 
                duration: showSecret ? 0.3 : 2, 
                repeat: showSecret ? 0 : Infinity 
              }}
              className="p-6 rounded-full bg-gradient-to-r from-red-500 to-pink-500 shadow-lg"
              disabled={showSecret}
            >
              <Heart className="w-20 h-20 text-white fill-current" />
            </motion.button>
          </motion.div>
          
          <AnimatePresence>
            {showSecret && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.9 }}
                transition={{ duration: 0.8 }}
                className="backdrop-blur-sm bg-gradient-to-r from-[#91DA73]/20 to-[#69B437]/20 rounded-2xl p-10 border border-[#91DA73]/30 mb-8"
              >
                <div className="flex items-center justify-center mb-6">
                  <motion.div
                    animate={{ rotate: playingMessage ? 360 : 0 }}
                    transition={{ duration: 1, repeat: playingMessage ? Infinity : 0 }}
                  >
                    {playingMessage ? (
                      <Volume2 className="w-10 h-10 text-[#91DA73]" />
                    ) : (
                      <VolumeX className="w-10 h-10 text-[#91DA73]" />
                    )}
                  </motion.div>
                </div>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-2xl text-white mb-6 font-medium"
                >
                  {playingMessage ? "🎵 Playing voice message from my heart..." : "💌 Secret Message Revealed!"}
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: playingMessage ? 3 : 0.6 }}
                  className="text-xl text-[#91DA73]"
                >
                  {playingMessage ? (
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-3 h-3 bg-[#91DA73] rounded-full animate-pulse"></div>
                      <div className="w-3 h-3 bg-[#91DA73] rounded-full animate-pulse delay-100"></div>
                      <div className="w-3 h-3 bg-[#91DA73] rounded-full animate-pulse delay-200"></div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <p className="text-2xl leading-relaxed">
                        "Happy Birthday, my eternal love! Thank you for being the most amazing person in my life. 
                        You are my sunrise and sunset, my calm and my storm, my everything."
                      </p>
                      <p className="text-xl text-white leading-relaxed">
                        "I promise to love you more each day, to cherish every moment we share, 
                        and to build a lifetime of beautiful memories with you."
                      </p>
                      <p className="text-2xl font-bold">
                        "I love you beyond words, beyond time, beyond everything! 💕✨👑"
                      </p>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="flex justify-center gap-4"
          >
            <motion.button
              onClick={onReset}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-white/20 text-white border border-white/30 rounded-full font-medium hover:bg-white/30 transition-all duration-300 flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              Relive This Magic
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};