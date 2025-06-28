// src/pages/HomePage.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { FaBullseye, FaMedal, FaUserShield } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="relative text-white min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6">
        <div className="absolute inset-0 bg-gray-950" />
        <motion.div
          className="relative z-10 flex flex-col items-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-32 sm:w-40 md:w-60 h-32 sm:h-40 md:h-65 rounded-full overflow-hidden mb-20 mix-blend-multiply">
            <img src="/Logo.jpeg" alt="Academy Logo" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-yellow-300 mb-10 drop-shadow-2xl">Eagle Star Shooting Academy</h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl text-yellow-100 mb-10">Be Your Own Light </p>
          <a href="#contact" className="bg-yellow-400 text-black font-bold px-8 py-3 rounded-full hover:bg-yellow-300 transition duration-300 shadow-md">Join Now</a>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gray-950 text-white">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 text-yellow-400 uppercase"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Why Choose Us
        </motion.h2>
        <div className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto">
          {[{
            Icon: FaBullseye,
            title: "Elite Precision Training",
            desc: "Train under nationally acclaimed coaches using world-class techniques."
          }, {
            Icon: FaMedal,
            title: "Award-Winning Legacy",
            desc: "Consistently producing champions at national and international levels."
          }, {
            Icon: FaUserShield,
            title: "Discipline & Safety",
            desc: "Physical fitness, mental resilience, and top-tier safety protocols."
          }].map((item, i) => (
            <motion.div
              key={i}
              className="bg-gradient-to-tr from-yellow-400 via-yellow-300 to-yellow-200 text-black rounded-2xl p-8 text-center shadow-xl hover:scale-105 transition-transform"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <item.Icon className="text-5xl mx-auto mb-6" />
              <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm sm:text-base text-gray-800">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Director Section */}
      <section className="py-20 px-6 bg-black text-white">
        <motion.div
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div whileHover={{ scale: 1.03 }} className="overflow-hidden rounded-2xl border-4 border-yellow-400 shadow-lg">
            <img src="/public/director.JPEG" alt="Director" className="w-full h-auto object-cover" />
          </motion.div>
          <div>
            <h2 className="text-4xl font-bold text-yellow-400 mb-4">Meet Our Director</h2>
            <h3 className="text-2xl font-semibold mb-3">Mr. Sundar Ghate</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              A veteran with 20+ years in shooting and coaching, ex-Indian Army (YBC team), former chief coach at District Rifle Association Chhatrapati Sambhaji Ngara . Personal coach to Olympian Esha Singh. Mr. Ghate’s legacy is one of excellence, leadership, and dedication.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Call to Action */}
      <motion.section
        className="bg-yellow-400 text-black py-16 text-center px-4 shadow-inner"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Ready to Hit the Bullseye?</h2>
        <p className="mb-6 text-lg max-w-2xl mx-auto">Join Eagle Star Shooting Academy and train with the finest. Your champion journey begins now.</p>
        <a href="/Contact" className="bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition text-sm sm:text-base">Get Started</a>
      </motion.section>
    </div>
  );
};

export default Home;
