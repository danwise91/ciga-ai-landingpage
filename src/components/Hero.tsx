'use client';

import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center bg-black">
      <motion.h1 
        className="text-8xl font-bold text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8,
          ease: "easeOut"
        }}
      >
        Ciga
      </motion.h1>
    </section>
  );
};

export default Hero; 