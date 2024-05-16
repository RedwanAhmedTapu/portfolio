import Gmail from "../imgs/gmail.png";
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const name = "Redwan Ahmed";

  return (
    <div className="w-full h-44 mt-10 bg-[#1D293A] flex flex-col justify-center items-center">
      <div className="flex gap-x-4">
        <a className="w-12  h-12 flex justify-start items-center gap-x-2" href="mailto:redwantapu1234@gmail.com">
          <img src={Gmail} className="w-12 h-12" alt="Gmail Logo" />
        </a>
        <a className="flex gap-x-1" href="https://github.com/RedwanAhmedTapu">
          <div className="w-12 h-12 text-white">
            <AiFillGithub className="w-12 h-12 " />
          </div>
        </a>
        <a className="flex gap-x-1" href="https://www.linkedin.com/in/redwan-tapu">
          <div className="w-12 h-12 text-blue-600">
            <AiFillLinkedin className="w-12 h-12 " />
          </div>
        </a>
        <a className="flex gap-x-1" href="https://www.facebook.com/profile.php?id=100009283561246">
          <div className="w-12 h-12 text-blue-600">
            <AiFillFacebook className="w-12 h-12 " />
          </div>
        </a>
      </div>
      <div className="text-white mt-2">
        &copy; {currentYear} - {name}
      </div>
    </div>
  );
};

export default Footer;
