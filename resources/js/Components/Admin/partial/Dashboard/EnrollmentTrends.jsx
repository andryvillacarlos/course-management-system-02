import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { TrendingUp } from "lucide-react";

const enrollmentData = [
  { month: "Jan", enrollments: 120 },
  { month: "Feb", enrollments: 150 },
  { month: "Mar", enrollments: 180 },
  { month: "Apr", enrollments: 210 },
  { month: "May", enrollments: 260 },
  { month: "Jun", enrollments: 240 },
  { month: "Jul", enrollments: 300 },
  { month: "Aug", enrollments: 320 },
  { month: "Sep", enrollments: 280 },
  { month: "Oct", enrollments: 350 },
];

export default function EnrollmentTrends() {
  return (
    <div className="mt-6">
      <Card className="shadow-md border border-gray-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-gray-700">
            <TrendingUp className="text-blue-500" size={22} />
            Enrollment Trends (Year Overview)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={enrollmentData} margin={{ top: 5, right: 10, bottom: 5, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="enrollments" stroke="#4F46E5" strokeWidth={2} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
          <p className="text-xs text-gray-500 text-center mt-2">
            Monthly student enrollment trends
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
