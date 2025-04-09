'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

type Star = {
  key: number;
  style: {
    width: string;
    height: string;
    top: string;
    left: string;
    backgroundColor: string;
    animation: string;
  };
};

const Features = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generatedStars = [...Array(50)].map((_, i) => ({
      key: i,
      style: {
        width: `${Math.random() * 3 + 1}px`,
        height: `${Math.random() * 3 + 1}px`,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        backgroundColor: `rgba(${
          Math.random() > 0.5 ? '212,175,55' : '255,215,0'
        },${Math.random() * 0.7 + 0.3})`,
        animation: `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite ${Math.random() * 3}s`
      }
    }));
    setStars(generatedStars);
  }, []);

  return (
    <>
      {/* Premium Cigars Section */}
      <section id="features-section" className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-[#1A1A1A] relative overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/vid/fall.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="max-w-[2000px] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
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
      <section id="elite-club-section" className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-[#1A1A1A] border-t border-white/10 relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/imgs/future.png"
            alt="Future Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="max-w-[2000px] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
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
      <section id="ciga-club-section" className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-[#1A1A1A] border-t border-white/10 relative overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/vid/lite.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="max-w-[2000px] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
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
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Image
                    src="/imgs/bybit.png"
                    alt="Bybit Logo"
                    width={200}
                    height={60}
                    className="filter grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Image
                    src="/imgs/polygon.jpg"
                    alt="Polygon Logo"
                    width={200}
                    height={60}
                    className="filter grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gold Card Section */}
      <section id="gold-card-section" className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-[#1A1A1A] border-t border-white/10 relative overflow-hidden">
        {/* Twinkling Stars Container */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(26,26,26,0.8)_0%,#1A1A1A_100%)]">
          {stars.map(star => (
            <div
              key={star.key}
              className="star absolute rounded-full"
              style={star.style}
            />
          ))}
        </div>

        <div className="max-w-[2000px] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-center relative
              animate-shimmer bg-clip-text text-transparent bg-[linear-gradient(to_right,#D4AF37_20%,#FFF_40%,#D4AF37_60%)] 
              bg-[length:200%_auto] transition-all mb-8 sm:mb-12"
          >
            Ciga Gold Card - Your VIP Pass
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-4xl leading-relaxed text-center mx-auto mb-16 sm:mb-20"
          >
            Each digital golden pass grants a <span className="text-[#D4AF37] font-bold">lifetime</span> membership to the Ciga Cigar Club to who ever holds it. All holders are free to attend any networking events and earn exclusive Ciga rewards.
          </motion.p>

          {/* Three Columns Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 max-w-[2000px] mx-auto">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center md:text-left flex items-center justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative w-full max-w-md"
              >
                <Image
                  src="/imgs/vip.png"
                  alt="VIP Access"
                  width={500}
                  height={500}
                  className="w-full h-auto rounded-lg"
                  priority
                />
              </motion.div>
            </motion.div>

            {/* Center Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center relative overflow-hidden rounded-2xl
                bg-gradient-to-br from-[#D4AF37]/10 via-[#FFD700]/20 to-[#D4AF37]/10
                border border-[#D4AF37]/30 backdrop-blur-sm
                p-8 sm:p-10
                shadow-[0_8px_32px_-8px_rgba(212,175,55,0.3)]"
            >
              <motion.h3
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-2xl sm:text-3xl font-bold text-[#D4AF37] mb-8
                  animate-shimmer bg-clip-text bg-[linear-gradient(to_right,#D4AF37_20%,#FFF_40%,#D4AF37_60%)] 
                  bg-[length:200%_auto] transition-all"
              >
                LIMITED SUPPLY!
              </motion.h3>
              <ul className="space-y-6 text-white text-lg sm:text-xl">
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center justify-center space-x-2 font-medium"
                >
                  <span className="text-[#D4AF37] text-2xl">•</span>
                  <span>Only 500 passes available!</span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="flex items-center justify-center space-x-2 font-medium"
                >
                  <span className="text-[#D4AF37] text-2xl">•</span>
                  <span>As supply goes down, price goes up</span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                  className="flex items-center justify-center space-x-2 font-medium"
                >
                  <span className="text-[#D4AF37] text-2xl">•</span>
                  <span>Minted on the Polygon blockchain</span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                  className="flex items-center justify-center space-x-2 font-medium"
                >
                  <span className="text-[#D4AF37] text-2xl">•</span>
                  <span>Perfect for startup pitches, funding seeking, and networking</span>
                </motion.li>
              </ul>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.75 }}
                className="text-lg text-white/80 max-w-xs mx-auto mt-8 mb-6"
              >
                Sign up for a Ciga account for alerts when our passes drop
              </motion.p>

              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px -10px rgba(212,175,55,0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="mt-4 px-8 py-3 relative overflow-hidden
                  bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37]
                  text-white font-medium text-lg rounded-full 
                  border border-[#D4AF37]/30
                  shadow-[0_5px_15px_-5px_rgba(212,175,55,0.3)]
                  before:content-['']
                  before:absolute before:inset-0
                  before:bg-gradient-to-b from-white/40 to-transparent
                  before:rounded-full
                  hover:from-[#FFD700] hover:via-[#D4AF37] hover:to-[#FFD700]
                  transition-all duration-300
                  animate-shimmer bg-[length:200%_auto]"
              >
                Get Account
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

// Update the shimmer animation at the bottom of the file
const shimmerAnimation = `
  @keyframes shimmer {
    0% { background-position: 200% 50%; }
    100% { background-position: -200% 50%; }
  }
  .animate-shimmer {
    animation: shimmer 6s linear infinite;
  }

  @keyframes twinkle {
    0%, 100% {
      opacity: 0;
      transform: scale(0.5);
      filter: blur(1px);
    }
    50% {
      opacity: 1;
      transform: scale(1.2);
      filter: blur(0px);
    }
  }

  .star {
    box-shadow: 0 0 10px 2px rgba(212,175,55,0.4);
  }

  .star::after {
    content: '';
    position: absolute;
    top: -100%;
    left: -100%;
    right: -100%;
    bottom: -100%;
    background: radial-gradient(circle, rgba(212,175,55,0.4) 0%, transparent 70%);
    border-radius: 50%;
  }
`;

// Add style tag to the document head
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = shimmerAnimation;
  document.head.appendChild(style);
}

export default Features; 