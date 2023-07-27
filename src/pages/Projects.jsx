import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { CgWebsite } from "react-icons/cg";

const Projects = () => {
  return (
    <>
      <div className="w-screen  flex-col justify-center items-center sm:pl-80 relative top-96" id="project">
       
        <p className="education text-3xl flex justify-center items-center">
          Projects
        </p>
        <div className="flex justify-center items-center">
          <hr className="w-80 h-1  border-t border-gray-300 my-4"></hr>
        </div>
        <VerticalTimeline className="educationLine bg-gray-200 p-6">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  gray" }}
            date="within 1.5 months"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<CgWebsite />}
          >
            <h3 className="vertical-timeline-element-title text-2xl">
              Ecommerce Site
            </h3>
            <a
              href="https://infinityshop.onrender.com"
              className="vertical-timeline-element-subtitle font-mono"
            >
              visit site ➡️
            </a>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  gray" }}
            date="within 2 months"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<CgWebsite />}
          >
            <h3 className="vertical-timeline-element-title text-2xl">
              Food Site
            </h3>
            <a
              href="https://infinityshop.onrender.com"
              className="vertical-timeline-element-subtitle font-mono"
            >
              visit site ➡️
            </a>
          </VerticalTimelineElement>
       
        </VerticalTimeline>
        </div>
      
    </>
  );
};

export default Projects;
