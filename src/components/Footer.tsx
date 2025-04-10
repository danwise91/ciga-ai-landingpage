'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-[2000px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-[#D4AF37]">Ciga Cigar</h3>
            <p className="text-white/80">
              Experience the finest selection of premium cigars in an exclusive setting.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-[#D4AF37]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-white/80 hover:text-[#D4AF37] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#mission" className="text-white/80 hover:text-[#D4AF37] transition-colors">
                  Mission
                </Link>
              </li>
              <li>
                <Link href="#ciga-club" className="text-white/80 hover:text-[#D4AF37] transition-colors">
                  Ciga Club
                </Link>
              </li>
              <li>
                <Link href="#gold-card" className="text-white/80 hover:text-[#D4AF37] transition-colors">
                  Gold Card
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-[#D4AF37]">Contact</h3>
            <ul className="space-y-2 text-white/80">
              <li>Email: info@cigacigar.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Cigar Street, Suite 100</li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-[#D4AF37]">Newsletter</h3>
            <p className="text-white/80">
              Subscribe to our newsletter for exclusive updates and offers.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="bg-white/10 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              />
              <button className="bg-[#D4AF37] text-black px-4 py-2 rounded-md hover:bg-[#C19B2E] transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-white/10 text-center text-white/60"
        >
          <p>&copy; {new Date().getFullYear()} Ciga Cigar. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 