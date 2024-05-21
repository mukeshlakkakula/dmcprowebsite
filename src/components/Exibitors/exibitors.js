import React from "react";
import "./Featured.css";
import FeaturedCard  from "./Featuredcard";
import styled from 'styled-components';





const Exibitors = () => {
  return (
    <>
      <section className='featured'>
      <Heading>Exibitors</Heading>
        <MainCon>
          <FeaturedCard />
        </MainCon>
      </section>
    </>
  )
}

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
    font-size: 30px;
    color: gray;
    font-weight: bold;
    margin: 20px;
    margin-left: 0px;
    
`;