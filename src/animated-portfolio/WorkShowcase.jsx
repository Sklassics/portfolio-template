import React, { useState, useRef, useEffect } from "react";
import ai from "../assets/ai.png";


const works = [
  {
    id: 1,
    title: "AI Interview Panel",
    subtitle: "That simulates real-world interview scenarios",
    builtInYear: "BUILT IN 2023",
    hoverText: "AI Interview Panel uses NLP and machine learning to evaluate answers, provide insights, and mimic human-like interviews across various domains.",
    image:ai,
  },
  {
    id: 2,
    title: "Hanuman Car Rental",
    subtitle: "An all-in-one learning management system ",
    builtInYear: "BUILT IN 2022",
    hoverText: "Hanuman Car Rental is a full-fledged car booking solution that streamlines both customer and admin experiences.",
    image: "https://img.freepik.com/free-vector/car-rental-concept-illustration_114360-9916.jpg?ga=GA1.1.1227952131.1734597731&semt=ais_hybrid&w=740",
  },
  {
    id: 3,
    title: "Sklassics Academy",
    subtitle: "Content Automation Tools",
    builtInYear: "BUILT IN 2024",
    hoverText: "Access structured learning content, track progress, and explore interactive resources tailored to your course and batch.",
    image: "https://img.freepik.com/premium-vector/digital-class_701961-507.jpg?ga=GA1.1.1227952131.1734597731&semt=ais_hybrid&w=740",
  },
  {
    id: 4,
    title: "Online Tutoring Platform",
    subtitle: "An interactive online tutoring platform",
    builtInYear: "BUILT IN 2024",
    hoverText: "Designed for students seeking personalized tutoring in subjects like Web Development, Data Science, and more.",
    image: "https://img.freepik.com/premium-vector/online-courses-illustrated-design_23-2148539619.jpg?ga=GA1.1.1227952131.1734597731&semt=ais_hybrid&w=740",
  },
  {
    id: 5,
    title: "Smart Loan Application System",
    subtitle: "A secure and automated loan application platform",
    builtInYear: "BUILT IN 2024",
    hoverText: "Simplifies the loan process with secure document upload and application tracking.",
    image: "https://img.freepik.com/premium-vector/bank-login-concept-illustration_86047-725.jpg?ga=GA1.1.1227952131.1734597731&semt=ais_hybrid&w=740",
  },
  {
  id: 6,
  title: "Creative Dashboards Using Power BI",
  subtitle: "Interactive business intelligence dashboards",
  builtInYear: "BUILT IN 2024",
  hoverText: "Transforms complex data into insightful, visual dashboards for smarter decision-making.",
  image: "https://img.freepik.com/free-vector/dashboard-template-user-panel_52683-31486.jpg?ga=GA1.1.1227952131.1734597731&semt=ais_hybrid&w=740"
  },
  {
  id: 7,
  title: "Animated UI Website",
  subtitle: "Visually engaging website with smooth animations",
  builtInYear: "BUILT IN 2024",
  hoverText: "Delivers a dynamic user experience with interactive elements and fluid transitions.",
  image: "https://img.freepik.com/premium-vector/web-development-programming-languages-css-html-it-ui-programmer-cartoon-character-developing-website-coding-flat-vector-illustration-banner-website_128772-2241.jpg?ga=GA1.1.1227952131.1734597731&semt=ais_hybrid&w=740"
  },
  {
  id: 8,
  title: "E-commerce Website",
  subtitle: "Seamless online shopping experience",
  builtInYear: "BUILT IN 2024",
  hoverText: "Features user-friendly navigation, secure payments, and dynamic product displays.",
  image: "https://img.freepik.com/premium-vector/smiling-shopaholic-people-doing-shopping-online-big-sales-discounts-purchase-goods-via-internet-consumer-society-commercial-business-vector_776652-3013.jpg?ga=GA1.1.1227952131.1734597731&semt=ais_hybrid&w=740"
  },
  {
  id: 9,
  title: "SklassicsTech.com",
  subtitle: "Official website for Sklassics Academy",
  builtInYear: "BUILT IN 2025",
  hoverText: "Showcases courses, workshops, and learning resources with a clean, modern design.",
  image: "https://img.freepik.com/free-vector/hand-drawn-flat-design-api-illustration_52683-84601.jpg?ga=GA1.1.1227952131.1734597731&w=740"

  },
  {
  id: 10,
  title: "SklassicsWorld.com",
  subtitle: "Comprehensive portfolio of Sklassics projects",
  builtInYear: "BUILT IN 2025",
  hoverText: "Highlights the journey, innovations, and achievements of Sklassics through an elegant portfolio.",
  image: "https://img.freepik.com/premium-vector/website-webpage-illustration-monitor-screen-clip-art-white-background_1278800-8817.jpg?ga=GA1.1.1227952131.1734597731&w=740"

  },
];

const WorkShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  const cardWidth = 500;
  const cardHeight = 650;
  const visibleCards = 2;
  const cardGap = 24;
  const peekWidth = 300; // to show partial next/prev

  useEffect(() => {
    if (containerRef.current) {
      const offset = currentIndex * (cardWidth + cardGap);
      containerRef.current.style.transform = `translateX(-${offset - peekWidth}px)`;
    }
  }, [currentIndex]);

  const next = () => {
    if (currentIndex < works.length - visibleCards) {
      setCurrentIndex((prev) => Math.min(prev + 1, works.length - visibleCards));
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  const dotsCount = works.length - visibleCards + 1;

  return (
    <div className="relative bg-[black] p-8 text-white max-w-full mx-auto h-full rounded-xl overflow-hidden">
      <h2 className="text-3xl font-semibold mb-6">Our Work</h2>

      <div
        className="relative overflow-hidden"
        style={{
          width: `${cardWidth * visibleCards + peekWidth * 2 + cardGap}px`,
          margin: "0 auto",
         
        }}
      >
        <div
          ref={containerRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{ height: `${cardHeight}px` }}
        >
          {works.map((work) => (
            <div
              key={work.id}
              className="relative rounded-xl cursor-pointer group flex-shrink-0 bg-[black] overflow-hidden border-[3px] border-solid border-[purple] rounded-xl"
              style={{
                width: `${cardWidth}px`,
                height: `${cardHeight}px`,
                marginRight: `${cardGap}px`,
              }}
            >
              {/* Normal View */}
              <div className="absolute inset-0 p-6 flex flex-col items-center justify-start group-hover:opacity-0 transition-opacity duration-300 z-10">
                <div className="text-center mb-4">
                  <h3 className="text-3xl font-semibold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent mb-2 mt-5">
                    {work.title}
                  </h3>
                  <p className="text-base text-gray-300">{work.subtitle}</p>
                </div>
                <img
                  src={work.image}
                  alt={work.title}
                  className="rounded-lg shadow-lg w-full object-cover"
                  style={{ height: "400px",borderRadius: "12px" }}
                />
                <div className="absolute bottom-4 left-6 text-white font-semibold text-md">
                  <span>{work.title}</span>
                  <br />
                  • <span>{work.builtInYear}</span>
                </div>
              </div>

              {/* Hover View */}
              <div className="absolute inset-0 bg-purple-300 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-start">
                <div className="p-6 w-full transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <div className="font-bold text-xl mb-1">{work.title}</div>
                  <div className="text-lg font-medium mb-1">{work.builtInYear}</div>
                  <div className="text-lg font-semibold">{work.hoverText}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prev}
        disabled={currentIndex === 0}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-80 text-white rounded-full w-10 h-10 flex items-center justify-center disabled:opacity-30 transition"
        aria-label="Previous"
      >
        &#10094;
      </button>

      <button
        onClick={next}
        disabled={currentIndex >= works.length - visibleCards}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-80 text-white rounded-full w-10 h-10 flex items-center justify-center disabled:opacity-30 transition"
        aria-label="Next"
      >
        &#10095;
      </button>

      {/* Dot Indicators */}
      <div className="flex justify-center mt-6 space-x-3">
        {[...Array(dotsCount)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-4 h-4 rounded-full transition-colors duration-300 ${
              i === currentIndex ? "bg-white" : "bg-gray-600"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkShowcase;
