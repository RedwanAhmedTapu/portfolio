import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdSchool } from "react-icons/md";

const Education = () => {
  return (
    <>
      <div className="edu w-full h-screen flex   flex-col justify-end max-[1100px]:justify-center items-center " id="education">
        <div className="flex flex-col">
        <p className="education text-3xl flex justify-center items-center">
          Education
        </p>
        <div className="flex justify-center items-center">
          <hr className="w-80 h-1  border-t border-gray-300 my-4"></hr>
        </div>
        </div>
        <div className="w-full flex justify-center items-center">
        <VerticalTimeline className="educationLine bg-gray-200 p-6">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  gray" }}
            date="2016 - 2017"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title text-2xl">SSC</h3>
            <h4 className="vertical-timeline-element-subtitle font-mono">
              Ghoraghal Pilot High School,Bangladesh
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  gray" }}
            date="2017 - 2019"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title text-2xl">HSC</h3>
            <h4 className="vertical-timeline-element-subtitle font-mono">
              Narsingdi United College,Bangladesh
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  gray" }}
            date="2020 - present"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title text-2xl">
              BSC In CSE
            </h3>
            <h4 className="vertical-timeline-element-subtitle font-mono">
              Faridpur Engineering College(Affiliated to Dhaka University)
            </h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      </div>
    </>
  );
};

export default Education;
