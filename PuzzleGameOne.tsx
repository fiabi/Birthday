import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, Star } from 'lucide-react';

interface PuzzleGameOneProps {
  onNext: () => void;
}

const questions = [
  {
    question: "What's my favorite thing about you?",
    options: ["Your beautiful smile", "Your kind heart", "Your laugh", "Everything"],
    correct: 3
  },
  {
    question: "What's our favorite activity together?",
    options: ["Watching movies", "Cooking together", "Long walks", "Dancing"],
    correct: 1
  },
  {
    question: "What makes you happiest?",
    options: ["Surprises", "Quality time", "Adventures", "All of the above"],
    correct: 3
  },
  {
    question: "What's your superpower?",
    options: ["Making me smile", "Being incredibly caring", "Lighting up any room", "All of these"],
    correct: 3
  }
];

export const PuzzleGameOne: React.FC<PuzzleGameOneProps> = ({ onNext }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResult) return;
    
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    
    if (answerIndex === questions[currentQuestion].correct) {
      setCorrectAnswers(prev => prev + 1);
    }
    
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(prev => prev + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        setGameComplete(true);
      }
    }, 2000);
  };

  const isCorrect = selectedAnswer === questions[currentQuestion].correct;

  if (gameComplete) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen flex items-center justify-center p-8"
      >
        <div className="max-w-4xl w-full">
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
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex justify-center mb-8"
            >
              <Star className="w-20 h-20 text-[#91DA73] fill-current" />
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-5xl md:text-6xl font-bold text-white mb-8"
              style={{ textShadow: '0 0 20px rgba(145, 218, 115, 0.5)' }}
            >
              🎂 Happy Birthday, My Beautiful Boomika! 🎂
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="backdrop-blur-sm bg-white/10 rounded-2xl p-8 border border-white/20 mb-8"
            >
              <p className="text-3xl md:text-4xl text-[#91DA73] mb-6 leading-relaxed font-semibold">
                "You are the sunshine that brightens my darkest days,<br />
                The star that guides me through life's maze." ✨
              </p>
              <p className="text-xl text-gray-200 leading-relaxed mb-4">
                My darling, you light up my world like the aurora dancing across the night sky. 
                Every moment with you feels like magic, every smile of yours is a gift to my heart.
              </p>
              <p className="text-lg text-[#91DA73] italic">
                "In a world full of temporary things, you are my forever." 💕
              </p>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="text-xl text-gray-200 mb-12"
            >
              You got {correctAnswers} out of {questions.length} right, but you're perfect in every way! 
              <br />Your love is the greatest gift I could ever receive. 💖
            </motion.p>
            
            <motion.button
              onClick={onNext}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="px-8 py-4 bg-gradient-to-r from-[#91DA73] to-[#69B437] text-[#021C25] font-bold text-lg rounded-full shadow-lg"
            >
              Continue to Next Surprise! 🎁
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
      <div className="max-w-3xl w-full">
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
              Birthday Quiz Time! 🎯
            </motion.h2>
            <p className="text-[#91DA73] text-lg">
              Question {currentQuestion + 1} of {questions.length}
            </p>
          </div>
          
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h3 className="text-xl text-white mb-6 text-center">
              {questions[currentQuestion].question}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {questions[currentQuestion].options.map((option, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showResult}
                  whileHover={{ scale: showResult ? 1 : 1.02 }}
                  whileTap={{ scale: showResult ? 1 : 0.98 }}
                  className={`p-4 rounded-xl text-left transition-all duration-300 ${
                    showResult
                      ? index === questions[currentQuestion].correct
                        ? 'bg-green-500/30 border-green-400 text-white'
                        : selectedAnswer === index
                        ? 'bg-red-500/30 border-red-400 text-white'
                        : 'bg-white/10 border-white/20 text-gray-300'
                      : 'bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-[#91DA73]'
                  } border backdrop-blur-sm`}
                >
                  <div className="flex items-center justify-between">
                    <span>{option}</span>
                    {showResult && (
                      <span className="ml-2">
                        {index === questions[currentQuestion].correct ? (
                          <CheckCircle className="w-5 h-5 text-green-400" />
                        ) : selectedAnswer === index ? (
                          <XCircle className="w-5 h-5 text-red-400" />
                        ) : null}
                      </span>
                    )}
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
          
          {showResult && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <p className={`text-lg font-medium ${isCorrect ? 'text-green-400' : 'text-yellow-400'}`}>
                {isCorrect ? '🎉 Perfect! You know me so well!' : '💕 Every answer about you is perfect!'}
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};