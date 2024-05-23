import React, { useEffect } from "react";
import "./index.css";

const AssociatesPartners = () => {
  const logos = [
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      alt: "Google",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg",
      alt: "Netflix",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      alt: "Apple",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg",
      alt: "Paypal",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg",
      alt: "Amazon",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_carlogo.svg",
      alt: "Toyota",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      alt: "Microsoft",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
      alt: "Samsung",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      alt: "IBM",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg",
      alt: "Tesla",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png",
      alt: "Uber",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
      alt: "Nike",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png",
      alt: "Instagram",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
      alt: "Adidas",
    },
  ];

  useEffect(() => {
    const scrollContainer = document.querySelector(".scroll-container");
    let scrollAmount = 0;
    const scrollStep = 1;

    const scrollHorizontally = () => {
      scrollAmount += scrollStep;
      if (scrollAmount >= scrollContainer.scrollWidth) {
        scrollAmount = 0;
      }
      scrollContainer.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
      requestAnimationFrame(scrollHorizontally);
    };

    requestAnimationFrame(scrollHorizontally);
  }, []);

  return (
    <div className="partners-section">
      <h2 className="partners">ASSOCIATIONS & PARTNERS</h2>
      <div className="scroll-container">
        <div className="scroll-content">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="imgLogos"
            />
          ))}
          {logos.map((logo, index) => (
            <img key={logos.length + index} src={logo.src} alt={logo.alt} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AssociatesPartners;
