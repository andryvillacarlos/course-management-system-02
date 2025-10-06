import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Star, TrendingUp } from "lucide-react";

const topCourses = [
  { id: 1, name: "Web Development", teacher: "Mr. Cruz", avgGrade: 91, enrolled: 85 },
  { id: 2, name: "Database Systems", teacher: "Ms. Reyes", avgGrade: 89, enrolled: 74 },
  { id: 3, name: "Data Structures", teacher: "Mr. Tan", avgGrade: 87, enrolled: 68 },
  { id: 4, name: "UI/UX Design", teacher: "Ms. Santos", avgGrade: 86, enrolled: 63 },
  { id: 5, name: "Networking Fundamentals", teacher: "Mr. Ramos", avgGrade: 84, enrolled: 59 },
];

const performanceData = [
  { department: "IT", passRate: 92 },
  { department: "Business", passRate: 88 },
  { department: "Education", passRate: 85 },
  { department: "Engineering", passRate: 90 },
  { department: "Arts", passRate: 82 },
];

export default function TopCoursesPerformance() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
      {/* 🏅 Top Courses Section */}
      <Card className="shadow-md border border-gray-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-gray-700">
            <Star className="text-yellow-500" size={22} />
            Top Performing Courses
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-gray-700">
              <thead>
                <tr className="border-b bg-gray-50">
                  <th className="text-left p-3 font-semibold">Course</th>
                  <th className="text-left p-3 font-semibold">Teacher</th>
                  <th className="text-center p-3 font-semibold">Avg Grade</th>
                  <th className="text-center p-3 font-semibold">Enrolled</th>
                </tr>
              </thead>
              <tbody>
                {topCourses.map((course) => (
                  <tr key={course.id} className="border-b hover:bg-gray-50 transition">
                    <td className="p-3">{course.name}</td>
                    <td className="p-3">{course.teacher}</td>
                    <td className="text-center p-3 font-medium text-green-600">{course.avgGrade}%</td>
                    <td className="text-center p-3">{course.enrolled}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* 📊 Performance Summary Section */}
      <Card className="shadow-md border border-gray-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-gray-700">
            <TrendingUp className="text-blue-500" size={22} />
            Department Performance Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={performanceData} margin={{ top: 10, right: 10, left: 0, bottom: 10 }}>
              <XAxis dataKey="department" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="passRate" radius={[5, 5, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <p className="text-xs text-gray-500 mt-2 text-center">
            Pass rate comparison across departments
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
