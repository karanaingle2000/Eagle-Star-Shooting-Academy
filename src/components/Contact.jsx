 

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelopeOpenText, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Contact = () => {
  const formRef = useRef();
  const [statusMessage, setStatusMessage] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    formData.append("access_key", "1992a3a8-0c16-4242-91ad-6bc6d1e6280a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        setStatusMessage("Your message has been sent successfully!");
        formRef.current.reset();
      } else {
        setStatusMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatusMessage("An error occurred. Please check your connection.");
    }
  };

  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black text-white min-h-screen px-4 sm:px-8 py-16">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold text-yellow-400 mb-4">Contact Eagle Star</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">We're here to answer your queries. Reach out to us or visit the academy directly!</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {/* Contact Details */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-900 p-6 rounded-xl border-l-4 border-yellow-400 shadow-md"
        >
          <h2 className="text-2xl font-bold text-yellow-400 mb-6">Get in Touch</h2>
          <div className="space-y-6 text-gray-300">
            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-yellow-400 text-xl mt-1" />
              <div>
                <h4 className="font-semibold">Phone</h4>
                <a href="tel:+919823222202" className="hover:underline hover:text-yellow-300 transition">+91 9823222202</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaEnvelopeOpenText className="text-yellow-400 text-xl mt-1" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <a href="mailto:eaglessacademy@gmail.com" className="hover:underline hover:text-yellow-300 transition">eaglessacademy@gmail.com</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-yellow-400 text-xl mt-1" />
              <div>
                <h4 className="font-semibold">Location</h4>
                <p>Plot NO 23/24 N S Plaza, E Sector, MIDC Industrial Area, Chikalthana, Chhatrapati Sambhaji Nagar 431210, Maharashtra , India</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaClock className="text-yellow-400 text-xl mt-1" />
              <div>
                <h4 className="font-semibold">Hours</h4>
                <p>Mon - Sun: 09:00 AM - 09:00 PM<br />Friday: Closed</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="col-span-1 lg:col-span-2 bg-gray-800 p-8 rounded-xl shadow-md"
        >
          <h2 className="text-2xl font-bold text-yellow-300 mb-6">Send Us a Message</h2>
          <form className="space-y-5" ref={formRef} onSubmit={onSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            ></textarea>
            <button type="submit" className="bg-yellow-400 text-black font-bold px-6 py-2 rounded hover:bg-yellow-300 transition duration-300">
              Send Message
            </button>
            {statusMessage && <p className="text-green-400 font-medium pt-2">{statusMessage}</p>}
          </form>
        </motion.div>
      </div>

      {/* Google Map */}
      <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
  className="mt-16 rounded-xl overflow-hidden border-2 border-yellow-400 shadow-lg max-w-7xl mx-auto"
>
  <iframe
    title="Eagle Star Location - S4S Technologies"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3566.35105628618!2d75.37941477499906!3d19.88236008149538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba300124505c1%3A0xc6075f4dbd1f7b42!2ss4s%20technologies!5e1!3m2!1sen!2sin!4v1751268292807!5m2!1sen!2sin"
    width="100%"
    height="450"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</motion.div>



      {/* CTA Footer */}
      <motion.div
        className="text-center mt-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-4">Want to Visit Us?</h2>
        <p className="text-gray-300 mb-6">We welcome all aspiring shooters. Feel free to drop by and witness our facilities firsthand.</p>
        <a href="https://wa.me/919823222202" target="_blank" rel="noopener noreferrer">
          <button className="bg-green-500 hover:bg-green-400 text-white px-6 py-3 rounded-full font-semibold text-sm sm:text-base transition">
            Chat on WhatsApp
          </button>
        </a>
      </motion.div>
    </div>
  );
};

export default Contact;
