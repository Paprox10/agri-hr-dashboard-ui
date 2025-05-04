
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
  ChartBar,
  Calendar,
  FileText,
  Eye
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { useState } from "react";

const payrollData = [
  {
    id: 1,
    employee: "Juan Dela Cruz",
    position: "Field Supervisor",
    payPeriod: "May 1-15, 2025",
    basicSalary: 15000,
    overtime: 1200,
    deductions: 1850,
    netPay: 14350,
  },
  {
    id: 2,
    employee: "Maria Santos",
    position: "Office Assistant",
    payPeriod: "May 1-15, 2025",
    basicSalary: 12000,
    overtime: 0,
    deductions: 1450,
    netPay: 10550,
  },
  {
    id: 3,
    employee: "Pedro Reyes",
    position: "Packing Specialist",
    payPeriod: "May 1-15, 2025",
    basicSalary: 13500,
    overtime: 800,
    deductions: 1620,
    netPay: 12680,
  },
  {
    id: 4,
    employee: "Elena Gomez",
    position: "HR Assistant",
    payPeriod: "May 1-15, 2025",
    basicSalary: 14000,
    overtime: 0,
    deductions: 1680,
    netPay: 12320,
  },
  {
    id: 5,
    employee: "Antonio Lim",
    position: "Accounting Staff",
    payPeriod: "May 1-15, 2025",
    basicSalary: 14500,
    overtime: 950,
    deductions: 1740,
    netPay: 13710,
  },
];

