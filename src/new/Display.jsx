import React from "react";
import Navbar from "../new/Navbar";
// import BrandCarousel from "../new/BrandCarousel";
import AuthHero from "../new/AuthHero";
import Features from "../new/Features";
import Faster from "../new/Faster";
// import Smart from "../new/Smart";
import Trust from "../new/Trust";
// import HeroSection from "../new/HeroSection";
import Footer from "../animated-portfolio/Footer";

const Display = () => {
    return (
        <>
        <Navbar />
        {/* <BrandCarousel /> */}
        <AuthHero />
        <Faster />
        {/* <Smart /> */}
        <Trust />
        <Features />
         {/* <HeroSection /> */}
         <Footer />
       
        </>
    );
};
export default Display;