"use client";
import React from "react";

const signupPage = () => {
  return (
    <div className="h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left Side - Form */}
      <div className="flex flex-col items-center justify-center px-6 md:px-20 py-10 overflow-y-auto">
        {/* Logo */}
        <h1 className="text-5xl font-bold mb-6 flex items-center">
           Join Linktree
        </h1>
        <p className="text-gray-600 mb-6">Sign up for free!</p>

        {/* Form */}
        <form className="w-full max-w-md">
          <input
            type="text"
            placeholder="Email "
            className="w-full border border-gray-300 rounded-md px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <button
            type="submit"
            className="w-full bg-[#e0e2d9] text-[rgb(168,170,162)] py-3 rounded-md font-semibold hover:opacity-90"
          >
            Continue
          </button>
          <div className="text-[#676b5f]">
            By continuing, you agree to our <a href="#" className="text-purple-600 hover:underline">Terms of Service</a> and <a href="#" className="text-purple-600 hover:underline">Privacy Policy</a> and to receive offers, news and updates.
          </div>

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

        <p className="mt-4 text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-purple-600 hover:underline">
            Log in
          </a>
        </p>
      </div>

      {/* Right Side - Image */}
      <div className="hidden lg:block">
        <img
          src="/Screenshot 2025-08-18 165826.png"
          alt="Login illustration"
          className="h-screen w-full object-cover"
        />
      </div>
    </div>
  );
};

export default signupPage;
