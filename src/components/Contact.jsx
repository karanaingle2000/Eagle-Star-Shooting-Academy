import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelopeOpenText, FaMapMarkerAlt, FaClock, FaWhatsapp, FaCheckCircle } from 'react-icons/fa';

const Contact = () => {
  const formRef = useRef();
  const [statusMessage, setStatusMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(formRef.current);
    formData.append("access_key", "017b97e4-1b12-46c7-86d0-fcddf1166f7b");

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
        setStatusMessage("Your message has been sent successfully! We'll get back to you soon.");
        formRef.current.reset();
      } else {
        setStatusMessage("Failed to send message. Please try again or contact us directly.");
      }
    } catch (error) {
      setStatusMessage("An error occurred. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black text-white min-h-screen px-4 sm:px-8 py-16">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold text-yellow-400 mb-4">Contact Eagle Star</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Ready to begin your shooting journey? We're here to answer your queries and guide you every step of the way.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {/* Contact Details */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-900 p-8 rounded-xl border-l-4 border-yellow-400 shadow-lg"
        >
          <h2 className="text-2xl font-bold text-yellow-400 mb-8">Get in Touch</h2>
          <div className="space-y-8 text-gray-300">
            <motion.div 
              className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-800 transition-colors"
              whileHover={{ x: 5 }}
            >
              <FaPhoneAlt className="text-yellow-400 text-xl mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-white mb-2">Phone Numbers</h4>
                <a href="tel:+918149222003" className="block hover:underline hover:text-yellow-300 transition mb-1">
                  +91 8149222003
                </a>
                <a href="tel:+919823222202" className="block hover:underline hover:text-yellow-300 transition">
                  +91 9823222202
                </a>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-800 transition-colors"
              whileHover={{ x: 5 }}
            >
              <FaEnvelopeOpenText className="text-yellow-400 text-xl mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-white mb-2">Email</h4>
                <a href="mailto:eaglessacademy@gmail.com" className="hover:underline hover:text-yellow-300 transition">
                  eaglessacademy@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-800 transition-colors"
              whileHover={{ x: 5 }}
            >
              <FaMapMarkerAlt className="text-yellow-400 text-xl mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-white mb-2">Location</h4>
                <p className="leading-relaxed">
                  Plot NO 23/24 N S Plaza, E Sector, MIDC Industrial Area, Chikalthana, 
                  Chhatrapati Sambhaji Nagar 431210, Maharashtra, India
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-800 transition-colors"
              whileHover={{ x: 5 }}
            >
              <FaClock className="text-yellow-400 text-xl mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-white mb-2">Operating Hours</h4>
                <p>Monday - Sunday: 09:00 AM - 09:00 PM</p>
                <p className="text-red-400 font-medium">Friday: Closed</p>
              </div>
            </motion.div>
          </div>

          {/* Quick Action Buttons */}
          <div className="mt-8 space-y-4">
            <a 
              href="https://wa.me/919823222202" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-lg font-semibold transition-colors w-full justify-center"
            >
              <FaWhatsapp className="text-xl" />
              Chat on WhatsApp
            </a>
            <a 
              href="tel:+918149222003"
              className="flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold transition-colors w-full justify-center"
            >
              <FaPhoneAlt className="text-xl" />
              Call Now
            </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="col-span-1 lg:col-span-2 bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700"
        >
          <h2 className="text-2xl font-bold text-yellow-300 mb-8">Send Us a Message</h2>
          <form className="space-y-6" ref={formRef} onSubmit={onSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Your Name *</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 border border-gray-600 focus:border-yellow-400 transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Your Email *</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 border border-gray-600 focus:border-yellow-400 transition-colors"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 border border-gray-600 focus:border-yellow-400 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                <select
                  name="subject"
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 border border-gray-600 focus:border-yellow-400 transition-colors"
                >
                  <option value="">Select a subject</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Training Programs">Training Programs</option>
                  <option value="Admission">Admission</option>
                  <option value="Fees Information">Fees Information</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Your Message *</label>
              <textarea
                name="message"
                rows="5"
                placeholder="Tell us about your interest in shooting, experience level, or any specific questions you have..."
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 border border-gray-600 focus:border-yellow-400 transition-colors resize-vertical"
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="bg-yellow-400 text-black font-bold px-8 py-3 rounded-lg hover:bg-yellow-300 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-black border-t-transparent"></div>
                  Sending...
                </>
              ) : (
                <>
                  <FaEnvelopeOpenText />
                  Send Message
                </>
              )}
            </button>

            {statusMessage && (
              <motion.div 
                className={`flex items-center gap-2 p-4 rounded-lg ${
                  statusMessage.includes('successfully') 
                    ? 'bg-green-900/50 text-green-400 border border-green-500' 
                    : 'bg-red-900/50 text-red-400 border border-red-500'
                }`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {statusMessage.includes('successfully') && <FaCheckCircle />}
                <p className="font-medium">{statusMessage}</p>
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>

      {/* Google Map */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="mt-20 rounded-xl overflow-hidden border-2 border-yellow-400 shadow-2xl max-w-7xl mx-auto"
      >
        <div className="bg-gray-900 p-4 border-b border-yellow-400">
          <h3 className="text-xl font-semibold text-yellow-400 text-center">Find Us Here</h3>
        </div>
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

      {/* FAQ Section */}
      <motion.div
        className="mt-20 max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-bold text-yellow-400 text-center mb-10">Frequently Asked Questions</h3>
        <div className="grid gap-6">
          {[
            {
              question: "What age groups do you accept for training?",
              answer: "We accept students from age 10 onwards. We have specialized programs for different age groups and skill levels."
            },
            {
              question: "Do you provide equipment for beginners?",
              answer: "Yes, we provide all necessary equipment including rifles, pellets, and safety gear for beginners during their initial training period."
            },
            {
              question: "What are the training timings?",
              answer: "We operate from 9:00 AM to 9:00 PM, Monday to Sunday (closed on Fridays). We offer flexible batch timings to accommodate students and working professionals."
            },
            {
              question: "Do you offer trial sessions?",
              answer: "Yes, we offer trial sessions for new students to experience our training methodology and facilities before enrollment."
            }
          ].map((faq, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-6 border border-gray-700">
              <h4 className="text-yellow-300 font-semibold mb-3">{faq.question}</h4>
              <p className="text-gray-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* CTA Footer */}
      <motion.div
        className="text-center mt-20 bg-gradient-to-r from-yellow-400/20 to-yellow-500/20 rounded-2xl p-8 border border-yellow-400/30"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-4">Ready to Start Your Journey?</h2>
        <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
          Visit our academy and witness our world-class facilities firsthand. Experience the difference that professional training makes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://wa.me/919823222202" target="_blank" rel="noopener noreferrer">
            <button className="bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-full font-semibold text-sm sm:text-base transition flex items-center gap-2 mx-auto">
              <FaWhatsapp className="text-xl" />
              Chat on WhatsApp
            </button>
          </a>
          <a href="tel:+918149222003">
            <button className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 rounded-full font-semibold text-sm sm:text-base transition flex items-center gap-2 mx-auto">
              <FaPhoneAlt />
              Call Now
            </button>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;