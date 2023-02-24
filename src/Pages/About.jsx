import React from "react";
import "./About.css";
import about from "./Aboutimages/About-Me-Image.png";
import Adata from "../Datafiles/Aboutdata";

const About = () => {
  return (
    <>
      <section className="about-container">
        <div className="about-content">
          <div className="about-img">
            <img src={about} alt="about" />
          </div>

          <div className="about-text">
            <div className="about-header">
              <p>About Me</p>
            </div>

            <div className="about-paragraph">
              <p>
                An award-winning chef with over 12 years experience Morbi porta
                turpis ac risus tempor mattis. Nulla vestibulum a lorem non
                luctus. Aliquam ut neque est. Sed tortor neque, rutrum
                dapibusviverra sit amet, tristique sed justo. Nulla maximus
                venenatis ligula quis cursus. Nullam laoreet luctus urna at
                mattis.
              </p>
            </div>
          </div>
        </div>

        <div className="services-container">
          <div className="services">
            <div className="services-header">
              <p>Services I Offer</p>
            </div>

            <div className="services-content">
              {Adata.map((items) => {
                const { id, name, text } = items;
                return (
                  <div className="box" key={id}>
                    <div className="box-text">
                      <div className="box-header">
                        <p>{name}</p>
                      </div>

                      <div className="box-paragraph">
                        <p>{text}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="about-button">
              <a href="">WORK WITH ME</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
