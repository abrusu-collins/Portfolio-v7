import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import "./styles/index.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Allprojects from "./components/Allprojects";


function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes >
      <Route path="/" element={<Home/>}/>
      <Route path="/allprojects" element={<Allprojects/>}/>

    </Routes>
  </Router>
    </>
  );
}

export default App;
