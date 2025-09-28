import React from "react";
import { Link } from "@inertiajs/react";
import { MapPin, Phone, Mail } from "lucide-react"; // icons

const LandingPageFooter = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 mt-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">CourseMS</h2>
          <p className="text-sm leading-relaxed">
            A modern Course Management System that connects students and teachers,
            making learning simple, engaging, and accessible.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
            <li><Link href="/about" className="hover:text-blue-400">About</Link></li>
            <li><Link href="/courses" className="hover:text-blue-400">Courses</Link></li>
            <li><Link href="/contact" className="hover:text-blue-400">Contact</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/faq" className="hover:text-blue-400">FAQ</Link></li>
            <li><Link href="/support" className="hover:text-blue-400">Support</Link></li>
            <li><Link href="/privacy" className="hover:text-blue-400">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-blue-400">Terms of Service</Link></li>
          </ul>
        </div>

        {/* Contact Info with Icons */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-blue-400" />
              123 School St, City, Country
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-blue-400" />
              +63 912 345 6789
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-blue-400" />
              support@coursems.com
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} <span className="text-white font-semibold">CourseMS</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default LandingPageFooter;
