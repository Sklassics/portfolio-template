import React from "react";

export default function HeroSection() {
  return (
    <section className="bg-[#0B0E1C] text-white px-6 md:px-20 py-20">
      {/* Testimonial Section */}
      <div className="text-center mb-32">
        <div className="flex justify-center mb-6">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="User"
            className="w-16 h-16 rounded-full border-2 border-white"
          />
        </div>
        <p className="text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed text-gray-300">
          <span className="font-bold text-white">
            As a busy professional, I don't have a lot of time to devote to
            working out.
          </span>{" "}
          But with this fitness program, I have seen amazing results in just a
          few short weeks. The workouts are efficient and effective.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
          <span className="px-4 py-1 border border-gray-500 rounded-full text-gray-400 font-semibold">
            Jessie J - Ltd Head of Product
          </span>
          <span className="px-4 py-1 border border-gray-500 rounded-full text-gray-400 font-semibold">
            Mark Luk - Spark Founder & CEO
          </span>
          <span className="px-4 py-1 border border-gray-500 rounded-full text-gray-400 font-semibold">
            Jeff Kahl - Appy Product Lead
          </span>
        </div>
      </div>

      {/* Hero Call to Action Section */}
      <div className="relative bg-gradient-to-br from-[#1b1437] via-[#5b2dab] to-[#120c27] rounded-3xl p-10 md:p-16 text-center shadow-xl max-w-5xl mx-auto">
        <div className="mb-4 text-sm text-purple-400 font-semibold">
          The security first platform
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-100 leading-tight mb-6">
          Take control of your business
        </h1>
        <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto mb-8">
          All the lorem ipsum generators on the Internet tend to repeat
          predefined chunks as necessary, making this the first true generator
          on the Internet.
        </p>
        <button className="mt-4 px-6 py-3 bg-white text-black rounded-full text-sm font-semibold hover:bg-gray-100 transition">
          Get Started →
        </button>
        <div className="absolute inset-0 rounded-3xl pointer-events-none" style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.05) 0%, transparent 70%)",
        }}></div>
      </div>
    </section>
  );
}