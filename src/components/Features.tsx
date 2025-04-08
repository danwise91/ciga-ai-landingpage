'use client';

import { motion } from 'framer-motion';

const Features = () => {
  return (
    <>
      <section className="w-full py-24 bg-[#1A1A1A]">
        <div className="max-w-[2000px] mx-auto px-4 md:px-8">
          {/* Section Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#D4AF37] mb-6 text-left"
          >
            Premium cigars made for innovators
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-white/80 max-w-3xl mb-24 text-left"
          >
            Ciga Cigars aren't just great for any event, they're also your key to top-tier networking.
          </motion.p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.98 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4 p-8 rounded-lg border border-white/10 hover:border-[#D4AF37]/50 transition-colors cursor-pointer bg-white/5"
            >
              <h3 className="text-[#D4AF37] text-2xl md:text-3xl font-serif">Premium Quality</h3>
              <p className="text-white/60 text-lg">Made for luxury</p>
              <p className="text-white/80 leading-relaxed">
                Each Ciga cigar is hand-made with only the finest ingredients, crafted for those who appreciate the finer things in life.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.98 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-4 p-8 rounded-lg border border-white/10 hover:border-[#D4AF37]/50 transition-colors cursor-pointer bg-white/5"
            >
              <h3 className="text-[#D4AF37] text-2xl md:text-3xl font-serif">Exclusive Network</h3>
              <p className="text-white/60 text-lg">Built for connection</p>
              <p className="text-white/80 leading-relaxed">
                Join an elite network of ambitious individuals. Ciga cigars are your key to high-profile networking events and exclusive gatherings.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.98 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="space-y-4 p-8 rounded-lg border border-white/10 hover:border-[#D4AF37]/50 transition-colors cursor-pointer bg-white/5"
            >
              <h3 className="text-[#D4AF37] text-2xl md:text-3xl font-serif">Unmatched Experience</h3>
              <p className="text-white/60 text-lg">Designed for excellence</p>
              <p className="text-white/80 leading-relaxed">
                From the first draw to the last puff, experience luxury like never before. Every detail is crafted for perfection.
              </p>
            </motion.div>
          </div>

          {/* Purchase Button */}
          <div className="flex justify-center mt-20">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 10px 30px -10px rgba(205, 127, 50, 0.5)"
              }}
              whileTap={{ scale: 0.98 }}
              viewport={{ once: true }}
              className="relative px-16 py-5 text-xl font-medium rounded-full
                bg-gradient-to-r from-[#B87333] via-[#DAA520] to-[#B87333]
                text-white
                border border-[#CD7F32]/30
                shadow-[0_5px_15px_-5px_rgba(205,127,50,0.3)]
                before:content-['']
                before:absolute before:inset-0
                before:bg-gradient-to-b from-white/20 to-transparent
                before:rounded-full
                hover:from-[#CD7F32] hover:via-[#DAA520] hover:to-[#CD7F32]
                transition-all duration-300"
            >
              Purchase Cigars
            </motion.button>
          </div>
        </div>
      </section>

      {/* Elite Club Section */}
      <section className="w-full py-24 bg-[#1A1A1A] border-t border-white/10">
        <div className="max-w-[2000px] mx-auto px-4 md:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#D4AF37] text-center mb-8"
          >
            An Elite Club Incubating the Future
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto text-center leading-relaxed"
          >
            We're bringing professionals together so they can talk shop, brainstorm new ideas, and discover new investment opportunities.
            <br /><br />
            The best and the brightest are here. Nothing beats a good chat over a couple of cigars.
          </motion.p>
        </div>
      </section>

      {/* Ciga Club Section */}
      <section className="w-full py-24 bg-[#1A1A1A] border-t border-white/10">
        <div className="max-w-[2000px] mx-auto px-4 md:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#D4AF37] text-left"
          >
            The Ciga Cigar Club
          </motion.h2>
        </div>
      </section>
    </>
  );
};

export default Features; 