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

function App() {
 

  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<AccessScreen/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/section' element={<ProjectSections/>}/>
          <Route path='/work' element={<WorkShowcase/>}/>
          <Route path='/projectdisplay' element={<Display />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
