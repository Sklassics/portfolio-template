import React from "react";

// Example SVG logos (replace with your own or use <img src="..." />)
const brands = [
	{
		name: "Amazon",
		svg: (
			<svg viewBox="0 0 80 24" className="h-8">
				<text
					x="0"
					y="18"
					fontFamily="Arial Black"
					fontSize="20"
					fill="white"
				>
					amazon
				</text>
			</svg>
		),
	},
	{
		name: "Facebook",
		svg: (
			<svg viewBox="0 0 100 24" className="h-8">
				<text
					x="0"
					y="18"
					fontFamily="Arial Black"
					fontSize="20"
					fill="white"
				>
					facebook
				</text>
			</svg>
		),
	},
	{
		name: "Tinder",
		svg: (
			<svg viewBox="0 0 80 24" className="h-8">
				<text
					x="0"
					y="18"
					fontFamily="Arial Black"
					fontSize="20"
					fill="white"
				>
					tinder
				</text>
			</svg>
		),
	},
	{
		name: "Airbnb",
		svg: (
			<svg viewBox="0 0 90 24" className="h-8">
				<text
					x="0"
					y="18"
					fontFamily="Arial Black"
					fontSize="20"
					fill="white"
				>
					airbnb
				</text>
			</svg>
		),
	},
	{
		name: "Cadbury",
		svg: (
			<svg viewBox="0 0 100 24" className="h-8">
				<text
					x="0"
					y="18"
					fontFamily="Brush Script MT"
					fontSize="20"
					fill="white"
				>
					Cadbury
				</text>
			</svg>
		),
	},
	{
		name: "Canon",
		svg: (
			<svg viewBox="0 0 80 24" className="h-8">
				<text
					x="0"
					y="18"
					fontFamily="Arial Black"
					fontSize="20"
					fill="white"
				>
					Canon
				</text>
			</svg>
		),
	},
	// Add more as needed
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
						<div
							key={i}
							className="flex-shrink-0 flex items-center justify-center opacity-80 hover:opacity-100 transition px-4"
							style={{ minWidth: 100, height: 64 }}
						>
							{brand.svg}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

