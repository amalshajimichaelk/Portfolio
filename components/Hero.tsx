'use client';

import { motion, type Variants } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube, FaEnvelope } from 'react-icons/fa';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    updateCanvasSize();

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    const particleCount = Math.min(80, Math.floor(window.innerWidth / 15));

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: (Math.random() - 0.5) * 0.4,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    let animationFrameId: number;

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.x += p1.speedX;
        p1.y += p1.speedY;

        if (p1.x < 0 || p1.x > canvas.width) p1.speedX *= -1;
        if (p1.y < 0 || p1.y > canvas.height) p1.speedY *= -1;

        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(168, 85, 247, ${p1.opacity})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 110) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(168, 85, 247, ${0.12 * (1 - distance / 110)})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      updateCanvasSize();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
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

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/amalshajimichaelk', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/amal-shaji-michael-306812315', label: 'LinkedIn' },
    { icon: FaInstagram, url: 'https://www.instagram.com/amalshajimichael', label: 'Instagram' },
    { icon: FaYoutube, url: 'https://youtube.com/@__shah.ji_cinephile', label: 'YouTube' },
    { icon: FaEnvelope, url: 'mailto:amalshajimichael@gmail.com', label: 'Email' },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden py-20 px-6 sm:px-8 md:px-12 lg:px-16">
      {/* Full 16:9 Widescreen Background with Person on the Left */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <Image
          src="/hero-bg.webp"
          alt="Amal Shaji Michael"
          fill
          priority
          sizes="100vw"
          style={{ objectPosition: 'left center' }}
          className="object-cover opacity-75 filter contrast-105 brightness-95"
        />

        {/* Soft gradient backing on the right side for clear text readability */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-transparent via-[#0a0a0a]/15 to-[#0a0a0a]/85" />

        {/* Subtle center-darkening vignette on mobile */}
        <div className="md:hidden absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(10,10,10,0.35)_0%,rgba(10,10,10,0.7)_70%,rgba(10,10,10,0.95)_100%)]" />

        {/* Top subtle fade */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0a0a0a]/80 to-transparent" />

        {/* Atmospheric purple/indigo color grade */}
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-950/15 via-transparent to-blue-950/15 mix-blend-color-dodge pointer-events-none" />
      </div>

      {/* Floating Canvas Particles */}
      <canvas ref={canvasRef} className="absolute inset-0 z-[1] pointer-events-none" />

      {/* Reduced-range bottom gradient: maintains image visibility while hiding section separation */}
      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 md:h-48 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent pointer-events-none z-[2]" />

      {/* Hero Content shifted right with balanced margin */}
      <motion.div
        className="relative z-10 w-full flex flex-col items-center md:items-end md:pr-4 lg:pr-8 xl:pr-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="w-full max-w-lg lg:max-w-xl xl:max-w-2xl flex flex-col items-center md:items-start text-center md:text-left md:translate-x-4 lg:translate-x-6 xl:translate-x-8">
          {/* Title */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 tracking-tight glow drop-shadow-2xl"
          >
            <span className="gradient-text">Amal Shaji Michael</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl text-purple-200/95 font-medium mb-3 max-w-xl drop-shadow-md"
          >
            Passionate Programming Enthusiast &amp; Video Editor
          </motion.p>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg text-gray-300/90 mb-8 max-w-lg leading-relaxed drop-shadow"
          >
            Exploring new technologies and creative projects | Let&apos;s connect and grow together
          </motion.p>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center md:justify-start flex-wrap gap-3 sm:gap-4 mb-8"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full glass flex items-center justify-center text-lg text-purple-300 hover:text-white transition-all shadow-md shadow-purple-900/10 hover:shadow-purple-500/20 hover:border-purple-400/40"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                title={social.label}
                aria-label={social.label}
              >
                <social.icon />
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center md:items-start gap-4 w-full sm:w-auto"
          >
            <motion.a
              href="#projects"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 font-semibold text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all text-sm sm:text-base text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full glass font-semibold text-gray-200 hover:text-white hover:bg-white/10 transition-all text-sm sm:text-base text-center border border-white/10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Centered Scroll Down Mouse Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none z-10"
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-5 h-9 border-2 border-purple-400/50 rounded-full flex justify-center p-1.5 backdrop-blur-xs">
          <motion.div
            className="w-1 h-2 bg-purple-400 rounded-full"
            animate={{
              y: [0, 10, 0],
              opacity: [1, 0.3, 1],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
