import React from "react";
import { BookOpen, Users, Smartphone } from "lucide-react"; // modern icons
import { motion } from "framer-motion";

const KeyFeatures = () => {
  const features = [
    {
      icon: <BookOpen className="w-12 h-12 text-blue-600" />,
      title: "Easy Course Access",
      desc: "Students can enroll and access materials anytime.",
    },
    {
      icon: <Users className="w-12 h-12 text-green-600" />,
      title: "Teacher Tools",
      desc: "Manage classes, assignments, and grades.",
    },
    {
      icon: <Smartphone className="w-12 h-12 text-purple-600" />,
      title: "Accessible Anywhere",
      desc: "Works on desktop, tablet, and mobile.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 15 }}
          viewport={{ once: true }}
        >
          Key Features
        </motion.h2>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 90,
                damping: 18,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
