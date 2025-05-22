import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import getProjects from "./project.jsx";

const CARD_HEIGHT = 500; // px, adjust as needed

const ProjectSections = () => {
  const [current, setCurrent] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [moreInfo, setMoreInfo] = useState(false);
  const scrollTimeout = useRef(null);

  const scrollDelay = 400;

  const projects = getProjects(expanded, setExpanded, moreInfo, setMoreInfo);

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
    document.body.style.backgroundColor = "black";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div
      className="h-screen w-screen flex items-center justify-center bg-black"
      tabIndex={0}
      onWheel={handleWheel}
      style={{ outline: "none", overflow: "hidden" }}
    >
      <div className="relative w-full max-w-6xl min-w-[900px]" style={{ height: `${CARD_HEIGHT}px` }}>
        <AnimatePresence initial={false}>
          {projects.map((content, i) => {
            if (i === current) {
              // Center card (active)
              return (
                <motion.div
                  key={i}
                  className="absolute left-0 w-full rounded-3xl shadow-2xl border border-gray-700"
                  style={{
                    height: CARD_HEIGHT,
                    zIndex: 10,
                    background: "black", // <-- background color here
                  }}
                  initial={{ y: 100, scale: 0.96, opacity: 0 }}
                  animate={{ y: 0, scale: 1, opacity: 1 }}
                  exit={{ y: -100, scale: 0.96, opacity: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 80,
                    damping: 18,
                  }}
                >
                  {content}
                </motion.div>
              );
            }
            // Previous card (above)
            if (i === current - 1) {
              return (
                <motion.div
                  key={i}
                  className="absolute left-0 w-full rounded-3xl shadow-2xl border border-gray-700"
                  style={{
                    height: CARD_HEIGHT,
                    zIndex: 5,
                    pointerEvents: "none",
                    background: "black", // <-- background color here
                    opacity: 0.4,
                  }}
                  initial={{ y: -100, scale: 0.94, opacity: 0.4 }}
                  animate={{ y: -60, scale: 0.94, opacity: 0.4 }}
                  exit={{ y: -200, scale: 0.92, opacity: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 80,
                    damping: 18,
                  }}
                >
                  {content}
                </motion.div>
              );
            }
            // Next card (below)
            if (i === current + 1) {
              return (
                <motion.div
                  key={i}
                  className="absolute left-0 w-full rounded-3xl shadow-2xl border border-gray-700"
                  style={{
                    height: CARD_HEIGHT,
                    zIndex: 5,
                    pointerEvents: "none",
                    background: "black", // <-- background color here
                    opacity: 0.4,
                  }}
                  initial={{ y: 200, scale: 0.94, opacity: 0.4 }}
                  animate={{ y: 60, scale: 0.94, opacity: 0.4 }}
                  exit={{ y: 300, scale: 0.92, opacity: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 80,
                    damping: 18,
                  }}
                >
                  {content}
                </motion.div>
              );
            }
            return null;
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProjectSections;
