"use client";

import React from "react";
import { Button } from "@/app/components/ui/button";

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  return (
    <div className="flex items-center justify-center gap-3 mt-8">
      {/* Previous Button */}
      <Button
        className={`px-4 py-2 text-sm font-medium rounded-md ${
          currentPage === 1
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-blue-600 text-white hover:bg-blue-700"
        }`}
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Previous
      </Button>

      {/* Page Numbers */}
      <div className="hidden md:flex gap-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => onPageChange(i + 1)}
            className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors ${
              currentPage === i + 1
                ? "bg-yellow-400 text-black"
                : "bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* Next Button */}
      <Button
        className={`px-4 py-2 text-sm font-medium rounded-md ${
          currentPage === totalPages
            ? "bg-gray-300 text-gray-900 cursor-not-allowed"
            : "bg-blue-600 text-white hover:bg-blue-700"
        }`}
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </Button>
    </div>
  );
}
