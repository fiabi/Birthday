import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, Music } from 'lucide-react';

export const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.4;
      audio.loop = true;
    }
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        // Try to play, but handle autoplay restrictions gracefully
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise.catch(e => {
            console.log('Audio autoplay prevented:', e);
            setIsPlaying(false);
          });
        }
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="backdrop-blur-md bg-white/10 rounded-2xl p-4 border border-white/20 shadow-lg"
      >
        <div className="flex items-center gap-3">
          <motion.div
            animate={{ rotate: isPlaying ? 360 : 0 }}
            transition={{ duration: 3, repeat: isPlaying ? Infinity : 0, ease: "linear" }}
          >
            <Music className="w-5 h-5 text-[#91DA73]" />
          </motion.div>
          
          <div className="flex gap-2">
            <motion.button
              onClick={togglePlay}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-200"
              title={isPlaying ? "Pause music" : "Play Tamil birthday song"}
            >
              {isPlaying ? (
                <div className="w-4 h-4 flex items-center justify-center">
                  <div className="w-1 h-3 bg-white rounded-sm mr-1"></div>
                  <div className="w-1 h-3 bg-white rounded-sm"></div>
                </div>
              ) : (
                <div className="w-4 h-4 flex items-center justify-center">
                  <div className="w-0 h-0 border-l-[6px] border-l-white border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent ml-1"></div>
                </div>
              )}
            </motion.button>
            
            <motion.button
              onClick={toggleMute}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-200"
              title={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4 text-white" />
              ) : (
                <Volume2 className="w-4 h-4 text-white" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.div>
      
      {/* Tamil Birthday Song - Using a placeholder URL that would work with proper audio file */}
      <audio
      ref={audioRef}
      preload="auto"
      onEnded={() => setIsPlaying(false)}
      onError={(e) => console.log('Audio error:', e)}
      >
      <source src="/remo-birthday.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>

    </div>
  );
};
