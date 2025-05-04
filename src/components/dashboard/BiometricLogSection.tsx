
import { useState, useEffect } from "react";
import { Check, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";

interface BiometricLog {
  id: number;
  name: string;
  position: string;
  department: string;
  logType: "in" | "out";
  timestamp: string;
  status: "success" | "error";
}

const BiometricLogSection = () => {
  const [recentLogs, setRecentLogs] = useState<BiometricLog[]>([]);
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);
  const [currentLog, setCurrentLog] = useState<BiometricLog | null>(null);
  const { toast } = useToast();

  // Mock data for demonstration
  const mockLogs: BiometricLog[] = [
    {
      id: 1,
      name: "Juan Dela Cruz",
      position: "Field Supervisor",
      department: "Field Operations",
      logType: "in",
      timestamp: "8:00 AM",
      status: "success",
    },
    {
      id: 2,
      name: "Maria Santos",
      position: "Office Assistant",
      department: "Administration",
      logType: "in",
      timestamp: "8:15 AM",
      status: "success",
    },
    {
      id: 3,
      name: "Pedro Reyes",
      position: "Packing Specialist",
      department: "Packing",
      logType: "out",
      timestamp: "5:00 PM",
      status: "success",
    },
    {
      id: 4,
      name: "Elena Gomez",
      position: "HR Assistant",
      department: "Human Resources",
      logType: "in",
      timestamp: "8:45 AM",
      status: "success",
    },
    {
      id: 5,
      name: "Antonio Lim",
      position: "Coordinator",
      department: "Field Operations",
      logType: "out",
      timestamp: "5:05 PM",
      status: "success",
    },
  ];

  // Simulates fingerprint scanning and logging
  const simulateBiometricScan = () => {
    // Randomly select a log from mock data
    const randomIndex = Math.floor(Math.random() * mockLogs.length);
    const log = mockLogs[randomIndex];
    
    setCurrentLog(log);
    setShowConfirmation(true);
    
    // Add to recent logs
    setRecentLogs((prevLogs) => {
      const newLogs = [log, ...prevLogs].slice(0, 5);
      return newLogs;
    });

    // Show a toast notification
    toast({
      title: log.logType === "in" ? "Successfully Logged In" : "Successfully Logged Out",
      description: `${log.name} (${log.position}) at ${log.timestamp}`,
      duration: 3000,
    });

    // Hide confirmation after 3 seconds
    setTimeout(() => {
      setShowConfirmation(false);
      setCurrentLog(null);
    }, 3000);
  };

  // Load initial logs
  useEffect(() => {
    setRecentLogs(mockLogs.slice(0, 5));
  }, []);

  return (
    <div className="space-y-4">
      {/* Biometric scan simulation button */}
      <div className="flex justify-center mb-4">
        <button
          onClick={simulateBiometricScan}
          className="bg-cfarbempco-green text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-cfarbempco-green-dark transition-colors"
        >
          Simulate Fingerprint Scan
        </button>
      </div>

      {/* Confirmation message */}
      {showConfirmation && currentLog && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4 animate-fade-in">
          <div className="flex items-center gap-3">
            <div className="bg-green-100 p-2 rounded-full">
              {currentLog.logType === "in" ? (
                <Check className="h-5 w-5 text-green-600" />
              ) : (
                <LogOut className="h-5 w-5 text-green-600" />
              )}
            </div>
            <div>
              <h3 className="font-medium text-green-800">
                {currentLog.logType === "in"
                  ? "You have successfully logged in"
                  : "You have successfully logged out"}
              </h3>
              <p className="text-sm text-green-600">
                {currentLog.name} • {currentLog.timestamp}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Recent logs section */}
      <h3 className="font-medium text-gray-700">Last 5 Biometric Logs</h3>
      <div className="space-y-3">
        {recentLogs.map((log) => (
          <div
            key={`${log.id}-${log.timestamp}`}
            className="flex items-center justify-between bg-white p-3 rounded-lg border"
          >
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src="" />
                <AvatarFallback className="bg-cfarbempco-green-light text-white">
                  {log.name.split(" ").map((n) => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{log.name}</p>
                <div className="text-sm text-gray-500 flex gap-2">
                  <span>{log.position}</span>
                  <span>•</span>
                  <span>{log.department}</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <div
                className={`text-sm font-medium ${
                  log.logType === "in" ? "text-green-600" : "text-blue-600"
                }`}
              >
                {log.logType === "in" ? "Log In" : "Log Out"}
              </div>
              <div className="text-xs text-gray-500">{log.timestamp}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BiometricLogSection;
