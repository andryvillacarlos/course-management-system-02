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
    courses: [], // ✅ Fixed: use array, not string
    designation: "",
    status: "",
    password: "",
    password_confirmation: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route("store.teacher"), {
      onSuccess: () => {
        toast.success("Teacher added successfully!");
        reset();
      },
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-4xl rounded-2xl p-10">
        {/* Header */}
        <h1 className="text-3xl font-bold text-center text-indigo-700 mb-2">
          Add Teacher
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Fill out the form below to register a new teacher
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Teacher ID */}
          <div>
            <Label htmlFor="teacher_id">Teacher ID</Label>
            <Input
              id="teacher_id"
              placeholder="e.g., TCH-001"
              value={data.teacher_id}
              onChange={(e) => setData("teacher_id", e.target.value)}
              disabled={processing}
            />
            {errors.teacher_id && (
              <p className="text-sm text-red-600">{errors.teacher_id}</p>
            )}
          </div>

          {/* First Name */}
          <div>
            <Label htmlFor="first_name">First Name</Label>
            <Input
              id="first_name"
              placeholder="John"
              value={data.first_name}
              onChange={(e) => setData("first_name", e.target.value)}
              disabled={processing}
            />
            {errors.first_name && (
              <p className="text-sm text-red-600">{errors.first_name}</p>
            )}
          </div>

          {/* Middle Name */}
          <div>
            <Label htmlFor="middle_name">Middle Name</Label>
            <Input
              id="middle_name"
              placeholder="Optional"
              value={data.middle_name}
              onChange={(e) => setData("middle_name", e.target.value)}
              disabled={processing}
            />
          </div>

          {/* Last Name */}
          <div>
            <Label htmlFor="last_name">Last Name</Label>
            <Input
              id="last_name"
              placeholder="Doe"
              value={data.last_name}
              onChange={(e) => setData("last_name", e.target.value)}
              disabled={processing}
            />
            {errors.last_name && (
              <p className="text-sm text-red-600">{errors.last_name}</p>
            )}
          </div>

          {/* Date of Birth */}
          <div>
            <Label htmlFor="date_of_birth">Date of Birth</Label>
            <Input
              id="date_of_birth"
              type="date"
              value={data.date_of_birth}
              onChange={(e) => setData("date_of_birth", e.target.value)}
              disabled={processing}
            />
            {errors.date_of_birth && (
              <p className="text-sm text-red-600">{errors.date_of_birth}</p>
            )}
          </div>

          {/* Gender */}
          <div>
            <Label>Gender</Label>
            <Select
              onValueChange={(value) => setData("gender", value)}
              value={data.gender}
              disabled={processing}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
              </SelectContent>
            </Select>
            {errors.gender && (
              <p className="text-sm text-red-600">{errors.gender}</p>
            )}
          </div>

          {/* Nationality */}
          <div>
            <Label htmlFor="nationality">Nationality</Label>
            <Input
              id="nationality"
              placeholder="Filipino"
              value={data.nationality}
              onChange={(e) => setData("nationality", e.target.value)}
              disabled={processing}
            />
          </div>

          {/* Email */}
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="teacher@email.com"
              value={data.email}
              onChange={(e) => setData("email", e.target.value)}
              disabled={processing}
            />
            {errors.email && (
              <p className="text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              placeholder="0912-345-6789"
              value={data.phone}
              onChange={(e) => setData("phone", e.target.value)}
              disabled={processing}
            />
          </div>

          {/* Department */}
          <div>
            <Label htmlFor="department">Department</Label>
            <Input
              id="department"
              placeholder="Department Name"
              value={data.department}
              onChange={(e) => setData("department", e.target.value)}
              disabled={processing}
            />
            {errors.department && (
              <p className="text-sm text-red-600">{errors.department}</p>
            )}
          </div>

          {/* Designation */}
          <div>
            <Label htmlFor="designation">Designation</Label>
            <Input
              id="designation"
              placeholder="e.g., Professor, Instructor"
              value={data.designation}
              onChange={(e) => setData("designation", e.target.value)}
              disabled={processing}
            />
          </div>

          {/* Status */}
          <div>
            <Label>Status</Label>
            <Select
              onValueChange={(value) => setData("status", value)}
              value={data.status}
              disabled={processing}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
            {errors.status && (
              <p className="text-sm text-red-600">{errors.status}</p>
            )}
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              placeholder="Street, City, Province"
              value={data.address}
              onChange={(e) => setData("address", e.target.value)}
              disabled={processing}
            />
          </div>

          {/* Password */}
          <div className="md:col-span-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Set a password"
              value={data.password}
              onChange={(e) => setData("password", e.target.value)}
              disabled={processing}
            />
            {errors.password && (
              <p className="text-sm text-red-600">{errors.password}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="md:col-span-2">
            <Label htmlFor="password_confirmation">Confirm Password</Label>
            <Input
              id="password_confirmation"
              type="password"
              placeholder="Confirm your password"
              value={data.password_confirmation}
              onChange={(e) =>
                setData("password_confirmation", e.target.value)
              }
              disabled={processing}
            />
            {errors.password_confirmation && (
              <p className="text-sm text-red-600">
                {errors.password_confirmation}
              </p>
            )}
          </div>

          {/* Submit */}
          <div className="md:col-span-2 flex justify-end mt-4">
            <Button type="submit" className="px-8" disabled={processing}>
              {processing ? "Saving..." : "Save Teacher"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

CreateTeacher.layout = (page) => <MainAdminLayout children={page} />;
export default CreateTeacher;
