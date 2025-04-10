'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const GoldCard = () => {
  return (
    <section id="gold-card-section" className="py-20 bg-black">
      <div className="max-w-[2000px] mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#D4AF37] mb-4">
            Gold Card
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Unlock the ultimate cigar experience with our prestigious Gold Card membership.
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
              src="/imgs/gold.jpg"
              alt="Gold Card"
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
              <h3 className="text-2xl font-semibold text-[#D4AF37]">Gold Card Benefits</h3>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">•</span>
                  Unlimited access to all club facilities
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">•</span>
                  Complimentary cigar storage
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">•</span>
                  Exclusive invitations to private events
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">•</span>
                  Priority access to rare cigar collections
                </li>
              </ul>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#D4AF37] text-black px-6 py-3 rounded-md font-medium hover:bg-[#C19B2E] transition-colors"
            >
              Apply for Gold Card
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GoldCard; 