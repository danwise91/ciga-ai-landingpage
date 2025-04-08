'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Features = () => {
  return (
    <>
      {/* Premium Cigars Section */}
      <section id="features-section" className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-[#1A1A1A]">
        <div className="max-w-[2000px] mx-auto px-4 sm:px-6 md:px-8">
          {/* Section Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-[#D4AF37] mb-4 sm:mb-6 text-left"
          >
            Premium cigars made for innovators
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl mb-16 sm:mb-20 md:mb-24 text-left"
          >
            Ciga Cigars aren't just great for any event, they're also your key to top-tier networking.
          </motion.p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.98 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-3 sm:space-y-4 p-6 sm:p-8 rounded-lg border border-white/10 hover:border-[#D4AF37]/50 transition-colors cursor-pointer bg-white/5"
            >
              <h3 className="text-[#D4AF37] text-xl sm:text-2xl md:text-3xl font-serif">Premium Quality</h3>
              <p className="text-white/60 text-base sm:text-lg">Made for luxury</p>
              <p className="text-white/80 text-base sm:text-lg leading-relaxed">
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
              className="space-y-3 sm:space-y-4 p-6 sm:p-8 rounded-lg border border-white/10 hover:border-[#D4AF37]/50 transition-colors cursor-pointer bg-white/5"
            >
              <h3 className="text-[#D4AF37] text-xl sm:text-2xl md:text-3xl font-serif">Exclusive Network</h3>
              <p className="text-white/60 text-base sm:text-lg">Built for connection</p>
              <p className="text-white/80 text-base sm:text-lg leading-relaxed">
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
              className="space-y-3 sm:space-y-4 p-6 sm:p-8 rounded-lg border border-white/10 hover:border-[#D4AF37]/50 transition-colors cursor-pointer bg-white/5"
            >
              <h3 className="text-[#D4AF37] text-xl sm:text-2xl md:text-3xl font-serif">Unmatched Experience</h3>
              <p className="text-white/60 text-base sm:text-lg">Designed for excellence</p>
              <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                From the first draw to the last puff, experience luxury like never before. Every detail is crafted for perfection.
              </p>
            </motion.div>
          </div>

          {/* Purchase Button */}
          <div className="flex justify-center mt-12 sm:mt-16 md:mt-20">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 10px 30px -10px rgba(205, 127, 50, 0.5)"
              }}
              whileTap={{ scale: 0.98 }}
              viewport={{ once: true }}
              className="relative w-full sm:w-auto px-8 sm:px-12 md:px-16 py-4 sm:py-5 text-lg sm:text-xl font-medium rounded-full
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
      <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-[#1A1A1A] border-t border-white/10">
        <div className="max-w-[2000px] mx-auto px-4 sm:px-6 md:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-[#D4AF37] text-center mb-4 sm:mb-6 md:mb-8"
          >
            We're Incubating The Future
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-4xl mx-auto text-center leading-relaxed px-4"
          >
            We're bringing professionals together so they can talk shop, brainstorm new ideas, and discover new investment opportunities.
            <br className="hidden sm:block" /><br className="hidden sm:block" />
            The best and the brightest are here. Nothing beats a good chat over a couple of cigars.
          </motion.p>
        </div>
      </section>

      {/* Ciga Club Section */}
      <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-[#1A1A1A] border-t border-white/10">
        <div className="max-w-[2000px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-12">
            <div className="lg:max-w-3xl">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-[#D4AF37] text-left mb-4 sm:mb-6"
              >
                The Ciga Cigar Club
              </motion.h2>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl sm:text-2xl md:text-3xl text-white/90 font-light mb-6 sm:mb-8"
              >
                It's time to make your friends jealous
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-4xl leading-relaxed"
              >
                From AI to crypto, the Ciga Cigar Club is an exclusive organization connecting founders, builders, investors, and professionals.
              </motion.p>
            </div>

            {/* Partner Logos */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col gap-8 lg:w-[300px]"
            >
              <div className="space-y-8">
                <Image
                  src="/imgs/bybit.png"
                  alt="Bybit Logo"
                  width={200}
                  height={60}
                  className="filter grayscale opacity-70 hover:opacity-90 transition-opacity"
                />
                <Image
                  src="/imgs/polygon.jpg"
                  alt="Polygon Logo"
                  width={200}
                  height={60}
                  className="filter grayscale opacity-70 hover:opacity-90 transition-opacity"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gold Card Section */}
      <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-[#1A1A1A] border-t border-white/10">
        <div className="max-w-[2000px] mx-auto px-4 sm:px-6 md:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-center relative
              animate-shimmer bg-clip-text text-transparent bg-[linear-gradient(to_right,#D4AF37_20%,#FFF_40%,#D4AF37_60%)] 
              bg-[length:200%_auto] transition-all"
          >
            Ciga Gold Card - Your VIP Pass
          </motion.h2>
        </div>
      </section>
    </>
  );
};

// Add shimmer animation at the top of the file
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

export default Features; 