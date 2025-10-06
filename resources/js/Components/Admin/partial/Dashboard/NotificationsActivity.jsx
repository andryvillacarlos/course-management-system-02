import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, Clock, CheckCircle, AlertCircle } from "lucide-react";

export default function NotificationsActivity() {
  const notifications = [
    { id: 1, type: "success", message: "New course 'React Fundamentals' has been approved.", time: "2h ago" },
    { id: 2, type: "info", message: "Enrollment for 'Database Systems' is now open.", time: "5h ago" },
    { id: 3, type: "warning", message: "Low attendance detected in 'Networking 101'.", time: "1 day ago" },
    { id: 4, type: "success", message: "Student feedback report generated successfully.", time: "2 days ago" },
  ];

  const activities = [
    { id: 1, user: "John D.", action: "submitted assignment for", course: "Web Development", time: "10m ago" },
    { id: 2, user: "Sarah P.", action: "enrolled in", course: "UI/UX Design", time: "45m ago" },
    { id: 3, user: "Prof. Cruz", action: "updated grades for", course: "Database Systems", time: "3h ago" },
    { id: 4, user: "Maria L.", action: "completed course", course: "Python Programming", time: "6h ago" },
    { id: 5, user: "Admin", action: "created new course", course: "Data Analytics 101", time: "1 day ago" },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
      {/* 🔔 Notifications Section */}
      <Card className="shadow-md border border-gray-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-gray-700">
            <Bell className="text-indigo-500" size={22} />
            Notifications
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="divide-y divide-gray-100">
            {notifications.map((notif) => (
              <li key={notif.id} className="py-3 flex items-start gap-3">
                {notif.type === "success" && <CheckCircle className="text-green-500 mt-1" size={18} />}
                {notif.type === "warning" && <AlertCircle className="text-yellow-500 mt-1" size={18} />}
                {notif.type === "info" && <Bell className="text-blue-500 mt-1" size={18} />}

                <div>
                  <p className="text-sm text-gray-700">{notif.message}</p>
                  <p className="text-xs text-gray-500 flex items-center gap-1">
                    <Clock size={12} /> {notif.time}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* 🕒 Recent Activity Section */}
      <Card className="shadow-md border border-gray-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-gray-700">
            <Clock className="text-emerald-500" size={22} />
            Recent Activity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="divide-y divide-gray-100">
            {activities.map((activity) => (
              <li
                key={activity.id}
                className="py-3 flex justify-between items-center hover:bg-gray-50 px-2 rounded-md transition"
              >
                <div>
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">{activity.user}</span> {activity.action}{" "}
                    <span className="font-semibold text-indigo-600">{activity.course}</span>
                  </p>
                  <p className="text-xs text-gray-500 flex items-center gap-1">
                    <Clock size={12} /> {activity.time}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
