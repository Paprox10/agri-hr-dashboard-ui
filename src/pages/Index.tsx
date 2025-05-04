
import { Users, UserCheck, CalendarDays, Clock, ChevronRight } from "lucide-react";
import AppLayout from "@/components/layout/AppLayout";
import StatCard from "@/components/dashboard/StatCard";
import AttendanceChart from "@/components/charts/AttendanceChart";
import TenureChart from "@/components/charts/TenureChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

const employeesList = [
  { id: 1, name: "Juan Dela Cruz", position: "Field Supervisor", status: "Present" },
  { id: 2, name: "Maria Santos", position: "Office Assistant", status: "Late" },
  { id: 3, name: "Pedro Reyes", position: "Packing Specialist", status: "Present" },
  { id: 4, name: "Elena Gomez", position: "HR Assistant", status: "Absent" },
];

const Index = () => {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-gray-500">Welcome to CFARBEMPCO Human Resource Information System</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Employees"
            value="52"
            icon={Users}
            change={{ value: "3.2%", positive: true }}
          />
          <StatCard
            title="Active Today"
            value="45"
            icon={UserCheck}
            change={{ value: "1.1%", positive: true }}
          />
          <StatCard
            title="On Leave"
            value="3"
            icon={CalendarDays}
            change={{ value: "0.8%", positive: false }}
          />
          <StatCard
            title="Attendance Rate"
            value="96.4%"
            icon={Clock}
            change={{ value: "2.3%", positive: true }}
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Weekly Attendance</CardTitle>
                <Link to="/attendance">
                  <Button variant="link" className="text-cfarbempco-green font-medium">
                    View All <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <AttendanceChart />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Employee Tenure</CardTitle>
                <Link to="/employees">
                  <Button variant="link" className="text-cfarbempco-green font-medium">
                    View All <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <TenureChart />
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Today's Attendance Overview</CardTitle>
              <Link to="/attendance">
                <Button variant="link" className="text-cfarbempco-green font-medium">
                  View All <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <div className="relative w-full overflow-auto">
                <table className="w-full caption-bottom text-sm">
                  <thead className="[&_tr]:border-b bg-gray-50">
                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Employee</th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Position</th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Status</th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Time In</th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Time Out</th>
                    </tr>
                  </thead>
                  <tbody className="[&_tr:last-child]:border-0">
                    {employeesList.map((employee) => (
                      <tr
                        key={employee.id}
                        className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                      >
                        <td className="p-4 align-middle">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-9 w-9">
                              <AvatarImage src="" />
                              <AvatarFallback className="bg-cfarbempco-green-light text-white">
                                {employee.name.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            <span>{employee.name}</span>
                          </div>
                        </td>
                        <td className="p-4 align-middle">{employee.position}</td>
                        <td className="p-4 align-middle">
                          <div className="flex items-center gap-2">
                            <div
                              className={`h-2 w-2 rounded-full ${
                                employee.status === "Present"
                                  ? "bg-green-500"
                                  : employee.status === "Late"
                                  ? "bg-yellow-500"
                                  : "bg-red-500"
                              }`}
                            />
                            <span>{employee.status}</span>
                          </div>
                        </td>
                        <td className="p-4 align-middle">
                          {employee.status !== "Absent" ? (
                            employee.status === "Late" ? "9:15 AM" : "8:45 AM"
                          ) : (
                            <span className="text-gray-400">--:--</span>
                          )}
                        </td>
                        <td className="p-4 align-middle">
                          {employee.status !== "Absent" ? (
                            "5:00 PM"
                          ) : (
                            <span className="text-gray-400">--:--</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default Index;
