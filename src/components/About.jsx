// src/pages/About.jsx

import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="bg-black text-white min-h-screen py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-12 sm:mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Eagle Star Shooting Academy
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20">
          <motion.img
            src="/Logo.jpeg"
            alt="Academy View"
            className="w-full h-170  rounded-3xl shadow-2xl border-4 border-yellow-400"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6">
              Established with a passion for excellence, <span className="text-yellow-400 font-semibold">Eagle Star Shooting Academy</span> is a
              premier institution dedicated to promoting the sport of shooting in India. We offer comprehensive training programs
              that focus on technical skills, mental discipline, and physical fitness.
            </p>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6">
              Whether you’re a beginner or an advanced shooter, our state-of-the-art facilities and national-level coaches
              ensure you receive the best possible guidance. Our mission is to inspire, train, and shape the future champions
              of India.
            </p>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              We regularly host inter-academy meets, state championships, and provide students the opportunity to participate
              in national-level events. At Eagle Star, we believe in more than just aiming — we believe in achieving.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 text-center mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {[
            {
              title: "Our Vision",
              text: "To become India’s leading shooting academy, fostering talent from grassroots to global champions."
            },
            {
              title: "Our Mission",
              text: "To build discipline, resilience, and precision through world-class training and mentorship."
            },
            {
              title: "Core Values",
              text: "Excellence, integrity, respect, and safety are the foundation of everything we do at Eagle Star."
            },
          ].map((card, index) => (
            <div key={index} className="bg-gray-900 rounded-2xl p-6 border border-yellow-400 hover:scale-105 transition">
              <h3 className="text-xl font-semibold text-yellow-400 mb-2">{card.title}</h3>
              <p className="text-gray-300">{card.text}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 text-center mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {[
            {
              title: "Digital Target Systems",
              text: "Advanced electronic scoring systems for instant feedback and accuracy tracking."
            },
            {
              title: "24/7 Indoor Range",
              text: "Fully-equipped, climate-controlled range accessible anytime for serious trainees."
            },
            {
              title: "Certified Coaching",
              text: "Coaches with national certifications and experience in international championships."
            },
            {
              title: "Scholarship Opportunities",
              text: "Merit-based programs for dedicated and talented shooters to fund their training."
            },
          ].map((feature, index) => (
            <div key={index} className="bg-gray-900 rounded-2xl p-6 border border-yellow-400 hover:scale-105 transition">
              <h4 className="text-lg font-semibold text-yellow-300 mb-2">{feature.title}</h4>
              <p className="text-gray-300">{feature.text}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {[
            {
              title: "National-Level Collaborations",
              text: "Partnerships with sports federations and shooting clubs for broader exposure and opportunities."
            },
            {
              title: "Women Empowerment Programs",
              text: "Specialized training modules and scholarships to encourage female participation in shooting sports."
            },
            {
              title: "Fitness & Wellness Support",
              text: "Personalized fitness plans and mental coaching to build strength, focus, and performance."
            },
          ].map((item, index) => (
            <div key={index} className="bg-gray-900 rounded-2xl p-6 border border-yellow-400 hover:scale-105 transition">
              <h4 className="text-lg font-semibold text-yellow-300 mb-2">{item.title}</h4>
              <p className="text-gray-300">{item.text}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
