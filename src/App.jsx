// import { Route, HashRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./pages/Sidebar";
import Section from "./components/Section";
import About from "./pages/About";
import Education from "./pages/Education";
import Tech from "./pages/Tech";
import Projects from "./pages/Projects";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <>
    
       <Sidebar className="bg-gradient-to-r  from-gray-100 to-gray-300"/>
       
        
       
        <Section className=""/>
        <About className=""/>
        <Education className=""/>

        <Tech className="overflow-y-auto"/>

        <Projects className=""/>
      
      <ScrollToTop color="#1e9e9c2" style={{backgroundColor:"blue"}}/>
      
    </>
  );
}

export default App;
