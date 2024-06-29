import React from "react";
import styled from "styled-components";

const Backdrop = styled.div`
  background-color: #000000;
  opacity: 50%;
  width: 100%;
  height: 100%;
  z-index: 2;
  top: 0px;
  left: 0px;
  position: fixed;
`;

const Container = styled.div`
  background-color: azure;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 0 20px 0.02px #6a6a6a;
  /* top: 100px;
  left: 380px; */
  position: fixed;
  z-index: 3;
`;

function Modal(props) {
  return (
    <div>
      <Backdrop onClick={props.onclose}></Backdrop>
      <Container style={props}>{props.children}</Container>
    </div>
  );
}

export default Modal;
