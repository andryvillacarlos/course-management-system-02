import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { router, usePage, Link } from "@inertiajs/react";
import { toast } from "sonner";
import { ArrowLeft, Upload } from "lucide-react";
import MainAdminLayout from "@/Layouts/Admin/MainAdminLayout";

function EditStudentForm({ student }) {
  const { errors } = usePage().props;
  const [preview, setPreview] = useState(student.profile || "/images/default-avatar.png");

  const handleSubmit = (e) => {
    e.preventDefault();
    router.post(
      route("update.student", student.id),
      {
        _method: "put",
        ...Object.fromEntries(new FormData(e.target)),
      },
      {
        preserveScroll: true,
        onSuccess: () => toast.success("Student updated successfully!"),
        onError: () => toast.error("Failed to update student."),
      }
    );
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="p-6 sm:p-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between border-b pb-3">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Edit Student Profile
          </h1>
          <p className="text-sm text-gray-500">
            Update the student’s academic and personal information.
          </p>
        </div>
        <Link
          href={route("student.data")}
          className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 text-sm font-medium"
        >
          <ArrowLeft size={16} />
          Back to List
        </Link>
      </div>

      {/* Form */}
      <Card className="border border-gray-100 shadow-md rounded-xl">
        <CardContent className="p-8">
          <form
            onSubmit={handleSubmit}
            className="space-y-10"
            encType="multipart/form-data"
          >
            {/* PROFILE SECTION */}
            <section className="flex flex-col sm:flex-row items-center sm:items-start gap-8 border-b pb-8">
              <div className="relative w-32 h-32">
                <img
                  src={preview}
                  alt="Profile"
                  className="w-32 h-32 rounded-full object-cover border shadow-sm"
                />
                <label
                  htmlFor="profile"
                  className="absolute bottom-1 right-1 bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-full cursor-pointer shadow-md"
                >
                  <Upload size={16} />
                </label>
                <Input
                  id="profile"
                  name="profile"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </div>

              <div className="text-center sm:text-left">
                <h2 className="text-2xl font-semibold text-gray-800">
                  {student.first_name} {student.middle_name} {student.last_name}
                </h2>
                <p className="text-sm text-gray-500 mt-1">{student.email}</p>
                <p className="text-sm text-gray-500">
                  {student.course} • Year {student.year_level}
                </p>
              </div>
            </section>

            {/* PERSONAL INFORMATION */}
            <section>
              <h2 className="text-lg font-semibold text-gray-700 mb-4 border-l-4 border-indigo-500 pl-3">
                Personal Information
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <Label htmlFor="first_name">First Name</Label>
                  <Input
                    id="first_name"
                    name="first_name"
                    defaultValue={student.first_name}
                    className={errors.first_name ? "border-red-500" : ""}
                  />
                  {errors.first_name && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.first_name}
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="middle_name">Middle Name</Label>
                  <Input
                    id="middle_name"
                    name="middle_name"
                    defaultValue={student.middle_name}
                  />
                </div>
                <div>
                  <Label htmlFor="last_name">Last Name</Label>
                  <Input
                    id="last_name"
                    name="last_name"
                    defaultValue={student.last_name}
                    className={errors.last_name ? "border-red-500" : ""}
                  />
                  {errors.last_name && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.last_name}
                    </p>
                  )}
                </div>
              </div>
            </section>

            {/* CONTACT INFORMATION */}
            <section>
              <h2 className="text-lg font-semibold text-gray-700 mb-4 border-l-4 border-indigo-500 pl-3">
                Contact Information
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    defaultValue={student.email}
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="status">Status</Label>
                  <Input
                    id="status"
                    name="status"
                    defaultValue={student.status}
                  />
                </div>
              </div>
            </section>

            {/* ACADEMIC DETAILS */}
            <section>
              <h2 className="text-lg font-semibold text-gray-700 mb-4 border-l-4 border-indigo-500 pl-3">
                Academic Details
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="course">Course</Label>
                  <Input
                    id="course"
                    name="course"
                    defaultValue={student.course}
                    className={errors.course ? "border-red-500" : ""}
                  />
                  {errors.course && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.course}
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="year_level">Year Level</Label>
                  <Input
                    id="year_level"
                    name="year_level"
                    defaultValue={student.year_level}
                  />
                </div>
              </div>
            </section>

            {/* ACTION BUTTON */}
            <div className="flex justify-end border-t pt-6">
              <Button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-2 rounded-lg shadow-sm"
              >
                Save Changes
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

EditStudentForm.layout = (page) => <MainAdminLayout children={page} />;

export default EditStudentForm;
