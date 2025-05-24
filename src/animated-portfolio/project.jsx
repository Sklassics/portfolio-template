import React from "react";

const getProjects = (expanded, setExpanded, moreInfo, setMoreInfo) => [
  // Project 1
  <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center p-8" key="p1">
    <div>
      <p className="text-gray-400 text-lg mb-2">(P 1)</p>
      <h1 className="text-5xl font-black mb-6">AI Interview Panel</h1>
    </div>
    <div>
      <div className="flex items-start justify-between">
        <p className="text-xl mb-6 leading-relaxed flex-1">
          An AI-powered panel that simulates real-world interview scenarios, helping candidates prepare confidently with intelligent feedback.
        </p>
      </div>
      <div className="border-t border-gray-600 my-6"></div>
      <div className="flex items-center justify-between w-full">
        <span className="text-2xl font-semibold">We learn from you</span>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 whitespace-nowrap">
          <button
            onClick={() => setExpanded((e) => !e)}
            className="text-2xl text-yellow-400 font-bold hover:text-yellow-300"
            aria-label={expanded ? "Close" : "Expand"}
          >
            {expanded ? "×" : "+"}
          </button>
          <div className="flex gap-2">
            <button
              onClick={() => setMoreInfo((m) => !m)}
              className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition text-sm sm:text-base font-medium"
            >
              Know More
            </button>
          <a
            href="https://ai-interview-main-17-05-2025.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
             className="border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black transition text-sm sm:text-base font-medium"
          >
            Explore More
          </a>
        </div>
      </div>
      </div>
      <div className="border-t border-gray-600 my-6"></div>
      {expanded && (
        <ul className="text-gray-300 list-disc ml-5 mt-4 space-y-1 text-lg">
          <li>Understand interview domains</li>
          <li>Simulate realistic HR & tech questions</li>
        </ul>
      )}
      {moreInfo && (
        <p className="text-gray-300 mt-4">
          This project uses advanced NLP and ML to mimic real interviews and provide feedback.
        </p>
      )}
    </div>
  </div>,

  // Project 2
  <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center p-8" key="p2">
    <div>
      <p className="text-gray-400 text-lg mb-2">(P 2)</p>
      <h1 className="text-5xl font-black mb-6">Hanuman Car Rental</h1>
    </div>
    <div>
      <div className="flex items-start justify-between">
        <p className="text-xl mb-6 leading-relaxed flex-1">
          A user-friendly car rental platform offering self-drive and chauffeur-driven cars with flexible plans, affordable pricing, and 24/7 support.
        </p>
      </div>
      <div className="border-t border-gray-600 my-6"></div>
      <div className="flex items-center justify-between w-full">
        <span className="text-2xl font-semibold">We drive your comfort</span>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 whitespace-nowrap">
          <button
            onClick={() => setExpanded((e) => !e)}
            className="text-2xl text-yellow-400 font-bold hover:text-yellow-300"
            aria-label={expanded ? "Close" : "Expand"}
          >
            {expanded ? "×" : "+"}
          </button>
          <div className="flex gap-2">
            <button
              onClick={() => setMoreInfo((m) => !m)}
              className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition text-sm sm:text-base font-medium"
            >
              Know More
            </button>
          <a
            href="https://hanumancars.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black transition text-sm sm:text-base font-medium"
          >
            Explore More
          </a>
        </div>
      </div>
      </div>
      <div className="border-t border-gray-600 my-6"></div>
      {expanded && (
        <ul className="text-gray-300 list-disc ml-5 mt-4 space-y-1 text-lg">
          <li>Book self-drive or chauffeur cars instantly</li>
          <li>Track availability, pricing, and trip history</li>
          <li>Manage fleet, bookings, and customer support</li>
        </ul>
      )}
      {moreInfo && (
        <p className="text-gray-300 mt-4">
          This project features a comprehensive admin panel for fleet management and real-time tracking of bookings and availability.
        </p>
      )}
    </div>
  </div>,

  // Project 3
  <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center p-8" key="p3">
    <div>
      <p className="text-gray-400 text-lg mb-2">(P 3)</p>
      <h1 className="text-5xl font-black mb-6">Sklassics Academy</h1>
    </div>
    <div>
      <div className="flex items-start justify-between">
        <p className="text-xl mb-6 leading-relaxed flex-1">
          An all-in-one learning management system (LMS), designed to streamline learning and batch-wise content delivery.
        </p>
      </div>
      <div className="border-t border-gray-600 my-6"></div>
      <div className="flex items-center justify-between w-full">
        <span className="text-2xl font-semibold">Learn digitally</span>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 whitespace-nowrap">
          <button
            onClick={() => setExpanded((e) => !e)}
            className="text-2xl text-yellow-400 font-bold hover:text-yellow-300"
            aria-label={expanded ? "Close" : "Expand"}
          >
            {expanded ? "×" : "+"}
          </button>
          <div className="flex gap-2">
            <button
              onClick={() => setMoreInfo((m) => !m)}
              className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition text-sm sm:text-base font-medium"
            >
              Know More
            </button>
            <a
              href="https://sklassicsacademy.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black transition text-sm sm:text-base font-medium"
            >
              Explore More
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-600 my-6"></div>
      {expanded && (
        <ul className="text-gray-300 list-disc ml-5 mt-4 space-y-1 text-lg">
          <li>Add, manage, and display courses via CMS</li>
          <li>Organize batch-wise learning content</li>
          <li>Interactive LMS with video references and batch tracking</li>
        </ul>
      )}
      {moreInfo && (
        <p className="text-gray-300 mt-4">
          The platform supports various media types for course content and offers analytics for tracking student progress.
        </p>
      )}
    </div>
  </div>,

  // Project 4
  <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center p-8" key="p4">
    <div>
      <p className="text-gray-400 text-lg mb-2">(P 4)</p>
      <h1 className="text-5xl font-black mb-6">Sklassics Online Training Courses</h1>
    </div>
    <div>
      <div className="flex items-start justify-between">
        <p className="text-xl mb-6 leading-relaxed flex-1">
          A modern e-learning platform offering online training courses with structured content, batch-wise tracking, and real-time updates from a powerful CMS.
        </p>
      </div>
      <div className="border-t border-gray-600 my-6"></div>
      <div className="flex items-center justify-between w-full">
        <span className="text-2xl font-semibold">Learn from anywhere</span>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 whitespace-nowrap">
          <button
            onClick={() => setExpanded((e) => !e)}
            className="text-2xl text-yellow-400 font-bold hover:text-yellow-300"
            aria-label={expanded ? "Close" : "Expand"}
          >
            {expanded ? "×" : "+"}
          </button>
          <div className="flex gap-2">
            <button
              onClick={() => setMoreInfo((m) => !m)}
              className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition text-sm sm:text-base font-medium"
            >
              Know More
            </button>
          <a
            href="https://sklassics.com"
            target="_blank"
            rel="noopener noreferrer"
             className="border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black transition text-sm sm:text-base font-medium"
          >
            Explore More
          </a>
        </div>
      </div>
      </div>
      <div className="border-t border-gray-600 my-6"></div>
      {expanded && (
        <ul className="text-gray-300 list-disc ml-5 mt-4 space-y-1 text-lg">
          <li>Live & recorded online training sessions</li>
          <li>Course and batch management via CMS</li>
          <li>Student-friendly LMS with instant access to learning material</li>
        </ul>
      )}
      {moreInfo && (
        <p className="text-gray-300 mt-4">
          Instructors can easily upload and manage course materials, and students receive notifications for new content and updates.
        </p>
      )}
    </div>
  </div>,

  // Project 5
  <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center p-8" key="p5">
    <div>
      <p className="text-gray-400 text-lg mb-2">(P 5)</p>
      <h1 className="text-5xl font-black mb-6">Online Tutoring Platform</h1>
    </div>
    <div>
      <div className="flex items-start justify-between">
        <p className="text-xl mb-6 leading-relaxed flex-1">
          An interactive online tutoring platform that delivers structured, learning through expert-led courses and real-time resource updates.
        </p>
      </div>
      <div className="border-t border-gray-600 my-6"></div>
      <div className="flex items-center justify-between w-full">
        <span className="text-2xl font-semibold">Learn by self</span>
       <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 ml-2 sm:gap-4 whitespace-nowrap">
          <button
            onClick={() => setExpanded((e) => !e)}
            className="text-2xl text-yellow-400 font-bold hover:text-yellow-300"
            aria-label={expanded ? "Close" : "Expand"}
          >
            {expanded ? "×" : "+"}
          </button>
          <div className="flex gap-2">
            <button
              onClick={() => setMoreInfo((m) => !m)}
              className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition text-sm sm:text-base font-medium"
            >
              Know More
            </button>
          <a
            href="https://sklassicstutor.com/"
            target="_blank"
            rel="noopener noreferrer"
             className="border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black transition text-base font-medium"
          >
            Explore More
          </a>
        </div>
      </div>
      </div>
      <div className="border-t border-gray-600 my-6"></div>
      {expanded && (
        <ul className="text-gray-300 list-disc ml-5 mt-4 space-y-1 text-lg">
          <li>Live and batch-based tutoring for various subjects</li>
          <li>CMS to manage tutors, courses, and learning links</li>
          <li>LMS for students to access tutoring content by batch</li>
        </ul>
      )}
      {moreInfo && (
        <p className="text-gray-300 mt-4">
          The platform includes features for progress tracking, assignment submissions, and real-time feedback from tutors.
        </p>
      )}
    </div>
  </div>,

  // Project 6
  <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center p-8" key="p6">
    <div>
      <p className="text-gray-400 text-lg mb-2">(P 6)</p>
      <h1 className="text-5xl font-black mb-6">Smart Loan Application System</h1>
    </div>
    <div>
      <div className="flex items-start justify-between">
        <p className="text-xl mb-6 leading-relaxed flex-1">
          A secure and automated loan application platform that streamlines the entire loan process—from user registration to approval tracking—designed for both customers and administrators.
        </p>
      </div>
      <div className="border-t border-gray-600 my-6"></div>
      <div className="flex items-center justify-between w-full">
        <span className="text-2xl font-semibold">Fast, secure, and paperless</span>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 whitespace-nowrap">
          <button
            onClick={() => setExpanded((e) => !e)}
            className="text-2xl text-yellow-400 font-bold hover:text-yellow-300"
            aria-label={expanded ? "Close" : "Expand"}
          >
            {expanded ? "×" : "+"}
          </button>
          <div className="flex gap-2">
            <button
              onClick={() => setMoreInfo((m) => !m)}
              className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition text-sm sm:text-base font-medium"
            >
              Know More
            </button>
          <a
            href="https://loan-application-app.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          className="border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black transition text-sm sm:text-base font-medium"
          >
            Explore More
          </a>
        </div>
      </div>
      </div>
      <div className="border-t border-gray-600 my-6"></div>
      {expanded && (
        <ul className="text-gray-300 list-disc ml-5 mt-4 space-y-1 text-lg">
          <li>Apply for loans with real-time eligibility checks</li>
          <li>Track application status and upload documents</li>
          <li>Admin panel to review, approve, or reject loans</li>
        </ul>
      )}
      {moreInfo && (
        <p className="text-gray-300 mt-4">
          The system incorporates secure document handling and offers users the ability to communicate with loan officers directly through the platform.
        </p>
      )}
    </div>
  </div>
];

export default getProjects;