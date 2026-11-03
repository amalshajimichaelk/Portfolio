'use client';

import { motion, type Variants } from 'framer-motion';

export default function About() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
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

  const stats = [
    { number: '46+', label: 'Commits on Profile', color: 'from-purple-500 to-pink-500' },
    { number: '5+', label: 'Top Repositories', color: 'from-pink-500 to-blue-500' },
    { number: '∞', label: 'Learning Journey', color: 'from-blue-500 to-indigo-500' },
  ];

  return (
    <section id="about" className="pt-16 pb-28 sm:pt-20 sm:pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Gradient matching Hero's #0a0a0a theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-purple-950/15 to-[#0a0a0a] z-0 pointer-events-none" />

      {/* Seamless Top Blend from Hero */}
      <div className="absolute top-0 left-0 right-0 h-32 sm:h-40 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent pointer-events-none z-0" />

      <motion.div
        className="max-w-5xl mx-auto relative z-10 flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {/* Centered Heading with Decorative Gradient Line */}
        <motion.div variants={itemVariants} className="flex flex-col items-center text-center mb-14">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-20 h-1 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 shadow-sm shadow-purple-500/50" />
        </motion.div>

        {/* Center-Aligned About Card */}
        <motion.div
          variants={itemVariants}
          className="w-full max-w-4xl glass rounded-3xl p-8 sm:p-12 md:p-16 neon-border shadow-2xl text-center"
        >
          <div className="max-w-3xl mx-auto space-y-6 text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
            <p>
              I&apos;m a <span className="gradient-text font-semibold">passionate programming enthusiast</span> and{' '}
              <span className="gradient-text font-semibold">video editor</span> who loves exploring new
              technologies and bringing creative projects to life. My journey in tech is driven by curiosity
              and a constant desire to learn and grow.
            </p>

            <p>
              With experience spanning from{' '}
              <span className="text-purple-300 font-semibold">low-level programming in C</span> to{' '}
              <span className="text-pink-300 font-semibold">web development with JavaScript</span>, and from{' '}
              <span className="text-blue-300 font-semibold">Python scripting</span> to{' '}
              <span className="text-indigo-300 font-semibold">Java applications</span>, I embrace
              challenges across the tech spectrum.
            </p>

            <p>
              When I&apos;m not coding, you&apos;ll find me editing videos, exploring new creative tools, or
              diving deep into the latest tech trends. Let&apos;s connect and build something amazing together!
            </p>
          </div>
        </motion.div>

        {/* Stat Cards - Centered and Balanced */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl mt-10"
          variants={containerVariants}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass rounded-2xl p-6 sm:p-8 text-center card-hover flex flex-col items-center justify-center border border-white/5 shadow-lg"
              whileHover={{ scale: 1.04, y: -4 }}
            >
              <h3 className={`text-4xl sm:text-5xl font-extrabold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                {stat.number}
              </h3>
              <p className="text-gray-400 font-medium text-sm sm:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
