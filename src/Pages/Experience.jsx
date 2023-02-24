import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import chef from "./Experienceimages/chef.svg";


import "./Experience.css";
import { FaBeer } from 'react-icons/fa';


const Experience = () => {
  return (
    <>
      <section className="experience-container">
        <div className="experience-header">
          <p>Experience</p>
        </div>

        <VerticalTimeline lineColor="#FFFF">
          <VerticalTimelineElement
          position="right"
            className="experience-box"
            iconStyle={{ background: "#ffca47", color: "#000000" }}
            icon={<FaBeer/>}
            
          >
            <div className="test">
              <h3 className="experience-title">JT Spice,CEO</h3>

              <p className="experience-box-date">2016 - present </p>

              <p className="experience-box-paragraph">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Soluta, expedita dignissimos perferendis ipsum ab dolorum
                adipisci esse aliquid aperiam temporibus?
              </p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
          position="left"
            className="experience-box"
            iconStyle={{ background: "#2C1F00", color: "#000000" }}
            icon={<FaBeer/>}
          >
            <div className="test">
              <h3 className="experience-title">
                Kentucky Fried Chicken, Chief Cook
              </h3>

              <p className="experience-box-date">2012 - 2016</p>

              <p className="experience-box-paragraph">
                Morbi porta turpis ac risus tempor mattis. Nulla vestibulum a
                lorem non luctus. Aliquam ut neque est. Sed tortor neque, rutrum
                dapibus viverra sit amet, tristique sed justo. Nulla maximus
                venenatis ligula quis cursus. Nullam laoreet luctus urna at
                mattis.
              </p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
          position="right"
            className="experience-box"
            iconStyle={{ background: "#2C1F00", color: "#000000" }}
            icon={<FaBeer/>}
          >
            <div className="test">
              <h3 className="experience-title">Chillspot, Assistant Chef</h3>

              <p className="experience-box-date">2005 - 2012</p>

              <p className="experience-box-paragraph">
                Morbi porta turpis ac risus tempor mattis. Nulla vestibulum a
                lorem non luctus. Aliquam ut neque est. Sed tortor neque, rutrum
                dapibus viverra sit amet, tristique sed justo. Nulla maximus
                venenatis ligula quis cursus. Nullam laoreet luctus urna at
                mattis.
              </p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
          position="left"
            className="experience-box"
            iconStyle={{ background: "#2C1F00", color: "#000000" }}
            icon={<FaBeer/>}
          >
            <div className="test">
              <h3 className="experience-title">Dallas Delight, Chief Cook</h3>

              <p className="experience-box-date">2012 - 2016</p>

              <p className="experience-box-paragraph">
                Morbi porta turpis ac risus tempor mattis. Nulla vestibulum a
                lorem non luctus. Aliquam ut neque est. Sed tortor neque, rutrum
                dapibus viverra sit amet, tristique sed justo. Nulla maximus
                venenatis ligula quis cursus. Nullam laoreet luctus urna at
                mattis.
              </p>
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </section>
    </>
  );
};

export default Experience;