const PayrollPage = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Payroll</h1>
            <p className="text-gray-500">Manage employee salary, deductions, and payslips</p>
          </div>

          <div className="flex items-center gap-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="justify-start">
                  <Calendar className="mr-2 h-4 w-4" />
                  {date ? format(date, "MMMM yyyy") : <span>Select month</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="end">
                <CalendarComponent
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                  className="pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
            
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Period: May 1-15" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="may1-15">May 1-15, 2025</SelectItem>
                <SelectItem value="apr16-30">Apr 16-30, 2025</SelectItem>
                <SelectItem value="apr1-15">Apr 1-15, 2025</SelectItem>
              </SelectContent>
            </Select>
            
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
                  <ChartBar className="mr-2 h-5 w-5 text-cfarbempco-green" />
                  Payroll Records
                </CardTitle>
                <CardDescription>
                  View and manage payroll information for the current period
                </CardDescription>
              </div>

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
            <Tabs defaultValue="current">
              <TabsList className="grid grid-cols-3 mb-4">
                <TabsTrigger value="current">Current Period</TabsTrigger>
                <TabsTrigger value="previous">Previous Period</TabsTrigger>
                <TabsTrigger value="summary">Monthly Summary</TabsTrigger>
              </TabsList>
              
              <TabsContent value="current">
                <div className="rounded-md border">
                  <div className="relative w-full overflow-auto">
                    <table className="w-full caption-bottom text-sm">
                      <thead className="[&_tr]:border-b bg-gray-50">
                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                          <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Employee</th>
                          <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Period</th>
                          <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground">Basic Salary</th>
                          <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground">Overtime</th>
                          <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground">Deductions</th>
                          <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground">Net Pay</th>
                          <th className="h-12 px-4 text-center align-middle font-medium text-muted-foreground">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="[&_tr:last-child]:border-0">
                        {payrollData.map((payroll) => (
                          <tr
                            key={payroll.id}
                            className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                          >
                            <td className="p-4 align-middle">
                              <div className="flex items-center gap-3">
                                <Avatar className="h-9 w-9">
                                  <AvatarImage src="" />
                                  <AvatarFallback className="bg-cfarbempco-green-light text-white">
                                    {payroll.employee.split(' ').map(n => n[0]).join('')}
                                  </AvatarFallback>
                                </Avatar>
                                <div>
                                  <div>{payroll.employee}</div>
                                  <div className="text-sm text-gray-500">{payroll.position}</div>
                                </div>
                              </div>
                            </td>
                            <td className="p-4 align-middle">{payroll.payPeriod}</td>
                            <td className="p-4 align-middle text-right">
                              ₱{payroll.basicSalary.toLocaleString()}
                            </td>
                            <td className="p-4 align-middle text-right">
                              ₱{payroll.overtime.toLocaleString()}
                            </td>
                            <td className="p-4 align-middle text-right">
                              ₱{payroll.deductions.toLocaleString()}
                            </td>
                            <td className="p-4 align-middle text-right font-medium">
                              ₱{payroll.netPay.toLocaleString()}
                            </td>
                            <td className="p-4 align-middle">
                              <div className="flex justify-center gap-2">
                                <Dialog>
                                  <DialogTrigger asChild>
                                    <Button
                                      variant="outline"
                                      size="icon"
                                      className="h-8 w-8"
                                    >
                                      <Eye className="h-4 w-4" />
                                    </Button>
                                  </DialogTrigger>
                                  <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                                    <DialogHeader>
                                      <DialogTitle>Payslip Preview</DialogTitle>
                                    </DialogHeader>
                                    <div className="space-y-4 py-4">
                                      <div className="bg-white p-6 border rounded-lg">
                                        <div className="flex justify-between items-start border-b pb-4 mb-4">
                                          <div>
                                            <h3 className="text-xl font-bold text-cfarbempco-green">CFARBEMPCO</h3>
                                            <p className="text-sm text-gray-600">Checkered Farms Agrarian Reform Beneficiaries Multi-Purpose Cooperative</p>
                                            <p className="text-sm text-gray-600 mt-1">Davao City, Philippines</p>
                                          </div>
                                          <div className="text-right">
                                            <h4 className="font-bold">PAYSLIP</h4>
                                            <p className="text-sm text-gray-600">Pay Period: {payroll.payPeriod}</p>
                                            <p className="text-sm text-gray-600">Payslip #: PS{payroll.id}052025</p>
                                          </div>
                                        </div>
                                        
                                        <div className="grid grid-cols-2 gap-4 mb-6">
                                          <div>
                                            <h4 className="text-sm font-semibold text-gray-600">Employee Information</h4>
                                            <p className="font-medium">{payroll.employee}</p>
                                            <p className="text-sm">{payroll.position}</p>
                                            <p className="text-sm">Employee ID: EMP00{payroll.id}</p>
                                          </div>
                                          <div>
                                            <h4 className="text-sm font-semibold text-gray-600">Payment Information</h4>
                                            <p className="text-sm">Payment Date: May 15, 2025</p>
                                            <p className="text-sm">Payment Method: Direct Deposit</p>
                                          </div>
                                        </div>
                                        
                                        <div className="grid grid-cols-2 gap-8 mb-6">
                                          <div>
                                            <h4 className="font-semibold border-b mb-2 pb-1">Earnings</h4>
                                            <div className="space-y-1">
                                              <div className="flex justify-between text-sm">
                                                <span>Basic Salary</span>
                                                <span>₱{payroll.basicSalary.toLocaleString()}</span>
                                              </div>
                                              <div className="flex justify-between text-sm">
                                                <span>Overtime Pay</span>
                                                <span>₱{payroll.overtime.toLocaleString()}</span>
                                              </div>
                                              <div className="flex justify-between text-sm">
                                                <span>Allowances</span>
                                                <span>₱1,000.00</span>
                                              </div>
                                              <div className="flex justify-between font-semibold border-t mt-2 pt-1">
                                                <span>Gross Pay</span>
                                                <span>₱{(payroll.basicSalary + payroll.overtime + 1000).toLocaleString()}</span>
                                              </div>
                                            </div>
                                          </div>
                                          
                                          <div>
                                            <h4 className="font-semibold border-b mb-2 pb-1">Deductions</h4>
                                            <div className="space-y-1">
                                              <div className="flex justify-between text-sm">
                                                <span>SSS</span>
                                                <span>₱{(payroll.deductions * 0.3).toFixed(2)}</span>
                                              </div>
                                              <div className="flex justify-between text-sm">
                                                <span>PhilHealth</span>
                                                <span>₱{(payroll.deductions * 0.2).toFixed(2)}</span>
                                              </div>
                                              <div className="flex justify-between text-sm">
                                                <span>Pag-IBIG</span>
                                                <span>₱{(payroll.deductions * 0.1).toFixed(2)}</span>
                                              </div>
                                              <div className="flex justify-between text-sm">
                                                <span>Withholding Tax</span>
                                                <span>₱{(payroll.deductions * 0.4).toFixed(2)}</span>
                                              </div>
                                              <div className="flex justify-between font-semibold border-t mt-2 pt-1">
                                                <span>Total Deductions</span>
                                                <span>₱{payroll.deductions.toLocaleString()}</span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        
                                        <div className="border-t pt-4">
                                          <div className="flex justify-between font-bold text-lg">
                                            <span>Net Pay</span>
                                            <span>₱{payroll.netPay.toLocaleString()}</span>
                                          </div>
                                        </div>
                                        
                                        <div className="mt-8 pt-6 border-t text-center text-sm text-gray-500">
                                          <p>This is a system-generated payslip and doesn't require a signature.</p>
                                          <p className="mt-1">For any questions regarding your payslip, please contact the HR department.</p>
                                        </div>
                                      </div>
                                      
                                      <div className="flex justify-center gap-4">
                                        <Button variant="outline">
                                          <FileText className="mr-2 h-4 w-4" />
                                          Print Payslip
                                        </Button>
                                        <Button variant="outline">
                                          <Download className="mr-2 h-4 w-4" />
                                          Download PDF
                                        </Button>
                                      </div>
                                    </div>
                                  </DialogContent>
                                </Dialog>
                                
                                <Button
                                  variant="outline"
                                  size="icon"
                                  className="h-8 w-8"
                                >
                                  <Download className="h-4 w-4" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="previous">
                <div className="rounded-md border">
                  <div className="relative w-full overflow-auto">
                    <table className="w-full caption-bottom text-sm">
                      <thead className="[&_tr]:border-b bg-gray-50">
                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                          <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Employee</th>
                          <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Period</th>
                          <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground">Basic Salary</th>
                          <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground">Overtime</th>
                          <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground">Deductions</th>
                          <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground">Net Pay</th>
                          <th className="h-12 px-4 text-center align-middle font-medium text-muted-foreground">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="[&_tr:last-child]:border-0">
                        {payrollData.map((payroll) => (
                          <tr
                            key={payroll.id}
                            className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                          >
                            <td className="p-4 align-middle">
                              <div className="flex items-center gap-3">
                                <Avatar className="h-9 w-9">
                                  <AvatarImage src="" />
                                  <AvatarFallback className="bg-cfarbempco-green-light text-white">
                                    {payroll.employee.split(' ').map(n => n[0]).join('')}
                                  </AvatarFallback>
                                </Avatar>
                                <div>
                                  <div>{payroll.employee}</div>
                                  <div className="text-sm text-gray-500">{payroll.position}</div>
                                </div>
                              </div>
                            </td>
                            <td className="p-4 align-middle">April 16-30, 2025</td>
                            <td className="p-4 align-middle text-right">
                              ₱{payroll.basicSalary.toLocaleString()}
                            </td>
                            <td className="p-4 align-middle text-right">
                              ₱{(payroll.overtime * 0.9).toFixed(2)}
                            </td>
                            <td className="p-4 align-middle text-right">
                              ₱{payroll.deductions.toLocaleString()}
                            </td>
                            <td className="p-4 align-middle text-right font-medium">
                              ₱{(payroll.netPay * 0.98).toFixed(2)}
                            </td>
                            <td className="p-4 align-middle">
                              <div className="flex justify-center gap-2">
                                <Button
                                  variant="outline"
                                  size="icon"
                                  className="h-8 w-8"
                                >
                                  <Eye className="h-4 w-4" />
                                </Button>
                                <Button
                                  variant="outline"
                                  size="icon"
                                  className="h-8 w-8"
                                >
                                  <Download className="h-4 w-4" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="summary">
                <Card>
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Monthly Payroll Summary - May 2025</h3>
                        <div className="space-y-4">
                          <div className="flex justify-between p-3 bg-gray-50 rounded-md">
                            <span className="font-medium">Total Employees</span>
                            <span>52</span>
                          </div>
                          <div className="flex justify-between p-3 bg-gray-50 rounded-md">
                            <span className="font-medium">Total Basic Salary</span>
                            <span>₱718,500.00</span>
                          </div>
                          <div className="flex justify-between p-3 bg-gray-50 rounded-md">
                            <span className="font-medium">Total Overtime</span>
                            <span>₱48,250.00</span>
                          </div>
                          <div className="flex justify-between p-3 bg-gray-50 rounded-md">
                            <span className="font-medium">Total Deductions</span>
                            <span>₱91,840.00</span>
                          </div>
                          <div className="flex justify-between p-3 bg-cfarbempco-green-lightest rounded-md">
                            <span className="font-semibold">Total Net Pay</span>
                            <span className="font-semibold">₱674,910.00</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Department Summary</h3>
                        <div className="space-y-4">
                          <div className="flex justify-between p-3 bg-gray-50 rounded-md">
                            <span className="font-medium">Operations</span>
                            <span>₱312,450.00</span>
                          </div>
                          <div className="flex justify-between p-3 bg-gray-50 rounded-md">
                            <span className="font-medium">Admin</span>
                            <span>₱128,760.00</span>
                          </div>
                          <div className="flex justify-between p-3 bg-gray-50 rounded-md">
                            <span className="font-medium">Human Resources</span>
                            <span>₱96,800.00</span>
                          </div>
                          <div className="flex justify-between p-3 bg-gray-50 rounded-md">
                            <span className="font-medium">Finance</span>
                            <span>₱136,900.00</span>
                          </div>
                          <Button className="w-full">
                            <Download className="mr-2 h-4 w-4" />
                            Download Summary Report
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default PayrollPage;
