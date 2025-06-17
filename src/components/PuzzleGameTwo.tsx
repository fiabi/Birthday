import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, Sparkles, Heart } from 'lucide-react';

interface PuzzleGameTwoProps {
  onNext: () => void;
}

const emojiPairs = [
  { id: 1, emoji: '💕' },
  { id: 2, emoji: '🎂' },
  { id: 3, emoji: '🌟' },
  { id: 4, emoji: '🎁' },
  { id: 5, emoji: '🦋' },
  { id: 6, emoji: '🌸' },
];

// Create pairs and shuffle
const createGameCards = () => {
  const pairs = [...emojiPairs, ...emojiPairs].map((item, index) => ({
    ...item,
    uniqueId: index,
    isFlipped: false,
    isMatched: false,
  }));
  return pairs.sort(() => Math.random() - 0.5);
};

export const PuzzleGameTwo: React.FC<PuzzleGameTwoProps> = ({ onNext }) => {
  const [cards, setCards] = useState(createGameCards());
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);
  const [showGifts, setShowGifts] = useState(false);
  const [canFlip, setCanFlip] = useState(true);

  useEffect(() => {
    if (flippedCards.length === 2) {
      setCanFlip(false);
      const [firstIndex, secondIndex] = flippedCards;
      const firstCard = cards[firstIndex];
      const secondCard = cards[secondIndex];

      setTimeout(() => {
        if (firstCard.emoji === secondCard.emoji) {
          // Match found
          setCards(prev => prev.map((card, index) => 
            index === firstIndex || index === secondIndex 
              ? { ...card, isMatched: true }
              : card
          ));
          setMatchedPairs(prev => prev + 1);
        } else {
          // No match - flip cards back
          setCards(prev => prev.map((card, index) => 
            index === firstIndex || index === secondIndex 
              ? { ...card, isFlipped: false }
              : card
          ));
        }
        setFlippedCards([]);
        setCanFlip(true);
      }, 1000);
    }
  }, [flippedCards, cards]);

  useEffect(() => {
    if (matchedPairs === emojiPairs.length) {
      setGameComplete(true);
      setTimeout(() => {
        setShowGifts(true);
      }, 1000);
    }
  }, [matchedPairs]);

  const handleCardClick = (index: number) => {
    if (!canFlip || flippedCards.length === 2 || cards[index].isFlipped || cards[index].isMatched) {
      return;
    }

    setCards(prev => prev.map((card, i) => 
      i === index ? { ...card, isFlipped: true } : card
    ));
    setFlippedCards(prev => [...prev, index]);
  };

  if (gameComplete && showGifts) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
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
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-5xl md:text-6xl font-bold text-white mb-8"
              style={{ textShadow: '0 0 20px rgba(145, 218, 115, 0.5)' }}
            >
              🎊 Congratulations My Love! 🎊
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="backdrop-blur-sm bg-white/10 rounded-2xl p-8 border border-white/20 mb-8"
            >
              <p className="text-2xl md:text-3xl text-[#91DA73] mb-6 leading-relaxed font-semibold">
                "You are the poetry my heart writes,<br />
                The melody my soul sings." 💕
              </p>
              <p className="text-xl text-gray-200 leading-relaxed">
                My dearest Boomika, you've unlocked not just these gifts, but my entire heart. 
                Every moment with you feels like a beautiful dream I never want to wake up from.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="backdrop-blur-sm bg-white/10 rounded-2xl p-8 border border-white/20"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-6xl mb-4"
                >
                  🪆
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-4">Gift 1</h3>
                <p className="text-[#91DA73] text-lg">
                  A beautiful handcrafted doll that reminds me of your sweet innocence and playful spirit! 🎀✨
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="backdrop-blur-sm bg-white/10 rounded-2xl p-8 border border-white/20"
              >
                <motion.div
                  animate={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  className="text-6xl mb-4"
                >
                  💍
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-4">Gift 2</h3>
                <p className="text-[#91DA73] text-lg">
                  A delicate anklet and a promise ring - symbols of my eternal love and commitment to you! 💎👑
                </p>
              </motion.div>
            </div>
            
            <motion.button
              onClick={onNext}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 }}
              className="px-8 py-4 bg-gradient-to-r from-[#91DA73] to-[#69B437] text-[#021C25] font-bold text-lg rounded-full shadow-lg flex items-center gap-3 mx-auto"
            >
              <Heart className="w-5 h-5" />
              One More Surprise Awaits!
              <Heart className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center p-8"
    >
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="backdrop-blur-md bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
          }}
        >
          <div className="text-center mb-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold text-white mb-4"
            >
              Memory Match Game! 🧩
            </motion.h2>
            <p className="text-[#91DA73] text-lg">
              Match the pairs to unlock your birthday gifts!
            </p>
            <p className="text-white/70 mt-2">
              Matches: {matchedPairs}/{emojiPairs.length}
            </p>
          </div>
          
          <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
            {cards.map((card, index) => (
              <motion.div
                key={card.uniqueId}
                onClick={() => handleCardClick(index)}
                whileHover={{ scale: card.isMatched ? 1 : 1.05 }}
                whileTap={{ scale: card.isMatched ? 1 : 0.95 }}
                className={`aspect-square flex items-center justify-center text-4xl rounded-xl cursor-pointer transition-all duration-500 ${
                  card.isFlipped || card.isMatched
                    ? 'bg-white/20 backdrop-blur-sm border-2 border-[#91DA73] shadow-lg'
                    : 'bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:border-[#91DA73]/50 shadow-md'
                }`}
                style={{
                  transform: card.isFlipped || card.isMatched ? 'rotateY(0deg)' : 'rotateY(0deg)',
                  opacity: card.isMatched ? 0.8 : 1,
                }}
              >
                <AnimatePresence mode="wait">
                  {card.isFlipped || card.isMatched ? (
                    <motion.span
                      key="emoji"
                      initial={{ scale: 0, rotateY: 180 }}
                      animate={{ scale: 1, rotateY: 0 }}
                      exit={{ scale: 0, rotateY: -180 }}
                      transition={{ duration: 0.3 }}
                      className={card.isMatched ? 'opacity-60' : ''}
                    >
                      {card.emoji}
                    </motion.span>
                  ) : (
                    <motion.div
                      key="back"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full flex items-center justify-center"
                    >
                      <Sparkles className="w-8 h-8 text-[#91DA73]" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
          
          {gameComplete && !showGifts && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mt-8"
            >
              <p className="text-2xl text-[#91DA73] font-bold">
                🎉 Amazing! Preparing your gifts... 🎁
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};