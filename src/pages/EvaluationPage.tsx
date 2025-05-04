
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
  Plus, 
  Filter, 
  Download, 
  FileText,
  Star,
  ChevronDown,
  ChevronUp
} from "lucide-react";
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

const evaluationData = [
  {
    id: 1,
    employee: "Juan Dela Cruz",
    position: "Field Supervisor",
    department: "Operations",
    evaluationPeriod: "Q1 2025",
    overallRating: 4.5,
    performance: "Excellent",
  },
  {
    id: 2,
    employee: "Maria Santos",
    position: "Office Assistant",
    department: "Admin",
    evaluationPeriod: "Q1 2025",
    overallRating: 3.8,
    performance: "Good",
  },
  {
    id: 3,
    employee: "Pedro Reyes",
    position: "Packing Specialist",
    department: "Operations",
    evaluationPeriod: "Q1 2025",
    overallRating: 4.2,
    performance: "Very Good",
  },
  {
    id: 4,
    employee: "Elena Gomez",
    position: "HR Assistant",
    department: "Human Resources",
    evaluationPeriod: "Q1 2025",
    overallRating: 3.5,
    performance: "Good",
  },
  {
    id: 5,
    employee: "Antonio Lim",
    position: "Accounting Staff",
    department: "Finance",
    evaluationPeriod: "Q1 2025",
    overallRating: 4.7,
    performance: "Excellent",
  },
];

const RatingStars = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} className="w-4 h-4 fill-cfarbempco-yellow text-cfarbempco-yellow" />
      ))}
      {hasHalfStar && (
        <div className="relative">
          <Star className="w-4 h-4 text-gray-300" />
          <div className="absolute top-0 left-0 w-1/2 overflow-hidden">
            <Star className="w-4 h-4 fill-cfarbempco-yellow text-cfarbempco-yellow" />
          </div>
        </div>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />
      ))}
      <span className="ml-2 text-sm font-medium">{rating.toFixed(1)}</span>
    </div>
  );
};

