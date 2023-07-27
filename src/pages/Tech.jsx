import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  import "react-vertical-timeline-component/style.min.css";
  import { FaHtml5 } from "react-icons/fa";
  import {FaCss3} from "react-icons/fa";
  import {BiLogoJavascript,BiLogoReact,BiLogoTailwindCss} from "react-icons/bi";
  import {IoLogoNodejs} from "react-icons/io";
  import {SiExpress} from "react-icons/si";

const Tech = () => {
  return (
    <>
      <div className="w-screen h-screen flex-col justify-center items-center sm:pl-80" id="tech">
        <p className="education text-3xl flex justify-center items-center">
          Technologies That I Have Learnt
        </p>
        <div className="flex justify-center items-center">
          <hr className="w-80 h-1  border-t border-gray-300 my-4"></hr>
        </div>
        <VerticalTimeline className="educationLine bg-cyan-900 p-6">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "white" }}
            contentArrowStyle={{ borderRight: "7px solid  gray" }}
            date="2022(within 5 days)"
            iconStyle={{ background: "#E04D01", color: "#fff" }}
            icon={<FaHtml5 />}
          >
            <h3 className="vertical-timeline-element-title text-2xl">HTML</h3>
            
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "white" }}
            contentArrowStyle={{ borderRight: "7px solid  gray" }}
            date="2022(within 20 days)"
            iconStyle={{ background: "#1363DF", color: "#fff" }}
            icon={<FaCss3 />}
          >
            <h3 className="vertical-timeline-element-title text-2xl">CSS</h3>
            
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "white" }}
            contentArrowStyle={{ borderRight: "7px solid  gray" }}
            date="2022(within 1.5 months)"
            iconStyle={{ background: "#FFF80A", color: "#fff" }}
            icon={<BiLogoJavascript />}
          >
            <h3 className="vertical-timeline-element-title text-2xl">
              Javascript
            </h3>
          
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "white" }}
            contentArrowStyle={{ borderRight: "7px solid  gray" }}
            date="2022(within 30 days)"
            iconStyle={{ background: "#00C4FF", color: "#fff" }}
            icon={<BiLogoReact />}
          >
            <h3 className="vertical-timeline-element-title text-2xl">REACT</h3>
           
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "white" }}
            contentArrowStyle={{ borderRight: "7px solid  gray" }}
            date="2022(within 7 days)"
            iconStyle={{ background: "#00C4FF", color: "#fff" }}
            icon={<BiLogoTailwindCss />}
          >
            <h3 className="vertical-timeline-element-title text-2xl">TAILWINDCSS</h3>
           
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "white" }}
            contentArrowStyle={{ borderRight: "7px solid  gray" }}
            date="2022(within 1.5 months)"
            iconStyle={{ background: "#17594A", color: "#fff" }}
            icon={<IoLogoNodejs />}
          >
            <h3 className="vertical-timeline-element-title text-2xl">NODEJS</h3>
           
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "white" }}
            contentArrowStyle={{ borderRight: "7px solid  gray" }}
            date="2022(within 15 days)"
            iconStyle={{ background: "#435B66", color: "#fff" }}
            icon={<SiExpress />}
          >
            <h3 className="vertical-timeline-element-title text-2xl">EXPRESSJS</h3>
        
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  )
}

export default Tech