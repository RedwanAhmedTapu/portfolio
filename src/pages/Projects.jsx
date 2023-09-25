// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";
// import "react-vertical-timeline-component/style.min.css";

// import { CgWebsite } from "react-icons/cg";
import MyImage from "../imgs/Screenshot 2023-09-22 093513.png";
// import  {Link}  from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";

const Projects = () => {
  return (
    <>
      <div
        className="flex flex-col w-full max-[1030px]:h-[60rem] max-[700px]:h-[100rem] h-screen justify-center items-center gap-y-4 overflow-hidden "
        id="project"
      >
        <div className="flex flex-col max-[1100px]:flex-wrap max-[700px]:flex-col w-full overflow-hidden">
          <p className="education text-3xl flex justify-center items-center">
            projects
          </p>
          <div className="flex justify-center items-center">
            <hr className="w-80 h-1  border-t border-gray-300 my-4"></hr>
          </div>
        </div>
        <div className="w-full   flex max-[1100px]:flex-wrap max-[1100px]:gap-y-12 justify-center items-center gap-x-8  ">
          <div className="w-[20rem] h-[25rem] flex flex-col rounded-lg bg-white shadow-lg shadow-slate-200 ">
            <div className="projectImage w-full h-full relative ">
              <img
                className=" w-full h-full rounded-t-lg object-cover"
                src={MyImage}
                alt=""
              />
              <div className="imagebottomSlide w-full h-0 leading-6 text-violet-50  flex justify-center items-center text-center tracking-tight  absolute  left-0 right-0 bottom-0  z-10 bg-slate-600 opacity-80  transition-all duration-500 ease rounded-t-lg overflow-hidden">
               <p className="">
               codecampJR is an innovative online coding learning platform
                tailored specifically aspiring programmers. Our site offers a
               </p>
              
              </div>
            </div>

            <div className="p-6 w-full h-full flex flex-col justify-center items-center gap-y-1  ">
              <h5 className=" text-xl font-medium leading-tight text-slate-900  ">
                codecampJr.
              </h5>
              <div className="w-24 h-8 bg-blue-600 rounded-md text-xl text-white text-center font-medium">
                <p to="">see live</p>
              </div>

              <div className="w-full  h-10 flex justify-center items-center gap-y-4">
                <div className="w-10 h-10 text-black">
                  <AiFillGithub className="w-10 h-10 " />
                </div>
                <div className="text-xl text-slate-900 font-medium">
                  project github link
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-y-1">
                <div className="flex justify-between items-center gap-x-2">
                  <button className="w-24 h-8 bg-slate-300 rounded-sm">
                    NextJs
                  </button>
                  <button className="w-24 h-8 bg-slate-300 rounded-sm">
                    TailwindCss
                  </button>
                  <button className="w-24 h-8 bg-slate-300 rounded-sm">
                    ExpressJs
                  </button>
                </div>
                <div className="w-full flex justify-center items-center">
                  <button className="w-24 h-8 bg-slate-300 rounded-sm">
                    MongoDB
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[20rem] h-[25rem] flex flex-col rounded-lg bg-white shadow-lg shadow-slate-200 ">
            <div className="projectImage w-full h-full relative ">
              <img
                className=" w-full h-full rounded-t-lg object-cover"
                src={MyImage}
                alt=""
              />
              <div className="imagebottomSlide w-full h-0 leading-6 text-violet-50  flex justify-center items-center text-center tracking-tight  absolute  left-0 right-0 bottom-0  z-10 bg-slate-600 opacity-80  transition-all duration-500 ease rounded-t-lg overflow-hidden">
               <p className="">
               codecampJR is an innovative online coding learning platform
                tailored specifically aspiring programmers. Our site offers a
               </p>
              
              </div>
            </div>

            <div className="p-6 w-full h-full flex flex-col justify-center items-center gap-y-1  ">
              <h5 className="mb-2 text-xl font-medium leading-tight text-slate-900  ">
                codecampJr.
              </h5>
              <div className="w-24 h-8 bg-blue-600 rounded-md text-xl text-white text-center font-medium">
                <p to="">see live</p>
              </div>

              <div className="w-full  h-10 flex justify-center items-center gap-y-4">
                <div className="w-10 h-10 text-black">
                  <AiFillGithub className="w-10 h-10 " />
                </div>
                <div className="text-xl text-slate-900 font-medium">
                  project github link
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-y-1">
                <div className="flex justify-between items-center gap-x-2">
                  <button className="w-24 h-8 bg-slate-300 rounded-sm">
                    NextJs
                  </button>
                  <button className="w-24 h-8 bg-slate-300 rounded-sm">
                    TailwindCss
                  </button>
                  <button className="w-24 h-8 bg-slate-300 rounded-sm">
                    ExpressJs
                  </button>
                </div>
                <div className="w-full flex justify-center items-center">
                  <button className="w-24 h-8 bg-slate-300 rounded-sm">
                    MongoDB
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[20rem] h-[25rem] flex flex-col rounded-lg bg-white shadow-lg shadow-slate-200 ">
            <div className="projectImage w-full h-full relative ">
              <img
                className=" w-full h-full rounded-t-lg object-cover"
                src={MyImage}
                alt=""
              />
              <div className="imagebottomSlide w-full h-0 leading-6 text-violet-50  flex justify-center items-center text-center tracking-tight  absolute  left-0 right-0 bottom-0  z-10 bg-slate-600 opacity-80  transition-all duration-500 ease rounded-t-lg overflow-hidden">
               <p className="">
               codecampJR is an innovative online coding learning platform
                tailored specifically aspiring programmers. Our site offers a
               </p>
              
              </div>
            </div>

            <div className="p-6 w-full h-full flex flex-col justify-center items-center gap-y-1  ">
              <h5 className="mb-2 text-xl font-medium leading-tight text-slate-900  ">
                codecampJr.
              </h5>
              <div className="w-24 h-8 bg-blue-600 rounded-md text-xl text-white text-center font-medium">
                <p to="">see live</p>
              </div>

              <div className="w-full  h-10 flex justify-center items-center gap-y-4">
                <div className="w-10 h-10 text-black">
                  <AiFillGithub className="w-10 h-10 " />
                </div>
                <div className="text-xl text-slate-900 font-medium">
                  project github link
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-y-1">
                <div className="flex justify-between items-center gap-x-2">
                  <button className="w-24 h-8 bg-slate-300 rounded-sm">
                    NextJs
                  </button>
                  <button className="w-24 h-8 bg-slate-300 rounded-sm">
                    TailwindCss
                  </button>
                  <button className="w-24 h-8 bg-slate-300 rounded-sm">
                    ExpressJs
                  </button>
                </div>
                <div className="w-full flex justify-center items-center">
                  <button className="w-24 h-8 bg-slate-300 rounded-sm">
                    MongoDB
                  </button>
                </div>
              </div>
            </div>
          </div>
         
            
        
        </div>
      </div>
    </>
  );
};

export default Projects;
