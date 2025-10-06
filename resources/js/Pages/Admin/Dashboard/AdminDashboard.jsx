import MainAdminLayout from '@/Layouts/Admin/MainAdminLayout'
import React from 'react'
import DashboardContent from '../../../Components/Admin/partial/Dashboard/DashboardContent';
import TopCoursesPerformance from '@/Components/Admin/partial/Dashboard/TopCoursesPerformance';
import NotificationsActivity from '@/Components/Admin/partial/Dashboard/NotificationsActivity';
import EnrollmentTrends from '@/Components/Admin/partial/Dashboard/EnrollmentTrends';
import TeacherPerformance from '@/Components/Admin/partial/Dashboard/TeacherPerformance';


export default function AdminDashboard() {
  return (
    <MainAdminLayout>
      <div className="p-6 space-y-8">
        {/* Dashboard overview section */}
        <section>
          <DashboardContent />
        </section>

        {/* Top Course Performance Section */}
        <section>
          <TopCoursesPerformance/>
        </section>

         {/* Notifications Activity Section */}
        <section>
          <NotificationsActivity/>
        </section>

         {/* Enrollment Trends Section */}
        <section>
          <EnrollmentTrends/>
        </section>

          {/* Teacher Performance Section */}
        <section>
          <TeacherPerformance/>
        </section>
      </div>
    </MainAdminLayout>
  );
} 