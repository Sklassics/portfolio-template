import React from 'react'

const Projects = () => {
  return (
    <>  
    
      <div className="min-h-screen bg-black text-white font-sans  px-6 py-10  relative" id='projects'>

    {/* Terminal-like top bar */}
   
    {/* Main content wrapper */}
    <div className="pt-10 max-w-7xl mx-auto relative rounded-xl bg-gradient-to-br from-black via-zinc-900 to-black p-6 border border-zinc-800 shadow-inner">
      {/* Thin accent lines on corners */}
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



      {/* Inside INITIATE and Project Header */}
      <div className="flex items-center justify-between text-xs text-zinc-500 uppercase tracking-widest mb-3">
        <div>• Selected Project</div>
        <div>
          INITIATE PHX9000 <span className="inline-block w-2 h-2 bg-red-600 rounded-full ml-1"></span>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-white mb-6 pb-1 flex items-center gap-2">
        <span className="text-white">Paperquill</span>
        <span className="flex-1 h-px bg-purple-800"></span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-1 items-start">
        {/* Left Side */}
        <div className="relative w-full aspect-[3/2] rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
            alt="Woman with tablet"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute top-4 left-4 space-y-1 text-sm text-white font-semibold">
            <div>APP + WEB DESIGN + DEVELOPMENT</div>
            <div className="flex gap-2 mt-1">
              {['Next.js', 'Node.js', 'Rust', 'Azure'].map((tag) => (
                <span
                  key={tag}
                  className="bg-zinc-800/70 px-3 py-1 rounded-full text-xs border border-zinc-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="absolute bottom-4 left-4 text-white text-sm font-semibold">02</div>
          <div className="absolute bottom-4 right-4">
            <button className="bg-white/10 border border-zinc-500 hover:bg-white/20 text-white text-sm font-semibold px-6 py-2 rounded-full">
              EXPLORE PROJECT
            </button>
          </div>
        </div>

     
       {/* Right Side */}
       <div className="hidden md:flex justify-center items-center h-full">
  <div className="rounded-[2.5rem] bg-blue-900 p-2 shadow-inner w-full max-w-xs h-full flex items-center justify-center">
    <img
      src="https://images.pexels.com/photos/31187686/pexels-photo-31187686.jpeg?auto=compress&cs=tinysrgb&w=800"
      alt="Phone mockup with editor"
      className="rounded-[2rem] w-full h-full object-cover"
    />
  </div>
</div>


      </div>

      <div className="text-xs text-zinc-600 mt-6">ACTIVE</div>
    </div>

    <div className="text-right text-xs text-zinc-600 mt-2 pr-2">LOC: 2025-04-07</div>
  </div>
<div className="min-h-screen bg-black text-white font-sans px-6 py-10 relative">
    {/* Terminal-like top bar */}
   
    {/* Main content wrapper */}
    <div className="pt-14 max-w-7xl mx-auto relative rounded-xl bg-gradient-to-br from-black via-zinc-900 to-black p-6 border border-zinc-800 shadow-inner">
      {/* Thin accent lines on corners */}
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


      {/* Inside INITIATE and Project Header */}
      <div className="flex items-center justify-between text-xs text-zinc-500 uppercase tracking-widest mb-3">
        <div>• Selected Project</div>
        <div>
          INITIATE PHX9000 <span className="inline-block w-2 h-2 bg-red-600 rounded-full ml-1"></span>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-white mb-6 pb-1 flex items-center gap-2">
        <span className="text-white">Paperquill</span>
        <span className="flex-1 h-px bg-purple-800"></span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-1 items-start">
        {/* Left Side */}
        <div className="relative w-full aspect-[3/2] rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
            alt="Woman with tablet"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute top-4 left-4 space-y-1 text-sm text-white font-semibold">
            <div>APP + WEB DESIGN + DEVELOPMENT</div>
            <div className="flex gap-2 mt-1">
              {['Next.js', 'Node.js', 'Rust', 'Azure'].map((tag) => (
                <span
                  key={tag}
                  className="bg-zinc-800/70 px-3 py-1 rounded-full text-xs border border-zinc-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="absolute bottom-4 left-4 text-white text-sm font-semibold">02</div>
          <div className="absolute bottom-4 right-4">
            <button className="bg-white/10 border border-zinc-500 hover:bg-white/20 text-white text-sm font-semibold px-6 py-2 rounded-full">
              EXPLORE PROJECT
            </button>
          </div>
        </div>

        {/* Right Side */}
       {/* Right Side */}
       <div className="hidden md:flex justify-center items-center h-full">
  <div className="rounded-[2.5rem] bg-blue-900 p-2 shadow-inner w-full max-w-xs h-full flex items-center justify-center">
    <img
      src="https://images.pexels.com/photos/31187686/pexels-photo-31187686.jpeg?auto=compress&cs=tinysrgb&w=800"
      alt="Phone mockup with editor"
      className="rounded-[2rem] w-full h-full object-fill"
    />
  </div>
</div>

      </div>

      <div className="text-xs text-zinc-600 mt-6">ACTIVE</div>
    </div>

    <div className="text-right text-xs text-zinc-600 mt-2 pr-2">LOC: 2025-04-07</div>
  </div>
  </>
  )
}

export default Projects