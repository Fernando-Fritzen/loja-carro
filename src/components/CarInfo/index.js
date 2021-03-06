import React from 'react';
import styled from 'styled-components';

import CarImg from '../../img/car-info.png';

const WrapperInfo = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    color: #A4ADB8;
`;

const DivCar = styled.div`
    width: 45%;
    height: 100%;
    position: relative;

    img {
        position: absolute;
        width: 90%;
        height: 90%;
        object-fit: contain;
    }
`;

const DivDescription = styled.div`
    width: 45%;
    height: 100%;
    padding-left: 10%;

    h1 {
        font-size: clamp(2rem, 4vw, 5rem);
        color: rgba(0,0,0,0.8);
        font-weight: bold;

        span {
            color: #0A4DF2;
        }
        
    }

    p {
        font-size: clamp(1rem, 1.1rem, 1.3rem);
    }
`;

function CarInfo() {
  return (
      <WrapperInfo>
          <DivCar>
            <img src={CarImg} />
          </DivCar>
          <DivDescription>
            <h1>
                Veja essa caracteristica <span>1</span>
            </h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            </p>
          </DivDescription>
      </WrapperInfo>
  );
}

export default CarInfo;