import LandingPageLayout from "@/Layouts/LandingPageLayout"
import React, { useState } from "react"
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
  const [formData, setFormData] = useState({
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // TODO: connect to backend (API or Inertia)
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
                value={formData.student_id}
                onChange={handleChange}
                required
              />
            </div>

            {/* First Name */}
            <div>
              <Label htmlFor="first_name">First Name</Label>
              <Input
                id="first_name"
                name="first_name"
                placeholder="John"
                value={formData.first_name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Middle Name */}
            <div>
              <Label htmlFor="middle_name">Middle Name</Label>
              <Input
                id="middle_name"
                name="middle_name"
                placeholder="Optional"
                value={formData.middle_name}
                onChange={handleChange}
              />
            </div>

            {/* Last Name */}
            <div>
              <Label htmlFor="last_name">Last Name</Label>
              <Input
                id="last_name"
                name="last_name"
                placeholder="Doe"
                value={formData.last_name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Date of Birth */}
            <div>
              <Label htmlFor="date_of_birth">Date of Birth</Label>
              <Input
                id="date_of_birth"
                type="date"
                name="date_of_birth"
                value={formData.date_of_birth}
                onChange={handleChange}
                required
              />
            </div>

            {/* Gender */}
            <div>
              <Label>Gender</Label>
              <Select
                onValueChange={(value) =>
                  setFormData({ ...formData, gender: value })
                }
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
                name="nationality"
                placeholder="Filipino"
                value={formData.nationality}
                onChange={handleChange}
              />
            </div>

            {/* Email */}
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="example@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Phone */}
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                name="phone"
                placeholder="0912-345-6789"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            {/* Address */}
            <div className="md:col-span-2">
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                name="address"
                placeholder="Street, City, Province"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>

            {/* Guardian Name */}
            <div>
              <Label htmlFor="guardian_name">Guardian Name</Label>
              <Input
                id="guardian_name"
                name="guardian_name"
                value={formData.guardian_name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Guardian Contact */}
            <div>
              <Label htmlFor="guardian_contact">Guardian Contact</Label>
              <Input
                id="guardian_contact"
                name="guardian_contact"
                value={formData.guardian_contact}
                onChange={handleChange}
                required
              />
            </div>

            {/* Course */}
            <div>
              <Label>Course</Label>
              <Select
                onValueChange={(value) =>
                  setFormData({ ...formData, course: value })
                }
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
            </div>

            {/* Year Level */}
            <div>
              <Label>Year Level</Label>
              <Select
                onValueChange={(value) =>
                  setFormData({ ...formData, year_level: value })
                }
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
            </div>

            {/* Status */}
            <div>
              <Label>Status</Label>
              <Select
                onValueChange={(value) =>
                  setFormData({ ...formData, status: value })
                }
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
            </div>

            {/* Password */}
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            {/* Confirm Password */}
            <div>
              <Label htmlFor="password_confirmation">Confirm Password</Label>
              <Input
                id="password_confirmation"
                type="password"
                name="password_confirmation"
                value={formData.password_confirmation}
                onChange={handleChange}
                required
              />
            </div>

            {/* Submit */}
            <div className="md:col-span-2 flex justify-end mt-4">
              <Button type="submit" className="px-8">
                Register
              </Button>
            </div>
          </form>
        </div>
      </div>
    </LandingPageLayout>
  )
}
