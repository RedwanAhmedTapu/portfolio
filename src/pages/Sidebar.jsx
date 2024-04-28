import { useState } from "react";
import { Link } from "react-scroll";
// import { Link } from "react-router-dom";
import { AiOutlineMenu,AiOutlineClose } from "react-icons/ai";
// import classNames from 'classnames';
const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  //  const sidebarClasses = classNames(
  //   'fixed min-[945px]:hidden inset-y-0 left-0 w-0 h-0 flex flex-col justify-between bg-white shadow-lg transform z-10',
  //   {
  //     'w-64':isSidebarOpen,
  //     'h-full':isSidebarOpen,
  //     'translate-x-0': isSidebarOpen,
  //     'translate-x-full': !isSidebarOpen,
  //     'transition-all ease-in-out duration-500': true,
  //   }
  // );

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  console.log(isSidebarOpen)
  return (
    <>
    
      
        <div className="sidebar w-full h-24 fixed z-10 max-[945px]:hidden flex  justify-around  items-center  rounded shadow-sm ">
          <div className="w-[40%] h-full text-2xl  text-black flex justify-start items-center px-4 font-semibold">
            Mern Stack Devloper
          </div>
          <div className="w-[60%]  h-full flex justify-evenly items-center">
            <Link to="about" spy={true} smooth={true} duration={100}>
              <span className="span text-2xl text-gray-900 cursor-pointer">About</span>
            </Link>
            <Link to="education" spy={true} smooth={true} duration={100}>
              <span className="span text-2xl  text-gray-900 cursor-pointer">Education</span>
            </Link>
            <Link to="tech" spy={true} smooth={true} duration={100}>
              <span className="span text-2xl  text-gray-900 cursor-pointer">skills</span>
            </Link>
            <Link to="project" spy={true} smooth={true} duration={100}>
              <span className="span text-2xl  text-gray-900 cursor-pointer">Projects</span>
            </Link>
          
          </div>
        </div>
      
      <div className=" w-full h-24 fixed z-10 bg-white flex  justify-around min-[946px]:hidden  items-center  rounded shadow-sm ">
        <div className="w-44 h-full text-2xl text-black flex justify-center items-center font-semibold">
          Mern Stack Devloper
        </div>
        <div className="text-black menu">
          <AiOutlineMenu className="w-12 h-12 " onClick={handleSidebarToggle} />
        </div>
      </div>

      {
        <div className={`${isSidebarOpen?"fixed min-[945px]:hidden inset-y-0 left-0 w-64 h-screen transition-all duration-500 ease-out flex flex-col justify-between bg-white shadow-lg  z-10":"w-0 h-0 "}`}>
         
          <div className="w-full h-24  flex justify-center items-center text-2xl text-black    font-semibold gap-x-8">
           <p> portfolio</p>
            <div className="w-8 h-8 ">
            <AiOutlineClose  className="w-8 h-8 " onClick={handleSidebarToggle}/>
          </div>
          </div>
          <div className={`${isSidebarOpen?"w-full h-full flex flex-col justify-evenly items-center":"hidden"}`} >
            <Link to="about" spy={true} smooth={true} duration={100}>
              <span className="span text-2xl text-gray-900 cursor-pointer" onClick={handleSidebarToggle}>About</span>
            </Link>
            <Link to="education" spy={true} smooth={true} duration={100}>
              <span className="span text-2xl  text-gray-900 cursor-pointer" onClick={handleSidebarToggle}>Education</span>
            </Link>
            <Link to="tech" spy={true} smooth={true} duration={100}>
              <span className="span text-2xl  text-gray-900 cursor-pointer" onClick={handleSidebarToggle}>skills</span>
            </Link>
            <Link to="project" spy={true} smooth={true} duration={100}>
              <span className="span text-2xl  text-gray-900 cursor-pointer" onClick={handleSidebarToggle}>Projects</span>
            </Link>
           
          </div>
        </div>
      }
    </>
  );
};

export default Sidebar;
