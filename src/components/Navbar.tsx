'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 h-20 px-4 sm:px-6 md:px-8 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-[2000px] mx-auto h-full flex items-center justify-between">
        {/* Logo */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
          onClick={scrollToTop}
        >
          <Image
            src="/imgs/logo.png"
            alt="Ciga Logo"
            width={50}
            height={50}
            className="w-auto h-12 hover:opacity-80 transition-opacity"
          />
        </motion.button>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6 sm:space-x-8 md:space-x-10">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('features-section')}
            className="text-[#D4AF37] text-sm sm:text-base font-medium hover:text-white transition-colors"
          >
            About us
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('elite-club-section')}
            className="text-[#D4AF37] text-sm sm:text-base font-medium hover:text-white transition-colors"
          >
            Mission
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('ciga-club-section')}
            className="text-[#D4AF37] text-sm sm:text-base font-medium hover:text-white transition-colors"
          >
            Ciga Cigar Club
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('gold-card-section')}
            className="text-[#D4AF37] text-sm sm:text-base font-medium hover:text-white transition-colors"
          >
            Gold Passes
          </motion.button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 