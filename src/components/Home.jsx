// src/pages/HomePage.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { FaBullseye, FaMedal, FaUserShield, FaArrowRight, FaPlay } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="relative min-h-screen bg-[#243c2e] text-white transition-colors duration-500">

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 bg-[url('/range-bg.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40" />
        <motion.div
          className="relative z-10 flex flex-col items-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-52 sm:w-64 md:w-72 h-52 sm:h-64 md:h-72 rounded-full overflow-hidden mb-8 border-4 border-yellow-400 shadow-2xl">
            <img src="/Logo1.jpg" alt="Academy Logo" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-wide drop-shadow-2xl font-[serif] mb-4">
            Eagle Star Shooting Academy
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mt-4 max-w-xl text-yellow-100 italic mb-8">Be Your Own Light.</p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/contact" className="bg-yellow-400 text-black font-bold px-8 py-3 rounded-full hover:bg-yellow-300 transition duration-300 shadow-lg flex items-center gap-2">
              Join Us Today <FaArrowRight />
            </a>
            <a href="/gallery" className="border-2 border-yellow-400 text-yellow-400 font-bold px-8 py-3 rounded-full hover:bg-yellow-400 hover:text-black transition duration-300 flex items-center gap-2">
              <FaPlay /> Watch Videos
            </a>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-[#1a1f1c] text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "25+", label: "Years Experience" },
            { number: "500+", label: "Students Trained" },
            { number: "50+", label: "National Champions" },
            { number: "1", label: "Olympic Participant" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="p-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">{stat.number}</h3>
              <p className="text-gray-300 text-sm md:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-[#243c2e] text-white">
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
            desc: "Train under nationally acclaimed coaches using world-class techniques and modern equipment."
          }, {
            Icon: FaMedal,
            title: "Award-Winning Legacy",
            desc: "Consistently producing champions at national and international levels, including Olympic participants."
          }, {
            Icon: FaUserShield,
            title: "Discipline & Safety",
            desc: "Physical fitness, mental resilience, and top-tier safety protocols ensure comprehensive development."
          }].map((item, i) => (
            <motion.div
              key={i}
              className="bg-[#1a1f1c] border border-green-700 rounded-2xl p-8 text-center shadow-xl hover:scale-105 transition-transform duration-300 hover:border-yellow-400"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <item.Icon className="text-5xl mx-auto mb-6 text-yellow-400" />
              <h3 className="text-2xl font-semibold mb-4 text-yellow-300">{item.title}</h3>
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Director Section */}
      <section className="bg-[url('/army-bg.jpg')] bg-cover bg-center bg-fixed text-white py-20 px-6">
        <div className="bg-[#243c2e]/90 backdrop-blur-sm p-8 rounded-xl max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <motion.div 
            whileHover={{ scale: 1.03 }} 
            className="overflow-hidden rounded-2xl border-4 border-yellow-400 shadow-2xl"
          >
            <img src="/Director.jpeg" alt="Director" className="w-full h-auto object-cover" />
          </motion.div>
          <div>
            <h2 className="text-4xl font-bold text-yellow-400 mb-4">Meet Our Director</h2>
            <h3 className="text-2xl font-semibold mb-6 text-yellow-300">Mr. Sundar Ghate</h3>
            <div className="space-y-4 text-gray-300 text-base leading-relaxed">
              <p>
                With over 25 years of dedicated experience, Sundar Ghate has established himself as one of India's premier shooting coaches. His journey began in 2001, turning professional in 2005 with the Aurangabad Rifle Association.
              </p>
              <p>
                From 2007 to 2012, he served as Chief Coach of the Aurangabad District Rifle Association, producing numerous national-level shooters. His crowning achievement came in 2017 when his student <strong className="text-yellow-400">Esha Singh</strong> won three gold medals at the National Championship and later represented India at the 2024 Paris Olympics.
              </p>
              <p>
                He has trained athletes from Maharashtra, Telangana, Andhra Pradesh, Haryana, and Karnataka, including the Maratha Regiment's YBC team and IPS officers.
              </p>
            </div>
            <a href="/trainer" className="inline-block mt-6 bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition">
              Learn More About Our Team
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-[#1a1f1c] text-white">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 text-yellow-400 uppercase"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          What Our Champions Say
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            {
              quote: "Training at Eagle Star transformed my shooting career. The discipline and precision I learned here helped me reach the Olympics.",
              author: "Esha Singh",
              title: "Olympic Participant & National Champion"
            },
            {
              quote: "The coaching methodology and safety standards at Eagle Star are world-class. Highly recommended for serious shooters.",
              author: "IPS Ravindra Singal",
              title: "Commissioner of Police, Nagpur & ADG"
            }
          ].map((testimonial, i) => (
            <motion.div
              key={i}
              className="bg-[#243c2e] p-8 rounded-2xl border border-yellow-400/30 shadow-lg"
              initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-gray-300 text-lg italic mb-6">"{testimonial.quote}"</p>
              <div>
                <h4 className="text-yellow-400 font-semibold text-lg">{testimonial.author}</h4>
                <p className="text-gray-400 text-sm">{testimonial.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black py-16 text-center px-4 shadow-inner"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Ready to Hit the Bullseye?</h2>
        <p className="mb-8 text-lg max-w-2xl mx-auto">Join Eagle Star Shooting Academy and train with the finest. Your champion journey begins now.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/contact" className="bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition text-sm sm:text-base inline-flex items-center gap-2">
            Get Started Today <FaArrowRight />
          </a>
          <a href="tel:+918149222003" className="border-2 border-black text-black px-8 py-4 rounded-full font-bold hover:bg-black hover:text-white transition text-sm sm:text-base">
            Call Now: +91 8149222003
          </a>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;