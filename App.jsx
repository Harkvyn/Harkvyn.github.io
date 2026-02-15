import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';

// Hero Component with Scramble Text Effect
const Hero = () => {
  const [scrambledText, setScrambledText] = useState('');
  const finalText = 'FRAUD INVESTIGATOR';
  const chars = '!@#$%^&*()_+-={}[]|;:,.<>?/~`';
  
  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setScrambledText(
        finalText
          .split('')
          .map((letter, index) => {
            if (index < iteration) {
              return finalText[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );
      
      if (iteration >= finalText.length) {
        clearInterval(interval);
      }
      iteration += 1 / 3;
    }, 30);
    
    return () => clearInterval(interval);
  }, []);

  // Particle background
  const particles = Array.from({ length: 50 });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-slate-900 to-black">
      {/* Animated Particles */}
      <div className="absolute inset-0">
        {particles.map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-500 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: Math.random() * 0.5 + 0.2,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 1 }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="text-cyan-400 text-sm font-mono tracking-widest uppercase">
            Professional Digital Detective
          </span>
        </motion.div>

        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-6 font-mono tracking-tight"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-red-500 text-transparent bg-clip-text">
            {scrambledText}
          </span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Mengungkap kebenaran di balik data. Spesialis dalam investigasi fraud digital, 
          forensik keuangan, dan analisis pola kecurangan.
        </motion.p>

        <motion.div
          className="flex gap-4 justify-center flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="absolute inset-0 bg-white"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
              style={{ opacity: 0.2 }}
            />
            <span className="relative z-10">Lihat Portfolio</span>
          </motion.button>

          <motion.button
            className="group relative px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="absolute inset-0 bg-cyan-500"
              initial={{ y: '100%' }}
              whileHover={{ y: 0 }}
              transition={{ duration: 0.3 }}
              style={{ opacity: 0.1 }}
            />
            <span className="relative z-10">Hubungi Saya</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-cyan-500 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-cyan-500 rounded-full mt-2"
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

// Skills Bento Grid Component
const SkillsBentoGrid = () => {
  const skills = [
    {
      title: 'Python & Data Analysis',
      description: 'Pandas, NumPy, Scikit-learn untuk deteksi anomali',
      icon: '🐍',
      color: 'from-cyan-500/20 to-blue-500/20',
      border: 'border-cyan-500/30',
      size: 'md:col-span-2'
    },
    {
      title: 'SQL & Database',
      description: 'PostgreSQL, MySQL, query optimization',
      icon: '🗄️',
      color: 'from-blue-500/20 to-purple-500/20',
      border: 'border-blue-500/30',
      size: ''
    },
    {
      title: 'Forensic Software',
      description: 'ACL, IDEA, Tableau untuk visualisasi',
      icon: '🔍',
      color: 'from-purple-500/20 to-pink-500/20',
      border: 'border-purple-500/30',
      size: ''
    },
    {
      title: 'Excel & Power BI',
      description: 'Advanced analytics & dashboard',
      icon: '📊',
      color: 'from-pink-500/20 to-red-500/20',
      border: 'border-pink-500/30',
      size: ''
    },
    {
      title: 'Machine Learning',
      description: 'Fraud detection models & pattern recognition',
      icon: '🤖',
      color: 'from-red-500/20 to-orange-500/20',
      border: 'border-red-500/30',
      size: 'md:col-span-2'
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-black via-slate-900 to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            Skills & Tools
          </h2>
          <p className="text-gray-400 text-lg">Teknologi dan metodologi investigasi yang saya kuasai</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className={`${skill.size} group relative p-6 rounded-2xl bg-gradient-to-br ${skill.color} border ${skill.border} backdrop-blur-sm overflow-hidden`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.8 }}
              />
              
              <div className="relative z-10">
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{skill.title}</h3>
                <p className="text-gray-400">{skill.description}</p>
              </div>

              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Timeline Component
const Timeline = () => {
  const experiences = [
    {
      year: '2024',
      title: 'Senior Fraud Investigator',
      company: 'Tech Finance Corp',
      description: 'Memimpin tim investigasi kasus fraud senilai $5M+. Mengembangkan sistem deteksi otomatis menggunakan ML.',
      color: 'cyan'
    },
    {
      year: '2022',
      title: 'Fraud Analyst',
      company: 'Digital Banking Inc',
      description: 'Menganalisis 500+ kasus fraud transaksi digital. Meningkatkan akurasi deteksi sebesar 40%.',
      color: 'blue'
    },
    {
      year: '2020',
      title: 'Junior Investigator',
      company: 'Financial Services Ltd',
      description: 'Melakukan investigasi dasar dan dokumentasi kasus. Sertifikasi CFE (Certified Fraud Examiner).',
      color: 'purple'
    },
    {
      year: '2018',
      title: 'Data Analyst',
      company: 'Analytics Firm',
      description: 'Membangun fondasi skills analitik data dan SQL. Pengalaman pertama dengan fraud detection.',
      color: 'red'
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-900 via-slate-900 to-black">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-red-500 text-transparent bg-clip-text">
            Career Journey
          </h2>
          <p className="text-gray-400 text-lg">Perjalanan saya dalam dunia investigasi fraud</p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-red-500" />

          {experiences.map((exp, index) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { once: true, margin: "-100px" });
            
            return (
              <motion.div
                key={index}
                ref={ref}
                className={`relative flex items-center mb-16 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Timeline Dot */}
                <motion.div
                  className={`absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-${exp.color}-500 border-4 border-gray-900 transform -translate-x-1/2 z-10`}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: index * 0.2 + 0.3 }}
                >
                  <motion.div
                    className={`absolute inset-0 rounded-full bg-${exp.color}-500`}
                    animate={{ scale: [1, 1.5, 1], opacity: [0.7, 0, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                  <motion.div
                    className="relative p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 backdrop-blur-sm group hover:border-cyan-500/50 transition-colors duration-300"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <div className={`text-${exp.color}-400 text-sm font-mono mb-2`}>{exp.year}</div>
                    <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                    <div className="text-cyan-400 mb-3">{exp.company}</div>
                    <p className="text-gray-400">{exp.description}</p>

                    {/* Hover Effect Line */}
                    <motion.div
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-${exp.color}-500 to-cyan-500 rounded-b-xl`}
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Contact Section with Micro-interactions
const ContactSection = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const contacts = [
    { icon: '📧', label: 'Email', value: 'investigator@example.com', color: 'cyan' },
    { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/fraud-investigator', color: 'blue' },
    { icon: '🔗', label: 'GitHub', value: 'github.com/fraud-investigator', color: 'purple' },
    { icon: '📱', label: 'WhatsApp', value: '+62 812-3456-7890', color: 'green' },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-black via-gray-900 to-slate-900">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            Mari Berkolaborasi
          </h2>
          <p className="text-gray-400 text-lg mb-12">
            Tertarik untuk bekerja sama? Hubungi saya melalui channel berikut
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contacts.map((contact, index) => (
            <motion.div
              key={index}
              className="relative p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 cursor-pointer overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, borderColor: `rgb(34 211 238 / 0.5)` }}
              onHoverStart={() => setHoveredIcon(index)}
              onHoverEnd={() => setHoveredIcon(null)}
            >
              <motion.div
                className={`absolute inset-0 bg-${contact.color}-500/10`}
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIcon === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />

              <div className="relative z-10 flex items-center gap-4">
                <motion.div
                  className="text-4xl"
                  animate={{
                    rotate: hoveredIcon === index ? [0, -10, 10, -10, 0] : 0,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {contact.icon}
                </motion.div>
                <div className="text-left">
                  <div className="text-sm text-gray-500 mb-1">{contact.label}</div>
                  <div className="text-white font-mono">{contact.value}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.button
          className="mt-12 px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg rounded-lg relative overflow-hidden group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="absolute inset-0 bg-white"
            initial={{ x: '-100%', opacity: 0.2 }}
            whileHover={{ x: '100%' }}
            transition={{ duration: 0.6 }}
          />
          <span className="relative z-10">Download CV</span>
        </motion.button>
      </div>
    </section>
  );
};

// Main App Component
function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-red-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Main Content */}
      <Hero />
      <SkillsBentoGrid />
      <Timeline />
      <ContactSection />

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 border-t border-gray-800">
        <p className="font-mono">© 2024 Fraud Investigator Portfolio. Built with React & Framer Motion.</p>
      </footer>
    </div>
  );
}

export default App;
