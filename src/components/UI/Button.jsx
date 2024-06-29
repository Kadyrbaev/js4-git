import React from "react";
import styled from "styled-components";

const ButtonAdd = styled.button`
  width: ${(props) => props.width || "140px"};
  height: ${(props) => props.height || "35px"};
  color: white;
  background-color: #9932cc;
  border-radius: 8px;
  border: 2px solid gray;
  font-size: 20px;
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    transform: scale(1.009);
    background-color: #aa01ff;
    box-shadow: 0 0 10px 1px black;
  }
  &:active {
    transform: scale(0.9);
  }
`;

function Button(props) {
  return (
    <div>
      <ButtonAdd style={props} onClick={props.onClick}>
        {props.children}
      </ButtonAdd>
    </div>
  );
}

export default Button;
