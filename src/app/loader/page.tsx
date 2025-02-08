"use client";
import React, { useState, useEffect } from "react";

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "auto"; // Enable scrolling after loading
    }, 1000); // 9 seconds delay

    document.body.style.overflow = "hidden"; // Prevent scrolling during loading

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto"; // Cleanup: Ensure scrolling is enabled
    };
  }, []);

  if (!loading) return null; // Hide loader after timeout

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-r from-gray-900 via-black to-gray-900 z-50">
      <div className="w-16 h-16 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
