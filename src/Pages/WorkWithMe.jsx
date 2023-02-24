import React from "react";
import "./WorkWithMe.css";
import formimg from "./WorkWithMeimages/footerimg.png";

const WorkWithMe = () => {
  return (
    <div className="with-me-container">
      <div className="with-me-header">
        <p>Work With Me</p>
      </div>
      <div className="with-me-content">
        <div className="with-me-img">
          <img src={formimg} alt="" />
        </div>
        <div className="with-me-form">
          <form action="">
            <div className="with-me-text">
              <p>You’ll get a reply in less than two (2) hours</p>
            </div>
            <div className="with-me-input">
              <label htmlFor="fullname">Fullname</label>
              <input type="text" name="fullname" id="fullname" />
            </div>
            <div className="with-me-input">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="with-me-input">
              <label htmlFor="message">Leave a Message</label>
              <input type="text" name="message" id="message" />
            </div>

            <div className="with-me-button">
              <button id="submit" onClick>
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WorkWithMe;
