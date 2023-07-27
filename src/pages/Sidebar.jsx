import {
  FaUser,
  FaBriefcase,
  FaCode,
  FaGraduationCap,
  FaProjectDiagram,
  FaComments,
  FaEnvelope,
} from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-scroll";
import portImg from "../imgs/portImg.png";
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
        <RiMenuUnfoldFill className="w-24 h-24 bg-grey-200" />
      </div>
      {isSidebarOpen ? (
        <div className="sidebar w-44 h-auto p-0 rounded sticky top mt-80   shadow-lg ">
          <div className="p-4">
            <img
              src={portImg}
              alt="Profile-image"
              className="w-28 h-28 rounded-full mx-auto mb-4"
            />
          </div>

          <div className="py-2">
            <div className="flex items-center py-3 px-4 hover:bg-gray-700 hover:shadow-lg rounded-sm cursor-pointer">
              <div className="mr-4">
                <FaUser className="text-orange-600" />
              </div>
              <Link to="about" spy={true} smooth={true} duration={100}>
                <span className="span text-2xl">About</span>
              </Link>
            </div>
            <div className="flex items-center py-3 px-4 hover:bg-gray-700 hover:shadow-lg rounded-sm cursor-pointer">
              <div className="mr-4">
                <FaGraduationCap className="text-orange-600" />
              </div>
              <Link to="education" spy={true} smooth={true} duration={100}>
                <span className="span text-2xl">Education</span>
              </Link>
            </div>
            <div className="flex items-center py-3 px-4 hover:bg-gray-700 hover:shadow-lg rounded-sm cursor-pointer">
              <div className="mr-4">
                <FaCode className="text-orange-600" />
              </div>
              <Link to="tech" spy={true} smooth={true} duration={100}>
                <span className="span text-2xl">Tech</span>
              </Link>
            </div>
            <div className="flex items-center py-3 px-4 hover:bg-gray-700 hover:shadow-lg rounded-sm cursor-pointer">
              <div className="mr-4">
                <FaProjectDiagram className="text-orange-600" />
              </div>
              <Link to="project" spy={true} smooth={true} duration={100}>
                <span className="span text-2xl">Projects</span>
              </Link>
            </div>
            <div className="flex items-center py-3 px-4 hover:bg-gray-700 hover:shadow-lg rounded-sm cursor-pointer">
              <div className="mr-4">
                <FaBriefcase className="text-orange-600" />
              </div>
              <Link to="workExperience" spy={true} smooth={true} duration={100}>
                <span className="span text-2xl">Work Experience</span>
              </Link>
            </div>

            <div className="flex items-center py-3 px-4 hover:bg-gray-700 hover:shadow-lg rounded-sm cursor-pointer">
              <div className="mr-4">
                <FaComments className="text-orange-600" />
              </div>
              <Link to="testimonial" spy={true} smooth={true} duration={100}>
                <span className="span text-2xl">Testimonial</span>
              </Link>
            </div>
            <div className="flex items-center py-3 px-4 hover:bg-gray-700 hover:shadow-lg rounded-sm cursor-pointer">
              <div className="mr-4">
                <FaEnvelope className="text-orange-600" />
              </div>
              <Link to="contact" spy={true} smooth={true} duration={100}>
                <span className="span text-2xl">Contact</span>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="sidebar w-64 p-6 sm:fixed left-0 top-0 bottom-0   shadow-lg transition-transform duration-300 transform -translate-x-full sm:translate-x-0">
          <div className="p-4">
            <img
              src={portImg}
              alt="Profile-image"
              className="w-28 h-28 rounded-full mx-auto mb-4"
            />
          </div>

          <div className="py-2">
            <div className="flex items-center py-3 px-4 hover:bg-gray-700 hover:shadow-lg rounded-sm cursor-pointer">
              <div className="mr-4">
                <FaUser className="text-orange-600" />
              </div>
              <Link to="about" spy={true} smooth={true} duration={100}>
                <span className="span text-2xl">About</span>
              </Link>
            </div>
            <div className="flex items-center py-3 px-4 hover:bg-gray-700 hover:shadow-lg rounded-sm cursor-pointer">
              <div className="mr-4">
                <FaGraduationCap className="text-orange-600" />
              </div>
              <Link to="education" spy={true} smooth={true} duration={100}>
                <span className="span text-2xl">Education</span>
              </Link>
            </div>
            <div className="flex items-center py-3 px-4 hover:bg-gray-700 hover:shadow-lg rounded-sm cursor-pointer">
              <div className="mr-4">
                <FaCode className="text-orange-600" />
              </div>
              <Link to="tech" spy={true} smooth={true} duration={100}>
                <span className="span text-2xl">Tech</span>
              </Link>
            </div>
            <div className="flex items-center py-3 px-4 hover:bg-gray-700 hover:shadow-lg rounded-sm cursor-pointer">
              <div className="mr-4">
                <FaProjectDiagram className="text-orange-600" />
              </div>
              <Link to="project" spy={true} smooth={true} duration={100}>
                <span className="span text-2xl">Projects</span>
              </Link>
            </div>
            <div className="flex items-center py-3 px-4 hover:bg-gray-700 hover:shadow-lg rounded-sm cursor-pointer">
              <div className="mr-4">
                <FaBriefcase className="text-orange-600" />
              </div>
              <Link to="workExperience" spy={true} smooth={true} duration={100}>
                <span className="span text-2xl">Work Experience</span>
              </Link>
            </div>

            <div className="flex items-center py-3 px-4 hover:bg-gray-700 hover:shadow-lg rounded-sm cursor-pointer">
              <div className="mr-4">
                <FaComments className="text-orange-600" />
              </div>
              <Link to="testimonial" spy={true} smooth={true} duration={100}>
                <span className="span text-2xl">Testimonial</span>
              </Link>
            </div>
            <div className="flex items-center py-3 px-4 hover:bg-gray-700 hover:shadow-lg rounded-sm cursor-pointer">
              <div className="mr-4">
                <FaEnvelope className="text-orange-600" />
              </div>
              <Link to="contact" spy={true} smooth={true} duration={100}>
                <span className="span text-2xl">Contact</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
