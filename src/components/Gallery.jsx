// src/pages/Gallery.jsx

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const galleryImages = [
  { src: '/Logo1.jpg', caption: 'Opening Ceremony', description: 'Inauguration by Chief Guest with ribbon-cutting moment.' },
  { src: '/gallery/img2.jpg', caption: 'Training in Action', description: 'Students practicing under expert supervision.' },
  { src: '/gallery/img3.jpg', caption: 'Junior Category', description: 'Our young champions honing their skills.' },
  { src: '/gallery/img4.jpg', caption: 'Senior Division', description: 'High-level precision shooting by seniors.' },
  { src: '/gallery/img5.jpg', caption: 'Women’s League', description: 'Empowering women through professional training.' },
  { src: '/gallery/img6.jpg', caption: 'Award Ceremony', description: 'Winners receiving medals and trophies.' },
  { src: '/gallery/img7.jpg', caption: 'Group Session', description: 'Batch mentoring and teamwork drills.' },
  { src: '/gallery/img8.jpg', caption: 'Instructor Demo', description: 'Live demo by national coach Mr. Arjun Singh.' },
  { src: '/gallery/img9.jpg', caption: 'Night Practice', description: 'Evening training under floodlights.' },
  { src: '/gallery/img10.jpg', caption: 'Trophy Wall', description: 'Display of academy’s achievements.' },
  { src: '/gallery/img11.jpg', caption: 'Safety Drill', description: 'Hands-on safety workshop.' },
  { src: '/gallery/img12.jpg', caption: 'Indoor Practice', description: 'Advanced training in controlled environment.' },
  { src: '/gallery/img13.jpg', caption: 'Outdoor Field', description: 'Practice range with scenic backdrop.' },
  { src: '/gallery/img14.jpg', caption: 'Coaching Session', description: 'One-on-one mentoring session.' },
  { src: '/gallery/img15.jpg', caption: 'Team Outing', description: 'Academy recreational and bonding activities.' },
  { src: '/gallery/img16.jpg', caption: 'Final Shootout', description: 'Top-tier competition closing event.' },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="bg-black text-white  min-h-screen">
      <section className="py-20 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-black/80 via-gray-900/80 to-black/80 border-t border-yellow-400">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-12 text-yellow-400 uppercase"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Gallery
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              className="rounded-xl overflow-hidden shadow-xl border border-yellow-500 group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              onClick={() => setSelectedImage(img.src)}
            >
              <img
                src={img.src}
                alt={img.caption}
                className="w-full h-40 sm:h-60 md:h-48 lg:h-44 xl:h-52 object-cover group-hover:opacity-80 transition duration-300"
              />
              <div className="p-4 text-center bg-gray-900/80">
                <p className="text-yellow-400 font-semibold text-sm sm:text-base">{img.caption}</p> 
                <p className="text-gray-400 text-xs sm:text-sm mt-1">{img.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.img
                src={selectedImage}
                alt="Zoomed"
                className="max-w-5xl w-full h-auto rounded-lg shadow-lg"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
};

export default Gallery;
