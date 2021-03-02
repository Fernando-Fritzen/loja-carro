import React from 'react';
import styled from 'styled-components';

import CarImg from '../../img/car-info2.png';

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
    margin-left: 10px;
    padding-left: 7.5%;

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
    padding-left: 10px;
    padding-right: 5%;


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

function CarInfo2() {
  return (
      <WrapperInfo>
          <DivDescription>
            <h1>
                Veja essa caracteristica <span>2</span>
            </h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            </p>
          </DivDescription>
          <DivCar>
            <img src={CarImg} />
          </DivCar>
      </WrapperInfo>
  );
}

export default CarInfo2;