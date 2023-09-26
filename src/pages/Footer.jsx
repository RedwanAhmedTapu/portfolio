import Gmail from "../imgs/gmail.png";
import { AiFillGithub,AiFillLinkedin,AiFillFacebook } from "react-icons/ai";


const Footer = () => {
  return (
    <div className="w-full h-44 bg-indigo-950 flex justify-center items-center gap-x-4">
         <a className="w-12  h-12 flex justify-start items-center gap-x-2" href="mailto:redwantapu1234@gmail.com">
          <img src={Gmail} className="w-12 h-12" />
         
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
  )
}

export default Footer;