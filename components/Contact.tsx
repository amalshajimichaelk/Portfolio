'use client';

import { motion, type Variants } from 'framer-motion';
import { useState } from 'react';
import { FaEnvelope, FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 24, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 90,
        damping: 14,
      },
    },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:amalshajimichael@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(
      formState.name
    )}&body=${encodeURIComponent(formState.message + '\n\nFrom: ' + formState.email)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-purple-950/15 to-[#0a0a0a] z-0 pointer-events-none" />

      <motion.div
        className="max-w-3xl mx-auto relative z-10 flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {/* Centered Heading with Decorative Gradient Line */}
        <motion.div variants={itemVariants} className="flex flex-col items-center text-center mb-10">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <div className="w-20 h-1 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 shadow-sm shadow-purple-500/50" />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-center text-gray-300 text-sm sm:text-base md:text-lg mb-12 max-w-xl mx-auto leading-relaxed"
        >
          Have a project in mind, an opportunity, or just want to connect? I&apos;d love to hear from you!
        </motion.p>

        {/* Contact Form Card */}
        <motion.div
          variants={itemVariants}
          className="w-full glass rounded-3xl p-6 sm:p-10 md:p-12 neon-border shadow-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-purple-500/20 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all text-sm sm:text-base"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-purple-500/20 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all text-sm sm:text-base"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-purple-500/20 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all resize-none text-sm sm:text-base"
                placeholder="Tell me about your project or say hi!"
              />
            </div>

            <motion.button
              type="submit"
              className="w-full px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 font-semibold text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaPaperPlane className="text-sm" /> Send Message
            </motion.button>
          </form>

          {/* Direct Email Link */}
          <div className="mt-8 pt-8 border-t border-white/10 text-center flex flex-col items-center">
            <p className="text-gray-400 text-sm mb-3">Or reach out directly:</p>
            <motion.a
              href="mailto:amalshajimichael@gmail.com"
              className="inline-flex items-center gap-2 text-purple-300 hover:text-white transition-colors text-sm sm:text-base font-medium"
              whileHover={{ scale: 1.05 }}
            >
              <FaEnvelope /> amalshajimichael@gmail.com
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
