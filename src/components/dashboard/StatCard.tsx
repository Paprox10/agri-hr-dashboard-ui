
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  change?: {
    value: string;
    positive: boolean;
  };
  className?: string;
  iconClassName?: string;
}

const StatCard = ({ title, value, icon: Icon, change, className, iconClassName }: StatCardProps) => {
  return (
    <div className={cn("bg-white p-6 rounded-lg shadow-sm border", className)}>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <h3 className="text-2xl font-semibold mt-2">{value}</h3>
          {change && (
            <p
              className={cn(
                "text-xs font-medium mt-1",
                change.positive ? "text-green-500" : "text-red-500"
              )}
            >
              {change.positive ? "↑" : "↓"} {change.value}{" "}
              <span className="text-gray-500">vs. last month</span>
            </p>
          )}
        </div>
        <div
          className={cn(
            "p-3 rounded-full bg-cfarbempco-green-lightest",
            iconClassName
          )}
        >
          <Icon className="h-5 w-5 text-cfarbempco-green" />
        </div>
      </div>
    </div>
  );
};

export default StatCard;
