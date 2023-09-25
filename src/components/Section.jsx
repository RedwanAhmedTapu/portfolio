import Typewriter from "typewriter-effect";
import MyImage from "../imgs/portImg.png";
// import {RxDragHandleDots1} from "react-icons/rx";

const Section = () => {
  let comma = "'";
  return (
    <div className="w-full h-screen max-[925px]:h-full flex max-[900px]:flex-col justify-center items-center    ">
        <div className="w-[50%] max-[925px]:w-full h-screen flex flex-col justify-center items-start flex-wrap pl-4 gap-y-10 ">
          <h1 className="text-3xl sm:text-7xl flex gap-5">
            Hi I{comma}m{" "}
            <h2 className="bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 bg-clip-text text-transparent">
              Redwan
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
        <p className="text-xl text-slate-900 font-normal leading-5 flex-wrap">Dedicated and enthusiastic MERN Stack Developer with a passion for creating web applications. Seeking a position to leverage my skills in building user-friendly and efficient websites that deliver value to businesses.</p>

        </div>
        <div className="w-[50%] h-screen max-[925px]:w-full    flex  justify-center items-center max-[925px]:items-start overflow-hidden ">
          <div
            className="myImage w-96 h-96 flex justify-center items-center rounded-full bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600"
            id="imgDiv"
          >
            {" "}
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
