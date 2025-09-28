import React from "react";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const WelcomeMessage = () => {
  return (
    <section id="welcome" className="py-16 bg-white relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Quote Icon */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Quote className="w-12 h-12 text-blue-600 opacity-60" />
        </motion.div>

        {/* Message */}
        <motion.p
          className="text-xl md:text-2xl italic text-gray-700 mb-6 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          “Welcome to our Course Management System!  
          This platform is designed to make learning simpler and more engaging—
          helping students succeed and empowering teachers to share knowledge effectively.”
        </motion.p>

        {/* Author */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h4 className="text-lg font-semibold text-gray-800">
            — Dr. Maria Santos
          </h4>
          <p className="text-gray-600">School Principal</p>
        </motion.div>
      </div>
    </section>
  );
};

export default WelcomeMessage;
