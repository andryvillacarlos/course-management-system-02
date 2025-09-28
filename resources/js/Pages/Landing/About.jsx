import React from "react";
import { motion } from "framer-motion";
import LandingPageLayout from "@/Layouts/LandingPageLayout";
import { Book,Users } from "lucide-react";
import { landingRouteNames } from "@/Config/routeConfig";
import { Link } from "@inertiajs/react";

const AboutPage = () => {
  return (
    <LandingPageLayout>
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          {/* Hero Heading */}
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 90, damping: 18 }}
          >
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Our CMS
            </span>
          </motion.h1>

          {/* Intro */}
          <motion.p
            className="text-gray-600 text-lg leading-relaxed mb-16 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Our Course Management System is designed to make learning seamless
            and accessible. Students can join classes, track grades, and engage
            in interactive learning, while teachers can manage lessons and
            monitor progress with ease.
          </motion.p>

          {/* Mission */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto">
              We aim to transform education by creating an environment where
              technology empowers both students and teachers. Our mission is to
              reduce manual workload and provide tools that focus on
              collaboration, efficiency, and real learning outcomes.
            </p>
          </motion.div>

          {/* Features */}
          <motion.div
            className="grid md:grid-cols-2 gap-8 text-left mb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {/* Students */}
            <div className="p-8 rounded-2xl shadow-lg bg-white hover:shadow-xl hover:-translate-y-1 transition transform">
              <Book className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                For Students
              </h3>
              <p className="text-gray-600">
                A modern dashboard to access classes, assignments, and grades
                anytime, anywhere — designed to keep learning simple and
                engaging.
              </p>
            </div>

            {/* Teachers */}
            <div className="p-8 rounded-2xl shadow-lg bg-white hover:shadow-xl hover:-translate-y-1 transition transform">
              <Users className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                For Teachers
              </h3>
              <p className="text-gray-600">
                Powerful tools to organize lessons, share resources, and track
                student performance with minimal effort and maximum impact.
              </p>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              Building the Future of Education
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto mb-6">
              With a user-first design and modern technology, our CMS continues
              to evolve — ensuring that students and teachers always have the
              best tools to succeed.
            </p>
            <Link
              href={route(landingRouteNames.contactPage)}
              className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-md hover:opacity-90 transition"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </LandingPageLayout>
  );
};

export default AboutPage;
