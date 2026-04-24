"use client";

import { useState } from "react";

export default function Home() {
  const [summary, setSummary] = useState("");

  const handleClick = async () => {
    const res = await fetch("/api/summarize");
    const data = await res.json();
    setSummary(data.content);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-6">
      
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-3xl">
        
        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500 mb-2">
          AI Notes Summarizer
        </h1>
        
        <p className="text-center text-gray-500 mb-6">
          Get instant summaries using AI 🚀
        </p>

        {/* Content Box */}
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Notes */}
          <div className="bg-gray-100 p-4 rounded-xl">
            <h2 className="font-semibold mb-2 text-indigo-600">Your Notes</h2>
            <p className="text-sm text-gray-700">
              Click the button to load notes
            </p>
          </div>

          {/* Output */}
          <div className="bg-green-100 p-4 rounded-xl">
            <h2 className="font-semibold mb-2 text-green-700">Output</h2>
            <p className="text-sm text-gray-800">
              {summary || "Your summary will appear here..."}
            </p>
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={handleClick}
            className="px-6 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-indigo-600 to-pink-500 hover:scale-105 transition"
          >
            ✨ Get Summary
          </button>
        </div>
      </div>
    </div>
  );
}