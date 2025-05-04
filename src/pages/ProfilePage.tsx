
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import AppLayout from "@/components/layout/AppLayout";
import { CalendarDays, Edit, UserRound, FileText, Shield, Users } from "lucide-react";

const ProfilePage = () => {
  // This could be fetched from a real backend
  const [userRole, setUserRole] = useState("employee"); // Options: "employee", "supervisor", "hr"
  
  // For demonstration purposes, let's switch between different roles
  const toggleRole = () => {
    if (userRole === "employee") setUserRole("supervisor");
    else if (userRole === "supervisor") setUserRole("hr");
    else setUserRole("employee");
  };

  return (
    <AppLayout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <h1 className="text-2xl font-bold tracking-tight">User Profile</h1>
          <div className="flex items-center gap-2">
            <Badge 
              variant="outline" 
              className={`cursor-pointer ${
                userRole === "hr" ? "border-red-500 text-red-500" :
                userRole === "supervisor" ? "border-blue-500 text-blue-500" :
                "border-green-500 text-green-500"
              }`}
              onClick={toggleRole}
            >
              {userRole === "hr" ? "HR Admin" :
               userRole === "supervisor" ? "Supervisor" :
               "Employee"}
            </Badge>
            <Button size="sm" variant="outline" className="flex items-center gap-2">
              <Edit className="h-4 w-4" />
              Edit Profile
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Column - User Info Card */}
          <Card className="md:col-span-1">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center text-center pb-6">
              <Avatar className="h-24 w-24 mb-4">
                <AvatarImage src="" alt="User avatar" />
                <AvatarFallback className="bg-cfarbempco-green text-white text-xl">
                  JD
                </AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p className="text-gray-500 mb-2">john.doe@cfarbempco.com</p>
              
              <div className="flex items-center gap-1 mb-4">
                <Badge className="bg-cfarbempco-green hover:bg-cfarbempco-green-dark">Active</Badge>
              </div>
              
              <div className="w-full space-y-4 mt-4 text-left">
                <div>
                  <p className="text-sm font-medium text-gray-500">Employee ID</p>
                  <p>EMP-2023-0042</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Department</p>
                  <p>Field Operations</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Position</p>
                  <p>Field Coordinator</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Join Date</p>
                  <p>March 15, 2023</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Contact Number</p>
                  <p>+63 912 345 6789</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Right Column - Additional Data Tabs */}
          <Card className="md:col-span-2">
            <CardHeader className="pb-2">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid grid-cols-3">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="attendance">Attendance</TabsTrigger>
                  <TabsTrigger value="evaluation">Evaluation</TabsTrigger>
                </TabsList>

                {/* Overview Tab */}
                <TabsContent value="overview" className="mt-4">
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Stats cards */}
                      <Card>
                        <CardHeader className="pb-2">
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-sm font-medium">Leave Balance</CardTitle>
                            <CalendarDays className="h-4 w-4 text-muted-foreground" />
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">15 days</div>
                          <p className="text-xs text-muted-foreground">Annual leave remaining</p>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader className="pb-2">
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-sm font-medium">Performance</CardTitle>
                            <FileText className="h-4 w-4 text-muted-foreground" />
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">92%</div>
                          <p className="text-xs text-muted-foreground">Last evaluation score</p>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Role-specific content */}
                    {userRole === "employee" && (
                      <div>
                        <h3 className="text-lg font-medium">Recent Attendance</h3>
                        <div className="mt-2 rounded-md border">
                          <div className="p-3 flex justify-between items-center border-b">
                            <div>
                              <p className="font-medium">Today</p>
                              <p className="text-sm text-muted-foreground">Logged in: 8:03 AM</p>
                            </div>
                            <Badge variant="outline" className="text-green-500 border-green-500">On Time</Badge>
                          </div>
                          <div className="p-3 flex justify-between items-center border-b">
                            <div>
                              <p className="font-medium">Yesterday</p>
                              <p className="text-sm text-muted-foreground">Logged in: 7:58 AM</p>
                            </div>
                            <Badge variant="outline" className="text-green-500 border-green-500">On Time</Badge>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {userRole === "supervisor" && (
                      <div>
                        <h3 className="text-lg font-medium">Team Overview</h3>
                        <div className="mt-2 rounded-md border">
                          <div className="p-3 flex justify-between items-center border-b">
                            <div className="flex items-center gap-3">
                              <Users className="h-5 w-5 text-muted-foreground" />
                              <div>
                                <p className="font-medium">Team Members</p>
                                <p className="text-sm text-muted-foreground">12 active employees</p>
                              </div>
                            </div>
                            <Button size="sm" variant="ghost">View Team</Button>
                          </div>
                          <div className="p-3 flex justify-between items-center">
                            <div className="flex items-center gap-3">
                              <FileText className="h-5 w-5 text-muted-foreground" />
                              <div>
                                <p className="font-medium">Pending Approvals</p>
                                <p className="text-sm text-muted-foreground">3 leave requests</p>
                              </div>
                            </div>
                            <Button size="sm" variant="ghost">View Requests</Button>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {userRole === "hr" && (
                      <div>
                        <h3 className="text-lg font-medium">HR Dashboard</h3>
                        <div className="mt-2 rounded-md border">
                          <div className="p-3 flex justify-between items-center border-b">
                            <div className="flex items-center gap-3">
                              <Shield className="h-5 w-5 text-muted-foreground" />
                              <div>
                                <p className="font-medium">System Access</p>
                                <p className="text-sm text-muted-foreground">Full administrative rights</p>
                              </div>
                            </div>
                            <Badge className="bg-cfarbempco-green">Admin</Badge>
                          </div>
                          <div className="p-3 flex justify-between items-center">
                            <div className="flex items-center gap-3">
                              <UserRound className="h-5 w-5 text-muted-foreground" />
                              <div>
                                <p className="font-medium">Employee Records</p>
                                <p className="text-sm text-muted-foreground">Manage all employee data</p>
                              </div>
                            </div>
                            <Button size="sm" variant="ghost">Access Records</Button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </TabsContent>

                {/* Attendance Tab */}
                <TabsContent value="attendance" className="mt-4">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-medium">Attendance History</h3>
                      <Button size="sm" variant="outline">Download Report</Button>
                    </div>
                    
                    <div className="rounded-md border">
                      <div className="p-3 flex justify-between items-center border-b bg-muted/50">
                        <p className="font-medium">Date</p>
                        <p className="font-medium">Time In</p>
                        <p className="font-medium">Time Out</p>
                        <p className="font-medium">Status</p>
                      </div>
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="p-3 flex justify-between items-center border-b">
                          <p>May {i+1}, 2025</p>
                          <p>8:0{i} AM</p>
                          <p>5:0{i} PM</p>
                          <Badge 
                            variant="outline" 
                            className={i % 3 === 0 ? 
                              "text-amber-500 border-amber-500" : 
                              "text-green-500 border-green-500"}
                          >
                            {i % 3 === 0 ? "Late" : "On Time"}
                          </Badge>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex justify-center">
                      <Button variant="outline">Load More</Button>
                    </div>
                  </div>
                </TabsContent>

                {/* Evaluation Tab */}
                <TabsContent value="evaluation" className="mt-4">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-medium">Performance Evaluations</h3>
                      {userRole === "hr" && (
                        <Button size="sm" variant="outline">Add Evaluation</Button>
                      )}
                    </div>
                    
                    <div className="rounded-md border">
                      <div className="p-4 border-b">
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="font-medium">Q1 2025 Performance Review</h4>
                            <p className="text-sm text-muted-foreground">Completed on April 15, 2025</p>
                          </div>
                          <Badge className="bg-green-500">92%</Badge>
                        </div>
                        <Separator className="my-4" />
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm font-medium text-muted-foreground">Evaluator</p>
                            <p>Jane Smith (Supervisor)</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-muted-foreground">Rating</p>
                            <p>Exceeds Expectations</p>
                          </div>
                        </div>
                        <div className="mt-4">
                          <p className="text-sm font-medium text-muted-foreground">Comments</p>
                          <p className="text-sm mt-1">
                            John has consistently demonstrated excellent performance in his role. 
                            His attention to detail and proactive approach have significantly improved 
                            field operations efficiency.
                          </p>
                        </div>
                      </div>
                      
                      <div className="p-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="font-medium">Q4 2024 Performance Review</h4>
                            <p className="text-sm text-muted-foreground">Completed on January 10, 2025</p>
                          </div>
                          <Badge className="bg-green-500">88%</Badge>
                        </div>
                        <Separator className="my-4" />
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm font-medium text-muted-foreground">Evaluator</p>
                            <p>Jane Smith (Supervisor)</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-muted-foreground">Rating</p>
                            <p>Meets Expectations</p>
                          </div>
                        </div>
                        <div className="mt-4">
                          <p className="text-sm font-medium text-muted-foreground">Comments</p>
                          <p className="text-sm mt-1">
                            John has shown good progress in his role. He consistently completes 
                            his tasks on time and has improved communication with team members.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardHeader>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
};

export default ProfilePage;
