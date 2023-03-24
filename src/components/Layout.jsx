import React, { useState } from "react";
import { Header, Sidebar } from ".";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  console.log("isSidebarOpen", isSidebarOpen);
  return (
    <section>
      {/* Header */}
      <Header setIsSidebarOpen={setIsSidebarOpen} />

      {/* Sidebar and contents */}
      <div className="flex">
        {/* Sidebar on large screen */}
        <div className="fixed top-[70px] left-0 w-[240px] bg-gray-100 bottom-0 hidden lg:inline z-0">
          <Sidebar />
        </div>

        {/* Sidebar on small screen */}
        <div
          className={`fixed top-[70px] ${
            isSidebarOpen ? "left-0" : "left-[-999px]"
          } w-[240px] bg-gray-100 bottom-0  lg:hidden duration-700 ease-linear`}
        >
          <Sidebar title={true} />
        </div>

        <Outlet />
      </div>
    </section>
  );
};

export default Layout;
