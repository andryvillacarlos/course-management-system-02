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

      {/* Main Area */}
      <div className="flex flex-col flex-1 min-h-0">
        {/* Top Bar */}
        <TopBar setMobileOpen={setMobileOpen} />

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="p-6 pb-20">{children}</div>
        </main>

        {/* Toast Notifications */}
        <Toaster position="bottom-right" richColors duration={3000} />
      </div>
    </div>
  );
};

export default MainAdminLayout;
