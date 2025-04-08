'use client';

import { motion } from 'framer-motion';

const features = [
  {
    title: "Premium Quality",
    subtitle: "Made for luxury",
    description: "Each Ciga cigar is hand-made with only the finest ingredients, crafted for those who appreciate the finer things in life.",
  },
  {
    title: "Exclusive Network",
    subtitle: "Built for connection",
    description: "Join an elite network of ambitious individuals. Ciga cigars are your key to high-profile networking events and exclusive gatherings.",
  },
  {
    title: "Unmatched Experience",
    subtitle: "Designed for excellence",
    description: "From the first draw to the last puff, experience luxury like never before. Every detail is crafted for perfection.",
  },
];

const Features = () => {
  return (
    <section className="w-full py-32 px-4 md:px-8 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-left"
            >
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#D4AF37] mb-4">
                {feature.title}
              </h3>
              <p className="text-xl text-white/90 font-light mb-6">
                {feature.subtitle}
              </p>
              <p className="text-lg text-white/80 font-light leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 