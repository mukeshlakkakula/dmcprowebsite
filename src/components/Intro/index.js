import React from "react";
import "./index.css";
import { IoIosNavigate } from "react-icons/io";
const Intro = () => {
  return (
    <div className="IntroFullContainer">
      <div className="introLeftContainer">
        <h1 className="influHeading">
          Influencer marketing
          <br />
          for every business
        </h1>
        <p className="influpara">
          Get top influencers to promote your brand and <br />
          supercharge your sales starting at just ₹5000
        </p>
        <div className="influButtonsContainer">
          <button className="btn btn-success butonB1 ">Explore now</button>
          <button className="btn viewsmpbtn">
            View sample <IoIosNavigate />
          </button>
        </div>
        <div className="influButtonsContainer">
          <div>
            <h3 className="influHead3">7 Million+</h3>
            <h6 className="infludes3">influencers onboard</h6>
          </div>
          <span
            style={{
              border: "1px dashed #707070",
              opacity: "0.39",
              height: "78px",
            }}
          >
            {" "}
          </span>
          <div>
            <h3 className="influHead3">70%</h3>
            <h6 className="infludes3">better visibility</h6>
          </div>
        </div>
      </div>
      <div className="imageSocialContainer">
        <img
          className="imgSocial"
          src="https://d2kh7o38xye1vj.cloudfront.net/wp-content/uploads/2023/10/top-banner.webp"
          alt="social"
        />
      </div>
    </div>
  );
};

export default Intro;
