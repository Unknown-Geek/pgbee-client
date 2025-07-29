"use client";

import { FcGoogle } from "react-icons/fc";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function SignupPage() {
  const router = useRouter();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [emailValid, setEmailValid] = useState<null | boolean>(null);

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSignup = async () => {
    if (!firstName || !lastName) {
      alert("Please enter your full name.");
      return;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    if (!agreeTerms) {
      alert("You must agree to the terms to sign up.");
      return;
    }

    try {
      await fetchDetails();
      alert("Signup successful!");
      router.push("/"); 
    } catch (error) {
      console.error("Signup error:", error);
    }
  };


  useEffect(() => {
    if (email === "") {
      setEmailValid(null);
    } else {
      setEmailValid(validateEmail(email));
    }
  }, [email]);

  // fetch details
  const fetchDetails = async () => {
    try {
      const response = await axios.post("https://server.pgbee.in/api/v1/auth/signup", {
        email,
        password,
      }
      );
    } catch (error) {
      console.error("Error fetching details:", error);
      alert("Something went wrong. Please try again.");
    }
  }

  return (
    <div className="relative min-h-screen bg-[#f9f9f9] flex flex-col items-center justify-center overflow-hidden">
      {/* Background Hexagons */}
      {/*<img src="/Group2.png" alt="hexagon" className="absolute top-0 left-240 w-376.5px h-75 
           "></img>
            <img src="/Group 3.png" alt="hexagon" className="absolute top-100 left-0 w-500.5px h-200 "></img>*/}

      {/* Logo Heading */}
      <h1 className="absolute top-6 left-1/2 transform -translate-x-1/2 text-5xl font-extrabold text-center z-20">
        <span className="text-yellow-400">Pg</span>
        <span className="text-black">Bee</span>
      </h1>

      {/* Signup Form */}
      <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-xl z-10">
        {/* Tabs */}
        <div className="flex mb-6 rounded-lg overflow-hidden border border-gray-300">
          <button className="w-1/2 py-2 bg-black text-white font-medium">Sign up</button>
          <button
            onClick={() => router.push("/login")}
            className="w-1/2 py-2 bg-white text-black font-medium"
          >
            Log in
          </button>
        </div>

        {/* Google Sign Up */}
        <button className="w-full flex items-center justify-center gap-2 border border-gray-400 py-2 rounded-xl mb-6 hover:bg-gray-100">
          <FcGoogle size={24} />
          Sign up with Google
        </button>

        {/* Divider */}
        <div className="flex items-center justify-center mb-6">
          <hr className="w-1/3 border-gray-300" />
          <span className="mx-2 text-gray-400 text-sm">OR</span>
          <hr className="w-1/3 border-gray-300" />
        </div>

        {/* First and Last Name */}
        <div className="flex gap-2 mb-4">
          <div className="w-1/2">
            <label className="block text-sm mb-1 text-gray-700">First name</label>
            <input
              type="text"
              placeholder="Enter your first name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="w-1/2">
            <label className="block text-sm mb-1 text-gray-700">Last name</label>
            <input
              type="text"
              placeholder="Enter your last name"
              title="Last name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>

        {/* Email */}
        <div className="mb-2">
          <label className="block text-sm mb-1 text-gray-700">Email</label>
          <input
            type="email"
            placeholder="Enter your email address"
            className={`w-full px-4 py-2 border ${emailValid === false ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-2 ${emailValid === false ? "focus:ring-red-500" : "focus:ring-black"
              }`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailValid === false && (
            <p className="text-red-500 text-sm mt-1">❌ Please enter a valid email address</p>
          )}
          {emailValid === true && (
            <p className="text-green-600 text-sm mt-1">✅ Valid email address</p>
          )}
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-sm mb-1 text-gray-700">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md pr-4 focus:outline-none focus:ring-2 focus:ring-black"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className="flex items-start gap-2 mb-6 text-sm">
          <input
            type="checkbox"
            checked={agreeTerms}
            onChange={() => setAgreeTerms(!agreeTerms)}
            className="mt-1"
            title="Agree to terms and conditions"
            placeholder="Agree to terms and conditions"
          />
          <p className="text-gray-700">
            By creating an account, I agree to the{" "}
            <a href="#" className="text-blue-600 underline">Terms of use</a> and{" "}
            <a href="#" className="text-blue-600 underline">Privacy Policy</a>.
          </p>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSignup}
          className="w-full bg-black text-white py-3 rounded-xl font-medium hover:bg-gray-800"
          disabled={!agreeTerms}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}