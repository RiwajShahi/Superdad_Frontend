import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaHeart, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-linear-to-br from-pink-50 via-purple-50 to-blue-50 border-t">
      
      {/* Floating Bubbles */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-24 h-24 bg-pink-200 rounded-full opacity-40"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          style={{ top: "10%", left: "10%" }}
        />
        <motion.div
          className="absolute w-16 h-16 bg-purple-200 rounded-full opacity-40"
          animate={{ y: [0, 25, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          style={{ bottom: "15%", right: "15%" }}
        />
        <motion.div
          className="absolute w-12 h-12 bg-blue-200 rounded-full opacity-40"
          animate={{ x: [0, 15, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
          style={{ top: "50%", right: "20%" }}
        />
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 py-12">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              SuperDad <FaHeart size={18} className="text-pink-400" />
            </h2>
            <p className="text-gray-500 text-sm mt-3 leading-relaxed">
              Soft, safe & adorable essentials for your little ones.
              Crafted with love for modern parents 💕
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 uppercase mb-4">
              Explore
            </h3>
            <ul className="space-y-2 text-gray-500 text-sm">
              {["Home", "Shop", "About", "Contact"].map((item) => (
                <li
                  key={item}
                  className="hover:text-black cursor-pointer transition-all duration-300 hover:translate-x-1"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 uppercase mb-4">
              Contact
            </h3>
            <p className="text-gray-500 text-sm">📍 Kathmandu, Nepal</p>
            <p className="text-gray-500 text-sm mt-2">📧 support@superdad.com</p>
            <p className="text-gray-500 text-sm mt-1">📞 +977-98XXXXXXX</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Left */}
          <p className="text-gray-400 text-xs text-center md:text-left">
            © {new Date().getFullYear()} SuperDad. Made with love 💖
          </p>

          {/* Social Icons */}
          <div className="flex gap-5">
            {[
              { icon: FaInstagram, link: "#" },
              { icon: FaFacebookF, link: "#" },
              { icon: FaTwitter, link: "#" },
            ].map(({ icon: Icon }, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full bg-white shadow hover:shadow-md transition"
              >
                <Icon size={18} className="text-gray-600" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;