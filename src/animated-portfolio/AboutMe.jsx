import { BookOpen } from "lucide-react";
import React, { useState } from "react";

const timelineData = [
  {
    year: "NOW",
    title: "Developer and Founder",
    company: "Specbia",
    details:
      "Leading development and strategy at Specbia, focusing on creating cutting-edge software products and fostering a team of innovative developers.",
  },
  {
    year: "2023",
    title: "Analyst Developer",
    company: "Argenta",
    details:
      "Worked on analyzing and developing internal tools to enhance banking operations, including API integration and reporting automation.",
  },
  {
    year: "2022",
    title: "React Developer",
    company: "Telenet",
    details:
      "Key contributor to the SPOT team as a React developer. Concentrated primarily on the Spot application, an immediate tool within the organization. The application caters to a diverse range of stakeholders. Tasked with identifying and rectifying application issues. Engaged in the application’s continuous enhancement, improving usability.",
  },
  {
    year: "2021",
    title: "Front-End Developer",
    company: "VRT",
    details:
      "Collaborated with design and backend teams to build responsive user interfaces for media streaming applications and internal tools.",
  },
];

export default function AboutMe() {
  const [showDetails, setShowDetails] = useState({});

  const toggleDetails = (index) => {
    setShowDetails((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans px-6 py-10 relative">
      <div className="pt-14 max-w-8xl mx-auto relative rounded-xl bg-gradient-to-br from-black via-zinc-900 to-black p-6 border border-zinc-800 shadow-inner">
        <div className="absolute top-2 left-4 text-xs text-gray-400 tracking-widest">ABOUT</div>
        <div className="absolute top-2 right-4 flex items-center gap-2 text-xs text-gray-400 tracking-widest">
          INITIATE PHX9000
          <span className="h-2 w-2 rounded-full bg-red-600 animate-pulse"></span>
        </div>

        {/* Corner accents */}
        <span className="absolute top-0 left-0 h-4 w-0.5 bg-purple-500 rounded-sm"></span>
        <span className="absolute top-0 right-0 h-4 w-0.5 bg-indigo-500 rounded-sm"></span>
        <span className="absolute bottom-0 left-0 h-4 w-0.5 bg-indigo-500 rounded-sm"></span>
        <span className="absolute bottom-0 right-0 h-4 w-0.5 bg-purple-500 rounded-sm"></span>
        <span className="absolute top-0 left-0 w-4 h-0.5 bg-purple-500 rounded-sm"></span>
        <span className="absolute top-0 right-0 w-4 h-0.5 bg-indigo-500 rounded-sm"></span>
        <span className="absolute bottom-0 left-0 w-4 h-0.5 bg-indigo-500 rounded-sm"></span>
        <span className="absolute bottom-0 right-0 w-4 h-0.5 bg-purple-500 rounded-sm"></span>
        <div class="absolute top-12 right-0 w-1 h-20 bg-gradient-to-b from-purple-500/50 to-transparent"></div>
        <div class="absolute top-12 left-0 w-1 h-20 bg-gradient-to-b from-purple-500/50 to-transparent"></div>


        {/* Timeline Content */}
        <div className="relative z-10 w-full max-w-6xl mx-auto">
          <div className="border border-[#2d2d2d] rounded-md p-4">
            <p className="text-xs text-gray-400 uppercase">History</p>
            <h2 className="text-xl sm:text-2xl font-semibold mt-2">Here is my journey</h2>
            <span className="flex-1 h-px bg-purple-800"></span>
          </div>

          <div className="mt-10 space-y-12 relative">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className="relative z-10 flex flex-col sm:flex-row sm:items-start gap-4 cursor-pointer group pl-4"
                onClick={() => toggleDetails(index)}
              >
                <div className="absolute top-0 bottom-0 left-0 w-1.5 rounded-md bg-gradient-to-b from-fuchsia-500 via-purple-500 to-blue-500" />

                <div className="flex flex-col items-center w-24 shrink-0 relative z-10">
                  <div
                    className="w-3 h-3 bg-fuchsia-600 rounded-full border-2 border-black z-20"
                    style={{ position: "absolute", left: "calc(50% - 0.375rem)", top: "0.75rem" }}
                  />
                  <div className="text-3xl font-bold text-white mt-4">{item.year}</div>
                  <button
                    className="mt-4 bg-fuchsia-700 text-white text-xs px-4 py-1 rounded-full  whitespace-nowrap h-10 hover:bg-fuchsia-600 transition flex items-center gap-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleDetails(index);
                    }}
                  >
                    <BookOpen size={16} />
                    {showDetails[index] ? "Show Less" : "Read More"}
                  </button>
                </div>

                <div className="flex-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 relative z-10">
                  <h3
                    className="text-xl font-semibold text-white mb-1 hover:text-fuchsia-400 transition"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleDetails(index);
                    }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400">{item.company}</p>
                  {showDetails[index] && (
                    <p className="text-sm text-gray-300 mt-4">{item.details}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-xs text-gray-500 flex justify-between">
            <span>ACTIVE</span>
            <span>LOC: 2025-04-08</span>
          </div>
        </div>
      </div>
    </div>
  );
}  
