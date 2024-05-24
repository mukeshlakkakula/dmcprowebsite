import React from "react";
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

const Home = () => (
  <div>
    <Video />
    <section id="about">
      <Intro />
    </section>

    <div className="homeinnerContainer">
      <section>
        <Exibitors />
      </section>
      <section className="sectionA1">
        <User />
      </section>
      <section id="services" className="sectionA1">
        <DiscoverCourses />
      </section>
      <section className="sectionA1">
        <HighlightsYoutubeVideos />
      </section>
      <section id="example">
        <Testimonials />
      </section>
      <section>
        <AssociatesPartners />
      </section>
    </div>
    <section id="contact" className="sectionA1">
      <Footer />
    </section>
  </div>
);

export default Home;
