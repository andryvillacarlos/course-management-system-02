import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 90, damping: 18 }}
          viewport={{ once: true }}
        >
          About Our Course Management System
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          className="text-gray-600 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Our CMS is designed to make learning simple and efficient. Students can
          register, join classes, and view grades, while teachers can manage
          lessons and track progress—all in one place. With an easy-to-use
          interface, the system helps create a seamless connection between
          students and teachers, making education more effective and accessible.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutSection;
