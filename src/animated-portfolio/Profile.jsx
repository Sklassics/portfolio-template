import React from "react";
import DynamicTimestamp from "../components/ui/DynamicTimeStamp";
import logo1 from "../assets/logo1.png"; // Adjust the path as necessary
const AboutCompany = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans px-6 py-10 relative">
      {/* Main content wrapper */}
      <div className="pt-14 max-w-8xl mx-auto relative rounded-xl bg-gradient-to-br from-black via-zinc-900 to-black p-6 border border-zinc-800 shadow-inner">

        {/* Top Labels */}
        <div className="absolute top-2 left-4 text-xs text-gray-400 tracking-widest">SKLASSICS INITIATED</div>
        <div className="absolute top-2 right-4 flex items-center gap-2 text-xs text-gray-400 tracking-widest">
          SYSTEM LIVE
          <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
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
        <div className="absolute top-12 right-0 w-1 h-20 bg-gradient-to-b from-purple-500/50 to-transparent"></div>
        <div className="absolute top-12 left-0 w-1 h-20 bg-gradient-to-b from-purple-500/50 to-transparent"></div>

        {/* Main content */}
        <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">

          {/* Text Content */}
          <div className="flex-1 space-y-8">
            <div>
              <h2 className="text-purple-500 text-sm tracking-widest">ABOUT US</h2>
              <h1 className="text-4xl md:text-5xl font-bold text-white" style={{ textShadow: "0 0 8px rgba(128,0,255,0.5)" }}>
                <span className="text-purple-500">We Are</span> <br />
                Sklassics Technologies Private Limited
              </h1>
            </div>

            <div className="space-y-4 text-gray-300">
              <div>
                <h3 className="text-purple-500 font-semibold">WHO WE ARE</h3>
                <p>
At      <span className="text-white font-bold">Sklassics</span>, we are passionate technology enablers committed to shaping the future through 
IT. We specialize in offering <span className="text-white font-bold">industry relevant IT training,</span> placement support, and <span className="text-white font-bold">custom 
digital solutions</span> that drive business and career growth. From startups to students, we 
empower every journey with innovation and impact.                </p>
              </div>

              <div>
                <h3 className="text-purple-500 font-semibold">OUR SERVICES</h3>
                <p>
We provide a comprehensive suite of offerings including: <br />
● Professional <span className="text-white font-bold"> IT Training & Job Placements </span><br />
● Custom <span className="text-white font-bold">Web & Mobile App Development </span><br />
● <span className="text-white font-bold">AI & Cloud Integration Solutions </span><br />
● <span className="text-white font-bold">Travel Agency Services</span> with tech-enabled tools <br />
● <span className="text-white font-bold">Workshop & Seminar Programs</span> in Colleges and Universities <br />
● And many more tailored IT services for businesses and individuals                </p>
              </div>

              <div>
                <h3 className="text-purple-500 font-semibold">OUR MISSION</h3>
                <p>
              mission is to <span className="text-white font-bold"> bridge the gap between talent and technology</span> by delivering value-driven 
solutions. We aim to transform lives and businesses through <span className="text-white font-bold">  quality education, digital 
innovation,</span> and <span className="text-white font-bold"> community engagement</span>, creating a future where technology uplifts everyone. 
                </p>
              </div>
            </div>
          </div>

          {/* Company Image or Logo */}
          <div className="flex-1 flex justify-center  relative">
            <div className="rounded-full  bg-white p-4 w-64 h-64 flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.6)]">
              <img
                src={logo1}
                alt="Sklassics Technologies"
                className="w-56 h-56 object-contain rounded-full"
              />
              <div className="absolute bottom-4 right-4 bg-black border border-purple-500 text-xs px-4 py-1 rounded-full text-white flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-500"></span>
                SINCE 2023
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 flex justify-between text-xs text-gray-600 border-t border-gray-800 pt-4">
          <span>OPERATING WORLDWIDE</span>
          <DynamicTimestamp />
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
