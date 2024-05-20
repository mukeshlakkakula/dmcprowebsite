// import React from "react";

// const Navbar = () => {
//   return <div>Navbar</div>;
// };

// export default Navbar;

import { Link } from "react-router-dom";

import "./index.css";
import { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
const Navbar = (props) => {
  const [isFixed, setIsFixed] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 65) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  const savedRoute = localStorage.getItem("currentRoute");
  console.log(savedRoute);
  const [activeRoute, setActiveRoute] = useState(savedRoute);
  const [activeModal, setActiveModal] = useState(false);

  const modalVal = (
    <div className="modal_content">
      <span>Success! We'll call you back shortly.</span>
      <span onClick={() => setActiveModal(false)}>&times;</span>
    </div>
  );
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    setActiveModal(false);
  }, [activeRoute]);

  const Showmodal = activeModal ? modalVal : "";
  return (
    <div className="heaaderWithShowModal">
      <div className={`headerContainer ${isFixed ? "fixed" : ""}`}>
        <div>
          <Link
            to="/"
            onClick={() => {
              setActiveRoute("home");
            }}
          >
            <img
              value="home"
              className="logoIcon"
              src="./DMCpro.logo-removebg-preview.png"
              alt="logo"
            />
          </Link>
        </div>
        <div>
          <button
            id="openModalBtn"
            className="reqBtn02 "
            value="Request Call Back"
          >
            <FaPhoneAlt /> Get Started
          </button>
        </div>

        <div className="headerInsideContainer">
          <Link
            to="/"
            onClick={() => {
              setActiveRoute("home");
            }}
          >
            <button
              className={activeRoute === "home" ? "activeBtn" : "notActiveBtn"}
              value="home"
            >
              Home
            </button>
          </Link>
          <Link
            to="/Services"
            onClick={() => {
              setActiveRoute("Services");
            }}
          >
            <button
              className={
                activeRoute === "Services" ? "activeBtn" : "notActiveBtn"
              }
              value="Services"
            >
              Services
            </button>
          </Link>
          {/* <Link to="/whatwilllearn">
            <button
              className={
                activeRoute === "whatwilllearn" ? "activeBtn" : "notActiveBtn"
              }
              value="whatwilllearn"
              onClick={() => {
                setActiveRoute("whatwilllearn");
              }}
            >
              What Will Learn
            </button>
          </Link>
          <Link to="/placementassistance">
            <button
              className={
                activeRoute === "placementassistance"
                  ? "activeBtn"
                  : "notActiveBtn"
              }
              value="placementassistance"
              onClick={() => {
                setActiveRoute("placementassistance");
              }}
            >
              Placement Assistance
            </button>
          </Link> */}
          <Link
            to="/customers"
            onClick={() => {
              setActiveRoute("customers");
            }}
          >
            <button
              className={
                activeRoute === "customers" ? "activeBtn" : "notActiveBtn"
              }
              value="customers"
            >
              customers
            </button>
          </Link>
        </div>
        <div>
          <button
            id="openModalBtn"
            className="reqBtn "
            value="Request Call Back"
          >
            <FaPhoneAlt /> Get Started
          </button>
        </div>
      </div>
      {Showmodal}
    </div>
  );
};

export default Navbar;
