import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./index.css";
import { IoIosNavigate } from "react-icons/io";
const Intro = () => {
  const carousel = (
    <div className="imageCoroselContainer">
      <Carousel
        showArrows={false}
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        // showIndicators={true}
        swipeable={true}
        stopOnHover={false}
        showThumbs={false}
        className="carousel"
      >
        <div className="slider01">
          <div className="img001">
            <img
              src="https://d2kh7o38xye1vj.cloudfront.net/wp-content/uploads/2023/10/ownership-rights.webp"
              alt="img001"
            />
          </div>
          <div>
            <h3 className="head3">Ownership rights</h3>
            <p className="para3">
              Own complete rights to the content created and monetise it as per
              your needs
            </p>
          </div>
        </div>

        <div className="slider01">
          <div className="img001">
            <img
              src="https://d2kh7o38xye1vj.cloudfront.net/wp-content/uploads/2023/10/powerful-content.webp"
              alt="img001"
            />
          </div>
          <div>
            <h3 className="head3">Relatable content</h3>
            <p className="para3">
              Project your brand’s core values through relatable stories crafted
              for conversions
            </p>
          </div>
        </div>

        <div className="slider01">
          <div className="img001">
            <img
              src="https://d2kh7o38xye1vj.cloudfront.net/wp-content/uploads/2023/10/creator-available.webp"
              alt="img001"
            />
          </div>
          <div>
            <h3 className="head3">Top-rated creators</h3>
            <p className="para3">
              Elevate your brand with the most influential creators handpicked
              for your brand
            </p>
          </div>
        </div>

        <div className="slider01">
          <div className="img001">
            <img
              src="https://d2kh7o38xye1vj.cloudfront.net/wp-content/uploads/2023/10/high-roi.webp"
              alt="img001"
            />
          </div>
          <div>
            <h3 className="head3">Maximum ROI</h3>
            <p className="para3">
              Reach millions of consumers with cost per reach being as low as 70
              paise
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );

  return (
    <div>
      <div className="IntroFullContainer">
        <div className="introLeftContainer">
          <h1 className="influHeading">
            Influencer marketing <br className="br001" />
            for every business
          </h1>
          <p className="influpara">
            Get top influencers to promote your brand and{" "}
            <br className="br001" />
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
      </div>{" "}
      {carousel}
    </div>
  );
};

export default Intro;
