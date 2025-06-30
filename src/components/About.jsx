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
            src="/Logo1.jpg"
            alt="Academy View"
            className="w-full h-auto rounded-3xl shadow-2xl border-4 border-yellow-400"
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
              Established with a passion for excellence, <span className="text-yellow-400 font-semibold">Eagle Star Shooting Academy</span> is a premier institution dedicated to promoting the sport of shooting across India. We offer comprehensive training programs that focus on technical precision, mental discipline, and physical endurance — empowering shooters to rise beyond limits.
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6">
              Whether you’re a beginner stepping into the world of shooting or an aspiring national champion, our state-of-the-art facilities, customized training modules, and renowned national-level coaches ensure that you receive elite guidance every step of the way.
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              At Eagle Star, we go beyond training — we build confidence, instill discipline, and sharpen focus. Our shooters are not just athletes; they are future champions, molded with determination and fueled by excellence.
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
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-yellow-400 text-center mb-10">Why Choose Eagle Star Shooting Academy?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            {[
              "🏅 Experienced and Certified National Coaches",
              "🎯 World-Class Shooting Range and Equipment",
              "📈 Individual Progress Tracking and Mental Conditioning",
              "🧠 Focused Psychological and Physical Fitness Training",
              "🏆 Participation in Recognized State and National Events",
              "🤝 Mentorship from Former and Current Shooting Legends"
            ].map((point, idx) => (
              <div key={idx} className="bg-gray-900 rounded-2xl p-6 border border-yellow-400 text-gray-300 hover:scale-105 transition">
                {point}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-yellow-400 text-center mb-10">Our Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
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
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-900 rounded-2xl p-6 border border-yellow-400 hover:scale-105 transition">
                <h4 className="text-lg font-semibold text-yellow-300 mb-2">{feature.title}</h4>
                <p className="text-gray-300">{feature.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-yellow-400 text-center mb-10">Beyond the Range</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
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
          </div>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-yellow-400 mb-6">Our Philosophy</h2>
          <div className="text-lg text-gray-300 space-y-2">
            <p>“You don’t just shoot — you sharpen your spirit.”</p>
            <p>“At Eagle Star, we don’t just aim — we achieve.”</p>
            <p>“Focus. Fire. Fly to Victory.”</p>
            <p>“From First Shot to Podium Stand — We’re With You.”</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
