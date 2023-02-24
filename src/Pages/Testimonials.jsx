import React from "react";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay, Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/scss/pagination";
import "swiper/scss";

import circle from './Testimonialimages/Ellipse4.png'

export const Data = [
  {
    id: "1",
    name: "Dominic SOlanke",
    text: "“Morbi porta turpis ac risus tempor mattis. Nulla vestibulum a lorem non luctus. Aliquam ut neque est. Sed tortor neque, rutrumdapibus viverra sit amet, tristique sed justo. Nulla maximusvenen.”",
    img: circle,
    job: "CEO Uber Eats",
  },
  {
    id: "2",
    name: "Dominic SOlanke",
    text: "“Morbi porta turpis ac risus tempor mattis. Nulla vestibulum a lorem non luctus. Aliquam ut neque est. Sed tortor neque, rutrumdapibus viverra sit amet, tristique sed justo. Nulla maximusvenen.”",
    img:  circle,
    job: "SEO engineering",
  },
  {
    id: "3",
    name: "Dominic SOlanke",
    text: "“Morbi porta turpis ac risus tempor mattis. Nulla vestibulum a lorem non luctus. Aliquam ut neque est. Sed tortor neque, rutrumdapibus viverra sit amet, tristique sed justo. Nulla maximusvenen.”",
    img: circle,
    job: "Developer",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-container">
      <div className="testimonials-header">
        <p>Testimonials</p>
      </div>

      <Swiper
        modules={[Autoplay,Navigation, Pagination]}
        loop
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ el: ".swiper-pagination", clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {Data.map((item) => {
          const { id, name, img, job, text } = item;
          return (
            <div className="width">
              <SwiperSlide>
                <div key={id} className="swiper-containers">
                  <div className="swiper-paragraph">
                    <p>{text}</p>
                  </div>

                  <div className="contents">
                    <div className="image">
                      <img src={img} alt="" />
                    </div>
                    <div>
                      <div className="name">
                        <p>{name}</p>
                      </div>

                      <div className="job">
                        <p>{job}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="swiper-pagination"></div>
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
