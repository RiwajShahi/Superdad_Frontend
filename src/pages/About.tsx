import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="relative min-h-screen bg-white px-6 py-20 flex items-center justify-center overflow-hidden">
      
      {/* Subtle Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* Floating Soft Elements */}
      <motion.div
        className="absolute w-72 h-72 bg-black/5 rounded-full blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        style={{ top: "10%", left: "5%" }}
      />

      <motion.div
        className="absolute w-80 h-80 bg-black/5 rounded-full blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, 40, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
        style={{ bottom: "5%", right: "10%" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center">
        
        {/* Badge */}
        <p className="text-xl uppercase tracking-widest text-gray-950 mb-4 ">
          About Us
        </p>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
          Crafted with care for{" "}
          <span className="text-gray-500">modern families</span> 💖
        </h1>

        {/* Description */}
        <p className="mt-6 text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
          At SuperDad, we believe parenting should feel joyful, not overwhelming.
          Our mission is to provide soft, safe, and thoughtfully designed products
          that bring comfort to both babies and parents.
        </p>

        {/* Features */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          
          {[
            {
              title: "Safe & Gentle",
              desc: "Every product is carefully selected with your baby’s comfort in mind.",
            },
            {
              title: "Thoughtful Design",
              desc: "Minimal, modern, and made to fit beautifully into your life.",
            },
            {
              title: "Made with Love",
              desc: "We care deeply about quality, safety, and happiness.",
            },
          ].map((item, i) => (
            <div key={i} className="p-6 border rounded-2xl bg-white/60 backdrop-blur">
              <h3 className="text-sm font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

        {/* Closing Note */}
        <p className="mt-12 text-sm text-gray-400">
          We’re here to make parenting a little easier — and a lot more beautiful ✨
        </p>
      </div>
    </div>
  );
};

export default About;