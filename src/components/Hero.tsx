'use client';

import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToNextSection = () => {
    const nextSection = document.querySelector('#features-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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

          <div className="pt-8 flex flex-col items-center gap-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#D4AF37] text-[#1A1A1A] font-medium text-lg rounded-full hover:bg-[#D4AF37]/90 transition-colors"
            >
              Sign Up
            </motion.button>

            {/* Animated Arrow */}
            <motion.button
              onClick={scrollToNextSection}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-12 h-12 rounded-full border-2 border-[#D4AF37]/30 flex items-center justify-center
                bg-gradient-to-r from-[#D4AF37] via-[#FFF] to-[#D4AF37] bg-[length:200%_auto]
                animate-shimmer cursor-pointer group"
            >
              <svg
                className="w-6 h-6 text-[#1A1A1A] transform transition-transform group-hover:translate-y-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Add shimmer animation
const shimmerAnimation = `
  @keyframes shimmer {
    0% { background-position: 200% 50%; }
    100% { background-position: -200% 50%; }
  }
  .animate-shimmer {
    animation: shimmer 6s linear infinite;
  }
`;

// Add style tag to the document head
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = shimmerAnimation;
  document.head.appendChild(style);
}

export default Hero; 