import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AccessScreen from "./animated-portfolio/AccessScreen"
import Home from "./animated-portfolio/Home"
import Projects from "./animated-portfolio/Projects";
import ProjectSections from "./animated-portfolio/ProjectSections";
import WorkShowcase from "./animated-portfolio/WorkShowcase";
import Footer from "./animated-portfolio/Footer";
import Display from "./new/Display";
import ScrollToTop from "./ScrollToTop";
import "./index.css";




import HanumanCarDisplay from "./new/Projects/HanumanCarDisplay";
import TutorsDisplay from "./new/Projects/TutorsDisplay";
import ItTrainingDisplay from "./new/Projects/ItTrainingDisplay";
import LMSDisplay from "./new/Projects/LmsDisplay";
import RealEstateDisplay from "./new/Projects/RealEstateDisplay";
import TechDisplay from "./new/Projects/TechDisplay";
import AiInterviewDisplay from "./new/Projects/AiInterviewDisplay";
import LoanDisplay from "./new/Projects/LoanDisplay";
// import Projectlink from "./animated-portfolio/projectlink";

function App() {
 

  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<AccessScreen/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/projectdisplay' element={<Display />}/>
          <Route path='/HanumanCars' element={<HanumanCarDisplay/>}/>
          <Route path='/Tutors' element={<TutorsDisplay/>}/>
          <Route path='/ItTraining' element={<ItTrainingDisplay/>}/>
          <Route path='/LMS' element={<LMSDisplay/>}/>
          <Route path='/RealEstate' element={<RealEstateDisplay/>}/>
          <Route path='/tech' element={<TechDisplay/>}/>
          <Route path='/AiInterview' element={<AiInterviewDisplay/>}/>
          <Route path='/loan' element={<LoanDisplay/>}/>
          {/* <Route path=' /projectlink' element={<Projectlink />}/> */}
          

          
        </Routes>
      </Router>
    </>
  )
}

export default App
