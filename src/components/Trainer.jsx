// src/pages/TrainerPage.jsx

import React from 'react';
import { motion } from 'framer-motion';

const trainers = [
  {
    name: 'Mr. Arjun Singh',
    title: 'Head Coach & National Shooter',
    image: '/trainers/arjun.jpg',
    bio: 'With 20+ years of experience, Arjun has trained over 300 national-level shooters with excellence in air rifle and pistol shooting.'
  },
  {
    name: 'Ms. Kavita Rao',
    title: 'Certified Range Safety Officer',
    image: '/trainers/kavita.jpg',
    bio: 'A passionate advocate for safe shooting practices, Kavita ensures every trainee learns with confidence and discipline.'
  },
  {
    name: 'Mr. Rohan Mehta',
    title: 'Fitness & Mindset Coach',
    image: '/trainers/rohan.jpg',
    bio: 'Combining physical endurance training with mental resilience, Rohan builds champions from within.'
  },
  {
    name: 'Ms. Nisha Verma',
    title: 'Junior Training Specialist',
    image: '/trainers/nisha.jpg',
    bio: 'Nisha focuses on nurturing young talents with patience, precision, and care.'
  },
  {
    name: 'Mr. Manish Rawat',
    title: 'Technical Weapon Specialist',
    image: '/trainers/manish.jpg',
    bio: 'Expert in weapon maintenance and calibration, Manish ensures that all gear is competition-ready.'
  },
  {
    name: 'Ms. Priya Dutt',
    title: 'Mental Conditioning Coach',
    image: '/trainers/priya.jpg',
    bio: 'Priya helps athletes sharpen their focus and maintain peak performance under pressure.'
  },
  {
    name: 'Mr. Anil Thakur',
    title: 'Outdoor Field Trainer',
    image: '/trainers/anil.jpg',
    bio: 'Specialized in long-range and outdoor shooting techniques, Anil brings real-world shooting conditions to training.'
  },
  {
    name: 'Ms. Sneha Batra',
    title: 'Women Empowerment Program Lead',
    image: '/trainers/sneha.jpg',
    bio: 'Sneha empowers female shooters by mentoring them with tailored training and leadership development.'
  }
];

const Trainer = () => {
  return (
    <div className="bg-gradient-to-b from-black via-gray-950 to-black text-white py-20 px-4 sm:px-6 min-h-screen">
      <motion.h2
        className="text-4xl font-extrabold text-center mb-12 text-yellow-400 tracking-widest uppercase"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Meet Our Expert Trainers
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
        {trainers.map((trainer, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 max-w-xs w-full rounded-3xl overflow-hidden shadow-2xl hover:shadow-yellow-500/50 border border-yellow-400"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img
              src={trainer.image}
              alt={trainer.name}
              className="w-full h-64 object-cover rounded-t-3xl"
            />
            <div className="p-5 flex flex-col justify-between h-60">
              <div>
                <h3 className="text-xl font-bold text-yellow-400">{trainer.name}</h3>
                <p className="text-sm text-gray-300 italic mb-2">{trainer.title}</p>
              </div>
              <p className="text-xs sm:text-sm text-gray-400 leading-snug">{trainer.bio}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Trainer;
