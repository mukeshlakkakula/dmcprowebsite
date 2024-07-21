import React, { useState, useEffect } from "react";
import "./index.css";
import Video from "../Video";
import Intro from "../Intro";
import Exibitors from "../Exibitors/exibitors";
import User from "../User";
import DiscoverCourses from "../DiscoverCourses";
import HighlightsYoutubeVideos from "../HighlightsYoutubeVideos";
import Testimonials from "../Testimonials";
import AssociatesPartners from "../AssociatesPartners";
import Footer from "../Footer";

const Home = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showScroll]);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".scroll-animation");
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        const isMobile = window.innerWidth <= 768; // Adjust breakpoint as needed
        const offset = isMobile ? 100 : 150; // Adjust offset for mobile
        if (elementTop < windowHeight - offset) {
          element.classList.add("animate");
        } else {
          element.classList.remove("animate");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="home">
      <div>
        <section>
          <Video />
        </section>
        <section id="about">
          <Intro />
        </section>
        <div className="homeinnerContainer">
          <section className="scroll-animation">
            <Exibitors />
          </section>
          <section id="contact" className="scroll-animation">
            <User />
          </section>
          <section id="services" className="scroll-animation">
            <DiscoverCourses />
          </section>
          <section className="scroll-animation">
            <HighlightsYoutubeVideos />
          </section>
          <section id="example" className="scroll-animation">
            <Testimonials />
          </section>
          <section className="scroll-animation">
            <AssociatesPartners />
          </section>
        </div>
        <section className="scroll-animation">
          <Footer />
        </section>
        {showScroll && (
          <div className="scrollTop" onClick={scrollTop}>
            <span>↑</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;
