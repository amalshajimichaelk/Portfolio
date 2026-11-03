'use client';

import { motion, type Variants } from 'framer-motion';
import { FaPython, FaJava, FaJs, FaHtml5, FaCss3Alt, FaReact, FaNode, FaGitAlt, FaPhotoVideo } from 'react-icons/fa';
import { SiC, SiTypescript, SiNextdotjs, SiTailwindcss } from 'react-icons/si';

export default function Skills() {
  const skills = [
    { name: 'Python', icon: FaPython, color: '#3776AB', level: 85 },
    { name: 'C', icon: SiC, color: '#00599C', level: 80 },
    { name: 'Java', icon: FaJava, color: '#ED8B00', level: 75 },
    { name: 'JavaScript', icon: FaJs, color: '#F7DF1E', level: 85 },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', level: 75 },
    { name: 'HTML5', icon: FaHtml5, color: '#E34F26', level: 90 },
    { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6', level: 85 },
    { name: 'React', icon: FaReact, color: '#61DAFB', level: 80 },
    { name: 'Next.js', icon: SiNextdotjs, color: '#E5E7EB', level: 75 },
    { name: 'Node.js', icon: FaNode, color: '#339933', level: 70 },
    { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4', level: 85 },
    { name: 'Git', icon: FaGitAlt, color: '#F05032', level: 80 },
    { name: 'Video Editing', icon: FaPhotoVideo, color: '#C084FC', level: 75 },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
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

  return (
    <section id="skills" className="py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-blue-950/15 to-[#0a0a0a] z-0 pointer-events-none" />

      <motion.div
        className="max-w-6xl mx-auto relative z-10 flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {/* Centered Heading with Decorative Gradient Line */}
        <motion.div variants={itemVariants} className="flex flex-col items-center text-center mb-14">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
            <span className="gradient-text">Tech Stack</span>
          </h2>
          <div className="w-20 h-1 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-sm shadow-blue-500/50" />
        </motion.div>

        {/* Center-Aligned Flex/Grid Skills Container */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 sm:gap-6 w-full max-w-5xl mx-auto"
          variants={containerVariants}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="w-[145px] sm:w-[170px] md:w-[185px] glass rounded-2xl p-5 text-center card-hover relative group overflow-hidden flex flex-col items-center justify-between border border-white/5 shadow-lg"
              whileHover={{ scale: 1.06, y: -4 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center w-full">
                <skill.icon
                  className="text-4xl sm:text-5xl mb-3 transition-transform duration-300 group-hover:scale-110"
                  style={{ color: skill.color }}
                />
                <p className="text-sm sm:text-base font-semibold text-gray-200 text-center tracking-wide">
                  {skill.name}
                </p>
              </div>

              {/* Progress Bar */}
              <div className="w-full mt-4 bg-white/10 rounded-full h-1.5 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Centered "Always Learning" Card */}
        <motion.div
          className="mt-14 w-full max-w-2xl glass rounded-2xl p-6 sm:p-8 text-center border border-white/5 shadow-xl"
          variants={itemVariants}
        >
          <h3 className="text-xl sm:text-2xl font-bold gradient-text mb-2">Always Learning</h3>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Continuously exploring new technologies and expanding my skill set to stay at the forefront of innovation.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
