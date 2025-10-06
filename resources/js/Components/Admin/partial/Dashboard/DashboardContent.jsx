import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Users, DollarSign, BookOpen, Activity } from "lucide-react";

export default function DashboardContent() {
  const barData = [
    { name: "Jan", sales: 4000 },
    { name: "Feb", sales: 3000 },
    { name: "Mar", sales: 5000 },
    { name: "Apr", sales: 4500 },
    { name: "May", sales: 6000 },
    { name: "Jun", sales: 5500 },
  ];

  const pieData = [
    { name: "Students", value: 400 },
    { name: "Teachers", value: 120 },
    { name: "Admins", value: 20 },
  ];

  const COLORS = ["#4F46E5", "#22C55E", "#F59E0B"];

  const activities = [
    { id: 1, user: "John Doe", action: "Enrolled in Mathematics 101", time: "2 hours ago" },
    { id: 2, user: "Jane Smith", action: "Uploaded new course materials", time: "5 hours ago" },
    { id: 3, user: "Mark Reyes", action: "Registered as a new student", time: "1 day ago" },
    { id: 4, user: "Admin", action: "Updated teacher permissions", time: "2 days ago" },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-semibold text-gray-800">Dashboard Overview</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="shadow-md">
          <CardHeader className="flex items-center justify-between">
            <CardTitle>Total Students</CardTitle>
            <Users className="text-indigo-500" />
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">1,245</p>
            <p className="text-sm text-gray-500">+12% from last month</p>
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardHeader className="flex items-center justify-between">
            <CardTitle>Total Teachers</CardTitle>
            <BookOpen className="text-green-500" />
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">87</p>
            <p className="text-sm text-gray-500">+5% this week</p>
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardHeader className="flex items-center justify-between">
            <CardTitle>Revenue</CardTitle>
            <DollarSign className="text-yellow-500" />
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">₱152,300</p>
            <p className="text-sm text-gray-500">+8% this quarter</p>
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardHeader className="flex items-center justify-between">
            <CardTitle>System Activity</CardTitle>
            <Activity className="text-red-500" />
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">98%</p>
            <p className="text-sm text-gray-500">Server uptime</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Monthly Sales Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="sales" fill="#4F46E5" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>User Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
