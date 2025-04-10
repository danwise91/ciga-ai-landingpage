'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const CigaClub = () => {
  return (
    <section id="ciga-club-section" className="py-20 bg-black">
      <div className="max-w-[2000px] mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#D4AF37] mb-4">
            Ciga Cigar Club
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Join our exclusive community of cigar enthusiasts and experience the finest selection of premium cigars.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-lg overflow-hidden"
          >
            <Image
              src="/imgs/club.jpg"
              alt="Ciga Club"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-[#D4AF37]">Exclusive Benefits</h3>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">•</span>
                  Access to limited edition cigar collections
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">•</span>
                  Private tasting events and masterclasses
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">•</span>
                  Priority access to new releases
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">•</span>
                  Exclusive discounts and offers
                </li>
              </ul>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#D4AF37] text-black px-6 py-3 rounded-md font-medium hover:bg-[#C19B2E] transition-colors"
            >
              Join the Club
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CigaClub; 