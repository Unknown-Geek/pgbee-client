"use client";

import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captchaChecked, setCaptchaChecked] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleLogin = async() => {
    let valid = true;

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      valid = false;
    } else {
      setEmailError("");
    }

    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters.");
      valid = false;
    } else {
      setPasswordError("");
    }

    if (!captchaChecked) {
      alert("Please verify that you're not a robot.");
      valid = false;
    }

    if (valid) {
      alert("Login successful!");

      try {
        await fetchDetails(); 
        alert("Login successful!");
        router.push("/"); 
      }catch (error) {
        console.error("Error during login fetch:", error);
        alert("Something went wrong. Please try again.");
      }
    }
  };

  // fetching details 
  const fetchDetails = async () => {
    try {
      const response = await axios.post("https://server.pgbee.in/auth/login", {
        withCredentials: true,
        email,
        password,
        "student"
      });

      console.log("Fetched details:", response.data);
    } catch (error) {
      console.error("Error fetching details:", error);
      alert("Something went wrong. Please try again.");
    }
  };


  return (
    <div className="min-h-screen bg-[#f9f9f9] flex items-center justify-center relative">
      {/* Background Hexagons */}
      {/*<img src="/Group2.png" alt="hexagon" className="absolute top-0 left-240 w-376.5px h-75 
           "></img>
            <img src="/Group 3.png" alt="hexagon" className="absolute top-100 left-0 w-500.5px h-200 "></img>*/}

      {/* Logo Heading */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-20 mt-4">
        <Image src="/PgBee.png" alt="PgBee Logo" width= {120} height={50} />
      </div>

      {/* Login Card */}
      <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-xl z-10">
        {/* Tabs */}
        <div className="flex mb-6 rounded-lg overflow-hidden border border-gray-300">
          <button onClick={() => router.push("/signup")} className="w-1/2 py-2 bg-white text-black font-medium">Sign up</button>
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

        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-sm mb-1 text-gray-700">Email</label>
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
        </div>

        {/* Password Field */}
        <div className="mb-2">
          <label className="block text-sm mb-1 text-gray-700">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
        </div>

        {/* Forgot Password */}
        <div className="text-right mb-4">
          <a href="#" className="text-sm text-gray-500 hover:underline">Forgot Your Password?</a>
        </div>

        {/* Captcha */}
        <div className="mb-6">
          <label className="block text-sm mb-1 text-gray-700">Verify Captcha</label>
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 gap-2">
            <input type="checkbox" checked={captchaChecked} placeholder="I’m not a robot" onChange={() => setCaptchaChecked(!captchaChecked)} />
            <span className="text-sm">I’m not a robot</span>
            <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" className="h-6 ml-auto" />
          </div>
        </div>

        {/* Submit Button */}
        <button onClick={handleLogin} className="w-full bg-black text-white py-3 rounded-xl font-medium hover:bg-gray-800">
          Log In
        </button>
      </div>
    </div>
  );
}
