import { useState } from "react";
import { Link } from "react-scroll";
// import { Link } from "react-router-dom";
import { RiMenuUnfoldFill } from "react-icons/ri";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <div className="fixed top-5 sm:hidden" onClick={handleSidebarToggle}>
        <RiMenuUnfoldFill className="w-24 h-24 " />
      </div>
      {
        <div className="sidebar w-full h-24 fixed z-10 flex justify-around items-center  rounded shadow-sm px-32">
          <div className="w-[40%] h-full text-2xl text-black flex justify-center items-center font-semibold">Mern Stack Devloper</div>
          <div className="w-[60%] h-full flex justify-evenly items-center">
            <Link to="about" spy={true} smooth={true} duration={100}>
              <span className="span text-2xl text-gray-900">About</span>
            </Link>
            <Link to="education" spy={true} smooth={true} duration={100}>
              <span className="span text-2xl  text-gray-900">Education</span>
            </Link>
            <Link to="tech" spy={true} smooth={true} duration={100}>
              <span className="span text-2xl  text-gray-900">skills</span>
            </Link>
            <Link to="project" spy={true} smooth={true} duration={100}>
              <span className="span text-2xl  text-gray-900">Projects</span>
            </Link>
            <Link to="contact" spy={true} smooth={true} duration={100}>
            <span className="span text-2xl  text-gray-900">Contact</span>
          </Link>
          </div>

         
        </div>
      }
    </>
  );
};

export default Sidebar;
