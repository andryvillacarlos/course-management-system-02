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

function EditTeacherForm({ teacher }) {
  // Prefill form with existing teacher data

  const { data, setData, put, processing, errors, reset } = useForm({
    teacher_id: teacher?.data?.teacher_id || "",
    first_name: teacher?.data?.first_name || "",
    middle_name: teacher?.data?.middle_name || "",
    last_name: teacher?.data?.last_name || "",
    date_of_birth: teacher?.data?.date_of_birth || "",
    gender: teacher?.data?.gender || "",
    nationality: teacher?.data?.nationality || "",
    email: teacher?.data?.email || "",
    phone: teacher?.data?.phone || "",
    address: teacher?.data?.address || "",
    department: teacher?.data?.department || "",
    designation: teacher?.data?.designation || "",
    status: teacher?.data?.status || "active",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data.teacher_id);
    put(route("update.teacher", data.teacher_id), {
      onSuccess: () => {
        toast.success("Teacher updated successfully!");
      },
      onError: () => {
        toast.error("Failed to update teacher. Please check the form.");
      },
    });
  };



  return (

    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-4xl rounded-2xl p-10">
        {/* Header */}
        <h1 className="text-3xl font-bold text-center text-indigo-700 mb-2">
          Edit Teacher
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Update the details below and click “Save Changes”
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
          </div>

          {/* Nationality */}
          <div>
            <Label htmlFor="nationality">Nationality</Label>
            <Input
              id="nationality"
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
              value={data.email}
              onChange={(e) => setData("email", e.target.value)}
              disabled={processing}
            />
          </div>

          {/* Phone */}
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
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
              value={data.department}
              onChange={(e) => setData("department", e.target.value)}
              disabled={processing}
            />
          </div>

          {/* Designation */}
          <div>
            <Label htmlFor="designation">Designation</Label>
            <Input
              id="designation"
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
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              value={data.address}
              onChange={(e) => setData("address", e.target.value)}
              disabled={processing}
            />
          </div>

          {/* Buttons */}
          <div className="md:col-span-2 flex justify-end gap-3 mt-6">
            
            <Button type="submit" className="px-8" disabled={processing}>
              {processing ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        </form>
      </div>
    </div>
    
  );
}

EditTeacherForm.layout = (page) => <MainAdminLayout children={page} />;

export default EditTeacherForm;
