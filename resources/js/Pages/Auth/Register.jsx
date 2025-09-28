import LandingPageLayout from "@/Layouts/LandingPageLayout"
import React from "react"
import { useForm } from "@inertiajs/react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function Register() {
  const { data, setData, post, processing, errors, reset } = useForm({
    student_id: "",
    first_name: "",
    middle_name: "",
    last_name: "",
    date_of_birth: "",
    gender: "",
    nationality: "",
    email: "",
    phone: "",
    address: "",
    guardian_name: "",
    guardian_contact: "",
    course: "",
    year_level: "",
    status: "",
    password: "",
    password_confirmation: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    post(route("student.register"), {
      onSuccess: () => reset(),
    })
  }

  return (
    <LandingPageLayout>
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="w-full max-w-4xl rounded-2xl p-10">
          {/* Header */}
          <h1 className="text-3xl font-bold text-center text-indigo-700 mb-2">
            Student Registration
          </h1>
          <p className="text-center text-gray-500 mb-8">
            Fill out the form below to create your student account
          </p>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Student ID */}
            <div>
              <Label htmlFor="student_id">Student ID</Label>
              <Input
                id="student_id"
                name="student_id"
                placeholder="e.g., 2025-00123"
                value={data.student_id}
                onChange={(e) => setData("student_id", e.target.value)}
                required
              />
              {errors.student_id && (
                <p className="text-sm text-red-600">{errors.student_id}</p>
              )}
            </div>

            {/* First Name */}
            <div>
              <Label htmlFor="first_name">First Name</Label>
              <Input
                id="first_name"
                name="first_name"
                placeholder="John"
                value={data.first_name}
                onChange={(e) => setData("first_name", e.target.value)}
                required
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
                name="middle_name"
                placeholder="Optional"
                value={data.middle_name}
                onChange={(e) => setData("middle_name", e.target.value)}
              />
              {errors.middle_name && (
                <p className="text-sm text-red-600">{errors.middle_name}</p>
              )}
            </div>

            {/* Last Name */}
            <div>
              <Label htmlFor="last_name">Last Name</Label>
              <Input
                id="last_name"
                name="last_name"
                placeholder="Doe"
                value={data.last_name}
                onChange={(e) => setData("last_name", e.target.value)}
                required
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
                name="date_of_birth"
                value={data.date_of_birth}
                onChange={(e) => setData("date_of_birth", e.target.value)}
                required
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
                name="nationality"
                placeholder="Filipino"
                value={data.nationality}
                onChange={(e) => setData("nationality", e.target.value)}
              />
              {errors.nationality && (
                <p className="text-sm text-red-600">{errors.nationality}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="example@email.com"
                value={data.email}
                onChange={(e) => setData("email", e.target.value)}
                required
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
                name="phone"
                placeholder="0912-345-6789"
                value={data.phone}
                onChange={(e) => setData("phone", e.target.value)}
              />
              {errors.phone && (
                <p className="text-sm text-red-600">{errors.phone}</p>
              )}
            </div>

            {/* Address */}
            <div className="md:col-span-2">
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                name="address"
                placeholder="Street, City, Province"
                value={data.address}
                onChange={(e) => setData("address", e.target.value)}
                required
              />
              {errors.address && (
                <p className="text-sm text-red-600">{errors.address}</p>
              )}
            </div>

            {/* Guardian Name */}
            <div>
              <Label htmlFor="guardian_name">Guardian Name</Label>
              <Input
                id="guardian_name"
                name="guardian_name"
                value={data.guardian_name}
                onChange={(e) => setData("guardian_name", e.target.value)}
                required
              />
              {errors.guardian_name && (
                <p className="text-sm text-red-600">{errors.guardian_name}</p>
              )}
            </div>

            {/* Guardian Contact */}
            <div>
              <Label htmlFor="guardian_contact">Guardian Contact</Label>
              <Input
                id="guardian_contact"
                name="guardian_contact"
                value={data.guardian_contact}
                onChange={(e) => setData("guardian_contact", e.target.value)}
                required
              />
              {errors.guardian_contact && (
                <p className="text-sm text-red-600">{errors.guardian_contact}</p>
              )}
            </div>

            {/* Course */}
            <div>
              <Label>Course</Label>
              <Select
                onValueChange={(value) => setData("course", value)}
                value={data.course}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select course" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bs_computer_science">
                    BS Computer Science
                  </SelectItem>
                  <SelectItem value="bs_nursing">BS Nursing</SelectItem>
                  <SelectItem value="bs_mechanical_engineering">
                    BS Mechanical Engineering
                  </SelectItem>
                  <SelectItem value="bs_business_admin">
                    BS Business Administration
                  </SelectItem>
                  <SelectItem value="ba_political_science">
                    BA Political Science
                  </SelectItem>
                  <SelectItem value="bs_accountancy">
                    BS Accountancy
                  </SelectItem>
                </SelectContent>
              </Select>
              {errors.course && (
                <p className="text-sm text-red-600">{errors.course}</p>
              )}
            </div>

            {/* Year Level */}
            <div>
              <Label>Year Level</Label>
              <Select
                onValueChange={(value) => setData("year_level", value)}
                value={data.year_level}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1st Year</SelectItem>
                  <SelectItem value="2">2nd Year</SelectItem>
                  <SelectItem value="3">3rd Year</SelectItem>
                  <SelectItem value="4">4th Year</SelectItem>
                </SelectContent>
              </Select>
              {errors.year_level && (
                <p className="text-sm text-red-600">{errors.year_level}</p>
              )}
            </div>

            {/* Status */}
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
                  <SelectItem value="regular">Regular</SelectItem>
                  <SelectItem value="irregular">Irregular</SelectItem>
                  <SelectItem value="transferee">Transferee</SelectItem>
                </SelectContent>
              </Select>
              {errors.status && (
                <p className="text-sm text-red-600">{errors.status}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                name="password"
                value={data.password}
                onChange={(e) => setData("password", e.target.value)}
                required
              />
              {errors.password && (
                <p className="text-sm text-red-600">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <Label htmlFor="password_confirmation">Confirm Password</Label>
              <Input
                id="password_confirmation"
                type="password"
                name="password_confirmation"
                value={data.password_confirmation}
                onChange={(e) => setData("password_confirmation", e.target.value)}
                required
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
                {processing ? "Registering..." : "Register"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </LandingPageLayout>
  )
}
