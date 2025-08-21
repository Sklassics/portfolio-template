import React from 'react';
import { FaRegSquare, FaRegUser, FaArrowsAltH } from 'react-icons/fa';

const AuthHero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d0b33] to-[#0b0e2e] text-white flex items-center px-10 md:px-20">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left Content */}
        <div className="z-10">
          <p className="text-sm text-purple-300 font-medium">The <span className="text-purple-500">security</span> first platform</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-4">
            Simplify your security with<br />
            <span className="text-purple-200">authentication services</span>
          </h1>
          <p className="text-gray-400 mt-4">
            Define access roles for the end-users, and extend your authorization capabilities
            to implement dynamic access control.
          </p>

          {/* Buttons */}
          <div className="mt-8 space-y-3">
            <button className="flex items-center gap-3 px-4 py-3 border border-purple-500 rounded-md w-fit bg-purple-600 hover:bg-purple-700">
              <FaRegSquare />
              <span className="font-medium">Simplify your security</span>
            </button>
            <button className="flex items-center gap-3 px-4 py-3 border border-gray-600 rounded-md w-fit hover:bg-gray-800">
              <FaRegUser />
              <span>Customer identity</span>
            </button>
            <button className="flex items-center gap-3 px-4 py-3 border border-gray-600 rounded-md w-fit hover:bg-gray-800">
              <FaArrowsAltH />
              <span>Adaptable authentication</span>
            </button>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative flex justify-center items-center">
          <div className="absolute w-[300px] h-[300px] rounded-full bg-purple-800 blur-3xl opacity-40"></div>
          <div className="relative w-36 h-36 bg-[#101222] rounded-xl grid place-items-center border border-purple-600">
            <span className="text-3xl">⚡</span>
          </div>
          {/* Grid overlay (optional visual) */}
          <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-px pointer-events-none opacity-10">
            {[...Array(36)].map((_, i) => (
              <div key={i} className="border border-purple-500"></div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AuthHero;
