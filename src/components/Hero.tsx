'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [showInitialText, setShowInitialText] = useState(true);
  const [showVideo, setShowVideo] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Show initial "Ciga Cigars" text for 2 seconds
    const initialTimer = setTimeout(() => {
      setShowInitialText(false);
      setShowVideo(true);
    }, 2000);

    // Show content after video starts
    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 2500);

    return () => {
      clearTimeout(initialTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Initial Black Background */}
      <AnimatePresence>
        {showInitialText && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-black z-20 flex items-center justify-center"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-6xl md:text-8xl font-bold text-white"
            >
              Ciga Cigars
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Background */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/vid/hero-img-vid.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/50" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      <AnimatePresence>
        {showContent && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center px-4 text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Crafted for connection, reserved for the ambitious
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6 max-w-3xl mx-auto">
              Ciga is home to the highest grade in luxury cigars. Crafted for those daring to do big things.
            </h2>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Ciga cigars aren't only the perfect addition to exclusive networking events, they're your key to high-profile networking events.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero; 