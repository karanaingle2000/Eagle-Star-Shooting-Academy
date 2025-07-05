import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const galleryImages = [
   { src: '/c1.jpeg', caption: 'Opening Ceremony', description: 'Inauguration by Chief Guest with ribbon-cutting moment.' },
  { src: '/c2.jpeg', caption: 'Opening Ceremony', description: 'A powerful guest address that inspired, encouraged, and energized the spirit of the event..' },
  { src: '/c3.jpeg', caption: 'Opening Ceremony', description: 'Sundar Ghate, our respected Director, had the honor of felicitating Mr. Anil Rao, CEO of Primus Energy Solutions Pvt. Ltd., during the opening ceremony.' },
  { src: '/t4.jpeg', caption: 'Group Session', description: 'Under the expert guidance of Sundar Ghate Sir, our group session sharpened both skill and discipline.' },
  { src: '/t1.jpeg', caption: 'Group Session', description: 'A memorable training experience led by Sundar Ghate Sir — inspiring focus, unity, and excellence.' },
  { src: '/t2.jpeg', caption: 'Instructor Demo', description: 'Guided by Sundar Ghate Sir, each shot in our group session echoed confidence and precision..' },
  { src: '/adi.jpeg', caption: 'Night Practice', description: 'Evening training under floodlights.' },
  { src: '/parth.jpeg', caption: 'Trophy Wall', description: 'A moment of glory as our champions step forward, proving that hard work always hits the mark.' },
  { src: '/girl1.jpeg', caption: 'Safety Drill', description: 'Practicing precision with responsibility during our safety drill on the shooting range.s' },
  { src: '/medal.jpeg', caption: 'Indoor Practice', description: 'Pride shines as students of Eagle Star Shooting Academy are honored with well-deserved medals.' },
  { src: '/ips.jpeg', caption: 'Outdoor Field', description: 'Honored to see Sundar Ghate Sir, who had the privilege of training IPS Ravindra Singal — now Commissioner of Police, Nagpur & ADG' },
  { src: '/t3.jpeg', caption: 'Coaching Session', description: 'Honored to have Sundar Ghate Sir share his shooting mastery with the Indian Army Maratha Regiment YBC team.' },
  { src: '/gallery/img15.jpg', caption: 'Team Outing', description: 'Academy recreational and bonding activities.' },
  { src: '/gallery/img16.jpg', caption: 'Final Shootout', description: 'Top-tier competition closing event.' },
];

const videoClips = [
  {
    src: "/Ravindra sir.mp4",
    caption: "Message from IPS Ravindra Singal",
    description: "Motivational speech about youth discipline and national pride.",
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

  return (
    <div className="bg-black text-white min-h-screen">
      <section className="py-20 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-black/80 via-gray-900/80 to-black/80 border-t border-yellow-400">

        {/* Gallery Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-12 text-yellow-400 uppercase"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Gallery
        </motion.h2>

        {/* Gallery Grid */}
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
                className="group-hover:opacity-80 transition duration-300"
                style={{ width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '100%' }}
              />

              <div className="p-4 text-center bg-gray-900/80">
                <p className="text-yellow-400 font-semibold text-sm sm:text-base">{img.caption}</p> 
                <p className="text-gray-400 text-xs sm:text-sm mt-1">{img.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Zoom Modal */}
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

        {/* Video Section */}
        <div className="mt-16 text-center">
          <marquee behavior="scroll" direction="left" scrollamount="6" className="text-yellow-400 text-lg font-semibold mb-4">
            Eagle Star Shooting Academy - Behind the Scenes Training Moments
          </marquee>

          <p className="text-yellow-300 text-sm sm:text-base max-w-4xl mx-auto mb-6">
            We are honored by the presence of <strong>IPS (ADG) Ravindra Singal</strong>, Commissioner of Police, Nagpur. His leadership, integrity, and inspiring support for youth and discipline elevate our academy's spirit.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {videoClips.map((video, index) => (
              <div key={index}>
                <video
                  src={video.src}
                  className="w-auto h-auto rounded-lg border-2 border-yellow-400 shadow-xl"
                  
                  loop
                  muted
                  controls
                />
                <p className="mt-3 text-yellow-300 font-semibold">{video.caption}</p>
                <p className="text-sm text-gray-400 italic mb-1">{video.description}</p>
                <p className="text-sm text-yellow-500 font-bold">{video.slogan}</p>
              </div>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
};

export default Gallery;