const EvaluationPage = () => {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Employee Evaluation</h1>
            <p className="text-gray-500">View and manage employee performance evaluations</p>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-cfarbempco-green hover:bg-cfarbempco-green-dark">
                  <Plus className="mr-2 h-4 w-4" />
                  New Evaluation
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>New Employee Evaluation</DialogTitle>
                  <DialogDescription>
                    Create a new performance evaluation for an employee.
                  </DialogDescription>
                </DialogHeader>

                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="employee">Employee *</Label>
                      <Select>
                        <SelectTrigger id="employee">
                          <SelectValue placeholder="Select employee" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="juan">Juan Dela Cruz</SelectItem>
                          <SelectItem value="maria">Maria Santos</SelectItem>
                          <SelectItem value="pedro">Pedro Reyes</SelectItem>
                          <SelectItem value="elena">Elena Gomez</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="evaluationPeriod">Evaluation Period *</Label>
                      <Select>
                        <SelectTrigger id="evaluationPeriod">
                          <SelectValue placeholder="Select period" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="q1-2025">Q1 2025</SelectItem>
                          <SelectItem value="q2-2025">Q2 2025</SelectItem>
                          <SelectItem value="q3-2025">Q3 2025</SelectItem>
                          <SelectItem value="q4-2025">Q4 2025</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Tabs defaultValue="performance">
                    <TabsList className="grid grid-cols-3 mb-4">
                      <TabsTrigger value="performance">Performance</TabsTrigger>
                      <TabsTrigger value="skills">Skills</TabsTrigger>
                      <TabsTrigger value="comments">Comments</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="performance" className="space-y-4">
                      <div className="space-y-3">
                        <div className="space-y-1">
                          <div className="flex justify-between">
                            <Label>Work Quality</Label>
                            <span className="text-sm font-medium">4.0</span>
                          </div>
                          <input
                            type="range"
                            min="1"
                            max="5"
                            step="0.1"
                            defaultValue="4"
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-cfarbempco-green"
                          />
                          <div className="flex justify-between text-xs text-gray-500">
                            <span>Poor</span>
                            <span>Average</span>
                            <span>Excellent</span>
                          </div>
                        </div>

                        <div className="space-y-1">
                          <div className="flex justify-between">
                            <Label>Productivity</Label>
                            <span className="text-sm font-medium">3.5</span>
                          </div>
                          <input
                            type="range"
                            min="1"
                            max="5"
                            step="0.1"
                            defaultValue="3.5"
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-cfarbempco-green"
                          />
                          <div className="flex justify-between text-xs text-gray-500">
                            <span>Poor</span>
                            <span>Average</span>
                            <span>Excellent</span>
                          </div>
                        </div>

                        <div className="space-y-1">
                          <div className="flex justify-between">
                            <Label>Attendance & Punctuality</Label>
                            <span className="text-sm font-medium">4.0</span>
                          </div>
                          <input
                            type="range"
                            min="1"
                            max="5"
                            step="0.1"
                            defaultValue="4"
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-cfarbempco-green"
                          />
                          <div className="flex justify-between text-xs text-gray-500">
                            <span>Poor</span>
                            <span>Average</span>
                            <span>Excellent</span>
                          </div>
                        </div>

                        <div className="space-y-1">
                          <div className="flex justify-between">
                            <Label>Initiative & Proactivity</Label>
                            <span className="text-sm font-medium">3.8</span>
                          </div>
                          <input
                            type="range"
                            min="1"
                            max="5"
                            step="0.1"
                            defaultValue="3.8"
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-cfarbempco-green"
                          />
                          <div className="flex justify-between text-xs text-gray-500">
                            <span>Poor</span>
                            <span>Average</span>
                            <span>Excellent</span>
                          </div>
                        </div>

                        <div className="space-y-1">
                          <div className="flex justify-between">
                            <Label>Teamwork</Label>
                            <span className="text-sm font-medium">4.2</span>
                          </div>
                          <input
                            type="range"
                            min="1"
                            max="5"
                            step="0.1"
                            defaultValue="4.2"
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-cfarbempco-green"
                          />
                          <div className="flex justify-between text-xs text-gray-500">
                            <span>Poor</span>
                            <span>Average</span>
                            <span>Excellent</span>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="skills" className="space-y-4">
                      <div className="space-y-3">
                        <div className="space-y-1">
                          <div className="flex justify-between">
                            <Label>Technical Skills</Label>
                            <span className="text-sm font-medium">4.0</span>
                          </div>
                          <input
                            type="range"
                            min="1"
                            max="5"
                            step="0.1"
                            defaultValue="4"
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-cfarbempco-green"
                          />
                        </div>

                        <div className="space-y-1">
                          <div className="flex justify-between">
                            <Label>Communication</Label>
                            <span className="text-sm font-medium">3.7</span>
                          </div>
                          <input
                            type="range"
                            min="1"
                            max="5"
                            step="0.1"
                            defaultValue="3.7"
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-cfarbempco-green"
                          />
                        </div>

                        <div className="space-y-1">
                          <div className="flex justify-between">
                            <Label>Problem Solving</Label>
                            <span className="text-sm font-medium">3.5</span>
                          </div>
                          <input
                            type="range"
                            min="1"
                            max="5"
                            step="0.1"
                            defaultValue="3.5"
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-cfarbempco-green"
                          />
                        </div>

                        <div className="space-y-1">
                          <div className="flex justify-between">
                            <Label>Adaptability</Label>
                            <span className="text-sm font-medium">4.0</span>
                          </div>
                          <input
                            type="range"
                            min="1"
                            max="5"
                            step="0.1"
                            defaultValue="4"
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-cfarbempco-green"
                          />
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="comments" className="space-y-4">
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="strengths">Strengths</Label>
                          <textarea 
                            id="strengths"
                            className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Enter employee's strengths"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="improvements">Areas for Improvement</Label>
                          <textarea 
                            id="improvements"
                            className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Enter areas for improvement"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="goals">Goals for Next Period</Label>
                          <textarea 
                            id="goals"
                            className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Enter goals for the next period"
                          />
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>

                <DialogFooter>
                  <Button variant="outline" type="button">
                    Cancel
                  </Button>
                  <Button className="bg-cfarbempco-green hover:bg-cfarbempco-green-dark">Save Evaluation</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <Card>
          <CardHeader className="pb-3">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <CardTitle className="flex items-center">
                  <FileText className="mr-2 h-5 w-5 text-cfarbempco-green" />
                  Employee Evaluations
                </CardTitle>
                <CardDescription>
                  View and manage performance ratings and assessments
                </CardDescription>
              </div>

              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  placeholder="Search evaluations..."
                  className="pl-8 bg-white border-gray-200 focus-visible:ring-cfarbempco-green w-full max-w-sm"
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all">
              <TabsList className="grid grid-cols-4 mb-4">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="excellent">Excellent</TabsTrigger>
                <TabsTrigger value="good">Good</TabsTrigger>
                <TabsTrigger value="needs-improvement">Needs Improvement</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all">
                <div className="rounded-md border">
                  <div className="relative w-full overflow-auto">
                    <table className="w-full caption-bottom text-sm">
                      <thead className="[&_tr]:border-b bg-gray-50">
                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                          <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Employee</th>
                          <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Department</th>
                          <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Period</th>
                          <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Rating</th>
                          <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Performance</th>
                          <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="[&_tr:last-child]:border-0">
                        {evaluationData.map((evaluation) => (
                          <tr
                            key={evaluation.id}
                            className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                          >
                            <td className="p-4 align-middle">
                              <div className="flex items-center gap-3">
                                <Avatar className="h-9 w-9">
                                  <AvatarImage src="" />
                                  <AvatarFallback className="bg-cfarbempco-green-light text-white">
                                    {evaluation.employee.split(' ').map(n => n[0]).join('')}
                                  </AvatarFallback>
                                </Avatar>
                                <div>
                                  <div>{evaluation.employee}</div>
                                  <div className="text-sm text-gray-500">{evaluation.position}</div>
                                </div>
                              </div>
                            </td>
                            <td className="p-4 align-middle">{evaluation.department}</td>
                            <td className="p-4 align-middle">{evaluation.evaluationPeriod}</td>
                            <td className="p-4 align-middle">
                              <RatingStars rating={evaluation.overallRating} />
                            </td>
                            <td className="p-4 align-middle">
                              <span
                                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                                  evaluation.performance === "Excellent"
                                    ? "bg-green-100 text-green-800"
                                    : evaluation.performance === "Very Good"
                                    ? "bg-blue-100 text-blue-800"
                                    : evaluation.performance === "Good"
                                    ? "bg-yellow-100 text-yellow-800"
                                    : "bg-red-100 text-red-800"
                                }`}
                              >
                                {evaluation.performance}
                              </span>
                            </td>
                            <td className="p-4 align-middle">
                              <Button
                                variant="outline"
                                size="sm"
                                className="h-8 text-xs"
                              >
                                View Details
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="excellent">
                <div className="rounded-md border">
                  <div className="relative w-full overflow-auto">
                    <table className="w-full caption-bottom text-sm">
                      <thead className="[&_tr]:border-b bg-gray-50">
                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                          <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Employee</th>
                          <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Department</th>
                          <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Period</th>
                          <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Rating</th>
                          <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Performance</th>
                          <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="[&_tr:last-child]:border-0">
                        {evaluationData
                          .filter((e) => e.performance === "Excellent")
                          .map((evaluation) => (
                            <tr
                              key={evaluation.id}
                              className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                            >
                              <td className="p-4 align-middle">
                                <div className="flex items-center gap-3">
                                  <Avatar className="h-9 w-9">
                                    <AvatarImage src="" />
                                    <AvatarFallback className="bg-cfarbempco-green-light text-white">
                                      {evaluation.employee.split(' ').map(n => n[0]).join('')}
                                    </AvatarFallback>
                                  </Avatar>
                                  <div>
                                    <div>{evaluation.employee}</div>
                                    <div className="text-sm text-gray-500">{evaluation.position}</div>
                                  </div>
                                </div>
                              </td>
                              <td className="p-4 align-middle">{evaluation.department}</td>
                              <td className="p-4 align-middle">{evaluation.evaluationPeriod}</td>
                              <td className="p-4 align-middle">
                                <RatingStars rating={evaluation.overallRating} />
                              </td>
                              <td className="p-4 align-middle">
                                <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-green-100 text-green-800">
                                  {evaluation.performance}
                                </span>
                              </td>
                              <td className="p-4 align-middle">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="h-8 text-xs"
                                >
                                  View Details
                                </Button>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="good">
                <div className="rounded-md border">
                  <div className="relative w-full overflow-auto">
                    <table className="w-full caption-bottom text-sm">
                      <thead className="[&_tr]:border-b bg-gray-50">
                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                          <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Employee</th>
                          <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Department</th>
                          <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Period</th>
                          <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Rating</th>
                          <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Performance</th>
                          <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="[&_tr:last-child]:border-0">
                        {evaluationData
                          .filter((e) => e.performance === "Good" || e.performance === "Very Good")
                          .map((evaluation) => (
                            <tr
                              key={evaluation.id}
                              className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                            >
                              <td className="p-4 align-middle">
                                <div className="flex items-center gap-3">
                                  <Avatar className="h-9 w-9">
                                    <AvatarImage src="" />
                                    <AvatarFallback className="bg-cfarbempco-green-light text-white">
                                      {evaluation.employee.split(' ').map(n => n[0]).join('')}
                                    </AvatarFallback>
                                  </Avatar>
                                  <div>
                                    <div>{evaluation.employee}</div>
                                    <div className="text-sm text-gray-500">{evaluation.position}</div>
                                  </div>
                                </div>
                              </td>
                              <td className="p-4 align-middle">{evaluation.department}</td>
                              <td className="p-4 align-middle">{evaluation.evaluationPeriod}</td>
                              <td className="p-4 align-middle">
                                <RatingStars rating={evaluation.overallRating} />
                              </td>
                              <td className="p-4 align-middle">
                                <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                                  evaluation.performance === "Very Good" ? "bg-blue-100 text-blue-800" : "bg-yellow-100 text-yellow-800"
                                }`}>
                                  {evaluation.performance}
                                </span>
                              </td>
                              <td className="p-4 align-middle">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="h-8 text-xs"
                                >
                                  View Details
                                </Button>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="needs-improvement">
                <div className="text-center py-8">
                  <FileText className="h-12 w-12 mx-auto text-gray-400" />
                  <h3 className="mt-4 text-lg font-medium">No Records Found</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    There are currently no employees that need improvement.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default EvaluationPage;
