import { useState, useEffect, useRef } from "react";
import { Link, usePage } from "@inertiajs/react";
import { ChevronDown, LogOut, Settings, User, Menu } from "lucide-react";

export default function TopBar({ setMobileOpen }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const {user} = usePage().props.auth;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full bg-red-700 text-white shadow-md relative">
      <div className="flex justify-between items-center px-4 md:px-6 py-3">
        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          <Menu size={24} />
        </button>

        {/* School Name */}
        <h1 className="text-lg md:text-xl font-bold tracking-wide">
          My School Name
        </h1>

        {/* Profile */}
        <div className="relative" ref={dropdownRef}>
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <img
              src="https://ui-avatars.com/api/?name=Admin+User&background=red&color=fff"
              alt="Profile"
              className="w-9 h-9 rounded-full border-2 border-white shadow-sm"
            />
            <span className="font-medium hidden md:block">{user.name}</span>
            <ChevronDown size={18} className="hidden md:block" />
          </div>

          {open && (
            <div className="absolute right-0 mt-2 w-44 bg-white text-gray-700 rounded-md shadow-lg overflow-hidden z-50">
              <Link
                href="/profile"
                className="flex items-center px-4 py-2 hover:bg-gray-100"
              >
                <User className="w-4 h-4 mr-2" /> Profile
              </Link>

              <Link
                href="/settings"
                className="flex items-center px-4 py-2 hover:bg-gray-100"
              >
                <Settings className="w-4 h-4 mr-2" /> Settings
              </Link>

              <hr />

              <Link
                href={route('logout')}
                method="post"
                as="button"
                className="flex items-center px-4 py-2 text-red-600 hover:bg-gray-100 w-full text-left"
              >
                <LogOut className="w-4 h-4 mr-2" /> Logout
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}