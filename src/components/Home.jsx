// src/pages/HomePage.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { FaBullseye, FaMedal, FaUserShield } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="relative text-white min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 bg-[url('/range-bg.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-[rgba(0,60,0,0.75)] mix-blend-multiply" />
        <motion.div
          className="relative z-10 flex flex-col items-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-52 sm:w-64 md:w-72 h-52 sm:h-64 md:h-72 rounded-full overflow-hidden mb-8 border-4 border-yellow-400 shadow-md">
  <img src="/Logo1.jpg" alt="Academy Logo" className="w-full h-full object-cover mix-blend-screen" />
</div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-yellow-300 tracking-wide drop-shadow-md font-[serif]">Eagle Star Shooting Academy</h1>
          <p className="text-lg sm:text-xl md:text-2xl mt-4 max-w-xl text-yellow-100 italic">Be Your Own Light.</p>
          <a href="/contact" className="mt-6 bg-yellow-400 text-black font-bold px-8 py-3 rounded-full hover:bg-yellow-300 transition duration-300 shadow-lg">Join Us </a>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-[#1a1f1c] text-white">
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
              className="bg-[#243c2e] border border-green-700 rounded-2xl p-8 text-center shadow-xl hover:scale-105 transition-transform"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <item.Icon className="text-5xl mx-auto mb-6 text-yellow-400" />
              <h3 className="text-2xl font-semibold mb-2 text-yellow-300">{item.title}</h3>
              <p className="text-sm sm:text-base text-gray-200">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Director Section */}
      <section className="bg-[url('/army-bg.jpg')] bg-cover bg-center bg-fixed text-white py-20 px-6">
        <div className="bg-black bg-opacity-70 p-6 rounded-xl max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div whileHover={{ scale: 1.03 }} className="overflow-hidden rounded-2xl border-4 border-yellow-400 shadow-lg">
            <img src="/Director.jpeg" alt="Director" className="w-full h-auto object-cover" />
          </motion.div>
          <div>
            <h2 className="text-4xl font-bold text-yellow-400 mb-4">Meet Our Director</h2>
            <h3 className="text-2xl font-semibold mb-3">Mr. Sundar Ghate</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
            I began my coaching career in shooting in 2001 and turned professional in 2005 with the Aurangabad Rifle Association. From 2007 to 2012, I served as Chief Coach of the Aurangabad District Rifle Association, producing several national-level shooters.

In 2013, I founded a professional coaching center at Shiv Chhatrapati Sports Complex, Pune. Under my mentorship, many athletes have achieved success at national and international levels. A career highlight was in 2017, when my student Esha Singh won 3 gold medals at the National Shooting Championship and later represented India at the 2024 Paris Olympics.

I’ve also coached the Maratha Regiment’s YBC team and trained athletes from various states including Maharashtra, Telangana, Andhra Pradesh, Haryana, and Karnataka. With over 25 years of experience, my mission is to continue shaping world-class shooters for India.            </p>
          </div>
        </div>
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
        <a href="/contact" className="bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition text-sm sm:text-base">Get Started</a>
      </motion.section>
    </div>
  );
};

export default Home;
