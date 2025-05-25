import React from "react";

export default function LandingPage() {
  return (
    <>
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a23] to-[#5c2d91] text-white relative overflow-hidden">
      {/* Background Stars */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20" />
      </div>

      {/* Navigation */}
      <header className="flex justify-between items-center px-6 md:px-20 py-6 z-10 relative">
        <div className="text-4xl font-bold text-purple-400">◎</div>
        <nav className="hidden md:flex gap-8 text-white font-medium">
          <a href="#" className="hover:text-purple-400">About</a>
          <a href="#" className="hover:text-purple-400">Integrations</a>
          <a href="#" className="hover:text-purple-400">Pricing</a>
          <a href="#" className="hover:text-purple-400">Customers</a>
          <a href="#" className="hover:text-purple-400">Changelog</a>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="hover:text-purple-400">Sign in</a>
          <button className="border border-purple-500 rounded-full px-4 py-2 hover:bg-purple-600 transition text-white text-sm">
            Sign up →
          </button>
        </div>
      </header>

      {/* Main Section */}
      <main className="z-10 relative flex flex-col items-center justify-center text-center px-6 md:px-20 pt-20 pb-28">
        <p className="bg-white/10 rounded-full px-4 py-1 text-sm mb-6 border border-purple-500 text-purple-300">
          API Studio is now in beta →
        </p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-100 mb-4">
          The <span className="text-white">API Security Framework</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl">
          Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-white text-black font-medium px-6 py-3 rounded-full shadow-md hover:bg-gray-200 transition">
            Get Started →
          </button>
          <button className="bg-purple-600 text-white font-medium px-6 py-3 rounded-full shadow-md flex items-center gap-2 hover:bg-purple-700 transition">
            ✨ Read the docs
          </button>
        </div>
      </main>
    </div>


</>

  );
}

