import React from "react";
import "./index.css";
import Video from "../Video";
import Intro from "../Intro";
import Exibitors from "../Exibitors";
import User from "../User";
import DiscoverCourses from "../DiscoverCourses";
import HighlightsYoutubeVideos from "../HighlightsYoutubeVideos";
import Testimonials from "../Testimonials";
import AssociatesPartners from "../AssociatesPartners";
import Footer from "../Footer";

const Home = () => (
  <div>
    <Video />
    <div className="homeinnerContainer">
      <section id="about">
      <Intro />
      </section>
      <section>
      <Exibitors />
      </section>
      <section>
      <User />
      </section>
      <section id="services">
      <DiscoverCourses />
      </section>
      <section>
      <HighlightsYoutubeVideos />
      </section>
      <section id="example">
      <Testimonials/>
      </section>
      <section>
      <AssociatesPartners />
      </section>
    </div>
    <section id="contact" >
    <Footer/>
    </section>
  </div>
);

export default Home;