// import React from "react";

// export default function SecuritySection() {
//   return (
//     <section className="bg-[#0B1120] text-white py-20 px-4 md:px-10 lg:px-20">
//       <div className="text-center mb-16">
//         <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Faster. Smarter.</h2>
//         <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
//           There are many variations available, but the majority have suffered alteration in some form,
//           by injected humour, or randomised words which don't look even slightly believable.
//         </p>
//       </div>

//       <div className="bg-gradient-to-br from-[#1E1B4B] to-[#1E1B4B]/60 rounded-3xl p-6 md:p-10 flex flex-col lg:flex-row items-center lg:items-start gap-10 max-w-6xl mx-auto">
//         <div className="flex-1 text-left">
//           <h3 className="text-2xl font-semibold mb-4">Optimized for security</h3>
//           <p className="text-gray-400 mb-6">
//             Optimize for user experience and privacy. Use social login integrations, lower user friction,
//             incorporate rich user profiling, and facilitate more transactions.
//           </p>
//           <button className="px-6 py-2 rounded-full border border-gray-600 text-white hover:bg-white hover:text-black transition-all text-sm">
//             Learn more →
//           </button>
//         </div>

//         <div className="flex-1 relative w-full h-[350px] sm:h-[400px] md:h-[450px]">
//           <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#5B21B6]/40 to-[#7C3AED]/10 blur-2xl opacity-60" />
//           <div className="absolute inset-0 flex flex-wrap justify-center items-center gap-4 p-4">
//             {[
//               "Transactions", "Bot Detection", "Convenience", "Anonymous User",
//               "Registration", "Privacy & Security", "Universal Login",
//               "Social Integrations", "Directory", "Progressive Profiling"
//             ].map((label, i) => (
//               <span
//                 key={i}
//                 className="bg-purple-600/80 text-white text-xs md:text-sm font-medium px-4 py-1 rounded-full shadow-md hover:scale-105 transition-transform cursor-default"
//               >
//                 {label}
//               </span>
//             ))}
//             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black p-4 rounded-2xl border border-gray-700">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
//               </svg>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";

export default function Faster() {
  return (
    <section className="bg-[#0a1026] py-16 px-2 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white text-center mb-4">
          Faster. Smarter.
        </h2>
        <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-12 text-base sm:text-lg">
          There are many variations available, but the majority have suffered alteration in some form,
          by injected humour, or randomised words which don't look even slightly believable.
        </p>

        {/* Card */}
        <div className="bg-[#11182b] border border-zinc-700 rounded-2xl shadow-xl flex flex-col md:flex-row items-center md:items-stretch overflow-hidden"
             style={{ minHeight: 400 }}>
          {/* Left: Text */}
          <div className="flex-1 flex flex-col justify-center p-8 sm:p-12">
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">
              <span className="font-bold">Optimized for security</span>
            </h3>
            <p className="text-zinc-400 mb-8 text-base sm:text-lg">
              Optimize for user experience and privacy. Use social login integrations, lower user friction, incorporate rich user profiling, and facilitate more transactions.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-600 text-white font-medium hover:bg-purple-700/20 transition text-sm w-auto"
              style={{ alignSelf: "flex-start" }}
            >
              Learn more <span className="text-purple-400">&rarr;</span>
            </a>
          </div>
          {/* Right: Image */}
          <div className="flex-1 flex items-center justify-center relative min-h-[250px] bg-transparent">
            {/* Paste your image link below */}
            <img
              src="https://preview.cruip.com/stellar/images/feature-image-01.png"
              alt="Security Visualization"
              className="w-full max-w-[420px] h-auto object-contain mx-auto"
              style={{ filter: "drop-shadow(0 0 60px #a78bfa66)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}