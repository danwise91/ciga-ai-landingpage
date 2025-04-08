'use client';

import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#1A1A1A]">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ objectFit: 'cover' }}
        >
          <source src="/vid/hero-img-vid.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/90 to-[#1A1A1A]/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 md:px-8 text-white w-full max-w-[2000px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          <h1 className="text-6xl md:text-[120px] lg:text-[180px] xl:text-[220px] font-serif font-bold text-[#D4AF37] tracking-tight leading-[0.8]">
            Ciga
            <br />
            Cigars
          </h1>
          
          <h2 className="text-2xl md:text-4xl lg:text-5xl text-white/90 font-light tracking-wide max-w-4xl mx-auto">
            Crafted for connection, reserved for the ambitious
          </h2>

          <div className="pt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#D4AF37] text-[#1A1A1A] font-medium text-lg rounded-full hover:bg-[#D4AF37]/90 transition-colors"
            >
              Join Ciga
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 