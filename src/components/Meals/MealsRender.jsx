import React from "react";
import styled from "styled-components";
import MealsForm from "./MealsForm";
import Card from "../UI/Card";

const ContainerFoods = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: center;
  & h2 {
    margin: 0;
  }
  & p {
    margin: 0;
  }
  & span {
    font-size: 20px;
    font-weight: 600;
  }
`;

function MealsRender({ id, name, description, price }) {
  return (
    <Card>
      <ContainerFoods>
        <h2>{name}</h2>
        <p>{description}</p>
        <span>{`${price}${"сом"}`}</span>
      </ContainerFoods>
      <MealsForm
        key={id}
        id={id}
        name={name}
        description={description}
        price={price}
      />
    </Card>
  );
}

export default MealsRender;
