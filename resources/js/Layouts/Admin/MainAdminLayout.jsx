import React, { useState } from "react";
import AdminSidebar from "@/Components/Admin/SideBar";
import TopBar from "@/Components/Admin/TopBar";
import { Toaster } from "sonner";
const MainAdminLayout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Sidebar */}
      <AdminSidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <div className="flex-shrink-0">
          <TopBar setMobileOpen={setMobileOpen} />
        </div>

        {/* Scrollable Page Content */}
        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
        <Toaster position="left-bottom" richColors/>
      </div>
    </div>
  );
};

export default MainAdminLayout;