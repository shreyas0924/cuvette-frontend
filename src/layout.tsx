import React from "react";
import Navbar from "./components/navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col w-full ">
      <Navbar />
      <main className="p-6 w-full">{children}</main>
    </div>
  );
};

export default Layout;
