import React from "react";
import styled from "styled-components";
import ButtonOrderBusket from "../buttonOrderBusket/ButtonOrderBusket";

const Header = (props) => {
  return (
    <Container>
      <Parent>
        <Title>Order-Box</Title>
        <ButtonOrderBusket openBusket = {props.openBusket}/>
      </Parent>
    </Container>
  );
};

const Container = styled.header`
  width: 1200px;
  height: 70px;
  position: fixed;
  top: 0;
  background-color: #A0522D;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Poppins", sans-serif;
  z-index: 1;
  border-radius: 0 0 10px 10px;
`;

const Parent = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h2`
  color: white;
`;

export default Header;
