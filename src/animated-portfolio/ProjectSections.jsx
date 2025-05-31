import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import getProjects from "./project.jsx";

const MOBILE_CARD_HEIGHT = 360;
const MOBILE_MAX_WIDTH = 640;
const CARD_HEIGHT = 500;
const SCROLL_COOLDOWN = 900;

const ProjectSections = () => {
  const [current, setCurrent] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [moreInfo, setMoreInfo] = useState(false);
  const [scrollReleased, setScrollReleased] = useState(false);
  const [cardHeight, setCardHeight] = useState(CARD_HEIGHT);
  const [isMobile, setIsMobile] = useState(window.innerWidth < MOBILE_MAX_WIDTH);
  const [active, setActive] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const sectionRef = useRef(null);
  const lastScrollDirection = useRef(0);
  const prevActive = useRef(active);

  const projects = getProjects(expanded, setExpanded, moreInfo, setMoreInfo);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < MOBILE_MAX_WIDTH;
      setCardHeight(mobile ? MOBILE_CARD_HEIGHT : CARD_HEIGHT);
      setIsMobile(mobile);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = "black";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [isMobile]);

  useEffect(() => {
    const preventScroll = (e) => {
      if (!scrollReleased) {
        e.preventDefault();
        return false;
      }
    };

    const blockKeys = (e) => {
      const keys = ["ArrowUp", "ArrowDown", "Space", "PageUp", "PageDown"];
      if (!scrollReleased && keys.includes(e.code)) {
        e.preventDefault();
        return false;
      }
    };

    if (!isMobile && active && !scrollReleased) {
      document.body.style.overflow = "hidden";
      window.addEventListener("wheel", preventScroll, { passive: false });
      window.addEventListener("touchmove", preventScroll, { passive: false });
      window.addEventListener("keydown", blockKeys, { passive: false });
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
      window.removeEventListener("keydown", blockKeys);
    };
  }, [active, scrollReleased, isMobile]);

  useEffect(() => {
    const onWheel = (e) => {
      lastScrollDirection.current = Math.sign(e.deltaY);
    };
    window.addEventListener("wheel", onWheel, { passive: true });
    return () => window.removeEventListener("wheel", onWheel);
  }, []);

  useEffect(() => {
    if (
      active &&
      !prevActive.current &&
      lastScrollDirection.current > 0
    ) {
      setScrollReleased(false);
    }
    prevActive.current = active;
  }, [active]);

  const handleWheel = (e) => {
    if (!active || scrollReleased || isAnimating) return;

    const direction = Math.sign(e.deltaY);
    if (direction === 0) return;

    if (direction > 0) {
      // Scroll down (scroll-jack)
      if (current < projects.length - 1) {
        setIsAnimating(true);
        setCurrent((prev) => prev + 1);
        setTimeout(() => setIsAnimating(false), SCROLL_COOLDOWN);
      }

      if (current === projects.length - 1) {
        setScrollReleased(true);
      }

      e.preventDefault(); // Only prevent scroll down
    } else {
      // Scroll up — allow default scroll behavior
      setScrollReleased(true);
    }
  };

  if (isMobile) {
    return (
      <div className="w-full min-h-screen flex flex-col items-center bg-black px-2 py-6 gap-6 overflow-auto">
        {projects.map((content, i) => (
          <div
            key={i}
            className="w-full rounded-xl shadow-2xl border border-gray-700 bg-black overflow-hidden"
            style={{ minHeight: `${MOBILE_CARD_HEIGHT}px`, maxWidth: 480, paddingBottom: "1rem" }}
          >
            {content}
          </div>
        ))}
      </div>
    );
  }

  return (
    <section
      ref={sectionRef}
      className="relative w-full flex items-center justify-center bg-black"
      style={{
        minHeight: "100vh",
        height: "100vh",
        overflow: scrollReleased ? "auto" : "hidden",
        position: "relative",
      }}
      tabIndex={0}
      onWheel={handleWheel}
    >
      <div
        className="relative w-full max-w-6xl"
        style={{
          height: `${cardHeight}px`,
          minWidth: "900px",
        }}
      >
        <AnimatePresence initial={false}>
          {projects.map((content, i) => {
            if (i === current) {
              return (
                <motion.div
                  key={i}
                  className="absolute left-0 w-full rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-700"
                  style={{ height: cardHeight, zIndex: 10, background: "black" }}
                  initial={{ y: 100, scale: 0.96, opacity: 0 }}
                  animate={{ y: 0, scale: 1, opacity: 1 }}
                  exit={{ y: -100, scale: 0.96, opacity: 0 }}
                  transition={{ type: "tween", duration: 0.8, ease: "easeInOut" }}
                >
                  {content}
                </motion.div>
              );
            }

            if (i === current - 1 || i === current + 1) {
              return (
                <motion.div
                  key={i}
                  className="absolute left-0 w-full rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-700"
                  style={{
                    height: cardHeight,
                    zIndex: 5,
                    pointerEvents: "none",
                    background: "black",
                    opacity: 0.4,
                  }}
                  initial={{ y: i < current ? -100 : 200, scale: 0.94, opacity: 0.4 }}
                  animate={{ y: i < current ? -60 : 60, scale: 0.94, opacity: 0.4 }}
                  exit={{ y: i < current ? -200 : 300, scale: 0.92, opacity: 0 }}
                  transition={{ type: "tween", duration: 0.8, ease: "easeInOut" }}
                >
                  {content}
                </motion.div>
              );
            }

            return null;
          })}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectSections;
