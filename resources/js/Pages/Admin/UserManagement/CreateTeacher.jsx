import { useForm } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import MainAdminLayout from "@/Layouts/Admin/MainAdminLayout";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function CreateTeacher() {
  
  const { data, setData, post, processing, errors, reset } = useForm({
    teacher_id: "",
    first_name: "",
    middle_name: "",
    last_name: "",
    date_of_birth: "",
    gender: "",
    nationality: "",
    email: "",
    phone: "",
    address: "",
    department: "",
    designation: "",
    status: "",
    password: "",
    password_confirmation: "",
    profile_image: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route("store.teacher"), {
      forceFormData: true, // ✅ Required for file upload
      onSuccess: () => {
        toast.success("Teacher added successfully!");
        reset();
      },
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="w-full max-w-5xl rounded-2xl overflow-hidden border border-gray-200">
        {/* Header */}
        <div className="text-center py-6">
          <h1 className="text-3xl font-bold">Create Teacher Profile</h1>
          <p className=" mt-1">
            Fill out the details below to add a new teacher
          </p>
        </div>

        {/* Form Content */}
        <form onSubmit={handleSubmit} className="p-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Profile Picture Section */}
          <div className="flex flex-col items-center space-y-4">
            <div className="relative">
              <img
                src={
                  data.profile
                    ? URL.createObjectURL(data.profile)
                    : "/images/default-avatar.png"
                }
                alt="Profile"
                className="w-40 h-40 rounded-full object-cover border-4 border-indigo-200 shadow-md"
              />

              <label
                htmlFor="profile"
                className="absolute bottom-2 right-2 bg-indigo-600 text-white p-2 rounded-full cursor-pointer hover:bg-indigo-700 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.232 5.232l3.536 3.536M9 13l6.732-6.732a2.121 2.121 0 113.001 3.001L12 16H9v-3z"
                  />
                </svg>
              </label>

              <input
                id="profile"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => setData("profile_image", e.target.files[0])}
              />
            </div>

            <div className="text-center">
              <h2 className="text-lg font-semibold text-gray-800">
                {data.first_name || "First Name"} {data.last_name || "Last Name"}
              </h2>
              <p className="text-sm text-gray-500">
                {data.designation || "Designation not set"}
              </p>
            </div>

            <div className="w-full text-center">
              <Label htmlFor="teacher_id" className="text-sm text-gray-600">
                Teacher ID
              </Label>
              <Input
                id="teacher_id"
                placeholder="e.g., TCH-001"
                value={data.teacher_id}
                onChange={(e) => setData("teacher_id", e.target.value)}
                className="text-center mt-1"
              />
              {errors.teacher_id && (
                <p className="text-xs text-red-600">{errors.teacher_id}</p>
              )}
            </div>
          </div>

          {/* Right: Form Details */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Personal Information */}
            <div className="md:col-span-2 border-b pb-3">
              <h3 className="text-lg font-semibold text-indigo-700 mb-2">
                Personal Information
              </h3>
            </div>

            <div>
              <Label htmlFor="first_name">First Name</Label>
              <Input
                id="first_name"
                value={data.first_name}
                onChange={(e) => setData("first_name", e.target.value)}
                placeholder="John"
              />
            </div>

            <div>
              <Label htmlFor="middle_name">Middle Name</Label>
              <Input
                id="middle_name"
                value={data.middle_name}
                onChange={(e) => setData("middle_name", e.target.value)}
                placeholder="Optional"
              />
            </div>

            <div>
              <Label htmlFor="last_name">Last Name</Label>
              <Input
                id="last_name"
                value={data.last_name}
                onChange={(e) => setData("last_name", e.target.value)}
                placeholder="Doe"
              />
            </div>

            <div>
              <Label htmlFor="date_of_birth">Date of Birth</Label>
              <Input
                id="date_of_birth"
                type="date"
                value={data.date_of_birth}
                onChange={(e) => setData("date_of_birth", e.target.value)}
              />
            </div>

            <div>
              <Label>Gender</Label>
              <Select
                onValueChange={(value) => setData("gender", value)}
                value={data.gender}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="nationality">Nationality</Label>
              <Input
                id="nationality"
                placeholder="Filipino"
                value={data.nationality}
                onChange={(e) => setData("nationality", e.target.value)}
              />
            </div>

            {/* Contact Section */}
            <div className="md:col-span-2 border-b pb-3 mt-6">
              <h3 className="text-lg font-semibold text-indigo-700 mb-2">
                Contact Information
              </h3>
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="teacher@email.com"
                value={data.email}
                onChange={(e) => setData("email", e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                placeholder="0912-345-6789"
                value={data.phone}
                onChange={(e) => setData("phone", e.target.value)}
              />
            </div>

            <div className="md:col-span-2">
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                placeholder="Street, City, Province"
                value={data.address}
                onChange={(e) => setData("address", e.target.value)}
              />
            </div>

            {/* Professional Section */}
            <div className="md:col-span-2 border-b pb-3 mt-6">
              <h3 className="text-lg font-semibold text-indigo-700 mb-2">
                Professional Information
              </h3>
            </div>

            <div>
              <Label htmlFor="department">Department</Label>
              <Input
                id="department"
                placeholder="Department Name"
                value={data.department}
                onChange={(e) => setData("department", e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="designation">Designation</Label>
              <Input
                id="designation"
                placeholder="e.g., Instructor, Professor"
                value={data.designation}
                onChange={(e) => setData("designation", e.target.value)}
              />
            </div>

            <div>
              <Label>Status</Label>
              <Select
                onValueChange={(value) => setData("status", value)}
                value={data.status}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Account Credentials */}
            <div className="md:col-span-2 border-b pb-3 mt-6">
              <h3 className="text-lg font-semibold text-indigo-700 mb-2">
                Account Credentials
              </h3>
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={data.password}
                onChange={(e) => setData("password", e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="password_confirmation">Confirm Password</Label>
              <Input
                id="password_confirmation"
                type="password"
                value={data.password_confirmation}
                onChange={(e) =>
                  setData("password_confirmation", e.target.value)
                }
              />
            </div>

            {/* Submit */}
            <div className="md:col-span-2 flex justify-end mt-6">
              <Button type="submit" className="px-8" disabled={processing}>
                {processing ? "Saving..." : "Save Teacher"}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

CreateTeacher.layout = (page) => <MainAdminLayout children={page} />;
export default CreateTeacher;
