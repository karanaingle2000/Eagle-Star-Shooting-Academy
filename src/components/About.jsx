// src/pages/About.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { FaBullseye, FaUserShield, FaMedal } from 'react-icons/fa';

const About = () => {
  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 bg-[#243c2e] text-white relative">
      {/* Grunge Texture Overlay */}
      <div className="absolute inset-0 bg-[url('/grunge-overlay.png')] bg-repeat opacity-10 pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h1
          className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-12 sm:mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Eagle Star Shooting Academy
        </motion.h1>

        {/* Hero Section */}
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
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed mb-6">
              Established with a passion for excellence, <span className="text-yellow-400 font-semibold">Eagle Star Shooting Academy</span> is a premier institution dedicated to promoting the sport of shooting across India. We offer comprehensive training programs that focus on technical precision, mental discipline, and physical endurance — empowering shooters to rise beyond limits.
            </p>
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed mb-6">
              Whether you’re a beginner or an aspiring national champion, our state-of-the-art facilities and national-level coaches ensure you receive elite guidance every step of the way.
            </p>
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
              At Eagle Star, we go beyond training — we build confidence, instill discipline, and sharpen focus.
            </p>
          </motion.div>
        </div>

        {/* Vision / Mission / Core Values */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {[
            {
              icon: <FaBullseye size={80} className="mx-auto text-yellow-300" />,
              title: "Our Vision",
              text: "To become India’s leading shooting academy, fostering talent from grassroots to global champions."
            },
            {
              icon: <FaUserShield size={80} className="mx-auto text-yellow-300" />,
              title: "Our Mission",
              text: "To build discipline, resilience, and precision through world-class training and mentorship."
            },
            {
              icon: <FaMedal size={80} className="mx-auto text-yellow-300" />,
              title: "Core Values",
              text: "Excellence, integrity, respect, and safety are the foundation of everything we do at Eagle Star."
            },
          ].map((card, index) => (
            <div key={index} className="bg-[#2c3e2f] rounded-2xl p-6 border border-green-600 hover:scale-105 transition">
              <div className="mb-4 flex justify-center">{card.icon}</div>
              <h3 className="text-xl font-semibold text-yellow-300 mb-2">{card.title}</h3>
              <p className="text-gray-200">{card.text}</p>
            </div>
          ))}
        </motion.div>



        <motion.div className="mb-20" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <h2 className="text-2xl sm:text-3xl font-semibold text-yellow-400 text-center mb-10">
            Why Choose Eagle Star Shooting Academy?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            {[
              "🏅 Experienced and NIS Certified  Coaches",
              "🎯 World-Class Shooting Range and Equipment",
              "📈 Individual Progress Tracking and Mental Conditioning",
              "🧠 Focused Psychological and Physical Fitness Training",
              "🏆 Participation in State and National Events",
              "🤝 Mentorship from Shooting Legends"
            ].map((point, idx) => (
              <div key={idx} className="bg-[#2c3e2f] rounded-2xl p-6 border border-green-600 text-gray-200 hover:scale-105 transition">
                {point}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Features */}
        <motion.div className="mb-20" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <h2 className="text-2xl sm:text-3xl font-semibold text-yellow-400 text-center mb-10">Our Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { title: "Digital Target Systems", text: "Electronic scoring systems for instant feedback." },
               { title: "Certified Coaching", text: "Nationally certified coaches with experience." },
              { title: "Scholarship Opportunities", text: "Funding support for deserving shooters." },
              { title: "Advanced Safety Measures", text: "Strict safety protocols and modern equipment ensure secure training." },

            ].map((feature, index) => (
              <div key={index} className="bg-[#2c3e2f] rounded-2xl p-6 border border-green-600 hover:scale-105 transition">
                <h4 className="text-lg font-semibold text-yellow-400 mb-2">{feature.title}</h4>
                <p className="text-gray-200">{feature.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Beyond the Range */}
        <motion.div className="mb-20" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <h2 className="text-2xl sm:text-3xl font-semibold text-yellow-300 text-center mb-10">Beyond the Range</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            {[
              { title: "National-Level Collaborations", text: "Partnered with top federations for exposure." },
              { title: "Women Empowerment Programs", text: "Special modules and scholarships for girls." },
              { title: "Fitness & Wellness Support", text: "Fitness and mental strength coaching." },
            ].map((item, index) => (
              <div key={index} className="bg-[#2c3e2f] rounded-2xl p-6 border border-green-600 hover:scale-105 transition">
                <h4 className="text-lg font-semibold text-yellow-400 mb-2">{item.title}</h4>
                <p className="text-gray-200">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Career in Shooting */}
        <motion.div className="mb-20" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <h2 className="text-2xl sm:text-3xl font-semibold text-yellow-400 text-center mb-10">Shooting as a Career</h2>
          <div className="text-gray-200 text-base sm:text-lg leading-relaxed space-y-4 px-2 sm:px-8">
            <p>Shooting is more than a sport — it’s a focused career that builds discipline, resilience, and national pride.</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Representation at national/international events</li>
              <li>Selection into Armed Forces via sports quota</li>
              <li>Govt jobs & rewards for medal winners</li>
              <li>Admission into top colleges</li>
              <li>Future roles in coaching and mentoring</li>
            </ul>
            <p>At Eagle Star, we guide every shooter toward a strong and sustainable career path.</p>
          </div>
        </motion.div>

        {/* Philosophy Section */}
        <motion.div className="text-center mb-20" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <h2 className="text-2xl sm:text-3xl font-semibold text-yellow-500 mb-6">Our Philosophy</h2>
          <div className="text-lg text-gray-200 space-y-2">
            <p>“You don’t just shoot — you sharpen your spirit.”</p>
            <p>“At Eagle Star, we don’t just aim — we achieve.”</p>
            <p>“Focus. Fire. Fly to Victory.”</p>
            <p>“From First Shot to Podium Stand — We’re With You.”</p>
          </div>
        </motion.div>

        {/* You can continue with additional sections like Why Choose, Features, Beyond the Range, Career, Philosophy etc. here with same style */}
      </div>
    </section>
  );
};

export default About;
