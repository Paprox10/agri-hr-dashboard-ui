
import AppLayout from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Search, 
  Plus, 
  Download, 
  MoreHorizontal, 
  FileEdit, 
  Trash2, 
  Eye 
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useIsMobile } from "@/hooks/use-mobile";

const employeesData = [
  {
    id: 1,
    name: "Juan Dela Cruz",
    position: "Field Supervisor",
    department: "Operations",
    status: "Active",
    email: "juan.delacruz@example.com",
    joinDate: "Jun 12, 2019",
  },
  {
    id: 2,
    name: "Maria Santos",
    position: "Office Assistant",
    department: "Admin",
    status: "Active",
    email: "maria.santos@example.com",
    joinDate: "Aug 23, 2020",
  },
  {
    id: 3,
    name: "Pedro Reyes",
    position: "Packing Specialist",
    department: "Operations",
    status: "Active",
    email: "pedro.reyes@example.com",
    joinDate: "Mar 15, 2018",
  },
  {
    id: 4,
    name: "Elena Gomez",
    position: "HR Assistant",
    department: "Human Resources",
    status: "On Leave",
    email: "elena.gomez@example.com",
    joinDate: "Jan 5, 2021",
  },
  {
    id: 5,
    name: "Antonio Lim",
    position: "Accounting Staff",
    department: "Finance",
    status: "Active",
    email: "antonio.lim@example.com",
    joinDate: "Nov 10, 2019",
  },
  {
    id: 6,
    name: "Sofia Garcia",
    position: "Field Worker",
    department: "Operations",
    status: "Inactive",
    email: "sofia.garcia@example.com",
    joinDate: "Apr 18, 2022",
  },
];

const EmployeesPage = () => {
  const isMobile = useIsMobile();
  
  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Employee Management</h1>
            <p className="text-gray-500">Manage employee information and details</p>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-cfarbempco-green hover:bg-cfarbempco-green-dark">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Employee
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Add New Employee</DialogTitle>
                  <DialogDescription>
                    Enter the employee information. Required fields are marked with an asterisk (*).
                  </DialogDescription>
                </DialogHeader>
                <Tabs defaultValue="personal">
                  <TabsList className="grid grid-cols-3 mb-4">
                    <TabsTrigger value="personal">Personal Info</TabsTrigger>
                    <TabsTrigger value="employment">Employment</TabsTrigger>
                    <TabsTrigger value="documents">Documents</TabsTrigger>
                  </TabsList>
                  <TabsContent value="personal" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" type="email" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input id="phone" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="dob">Date of Birth *</Label>
                        <Input id="dob" type="date" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="gender">Gender</Label>
                        <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                          <option value="">Select Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Input id="address" />
                    </div>
                  </TabsContent>
                  <TabsContent value="employment" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="employeeId">Employee ID *</Label>
                        <Input id="employeeId" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="department">Department *</Label>
                        <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                          <option value="">Select Department</option>
                          <option value="operations">Operations</option>
                          <option value="admin">Admin</option>
                          <option value="hr">Human Resources</option>
                          <option value="finance">Finance</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="position">Position *</Label>
                        <Input id="position" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="joinDate">Join Date *</Label>
                        <Input id="joinDate" type="date" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="employmentType">Employment Type *</Label>
                        <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                          <option value="">Select Type</option>
                          <option value="fulltime">Full-time</option>
                          <option value="parttime">Part-time</option>
                          <option value="contract">Contract</option>
                          <option value="seasonal">Seasonal</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="status">Status *</Label>
                        <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                          <option value="">Select Status</option>
                          <option value="active">Active</option>
                          <option value="onleave">On Leave</option>
                          <option value="inactive">Inactive</option>
                        </select>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="documents" className="space-y-4">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="profilePicture">Profile Picture</Label>
                        <Input id="profilePicture" type="file" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="resume">Resume/CV</Label>
                        <Input id="resume" type="file" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="idCard">ID Card</Label>
                        <Input id="idCard" type="file" />
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
                <DialogFooter className="mt-4">
                  <Button variant="outline" type="button">
                    Cancel
                  </Button>
                  <Button className="bg-cfarbempco-green hover:bg-cfarbempco-green-dark">Save Employee</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <Card>
          <CardHeader className="pb-3">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <CardTitle>Employees</CardTitle>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  placeholder="Search employees..."
                  className="pl-8 bg-white border-gray-200 focus-visible:ring-cfarbempco-green w-full max-w-sm"
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead>Name</TableHead>
                    {!isMobile && <TableHead>Position</TableHead>}
                    <TableHead>Department</TableHead>
                    {!isMobile && <TableHead>Status</TableHead>}
                    {!isMobile && <TableHead>Join Date</TableHead>}
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {employeesData.map((employee) => (
                    <TableRow key={employee.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-9 w-9">
                            <AvatarImage src="" />
                            <AvatarFallback className="bg-cfarbempco-green-light text-white">
                              {employee.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{employee.name}</p>
                            {isMobile && <p className="text-xs text-gray-500">{employee.position}</p>}
                          </div>
                        </div>
                      </TableCell>
                      {!isMobile && <TableCell>{employee.position}</TableCell>}
                      <TableCell>{employee.department}</TableCell>
                      {!isMobile && (
                        <TableCell>
                          <span
                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                              employee.status === "Active"
                                ? "bg-green-100 text-green-800"
                                : employee.status === "On Leave"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-gray-100 text-gray-800"
                            }`}
                          >
                            {employee.status}
                          </span>
                        </TableCell>
                      )}
                      {!isMobile && <TableCell>{employee.joinDate}</TableCell>}
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Eye className="mr-2 h-4 w-4" />
                              View
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <FileEdit className="mr-2 h-4 w-4" />
                              Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">
                              <Trash2 className="mr-2 h-4 w-4" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default EmployeesPage;
