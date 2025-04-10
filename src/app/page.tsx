'use client';

import Image from 'next/image';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import { useAuth } from "@crossmint/client-sdk-react-ui";

// Define Footer Component Here
const Footer = () => {
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
    <footer className="w-full bg-[#111111] text-white/70 py-12 px-4 sm:px-6 md:px-8 border-t border-white/10">
      <div className="max-w-[2000px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 mb-8">
          {/* Logo */}
          <motion.button
            whileHover={{ opacity: 0.8 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="flex-shrink-0"
          >
            <Image
              src="/imgs/logo2.png"
              alt="Ciga Logo"
              width={40}
              height={40}
              className="w-auto h-10 transition-opacity"
            />
          </motion.button>

          {/* Footer Navigation */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 md:gap-x-8 lg:gap-x-10">
            <motion.button
              whileHover={{ color: '#D4AF37' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('features-section')}
              className="text-sm font-medium transition-colors"
            >
              About us
            </motion.button>
            <motion.button
              whileHover={{ color: '#D4AF37' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('elite-club-section')}
              className="text-sm font-medium transition-colors"
            >
              Mission
            </motion.button>
            <motion.button
              whileHover={{ color: '#D4AF37' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('ciga-club-section')}
              className="text-sm font-medium transition-colors"
            >
              Ciga Cigar Club
            </motion.button>
            <motion.button
              whileHover={{ color: '#D4AF37' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('gold-card-section')}
              className="text-sm font-medium transition-colors"
            >
              Gold Passes
            </motion.button>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center space-x-5">
             {/* X Icon */}
            <motion.a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              whileHover={{ scale: 1.1, color: '#ffffff' }} 
              whileTap={{ scale: 0.9 }} 
              className="text-white/70 relative overflow-hidden group transition-colors duration-200"
            >
              <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out"></span>
              <svg className="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </motion.a>
            {/* LinkedIn Icon */}
            <motion.a href="#" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1, color: '#0A66C2' }} whileTap={{ scale: 0.9 }} className="text-white/70 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </motion.a>
            {/* Facebook Icon */}
            <motion.a href="#" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1, color: '#1877F2' }} whileTap={{ scale: 0.9 }} className="text-white/70 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
            </motion.a>
            {/* Instagram Icon */}
            <motion.a href="#" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1, color: '#E1306C' }} whileTap={{ scale: 0.9 }} className="text-white/70 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.25-.148-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.059 1.689.073 4.948.073s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.782-6.98.059-1.28.073-1.689.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </motion.a>
            {/* Telegram Icon */}
            <motion.a href="#" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1, color: '#2AABEE' }} whileTap={{ scale: 0.9 }} className="text-white/70 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.119 3.871L1.896 12.07c-1.07.415-1.08 1.49-.06 1.82l4.98 1.63 11.62-9.71c.53-.44.98-.19.58.23l-9.47 8.54-.29 5.13c.53 0 .74-.24 1.01-.5l2.49-2.37 4.95 3.64c.91.67 1.57.32 1.81-.7l3.15-14.96c.22-1.04-.53-1.52-1.31-1.2z"/></svg>
            </motion.a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Ciga. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

function AuthButton() {
  const { login, logout, user } = useAuth();

  return (
    <div className="flex gap-4">
      {user == null ? (
        <button
          type="button"
          onClick={login}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
        >
          Login With Crossmint
        </button>
      ) : (
        <button
          type="button"
          onClick={logout}
          className="bg-black text-white font-bold py-2 px-4 rounded border-2 border-blue-500"
        >
          Logout
        </button>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[#1A1A1A]">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </main>
  );
}
