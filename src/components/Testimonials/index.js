import React from "react";
import "./index.css";

const Testimonials = () => {
  return (
    <div>
      <h2 className="heading">Client Testimonials</h2>
      <section className="feedback">
        <div className="container">
          {/* <h4 className="label"></h4>
        <h2 className="heading">What Our Clients Say</h2> */}
          <p className="paragraph">
            <span className="blink" style={{ color: "red" }}>
              Hear from our clients about their experience with Dmcpro.in's
              digital marketing services.
            </span>
          </p>
        </div>
        <div className="voices">
          <div className="voice">
            <div className="profile-detail">
              <img
                className="profile-img"
                src="https://res.cloudinary.com/djlhr4ycg/image/upload/v1715321728/photo1_kkdz1j.jpg"
                alt=""
              />
              <div className="detail">
                <h3>Mukesh</h3>
                <p className="client-info">YY Paneer Group</p>
              </div>
            </div>
            <p className="testimonial">
              "Dmcpro.in transformed our digital marketing strategy with their
              personalized content and engagement through nano influencers.
              We've seen a significant boost in our sales and customer
              engagement. Highly recommended!"
            </p>
          </div>
          <div className="voice">
            <div className="profile-detail">
              <img
                className="profile-img"
                src="https://res.cloudinary.com/djlhr4ycg/image/upload/v1715321791/photo2_fegcer.jpg"
                alt=""
              />
              <div className="detail">
                <h3>Zoyo Alex</h3>
                <p className="client-info">Tourism Marketing Ventures</p>
              </div>
            </div>
            <p className="testimonial">
              "Working with Dmcpro.in was a game-changer for our tourism
              marketing efforts. Their use of micro influencers and targeted
              content creation delivered impressive results, driving authentic
              engagement and customer interest."
            </p>
          </div>
          <div className="voice">
            <div className="profile-detail">
              <img
                className="profile-img"
                src="https://res.cloudinary.com/djlhr4ycg/image/upload/v1715321836/photo3_qtn4wj.jpg"
                alt=""
              />
              <div className="detail">
                <h3>Pradeep Sai</h3>
                <p className="client-info">Experience Management Solutions</p>
              </div>
            </div>
            <p className="testimonial">
              "Dmcpro.in's expertise in customer experience management and
              digital marketing helped us create engaging content that resonated
              with our audience. Their strategic approach has significantly
              enhanced our online presence."
            </p>
          </div>
          <div className="voice">
            <div className="profile-detail">
              <img
                className="profile-img"
                src="https://res.cloudinary.com/djlhr4ycg/image/upload/v1715321877/photo4_q57ryq.jpg"
                alt=""
              />
              <div className="detail">
                <h3>Sai Charan</h3>
                <p className="client-info">Event Management Pro</p>
              </div>
            </div>
            <p className="testimonial">
              "The targeted and personalized marketing strategies provided by
              Dmcpro.strategy with their personalized content and engagement
              through nano influencers in were instrumental in the success of
              our recent events. Their innovative use of influencers and
              creative content was key to our outreach."
            </p>
          </div>
          <div className="voice">
            <div className="profile-detail">
              <img
                className="profile-img"
                src="https://res.cloudinary.com/djlhr4ycg/image/upload/v1715321931/photo5_vzwxgp.jpg"
                alt=""
              />
              <div className="detail">
                <h3>Emma Davis</h3>
                <p className="client-info">Destination Development Corp</p>
              </div>
            </div>
            <p className="testimonial">
              "Dmcpro.in exceeded our expectations with their strategic digital
              marketing services. Their personalized approach and effective
              influencer partnerships significantly improved our destination's
              visibility and appeal."
            </p>
          </div>
          <div className="voice">
            <div className="profile-detail">
              <img
                className="profile-img"
                src="https://res.cloudinary.com/djlhr4ycg/image/upload/v1715321999/photo6_iph1yy.jpg"
                alt=""
              />
              <div className="detail">
                <h3>Emily Parker</h3>
                <p className="client-info">Tourism Management Group</p>
              </div>
            </div>
            <p className="testimonial">
              "Choosing Dmcpro.in for our digital marketing needs was a great
              decision. Their comprehensive and customized marketing strategies
              have helped us reach a wider audience and achieve our business
              goals more effectively."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
