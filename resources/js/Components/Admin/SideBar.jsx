import { useEffect } from "react";
import { Link, usePage, useRemember } from "@inertiajs/react";
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
  const [activeDropdowns, setActiveDropdowns] = useRemember([], "sidebar-dropdowns");
  const [rememberedMobileOpen, setRememberedMobileOpen] = useRemember(false, "mobile-sidebar");
  const { url } = usePage();

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  useEffect(() => {
    if (isMobile) setMobileOpen(rememberedMobileOpen);
  }, [rememberedMobileOpen]);

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
        { name: "Student", href: "/admin/student-list" },
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
            className="flex items-center justify-between p-2 rounded-lg cursor-pointer select-none"
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
            preserveScroll
            preserveState
            className={`flex items-center p-2 rounded-lg space-x-3 transition-all duration-200 ${
              isActive
                ? "bg-white bg-opacity-25"
                : "hover:bg-white hover:bg-opacity-10"
            }`}
          >
            <item.icon size={20} className="text-yellow-300" />
            <span className="text-sm font-medium">{item.name}</span>
          </Link>
        )}

        {/* ✅ Smooth dropdown with framer-motion */}
        <AnimatePresence initial={false}>
          {item.sub && isOpen && (
            <motion.ul
              key={item.name}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="ml-6 mt-1 space-y-1 text-sm text-gray-100 overflow-hidden"
            >
              {item.sub.map((subItem, index) => (
                <li key={index}>
                  <Link
                    href={subItem.href}
                    preserveScroll
                    preserveState
                    onClick={(e) => {
                      e.stopPropagation(); // keep dropdown open
                      setActiveDropdowns((prev) => [...new Set([...prev, item.name])]);
                    }}
                    className={`block p-2 rounded-md hover:bg-white hover:bg-opacity-10 transition ${
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

      {/* ✅ Mobile Sidebar with framer-motion slide animation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobileSidebar"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex md:hidden"
          >
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => {
                setMobileOpen(false);
                setRememberedMobileOpen(false);
              }}
            ></motion.div>

            <div className="relative w-64">
              <SidebarContent />
              <button
                onClick={() => {
                  setMobileOpen(false);
                  setRememberedMobileOpen(false);
                }}
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
