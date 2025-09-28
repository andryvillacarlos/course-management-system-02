import LandingPageLayout from "@/Layouts/LandingPageLayout";
import React from "react";
import { Laptop, Stethoscope, Cog, Briefcase, Globe, Calculator } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "BS Computer Science",
    description:
      "A program focusing on software development, algorithms, databases, and emerging technologies.",
    icon: <Laptop className="w-8 h-8 text-blue-600" />,
  },
  {
    id: 2,
    title: "BS Nursing",
    description:
      "Prepares students for healthcare practice with a strong foundation in medical and clinical training.",
    icon: <Stethoscope className="w-8 h-8 text-green-600" />,
  },
  {
    id: 3,
    title: "BS Mechanical Engineering",
    description:
      "Covers design, thermodynamics, and manufacturing systems for future engineers and innovators.",
    icon: <Cog className="w-8 h-8 text-orange-600" />,
  },
  {
    id: 4,
    title: "BS Business Administration",
    description:
      "Equips students with management, finance, and entrepreneurial skills for the corporate world.",
    icon: <Briefcase className="w-8 h-8 text-yellow-600" />,
  },
  {
    id: 5,
    title: "BA Political Science",
    description:
      "Explores governance, law, and international relations to prepare students for public service.",
    icon: <Globe className="w-8 h-8 text-red-600" />,
  },
  {
    id: 6,
    title: "BS Accountancy",
    description:
      "Focuses on financial reporting, auditing, and taxation to prepare students for CPA licensure.",
    icon: <Calculator className="w-8 h-8 text-purple-600" />,
  },
];

const CoursePage = () => {
  return (
    <LandingPageLayout>
      {/* Hero Section */}
      <section className="bg-blue-50 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">College Programs</h1>
        <p className="text-lg text-gray-600">
          Explore our academic offerings designed to prepare students for successful careers
          in their chosen fields.
        </p>
      </section>

      {/* Courses Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white shadow-md rounded-2xl p-6 flex flex-col hover:shadow-lg transition"
          >
            <div className="flex items-center gap-3 mb-4">
              {course.icon}
              <h2 className="text-xl font-semibold text-gray-800">
                {course.title}
              </h2>
            </div>
            <p className="text-gray-600 mb-6">{course.description}</p>
            <button className="mt-auto px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Learn More
            </button>
          </div>
        ))}
      </section>
    </LandingPageLayout>
  );
};

export default CoursePage;
