import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay, FaPause, FaExpand } from 'react-icons/fa';

const galleryImages = [
  { src: '/c1.jpeg', caption: 'Opening Ceremony', description: 'A moment of pride as Shiv Chhatrapati Awardee Seema Patwardhan graced our opening ceremony with a ceremonial ribbon cutting.' },
  { src: '/c2.jpeg', caption: 'Opening Ceremony', description: 'A powerful guest address that inspired, encouraged, and energized the spirit of the event.' },
  { src: '/c3.jpeg', caption: 'Opening Ceremony', description: 'Sundar Ghate, our respected Director, had the honor of felicitating Mr. Anil Rao, CEO of Primus Energy Solutions Pvt. Ltd., during the opening ceremony.' },
  { src: '/t4.jpeg', caption: 'Group Session', description: 'Under the expert guidance of Sundar Ghate Sir, our group session sharpened both skill and discipline.' },
  { src: '/t1.jpeg', caption: 'Group Session', description: 'A memorable training experience led by Sundar Ghate Sir — inspiring focus, unity, and excellence.' },
  { src: '/t2.jpeg', caption: 'Instructor Demo', description: 'Guided by Sundar Ghate Sir, each shot in our group session echoed confidence and precision.' },
  { src: '/adi.jpeg', caption: 'Training Session', description: 'Dedicated training sessions building precision and discipline.' },
  { src: '/parth.jpeg', caption: 'Honored Guest', description: 'A proud moment as Senior Police Inspector Gautam Patare extended his greetings and encouragement to our academy.' },
  { src: '/girl1.jpeg', caption: 'Safety Training', description: 'Practicing precision with responsibility during our safety drill on the shooting range.' },
  { src: '/medal.jpeg', caption: 'Achievement Recognition', description: 'Esha Singh and Koushik Gopu, shining talents trained by Sundar Ghate Sir, recognized and honored for their dedication and achievements.' },
  { src: '/ips.jpeg', caption: 'Distinguished Alumni', description: 'Honored to see Sundar Ghate Sir, who had the privilege of training IPS Ravindra Singal — now Commissioner of Police, Nagpur & ADG.' },
  { src: '/t3.jpeg', caption: 'Military Training', description: 'Honored to have Sundar Ghate Sir share his shooting mastery with the Indian Army Maratha Regiment YBC team.' },
  { src: '/e1.jpeg', caption: 'Olympic Achievement', description: 'Proud moment as Esha Singh, a shining talent and student of Sundar Ghate Sir, receives the prestigious Arjuna Award.' },
];

const videoClips = [
  {
    src: "/Ravindra sir.mp4",
    caption: "Message from IPS Ravindra Singal",
    description: "Motivational speech about youth discipline and national pride from Commissioner of Police, Nagpur & ADG.",
    slogan: "✨ Discipline today, leadership tomorrow."
  },
  {
    src: "/Esha.mp4",
    caption: "Olympian Esha Singh Shares Her Experience",
    description: "Esha Singh, a rising star in Indian shooting and Paris Olympics participant, shares her journey, motivation, and message to the next generation of shooters.",
    slogan: "🎯 Aim high, shoot higher."
  },
  {
    src: "/preet sir.mp4",
    caption: "Colonel Preet Chohan's Greeting",
    description: "Colonel Preet Chohan, one of the finest shooters in the Indian Army and part of the Maratha Light Infantry, sends his warm wishes and support to Eagle Star Shooting Academy.",
    slogan: "🏅 Discipline, Honor, Victory."
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'ceremony', name: 'Ceremonies' },
    { id: 'training', name: 'Training' },
    { id: 'achievements', name: 'Achievements' }
  ];

  const getImageCategory = (caption) => {
    if (caption.includes('Opening Ceremony')) return 'ceremony';
    if (caption.includes('Group Session') || caption.includes('Training') || caption.includes('Safety')) return 'training';
    if (caption.includes('Honored') || caption.includes('Achievement') || caption.includes('Olympic')) return 'achievements';
    return 'training';
  };

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => getImageCategory(img.caption) === selectedCategory);

  return (
    <div className="bg-black text-white min-h-screen">
      <section className="py-20 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-black/80 via-gray-900/80 to-black/80 border-t border-yellow-400">

        {/* Gallery Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-yellow-400 uppercase">
            Gallery
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Witness the journey of excellence, dedication, and achievement at Eagle Star Shooting Academy
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-yellow-400 text-black'
                  : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {filteredImages.map((img, i) => (
            <motion.div
              key={i}
              className="rounded-xl overflow-hidden shadow-xl border border-yellow-500 group cursor-pointer bg-gray-900"
              whileHover={{ scale: 1.03, y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              onClick={() => setSelectedImage(img.src)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <FaExpand className="text-white text-2xl" />
                </div>
              </div>

              <div className="p-4 text-center">
                <p className="text-yellow-400 font-semibold text-sm sm:text-base mb-2">{img.caption}</p> 
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{img.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Zoom Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.img
                src={selectedImage}
                alt="Zoomed"
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
              />
              <button 
                className="absolute top-4 right-4 text-white text-2xl hover:text-yellow-400 transition"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Video Section */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-8">Messages from Our Legends</h3>
          
          <div className="bg-yellow-400/10 rounded-2xl p-6 mb-8 border border-yellow-400/30">
            <p className="text-yellow-300 text-base sm:text-lg max-w-4xl mx-auto leading-relaxed">
              We are honored by the presence and support of distinguished personalities who inspire excellence. 
              Their words of encouragement fuel our mission to create world-class shooters and build character through sport.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {videoClips.map((video, index) => (
              <motion.div 
                key={index}
                className="bg-gray-900 rounded-2xl overflow-hidden border border-yellow-400/30 hover:border-yellow-400 transition-all duration-300"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative">
                  <video
                    src={video.src}
                    className="w-full h-48 object-cover"
                    loop
                    muted
                    controls
                    poster=""
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-yellow-300 font-semibold text-lg mb-2">{video.caption}</h4>
                  <p className="text-sm text-gray-400 mb-3 leading-relaxed">{video.description}</p>
                  <p className="text-sm text-yellow-500 font-bold">{video.slogan}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="mt-20 text-center bg-gradient-to-r from-yellow-400/20 to-yellow-500/20 rounded-2xl p-8 border border-yellow-400/30"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-yellow-400 mb-4">Be Part of Our Success Story</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join Eagle Star Shooting Academy and create your own moments of triumph and excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition">
              Start Your Journey
            </a>
            <a href="/trainer" className="border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition">
              Meet Our Coaches
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Gallery;