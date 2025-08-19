"use client";
import React from "react";

const LoginPage = () => {
  return (
    <div className="h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left Side - Form (Scrollable) */}
      <div className="flex flex-col items-center justify-center px-6 md:px-20 py-10 overflow-y-auto">
        {/* Logo */}
        <h1 className="text-5xl font-bold mb-6 flex items-center">
          Welcome back
        </h1>
        <p className="text-gray-600 mb-6">Log in to your Linktree</p>

        {/* Form */}
        <form className="w-full max-w-md">
          <input
            type="text"
            placeholder="Email or username"
            className="w-full border border-gray-300 rounded-md px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-md font-semibold hover:opacity-90"
          >
            Continue
          </button>

          {/* Divider */}
          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="px-3 text-gray-500">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Social Buttons */}
          <button
            type="button"
            className="w-full border border-gray-300 py-3 rounded-md mb-4 flex items-center justify-center gap-2 hover:bg-gray-50"
          >
            <span className="text-xl">🌐</span> Continue with Google
          </button>
          <button
            type="button"
            className="w-full border border-gray-300 py-3 rounded-md flex items-center justify-center gap-2 hover:bg-gray-50"
          >
            <span className="text-xl">🍏</span> Continue with Apple
          </button>
        </form>

        {/* Links */}
        <div className="mt-6 text-sm text-center">
          <a href="#" className="text-purple-600 hover:underline">
            Forgot password?
          </a>{" "}
          •{" "}
          <a href="#" className="text-purple-600 hover:underline">
            Forgot username?
          </a>
        </div>
        <p className="mt-4 text-sm text-gray-600">
          Don’t have an account?{" "}
          <a href="/signup" className="text-purple-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>

      {/* Right Side - Image (Fixed) */}
      <div className="hidden lg:block">
        <img
          src="/Screenshot 2025-08-18 162023.png"
          alt="Login illustration"
          className="h-screen w-full object-cover"
        />
      </div>
    </div>
  );
};

export default LoginPage;
