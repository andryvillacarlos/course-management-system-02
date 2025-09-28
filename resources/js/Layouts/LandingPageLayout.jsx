import React from "react";
import LandingPageNav from "@/Components/Landing/LandingPageNav";
import LandingPageFooter from "@/Components/Landing/LandingPageFooter";

const LandingPageLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <LandingPageNav />

      {/* Main content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <LandingPageFooter />
    </div>
  );
};

export default LandingPageLayout;
