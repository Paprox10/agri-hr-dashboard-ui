
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  LayoutDashboard, 
  Users, 
  Clock, 
  CalendarDays, 
  FileText, 
  ChevronLeft, 
  ChevronRight, 
  LogOut,
  ChartBar, 
  ClipboardList 
} from "lucide-react";

interface SidebarProps {
  className?: string;
  collapsed?: boolean;
  toggleSidebar?: () => void;
}

const Sidebar = ({ className, collapsed = false, toggleSidebar }: SidebarProps) => {
  const menuItems = [
    { name: "Dashboard", icon: <LayoutDashboard size={20} />, path: "/" },
    { name: "Employee Management", icon: <Users size={20} />, path: "/employees" },
    { name: "Attendance", icon: <Clock size={20} />, path: "/attendance" },
    { name: "Leave Management", icon: <CalendarDays size={20} />, path: "/leave" },
    { name: "Evaluation", icon: <FileText size={20} />, path: "/evaluation" },
    { name: "Payroll", icon: <ChartBar size={20} />, path: "/payroll" },
    { name: "Reports", icon: <ClipboardList size={20} />, path: "/reports" },
  ];

  return (
    <div
      className={cn(
        "flex flex-col h-screen bg-cfarbempco-green-dark text-white transition-all duration-300 border-r border-r-cfarbempco-green-light",
        collapsed ? "w-[70px]" : "w-[250px]",
        className
      )}
    >
      <div className="flex items-center justify-between p-4 border-b border-cfarbempco-green-light">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
              <span className="text-cfarbempco-green-dark font-bold text-lg">CF</span>
            </div>
            <span className="font-semibold">CFARBEMPCO HRIS</span>
          </div>
        )}
        {collapsed && (
          <div className="w-10 h-10 mx-auto bg-white rounded-md flex items-center justify-center">
            <span className="text-cfarbempco-green-dark font-bold text-lg">CF</span>
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className={cn(
            "text-white hover:bg-cfarbempco-green hover:text-white",
            collapsed && "mx-auto mt-2"
          )}
        >
          {collapsed ? (
            <ChevronRight size={18} />
          ) : (
            <ChevronLeft size={18} />
          )}
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto py-4">
        <nav className="px-2 space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "flex items-center text-sm px-3 py-2.5 rounded-md hover:bg-cfarbempco-green transition-colors",
                "hover:text-white group",
                window.location.pathname === item.path
                  ? "bg-cfarbempco-green text-white"
                  : "text-white/80"
              )}
            >
              <div className="flex items-center">
                <span className="mr-3">{item.icon}</span>
                {!collapsed && <span>{item.name}</span>}
              </div>
              {collapsed && (
                <div className="absolute left-full ml-2 rounded-md bg-cfarbempco-green-dark shadow-md px-2 py-1 text-white text-sm invisible opacity-0 -translate-x-3 group-hover:visible group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 z-50 whitespace-nowrap">
                  {item.name}
                </div>
              )}
            </Link>
          ))}
        </nav>
      </div>

      <div className="border-t border-cfarbempco-green-light p-4">
        <Button
          variant="ghost"
          className={cn(
            "flex items-center justify-start gap-3 text-sm w-full text-white/80 hover:bg-cfarbempco-green hover:text-white",
            collapsed && "justify-center"
          )}
        >
          <LogOut size={20} />
          {!collapsed && <span>Log out</span>}
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
