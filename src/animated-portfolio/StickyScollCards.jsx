import React, { useState, useEffect } from "react";

const projects = [
  {
    key: "p1",
    title: "IT Training and Placements 2024",
    description:
      "Industry-relevant IT training programs with placement support for students and professionals.",
    link: "https://sklassics.com",
    linkText: "Explore Sklassics.com",
  },
  {
    key: "p2",
    title: "IT Services 2024",
    description:
      "Custom web, mobile, AI, and cloud solutions for businesses of all sizes.",
    link: "https://sklassicstech.com",
    linkText: "Explore Sklassicstech.com",
  },
  {
    key: "p3",
    title: "Online and Offline Tutoring Services",
    description:
      "Flexible tutoring for students—live, batch-based, and self-paced learning options.",
    link: "https://sklassicstutor.com",
    linkText: "Explore Sklassicstutor.com",
  },
  {
    key: "p4",
    title: "AI Interview Mock Applications",
    description:
      "Practice interviews with AI-driven feedback and real-world scenarios.",
    link: "https://sklassics-ai.com",
    linkText: "Explore Sklassics-ai.com",
  },
  {
    key: "p5",
    title: "LMS Application Services",
    description:
      "Modern learning management systems for schools, colleges, and corporates.",
    link: "https://sklassics-lms.com",
    linkText: "Explore Sklassics-lms.com",
  },
  {
    key: "p6",
    title: "Quiz Application Services",
    description:
      "Interactive quiz platforms for education, recruitment, and events.",
    link: "https://sklassics-quiz.com",
    linkText: "Explore Sklassics-quiz.com",
  },
  {
    key: "p7",
    title: "Travelling Services",
    description:
      "Reliable car rental and travel solutions for individuals and businesses.",
    link: "https://hanumancars.com",
    linkText: "Explore Hanumancars.com",
  },
  {
    key: "p8",
    title: "Loan Application Services",
    description:
      "Secure, automated loan application and management platform for customers and admins.",
    link: "https://sklassics-loan.com",
    linkText: "Explore Sklassics-loan.com",
  },
];

const CARD_TOP_PADDING = 1.5; // em
const CARD_HEIGHT = 87; // vh

const StickyScrollCards = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // tailwind sm breakpoint
    };

    handleResize(); // run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    // MOBILE: Normal vertical scroll
    return (
      <div className=" bg-black min-h-screen p-4 space-y-6">
        {projects.map((project) => (
          <div
            key={project.key}
            className="rounded-[50px] shadow-2xl bg-black p-6 flex flex-col items-center text-center"
            style={{ boxShadow: "0 0 30px 0 rgba(0,0,0,0.3)" }}
          >
            <h1 className="text-3xl font-black mb-4 text-white">{project.title}</h1>
            <p className="text-lg mb-6 text-white">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition text-lg font-semibold"
              style={{ minWidth: 220 }}
            >
              {project.linkText}
            </a>
          </div>
        ))}
      </div>
    );
  }

  // DESKTOP: Sticky scroll effect with layered cards
  return (
    <div
      className="w-[90%] mx-auto bg-[#2E3537]"
      style={{ minHeight: "100vh", fontFamily: "Arial, sans-serif" }}
    >
      <ul
        className="list-none grid grid-cols-1"
        style={{
          gridTemplateRows: `repeat(${projects.length}, ${CARD_HEIGHT}vh)`,
          gap: "4vw",
          paddingBottom: `${projects.length * CARD_TOP_PADDING}em`,
          marginBottom: "4vw",
        }}
      >
        {projects.map((project, index) => {
          // zIndex so each next card is in front
          return (
            <li
              key={project.key}
              className="sticky top-0 bg-black"
              style={{
                paddingTop: `${(index + 1) * CARD_TOP_PADDING}em`,
                zIndex: index + 1, // <-- This makes each next card appear in front
              }}
            >
              <div
                className="rounded-[10px] shadow-2xl h-[87vh] flex flex-col justify-center items-center transition-all duration-500 bg-black px-8 text-center"
                style={{ boxShadow: "0 0 30px 0 rgba(0,0,0,0.3)" }}
              >
                <h1 className="text-4xl md:text-5xl font-black mb-6 text-white">
                  {project.title}
                </h1>
                <p className="text-xl mb-8 leading-relaxed max-w-2xl text-white">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-black transition text-lg font-semibold"
                  style={{ minWidth: 220, textAlign: "center" }}
                >
                  {project.linkText}
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default StickyScrollCards;
