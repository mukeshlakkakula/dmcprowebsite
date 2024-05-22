import React from "react";
import one from "./images/icon_exhibitor.png";
import two from "./images/icon_visitor.png";
import three from "./images/icon_vip_delegates.png";
import four from './images/icon_exhibit_area.png';
import five from './images/icon_state_tourism.png';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const BoldAnimatedDiv = styled(animated.div)`
  font-weight: bold;
  text-align: center;
  color: red;  /* Change color to red */
`;

function Number({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 10, friction: 40 }, // Adjusted for slower animation
  });
  return <BoldAnimatedDiv>{number.to((n) => n.toFixed(0) + '+')}</BoldAnimatedDiv>;
}

const featured = [
  {
    cover: one,
    name: "Exhibitors",
    total: 1222,
  },
  {
    cover: two,
    name: "Trade Visitors",
    total: 2000,
  },
  {
    cover: three,
    name: "VIPs & Delegates",
    total: 1224,
  },
  {
    cover: four,
    name: "Exhibit Area(SQM)",
    total: 5005,
  },
  {
    cover: five,
    name: "State Tourism Boards",
    total: 2000,
  }
];

const FeaturedCard = () => {
  return (
    <>
      {featured.map((items, index) => (
        <Main key={index}>
          <ItemImg src={items.cover} alt='exhibits' />
          <Head>{items.name}</Head>
          <Number n={items.total} />
        </Main>
      ))}
    </>
  );
}

export default FeaturedCard;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
`;

const Head = styled.h4`
  font-size: 16px;
  margin-top: 10px;
  text-align: center;
  color: black;
  font-weight: bold;
`;

const ItemImg = styled.img`
  width: 20px;
`;
