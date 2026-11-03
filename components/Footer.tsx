'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube, FaEnvelope, FaHeart } from 'react-icons/fa';

export default function Footer() {
  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/amalshajimichaelk', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/amal-shaji-michael-306812315', label: 'LinkedIn' },
    { icon: FaInstagram, url: 'https://www.instagram.com/amalshajimichael', label: 'Instagram' },
    { icon: FaYoutube, url: 'https://youtube.com/@__shah.ji_cinephile', label: 'YouTube' },
    { icon: FaEnvelope, url: 'mailto:amalshajimichael@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="relative py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-950/20 via-[#0a0a0a]/40 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center text-center">
        {/* Social Links */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-4 sm:gap-5 mb-8"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full glass flex items-center justify-center text-lg text-purple-300 hover:text-white transition-all shadow-md"
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
              title={social.label}
              aria-label={social.label}
            >
              <social.icon />
            </motion.a>
          ))}
        </motion.div>

        {/* Branding */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="text-xl sm:text-2xl font-bold gradient-text mb-1">Amal Shaji Michael</h3>
          <p className="text-gray-400 text-sm">Programming Enthusiast &amp; Video Editor</p>
        </motion.div>

        {/* Made with love */}
        <motion.div
          className="flex items-center justify-center gap-2 text-gray-400 text-sm mb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span>© 2026 Made with</span>
          <motion.span
            animate={{ scale: [1, 1.25, 1] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <FaHeart className="text-pink-500" />
          </motion.span>
          <span>by Amal Shaji Michael</span>
        </motion.div>

        {/* Tech stack badge */}
        <motion.p
          className="text-gray-500 text-xs text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Built with Next.js, TypeScript, Framer Motion &amp; Tailwind CSS
        </motion.p>
      </div>
    </footer>
  );
}
