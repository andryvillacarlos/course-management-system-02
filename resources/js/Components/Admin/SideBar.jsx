import { useState, useEffect } from "react";
import { Link, usePage } from "@inertiajs/react";
import {
  Users,
  BookOpen,
  ClipboardList,
  GraduationCap,
  BarChart3,
  DollarSign,
  Settings,
  Bell,
  Shield,
  ChevronDown,
  ChevronRight,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AdminSidebar({ mobileOpen, setMobileOpen }) {
  const [activeDropdowns, setActiveDropdowns] = useState([]);
  const { url } = usePage();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Auto-close mobile sidebar on desktop resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    if (windowWidth >= 768 && mobileOpen) {
      setMobileOpen(false);
    }

    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth, mobileOpen, setMobileOpen]);

  const toggleDropdown = (name) => {
    setActiveDropdowns((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );
  };
const menuItems = [
  { name: "Dashboard", icon: Users, href: "/admin/dashboard" },
  {
    name: "User Management",
    icon: Users,
    sub: [
      { name: "Teacher", href: "/admin/teachers-list" },
      { name: "Add Student", href: "/admin/users/add-student" },
      { name: "Manage Users", href: "/admin/users/manage" },
    ],
  },
  {
    name: "Course Management",
    icon: BookOpen,
    sub: [
      { name: "Add Course", href: "dashboard" },
      { name: "Assign Teacher", href: "/admin/courses/assign-teacher" },
      { name: "Curriculum Setup", href: "/admin/courses/curriculum" },
    ],
  },
  {
    name: "Departments & Classes",
    icon: GraduationCap,
    sub: [
      { name: "Add Department", href: "/admin/departments/add" },
      { name: "Create Section", href: "/admin/sections/create" },
      { name: "Assign Students", href: "/admin/sections/assign-students" },
    ],
  },
  { name: "Enrollment", icon: ClipboardList, href: "/admin/enrollment" },
  {
    name: "Grades & Evaluation",
    icon: ClipboardList,
    sub: [
      { name: "View Grades", href: "/admin/grades/view" },
      { name: "Approve Grades", href: "/admin/grades/approve" },
      { name: "Generate Transcript", href: "/admin/grades/transcript" },
    ],
  },
  {
    name: "Reports & Analytics",
    icon: BarChart3,
    sub: [
      { name: "Student Reports", href: "/admin/reports/students" },
      { name: "Teacher Reports", href: "/admin/reports/teachers" },
      { name: "Attendance", href: "/admin/reports/attendance" },
    ],
  },
  { name: "Finance & Billing", icon: DollarSign, href: "/admin/finance" },
  { name: "System Settings", icon: Settings, href: "/admin/settings" },
  { name: "Notifications", icon: Bell, href: "/admin/notifications" },
  { name: "Audit & Security", icon: Shield, href: "/admin/audit" },
];


  const SidebarItem = ({ item }) => {
    const isOpen = activeDropdowns.includes(item.name);
    const isActive = url === item.href;

    return (
      <li className="relative group">
        {item.sub ? (
          <div
            onClick={() => toggleDropdown(item.name)}
            className={`flex items-center justify-between p-2 rounded-lg cursor-pointer transition-colors ${
              isOpen ? "bg-white bg-opacity-20" : "hover:bg-white hover:bg-opacity-10"
            }`}
          >
            <div className="flex items-center space-x-3">
              <item.icon size={20} className="text-yellow-300" />
              <span className="text-sm font-medium">{item.name}</span>
            </div>
            {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </div>
        ) : (
          <Link
            href={item.href}
            className={`flex items-center p-2 rounded-lg space-x-3 transition-colors ${
              isActive ? "bg-white bg-opacity-25" : "hover:bg-white hover:bg-opacity-10"
            }`}
          >
            <item.icon size={20} className="text-yellow-300" />
            <span className="text-sm font-medium">{item.name}</span>
          </Link>
        )}

        {/* Smooth submenu animation */}
        <AnimatePresence>
          {item.sub && isOpen && (
            <motion.ul
              initial={{ opacity: 0, height: 0, y: -5 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -5 }}
              transition={{ duration: 0.2 }}
              className="ml-6 mt-1 space-y-1 text-sm text-gray-100"
            >
              {item.sub.map((subItem, index) => (
                <li key={index}>
                  <Link
                    href={subItem.href}
                    className={`block p-2 rounded-md transition-colors hover:bg-white hover:bg-opacity-10 ${
                      url === subItem.href ? "bg-white bg-opacity-20" : ""
                    }`}
                  >
                    {subItem.name}
                  </Link>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </li>
    );
  };

  const SidebarContent = () => (
    <div className="flex flex-col w-64 bg-gradient-to-b from-indigo-600 to-blue-500 text-white min-h-screen shadow-lg">
      <div className="flex items-center justify-center p-4">
        <h2 className="text-lg font-bold tracking-wide">Admin Panel</h2>
      </div>

      <ul className="flex-1 overflow-y-auto p-2 space-y-1">
        {menuItems.map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </ul>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <SidebarContent />
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex"
          >
            <div
              className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            ></div>

            <div className="relative w-64">
              <SidebarContent />
              <button
                onClick={() => setMobileOpen(false)}
                className="absolute top-4 right-4 text-white"
              >
                <X size={24} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
