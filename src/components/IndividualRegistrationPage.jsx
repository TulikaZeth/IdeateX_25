import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "./Navbar"

export default function IndividualRegistrationPage({ onBackToHome }) {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    rollNo: '',
    college: '',
    libId: '',
    gender: ''
  })

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = () => {
    console.log('Individual Registration submitted:', formData)
    // Add your submission logic here
    // navigate('/success') or similar
  }

  return (
    <div className="relative bg-[#0A0118] overflow-hidden min-h-screen">
      {/* Grid pattern background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(168, 85, 247, 0.3) 2px, transparent 2px),
                           linear-gradient(90deg, rgba(168, 85, 247, 0.3) 2px, transparent 2px)`,
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      {/* Increased purple gradient in center */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-[#A855F7]/30 via-[#7C3AED]/10 to-transparent pointer-events-none"></div>
      
      {/* Navigation Bar */}
      <Navbar onBackToHome={onBackToHome} buttonText="Back to Home" />
      
      {/* Content */}
      <div className="relative z-10">
        <div className="flex pt-16 md:pt-32 items-start min-h-screen">
          {/* Left Side - Logo */}
          <div className="w-[40%] p-8 md:flex hidden items-center justify-center fixed left-0 top-0 h-screen">
            <div className="relative flex items-center justify-center">
              <img 
                src="src/assets/Ideatex_logo_final2.jpg" 
                alt="IdeateX Logo" 
                className="w-[32rem] h-[32rem] object-contain animate-pulse-slow"
              />
            </div>
          </div>
          
          <div className="md:w-[60%] w-full md:ml-[40%] md:p-8 p-6 pb-16 flex items-start justify-center">
            <Card className="w-full mx-auto bg-[#1a1a1a] border-2 border-purple-500/30 text-gray-100 rounded-2xl shadow-2xl shadow-purple-500/20">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-100">Login / Sign-up</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Registration Form */}
                <div className="space-y-4 p-6 rounded-xl bg-[#232323] border border-gray-800">
                  <h3 className="font-semibold text-gray-300 text-lg mb-4">Personal Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        className="block px-4 py-3.5 w-full text-gray-100 bg-[#2a2a2a] border border-gray-700 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 peer placeholder-transparent transition-all outline-none"
                        placeholder="Name"
                        required
                      />
                      <label
                        htmlFor="name"
                        className="absolute left-2 -top-2.5 bg-[#232323] px-2 text-sm text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3.5 peer-placeholder-shown:left-4 peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-sm peer-focus:text-purple-400"
                      >
                        Name
                      </label>
                    </div>

                    {/* Email */}
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        className="block px-4 py-3.5 w-full text-gray-100 bg-[#2a2a2a] border border-gray-700 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 peer placeholder-transparent transition-all outline-none"
                        placeholder="Email"
                        required
                      />
                      <label
                        htmlFor="email"
                        className="absolute left-2 -top-2.5 bg-[#232323] px-2 text-sm text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3.5 peer-placeholder-shown:left-4 peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-sm peer-focus:text-purple-400"
                      >
                        Email
                      </label>
                    </div>

                    {/* Phone */}
                    <div className="relative">
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        className="block px-4 py-3.5 w-full text-gray-100 bg-[#2a2a2a] border border-gray-700 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 peer placeholder-transparent transition-all outline-none"
                        placeholder="Phone Number"
                        required
                      />
                      <label
                        htmlFor="phone"
                        className="absolute left-2 -top-2.5 bg-[#232323] px-2 text-sm text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3.5 peer-placeholder-shown:left-4 peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-sm peer-focus:text-purple-400"
                      >
                        Phone Number
                      </label>
                    </div>

                    {/* Password */}
                    <div className="relative">
                      <input
                        type="password"
                        id="password"
                        value={formData.password}
                        onChange={(e) => handleChange('password', e.target.value)}
                        className="block px-4 py-3.5 w-full text-gray-100 bg-[#2a2a2a] border border-gray-700 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 peer placeholder-transparent transition-all outline-none"
                        placeholder="Password"
                        required
                      />
                      <label
                        htmlFor="password"
                        className="absolute left-2 -top-2.5 bg-[#232323] px-2 text-sm text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3.5 peer-placeholder-shown:left-4 peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-sm peer-focus:text-purple-400"
                      >
                        Password
                      </label>
                    </div>

                    {/* Roll No */}
                    <div className="relative">
                      <input
                        type="text"
                        id="rollNo"
                        value={formData.rollNo}
                        onChange={(e) => handleChange('rollNo', e.target.value)}
                        className="block px-4 py-3.5 w-full text-gray-100 bg-[#2a2a2a] border border-gray-700 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 peer placeholder-transparent transition-all outline-none"
                        placeholder="Roll Number"
                        required
                      />
                      <label
                        htmlFor="rollNo"
                        className="absolute left-2 -top-2.5 bg-[#232323] px-2 text-sm text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3.5 peer-placeholder-shown:left-4 peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-sm peer-focus:text-purple-400"
                      >
                        Roll Number
                      </label>
                    </div>

                    {/* College */}
                    <div className="relative">
                      <input
                        type="text"
                        id="college"
                        value={formData.college}
                        onChange={(e) => handleChange('college', e.target.value)}
                        className="block px-4 py-3.5 w-full text-gray-100 bg-[#2a2a2a] border border-gray-700 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 peer placeholder-transparent transition-all outline-none"
                        placeholder="College"
                        required
                      />
                      <label
                        htmlFor="college"
                        className="absolute left-2 -top-2.5 bg-[#232323] px-2 text-sm text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3.5 peer-placeholder-shown:left-4 peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-sm peer-focus:text-purple-400"
                      >
                        College
                      </label>
                    </div>

                    {/* Library ID */}
                    <div className="relative">
                      <input
                        type="text"
                        id="libId"
                        value={formData.libId}
                        onChange={(e) => handleChange('libId', e.target.value)}
                        className="block px-4 py-3.5 w-full text-gray-100 bg-[#2a2a2a] border border-gray-700 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 peer placeholder-transparent transition-all outline-none"
                        placeholder="Library ID"
                        required
                      />
                      <label
                        htmlFor="libId"
                        className="absolute left-2 -top-2.5 bg-[#232323] px-2 text-sm text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3.5 peer-placeholder-shown:left-4 peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-sm peer-focus:text-purple-400"
                      >
                        Library ID
                      </label>
                    </div>

                    {/* Gender */}
                    <div className="relative">
                      <select
                        id="gender"
                        value={formData.gender}
                        onChange={(e) => handleChange('gender', e.target.value)}
                        className="block px-4 py-3.5 w-full text-gray-100 bg-[#2a2a2a] border border-gray-700 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all outline-none appearance-none cursor-pointer"
                        required
                      >
                        <option value="" disabled hidden>
                          Select Gender
                        </option>
                        <option className="bg-[#2a2a2a]" value="Male">Male</option>
                        <option className="bg-[#2a2a2a]" value="Female">Female</option>
                        <option className="bg-[#2a2a2a]" value="Other">Other</option>
                      </select>
                      <label className="absolute left-2 -top-2.5 bg-[#232323] px-2 text-sm text-gray-400">
                        Gender
                      </label>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button
                    onClick={handleSubmit}
                    className="w-full py-6 bg-linear-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 transition-all text-white text-base font-semibold rounded-xl shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50"
                  >
                    Register
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
