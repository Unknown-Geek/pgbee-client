"use client";

import { FcGoogle } from "react-icons/fc";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captchaChecked, setCaptchaChecked] = useState(false);

  return (
    <div className="min-h-screen bg-[#f9f9f9] flex items-center justify-center">
      <img src="/Group2.png" alt="hexagon" className="absolute top-0 left-240 w-376.5px h-75 
           "></img>
            <img src="/Group2.png" alt="hexagon" className="absolute top-110 left-75 w-376.5px h-75 -scale-x-100 -scale-y-100"></img> 

            {/* ===== Background Hexagons ===== */}                                     

      <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-xl">
        {/* Tabs */}
        <div className="flex mb-6 rounded-lg overflow-hidden border border-gray-300">
          <button className="w-1/2 py-2 bg-white text-black font-medium">Sign up</button>
          <button className="w-1/2 py-2 bg-black text-white font-medium">Log in</button>
        </div>

        {/* Google Login Button */}
        <button className="w-full flex items-center justify-center gap-2 border border-gray-400 py-2 rounded-xl mb-6 hover:bg-gray-100">
          <FcGoogle size={24} />
          Log In with Google
        </button>

        {/* Divider */}
        <div className="flex items-center justify-center mb-6">
          <hr className="w-1/3 border-gray-300" />
          <span className="mx-2 text-gray-400 text-sm">OR</span>
          <hr className="w-1/3 border-gray-300" />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm mb-1 text-gray-700">Email</label>
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password */}
        <div className="mb-2">
          <label className="block text-sm mb-1 text-gray-700">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Forgot Password */}
        <div className="text-right mb-4">
          <a href="#" className="text-sm text-gray-500 hover:underline">Forgot Your Password?</a>
        </div>

        {/* Captcha */}
        <div className="mb-6">
          <label className="block text-sm mb-1 text-gray-700">Verify Captcha</label>
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 gap-2">
            <input
              type="checkbox"
              checked={captchaChecked}
              onChange={() => setCaptchaChecked(!captchaChecked)}
            />
            <span className="text-sm">I’m not a robot</span>
            <img
              src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
              alt="reCAPTCHA"
              className="h-6 ml-auto"
            />
          </div>
        </div>

        {/* Login Button */}
        <button className="w-full bg-black text-white py-3 rounded-xl font-medium hover:bg-gray-800">
          Log In
        </button>
      </div>
    </div>
  );
}
