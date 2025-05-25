import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AccessScreen from "./animated-portfolio/AccessScreen"
import Home from "./animated-portfolio/Home"
import Projects from "./animated-portfolio/Projects";
import ProjectSections from "./animated-portfolio/ProjectSections";
import WorkShowcase from "./animated-portfolio/WorkShowcase";
import Footer from "./animated-portfolio/Footer";
import Navbar from "./new/Navbar";
import BrandCarousel from "./new/BrandCarousel";
import AuthHero from "./new/AuthHero";
import Features from "./new/Features";
import Faster from "./new/Faster";
import Smart from "./new/Smart";
import Trust from "./new/Trust";
import HeroSection from "./new/HeroSection";
import "./index.css";

function App() {
 

  return (
    <>
      <Router>
    <Routes>
    <Route path='/' element={<AccessScreen/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/projects' element={<Projects/>}/>
    <Route path='/section' element={<ProjectSections/>}/>
     <Route path='/work' element={<WorkShowcase/>}/>
   
     
    
  
    </Routes>
    </Router>
     <Footer/>
     <Navbar />
     <BrandCarousel />
     <AuthHero />
     <Faster />
     <Smart />
     <Trust />
     <HeroSection />
     <Features />
  
    </>
  )
}

export default App
