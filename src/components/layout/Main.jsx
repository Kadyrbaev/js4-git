import React, { Fragment } from "react";
import styled from "styled-components";
import MainImg from "../assets/images/mainImg.avif";
import MealsTitle from "../Meals/MealsTitle";
import MealsItems from "../Meals/MealsItems";
const Main = () => {
  return (
    <Fragment>
      <MainContainer>
        <MainImage src={MainImg} alt="MainImg" />
      </MainContainer>
      <MealsTitle />
      <MealsItems />
    </Fragment>
  );
};


const MainContainer = styled.main`
  width: 100%;
  height: 650px;
`;

const MainImage = styled.img`
  margin-top: 62px;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
  border-radius: 0 0 18px 18px;
`;

export default  Main;
