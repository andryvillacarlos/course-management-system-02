import { Link } from "@inertiajs/react";
import React from "react";
import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion"; // animation
import { landingRouteNames } from "@/Config/routeConfig";
const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Big Headline */}
        <motion.h1
          className="text-3xl md:text-5xl font-extrabold mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Welcome to{" "}
          <span className="text-yellow-300">Your School Name</span> <br />
          Course Management System
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-lg md:text-xl mb-8 text-gray-100"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          A smarter way to manage learning, track progress, and stay connected.
        </motion.p>

        {/* Call-to-Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link
            href={route(landingRouteNames.registerPage)}
            className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition"
          >
            <GraduationCap size={20} className="text-gray-900" />
            Student Register
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
