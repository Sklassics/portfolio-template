import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AccessScreen from "./animated-portfolio/AccessScreen"
import Home from "./animated-portfolio/Home"
import Projects from "./animated-portfolio/Projects";

function App() {
 

  return (
    <>
      <Router>
    <Routes>
    <Route path='/' element={<AccessScreen/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/projects' element={<Projects/>}/>
    

    </Routes>
    </Router>
    </>
  )
}

export default App
