
import { useState } from "react";
import AppLayout from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Search, 
  Filter, 
  Download, 
  CalendarIcon,
  Clock 
} from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

interface AttendanceRecord {
  id: number;
  name: string;
  position: string;
  date: string;
  timeIn: string;
  timeOut: string;
  status: "Present" | "Late" | "Absent" | "";
}

// Sample data
const generateAttendanceData = (area: string): AttendanceRecord[] => {
  const baseData: AttendanceRecord[] = [
    {
      id: 1,
      name: "Juan Dela Cruz",
      position: `${area} Supervisor`,
      date: "2025-05-04",
      timeIn: "08:00 AM",
      timeOut: "05:00 PM",
      status: "Present",
    },
    {
      id: 2,
      name: "Maria Santos",
      position: `${area} Assistant`,
      date: "2025-05-04",
      timeIn: "08:15 AM",
      timeOut: "05:05 PM",
      status: "Present",
    },
    {
      id: 3,
      name: "Pedro Reyes",
      position: `${area} Specialist`,
      date: "2025-05-04",
      timeIn: "08:45 AM",
      timeOut: "05:30 PM",
      status: "Late",
    },
    {
      id: 4,
      name: "Elena Gomez",
      position: `${area} Staff`,
      date: "2025-05-04",
      timeIn: "",
      timeOut: "",
      status: "Absent",
    },
    {
      id: 5,
      name: "Antonio Lim",
      position: `${area} Coordinator`,
      date: "2025-05-04",
      timeIn: "07:55 AM",
      timeOut: "04:55 PM",
      status: "Present",
    },
  ];

  return baseData;
};

const packingAreaData = generateAttendanceData("Packing");
const fieldAreaData = generateAttendanceData("Field");
const officeData = generateAttendanceData("Office");

const AttendanceTable = ({ data }: { data: AttendanceRecord[] }) => {
  return (
    <div className="rounded-md border">
      <div className="relative w-full overflow-auto">
        <table className="w-full caption-bottom text-sm">
          <thead className="[&_tr]:border-b bg-gray-50">
            <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Employee</th>
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Date</th>
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Time In</th>
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Time Out</th>
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Status</th>
            </tr>
          </thead>
          <tbody className="[&_tr:last-child]:border-0">
            {data.map((record) => (
              <tr
                key={record.id}
                className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
              >
                <td className="p-4 align-middle">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-9 w-9">
                      <AvatarImage src="" />
                      <AvatarFallback className="bg-cfarbempco-green-light text-white">
                        {record.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div>{record.name}</div>
                      <div className="text-sm text-gray-500">{record.position}</div>
                    </div>
                  </div>
                </td>
                <td className="p-4 align-middle">{format(new Date(record.date), "MMM dd, yyyy")}</td>
                <td className="p-4 align-middle">
                  {record.timeIn || <span className="text-gray-400">--:--</span>}
                </td>
                <td className="p-4 align-middle">
                  {record.timeOut || <span className="text-gray-400">--:--</span>}
                </td>
                <td className="p-4 align-middle">
                  <div className="flex items-center gap-2">
                    <div
                      className={`h-2 w-2 rounded-full ${
                        record.status === "Present"
                          ? "bg-green-500"
                          : record.status === "Late"
                          ? "bg-yellow-500"
                          : "bg-red-500"
                      }`}
                    />
                    <span>{record.status}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const AttendancePage = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Attendance</h1>
            <p className="text-gray-500">Track and monitor employee attendance across departments</p>
          </div>

          <div className="flex items-center gap-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="justify-start">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "MMM dd, yyyy") : <span>Select date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="end">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                  className="pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
            
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
            
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader className="pb-3">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <CardTitle className="flex items-center">
                  <Clock className="mr-2 h-5 w-5 text-cfarbempco-green" />
                  Attendance Records
                </CardTitle>
                <CardDescription>
                  View and manage biometric attendance records by area
                </CardDescription>
              </div>

              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  placeholder="Search attendance records..."
                  className="pl-8 bg-white border-gray-200 focus-visible:ring-cfarbempco-green w-full max-w-sm"
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="packing-area">
              <TabsList className="grid grid-cols-3 mb-4">
                <TabsTrigger value="packing-area">Packing Area</TabsTrigger>
                <TabsTrigger value="field-area">Field Area</TabsTrigger>
                <TabsTrigger value="office">Office Staff</TabsTrigger>
              </TabsList>
              
              <TabsContent value="packing-area">
                <h3 className="font-semibold mb-4">Packing Area Attendance</h3>
                <AttendanceTable data={packingAreaData} />
              </TabsContent>
              
              <TabsContent value="field-area">
                <h3 className="font-semibold mb-4">Field Area Attendance</h3>
                <AttendanceTable data={fieldAreaData} />
              </TabsContent>
              
              <TabsContent value="office">
                <h3 className="font-semibold mb-4">Office Staff Attendance</h3>
                <AttendanceTable data={officeData} />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default AttendancePage;
