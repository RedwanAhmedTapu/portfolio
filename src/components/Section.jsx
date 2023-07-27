import Typewriter from "typewriter-effect";

const Section = () => {
  let comma="'"
  return (
    <div className="section sm:p-8 w-screen  sm:h-screen  bg-grey-900 z-100">
      <div className="text-container absolute -top-96 sm:static  sm:mb-44 sm:pt-20 sm:pl-96 ">
        <h1 className="text-3xl sm:text-7xl flex gap-5">Hi I{comma}m <h1 className="text-violet-900">Redwan</h1></h1>
        <h2 className="text-2xl sm:text-5xl font-semibold leading-relaxed">
        <Typewriter
          options={{
            strings: ["Fullstack Developer", "MERN Stack Developer"],
            autoStart: true,
            loop: true,
          }}
        />
        </h2>
      </div>

      <div className=" flex justify-center space-x-4 absolute -top-72 left-4  sm:left-96 ">
        <button className="button w-34 sm:w-80 h-16 sm:h-24  text-2xl font-sans hover:transition-transform hover:bg-cyan-800 hover:transform-gpu transfor hover:scale-105">Hire Me</button>
       
      </div>
    </div>
  );
};

export default Section;
