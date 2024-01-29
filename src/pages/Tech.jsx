import "react-vertical-timeline-component/style.min.css";
import { FaHtml5 } from "react-icons/fa";
import {FaCss3} from "react-icons/fa";
import {BiLogoJavascript,BiLogoReact,BiLogoTailwindCss,BiLogoMongodb} from "react-icons/bi";
import {IoLogoNodejs} from "react-icons/io";
import {SiExpress,SiMongoose,SiPostman} from "react-icons/si";
import { TbBrandNextjs,TbBrandVscode } from "react-icons/tb";
import { AiFillGithub } from "react-icons/ai";

import WebIcon from "../imgs/webIcon.svg";
import Server from "../imgs/server.svg";
import Others from "../imgs/others.svg";
import Chrome from "../imgs/chrome.png";

const Tech = () => {
  return (
    <>
     <div
        className="flex flex-col w-full h-screen max-[1100px]:h-[60rem] max-[900px]:h-[80rem] justify-center items-center gap-y-12 overflow-hidden  "
        id="tech"
      >
         <div className="flex flex-col ">
          <p className="education text-3xl flex justify-center items-center">
            skills
          </p>
          <div className="flex justify-center items-center">
            <hr className="w-80 h-1  border-t border-gray-300 my-4"></hr>
          </div>
        </div>
      <div className=" w-full  flex max-[1100px]:flex-wrap  max-[1100px]:gap-y-16 justify-center items-center gap-x-4">

        <div className="flex justify-center items-center w-[25rem] h-[20rem] max-[545px]:w-[20rem]  bg-[#f4f0f0] shadow-xl shadow-slate-300 rounded-sm relative">
          <img
            src={WebIcon}
            className="w-32 h-32 absolute -top-16 "
          />
          <div className="w-full h-[80%] flex flex-col justify-center items-center gap-y-2">

            <div className="w-full h-[20%] text-3xl text-center text-slate-900 font-semibold ">
              Frontend
            </div>
            <div className="w-full h-[80%] flex flex-col justify-center  items-start pl-12 gap-y-3">
              <div className=" flex justify-center items-center gap-x-2">
                <span className="text-xl  text-orange-500 w-8 h-8 justify-center items-center"><FaHtml5 className="w-8 h-8"/></span>
                <p className="w-full h-8 text-2xl text-black font-mono">Html</p>
              </div>
              <div className=" flex justify-center items-center gap-x-2">
                <span className="text-xl  text-blue-500 w-8 h-8 justify-center items-center"><FaCss3 className="w-8 h-8"/></span>
                <p className="w-full h-8 text-2xl text-black font-mono ">Css</p>
              </div>
              <div className=" flex justify-center items-center gap-x-2">
                <span className="text-xl  text-yellow-500 w-8 h-8 justify-center items-center"><BiLogoJavascript className="w-8 h-8"/></span>
                <p className="w-full h-8 text-2xl text-black font-mono ">javascript</p>
              </div>
              <div className=" flex justify-center items-center gap-x-2">
                <span className="text-xl  text-blue-600 w-8 h-8 justify-center items-center"><BiLogoReact className="w-8 h-8"/></span>
                <p className="w-full h-8 text-2xl text-black font-mono ">ReactJs</p>
              </div>
              <div className=" flex justify-center items-center gap-x-2">
                <span className="text-xl  text-slate-900 w-8 h-8 justify-center items-center"><TbBrandNextjs className="w-8 h-8"/></span>
                <p className="w-full h-8 text-2xl text-black font-mono ">Nextjs</p>
              </div>
              <div className=" flex justify-center items-center gap-x-2">
                <span className="text-xl  text-cyan-500 w-8 h-8 justify-center items-center"><BiLogoTailwindCss className="w-8 h-8"/></span>
                <p className="w-full h-8 text-2xl text-black font-mono ">Tailwindcss</p>
              </div>
           
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-[25rem] max-[545px]:w-[20rem] h-[20rem] bg-[#f4f0f0] shadow-xl shadow-slate-300 rounded-sm relative">
          <img
            src={Server}
            className="w-32 h-32 absolute -top-16 bg-black bg-clip-text text-transparent"
          />
          <div className="w-full h-[80%] flex flex-col justify-center items-center gap-y-1">

            <div className="w-full h-[20%] text-3xl text-center text-slate-900 font-semibold ">
              backend
            </div>
            <div className="w-full h-[80%] flex flex-col justify-center  items-start pl-12 gap-y-4">
              <div className=" flex justify-center items-center gap-x-2">
                <span className="text-xl  text-green-900 w-8 h-8 justify-center items-center"><IoLogoNodejs className="w-8 h-8"/></span>
                <p className="w-full h-8 text-2xl text-black font-mono">NodeJs</p>
              </div>
              <div className=" flex justify-center items-center gap-x-2">
                <span className="text-xl  text-green-900 w-8 h-8 justify-center items-center"><SiExpress className="w-8 h-8"/></span>
                <p className="w-full h-8 text-2xl text-black font-mono ">ExpressJs</p>
              </div>
              <div className=" flex justify-center items-center gap-x-2">
                <span className="text-xl  text-green-800 w-8 h-8 justify-center items-center"><BiLogoMongodb className="w-8 h-8"/></span>
                <p className="w-full h-8 text-2xl text-black font-mono ">MongoDB</p>
              </div>
              <div className=" flex justify-center items-center gap-x-2">
                <span className="text-xl  text-slate-900 w-8 h-8 justify-center items-center"><SiMongoose className="w-8 h-8"/></span>
                <p className="w-full h-8 text-2xl text-black font-mono ">Mongoose</p>
              </div>
             
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-[25rem] max-[545px]:w-[20rem] h-[20rem] bg-[#f4f0f0] shadow-xl shadow-slate-300 rounded-sm relative">
          <img
            src={Others}
            className="w-32 h-32 absolute -top-16 "
          />
          <div className="w-full h-[80%] flex flex-col justify-center items-center gap-y-2">

            <div className="w-full h-[20%] text-3xl text-center text-slate-900 font-semibold ">
              tools
            </div>
            <div className="w-full h-[80%] flex flex-col justify-center  items-start pl-12 gap-y-4">
              <div className=" flex justify-center items-center gap-x-2">
                <span className="text-xl  text-blue-600 w-8 h-8 justify-center items-center"><TbBrandVscode className="w-8 h-8"/></span>
                <p className="w-full h-8 text-2xl text-black font-mono">vscode</p>
              </div>
              <div className=" flex justify-center items-center gap-x-2">
                <span className="text-xl  text-orange-500 w-8 h-8 justify-center items-center"><SiPostman className="w-8 h-8"/></span>
                <p className="w-full h-8 text-2xl text-black font-mono ">postman</p>
              </div>
              <div className=" flex justify-center items-center gap-x-2">
                <span className="text-xl  text-slate-900 w-8 h-8 justify-center items-center"><AiFillGithub className="w-8 h-8"/></span>
                <p className="w-full h-8 text-2xl text-black font-mono ">github</p>
              </div>
              <div className=" flex justify-center items-center gap-x-2">
                <span className="text-xl   w-8 h-8 justify-center items-center"><img src={Chrome} className="w-8 h-8"/></span>
                <p className="w-full h-8 text-2xl text-black font-mono ">chrome devloper tool</p>
              </div>
           
            </div>
          </div>
        </div>
        <div className=""></div>
      </div>
      </div>
    </>
  );
};

export default Tech;
