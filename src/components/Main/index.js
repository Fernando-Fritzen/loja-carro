import React from 'react';
import styled from 'styled-components';
import CarImg from '../../img/principal.png';

const MainWrapper = styled.main`
    width: 100vw;
    height: calc(100vh - 60px);
    display: flex;
    padding-left: 5%;
    color: #A4ADB8;


`;

const DivInfo = styled.div`
  width: 40%;
  height: 100%;
  padding-right: 10px;

  h1 {
    font-size: 5vw;
    color: rgba(0,0,0,0.8);
    font-weight: bold;
    margin-top: 15vh;
  }

  p {
    font-size: 2.5vh;
  }

`;

const DivImg = styled.div`
  width: 60%;
  height: 100%;
  position: relative;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Button = styled.button`
  padding: 10px 0;
  font-size: 15pt;
  color: #0A4DF2;
  font-weight: 700;
  background: transparent;
  border: none;

  &:hover {
    font-size: 16pt;
  }
`;

function Main() {
  return (
      <MainWrapper>
        <DivInfo>
          <h1>
            BEM VINDO AO SUPER CARROS
          </h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <Button>
            Baixar App
          </Button>
        </DivInfo>
        <DivImg>
          <img src={CarImg}/>
        </DivImg>
      </MainWrapper>
  );
}

export default Main;