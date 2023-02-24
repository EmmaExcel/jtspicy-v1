import React from "react";
import "./Home.css";
import Navbar from "../Components/Navbar";
import avatar from "./Homeimages/Image.png";

const Home = () => {
  return (
    <>
      <section className="home-container">
        <Navbar />

        <div className="home-content">
          <div className="home-text">
            <div className="home-greeting">
              <p>Hi there, I’m</p>
            </div>
            <div className="home-header">
              <p>Jaden Tega</p>
            </div>
            <div className="home-paragraph">
              <p>
                An award-winning chef with over 12 years experience. Nulla
                vestibulum a lorem non luctus. Aliquam ut neque est
              </p>
            </div>
            <div className="home-button">
              <a href="">WORK WITH ME</a>
            </div>
          </div>
          <div className='avatar'>
            <img src={avatar} alt="image" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
