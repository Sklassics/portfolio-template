import React from "react";

const getProjects = (expanded, setExpanded, moreInfo, setMoreInfo) => [
  // IT Training and Placements 2024
  <div className="w-full h-full min-h-screen flex flex-col justify-center items-center p-0 m-0" key="p1">
    <h1 className="text-4xl md:text-5xl font-black mb-6 text-center">IT Training and Placements 2024</h1>
    <p className="text-xl mb-8 leading-relaxed text-center max-w-2xl">
      Industry-relevant IT training programs with placement support for students and professionals.
    </p>
    <a
      href="https://sklassics.com"
      target="_blank"
      rel="noopener noreferrer"
      className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-black transition text-lg font-semibold"
      style={{ minWidth: 220, textAlign: "center" }}
    >
      Explore Sklassics.com
    </a>
  </div>,

  // IT Services 2024
  <div className="w-full h-full min-h-screen flex flex-col justify-center items-center p-0 m-0" key="p2">
    <h1 className="text-4xl md:text-5xl font-black mb-6 text-center">IT Services 2024</h1>
    <p className="text-xl mb-8 leading-relaxed text-center max-w-2xl">
      Custom web, mobile, AI, and cloud solutions for businesses of all sizes.
    </p>
    <a
      href="https://sklassicstech.com"
      target="_blank"
      rel="noopener noreferrer"
      className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-black transition text-lg font-semibold"
      style={{ minWidth: 220, textAlign: "center" }}
    >
      Explore Sklassicstech.com
    </a>
  </div>,

  // Online and Offline Tutoring Services
  <div className="w-full h-full min-h-screen flex flex-col justify-center items-center p-0 m-0" key="p3">
    <h1 className="text-4xl md:text-5xl font-black mb-6 text-center">Online and Offline Tutoring Services</h1>
    <p className="text-xl mb-8 leading-relaxed text-center max-w-2xl">
      Flexible tutoring for students—live, batch-based, and self-paced learning options.
    </p>
    <a
      href="https://sklassicstutor.com"
      target="_blank"
      rel="noopener noreferrer"
      className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-black transition text-lg font-semibold"
      style={{ minWidth: 220, textAlign: "center" }}
    >
      Explore Sklassicstutor.com
    </a>
  </div>,

  // AI Interview Mock Applications
  <div className="w-full h-full min-h-screen flex flex-col justify-center items-center p-0 m-0" key="p4">
    <h1 className="text-4xl md:text-5xl font-black mb-6 text-center">AI Interview Mock Applications</h1>
    <p className="text-xl mb-8 leading-relaxed text-center max-w-2xl">
      Practice interviews with AI-driven feedback and real-world scenarios.
    </p>
    <a
      href="https://sklassics-ai.com"
      target="_blank"
      rel="noopener noreferrer"
      className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-black transition text-lg font-semibold"
      style={{ minWidth: 220, textAlign: "center" }}
    >
      Explore Sklassics-ai.com
    </a>
  </div>,

  // LMS Application Services
  <div className="w-full h-full min-h-screen flex flex-col justify-center items-center p-0 m-0" key="p5">
    <h1 className="text-4xl md:text-5xl font-black mb-6 text-center">LMS Application Services</h1>
    <p className="text-xl mb-8 leading-relaxed text-center max-w-2xl">
      Modern learning management systems for schools, colleges, and corporates.
    </p>
    <a
      href="https://sklassics-lms.com"
      target="_blank"
      rel="noopener noreferrer"
      className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-black transition text-lg font-semibold"
      style={{ minWidth: 220, textAlign: "center" }}
    >
      Explore Sklassics-lms.com
    </a>
  </div>,

  // Quiz Application Services
  <div className="w-full h-full min-h-screen flex flex-col justify-center items-center p-0 m-0" key="p6">
    <h1 className="text-4xl md:text-5xl font-black mb-6 text-center">Quiz Application Services</h1>
    <p className="text-xl mb-8 leading-relaxed text-center max-w-2xl">
      Interactive quiz platforms for education, recruitment, and events.
    </p>
    <a
      href="https://sklassics-quiz.com"
      target="_blank"
      rel="noopener noreferrer"
      className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-black transition text-lg font-semibold"
      style={{ minWidth: 220, textAlign: "center" }}
    >
      Explore Sklassics-quiz.com
    </a>
  </div>,

  // Travelling Services
  <div className="w-full h-full min-h-screen flex flex-col justify-center items-center p-0 m-0" key="p7">
    <h1 className="text-4xl md:text-5xl font-black mb-6 text-center">Travelling Services</h1>
    <p className="text-xl mb-8 leading-relaxed text-center max-w-2xl">
      Reliable car rental and travel solutions for individuals and businesses.
    </p>
    <a
      href="https://hanumancars.com"
      target="_blank"
      rel="noopener noreferrer"
      className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-black transition text-lg font-semibold"
      style={{ minWidth: 220, textAlign: "center" }}
    >
      Explore Hanumancars.com
    </a>
  </div>,

  // Loan Application Services
  <div className="w-full h-full min-h-screen flex flex-col justify-center items-center p-0 m-0" key="p8">
    <h1 className="text-4xl md:text-5xl font-black mb-6 text-center">Loan Application Services</h1>
    <p className="text-xl mb-8 leading-relaxed text-center max-w-2xl">
      Secure, automated loan application and management platform for customers and admins.
    </p>
    <a
      href="https://sklassics-loan.com"
      target="_blank"
      rel="noopener noreferrer"
      className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-black transition text-lg font-semibold"
      style={{ minWidth: 220, textAlign: "center" }}
    >
      Explore Sklassics-loan.com
    </a>
  </div>,
];

export default getProjects;