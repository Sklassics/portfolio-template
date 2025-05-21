import { useState, useRef, useEffect } from "react";
import getProjects from "./project.jsx";

const CARD_HEIGHT = 700; // px, adjust as needed

const ProjectSections = () => {
  const [current, setCurrent] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [moreInfo, setMoreInfo] = useState(false);
  const scrollTimeout = useRef(null);

  const scrollDelay = 500;

  const scrollNext = () => {
    if (scrollTimeout.current) return;
    if (current < projects.length - 1) {
      setCurrent((prev) => prev + 1);
      setExpanded(false);
      setMoreInfo(false);
      scrollTimeout.current = setTimeout(() => (scrollTimeout.current = null), scrollDelay);
    }
  };

  const scrollPrev = () => {
    if (scrollTimeout.current) return;
    if (current > 0) {
      setCurrent((prev) => prev - 1);
      setExpanded(false);
      setMoreInfo(false);
      scrollTimeout.current = setTimeout(() => (scrollTimeout.current = null), scrollDelay);
    }
  };

  const handleWheel = (e) => {
    e.preventDefault();
    if (e.deltaY > 0) scrollNext();
    else if (e.deltaY < 0) scrollPrev();
  };

  useEffect(() => {
    // document.body.style.overflow = "hidden";
    document.body.style.backgroundColor = "black";
    return () => {
      document.body.style.overflow = "auto";
      document.body.style.backgroundColor = "";
    };
  }, []);

  const projects = getProjects(expanded, setExpanded, moreInfo, setMoreInfo);

  return (
    <div
      className="h-screen w-screen flex items-center justify-center bg-black"
      tabIndex={0}
      onWheel={handleWheel}
      style={{ outline: "none", overflow: "hidden" }}
    >
      <div className="relative w-full max-w-7xl" style={{ height: `${CARD_HEIGHT}px` }}>
        {projects.map((content, i) => {
          let className =
            "absolute left-0 w-full transition-all duration-500 ease-in-out rounded-3xl shadow-2xl";
          let style = {
            height: `${CARD_HEIGHT}px`,
            opacity: 0,
            pointerEvents: "none",
            zIndex: 1,
            transform: "translateY(200%)",
          };
          if (i === current) {
            className += " bg-black/80 border border-gray-700";
            style = {
              ...style,
              opacity: 1,
              pointerEvents: "auto",
              zIndex: 10,
              transform: "translateY(0)",
            };
          } else if (i === current - 1) {
            style = {
              ...style,
              opacity: 0.4,
              zIndex: 5,
              transform: "translateY(-100%)",
            };
          } else if (i === current + 1) {
            style = {
              ...style,
              opacity: 0.4,
              zIndex: 5,
              transform: "translateY(100%)",
            };
          }
          return (
            <div key={i} className={className} style={style}>
              {content}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectSections;
