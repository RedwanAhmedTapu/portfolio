import MyImage from "../imgs/portImg.png";
const About = () => {
  return (
    <div className="edu w-screen h-auto  sm:h-screen flex-col justify-center items-center sm:pl-80" id="about">
      <p className="education text-3xl flex justify-center items-center">
        About
      </p>
      <div className="flex justify-center items-center">
        <hr className="w-80 h-1  border-t border-gray-300 my-4"></hr>
      </div>
      <div className="flex justify-center items-center p-10">
        <img
          src={MyImage}
          alt="My Picture"
          className="w-44 h-44 rounded-full object-cover"
        />
      </div>
      <div className="flex-col justify-center items-center">
        <h1 className="text-4xl font-bold">Redwan Ahmed Tapu</h1>
        <p className="text-gray-500 text-4xl">Web Developer</p>
        <p className=" text-3xl sm:leading-relaxed">
          Hello! I am a passionate software engineer with expertise in web
          development. I love building applications that solve real-world
        </p>
      </div>
    </div>
  );
};

export default About;
