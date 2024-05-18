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
      <Intro />
      <Exibitors />
      <User />
      <DiscoverCourses />
      <HighlightsYoutubeVideos />
      <Testimonials />
      <AssociatesPartners />
    </div>
    <Footer />
  </div>
);

export default Home;
