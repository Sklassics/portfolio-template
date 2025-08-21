import React, { useState, useEffect } from "react";



const CARD_TOP_PADDING = 1.5; // in em
const CARD_MARGIN = "4vw";
const CARD_HEIGHT = "87vh";

const ProjectSections = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 📱 Mobile Version
  if (isMobile) {
    return (
      <div className="w-full min-h-screen flex flex-col items-center bg-black px-2 py-6 gap-6 overflow-auto">
        {projects.map((project) => (
          <div
            key={project.key}
            className="w-full rounded-xl shadow-2xl border border-gray-700 bg-black overflow-hidden"
            style={{ minHeight: `360px`, maxWidth: 480, paddingBottom: "1rem" }}
          >
            <h1 className="text-3xl font-black mb-4 text-center text-white">{project.title}</h1>
            <p className="text-lg mb-6 text-center text-white">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-black transition text-lg font-semibold block mx-auto"
              style={{ minWidth: 220, textAlign: "center" }}
            >
              {project.linkText}
            </a>
          </div>
        ))}
      </div>
    );
  }

  // 💻 Desktop Sticky Scroll Version
  return (
    <div className="w-[90%] mx-auto bg-[#2E3537] text-white" style={{ fontFamily: "Arial, sans-serif" }}>
      <ul
        className="list-none grid grid-cols-1"
        style={{
          gridTemplateRows: `repeat(${projects.length}, ${CARD_HEIGHT})`,
          gap: CARD_MARGIN,
          paddingBottom: `${projects.length * CARD_TOP_PADDING}em`,
          marginBottom: CARD_MARGIN,
        }}
      >
        {projects.map((project, index) => {
          const reverseIndex = projects.length - index;
          return (
            <li
              key={project.key}
              className="sticky top-0"
              style={{
                paddingTop: `${reverseIndex * CARD_TOP_PADDING}em`,
                zIndex: reverseIndex,
              }}
            >
              <div
                className="rounded-[50px] shadow-2xl h-[87vh] flex flex-col justify-center items-center transition-all duration-500 bg-black px-8 text-center"
                style={{ boxShadow: "0 0 30px 0 rgba(0,0,0,0.3)" }}
              >
                <h1 className="text-4xl md:text-5xl font-black mb-6">{project.title}</h1>
                <p className="text-xl mb-8 leading-relaxed max-w-2xl">{project.description}</p>
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

export default ProjectSections;
