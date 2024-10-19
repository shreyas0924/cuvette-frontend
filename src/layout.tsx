import React from "react";
import Navbar from "./components/navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col mx-10 ">
      <Navbar />
      <main className="grid grid-cols-2 p-6">{children}</main>
    </div>
  );
};

export default Layout;
