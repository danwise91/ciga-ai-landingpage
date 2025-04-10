'use client';

import { motion } from 'framer-motion';

export default function GoldPasses() {
  return (
    <section id="gold-passes" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-8 text-[#D4AF37]">Gold Passes</h2>
          <p className="text-lg mb-6">
            Elevate your cigar experience with our exclusive Gold Pass membership.
          </p>
          <p className="text-lg mb-8">
            Enjoy premium benefits including priority access to rare cigars, exclusive events, and personalized service.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#D4AF37] text-black px-8 py-3 rounded-full font-semibold hover:bg-[#B38F2E] transition-colors"
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 