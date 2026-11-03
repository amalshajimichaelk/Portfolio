'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Loader({ onLoadingComplete }: { onLoadingComplete: () => void }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onLoadingComplete, 400);
          return 100;
        }
        return prev + 1;
      });
    }, 18);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md px-4"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center justify-center text-center max-w-sm w-full">
        {/* Animated Rings */}
        <motion.div
          className="relative w-28 h-28 mb-8 flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
        >
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-purple-500 border-r-pink-500 opacity-80" />
          <div className="absolute inset-3 rounded-full border-2 border-transparent border-b-blue-500 border-l-indigo-500 opacity-70" />
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg shadow-purple-500/50" />
        </motion.div>

        {/* Counter */}
        <motion.h2
          className="text-4xl font-extrabold gradient-text mb-4 tracking-tight"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {count}%
        </motion.h2>

        {/* Progress Bar Container */}
        <motion.div
          className="w-64 max-w-full h-2 bg-white/10 rounded-full overflow-hidden shadow-inner p-0.5"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div
            className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full transition-all duration-75 ease-out shadow-sm shadow-pink-500/50"
            style={{ width: `${count}%` }}
          />
        </motion.div>

        {/* Subtext */}
        <motion.p
          className="mt-6 text-gray-400 text-sm tracking-wide font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Loading Experience...
        </motion.p>
      </div>
    </motion.div>
  );
}
