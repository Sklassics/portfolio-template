import { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const cards = [
  {
    title: "Bot Detection",
    desc: "Incorporate rich user profiling, and facilitate more transactions.",
  },
  {
    title: "Social Integrations",
    desc: "Incorporate rich user profiling, and facilitate more transactions.",
  },
  {
    title: "Progressive Profiling",
    desc: "Incorporate rich user profiling, and facilitate more transactions.",
  },
  {
    title: "Secure Access",
    desc: "Incorporate rich user profiling, and facilitate more transactions.",
  },
  {
    title: "Risk Analysis",
    desc: "Incorporate rich user profiling, and facilitate more transactions.",
  },
];

export default function FeatureCarousel() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const scrollAmount = 350;
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-[#0a0c1b] text-white py-16 px-4">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <p className="text-sm text-purple-400 font-medium">The security first platform</p>
        <h2 className="text-4xl font-bold mt-2 mb-4">Spot issues faster</h2>
        <p className="text-gray-400">
          All the lorem ipsum generators on the Internet tend to repeat predefined chunks as necessary, 
          making this the first true generator on the Internet.
        </p>
      </div>

      <div className="relative">
        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto no-scrollbar scroll-smooth space-x-6 px-2"
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="min-w-[280px] md:min-w-[300px] bg-[#101223] rounded-xl border border-[#1d2033] p-6 hover:bg-gradient-to-br from-purple-800/20 to-transparent transition duration-300"
            >
              <div className="text-2xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-400 mb-4">{card.desc}</p>
              <a href="#" className="text-sm text-purple-400 hover:underline">
                Learn More →
              </a>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <div className="flex justify-center gap-6 mt-6">
          <button
            onClick={() => scroll("left")}
            className="bg-[#1d2033] hover:bg-[#292d45] p-2 rounded-full text-white"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={() => scroll("right")}
            className="bg-[#1d2033] hover:bg-[#292d45] p-2 rounded-full text-white"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
