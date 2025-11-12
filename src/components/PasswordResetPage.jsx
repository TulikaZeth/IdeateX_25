import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Navbar from "./Navbar";

const PasswordResetPage = ({ onBackToHome }) => {
  const [step, setStep] = useState(1); // 1: Email, 2: OTP, 3: New Password
  const [formData, setFormData] = useState({
    email: "",
    otp: "",
    newPassword: "",
    confirmPassword: ""
  });
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    setError("");
  };

  // Step 1: Request OTP
  const handleRequestOTP = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    try {
      const response = await fetch('http://localhost:3000/api/v1/user/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email
        })
      });

      if (response.ok) {
        setSuccess("OTP sent to your email!");
        setStep(2);
      } else {
        const data = await response.json();
        setError(data.message || "Failed to send OTP");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Resend OTP
  const handleResendOTP = async () => {
    setLoading(true);
    setError("");
    
    try {
      const response = await fetch('http://localhost:5000/api/v1/user/resend-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email
        })
      });

      if (response.ok) {
        setSuccess("OTP resent successfully!");
      } else {
        const data = await response.json();
        setError(data.message || "Failed to resend OTP");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Step 2: Verify OTP and proceed to password reset
  const handleVerifyOTP = (e) => {
    e.preventDefault();
    if (formData.otp.length < 4) {
      setError("Please enter a valid OTP");
      return;
    }
    setStep(3);
    setSuccess("");
  };

  // Step 3: Reset Password
  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError("");

    // Validate passwords match
    if (formData.newPassword !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    if (formData.newPassword.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    setLoading(true);
    
    try {
      const response = await fetch('http://localhost:5000/api/v1/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          otp: formData.otp,
          newPassword: formData.newPassword
        })
      });

      if (response.ok) {
        setSuccess("Password reset successfully! Redirecting to login...");
        setTimeout(() => {
          window.location.href = "/login";
        }, 2000);
      } else {
        const data = await response.json();
        setError(data.message || "Failed to reset password");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
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
                Reset Password
              </h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mt-3"></div>
              <p className="text-center text-gray-400 mt-2">
                {step === 1 && "Enter your email to receive OTP"}
                {step === 2 && "Enter the OTP sent to your email"}
                {step === 3 && "Set your new password"}
              </p>
            </div>
            
            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Success Message */}
              {success && (
                <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 text-sm text-center">
                  {success}
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm text-center">
                  {error}
                </div>
              )}

              {/* Step Progress Indicator */}
              <div className="flex items-center justify-center space-x-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${step >= 1 ? 'bg-purple-500 text-white' : 'bg-gray-700 text-gray-400'}`}>
                  1
                </div>
                <div className={`w-12 h-0.5 ${step >= 2 ? 'bg-purple-500' : 'bg-gray-700'}`}></div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${step >= 2 ? 'bg-purple-500 text-white' : 'bg-gray-700 text-gray-400'}`}>
                  2
                </div>
                <div className={`w-12 h-0.5 ${step >= 3 ? 'bg-purple-500' : 'bg-gray-700'}`}></div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${step >= 3 ? 'bg-purple-500 text-white' : 'bg-gray-700 text-gray-400'}`}>
                  3
                </div>
              </div>

              {/* Step 1: Email Input */}
              {step === 1 && (
                <form onSubmit={handleRequestOTP} className="space-y-6">
                  <div className="space-y-4 p-6 rounded-xl bg-[#232323] border border-gray-800">
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
                        Email Address
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-[#A855F7] to-[#7C3AED] hover:from-[#9333EA] hover:to-[#6D28D9] text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-purple-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Sending..." : "Send OTP"}
                  </button>
                </form>
              )}

              {/* Step 2: OTP Input */}
              {step === 2 && (
                <form onSubmit={handleVerifyOTP} className="space-y-6">
                  <div className="space-y-4 p-6 rounded-xl bg-[#232323] border border-gray-800">
                    <div className="relative">
                      <input
                        type="text"
                        id="otp"
                        value={formData.otp}
                        onChange={(e) => handleChange('otp', e.target.value)}
                        className="block px-4 py-3.5 w-full text-gray-100 bg-[#2a2a2a] border border-gray-700 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 peer placeholder-transparent transition-all outline-none text-center text-2xl tracking-widest"
                        placeholder="OTP"
                        maxLength="6"
                        required
                      />
                      <label
                        htmlFor="otp"
                        className="absolute left-4 -top-2.5 bg-[#2a2a2a] px-2 text-sm text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-purple-400"
                      >
                        Enter OTP
                      </label>
                    </div>

                    <div className="text-center">
                      <button
                        type="button"
                        onClick={handleResendOTP}
                        disabled={loading}
                        className="text-sm text-purple-400 hover:text-purple-300 transition-colors underline disabled:opacity-50"
                      >
                        Resend OTP
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-[#A855F7] to-[#7C3AED] hover:from-[#9333EA] hover:to-[#6D28D9] text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-purple-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Verify OTP
                  </button>
                </form>
              )}

              {/* Step 3: New Password Input */}
              {step === 3 && (
                <form onSubmit={handleResetPassword} className="space-y-6">
                  <div className="space-y-4 p-6 rounded-xl bg-[#232323] border border-gray-800">
                    <div className="relative">
                      <input
                        type={showNewPassword ? "text" : "password"}
                        id="newPassword"
                        value={formData.newPassword}
                        onChange={(e) => handleChange('newPassword', e.target.value)}
                        className="block px-4 py-3.5 w-full pr-12 text-gray-100 bg-[#2a2a2a] border border-gray-700 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 peer placeholder-transparent transition-all outline-none"
                        placeholder="New Password"
                        required
                      />
                      <label
                        htmlFor="newPassword"
                        className="absolute left-4 -top-2.5 bg-[#2a2a2a] px-2 text-sm text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-purple-400"
                      >
                        New Password
                      </label>
                      <button
                        type="button"
                        onClick={() => setShowNewPassword(!showNewPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-purple-400 transition-colors"
                      >
                        {showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>

                    <div className="relative">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        id="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={(e) => handleChange('confirmPassword', e.target.value)}
                        className="block px-4 py-3.5 w-full pr-12 text-gray-100 bg-[#2a2a2a] border border-gray-700 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 peer placeholder-transparent transition-all outline-none"
                        placeholder="Confirm Password"
                        required
                      />
                      <label
                        htmlFor="confirmPassword"
                        className="absolute left-4 -top-2.5 bg-[#2a2a2a] px-2 text-sm text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-purple-400"
                      >
                        Confirm Password
                      </label>
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-purple-400 transition-colors"
                      >
                        {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>

                    {formData.newPassword && formData.confirmPassword && (
                      <div className={`text-sm text-center ${formData.newPassword === formData.confirmPassword ? 'text-green-400' : 'text-red-400'}`}>
                        {formData.newPassword === formData.confirmPassword ? '✓ Passwords match' : '✗ Passwords do not match'}
                      </div>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-[#A855F7] to-[#7C3AED] hover:from-[#9333EA] hover:to-[#6D28D9] text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-purple-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Resetting..." : "Reset Password"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordResetPage;
