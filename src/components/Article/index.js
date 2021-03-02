import React from 'react';
import styled from 'styled-components';
import CarInfo from '../CarInfo';
import CarInfo2 from '../CarInfo2';



const ArticleWrapper = styled.article`
    width: 100vw;
    height: 100vh;
    padding: 0 5% 0 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

function Article() {
  return (
      <ArticleWrapper>
          <CarInfo />
          <CarInfo2 />
      </ArticleWrapper>
  );
}

export default Article;