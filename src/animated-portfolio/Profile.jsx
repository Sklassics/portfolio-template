import React from "react";
import DynamicTimestamp from "../components/ui/DynamicTimeStamp";

const AboutMe = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans px-6 py-10 relative">
      {/* Main content wrapper */}
      <div className="pt-14 max-w-8xl mx-auto relative rounded-xl bg-gradient-to-br from-black via-zinc-900 to-black p-6 border border-zinc-800 shadow-inner">
        
        {/* Top Labels */}
        <div className="absolute top-2 left-4 text-xs text-gray-400 tracking-widest"></div>
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
        <div className="absolute top-12 right-0 w-1 h-20 bg-gradient-to-b from-purple-500/50 to-transparent"></div>
        <div className="absolute top-12 left-0 w-1 h-20 bg-gradient-to-b from-purple-500/50 to-transparent"></div>

        {/* Main content */}
        <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
          
          {/* Text Content */}
          <div className="flex-1 space-y-8">
            <div>
              <h2 className="text-purple-500 text-sm tracking-widest">ABOUT ME</h2>
              <h1 className="text-4xl md:text-5xl font-bold text-white" style={{ textShadow: "0 0 8px rgba(128,0,255,0.5)" }}>
                <span className="text-purple-500">Hello, I'm</span> <br />
                Pieter Herman
              </h1>
            </div>

            <div className="space-y-4 text-gray-300">
              <div>
                <h3 className="text-purple-500 font-semibold">INTRODUCTION</h3>
                <p>
                  Freelance Developer located in Belgium, crafting extraordinary digital experiences through creative design and cutting-edge web development.
                </p>
              </div>

              <div>
                <h3 className="text-purple-500 font-semibold">CAPABILITIES</h3>
                <p>
                  My expertise lies in web development, mobile and desktop solutions. I am proficient in a variety of programming languages and frameworks, and I am always eager to learn new technologies.
                </p>
              </div>

              <div>
                <h3 className="text-purple-500 font-semibold">COMMUNICATION</h3>
                <p>
                  <span className="text-white font-bold">Let's connect</span> and discuss how I can help bring your digital vision to life.
                </p>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 flex justify-center relative">
            <div className="rounded-full bg-purple-700 p-2 relative shadow-[0_0_30px_rgba(168,85,247,0.6)]">
              <img
                src="https://images.pexels.com/photos/30569336/pexels-photo-30569336.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Pieter Herman"
                className="rounded-full w-90 h-90 object-cover"
              />
              <div className="absolute bottom-4 right-4 bg-black border border-purple-500 text-xs px-4 py-1 rounded-full text-white flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-500"></span>
                AVAILABLE APRIL 2025
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 flex justify-between text-xs text-gray-600 border-t border-gray-800 pt-4">
          <span>ACTIVE</span>
          <DynamicTimestamp />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
