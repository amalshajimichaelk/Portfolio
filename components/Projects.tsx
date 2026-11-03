'use client';

import { motion, type Variants } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

export default function Projects() {
  const projects = [
    {
      title: 'Quantum Shield (Q-SHIELD)',
      description:
        'Quantum-safe hybrid cryptography and security intelligence platform implementing post-quantum encryption, quantum circuit simulation with Qiskit, and NIST-compliant algorithms.',
      tech: ['Python', 'Qiskit', 'Post-Quantum Crypto', 'NIST FIPS 203/204'],
      github: 'https://github.com/amalshajimichaelk/Quantum_Shield',
      commits: '7+',
      gradient: 'from-cyan-500 to-blue-600',
      badgeGradient: 'from-cyan-500 via-blue-500 to-indigo-500',
    },
    {
      title: 'TaskPulse',
      description:
        'Full-stack real-time MERN task management platform featuring dynamic kanban workflows, collaborative live updates via Socket.io, and interactive dashboard analytics.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'TypeScript'],
      github: 'https://github.com/amalshajimichaelk/Taskpulse',
      commits: '11+',
      gradient: 'from-purple-500 to-pink-600',
      badgeGradient: 'from-purple-500 via-pink-500 to-rose-500',
    },
    {
      title: 'Book Store Management System',
      description:
        'Robust Java desktop application implementing MVC architecture with MySQL for automated inventory tracking, customer orders, and transaction management.',
      tech: ['Java', 'MySQL', 'MVC Architecture', 'OOP', 'JDBC'],
      github: 'https://github.com/amalshajimichaelk/Bookstore-Management-System',
      commits: '36+',
      gradient: 'from-orange-500 to-amber-600',
      badgeGradient: 'from-orange-500 via-amber-500 to-yellow-500',
    },
    {
      title: 'PLANZO - Subscription Management',
      description:
        'Modern subscription management and recurring billing web application designed with full lifecycle tracking, tiered pricing models, and automated invoice analytics.',
      tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'REST API'],
      github: 'https://github.com/amalshajimichaelk/Subscription_Management_System_OODO',
      commits: '43+',
      gradient: 'from-emerald-500 to-teal-600',
      badgeGradient: 'from-emerald-500 via-teal-500 to-cyan-500',
    },
  ];

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

  return (
    <section id="projects" className="py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-indigo-950/15 to-[#0a0a0a] z-0 pointer-events-none" />

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
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <div className="w-20 h-1 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 shadow-sm shadow-pink-500/50" />
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full"
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass rounded-3xl p-6 sm:p-8 card-hover group relative overflow-hidden flex flex-col justify-between border border-white/5 shadow-xl"
              whileHover={{ y: -6 }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}
              />

              <div className="relative z-10">
                <div className="flex justify-between items-start gap-4 mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${project.badgeGradient} text-white shrink-0 shadow-sm`}
                  >
                    {project.commits} commits
                  </span>
                </div>

                <p className="text-gray-300/90 text-sm sm:text-base mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-purple-200 border border-purple-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative z-10 pt-4 border-t border-white/5 flex items-center">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold shadow-md shadow-purple-500/20 hover:shadow-purple-500/40 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub /> View Code
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Centered GitHub Profile CTA */}
        <motion.div variants={itemVariants} className="mt-14 text-center">
          <motion.a
            href="https://github.com/amalshajimichaelk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full glass font-semibold text-gray-200 hover:text-white hover:bg-white/10 transition-all text-sm sm:text-base border border-white/10 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            <FaGithub className="text-xl" /> View All Projects on GitHub
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
