import React from "react";

// Replace brands with your links
const brands = [
	{ name: "sklassics.com", url: "https://sklassics.com" },
	{ name: "sklassicstech.com", url: "https://sklassicstech.com" },
	{ name: "sklassicsacademy.com", url: "https://sklassicsacademy.com" },
	{ name: "sklassics-lms.com", url: "https://sklassics-lms.com" },
	{ name: "sklassics-ai.com", url: "https://sklassics-ai.com" },
	{ name: "sklassicstutor.com", url: "https://sklassicstutor.com" },
	{ name: "sklassics-quiz.com", url: "https://sklassics-quiz.com" },
	{ name: "hanumancars.com", url: "https://hanumancars.com" },
	{ name: "vlrws.com", url: "https://vlrws.com" },
];

export default function BrandCarousel() {
	return (
		<div className="relative z-10 bg-[#13182b] py-10 overflow-hidden rounded-t-2xl">
			{/* Gradient border top */}
			<div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-purple-400/40 to-transparent rounded-t-2xl pointer-events-none" />
			{/* Carousel */}
			<div className="w-full overflow-x-hidden">
				<div className="flex gap-8 sm:gap-12 animate-scroll-x whitespace-nowrap min-w-[200%]">
					{[...brands, ...brands].map((brand, i) => (
						<a
							key={i}
							href={brand.url}
							target="_blank"
							rel="noopener noreferrer"
							className="flex-shrink-0 flex items-center justify-center opacity-80 hover:opacity-100 transition px-4"
							style={{
								minWidth: 180,
								height: 64,
								color: "white",
								fontWeight: 700,
								fontSize: 22,
								letterSpacing: 1,
							}}
						>
							{brand.name}
						</a>
					))}
				</div>
			</div>
		</div>
	);
}

