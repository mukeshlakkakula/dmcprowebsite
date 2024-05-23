import React from "react";
import "./Featured.css";
import FeaturedCard from "./Featuredcard";
import styled from "styled-components";

const Exibitors = () => {
  return (
    <>
      <section className="featured">
        <Heading>OUR SPOTLIGHTS</Heading>
        <MainCon>
          <FeaturedCard />
        </MainCon>
      </section>
    </>
  );
};

export default Exibitors;

const MainCon = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  gap: 5px;
  width: 90%;
  margin-left: 5%;
`;
const Heading = styled.h1`
  text-align: center;
  color: #0b0757;
  font-weight: bold;
  font-size: 40px;

  @media (max-width: 768px) {
    font-size: 25px;
    padding-left: 15px;
  }
`;
