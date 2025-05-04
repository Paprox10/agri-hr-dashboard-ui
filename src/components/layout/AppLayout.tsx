
import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { cn } from "@/lib/utils";

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const [isSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <main
          className={cn(
            "flex-1 overflow-y-auto p-6",
            isSidebarOpen ? "lg:ml-0" : "lg:ml-0"
          )}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
