import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // icons
import { Link } from "@inertiajs/react"; // Inertia Link
import { landingRouteNames } from "@/Config/routeConfig";

const LandingPageNav = () => {

  const [isOpen, setIsOpen] = useState(false);
  
  const isActive = (name) =>
    route().current(name) ? "text-blue-600 font-semibold" : "text-gray-700";
  
  const activeStyle = (name) => {
      return `${isActive(name)} ${isOpen ? 'block text-gray-700 font-medium' : ''} hover:text-blue-600 transition`;
  }
  
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link href={route(landingRouteNames.homePage)} className="text-2xl font-bold text-blue-600">
          MySchool
        </Link> 

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <Link href={route(landingRouteNames.homePage)} className={activeStyle(landingRouteNames.homePage)}>
            Home
          </Link>
          <Link href={route(landingRouteNames.aboutPage)} className={activeStyle(landingRouteNames.aboutPage)}>
            About
          </Link>
          <Link href={route(landingRouteNames.coursePage)} className={activeStyle(landingRouteNames.coursePage)}>
            Courses
          </Link>
          <Link href={route(landingRouteNames.contactPage)} className={activeStyle(landingRouteNames.contactPage)}>
            Contact
          </Link>
        </nav>

        {/* Login Button (desktop) */}
        <Link
          href={route(landingRouteNames.loginPage)}
          className="hidden md:inline-block ml-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Login
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4">
          <Link href={route(landingRouteNames.homePage)} className={activeStyle(landingRouteNames.homePage)}>
            Home
          </Link>
          <Link href={route(landingRouteNames.aboutPage)} className={activeStyle(landingRouteNames.aboutPage)}>
            About
          </Link>
          <Link href={route(landingRouteNames.coursePage)} className={activeStyle(landingRouteNames.coursePage)}>
            Courses
          </Link>
          <Link href={route(landingRouteNames.contactPage)} className={activeStyle(landingRouteNames.contactPage)}>
            Contact
          </Link>
          <Link href={route(landingRouteNames.loginPage)} 
           className="block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </Link>
        </div>
      )}
    </header>
  );
};

export default LandingPageNav;
