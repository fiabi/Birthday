import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AuroraBackground } from './components/AuroraBackground';
import { HomePage } from './components/HomePage';
import { PuzzleGameOne } from './components/PuzzleGameOne';
import { PuzzleGameTwo } from './components/PuzzleGameTwo';
import { FinalSurprise } from './components/FinalSurprise';
import { MusicPlayer } from './components/MusicPlayer';

type GameStage = 'home' | 'puzzle1' | 'puzzle2' | 'final';

function App() {
  const [currentStage, setCurrentStage] = useState<GameStage>('home');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const nextStage = () => {
    const stages: GameStage[] = ['home', 'puzzle1', 'puzzle2', 'final'];
    const currentIndex = stages.indexOf(currentStage);
    if (currentIndex < stages.length - 1) {
      setCurrentStage(stages[currentIndex + 1]);
    }
  };

  const resetGame = () => {
    setCurrentStage('home');
  };

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
        <div className="text-white text-xl">Loading magical experience...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AuroraBackground />
      <MusicPlayer />
      
      <div className="relative z-10 min-h-screen">
        <AnimatePresence mode="wait">
          {currentStage === 'home' && (
            <HomePage key="home" onNext={nextStage} />
          )}
          {currentStage === 'puzzle1' && (
            <PuzzleGameOne key="puzzle1" onNext={nextStage} />
          )}
          {currentStage === 'puzzle2' && (
            <PuzzleGameTwo key="puzzle2" onNext={nextStage} />
          )}
          {currentStage === 'final' && (
            <FinalSurprise key="final" onReset={resetGame} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;