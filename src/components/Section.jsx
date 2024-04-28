import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import MyImage from "../imgs/portImg.png";
import { AiFillGithub } from "react-icons/ai";
import Gmail from "../imgs/gmail.png";
// import "./styles.css"; // Import your CSS file

const Section = () => {
  const [letterclass, setLetterclass] = useState("text-animate");
  const name = ["R", "e", "d", "w", "a", "n"];
  const idx = 15;
  const animationDelayMultiplier = 0.1;

  return (
    <div className="w-full h-screen max-[925px]:h-full flex max-[900px]:flex-col justify-center items-center relative top-20">
      <div className="w-[50%] max-[925px]:w-full h-screen flex flex-col justify-center items-start flex-wrap pl-4 gap-y-10 ">
        <h1 className="text-3xl sm:text-7xl flex gap-5">
          Hi I{'\''}m{" "}
          <h2 className="bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 bg-clip-text text-transparent">
            {name.map((char, i) => (
              <span
                key={char + i}
                className={`${letterclass} _${i + idx}`}
                style={{ animationDelay: `${(i + idx) * animationDelayMultiplier}s` }}
              >
                {char}
              </span>
            ))}
          </h2>
        </h1>
        <h2 className="text-2xl sm:text-5xl font-semibold leading-relaxed bg-gradient-to-r from-rose-700 to-pink-600 bg-clip-text text-transparent">
          <Typewriter
            options={{
              strings: ["Fullstack Developer", "MERN Developer"],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
        <p className="text-xl text-slate-900 font-normal leading-6">
          Dedicated and enthusiastic MERN Stack Developer with a passion for
          creating web applications. Seeking a position to leverage my skills in
          building user-friendly and efficient websites that deliver value to
          businesses.
        </p>
        <div className="w-72 h-20 flex justify-start items-center gap-x-8">
          <a
            className="w-28 h-12 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2"
            href="https://drive.google.com/file/d/1R2j0plrL3wjiIn2w2rcngYMZrZZVdIRn/view?usp=drive_link"
          >
            Resume
          </a>
          <a className="flex gap-x-1" href="https://github.com/RedwanAhmedTapu">
            <div className="w-8 h-8 text-black">
              <AiFillGithub className="w-8 h-8 " />
            </div>
            <div className="text-xl text-slate-900 font-medium">profile</div>
          </a>
        </div>
        <a
          className="w-72 h-12 flex justify-start items-center gap-x-2"
          href="mailto:redwantapu1234@gmail.com"
        >
          <img src={Gmail} className="w-10 h-10" alt="Gmail Logo" />
          <p className="text-xl font-semibold">send a mail</p>
        </a>
      </div>
      <div className="w-[50%] h-screen max-[925px]:w-full flex justify-center items-center max-[925px]:items-start overflow-hidden">
        <div
          className="myImage w-96 h-96 max-[545px]:w-72 max-[545px]:h-72 flex justify-center items-center self-center rounded-full bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600"
          id="imgDiv"
        >
          <img
            src={MyImage}
            alt="My Picture"
            className="w-[80%] h-[80%] bg-transparent rounded-full object-cover overflow-hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Section;
