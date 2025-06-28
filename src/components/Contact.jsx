// src/pages/ContactPage.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelopeOpenText, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="bg-black text-white min-h-screen px-4 sm:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold text-yellow-400 mb-4">Contact Eagle Star</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">We're here to answer any questions you may have. Get in touch with us through the details below or visit us directly at our academy.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-900 p-6 rounded-xl border-l-4 border-yellow-400 shadow-md"
        >
          <h2 className="text-2xl font-bold text-yellow-400 mb-6">Get in Touch</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-yellow-400 text-2xl mt-1" />
              <div>
                <h4 className="font-semibold text-white">Phone</h4>
                <p className="text-gray-300">
                  <a href="tel:+919823222202" className="hover:underline hover:text-yellow-300 transition">+91 9823222202</a>
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaEnvelopeOpenText className="text-yellow-400 text-2xl mt-1" />
              <div>
                <h4 className="font-semibold text-white">Email</h4>
                <p className="text-gray-300">
                  <a href="mailto:eaglessacademy@gmail.com" className="hover:underline hover:text-yellow-300 transition">eaglessacademy@gmail.com</a>
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-yellow-400 text-2xl mt-1" />
              <div>
                <h4 className="font-semibold text-white">Location</h4>
                <p className="text-gray-300">Plot NO 23/24 N S Plaza E Sector MIDC Industrial Area Chikalthan Chhatrapati Sambhaji Nagar 431210, India</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-xl overflow-hidden border-2 border-yellow-400 shadow-lg"
        >
          <iframe
            title="Eagle Star Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83922226444!2d77.06889909999998!3d28.5272806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce38ab9b2b5a7%3A0x5f8fc8edcfbdee37!2sDelhi%2C%20India!5e0!3m2!1sen!2sin!4v1719494000000!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
