import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Navbar from "./Navbar";

const LoginPage = ({ onBackToHome }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
    // API call will be implemented here
  };

  const handleForgotPassword = () => {
    window.location.href = "/reset-password";
  };

  return (
    <div className="relative min-h-screen bg-[#0A0118] text-gray-100 overflow-hidden">
      <Navbar onBackToHome={onBackToHome} buttonText="Back to Home" />

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)] opacity-30" />
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#A855F7]/25 via-[#7C3AED]/10 to-transparent" />

      {/* Main Content Container */}
      <div className="relative flex min-h-screen pt-20">
        {/* Left Side - Logo */}
        <div className="w-[40%] p-8 md:flex hidden items-center justify-center fixed left-0 top-0 h-screen">
          <div className="relative flex items-center justify-center">
            <img 
              src="src/assets/Ideatex_logo_final2.png" 
              alt="IdeateX Logo" 
              className="w-[32rem] h-[32rem] object-contain animate-pulse-slow"
            />
          </div>
        </div>
        
        <div className="md:w-[60%] w-full md:ml-[40%] md:p-8 p-6 pb-16 flex items-center justify-center min-h-screen">
          <div className="w-full max-w-md mx-auto bg-[#1a1a1a] border-2 border-purple-500/30 text-gray-100 rounded-2xl shadow-2xl shadow-purple-500/20">
            {/* Header */}
            <div className="p-6 pb-0">
              <h2 className="text-3xl font-bold text-center text-white">
                Login
              </h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mt-3"></div>
              <p className="text-center text-gray-400 mt-2">Welcome back to IDEATEX 2025</p>
            </div>
            
            {/* Content */}
            <div className="p-6 space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Login Form */}
                <div className="space-y-4 p-6 rounded-xl bg-[#232323] border border-gray-800">
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
                      className="absolute left-4 -top-2.5 bg-[#2a2a2a] px-2 text-sm text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-purple-400"
                    >
                      Email
                    </label>
                  </div>

                  {/* Password */}
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      value={formData.password}
                      onChange={(e) => handleChange('password', e.target.value)}
                      className="block px-4 py-3.5 w-full pr-12 text-gray-100 bg-[#2a2a2a] border border-gray-700 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 peer placeholder-transparent transition-all outline-none"
                      placeholder="Password"
                      required
                    />
                    <label
                      htmlFor="password"
                      className="absolute left-4 -top-2.5 bg-[#2a2a2a] px-2 text-sm text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-purple-400"
                    >
                      Password
                    </label>
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>

                  {/* Forgot Password Button */}
                  <div className="text-right">
                    <button
                      type="button"
                      onClick={handleForgotPassword}
                      className="text-sm text-purple-400 hover:text-purple-300 transition-colors underline"
                    >
                      Forgot Password?
                    </button>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#A855F7] to-[#7a718b] hover:from-[#9333EA] hover:to-[#6D28D9] text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-purple-500/30"
                  onClick={() => window.location.href = "/team-dashboard"}
                >
                  Login
                </button>

                {/* Sign Up Link */}
                <div className="text-center text-gray-400 text-sm">
                  Don't have an account?{" "}
                  <button
                    type="button"
                    onClick={() => window.location.href = "/register"}
                    className="text-purple-400 hover:text-purple-300 font-semibold underline"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
