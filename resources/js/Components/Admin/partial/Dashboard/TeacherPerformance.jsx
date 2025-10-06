import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Award } from "lucide-react";

const topTeachers = [
  { id: 1, name: "Prof. Cruz", course: "Web Development", rating: 4.9, students: 120 },
  { id: 2, name: "Ms. Reyes", course: "Database Systems", rating: 4.8, students: 105 },
  { id: 3, name: "Mr. Tan", course: "Data Structures", rating: 4.7, students: 95 },
  { id: 4, name: "Ms. Santos", course: "UI/UX Design", rating: 4.6, students: 89 },
  { id: 5, name: "Mr. Ramos", course: "Networking Fundamentals", rating: 4.5, students: 77 },
];

export default function TeacherPerformance() {
  return (
    <div className="mt-6">
      <Card className="shadow-md border border-gray-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-gray-700">
            <Award className="text-yellow-500" size={22} />
            Top Teacher Performance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-gray-700">
              <thead>
                <tr className="border-b bg-gray-50">
                  <th className="p-3 text-left font-semibold">Teacher</th>
                  <th className="p-3 text-left font-semibold">Course</th>
                  <th className="p-3 text-center font-semibold">Rating</th>
                  <th className="p-3 text-center font-semibold">Students</th>
                </tr>
              </thead>
              <tbody>
                {topTeachers.map((t) => (
                  <tr key={t.id} className="border-b hover:bg-gray-50 transition">
                    <td className="p-3 font-medium">{t.name}</td>
                    <td className="p-3">{t.course}</td>
                    <td className="p-3 text-center flex justify-center items-center gap-1">
                      <Star className="text-yellow-500" size={16} />
                      {t.rating}
                    </td>
                    <td className="p-3 text-center">{t.students}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
