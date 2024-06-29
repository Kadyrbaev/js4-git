import React from 'react'
import styled from 'styled-components'

const InputTag = styled.input`
    width: ${(props) => props.width || "120px"};
    height: ${(props) => props.height || "25px"};
    border: 2px solid gray; 
    outline: none;
    border-radius: 8px;
    font-size: 18px;
    font-weight: 500;
    text-align: center;
`

function Input(props) {
  return (
    <div>
        <InputTag style={props} type={props.type} value={props.value} onChange={props.onChange} min = "1" max = "10" />
    </div>
  )
}

export default Input