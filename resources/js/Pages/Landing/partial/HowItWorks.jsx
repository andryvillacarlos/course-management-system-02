import React from "react";
import { UserPlus, BookOpen, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      icon: <UserPlus className="w-10 h-10 text-blue-600" />,
      title: "Register / Login",
      description: "Create a new account or log in to get started.",
    },
    {
      number: "2",
      icon: <BookOpen className="w-10 h-10 text-blue-600" />,
      title: "Enroll in Courses",
      description: "Join your assigned classes and access learning materials.",
    },
    {
      number: "3",
      icon: <GraduationCap className="w-10 h-10 text-blue-600" />,
      title: "Start Learning",
      description:
        "Access materials, submit assignments, and track your grades.",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          How It Works
        </motion.h2>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Number Badge */}
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg shadow-md">
                {step.number}
              </div>

              <div className="flex justify-center mb-6 mt-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
