'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [showFirstText, setShowFirstText] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFirstText(false);
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/vid/hero-img-vid.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" /> {/* Dark overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        {showFirstText ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6">Ciga</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              Ciga is home to the highest grade in luxury cigars. Crafted for those daring to do big things.
            </p>
          </motion.div>
        ) : (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-white text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Ciga cigars aren't only the perfect addition to exclusive networking events, they're also your key to meeting high-profile individuals.
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default Hero; 