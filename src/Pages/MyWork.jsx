import React from "react";
import "./MyWork.css";

import { Select } from "@chakra-ui/select";

const MyWork = () => {
  return (
    <>
      <section className="work-container">
        <div className="work-header">
          <p>My Works</p>
        </div>

        <nav className="work-nav">
          <ul>
            <li>All</li>
            <li>DESSERT</li>
            <li>APPETIZER</li>
            <li>RESTAURANT</li>
            <li>DINNER</li>
            <li>DRINKS</li>
            <li>CONFECTIONARY</li>
          </ul>
        </nav>

        <div className="select-container">
          <Select backgroundColor='transparent' className="select">
            <option className="all" value="1">All</option>
            <option className="all"  value="2">DESSERT</option>
            <option className="all"  value="3">APPETIZER</option>
            <option className="all"  value="3">RESTAURANT</option>
            <option className="all"  value="3">DINNER</option>
            <option className="all"  value="3">CONFECTIONARY</option>
          </Select>
        </div>

       <div className="boxess">
       <div class="flexbox-container">
          <div class="flexbox-item flexbox-item-1"></div>
          <div class="flexx">
            <div class="flexbox-item flexbox-item-2"></div>
            <div class="flexbox-item flexbox-item-3"></div>
          </div>
          <div class="flexbox-item flexbox-item-4"></div>
          <div>
            <div class="flexbox-item flexbox-item-5"></div>
            <div class="flexbox-item flexbox-item-6"></div>
            <div class="flexbox-item flexbox-item-7"></div>
          </div>
        </div>
       </div>
      </section>
    </>
  );
};

export default MyWork;
