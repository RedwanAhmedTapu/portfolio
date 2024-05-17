import React, { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect";
import MyImage from "../imgs/portImg.png";
import { AiFillGithub } from "react-icons/ai";
import Gmail from "../imgs/gmail.png";

const Section = () => {
  const canvasRef = useRef(null); // Reference to the canvas element

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    const ctx = canvas.getContext("2d");
    const colors = ["#8d0b64", "#00CF5D", "#2c4a82"];

    const dots = [];
    for (let index = 0; index < 80; index++) {
      dots.push({
        x: Math.floor(Math.random() * canvas.width),
        y: Math.floor(Math.random() * canvas.height),
        size: Math.random() * 2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const drawDots = () => {
      dots.forEach((dot) => {
        ctx.fillStyle = dot.color;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const handleMouseMove = (event) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawDots();

      const mouse = {
        x: event.pageX - canvas.getBoundingClientRect().left,
        y: event.pageY - canvas.getBoundingClientRect().top,
      };

      dots.forEach((dot) => {
        const distance = Math.sqrt(
          (mouse.x - dot.x) ** 2 + (mouse.y - dot.y) ** 2
        );
        if (distance < 300) {
          const angle = Math.atan2(dot.y - mouse.y, dot.x - mouse.x);
          const newX = mouse.x + Math.cos(angle) * distance;
          const newY = mouse.y + Math.sin(angle) * distance;
          ctx.strokeStyle = dot.color;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(mouse.x, mouse.y);
          ctx.lineTo(newX, newY);
          ctx.stroke();
        }
      });
    };

    const handleMouseLeave = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="w-full h-screen max-[925px]:h-full flex max-[900px]:flex-col justify-center items-center relative  px-2 sm:px-24 top-14 sm:top-10">
      <canvas
        ref={canvasRef}
        id="dotsCanvas"
        className="absolute top-0 left-0 bg-transparent w-[100%] h-[100%]"
      ></canvas>
      <div className="w-[50%] max-[925px]:w-full h-screen flex flex-col justify-center items-start flex-wrap pl-4 gap-y-2">
        <h1 className="text-3xl lg:text-5xl flex items-center gap-x-5 text-yellow-50">
          Hi, I'm{" "}
          <h2 className="text-5xl lg:text-6xl bg-gradient-to-r from-green-400 via-slate-200 to-green-500 bg-clip-text text-transparent">
            Redwan
          </h2>
        </h1>
        <h2 className="text-2xl xl:text-5xl font-semibold leading-relaxed bg-gradient-to-r from-green-700 to-green-600 bg-clip-text text-transparent">
          <Typewriter
            options={{
              strings: ["Fullstack Developer", "MERN Developer"],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
        <p className="text-[1.1rem] sm:text-xl font-normal leading-7 text-start text-white max-w-lg">
          Dedicated and enthusiastic MERN Stack Developer with a passion for
          creating web applications. Seeking a position to leverage my skills in
          building user-friendly and efficient websites that deliver value to
          businesses.
        </p>

        <div className="w-72 h-20 flex justify-start items-center gap-x-8">
          <a
            className="w-28 h-12 z-10 text-white bg-gradient-to-br from-green-500 to-green-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2"
            href="https://drive.google.com/file/d/1R2j0plrL3wjiIn2w2rcngYMZrZZVdIRn/view?usp=drive_link"
          >
            Resume
          </a>

          <a
            className="flex gap-x-1 items-center z-10"
            href="https://github.com/RedwanAhmedTapu"
          >
            <div className="w-8 h-8 text-white">
              <AiFillGithub className="w-8 h-8" />
            </div>
            <div className="text-xl text-white font-medium">Profile</div>
          </a>
        </div>
        <a
          className="w-44 h-12 z-10 flex justify-start items-center  gap-x-2"
          href="mailto:redwantapu1234@gmail.com"
        >
          <img src={Gmail} className="w-10 h-10" alt="Gmail Logo" />
          <p className="text-xl text-white font-semibold"> mail me</p>
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
