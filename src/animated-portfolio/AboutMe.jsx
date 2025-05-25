import { BookOpen, ArrowRight } from "lucide-react";
import React, { useState } from "react";
import DynamicTimestamp from "../components/ui/DynamicTimeStamp";

const timelineData = [
  {
    year: "2024",
    title: "Hanuman Car Rental",
    company: "Specbia",
    details:
      "A long-drive car rental platform built using the MERN stack. Features include user booking, car filters, admin CMS, and responsive UI. Integrated Firebase for image storage.",
  },
  {
    year: "2024",
    title: "Loan Management System",
    company: "Specbia",
    details:
      "Loan application system with client and admin portals. Built using React, Redux Toolkit, Node.js, and MongoDB. Allows loan tracking, approvals, and status updates.",
  },
  {
    year: "2024",
    title: "LMS – Sklassics Academy",
    company: "Specbia",
    details:
      "A learning management system with course and batch management. Built in React with Firebase Firestore, it allows reference links to be added dynamically via CMS and filtered in LMS.",
  },
  {
    year: "2024",
    title: "Sklassics Tutor",
    company: "Specbia",
    details:
      "Personalized tutoring platform that connects tutors and students. Features include scheduling, course structure, and profile onboarding built in React with Firebase.",
  },
];

export default function AboutMe() {
  const [showDetails, setShowDetails] = useState({});

  const toggleDetails = (index) => {
    setShowDetails((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 py-10">
      <div className="max-w-6xl mx-auto bg-gradient-to-br from-black via-zinc-900 to-black p-6 border border-zinc-800 rounded-xl shadow-inner relative">
        <div className="absolute top-2 left-4 text-xs text-gray-400 tracking-widest">
          JOURNEY
        </div>
        <div className="absolute top-2 right-4 flex items-center gap-2 text-xs text-gray-400 tracking-widest">
          INITIATE PHX9000
          <span className="h-2 w-2 rounded-full bg-red-600 animate-pulse" />
        </div>

        <div className="mt-4 space-y-12">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className="relative z-10 flex flex-col sm:flex-row sm:items-start gap-4 group pl-4"
              onClick={() => toggleDetails(index)}
            >
              <div className="absolute top-0 bottom-0 left-0 w-1.5 rounded-md bg-gradient-to-b from-fuchsia-500 via-purple-500 to-blue-500" />

              {/* Year & Read Button */}
              <div className="flex flex-col items-center w-24 shrink-0 relative z-10">
                <div
                  className="w-3 h-3 bg-fuchsia-600 rounded-full border-2 border-black z-20"
                  style={{
                    position: "absolute",
                    left: "calc(50% - 0.375rem)",
                    top: "0.75rem",
                  }}
                />
                <div className="text-xl font-bold text-white mt-4">{item.year}</div>
                <button
                  className="mt-4 bg-fuchsia-700 hover:bg-fuchsia-600 text-white text-xs px-4 py-1 rounded-full transition flex items-center gap-1"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleDetails(index);
                  }}
                >
                  <BookOpen size={14} />
                  {showDetails[index] ? "Less" : "Read"}
                </button>
              </div>

              {/* Detail Card */}
              <div className="flex-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 relative z-10">
                <div className="flex justify-between items-start">
                  <h3
                    className="text-lg sm:text-xl font-semibold text-white mb-1 hover:text-fuchsia-400 transition cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleDetails(index);
                    }}
                  >
                    {item.title}
                  </h3>
                  <button
                    className="bg-purple-700 hover:bg-purple-600 transition text-white text-xs px-4 py-1 rounded-full flex items-center gap-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      alert(`Exploring ${item.title}`);
                    }}
                  >
                    Explore <ArrowRight size={14} />
                  </button>
                </div>
                <p className="text-sm text-gray-400">{item.company}</p>
                {showDetails[index] && (
                  <p className="text-sm text-gray-300 mt-4">{item.details}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Timestamp */}
        <div className="mt-12 text-xs text-gray-500 flex justify-between">
          <span>ACTIVE</span>
          <DynamicTimestamp />
        </div>
      </div>
    </div>
  );
}
