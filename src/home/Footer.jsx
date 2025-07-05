import React from 'react';
import {
  FaFacebookF, FaInstagram, FaTwitter, FaMapMarkerAlt,
  FaPhoneAlt, FaEnvelope, FaWhatsapp
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Academy Info */}
        <div>
          <h2 className="text-xl font-bold text-yellow-400 mb-3">Eagle Star Shooting Academy</h2>
          <p className="text-gray-300">
            Where focus meets precision. Join us to master the art of rifle shooting in a professional and disciplined environment.
          </p>
        </div>

        {/* Contact Info */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-yellow-400">Contact Us</h3>
          <p className="flex items-start gap-2 text-gray-300">
            <FaMapMarkerAlt className="text-2xl shrink-0 mt-1" />
            <a
              href="https://www.google.com/maps/place/s4s+technologies/@19.8819787,75.3812552,240m/data=!3m1!1e3!4m6!3m5!1s0x3bdba300124505c1:0xc6075f4dbd1f7b42!8m2!3d19.8823601!4d75.3819897!16s%2Fg%2F11wk2_smd1?authuser=0&entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Plot NO 23/24 N S Plaza E Sector MIDC Industrial Area Chikalthana, Chhatrapati Sambhaji Nagar 431210, Maharashtra, India
            </a>
          </p>
          <p className="flex items-center gap-2 text-gray-300">
            <FaPhoneAlt className="text-2xl" />
            <a href="tel:+918149222003" className="hover:underline">+91 8149222003</a>
             <br />

            <a href="tel:+919823222202" className="hover:underline">+91 9823222202</a>
          </p>
          <p className="flex items-center gap-2 text-gray-300">
            <FaEnvelope className="text-2xl" />
            <a href="mailto:eaglessacademy@gmail.com" className="hover:underline">eaglessacademy@gmail.com</a>
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-400 mb-2">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/gallery" className="hover:underline">Gallery</a></li>
            <li><a href="/trainers" className="hover:underline">Trainers</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-400 mb-2">Follow Us</h3>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-300 hover:text-yellow-400 transition transform hover:scale-125 duration-300 text-3xl"><FaFacebookF /></a>
            <a href="https://www.instagram.com/eagle_star_shooting_academy?igsh=OXFoc294cGlhNjN3&utm_source=qr" className="text-gray-300 hover:text-yellow-400 transition transform hover:scale-125 duration-300 text-3xl"><FaInstagram /></a>
            <a href="https://wa.me/919823222202" className="text-gray-300 hover:text-yellow-400 transition transform hover:scale-125 duration-300 text-3xl"><FaWhatsapp /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-10 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Eagle Star Shooting Academy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
