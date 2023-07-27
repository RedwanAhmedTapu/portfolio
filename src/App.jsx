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
      <Sidebar />
      <div className="absolute left-44  space-y-28">
        <Section />
        <About />
        <Education />

        <Tech />

        <Projects />
      </div>
      <ScrollToTop color="#1e9e9c2" style={{backgroundColor:"blue"}}/>
    </>
  );
}

export default App;
