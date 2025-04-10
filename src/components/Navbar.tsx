'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close menu after clicking
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false); // Close menu after clicking
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
            src="/imgs/logo.jpg"
            alt="Ciga Logo"
            width={50}
            height={50}
            className="w-auto h-12 hover:opacity-80 transition-opacity"
          />
        </motion.button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6 sm:space-x-8 md:space-x-10">
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

        {/* Social Icons (Desktop) */}
        <div className="hidden lg:flex items-center space-x-4">
          {/* X Icon */}
          {/* LinkedIn Icon */}
          {/* Facebook Icon */}
          {/* Instagram Icon */}
          {/* Telegram Icon */}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.95 }}
        >
          <span className={`block w-6 h-0.5 bg-[#D4AF37] transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : 'mb-1.5'}`} />
          <span className={`block w-6 h-0.5 bg-[#D4AF37] transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#D4AF37] transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : 'mt-1.5'}`} />
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-20 left-0 right-0 bg-black/90 backdrop-blur-sm border-b border-white/10"
          >
            <div className="flex flex-col items-center space-y-6 py-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('features-section')}
                className="text-[#D4AF37] text-lg font-medium hover:text-white transition-colors text-left"
              >
                About us
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('elite-club-section')}
                className="text-[#D4AF37] text-lg font-medium hover:text-white transition-colors text-left"
              >
                Mission
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('ciga-club-section')}
                className="text-[#D4AF37] text-lg font-medium hover:text-white transition-colors text-left"
              >
                Ciga Cigar Club
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('gold-card-section')}
                className="text-[#D4AF37] text-lg font-medium hover:text-white transition-colors text-left"
              >
                Gold Passes
              </motion.button>

              {/* Mobile Social Icons */}
              <div className="flex items-center space-x-4">
                {/* X Icon */}
                {/* LinkedIn Icon */}
                {/* Facebook Icon */}
                {/* Instagram Icon */}
                {/* Telegram Icon */}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar; 