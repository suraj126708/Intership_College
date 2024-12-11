// Home.js
import React from "react";
import { Link } from "react-router-dom";

function Hometwo() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="text-center text-white space-y-8">
        <h1 className="text-5xl font-bold">Cressendo- Your personal Speech Analyser</h1>
        <p className="text-lg font-medium">Navigate to your desired section below:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            to="/record"
            className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-100 transition"
          > 
            Record Video
          </Link>
          <Link
            to="/gallery"
            className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-purple-100 transition"
          >
            Video Gallery
          </Link>
          <Link
            to="/analysis"
            className="bg-white text-green-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-green-100 transition"
          >
            Analysis UI
          </Link>
          <Link
            to="/analysistwo"
            className="bg-white text-green-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-green-100 transition"
          >
            Analysis UI 2
          </Link>
          <Link
            to="/transcript"
            className="bg-white text-red-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-red-100 transition"
          >
            Transcript Runner
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hometwo;
