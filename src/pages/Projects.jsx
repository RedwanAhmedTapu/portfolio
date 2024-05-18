import { AiFillGithub } from "react-icons/ai";
import MyImage from "../imgs/Screenshot 2023-09-22 093513.png";
import InfinityShop from "../imgs/Screenshot (52).png";
import Daliamess from "../imgs/dalia-mess-site.png";

const projectsData = [
  {
    name: "codecampJr.",
    imageSrc: MyImage,
    liveLink: "https://codecampjr.vercel.app",
    githubLink: "https://github.com/RedwanAhmedTapu/codecampjr",
    description:
      "codecampJR is an innovative online coding learning platform tailored specifically aspiring programmers. Our site offers a",
    technologies: ["NextJs", "TailwindCss", "ExpressJs", "MongoDB"],
  },
  {
    name: "infinityShop.",
    imageSrc: InfinityShop,
    liveLink: "https://infinityshop.onrender.com",
    githubLink: "https://github.com/RedwanAhmedTapu/infinity",
    description:
      "InfinityShop is your premier online destination for all things shopping, where the possibilities are endless and your retail dreams become reality. With a commitment to excellence, we provide a shopping platform.",
    technologies: ["NextJs", "TailwindCss", "ExpressJs", "MongoDB"],
  },
  {
    name: "dalia-mess-site",
    imageSrc: Daliamess,
    liveLink: "https://dalia-mess-site.vercel.app",
    githubLink: "https://github.com/RedwanAhmedTapu/dalia-mess-site",
    description:
      "Dalia Mess is a cutting-edge website designed for the efficient management of students who receive three meals a day. This comprehensive platform is tailored to streamline the entire process of providing food services to students, ensuring a seamless and organized experience.",
    technologies: ["NextJs", "TailwindCss", "ExpressJs", "MongoDB"],
  },
];

const Projects = () => {
  return (
    <>
      <div
        className="flex flex-col w-full  h-full justify-center items-center gap-y-4 overflow-hidden "
        id="project"
      >
        <div className="flex flex-col max-[1100px]:flex-wrap max-[700px]:flex-col w-full overflow-hidden">
          <p className="education text-[#00CF5D]  text-3xl flex justify-center items-center">
            projects
          </p>
          <div className="flex justify-center items-center">
            <hr className="w-80 h-1 border-t border-gray-300 my-4"></hr>
          </div>
        </div>
        <div className="w-full flex max-[1100px]:flex-wrap max-[1100px]:gap-y-12 justify-center items-center gap-x-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="sm:w-[25rem] sm:h-[30rem] w-[20rem] h-[25rem]  flex flex-col rounded-lg bg-[#182c35d9] shadow-lg shadow-slate-900"
            >
              <div className="projectImage w-full h-full relative">
                <img
                  className="w-full h-full rounded-t-lg object-cover"
                  src={project.imageSrc}
                  alt={project.name}
                />
                <div className="imagebottomSlide w-full h-0 hover:h-full leading-6 text-violet-50 flex justify-center items-center text-center tracking-tight absolute left-0 right-0 bottom-0 z-10 bg-slate-600 opacity-80 transition-all duration-500 ease rounded-t-lg overflow-hidden">
                  <div className="w-full h-full p-6 border flex justify-center items-center border-gray-200 rounded-lg shadow-md">
                    <p className="text-gray-50 leading-7">{project.description}</p>
                  </div>
                </div>
              </div>
              <div className="p-6 w-full h-full flex flex-col justify-center items-center gap-y-1">
                <h5 className="mb-2 text-xl font-medium leading-tight text-white">
                  {project.name}
                </h5>
                <div className="w-24 h-8 bg-blue-600 rounded-md text-[1rem] text-white flex justify-center items-center text-center font-medium">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    see live
                  </a>
                </div>
                <a
                  className="w-full h-10 flex justify-center items-center gap-x-1  gap-y-4"
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-10 h-10 text-white">
                    <AiFillGithub className="w-10 h-10" />
                  </div>
                  <div className="text-xl text-white font-medium">
                    project github link
                  </div>
                </a>
                <div className="flex flex-col justify-center items-center gap-y-1">
                  <div className="flex justify-center items-center flex-wrap gap-x-3 gap-y-3">
                    {project.technologies.map((tech, techIndex) => (
                      <button
                        key={techIndex}
                        className="w-24 h-8 bounce-in bg-white text-slate-800 font-semibold rounded-lg"
                      >
                        {tech}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
