import React from "react";
import Slider from "react-slick";
import "./index.css";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 2,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true, // Pause on hover for better user experience
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
    ],
  };

  return (
    <div>
      <h2 className="heading">Client Testimonials</h2>
      <section className="feedback">
        <div className="container">
          <p className="paragraph">
            <span className="blink" style={{ color: "white" }}>
              Hear from our clients about their experience with Dmcpro.in's
              digital marketing services.
            </span>
          </p>
        </div>
        <Slider {...settings} className="voices ">
          {testimonials.map((testimonial, index) => (
            <div className="m-auto">
              <div className="voice  m-auto" style={{ width: "90%" }}>
                <div className="profile-detail ">
                  <img
                    className="profile-img"
                    src={testimonial.img}
                    alt={testimonial.name}
                  />
                  <div className="detail">
                    <h3>{testimonial.name}</h3>
                    <p className="client-info">{testimonial.company}</p>
                  </div>
                </div>
                <p className="testimonial">{testimonial.text}</p>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
};

const testimonials = [
  {
    img: "https://res.cloudinary.com/djlhr4ycg/image/upload/v1715321728/photo1_kkdz1j.jpg",
    name: "Mukesh",
    company: "YY Paneer Group",
    text: '"Dmcpro.in transformed our digital marketing strategy with their personalized content and engagement through nano influencers. We\'ve seen a significant boost in our sales and customer engagement.."',
  },
  {
    img: "https://res.cloudinary.com/djlhr4ycg/image/upload/v1715321791/photo2_fegcer.jpg",
    name: "Zoyo Alex",
    company: "Tourism Marketing Ventures",
    text: '"Working with Dmcpro.in was a game-changer for our tourism marketing efforts. Their use of micro influencers and targeted content creation delivered impressive results, driving authentic engagement and customer interest."',
  },
  {
    img: "https://res.cloudinary.com/djlhr4ycg/image/upload/v1715321836/photo3_qtn4wj.jpg",
    name: "Pradeep Sai",
    company: "Experience Management Solutions",
    text: '"Dmcpro.in\'s expertise in customer experience management and digital marketing helped us create engaging content that resonated with our audience.Their approach has significantly enhanced our online presence."',
  },
  {
    img: "https://res.cloudinary.com/djlhr4ycg/image/upload/v1715321877/photo4_q57ryq.jpg",
    name: "Sai Charan",
    company: "Event Management Pro",
    text: '"The targeted and personalized marketing strategies provided by Dmcpro.strategy with their personalized content and engagement through nano influencers in were instrumental in the success of our recent events.."',
  },
  {
    img: "https://res.cloudinary.com/djlhr4ycg/image/upload/v1715321931/photo5_vzwxgp.jpg",
    name: "Emma Davis",
    company: "Destination Development Corp",
    text: '"Dmcpro.in exceeded our expectations with their strategic digital marketing services. Their personalized approach and effective influencer partnerships significantly improved our destination\'s visibility and appeal."',
  },
  {
    img: "https://res.cloudinary.com/djlhr4ycg/image/upload/v1715321999/photo6_iph1yy.jpg",
    name: "Emily Parker",
    company: "Tourism Management Group",
    text: '"Choosing Dmcpro.in for our digital marketing needs was a great decision. Their comprehensive and customized marketing strategies have helped us reach a wider audience and achieve our business goals more effectively."',
  },
];

export default Testimonials;
